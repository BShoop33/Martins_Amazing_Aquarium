/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import {useFish} from './FishDataProvider.js';
import {Fish} from './Fish.js';

export const FishList = () => {
    const unholyFish = makeUnworth();
    addFishToDom(unholyFish);
}

const addFishToDom = (whichFishArray) => {
    const contentElement = document.querySelector(".FishList");
    let fishHTMLRepresentation ="";
    for(const oneThingFromTheSea) of whichFishArray){
        fishHTMLRepresentation += Fish(oneThingFromTheSea);
    }

    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `

}
    
    
    
    
    
    
    
    
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".FishList");
    let fishHTMLRepresentation = "";
    
    
    const fishes = useFish()

    /*iterates through the allTheFish array and saves a copy of those objects into
    a new const variable called fish. Then logs those copies into the console*/
    for (const fish of fishes){
        fishHTMLRepresentation += Fish(fish);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
            ${fishHTMLRepresentation}
    `
}