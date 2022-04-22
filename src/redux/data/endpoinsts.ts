const endpoints = {
    me: {
        url: '/me',
        queryString: {role: 'admin'}, // admin | cook
        method: 'GET'
    },
    recipes: {
        url: '/recipes',
        queryString: {
            sort: 'new', // new | most_popular
            filters: '', //  unknown for now,
            
        },
        method: 'GET',
        notes: 'Please do consider pagination for this query'
    },
    myrecipies: {
        url: '/myrecipes',
        queryString: {
            sort: 'new', // new | most_popular
            filters: '' //  unknown for now
        },
        method: 'GET',
        notes: 'Please do consider pagination for this query'
    },
    toprecipies: {
        url: '/toprecipes',
        method: 'GET',
    },
    suggestedCooks: {
        url: '/suggestedcooks',
       
        method: 'GET',
        notes: 'Please do consider pagination for this query'
    },
    mycooks: {
        url: '/mycooks',
        method: 'GET',
        notes: 'Please do consider pagination for this query'
    },
    updateRecipe: {
        url: '/recipe',
        method: 'PUT',
        data: {} // update the recipe with provided keys
    },
    profilePerformance: {
        url: '/profileanalytics',
        method: 'GET',
        queryString: {
            sort: 'profile_visits', // recipe_views, recipe_saves,recipe_reviews,profile_visits
            duration: 'monthly', //monthly,weekly,yearly
        }

    }
}