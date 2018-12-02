<template>
    <f7-page color-theme="pink" :style="{ 'background':'url('+bg+') center', 'background-size':'cover' }" >

        <!--=====================================================================================-->
        <f7-navbar  sliding>
            <f7-nav-left>
                <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
            </f7-nav-left>
            <f7-nav-title>Com Amor Cupcakes</f7-nav-title>

            <f7-nav-right>
                <f7-link>
                    <f7-icon material="person"/> </f7-icon>
                </f7-link>
            </f7-nav-right>

        </f7-navbar>
        <!--=====================================================================================-->

        <br/>

        <f7-swiper>

            <f7-swiper-slide>
                <div class="img-logo">
                    <img src="../img/logo.png"/>
                </div>
            </f7-swiper-slide>

        </f7-swiper>


        <f7-block class="bloco-buttons" strong>

            <f7-row tag="p">
                <f7-col width="100" >
                    <f7-button  fill raised href="/login/"> <f7-icon material="home" size="18" ></f7-icon> Entrar</f7-button>
                </f7-col>
            </f7-row>

            <f7-row tag="p">

                <f7-col width="50" tag="span">
                    <f7-button raised href="/encomendas/" bg-color="white" > <f7-icon material="mail" size="18" ></f7-icon> Encomendas</f7-button>
                </f7-col>

                <f7-col width="50">
                    <f7-button raised href='/cupcakes/'bg-color="white" > <f7-icon material="cake" size="18" ></f7-icon> Cupcakes </f7-button>
                </f7-col>


            </f7-row>

            <f7-row>

                <f7-col width="50">
                    <f7-button raised href="/empresa/" bg-color="white" > <f7-icon material="account_balance" size="18" ></f7-icon> Empresa </f7-button>
                </f7-col>

                <f7-col width="50">
                    <f7-button raised href="/contato/" bg-color="white" > <f7-icon material="phone" size="18" ></f7-icon> Contato </f7-button>
                </f7-col>


            </f7-row>

        </f7-block>


    </f7-page>
</template>
<script>

    import bg from "../img/bg/bg1.jpg";

    export default {
        data: function () {
            return {
                bg: bg
            }
        }
    }
</script>
