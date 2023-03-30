class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
            display: block;
        }
        
        .meal-picture {
            width: 100%;
            max-height: 1000px;
            object-fit: cover;
            object-position: center;
        }
        
        .meal-info {
            padding: 24px;
        }
        
        .meal-info > h2 {
            font-weight: lighter;
        }
        
        .meal-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
            text-align:justify;
        }
        </style>
        <img class="meal-picture" src="${this._meal.strMealThumb}" alt="Meal Picture">
        <div class="meal-info">
            <h1>${this._meal.strMeal}</h1>
            <h2>${this._meal.strArea}</h2><br>
            <p><b>How to Make :</b></p>
            <p>${this._meal.strInstructions}</p>
        </div>`;
    }
}

customElements.define("meal-item", MealItem);