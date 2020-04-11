(this["webpackJsonpcovid-data"]=this["webpackJsonpcovid-data"]||[]).push([[0],{116:function(e,t,a){e.exports=a(202)},121:function(e,t,a){},199:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),s=(a(121),a(76)),c=a(27),l={pt:{translation:a(97)},en:{translation:a(98)}};s.a.use(c.b).init({resources:l,fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});s.a;var u=a(9),d=a(10),h=a(18),m=a(19),f=a(99),p=a.n(f),v=a(54),g=new(function(){function e(){Object(u.a)(this,e),this.baseData={},this.listeners={}}return Object(d.a)(e,[{key:"callListeners",value:function(e){var t=this;(this.listeners[e]||[]).forEach((function(a){return a(t.baseData[e])}))}},{key:"registerListener",value:function(e,t){this.listeners[e]?this.listeners[e]=this.listeners[e].concat(t):this.listeners[e]=[t],this.baseData[e]&&t(this.baseData[e])}},{key:"resisterData",value:function(e,t){this.baseData[e]=t,this.callListeners(e)}},{key:"registerDataFromTransformation",value:function(e,t,a){t="string"===typeof t?this.baseData[t]:t,this.baseData[e]=a(t),this.callListeners(e)}},{key:"getData",value:function(e){return this.baseData[e]}},{key:"removeData",value:function(e){delete this.baseData[e]}}]),e}()),b=a(72),w=a.n(b);function y(e){return e.confirmed.locations.reduce((function(e,t){var a,n,o=t.country;return e[o]?e[o]={name:o,cases:t.latest+e[o].cases,history:(a=t.history,n=e[o].history,Object.keys(a).forEach((function(e){return n[e]=n[e]?n[e]+a[e]:a[e]})),n)}:e[o]={name:o,cases:t.latest,history:t.history},e}),{})}function E(e,t,a){return function(n){var o=Object.keys(n).map((function(a){var o=e?e(a)(n):a;return t?t(a)(n,o):o}));return a?a(o):o}}function x(e){return function(t,a){var n=new Date(a[0]);return a.map((function(e,t){return a.slice(t,t+7)})).filter((function(e){return 7===e.length})).map((function(a){var o=a.map((function(a){var o=t[e].history[a],r=Math.log(o);return[(new Date(a).getTime()-n.getTime())/864e5+7,r]})),r=w.a.linear(o).equation[0],i=parseFloat((100*(Math.pow(Math.E,r)-1)).toFixed(2));return{name:e,daysSinceFirstCase:o[0][0],expGrowth:i}}))}}function C(e){return[].concat.apply([],e)}function k(e){var t=function(e){return 100*(Math.pow(Math.E,e)-1)},a=[{slice:"0% - 10%",condition:function(e){return t(e)<=10},count:0},{slice:"10% - 20%",condition:function(e){return t(e)>10&&t(e)<=20},count:0},{slice:"20% - 30%",condition:function(e){return t(e)>20&&t(e)<=30},count:0},{slice:"30% - 40%",condition:function(e){return t(e)>30&&t(e)<=40},count:0},{slice:"40% - 50%",condition:function(e){return t(e)>40&&t(e)<=50},count:0},{slice:"50% - 60%",condition:function(e){return t(e)>50&&t(e)<=60},count:0},{slice:"60% - 100%",condition:function(e){return t(e)>60&&t(e)<=100},count:0},{slice:"100%>",condition:function(e){return t(e)>100},count:0}],n=0;return e.forEach((function(e){if(e!==[]){var t=w.a.linear(e).equation[0];n++,function(e){a.forEach((function(t){t.condition(e)&&t.count++}))}(t)}})),a.forEach((function(e){delete e.condition,e.percent=Number((e.count/n).toFixed(4))})),a}var D=E((function(e){return function(t){var a=Object.keys(t[e].history).filter((function(a){return t[e].history[a]>0}));return a.length>=7?(a.sort((function(e,t){return e=new Date(e),t=new Date(t),e.getTime()-t.getTime()})),a):[]}}),(function(e){return function(t,a){var n=new Date(a[0]);return a.slice(-7).map((function(a){var o=t[e].history[a],r=Math.log(o);return[(new Date(a).getTime()-n.getTime())/864e5,r]}))}})),S=function(e){return E(function(e){return function(t){return function(a){var n=Object.keys(a[t].history).filter((function(n){return a[t].history[n]>0&&a[t].cases>=e}));return n.sort((function(e,t){return e=new Date(e),t=new Date(t),e.getTime()-t.getTime()})),n}}}(e),x,C)},O=a(205),j=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onChange=function(t){var a=parseInt(t.target.value);Number.isInteger(a)&&a>=0&&e.props.onChange(a)},e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement(O.a,Object.assign({},this.props,{maxLength:11,onChange:this.onChange}))}}]),a}(n.Component),T=a(204),N=a(208),A=new(function(){function e(){var t=this;Object(u.a)(this,e),this.onLanguageChange=function(e){t.callbacks.forEach((function(t){return t(e)}))},this.callbacks=[]}return Object(d.a)(e,[{key:"addCallback",value:function(e){this.callbacks.push(e)}}]),e}()),G=o.a.createElement(N.a,{style:{fontSize:24},spin:!0}),z=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).updateChartSize=function(){var t=document.getElementById("expGrowthContainer");e.chart.changeSize(t.offsetWidth-10,t.offsetHeight>=350?t.offsetHeight-10:350)},e.setAxis=function(){e.chart.scale("daysSinceFirstCase",{ticks:[7,20,40,60],alias:e.props.t("content.expGrowth.chart.xAxis")}),e.chart.axis("daysSinceFirstCase",{title:{offset:20,style:{fill:"#aaa"}}}),e.chart.scale("expGrowth",{alias:e.props.t("content.expGrowth.chart.yAxis")}),e.chart.axis("expGrowth",{title:{offset:20,style:{fill:"#aaa"}}}),e.chart.tooltip({showCrosshairs:!0}),e.chart.render()},e.updateChart=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e.setState({loaded:!0}),t=S(a)(t),e.chart.changeData(t),e.chart.line().position("daysSinceFirstCase*expGrowth").color("name").shape("smooth").animate(!1),e.setAxis(),e.updateChartSize()},e.onChange=function(t){e.setState({value:t}),clearTimeout(e.timeout),e.timeout=setTimeout((function(){return e.updateChart(g.getData("base"),t)}),200)},e.state={value:1e3,loaded:!1},e}return Object(d.a)(a,[{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateChartSize)}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateChartSize);var e=document.getElementById("expGrowthContainer");this.chart=new v.Chart({container:e,height:0,renderer:"canvas"}),g.registerListener("base",this.updateChart),A.addCallback(this.setAxis)}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"chart",id:"expGrowthContainer"},this.state.loaded?null:o.a.createElement(T.a,{indicator:G})),o.a.createElement("div",{className:"inpFlex"},o.a.createElement("span",null,this.props.t("content.expGrowth.chart.numCases"),": "),o.a.createElement(j,{value:this.state.value,onChange:this.onChange})))}}]),a}(n.Component),q=Object(c.d)()(z),I=(a(199),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"InfoPanel container"},o.a.createElement("h2",null,this.props.title),this.props.children)}}]),a}(n.Component)),F=o.a.createElement(N.a,{style:{fontSize:24},spin:!0}),L=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).updateChartSize=function(){var t=document.getElementById("growthRatePieContainer");e.chart.changeSize(t.offsetWidth-10,t.offsetHeight>=350?t.offsetHeight-42:350)},e.updateData=function(t){e.setState({loaded:!0}),t=k(t),e.chart.changeData(t),e.chart.interval().position("percent").color("slice").tooltip("slice*percent",(function(e,t){return{name:e,value:"".concat((100*t).toFixed(0),"%")}})).adjust("stack"),e.chart.interaction("element-active"),e.chart.coordinate("theta",{radius:.75}),e.chart.tooltip({showTitle:!1,showMarkers:!1}),e.chart.render(),e.updateChartSize()},e.state={loaded:!1},e}return Object(d.a)(a,[{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateChartSize)}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateChartSize);var e=document.getElementById("growthRatePieContainer");this.chart=new v.Chart({container:e,height:0,renderer:"canvas"}),this.chart.coordinate("theta",{radius:.75}),g.registerListener("lastWeekSlice",this.updateData)}},{key:"render",value:function(){return o.a.createElement("div",{id:"growthRatePieContainer",className:"container chart"},this.state.loaded?null:o.a.createElement(T.a,{indicator:F}))}}]),a}(n.Component),M=a(209),P=a(206),R=a(28),B=a(207),W=M.a.Header;function V(){var e=Object(c.c)(),t=e.t,a=e.i18n;return o.a.createElement(W,{className:"header"},o.a.createElement("div",{className:"headerContent"},o.a.createElement("span",{className:"title"},t("header.title")),o.a.createElement("a",{className:"link",rel:"noopener noreferrer",target:"_blank",href:"https://www.medrxiv.org/content/10.1101/2020.03.19.20037192v1"},t("header.article"))),o.a.createElement(B.a.Group,{defaultValue:"en",size:"small",onChange:function(e){var t=e.target.value;a.changeLanguage(t,A.onLanguageChange)}},o.a.createElement(B.a.Button,{value:"en"},"EN"),o.a.createElement(B.a.Button,{value:"pt"},"PT")))}var J=M.a.Footer,H=M.a.Content,U=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).showDataDisclaimer=function(){n.setState({modalVisible:!0})},n.handleCancel=function(){n.setState({modalVisible:!1})},n.state={modalVisible:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){p.a.all().then((function(e){g.registerDataFromTransformation("base",e,y),g.registerDataFromTransformation("lastWeekSlice","base",D)}))}},{key:"render",value:function(){var e=this;return o.a.createElement(c.a,null,(function(t){return o.a.createElement(M.a,{className:"App"},o.a.createElement(V,null),o.a.createElement(H,{className:"content"},o.a.createElement("div",{className:"mainContainer"},o.a.createElement("div",{className:"row"},o.a.createElement(q,null),o.a.createElement(I,{title:t("content.expGrowth.title")},o.a.createElement("p",null,t("content.expGrowth.content.1"),o.a.createElement("br",null),o.a.createElement("br",null),t("content.expGrowth.content.2"),o.a.createElement("br",null),o.a.createElement("br",null),t("content.expGrowth.content.3"),o.a.createElement("br",null),o.a.createElement("br",null),t("content.expGrowth.content.4")))),o.a.createElement("div",{className:"row"},o.a.createElement(I,{title:t("content.growthRate.title")},o.a.createElement("p",null,t("content.growthRate.content.1"),o.a.createElement("br",null),o.a.createElement("br",null),t("content.growthRate.content.2"),o.a.createElement("br",null),o.a.createElement("br",null),t("content.growthRate.content.3"))),o.a.createElement(L,null))),o.a.createElement(P.a,{title:t("footer.disclaimer.title"),visible:e.state.modalVisible,footer:null,onCancel:e.handleCancel},o.a.createElement("p",null,t("footer.disclaimer.content.1"),o.a.createElement("br",null),o.a.createElement("a",{className:"link",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/CSSEGISandData/COVID-19"},"JHU CSSE 2020"),".",o.a.createElement("br",null),o.a.createElement("br",null),t("footer.disclaimer.content.2"),o.a.createElement("br",null),o.a.createElement("a",{className:"link",rel:"noopener noreferrer",target:"_blank",href:"https://www.medrxiv.org/content/10.1101/2020.03.19.20037192v1"},"Trend analysis of the COVID-19 pandemic in China and the rest of the world, Albertine Weber, Flavio Iannelli, Sebastian Gon\xe7alves"),"."))),o.a.createElement(J,{className:"footer"},o.a.createElement("span",null,t("footer.madeBy")),o.a.createElement("span",null,o.a.createElement(R.a,{type:"link",onClick:e.showDataDisclaimer},t("footer.disclaimer.title")))))}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e){e.exports=JSON.parse('{"header":{"title":"An\xe1lise sobre as tend\xeancias da pandemia de COVID-19","article":"Artigo"},"content":{"expGrowth":{"title":"Taxa de crescimento exponencial","content":{"1":"A taxa, em percentual de aumento di\xe1rio de casos, \xe9 mostrada na figura da esquerda como uma curva que varia no tempo, a partir do primeiro dia do surto de cada pais.","2":"Passando o mouse por cima da uma curva se visualiza o nome do pa\xeds junto com dois n\xfameros: o da esquerda indica o dia a contar do inicio local da epidemia, o da direita o valor da taxa de crescimento desse dia. Na janela pode ser definido um filtro num\xe9rico, para mostrar os pa\xedses com mais casos que o valor do filtro.","3":"Os valores das taxas foram estimados a partir da m\xe9dia em um intervalo dos \xfaltimos sete dias de casos. (mais detalhes no link do artigo). Por conta disso, cada curva inicia-se no 7\xba dia de casos e o \xfaltimo valor de cada curva corresponde a taxa m\xe9dia do dia atual. O padr\xe3o diferente de cada curva \xe9 um forte indicativo da forma em que cada pais enfrentou e enfrenta a epidemia. Destaca-se o pico de It\xe1lia no dia 26 (24 Fevereiro 2020), quando a taxa de aumento di\xe1rio chegou a ser de 140%. Isso significa que os casos desse dia duplicaram em apenas 17hs!","4":"Com poucas exce\xe7\xf5es (China, S. Korea ou US), o pico da taxa, geralmente maior do que 50%, aparece como uma carater\xedstica comum a quase todos os pa\xedses com mais de 5000 casos at\xe9 30 de Mar\xe7o. Depois do forte decl\xednio posterior, correspondente a implanta\xe7\xe3o de medidas de mitiga\xe7\xe3o (como fechamento de escolas e com\xe9rcios ou at\xe9 mesmo quarentenas e controle de movimento), segue uma descida suave (a valores entre 10-20%). Na nossa interpreta\xe7\xe3o, isso indica a necessidade de medidas mais fortes e de controles mais estritos para conseguir o controle da epidemia."},"chart":{"numCases":"N\xfamero de Casos Acumulados","xAxis":"Dias a partir do primeiro caso","yAxis":"Taxa de crescimento percentual"}},"growthRate":{"title":"Taxa de crescimento por dia","content":{"1":"No chart da direita podemos ver a distribui\xe7\xe3o da taxa de crescimento atual entre os pa\xedses. O tamanho e valor da por\xe7\xe3o representam o percentual de pa\xedses com uma taxa dentro de um intervalo.","2":"Os pa\xedses que conseguiram controlar a epidemia (como China e South Korea), se mantendo em regime sub-exponencial (ou com R0 < 1), ou aparentam estar pr\xf3ximos de controlar (Jap\xe3o), tem taxas inferiores a 10% (por\xe7\xe3o azul, 0-10%). Por\xe9m, quase todos os pa\xedses est\xe3o ou continuam em regime de crescimento exponencial, independentemente da data inicial do surto, com taxas acima de 10%.","3":"Para se ter uma melhor ideia do significado de uma taxa superior a 10%, uma taxa de 20%, por exemplo, significa que o n\xfamero de casos duplica em menos de 4 dias. E que se esse cen\xe1rio for mantido por um m\xeas, um pa\xeds que hoje tem 1000 casos passar\xe1 a ter 237000!"}}},"footer":{"madeBy":"Feito por Jo\xe3o Pedro Pianta, Albertine Weber e Sebastian Gon\xe7alves","disclaimer":{"title":"Esclarecimento sobre Uso de Dados","content":{"1":"Os dados utilizados s\xe3o atualizados diariamente do Data Repository by Center for Systems Science and Engineering.","2":"As analises completas e m\xe9todos utilizados est\xe3o publicados em"}}}}')},98:function(e){e.exports=JSON.parse('{"header":{"title":"Trend analysis of the COVID-19 pandemic","article":"Article"},"content":{"expGrowth":{"title":"Exponential growth rate","content":{"1":"The rate, as a percentage of daily increase in cases, is shown in the figure on the left as a line that varies over time, starting from the first day of each country\'s outbreak.","2":"Hovering the mouse over a curve, the name of the country is displayed along with two numbers: the one on the left indicates the day from the beginning of the epidemic, the one on the right the value of the growth rate, both at the day pointed by the mouse. A numeric filter can be defined in the window, to show the countries with more cases than the filter value.","3":"The rate values \u200b\u200bwere estimated from the average over an interval of the last seven days of cases. (more details in the article link). Because of this, each curve starts on the 7th day of cases and the last value of each curve corresponds to the average rate for the current day. The different pattern of each curve is a strong indication of the way in which each country faced and faces the epidemic. The peak of Italy stands out on the 26th (24 February 2020), when the daily rate of increase reached 140%. That means the cases of that day doubled in just 17 hours!","4":"With few exceptions (China, S. Korea or US), the peak rate, generally greater than 50%, appears as a feature common to almost all countries with more than 5000 cases by March 30th. After the strong decline later , corresponding to the implementation of mitigation measures (such as closing schools and shops or even quarantines and movement control), follows a smooth decline (at values \u200b\u200bbetween 10-20%). In our interpretation, this indicates the need for stronger measures and stricter controls to achieve control of the epidemic."},"chart":{"numCases":"Number of Accumulated Cases","xAxis":"Days from first case","yAxis":"Groth rate percentage"}},"growthRate":{"title":"Growth rate per day","content":{"1":"The chart on the right shows the distribution of the current growth rate between countries. The portion size and value represent the percentage of countries with a rate within a range.","2":"Countries that managed to control the epidemic (such as China and South Korea), maintaining themselves in a sub-exponential regime (or with R0 <1), or appear to be close to controlling (Japan), have rates below 10% (blue portion, 0-10%). However, almost all countries are or continue to experience exponential growth, regardless of the initial date of the outbreak, with rates above 10%.","3":"To get a better idea of \u200b the meaning of rates, a rate of 20% for example, means that the number of cases doubles in less than 4 days. And that if such rate is maintained for a month, a country that today has 1000 cases will have 237,000!"}}},"footer":{"madeBy":"Made by Jo\xe3o Pedro Pianta, Albertine Weber and Sebastian Gon\xe7alves","disclaimer":{"title":"Data disclaimer","content":{"1":"The data used is daily updated by the Data Repository by the Center for Systems Science and Engineering.","2":"The complete analysis and methods used are published in"}}}}')}},[[116,1,2]]]);
//# sourceMappingURL=main.08991762.chunk.js.map