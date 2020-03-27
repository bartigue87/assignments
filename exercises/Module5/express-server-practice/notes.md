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
