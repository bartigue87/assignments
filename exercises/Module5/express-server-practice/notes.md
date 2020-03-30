# Vocab

    # Route
        * An event listener for http requests

    # Endpoint
        * "/item"

    #Port
        * localhost9000

#Nodemon \* npm install -g nodemon

# Intro to REST API architecture

    # Rest - Representational State Transfer

    # Resource - a single item (object) in a database
    /user/efbvpre34

    # Collection - a collection of similar items in a database
    /users

    # Base (root) URL - http://amazon.com/

    # API Endpoint - http://amazon.com/movies *movies is the endpoint*

    # Parameters - /movies/:movieId

    # Query (query string) - /movies?genre=action&year=1999

    # Client - Front end

    # Server - Intermediary

    # Request Method - CRUD - Get Post Put Delete

    # Middleware - a function that fires on the in between

    # UUID - creates unique IDs
        * npm install uuid

    #Middleware
        #What is it?
            app.use()
                1.(optional) - Mount Path (endpoint)
                2.Callback Func - receives the request, response objects, also the 'next' function
        # The 'next' function
            Moves on to the middleware in the line on our server.

#Status Codes
https://http.cat

    #200 - Successful Request
    #201 - Successful Insert / Update
    #401 - Unauthorized
    #404 - Not Found
    #500 - Server Error

#INTRO to Mongoose
npm install mongoose

#Purpose
Create models
Query data

    #Connect

#Mongoose Schems
Blueprints for out data

#Mongoose Models
Models have a Name, and a Blueprint (Schema)
Models are used to perform the CRUD operations on data created with the Model

#Git Collaboration

    git branch
    git checkout
    git merge

#Start the Repo, clone master

    1. Create git repository on github
    2. Connect/clone locally
    3. Set up the code base
         git add -A
         git commit -m "initial commit"
         git push

    4. Clone the repository
         git clone <pasted command github>
    5. Create a feature branch
         git branch branchname ...like server-setup
    6. CHeckout to that branch
         git checkout server-setup
    7. Commit and push branch to github
         git add -A
         git commit -m "initial commit"
         git push
    8. git checkout master
    9. Pull down remote master
        git pull
    10. Checkout back to local branch
        git checkout server-setup
    11. Merge local master into branch
        git merge --no-ff master
        - if goes well
            shift + zz
        - if goes badly
         - resolve conflicts locally
    12. Push branch to github
         git add -A
         git commit -m "initial commit"
         git push
    13. Create PR on github
    14. Git checkout to master & git pull
