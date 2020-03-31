(this["webpackJsonpcovid-data"]=this["webpackJsonpcovid-data"]||[]).push([[0],{104:function(e,t,a){e.exports=a(180)},109:function(e,t,a){},177:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),s=(a(109),a(10)),c=a(11),l=a(17),u=a(18),d=a(86),m=a.n(d),h=a(47),p=new(function(){function e(){Object(s.a)(this,e),this.baseData={},this.listeners={}}return Object(c.a)(e,[{key:"callListeners",value:function(e){var t=this;(this.listeners[e]||[]).forEach((function(a){return a(t.baseData[e])}))}},{key:"registerListener",value:function(e,t){this.listeners[e]?this.listeners[e]=this.listeners[e].concat(t):this.listeners[e]=[t],this.baseData[e]&&t(this.baseData[e])}},{key:"resisterData",value:function(e,t){this.baseData[e]=t,this.callListeners(e)}},{key:"registerDataFromTransformation",value:function(e,t,a){t="string"===typeof t?this.baseData[t]:t,this.baseData[e]=a(t),this.callListeners(e)}},{key:"getData",value:function(e){return this.baseData[e]}},{key:"removeData",value:function(e){delete this.baseData[e]}}]),e}()),f=a(65),v=a.n(f);function b(e){return e.confirmed.locations.reduce((function(e,t){var a,n,r=t.country;return e[r]?e[r]={name:r,cases:t.latest+e[r].cases,history:(a=t.history,n=e[r].history,Object.keys(a).forEach((function(e){return n[e]=n[e]?n[e]+a[e]:a[e]})),n)}:e[r]={name:r,cases:t.latest,history:t.history},e}),{})}function g(e,t,a){return function(n){var r=Object.keys(n).map((function(a){var r=e?e(a)(n):a;return t?t(a)(n,r):r}));return a?a(r):r}}function E(e){return function(t,a){var n=new Date(a[0]);return a.map((function(e,t){return a.slice(t,t+7)})).filter((function(e){return 7===e.length})).map((function(a){var r=a.map((function(a){var r=t[e].history[a],o=Math.log(r);return[(new Date(a).getTime()-n.getTime())/864e5+7,o]})),o=v.a.linear(r).equation[0],i=parseFloat((100*(Math.pow(Math.E,o)-1)).toFixed(2));return{name:e,daysSinceFirstCase:r[0][0],expGrowth:i}}))}}function y(e){return[].concat.apply([],e)}function C(e){var t=function(e){return 100*(Math.pow(Math.E,e)-1)},a=[{slice:"0% - 10%",condition:function(e){return t(e)<=10},count:0},{slice:"10% - 20%",condition:function(e){return t(e)>10&&t(e)<=20},count:0},{slice:"20% - 30%",condition:function(e){return t(e)>20&&t(e)<=30},count:0},{slice:"30% - 40%",condition:function(e){return t(e)>30&&t(e)<=40},count:0},{slice:"40% - 50%",condition:function(e){return t(e)>40&&t(e)<=50},count:0},{slice:"50% - 60%",condition:function(e){return t(e)>50&&t(e)<=60},count:0},{slice:"60% - 100%",condition:function(e){return t(e)>60&&t(e)<=100},count:0},{slice:"100%>",condition:function(e){return t(e)>100},count:0}],n=0;return e.forEach((function(e){if(e!==[]){var t=v.a.linear(e).equation[0];n++,function(e){a.forEach((function(t){t.condition(e)&&t.count++}))}(t)}})),a.forEach((function(e){delete e.condition,e.percent=Number((e.count/n).toFixed(4))})),a}var w=g((function(e){return function(t){var a=Object.keys(t[e].history).filter((function(a){return t[e].history[a]>0}));return a.length>=7?(a.sort((function(e,t){return e=new Date(e),t=new Date(t),e.getTime()-t.getTime()})),a):[]}}),(function(e){return function(t,a){var n=new Date(a[0]);return a.slice(-7).map((function(a){var r=t[e].history[a],o=Math.log(r);return[(new Date(a).getTime()-n.getTime())/864e5,o]}))}})),D=function(e){return g(function(e){return function(t){return function(a){var n=Object.keys(a[t].history).filter((function(n){return a[t].history[n]>0&&a[t].cases>=e}));return n.sort((function(e,t){return e=new Date(e),t=new Date(t),e.getTime()-t.getTime()})),n}}}(e),E,y)},x=a(183),k=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){var a=parseInt(t.target.value);Number.isInteger(a)&&a>=0&&e.props.onChange(a)},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(x.a,Object.assign({},this.props,{maxLength:11,onChange:this.onChange}))}}]),a}(n.Component),S=a(182),O=a(185),j=r.a.createElement(O.a,{style:{fontSize:24},spin:!0}),N=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).updateChartSize=function(){var t=document.getElementById("expGrowthContainer");e.chart.changeSize(t.offsetWidth-10,t.offsetHeight>=350?t.offsetHeight-10:350)},e.updateChart=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e.setState({loaded:!0}),t=D(a)(t),e.chart.changeData(t),e.chart.line().position("daysSinceFirstCase*expGrowth").color("name").shape("smooth").animate(!1),e.chart.scale("daysSinceFirstCase",{ticks:[7,20,40,60],alias:"Dias a partir do primeiro caso"}),e.chart.axis("daysSinceFirstCase",{title:{offset:20,style:{fill:"#aaa"}}}),e.chart.scale("expGrowth",{alias:"Taxa de crescimento percentual"}),e.chart.axis("expGrowth",{title:{offset:20,style:{fill:"#aaa"}}}),e.chart.tooltip({showCrosshairs:!0}),e.chart.render(),e.updateChartSize()},e.onChange=function(t){e.setState({value:t}),clearTimeout(e.timeout),e.timeout=setTimeout((function(){return e.updateChart(p.getData("base"),t)}),200)},e.state={value:1e3,loaded:!1},e}return Object(c.a)(a,[{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateChartSize)}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateChartSize);var e=document.getElementById("expGrowthContainer");this.chart=new h.Chart({container:e,height:0,renderer:"canvas"}),p.registerListener("base",this.updateChart)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"chart",id:"expGrowthContainer"},this.state.loaded?null:r.a.createElement(S.a,{indicator:j})),r.a.createElement("div",{className:"inpFlex"},r.a.createElement("span",null,"N\xfamero de Casos Acumulados: "),r.a.createElement(k,{value:this.state.value,onChange:this.onChange})))}}]),a}(n.Component),z=(a(177),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"InfoPanel container"},r.a.createElement("h2",null,this.props.title),this.props.children)}}]),a}(n.Component)),q=r.a.createElement(O.a,{style:{fontSize:24},spin:!0}),T=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).updateChartSize=function(){var t=document.getElementById("growthRatePieContainer");e.chart.changeSize(t.offsetWidth-10,t.offsetHeight>=350?t.offsetHeight-42:350)},e.updateData=function(t){e.setState({loaded:!0}),t=C(t),e.chart.changeData(t),e.chart.interval().position("percent").color("slice").label("percent",{content:function(e){return"".concat((100*e.percent).toFixed(0),"%")}}).adjust("stack"),e.chart.interaction("element-active"),e.chart.coordinate("theta",{radius:.75}),e.chart.tooltip(!1),e.chart.render(),e.updateChartSize()},e.state={loaded:!1},e}return Object(c.a)(a,[{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateChartSize)}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateChartSize);var e=document.getElementById("growthRatePieContainer");this.chart=new h.Chart({container:e,height:0,renderer:"canvas"}),this.chart.coordinate("theta",{radius:.75}),p.registerListener("lastWeekSlice",this.updateData)}},{key:"render",value:function(){return r.a.createElement("div",{id:"growthRatePieContainer",className:"container chart"},this.state.loaded?null:r.a.createElement(S.a,{indicator:q}))}}]),a}(n.Component),F=a(186),I=a(184),L=a(25),M=F.a.Header,G=F.a.Footer,P=F.a.Content,W=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).showDataDisclaimer=function(){n.setState({modalVisible:!0})},n.handleCancel=function(){n.setState({modalVisible:!1})},n.state={modalVisible:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){m.a.all().then((function(e){p.registerDataFromTransformation("base",e,b),p.registerDataFromTransformation("lastWeekSlice","base",w)}))}},{key:"render",value:function(){return r.a.createElement(F.a,{className:"App"},r.a.createElement(M,{className:"header"},r.a.createElement("div",{className:"headerContent"},r.a.createElement("span",{className:"title"},"An\xe1lise sobre as tend\xeancias da pandemia de COVID-19"),r.a.createElement("a",{className:"link",rel:"noopener noreferrer",target:"_blank",href:"https://www.medrxiv.org/content/10.1101/2020.03.19.20037192v1"},"Artigo"))),r.a.createElement(P,{className:"content"},r.a.createElement("div",{className:"mainContainer"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null),r.a.createElement(z,{title:"Taxa de crescimento exponencial"},r.a.createElement("p",null,"A taxa, em percentual de aumento di\xe1rio de casos, \xe9 mostrada na figura da esquerda como uma curva que varia no tempo, a partir do primeiro dia do surto de cada pais.",r.a.createElement("br",null),r.a.createElement("br",null),"Passando o mouse por cima da uma curva se visualiza o nome do pa\xeds junto com dois n\xfameros: o da esquerda indica o dia a contar do inicio local da epidemia, o da direita o valor da taxa de crescimento desse dia. Na janela pode ser definido um filtro num\xe9rico, para mostrar os pa\xedses com mais casos que o valor do filtro.",r.a.createElement("br",null),r.a.createElement("br",null),"Os valores das taxas foram estimados a partir da m\xe9dia em um intervalo dos \xfaltimos sete dias de casos. (mais detalhes no link do artigo). Por conta disso, cada curva inicia-se no 7\xba dia de casos e o \xfaltimo valor de cada curva corresponde a taxa m\xe9dia do dia atual. O padr\xe3o diferente de cada curva \xe9 um forte indicativo da forma em que cada pais enfrentou e enfrenta a epidemia. Destaca-se o pico de It\xe1lia no dia 26 (24 Fevereiro 2020), quando a taxa de aumento di\xe1rio chegou a ser de 140%. Isso significa que os casos desse dia duplicaram em apenas 17hs!",r.a.createElement("br",null),r.a.createElement("br",null),"Com poucas exce\xe7\xf5es (China, S. Korea ou US), o pico da taxa, geralmente maior do que 50%, aparece como uma carater\xedstica comum a quase todos os pa\xedses com mais de 5000 casos at\xe9 30 de Mar\xe7o. Depois do forte decl\xednio posterior, correspondente a implanta\xe7\xe3o de medidas de mitiga\xe7\xe3o (como fechamento de escolas e com\xe9rcios ou at\xe9 mesmo quarentenas e controle de movimento), segue uma descida suave (a valores entre 10-20%). Na nossa interpreta\xe7\xe3o, isso indica a necessidade de medidas mais fortes e de controles mais estritos para conseguir o controle da epidemia."))),r.a.createElement("div",{className:"row"},r.a.createElement(z,{title:"Taxa de crescimento por dia"},r.a.createElement("p",null,"No chart da direita podemos ver a distribui\xe7\xe3o da taxa de crescimento atual entre os pa\xedses. O tamanho e valor da por\xe7\xe3o representam o percentual de pa\xedses com uma taxa dentro de um intervalo.",r.a.createElement("br",null),r.a.createElement("br",null),"Os pa\xedses que conseguiram controlar a epidemia (como China e South Korea), se mantendo em regime sub-exponencial (ou com R0 < 1), ou aparentam estar pr\xf3ximos de controlar (Jap\xe3o), tem taxas inferiores a 10% (por\xe7\xe3o azul, 0-10%). Por\xe9m, quase todos os pa\xedses est\xe3o ou continuam em regime de crescimento exponencial, independentemente da data inicial do surto, com taxas acima de 10%.",r.a.createElement("br",null),r.a.createElement("br",null),"Para se ter uma melhor ideia do significado de uma taxa superior a 10%, uma taxa de 20%, por exemplo, significa que o n\xfamero de casos duplica em menos de 4 dias. E que se esse cen\xe1rio for mantido por um m\xeas, um pa\xeds que hoje tem 1000 casos passar\xe1 a ter 237000!")),r.a.createElement(T,null))),r.a.createElement(I.a,{title:"Esclarecimento sobre Uso de Dados",visible:this.state.modalVisible,footer:null,onCancel:this.handleCancel},r.a.createElement("p",null,"Os dados utilizados s\xe3o atualizados diariamente do Data Repository by Center for Systems Science and Engineering.",r.a.createElement("br",null),r.a.createElement("a",{className:"link",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/CSSEGISandData/COVID-19"},"JHU CSSE 2020"),".",r.a.createElement("br",null),r.a.createElement("br",null),"As analises completas e m\xe9todos utilizados est\xe3o publicados em",r.a.createElement("br",null),r.a.createElement("a",{className:"link",rel:"noopener noreferrer",target:"_blank",href:"https://www.medrxiv.org/content/10.1101/2020.03.19.20037192v1"},"Trend analysis of the COVID-19 pandemic in China and the rest of the world, Albertine Weber, Flavio Iannelli, Sebastian Gon\xe7alves"),"."))),r.a.createElement(G,{className:"footer"},r.a.createElement("span",null,"Feito por Jo\xe3o Pedro Pianta, Albertine Weber e Sebastian Gon\xe7alves"),r.a.createElement("span",null,r.a.createElement(L.a,{type:"link",onClick:this.showDataDisclaimer},"Esclarecimento sobre uso de Dados"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.df0c4426.chunk.js.map