<script>
    export let title;
    export let about;
    export let time;
    export let location;
    export let imagelink;
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { calendar, mapMarker } from 'svelte-awesome/icons';

</script>

<div class="event-container" data-aos="fade-up" data-aos-once="true">
    <div class="left">
        <img alt="event poster" data-src={imagelink}  class="lazyload">
    </div>
    <div class="right">
        <h2 class="title">{title}</h2>
        <p class="about">{about}</p>
        <br>
        <p class="location">&nbsp;<Icon data={mapMarker} style="vertical-align: sub;" scale="1.4"/><span>&nbsp;&nbsp; {location}<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Icon data={calendar} style="vertical-align: sub;" scale="1.4"/><span> &nbsp; {time}</span></p>
    </div>
</div>

<style>
    .event-container {
        font-family: 'Red Hat Display', sans-serif;
        display: flex;
        margin-top: 3rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid white;
    }

    .right {
        padding: 0 0 0 2rem;
        font-weight: 100;
    }

    .left {
        max-width: 320px;
        height: auto;
    }


   .left img{
        width: 100%;
        height: auto;
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