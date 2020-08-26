/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fishObject) => {
    return `
        <div class="FishList">
            <div><img  class="fish__image" src="image/${fishObject.image}" alt="${fishObject.species}"/></div>
            <div class="fish__name">${fishObject.name}</div>
            <div class="fish__species">${fishObject.species}</div>
            <div class="fish__length">${fishObject.length}</div>
            <div class="fish__location">${fishObject.harvested}</div>
            <div class="fish__diet">${fishObject.food}</div>
        </div>
    `
}