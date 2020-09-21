<script>
    export let title;
    export let about;
    export let time;
    export let location;
</script>

<div class="event-container">
    <div class="left">
        <img src="Poster.png" alt="event poster">
    </div>
    <div class="right">
        <h2 class="title">{title}</h2>
        <p class="about">{about}</p>
        <p class="time">{time}</p>
        <p class="location">{location}</p>
    </div>
</div>

<style>
    .event-container {
        font-family: 'Red Hat Display', sans-serif;
        display: flex;
        margin-top: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid white;
    }

    .right {
        padding: 0 0 0 2rem;
        font-weight: 100;
    }

    .title {
        font-size: 2rem;
        font-weight: bold;
    }

    @media (max-width:700px) {
        .event-container {
            flex-direction: column;
            font-size: 1rem;
        }

        img {
            height: auto;
            max-width: 200px;
        }

        .title {
            font-size: 1.5rem;
        }

        .right {
            padding: 1rem 0 0 0;
        }
    }
</style>