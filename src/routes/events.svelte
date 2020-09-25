<svelte:head>
    <title>Events</title>
</svelte:head>

<script>
    import { onMount } from 'svelte';
    import EventComponent from '../components/EventComponent.svelte';

    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import 'aos/dist/aos.js';

    import 'lazysizes';
    import 'lazysizes/plugins/parent-fit/ls.parent-fit';

    onMount(() => {
        AOS.init();
    })

</script>


<div class="main-title">EVENTS</div>
<div class="sub-title"> Upcoming Events</div>
<EventComponent title="Git/Github Workshop" about="Learn about git and github." time="12:00AM 1 OCT 2002"
    location="LT6" imagelink="Poster.png"/>
<EventComponent title="Hacktoberfest" about="Contribute to open source to get a free t-shirt" time="12:00AM 1 OCT 2002"
    location="LT5" imagelink="Poster.png"/>
<div class="sub-title"> Past Events</div>
<EventComponent title="Informal Meetup" about="Very first meetup for the first year students at JIIT" time="September 19' 2020  @  6:00PM"
    location="Virtual" imagelink="posters/Informal_Meetup.jpg" />



<style>
    .main-title {
        font-size: 3rem;
        font-weight: bold;
    }

    .sub-title {
        font-size: 2rem;
        margin-top: 4rem;
    }

    @media (max-width:700px) {
        .main-title {
            font-size: 2rem;
        }
    }
</style>