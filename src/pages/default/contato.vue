
<template>
    <f7-page color-theme="pink">

        <f7-navbar title="Contato" back-link="Back"></f7-navbar>

        <f7-block>
            <f7-row>
                <f7-col width="100">

                    <GmapMap
                        :center="{lat:-22.7410774, lng:-47.3529652}"
                        :zoom="15"
                        style="width: 100%; height: 400px"
                        >
                        <GmapMarker
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            :clickable="false"
                            :draggable="false"
                            @click="center=m.position"
                            />
                    </GmapMap>

                </f7-col>
            </f7-row>

            <f7-row>

                <h3>Rua Vicente de Carvalho, n° 424 </br> Vala Amorim - Americana</h3>
         
            </f7-row>
        
        </f7-block>

    </f7-page>
</template>
