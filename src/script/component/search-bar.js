class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElementMeal').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            background: #eff0f2;
            width: 100%;
            padding: 20px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            display: flex;
            top: 10px;
            position: sticky;
        }
        .search-container > input {
            background: #eff0f2;
            width: 80%;
            padding: 16px;
            border:0px;
            border-bottom: 1px solid #132238;
        }
        .search-container > button {
            width: 18%;
            cursor: pointer;
            border-radius: 10px;
            margin-left: auto;
            padding: 16px;
            background-color: #132238;
            color: white;
            border: 0;
            font-weight: bold;
            text-transform: uppercase;
        }
        
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
        </style>

        <div id="search-container" class="search-container">
			<input type="search" id="searchElementMeal" placeholder="Cari Makanan">
			<button id="btn-search" type="submit">Search</button>
		</div>
        `;

        this.shadowDOM.querySelector('#btn-search').addEventListener('click', this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);