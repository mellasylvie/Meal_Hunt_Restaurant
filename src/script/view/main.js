import '../component/meal-list.js';
import '../component/footer.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const search_meal = document.querySelector("search-bar");
    const mealListElement = document.querySelector("meal-list");

    const onButtonSearchClicked = async () => {
        try {
            const results = await DataSource.searchMeal(search_meal.value);
            renderResult(results);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        mealListElement.meals = results;
    };

    const fallbackResult = message => {
        mealListElement.renderError(message);
    };

    search_meal.clickEvent = onButtonSearchClicked;
    
};

export default main;