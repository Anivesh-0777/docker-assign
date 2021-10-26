pipeline{
    agent any
    stages
    {
     stage("test")
       {
    		steps
            {
    			bat "npm test" 
    	    }
	}
	    stage("build")
        {
            steps
            {
                bat "docker build -t jenkinimage ."
            }
        }
          stage("push")
        {
            steps
            {
		        bat "docker tag dockerassign dockerid0777/dockerassign"
	            bat "docker push dockerid0777/dockerassign"
            }
        }
      stage("deploy")
        {
            steps
            {
		      bat   "docker pull dockerid0777/dockerassign"
	          bat "docker run -d -p 3000:3000 dockerid0777/dockerassign"
	        }
        }
    }
