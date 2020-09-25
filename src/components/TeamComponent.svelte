<script>
    export let imgSrc;
    export let name;
    export let gitLink;
    export let role;
</script>

<div class="card" data-aos="fade-up" data-aos-once="true">
    <div class="card-author">
        <img alt="author-avatar" data-src={imgSrc}  class="lazyload" />
    </div>
    <header class="card-header">
        <h2>{name}</h2>
    </header>
    <div class="role">
        <p>{role}</p>
    </div>
    <div class="link">
            <a href={gitLink}>Github</a>
            <a href={gitLink}>Twitter</a>
            <a href={gitLink}>LinkedIn</a>
        </div>
</div>

<style>
    .card {
        margin-top:4rem;
        text-align:center;
        font-family: "Roboto Mono",sans-serif;
    }

    .card-header {
        margin-top:1.5rem;
        font-size:1.5rem;
        font-weight: 900;
    }

    .role p {
        color:#6c715d;
    }

    img {
        width:200px;
        border-radius: 50%;
    }

    a {
        color:#ccc;
    } 

    a:hover {
        color:white;
    }

    @media (max-width:700px) {
        .card-header {
            font-size: 1.2rem;
        }
    }
</style>