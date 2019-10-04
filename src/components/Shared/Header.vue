<template>
    <div class="row">
        <div class="col-xs-12">
            <header>
                <h1>Server Status</h1>
<!-- //in this part when i pull vuetify UI component icon says pink. 
So it says pink as text rather than changing the color to pink?
Ok
Thats super odd... Have you tried a different container? sometimes I have to put everything in a <v-app>
Yeah if you haven't installed a-la-carte, then you would need to manually import every component from vuetify
I would be very cautious haha. I tried installing vuetify after I had already started my project and it overrid all of my content.
If you go that route, I would make sure you have commited and pushed your content up to github so you can copy your components and everything afterwards
Good question haha. I haven't done it, but I know that Thor did a zoom session before he got sick where he showed how to manually import each one.
Yeah I always install it, however, it makes your project HUGE and it takes forever to get it served up and running. But it makes writing code much faster to me


This code says pink but on website shows gray. I think it's default.
let me screenshot what it looks
I remember Thor said about a-la-carte installation  I haven't install it
I don't know if that affect it?
It would be easier to get it intalled.
Does that explains why it's not working?
geez..  not cool   Might have to save it back up.
for now what do you do to manaul it? Where how..
Ok you got your a la carte worked now on your VS? -->

            <v-col cols="12" sm="3">
                <v-btn text icon color="pink">
                <v-icon>mdi-heart</v-icon>
                </v-btn>
            </v-col>

            </header>
        </div>
    </div>
</template>

<script>
</script>

<style>

</style>
