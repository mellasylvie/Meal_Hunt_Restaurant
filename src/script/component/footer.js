class FooTer extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
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
                background-color: #132238;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            p {
                padding : 16px;
                text-align : center;
            }
        </style>
        <p>Submission Fundamental Front-End &#169; 2021, Mellania Permata Sylvie</p>`;
    }
}

customElements.define("foo-ter", FooTer);