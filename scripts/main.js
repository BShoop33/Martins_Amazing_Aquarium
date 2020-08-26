/*shows a message in the browser dev tools to confirm the import/export connection 
between main.js and FishDataProvider.js is working properly*/
console.log("Test Message");

/*imports the useFish objects from the FishDataProvider.js file within the scripts 
folder*/
import { useFish,makeUnworthy } from './FishDataProvider.js';
import { FishList } from './FishList.js';

const allTheFish = useFish();

FishList();

makeUnworthy();

/*
makeMostHolyFish();
makeSoldierFish();
*/