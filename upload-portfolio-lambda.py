import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:eu-central-1:685862621175:deployPortfolioTopic')

    try:
        s3 = boto3.resource('s3')

        portfolio_bucket = s3.Bucket('portfolio.liavinci.com')
        build_bucket = s3.Bucket('portfoliobuild.liavinci.com')

        # Instead of working with the file system we are using StringIO to be able to use the file from memory
        portfolio_zip = StringIO.StringIO()

        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for fileName in myzip.namelist():
                obj = myzip.open(fileName)
                portfolio_bucket.upload_fileobj(obj, fileName, ExtraArgs={'ContentType': mimetypes.guess_type(fileName)[0]})
                portfolio_bucket.Object(fileName).Acl().put(ACL='public-read')

        topic.publish(Subject="Portfolio Deployed", Message="Your Portfolio Was Deployed Succcessfully!")

    except:
        topic.publish(Subject="Portfolio Deploy Failed", Message="Your Portfolio Has Failed : ( Please Check Your AWS Console.")
        raise
