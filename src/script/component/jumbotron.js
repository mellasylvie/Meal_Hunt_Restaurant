class JumboTron extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this._pict = 'https://i.postimg.cc/8zpTHvPq/good-food-wallpaper-1366x768-1-2.png';
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            *{
                margin:0;
                padding:0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: ;
                color: white;
                box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 
                0 15px 40px rgba(166, 173, 201, .2);
            }
            meal-pictures {
                width: 100%;
                max-height: 1000px;
                object-fit: cover;
                object-position: center;
            }
        </style>
        <img class="meal-pictures" src="${this._pict}" alt="Image" width=100%>`;
    }
}

customElements.define("jumbo-tron", JumboTron);