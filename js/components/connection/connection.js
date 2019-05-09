import { LitElement, html, css } from 'lit-element';

export default class CheckConnection extends LitElement {
	constructor() {
		super();
		this.tStart = null;
		this.tEnd = null;
        this.image = new Image();
        this.counter = 0;
        this.arrTimes = [];
        this.abortFallback = false;
        this.timeToCount = 3;
        this.threshold = 2000;
        this.offlineTimeout = 3000;
        this.message = "Disconnected";
        this.timeout = () => {};
        this.intervalCheckLatency = 6000;
	}

	static get properties() {
        return {
            timeToCount: {type: Number},
            threshold: {type: Number},
            offlineTimeout: {type: Number},
            message: {type: Text},
            intervalCheckLatency: {type: Number}
        }
    }

    static get styles() {
        return css`       
            .connexion {
                --check-connexion-font-size: 2vh;
                --check-connexion-background-color: #d00000;
                --check-connexion-text-color: #ffffff;
                --check-connexion-text-transform: uppercase;
                --check-connexion-height: 50px;
           
                height: 0;
                opacity: 0;
                position: fixed;
                line-height: var(--check-connexion-height);
                bottom: 0;
                width: 100%;
                background-color: var(--check-connexion-background-color);
                color: var(--check-connexion-text-color);
                text-align: center;
                padding: 5px;
                transition: 1s all ease-in-out;
                overflow: hidden;
            }
            .connexion[active] {
                height: var(--check-connexion-height);
                opacity: 1;
            }
            .isDisconnected {
                font-size: var(--check-connexion-font-size);
                text-transform: var(--check-connexion-text-transform)
            }
        `;
	}

	render() {
        return html`
            <div class="connexion">
                <div class="isDisconnected">${this.message}</div>
            </div>
        `
	}
}

customElements.define('check-connexion', CheckConnexion);
