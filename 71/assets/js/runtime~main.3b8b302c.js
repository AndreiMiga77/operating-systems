(()=>{"use strict";var e,a,c,d,b={},f={};function t(e){var a=f[e];if(void 0!==a)return a.exports;var c=f[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}t.m=b,t.c=f,e=[],t.O=(a,c,d,b)=>{if(!c){var f=1/0;for(i=0;i<e.length;i++){c=e[i][0],d=e[i][1],b=e[i][2];for(var r=!0,o=0;o<c.length;o++)(!1&b||f>=b)&&Object.keys(t.O).every((e=>t.O[e](c[o])))?c.splice(o--,1):(r=!1,b<f&&(f=b));if(r){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[c,d,b]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var b=Object.create(null);t.r(b);var f={};a=a||[null,c({}),c([]),c(c)];for(var r=2&d&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,t.d(b,f),b},t.d=(e,a)=>{for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,c)=>(t.f[c](e,a),a)),[])),t.u=e=>"assets/js/"+({22:"b95e0710",37:"c7d5d005",99:"4e29cae1",254:"19d1f68b",289:"4d19100c",298:"32839693",333:"ddc3a2ab",342:"e4b3f4c8",414:"1ffc5c5f",433:"a02c3c37",446:"45bf5b15",480:"d45c1699",517:"5ebe6805",545:"8c873eb8",584:"d309dd16",612:"54cb2755",651:"ce181f15",662:"2c270c24",675:"a7bc80c4",728:"a210c167",729:"5f61d8dd",748:"0e5263e1",770:"94806a34",805:"b4c6c600",874:"43a80e13",879:"634f10a7",881:"76594300",888:"58013088",912:"2792a332",923:"374a2386",941:"ef7ad362",1078:"ab4aa734",1085:"6bda9475",1092:"5894dc17",1118:"ed8bb14c",1154:"81595474",1169:"0275a3b2",1193:"3e3393a3",1209:"0b4c16a1",1269:"6b326dfe",1280:"6523baf0",1342:"d54ae26b",1349:"ce1cacf4",1370:"1548d5c7",1392:"4c341edc",1410:"007cf997",1419:"d2954435",1437:"34716975",1535:"77ccc4bc",1643:"63c434c4",1693:"de2a6172",1714:"cd9eb992",1727:"8de34314",1759:"6e95b748",1841:"e46ccb2a",1918:"9b172a36",1920:"9ca93cf9",1961:"a2a02518",1992:"efb9ee94",2026:"fdef1607",2036:"05813244",2122:"144ccec8",2213:"463aadd7",2242:"c4d6228b",2278:"23374ca6",2289:"cbc996c5",2306:"ebbaca72",2320:"f9c02a5a",2334:"b5c587af",2360:"1e0b7734",2414:"91300389",2429:"b407248a",2461:"67057010",2464:"392776e2",2608:"009e58e9",2851:"0fa0bebd",3005:"a0d8a9b9",3027:"466eee10",3092:"8d5b82ca",3127:"997e6ee2",3163:"96a31749",3193:"2e030903",3204:"9fb23397",3270:"d5aa9830",3283:"21fd919d",3284:"59ad4d8f",3301:"0d65b9df",3305:"fecbe7cc",3383:"c4b5fe4e",3385:"71907c1d",3403:"a8d01eab",3443:"6a6c901b",3501:"c92640ae",3508:"918b3e21",3537:"fbc1cab8",3625:"a981164d",3686:"97fe4cb3",3700:"7e98c1d8",3706:"747ded37",3748:"2bf71d30",3910:"e78348fd",3946:"51e6f6aa",3972:"1891e676",3986:"58e12640",4035:"924f80ad",4060:"15f618ea",4088:"9e80be64",4126:"e3a89e97",4134:"393be207",4144:"ea490624",4189:"d2c28609",4201:"0438abee",4222:"a0ac5395",4226:"98c71577",4245:"ce0d7f6c",4298:"83d110b2",4338:"c2609098",4363:"579f6061",4467:"ca978206",4512:"34746f8c",4639:"18519af9",4641:"be36e4af",4663:"6c2956d3",4711:"d6fc9938",4757:"d6e5c209",4789:"8ec866b0",4836:"65ab3714",4886:"9f99d3fc",4907:"94458749",4932:"70ad9ac2",4937:"84c3574d",5004:"fc7881a9",5023:"05a859b2",5044:"0f890721",5046:"96f28031",5064:"ade537b6",5077:"cba6b3b7",5093:"c8c74c20",5150:"18331331",5214:"926d7fb7",5232:"6e8edd23",5257:"f687b6c0",5324:"87c32026",5347:"2895d02b",5557:"a191e07d",5623:"6e6dee7f",5652:"2bde47d5",5653:"a315d4d8",5673:"759f92ee",5745:"3f2616b2",5748:"a750af9b",5824:"81ef98dd",5866:"574c2bea",5918:"577dcf4c",6001:"0b9ed770",6020:"b0d828e0",6060:"1144c5b7",6061:"1f391b9e",6082:"09e11287",6142:"a3f724e5",6152:"7f023807",6198:"4dd793a9",6241:"677bfb31",6248:"5d7f8186",6311:"aecc3d85",6410:"4e5d6f3b",6434:"3c30233f",6504:"49cee3f0",6506:"1532e76f",6627:"60905a9d",6669:"ca6b73ec",6822:"59897f9f",6881:"3e1786bf",6889:"31a6b50d",6919:"eae0fc7e",6969:"14eb3368",6976:"2828cd91",7010:"ac5c3a27",7173:"267b5415",7188:"bc288ac4",7271:"cc8fb1fa",7341:"9846e945",7354:"0bbd68f9",7360:"95637cbd",7379:"34154d65",7476:"f54b55c1",7657:"fedaf6f6",7742:"10a540c5",7753:"e88d4a6f",7778:"8f35a413",7824:"3e17b32d",7841:"14580385",7858:"1ef36804",7957:"2641b427",8010:"116d1ea4",8060:"50ed9da3",8065:"35edd654",8088:"eecc784b",8134:"14ee73ae",8138:"01df49d7",8139:"1ae4d9c9",8154:"fd6ef907",8334:"d754500f",8338:"2e088525",8361:"ed4e77cc",8365:"a76a4d9b",8393:"5b157b4b",8401:"17896441",8562:"c137d568",8566:"6e77dc18",8581:"935f2afb",8629:"65687b6f",8661:"625a19b4",8665:"092edce8",8697:"1dccb566",8714:"1be78505",8800:"0c19000f",8815:"71aa02c5",8838:"8209a29d",8864:"d92a3c43",8871:"89d3ad7d",8892:"f6eb4965",8899:"bdd18817",9026:"c34e76e6",9032:"21945c4c",9034:"e0921ae2",9088:"6c180aec",9113:"03dc0c9b",9223:"928d0c11",9278:"e7d4c09c",9332:"21e67fd6",9347:"232c749b",9352:"0277d735",9427:"7801e605",9445:"13be4e0d",9446:"4bb7e290",9462:"31b22d21",9482:"dade2520",9544:"c54826dc",9612:"f4dcab90",9614:"41c8b4f1",9619:"78095748",9620:"8ca589d3",9647:"4c165629",9704:"91ac0728",9759:"81b85611",9795:"3e478533",9979:"2760b5dd"}[e]||e)+"."+{22:"15376b71",37:"56eaa903",99:"84dec3d2",254:"3ffbff14",289:"d79e7909",298:"5890c1f4",333:"80d6dd5b",342:"021071fa",414:"d40d8987",433:"39cfb962",446:"10683ec7",480:"c63fd0a5",517:"ed6d59bd",545:"6e8a2bc9",584:"74641a7d",612:"8e77a3f6",651:"bd18b8ec",662:"d5b1aebc",675:"41e7a257",728:"5189cf46",729:"e65055c9",748:"046fd43c",770:"7d27403e",805:"b794e77b",874:"e83f9be1",879:"f0091188",881:"fce48ec3",888:"b4244420",912:"da4d3fa6",923:"9cae3bed",941:"6d99fd17",1078:"db918999",1085:"23129d61",1092:"fa091241",1118:"e1d13b45",1154:"0079f761",1169:"c08cf557",1193:"f570601b",1209:"b1b1c94c",1269:"db3315b4",1280:"4e6e5d84",1342:"0dd6e335",1349:"c85b46d2",1370:"d84f31bd",1392:"c4be336e",1410:"99c75a50",1419:"64947e90",1437:"3db250c0",1535:"f586932d",1643:"47b7520b",1693:"3af91a0c",1714:"88bbac69",1727:"94ae7859",1759:"1331a7de",1774:"ffe8feb8",1841:"caf8c90a",1918:"1320aafb",1920:"7f98ad3f",1961:"96974417",1992:"8197a2b9",2026:"8b159d80",2036:"b4781bf9",2122:"16491fe4",2213:"ff6c8c73",2242:"c03fdcf1",2278:"ac7b4f1f",2289:"5bf72715",2306:"2a34c3df",2320:"0851a657",2334:"f1304394",2360:"02bea831",2414:"32f89ca1",2429:"9286f0e7",2461:"1f777ab6",2464:"1c1373fc",2608:"23edc717",2851:"6cdae153",3005:"e4d87979",3027:"93693871",3092:"406d8258",3127:"bb3f3ab6",3163:"0f4d4539",3193:"df8ee1af",3204:"78b05b21",3270:"ad84f871",3283:"28938716",3284:"879e5a27",3301:"e28b8880",3305:"24e09434",3383:"52ac7061",3385:"1720aaea",3403:"cc2a462d",3443:"25e63d26",3501:"b025c43d",3508:"1d4670f6",3537:"37990d98",3625:"526a67f6",3686:"8f96e5ba",3700:"3bdb9be3",3706:"e149d483",3748:"79b50f2d",3910:"c0e35d8c",3946:"1008ae0b",3972:"cb8ec1eb",3986:"d71a5b51",4035:"e0a36a1f",4060:"a887bfd7",4088:"1453b67d",4126:"2ac2bbff",4134:"8887b875",4144:"2d378ea9",4189:"b068df28",4201:"8e223f78",4222:"2e8e67d4",4226:"28b05566",4245:"0d7f70c5",4298:"a0c4cd29",4338:"300a3615",4363:"88224b70",4467:"29b5ccf2",4512:"1d74d6f7",4567:"79627e09",4639:"f6ee99d6",4641:"5993bced",4663:"bf4b47fb",4711:"386d4c2d",4757:"d619b736",4789:"d22b39e8",4836:"0609a7ce",4886:"0e51a88b",4907:"72b1bb52",4932:"8d6030a8",4937:"4de480b6",5004:"05cb543f",5023:"2b9b21dd",5044:"64cea3f1",5046:"dcf3ba53",5064:"70214fe1",5077:"c94bb4ef",5093:"e8ab7069",5150:"7e3e320c",5214:"3a8493f0",5232:"8ca3cb06",5257:"79ff2e24",5324:"f7415437",5347:"f136ae13",5557:"8ea3a5c1",5623:"5c053903",5652:"ad5862e1",5653:"3d3cc073",5673:"f71ec74a",5745:"79d146ee",5748:"e34a4c8e",5824:"8dc242df",5866:"3c92dd56",5918:"1aaa19c0",6001:"fd696d7c",6020:"0496c143",6060:"22c0c617",6061:"1d436071",6082:"064de0ce",6142:"5d49117e",6152:"35c81bea",6198:"32980f71",6241:"85557b8d",6248:"0ef4b63a",6311:"ec2d5eba",6410:"66715fac",6434:"b9de2831",6504:"e19195df",6506:"afda9c76",6627:"b752bb9b",6669:"8df468ac",6822:"2118f525",6881:"72238be9",6889:"95d82599",6919:"292f8730",6969:"050c38c9",6976:"6ec26327",7010:"da586848",7173:"cc96d686",7188:"e1e66b7f",7271:"d1c6360a",7341:"84e94272",7354:"fc643165",7360:"3e98f304",7379:"dc74c9df",7476:"4f536daa",7657:"f9f71a73",7742:"0ad23744",7753:"de38bb9c",7778:"ba6f7527",7824:"88f3e6bc",7841:"7a636747",7858:"c2671ace",7957:"489c38cc",8010:"ccb823de",8060:"0322b8cf",8065:"bf5b9221",8088:"34ceefe9",8134:"fc806c6b",8138:"b9e3aa74",8139:"f748861f",8154:"13f094ae",8334:"a06695d3",8338:"35f57d3d",8361:"0e7bd8f8",8365:"cd71d750",8393:"42625521",8401:"3d4a71db",8562:"450e88ff",8566:"17723679",8581:"7ebfc4cd",8629:"0aa46f8a",8661:"38213ace",8665:"c6a64bea",8697:"78d3ab32",8714:"92627245",8800:"eb6bea3a",8815:"aa0ac27b",8838:"615595ee",8864:"4ce189a8",8871:"f05dbe83",8892:"64c0273f",8899:"bc16f57e",9026:"d4e9a44d",9032:"193510d4",9034:"f9ada296",9088:"45f6a06f",9113:"06a31feb",9223:"1167a63e",9278:"fdc27a5c",9332:"b73f7d79",9347:"747ac8fd",9352:"7486c51f",9427:"e82acdc9",9445:"27f20689",9446:"1347e84e",9462:"470dd086",9482:"7db125dc",9544:"7cd681b4",9612:"fecf1aa8",9614:"8ad8d7af",9619:"bb9175e0",9620:"817651a5",9647:"9942b656",9704:"efcf1560",9759:"8b0089b7",9795:"2cfc099b",9979:"52e51162"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},t.l=(e,a,c,b)=>{if(d[e])d[e].push(a);else{var f,r;if(void 0!==c)for(var o=document.getElementsByTagName("script"),n=0;n<o.length;n++){var i=o[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")=="so:"+c){f=i;break}}f||(r=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,t.nc&&f.setAttribute("nonce",t.nc),f.setAttribute("data-webpack","so:"+c),f.src=e),d[e]=[a];var u=(a,c)=>{f.onerror=f.onload=null,clearTimeout(l);var b=d[e];if(delete d[e],f.parentNode&&f.parentNode.removeChild(f),b&&b.forEach((e=>e(c))),a)return a(c)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=u.bind(null,f.onerror),f.onload=u.bind(null,f.onload),r&&document.head.appendChild(f)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/operating-systems/71/",t.gca=function(e){return e={14580385:"7841",17896441:"8401",18331331:"5150",32839693:"298",34716975:"1437",58013088:"888",67057010:"2461",76594300:"881",78095748:"9619",81595474:"1154",91300389:"2414",94458749:"4907",b95e0710:"22",c7d5d005:"37","4e29cae1":"99","19d1f68b":"254","4d19100c":"289",ddc3a2ab:"333",e4b3f4c8:"342","1ffc5c5f":"414",a02c3c37:"433","45bf5b15":"446",d45c1699:"480","5ebe6805":"517","8c873eb8":"545",d309dd16:"584","54cb2755":"612",ce181f15:"651","2c270c24":"662",a7bc80c4:"675",a210c167:"728","5f61d8dd":"729","0e5263e1":"748","94806a34":"770",b4c6c600:"805","43a80e13":"874","634f10a7":"879","2792a332":"912","374a2386":"923",ef7ad362:"941",ab4aa734:"1078","6bda9475":"1085","5894dc17":"1092",ed8bb14c:"1118","0275a3b2":"1169","3e3393a3":"1193","0b4c16a1":"1209","6b326dfe":"1269","6523baf0":"1280",d54ae26b:"1342",ce1cacf4:"1349","1548d5c7":"1370","4c341edc":"1392","007cf997":"1410",d2954435:"1419","77ccc4bc":"1535","63c434c4":"1643",de2a6172:"1693",cd9eb992:"1714","8de34314":"1727","6e95b748":"1759",e46ccb2a:"1841","9b172a36":"1918","9ca93cf9":"1920",a2a02518:"1961",efb9ee94:"1992",fdef1607:"2026","05813244":"2036","144ccec8":"2122","463aadd7":"2213",c4d6228b:"2242","23374ca6":"2278",cbc996c5:"2289",ebbaca72:"2306",f9c02a5a:"2320",b5c587af:"2334","1e0b7734":"2360",b407248a:"2429","392776e2":"2464","009e58e9":"2608","0fa0bebd":"2851",a0d8a9b9:"3005","466eee10":"3027","8d5b82ca":"3092","997e6ee2":"3127","96a31749":"3163","2e030903":"3193","9fb23397":"3204",d5aa9830:"3270","21fd919d":"3283","59ad4d8f":"3284","0d65b9df":"3301",fecbe7cc:"3305",c4b5fe4e:"3383","71907c1d":"3385",a8d01eab:"3403","6a6c901b":"3443",c92640ae:"3501","918b3e21":"3508",fbc1cab8:"3537",a981164d:"3625","97fe4cb3":"3686","7e98c1d8":"3700","747ded37":"3706","2bf71d30":"3748",e78348fd:"3910","51e6f6aa":"3946","1891e676":"3972","58e12640":"3986","924f80ad":"4035","15f618ea":"4060","9e80be64":"4088",e3a89e97:"4126","393be207":"4134",ea490624:"4144",d2c28609:"4189","0438abee":"4201",a0ac5395:"4222","98c71577":"4226",ce0d7f6c:"4245","83d110b2":"4298",c2609098:"4338","579f6061":"4363",ca978206:"4467","34746f8c":"4512","18519af9":"4639",be36e4af:"4641","6c2956d3":"4663",d6fc9938:"4711",d6e5c209:"4757","8ec866b0":"4789","65ab3714":"4836","9f99d3fc":"4886","70ad9ac2":"4932","84c3574d":"4937",fc7881a9:"5004","05a859b2":"5023","0f890721":"5044","96f28031":"5046",ade537b6:"5064",cba6b3b7:"5077",c8c74c20:"5093","926d7fb7":"5214","6e8edd23":"5232",f687b6c0:"5257","87c32026":"5324","2895d02b":"5347",a191e07d:"5557","6e6dee7f":"5623","2bde47d5":"5652",a315d4d8:"5653","759f92ee":"5673","3f2616b2":"5745",a750af9b:"5748","81ef98dd":"5824","574c2bea":"5866","577dcf4c":"5918","0b9ed770":"6001",b0d828e0:"6020","1144c5b7":"6060","1f391b9e":"6061","09e11287":"6082",a3f724e5:"6142","7f023807":"6152","4dd793a9":"6198","677bfb31":"6241","5d7f8186":"6248",aecc3d85:"6311","4e5d6f3b":"6410","3c30233f":"6434","49cee3f0":"6504","1532e76f":"6506","60905a9d":"6627",ca6b73ec:"6669","59897f9f":"6822","3e1786bf":"6881","31a6b50d":"6889",eae0fc7e:"6919","14eb3368":"6969","2828cd91":"6976",ac5c3a27:"7010","267b5415":"7173",bc288ac4:"7188",cc8fb1fa:"7271","9846e945":"7341","0bbd68f9":"7354","95637cbd":"7360","34154d65":"7379",f54b55c1:"7476",fedaf6f6:"7657","10a540c5":"7742",e88d4a6f:"7753","8f35a413":"7778","3e17b32d":"7824","1ef36804":"7858","2641b427":"7957","116d1ea4":"8010","50ed9da3":"8060","35edd654":"8065",eecc784b:"8088","14ee73ae":"8134","01df49d7":"8138","1ae4d9c9":"8139",fd6ef907:"8154",d754500f:"8334","2e088525":"8338",ed4e77cc:"8361",a76a4d9b:"8365","5b157b4b":"8393",c137d568:"8562","6e77dc18":"8566","935f2afb":"8581","65687b6f":"8629","625a19b4":"8661","092edce8":"8665","1dccb566":"8697","1be78505":"8714","0c19000f":"8800","71aa02c5":"8815","8209a29d":"8838",d92a3c43:"8864","89d3ad7d":"8871",f6eb4965:"8892",bdd18817:"8899",c34e76e6:"9026","21945c4c":"9032",e0921ae2:"9034","6c180aec":"9088","03dc0c9b":"9113","928d0c11":"9223",e7d4c09c:"9278","21e67fd6":"9332","232c749b":"9347","0277d735":"9352","7801e605":"9427","13be4e0d":"9445","4bb7e290":"9446","31b22d21":"9462",dade2520:"9482",c54826dc:"9544",f4dcab90:"9612","41c8b4f1":"9614","8ca589d3":"9620","4c165629":"9647","91ac0728":"9704","81b85611":"9759","3e478533":"9795","2760b5dd":"9979"}[e]||e,t.p+t.u(e)},(()=>{var e={5354:0,1869:0};t.f.j=(a,c)=>{var d=t.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var b=new Promise(((c,b)=>d=e[a]=[c,b]));c.push(d[2]=b);var f=t.p+t.u(a),r=new Error;t.l(f,(c=>{if(t.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var b=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+b+": "+f+")",r.name="ChunkLoadError",r.type=b,r.request=f,d[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,c)=>{var d,b,f=c[0],r=c[1],o=c[2],n=0;if(f.some((a=>0!==e[a]))){for(d in r)t.o(r,d)&&(t.m[d]=r[d]);if(o)var i=o(t)}for(a&&a(c);n<f.length;n++)b=f[n],t.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return t.O(i)},c=self.webpackChunkso=self.webpackChunkso||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();