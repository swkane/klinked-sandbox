aws s3 sync build/ s3://{profiles.kenzie.academy} --exclude ".DS_Store/*" --cache-control "max-age=120000" --delete
