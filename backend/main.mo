import Text "mo:core/Text";
import Array "mo:core/Array";
import Map "mo:core/Map";



actor {
  type Restaurant = {
    name : Text;
    cuisine : Text;
    area : Text;
    priceRange : Text;
    description : Text;
    emoji : Text;
  };

  let attractions = Map.empty<Text, Text>();
  let cuisine = Map.empty<Text, Text>();
  let facts = Map.empty<Text, Text>();
  let restaurants = Map.empty<Text, Restaurant>();

  var overview = "No overview available";
  var demographics = "No demographics available";

  public shared ({ caller }) func addOverview(text : Text) : async () {
    overview := text;
  };

  public shared ({ caller }) func addDemographics(text : Text) : async () {
    demographics := text;
  };

  public shared ({ caller }) func addAttraction(name : Text, description : Text) : async () {
    attractions.add(name, description);
  };

  public shared ({ caller }) func addCuisine(dish : Text, description : Text) : async () {
    cuisine.add(dish, description);
  };

  public shared ({ caller }) func addFact(title : Text, fact : Text) : async () {
    facts.add(title, fact);
  };

  public shared ({ caller }) func addRestaurant(restaurant : Restaurant) : async () {
    restaurants.add(restaurant.name, restaurant);
  };

  public query ({ caller }) func getOverview() : async Text {
    overview;
  };

  public query ({ caller }) func getDemographics() : async Text {
    demographics;
  };

  public query ({ caller }) func getAttractions() : async [(Text, Text)] {
    attractions.toArray();
  };

  public query ({ caller }) func getCuisine() : async [(Text, Text)] {
    cuisine.toArray();
  };

  public query ({ caller }) func getFacts() : async [(Text, Text)] {
    facts.toArray();
  };

  public query ({ caller }) func getRestaurants() : async [Restaurant] {
    restaurants.toArray().map(func((_, restaurant)) { restaurant });
  };

  public query ({ caller }) func getRestaurantsCount() : async Nat {
    restaurants.size();
  };
};
