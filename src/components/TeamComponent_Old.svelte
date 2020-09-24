<script>
    export let imgSrc;
    export let name;
    export let about;
    export let gitLink;
    export let twitterLink;
    export let portLink;
</script>

<article class="card">
    <header class="card-header">
        <p>{about}</p>
        <h2>{name}</h2>
    </header>

    <div class="card-author">
        <a class="author-avatar" href={portLink}>
            <img alt="author-avatar" src={imgSrc} />
        </a>
        <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
        </svg>

        <div class="author-name">
            <div class="author-name-prefix">Core Team</div>
        </div>
    </div>
    <div class="tags">
        <a href={gitLink}>GitHub</a>
        <a href={twitterLink}>Twitter</a>
    </div>
</article>

<style>
    .card {
        height: 250px;
        width: 300px;
        min-width: 250px;
        padding: 1.5rem;
        border-radius: 16px;
        background: #17141d;
        box-shadow: -1rem 0 3rem #000;
        display: flex;
        flex-direction: column;
        transition: .2s;
        margin: 0;
        scroll-snap-align: start;
        clear: both;
        position: relative;
    }

    .card:focus-within~.card,
    .card:hover~.card {
        transform: translateX(130px);
    }

    .card:hover {
        transform: translateY(-1rem);
    }

    .card:not(:first-child) {
        margin-left: -130px;
    }


    .card-header {
        margin-bottom: auto;
    }

    .card-header p {
        font-size: 14px;
        margin: 0 0 1rem;
        color: #7a7a8c;
    }

    .card-header h2 {
        font-size: 20px;
        margin: .25rem 0 auto;
        text-decoration: none;
        color: inherit;
        border: 0;
        display: inline-block;
        cursor: pointer;
    }

    .card-header h2:hover {
        background: linear-gradient(90deg, #ff8a00, #e52e71);
        text-shadow: none;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }

    .card-author {
        margin: 3rem 0 0;
        display: grid;
        grid-template-columns: 75px 1fr;
        align-items: center;
        position: relative;
    }

    .author-avatar {
        grid-area: auto;
        align-self: start;
        position: relative;
        box-sizing: border-box;
    }

    .author-avatar img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: block;
        overflow: hidden;
        margin: 16px 10px;
    }

    .author-name {
        grid-area: auto;
        box-sizing: border-box;
    }

    .author-name-prefix {
        font-style: normal;
        font-weight: 700;
        color: #7a7a8c;
    }

    .half-circle {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 48px;
        fill: none;
        stroke: #ff8c00;
        stroke-width: 8;
        stroke-linecap: round;
        pointer-events: none;
    }

    .tags {
        margin: 1rem 0 2rem;
        padding: .5rem 0 1rem;
        line-height: 2;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
    }

    .tags a {
        font-style: normal;
        font-weight: 700;
        font-size: .5rem;
        color: #7a7a8c;
        text-transform: uppercase;
        font-size: .66rem;
        border: 3px solid #28242f;
        border-radius: 2rem;
        padding: .2rem .85rem .25rem;
        position: relative;
    }

    .tags a:hover {
        background: linear-gradient(90deg, #ff8a00, #e52e71);
        text-shadow: none;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-box-decoration-break: clone;
        background-clip: text;
        border-color: white;
    }
</style>