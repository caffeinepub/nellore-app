import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Restaurant {
    area: string;
    name: string;
    description: string;
    emoji: string;
    priceRange: string;
    cuisine: string;
}
export interface backendInterface {
    addAttraction(name: string, description: string): Promise<void>;
    addCuisine(dish: string, description: string): Promise<void>;
    addDemographics(text: string): Promise<void>;
    addFact(title: string, fact: string): Promise<void>;
    addOverview(text: string): Promise<void>;
    addRestaurant(restaurant: Restaurant): Promise<void>;
    getAttractions(): Promise<Array<[string, string]>>;
    getCuisine(): Promise<Array<[string, string]>>;
    getDemographics(): Promise<string>;
    getFacts(): Promise<Array<[string, string]>>;
    getOverview(): Promise<string>;
    getRestaurants(): Promise<Array<Restaurant>>;
    getRestaurantsCount(): Promise<bigint>;
}
