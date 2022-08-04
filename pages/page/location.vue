<template>
<div>
    <Breadcrumbs title="Location" />
    <!-- about section start -->
    <section class="about-page section-b-space" style="padding-top:0px">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <form class="theme-form">
                        <div class="form-row">
                            <div class="col-md-12">
                                <div class="store-locator-heading text-center">
                                    <h2 class="section-header__title">Store Locator</h2>
                                    <b>Select a state below to find a store near you</b>
                                </div>
                            </div>
                            <div class="col-md-12 mt-4">
                                <div class="store-locator-section no-watermark">
                                    <div class="store-locator-grid">
                                    <div class="store-locator-grid_item" data-province="Kedah">
                                        <div class="store-selector-item">
                                            <div class="location-detail">
                                                <strong>
                                                    Liquid Village
                                                </strong>
                                                0176887858 <br>
                                                <address>
                                                    No, 25 &amp; 27, Jalan Pandak Mayah 4, Pusat Bandar Kuah, <br>

                                                    LANGKAWI, 07000<br>
                                                    Kedah , Malaysia <br>

                                                    <div id="business-hour-0">
                                                        <div class="dropdown" data-toggle="0"><span class="dropdown-toggle"><span style="color: green; font-weight: bold;">Open</span></span><span class="caret"></span>
                                                            <ul class="dropdown-menu">
                                                                <li><a>Open for 24 hours</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </address>

                                            </div>
                                            <a class="btn btn--small" href="https://www.google.com/maps/search/?api=1&amp;query=6.321319,99.849846" target="_blank">Navigate</a>
                                        </div>
                                    </div>

                                    <div class="store-locator-grid_item" data-province="Kedah">
                                        <div class="store-selector-item">
                                            <div class="location-detail">
                                                <strong>
                                                    PL SOON HUAT SDN. BHD.
                                                </strong>
                                                0126553228 <br>
                                                <address>
                                                    LOT 945, KAMPUNG BOHOR RENDAM, MUKIM BOHOR <br>

                                                    LANGKAWI, 07000<br>
                                                    Kedah , Malaysia <br>

                                                    <div id="business-hour-1">
                                                        <div class="dropdown" data-toggle="0"><span class="dropdown-toggle"><span style="color: green; font-weight: bold;">Open</span></span><span class="caret"></span>
                                                            <ul class="dropdown-menu">
                                                                <li><a>Open for 24 hours</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </address>

                                            </div>
                                            <a class="btn btn--small" href="https://www.google.com/maps/search/?api=1&amp;query=6.351735,99.736638" target="_blank">Navigate</a>
                                        </div>
                                    </div>

                                </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</div>
</template>

<script>
import Header from '../../components/header/header1'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
export default {
    components: {
        Header,
        Footer,
        Breadcrumbs
    },
}
</script>
<style scoped>
.store-selector-list{
	height: 80vh;
	min-height: 450px; 
	width: 100%;
	overflow: auto;
}
.store-selector-list hr{
	margin: 15px 0;
}
.store-selector-list hr:last-child{
	display: none;
}
.store-locator-section{
	margin-bottom: 30px;
}
.store-locator-section .store-locator-grid{
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	-webkit-flex-wrap: wrap;
	-moz-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	-o-flex-wrap: wrap;
	flex-wrap: wrap;
	margin: -10px;
}
.store-locator-grid_item{
	width: calc(25% - 20px);
	margin: 10px;
}
.store-selector-item{
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-ms-flex-direction: column;
	flex-direction: column;
	padding: 20px;
	border-radius: 10px;
	border: 1px solid #e5e5e5;
	box-shadow: 0 2px 3px 0 rgba(109,109,109,0.2);
	height: 100%;
	font-size: 14px;
}
.store-selector-item address{
	line-height: 1.3;
	font-size: 14px;
}
.store-selector-item .btn{
	display: inline-block;
	margin-top: 1.2em;
	margin-bottom: 0.7em;
	font-size: 12px;
	padding: 4px 8px;
	color: currentColor;
	border: 1px solid currentColor;
	background: transparent;
	box-shadow: none;
}
.store-selector-item .location-detail strong{
	font-size: 18px;
	display: block;
	margin-bottom: 5px;
}
.store-selector-item svg{
	width: 15px;
	height: 15px;
	fill: currentColor;
	margin-top: 5px;
	margin-right: 5px;
}
.store-selector-item:hover{
	background-color: rgba(0, 0, 0, 0.03);
}
.locations-wrapper #googleMap{
	height: 80vh;
	min-height: 450px;
	width: 100%;
}
.locations-wrapper .grid--full{
	overflow: hidden;
}
.locations-wrapper .store-selector-wrapper{
	box-shadow: 3px -3px 3px rgba(0,0,0,0.12);
	position: relative;
	z-index: 2;
}

#googleMap .gm-style img{
	max-width: none;
}
#googleMap label,
#googleMap legend{
	display: inline;
}
#googleMap .gm-style-mtc div{
	width: max-content;
}

.caret {
	display: inline-block;
	width: 0;
	height: 0;
	margin-left: 3px;
	vertical-align: middle;
	border-top: 4px dashed;
	border-top: 4px solid\9;
	border-right: 4px solid transparent;
	border-left: 4px solid transparent;
}

.location-detail .dropdown{
	position: relative;
	cursor: pointer;
	margin-top: 0.6em;
}
.location-detail .dropdown .dropdown-menu{
	display: none;
}
.location-detail .dropdown .dropdown-menu a{
	color: #000;
	text-decoration: none;
}
.location-detail .dropdown[data-toggle='1'] .dropdown-menu{
	position: absolute;
	top: calc(100% + 5px);
	left: 0;
	display: block;
	color: #000;
	background-color: #fff;
	padding: 10px 15px;
	border: 1px solid #ccc;
	box-shadow: 0 2px 3px rgba(0,0,0,0.1);
	border-radius: 3px;
	font-size: 12px;
	line-height: 1.3;
	margin: 0;
	max-width: 230px;
	z-index: 10;
}
.text-center{
	text-align: center;
}
.store-locator-search{
	max-width: 450px;
	margin: 5px auto 40px;
}
.store-locator-heading{
	text-align: center;
}
.store-locator-heading h1{
	font-weight: bold;
	margin-bottom: 20px;
}
.store-locator-heading b{
	margin-bottom: 10px;
}


@media only screen and (max-width: 768px){
	.store-locator-grid_item{
		width: calc(50% - 20px);
	}
	.store-selector-item{
		padding: 15px;
	}
	.store-selector-item .location-detail strong{
		font-size: 16px;
		line-height: 1.3;
	}
	.store-selector-item address{
		font-size: 13px;
	}

	.locations-wrapper .grid--full{
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		flex-wrap: wrap-reverse;
	}
	.store-selector-list{
		height: 35vh;
		min-height: 250px; 
		max-height: 400px; 
		overflow: auto;
	}
	.locations-wrapper #googleMap{
		height: 45vh;
		min-height: 400px;
		width: 100%;
	}
}
</style>