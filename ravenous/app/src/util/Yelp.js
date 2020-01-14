// Yelp developer api credentials
const apiKey = 's3ddoHrAYjz0W1OJ3QqMMuc-AOcen5C-mZg8kO431MdNaiFu6jt3D0fn-ct0yBtmM-s5uN7cYoRXsHRXuqNdjQNdWrY6CoIrcX5vIU51VXV68QxBsvHdT8yBdugcXnYx';

// Yelp functionality
const Yelp = {
    // Retrieve search results
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { 
            headers: {
            Authorization: `Bearer ${apiKey}` 
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                jsonResponse.businesses.map(biz => {
                    // console.log(biz);
                    return {
                        id: biz.id,
                        imageSrc: biz.image_url,
                        name: biz.name,
                        address: biz.location.address1,
                        city: biz.location.city,
                        state: biz.location.state,
                        zipCode: biz.location.zip_code,
                        category: biz.categories[0],
                        rating: biz.rating,
                        reviewCount: biz.review_count,
                    }
                })
            } else {
                console.log("No businesses key in this api");
            }
        });
    }
}

export default Yelp;