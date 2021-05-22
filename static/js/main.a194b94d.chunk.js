(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return st}));var n=a(221),i=a(222),r=a(125),o=a.n(r),c=a(126),s=a.n(c),l=a(124),d=a.n(l),p=a(128),m=a.n(p),j=a(127),b=a.n(j),h=a(7),A=a(37),u=a(133),g=a(116),x=a.n(g),f=a(87),O=a(223),v=Object(n.a)((function(e){var t;return Object(i.a)({container:(t={},Object(h.a)(t,e.breakpoints.down("xl"),{margin:"50px 15%"}),Object(h.a)(t,e.breakpoints.down("lg"),{margin:"50px 8%"}),Object(h.a)(t,e.breakpoints.down("md"),{margin:"50px 5%"}),Object(h.a)(t,e.breakpoints.down("sm"),{margin:"50px 24px"}),Object(h.a)(t,e.breakpoints.down("xs"),{margin:"50px 24px"}),t)})})),y=a(2),z=Object(n.a)((function(e){var t,a;return Object(i.a)({headline:Object(h.a)({fontSize:"2rem"},e.breakpoints.down("sm"),{fontSize:"1.5rem"}),headContainer:(t={paddingLeft:"2rem"},Object(h.a)(t,e.breakpoints.down("sm"),{paddingLeft:"1.5rem"}),Object(h.a)(t,"borderLeft","5px solid ".concat(e.palette.secondary.main)),t),strengthHead:{margin:"60px 0 0",fontSize:"2rem"},fadeIn:{margin:"60px 0",position:"relative","&:hover $overlay":{bottom:0,height:"100%"}},strength:(a={fontSize:"2rem"},Object(h.a)(a,e.breakpoints.down("sm"),{fontSize:"1.5rem"}),Object(h.a)(a,"textAlign","center"),Object(h.a)(a,"padding","1.2rem 0"),a),image:{padding:"1.5rem",maxHeight:"400px",width:"100%",display:"block"},overlay:{position:"absolute",bottom:"100%",left:0,right:0,backgroundColor:e.palette.background.default,overflow:"hidden",width:"100%",height:0,transition:".4s ease"},overlayText:Object(h.a)({position:"absolute",width:"95%",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",fontSize:"2rem"},e.breakpoints.down("sm"),{fontSize:"1.5rem"})})}));var w=function(){var e=z(),t=v(),a=Object(A.a)();return Object(y.jsxs)("div",{className:t.container,children:[Object(y.jsx)("div",{className:e.headContainer,children:Object(y.jsx)(u.a,{className:e.headline,children:a.headline})}),Object(y.jsx)(u.a,{className:e.strengthHead,children:"Strengths & Focus Areas"}),a.strengths.map((function(t,a){return Object(y.jsx)(x.a,{duration:.5,animateIn:"animate__fadeInUp",animateOnce:!0,children:Object(y.jsxs)(f.a,{className:e.fadeIn,elevation:3,children:[a%2===0?Object(y.jsxs)(O.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(y.jsx)(O.a,{item:!0,xs:12,md:8,children:Object(y.jsx)(u.a,{className:e.strength,color:"textSecondary",children:t.short})}),Object(y.jsx)(O.a,{item:!0,xs:12,md:4,children:Object(y.jsx)("img",{src:t.image,className:e.image,alt:t.short})})]}):Object(y.jsxs)(O.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(y.jsx)(O.a,{item:!0,xs:12,md:4,children:Object(y.jsx)("img",{src:t.image,className:e.image,alt:t.short})}),Object(y.jsx)(O.a,{item:!0,xs:12,md:8,children:Object(y.jsx)(u.a,{className:e.strength,color:"textSecondary",children:t.short})})]}),Object(y.jsx)(f.a,{className:e.overlay,children:Object(y.jsx)(u.a,{className:e.overlayText,color:"textSecondary",children:t.long})})]})},a)}))]})},k=a(225);var S=function(e){var t=new Date,a=e.toLocaleDateString("default",{month:"long",year:"numeric"});return e>t?"Expected ".concat(a):a},D=function(e,t){var a,n=e.toLocaleDateString("default",{month:"short",year:"numeric"});return a=t instanceof Date?t.toLocaleDateString("default",{month:"short",year:"numeric"}):t,"".concat(n," - ").concat(a)},B=Object(n.a)((function(e){return{container:{padding:"1.2rem 1.2rem 0"},title:{fontSize:"1.5rem",color:e.palette.primary.main,"&:hover":{textDecoration:"none",cursor:"default"}},school:{fontSize:"1.5rem",position:"relative","&:hover":{textDecoration:"none"},"&::before":{content:"''",position:"absolute",width:"100%",height:"3px",bottom:0,left:0,backgroundColor:e.palette.secondary.main,visibility:"hidden",transform:"scaleX(0)",transition:"all 0.1s linear"},"&:hover::before":{visibility:"visible",transform:"scaleX(1)"}},degree:{padding:"1rem 0 0"},bullets:Object(h.a)({margin:0,padding:"0 1.2rem 1.2rem","& *":{fontSize:"1rem",fontWeight:300}},e.breakpoints.down("sm"),{"& *":{fontSize:".9rem"}})}}));var C=function(){var e=[{degree:"Full Stack Software Engineer Bootcamp",school:"Galvanize",schoolLink:"https://www.galvanize.com/",dateFinished:new Date(2020,9,0),bullets:["Selected from applicant pool of 323 to participate in the first ever Digital Airman Internship Program in the Air Force","Collaborated with other developers on group projects and established a project workflow using Git & GitHub"]},{degree:"Bachelor of Science (B.S.) Information Computer Science",school:"Park University",schoolLink:"https://www.park.edu/",dateFinished:new Date(2022,5,0),bullets:["Tutored 21 students a total of 228 hours in Java and C++ OOP advanced topics, Discrete Math, and Data Structures & Algorithms"]},{degree:"Associate of Applied Science (AAS) Intelligence Studies and Technology",school:"Community College of the Air Force",dateFinished:new Date(2020,8,0)},{degree:"Associate of Applied Science (AAS) Aviation Maintenance Technology",school:"Community College of the Air Force",dateFinished:new Date(2017,5,0)}],t=B(),a=v();return Object(y.jsx)("div",{children:e.map((function(e,n){var i;return Object(y.jsxs)(f.a,{className:[a.container,t.container].join(" "),elevation:3,children:[Object(y.jsx)(u.a,{variant:"h4",variantMapping:{h4:"h3"},children:e.schoolLink?Object(y.jsx)(k.a,{className:t.school,href:e.schoolLink,target:"_blank",rel:"noreferrer",children:e.school}):Object(y.jsx)("div",{className:t.title,children:e.school})}),Object(y.jsx)(u.a,{color:"textSecondary",children:e.dateFinished&&S(e.dateFinished)}),Object(y.jsx)(u.a,{className:t.degree,color:"textSecondary",children:e.degree}),Object(y.jsx)("ul",{className:t.bullets,children:null===(i=e.bullets)||void 0===i?void 0:i.map((function(e,t){return Object(y.jsx)("li",{children:Object(y.jsx)(u.a,{color:"textSecondary",children:e})},t)}))})]},n)}))})},Q=a(25),N=a(224),E=a(17),T=a(0),M=a.n(T),L=a(86),F=(a(164),a.p+"static/media/af-logo.8fa2aa8a.jpg"),U=a.p+"static/media/JD-logo.0fff4756.png",I=a.p+"static/media/levelup-logo.3d6e55e4.png",P=a(231),q=a(232),G=a(233),R=a(234),W=a(235),H=a(236),J=a(237),V=a(238),X=a(239),K=a(240),Y=a(241),Z=a(242),_=a(243),$=a(244),ee=a(245),te=a(246),ae=a(247),ne=a(248),ie=a(249),re=a(250),oe=a(251),ce=a(252),se=a(253),le=a(254),de=a(255),pe=a(256),me=a(257),je=a(258),be=a(259),he=a(260),Ae=a(261);function ue(e,t){return{docker:Object(y.jsx)(P.a,{color:t||"#2496ED",size:e||50}),spring:Object(y.jsx)(q.a,{color:t||"#6DB33F",size:e||50}),react:Object(y.jsx)(G.a,{color:t||"#61DBFB",size:e||50}),angular:Object(y.jsx)(R.a,{color:t||"#DD0031",size:e||50}),node:Object(y.jsx)(W.a,{color:t||"#339933",size:e||50}),git:Object(y.jsx)(H.a,{color:t||"#F05032",size:e||50}),github:Object(y.jsx)(J.a,{color:t||"#181717",size:e||50}),gitlab:Object(y.jsx)(V.a,{color:t||"#FCA121",size:e||50}),mysql:Object(y.jsx)(X.a,{color:t||"#4479A1",size:e||50}),postgresql:Object(y.jsx)(K.a,{color:t||"#336791",size:e||50}),mongodb:Object(y.jsx)(Y.a,{color:t||"#47A248",size:e||50}),java:Object(y.jsx)(Z.a,{color:t||"#007396",size:e||50}),javascript:Object(y.jsx)(_.a,{color:t||"#F7DF1E",size:e||50}),typescript:Object(y.jsx)($.a,{color:t||"#3178C6",size:e||50}),sonarqube:Object(y.jsx)(ee.a,{color:t||"#4E9BCD",size:e||50}),jira:Object(y.jsx)(te.a,{color:t||"#0052CC",size:e||50}),grafana:Object(y.jsx)(ae.a,{color:t||"#F46800",size:e||50}),heroku:Object(y.jsx)(ne.a,{color:t||"#430098",size:e||50}),bootstrap:Object(y.jsx)(ie.a,{color:t||"#7952B3",size:e||50}),nginx:Object(y.jsx)(re.a,{color:t||"#269539",size:e||50}),materialui:Object(y.jsx)(oe.a,{color:t||"#0081CB",size:e||50}),html:Object(y.jsx)(ce.a,{color:t||"#E34F26",size:e||50}),css:Object(y.jsx)(se.a,{color:t||"#1572B6",size:e||50}),rancher:Object(y.jsx)(le.a,{color:t||"#0075A8",size:e||50}),mattermost:Object(y.jsx)(de.a,{color:t||"#0072C6",size:e||50}),python:Object(y.jsx)(pe.a,{color:t||"#3776AB",size:e||50}),aws:Object(y.jsx)(me.a,{color:t||"#146eb4",size:e||50}),kibana:Object(y.jsx)(je.a,{color:t||"#005571",size:e||50}),elasticsearch:Object(y.jsx)(be.a,{color:t||"#005571",size:e||50}),azure:Object(y.jsx)(he.a,{color:t||"#0089D6",size:e||50}),csharp:Object(y.jsx)(Ae.a,{color:t||"#239120",size:e||50})}}var ge=a(30),xe=a(267),fe=a(264),Oe=a(266),ve=a(263),ye=a(118),ze=a.n(ye),we=a(131),ke=a(262),Se=a(6),De=a(117),Be=a.n(De),Ce=Object(Se.a)((function(e){return Object(i.a)({root:{margin:"0px 28px 0px 0px",padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),transition:"color 250ms","&:hover":{color:e.palette.secondary.main,cursor:"pointer"}}})}))((function(e){var t=e.children,a=e.classes,n=e.handleClose,i=Object(we.a)(e,["children","classes","handleClose"]);return Object(y.jsxs)(ke.a,Object(ge.a)(Object(ge.a)({disableTypography:!0,className:a.root},i),{},{children:[Object(y.jsx)(u.a,{variant:"h5",children:t}),Object(y.jsx)(Be.a,{className:a.closeButton,onClick:n,color:"primary",fontSize:"large","data-testid":"close-modal-btn"})]}))})),Qe=M.a.forwardRef((function(e,t){return Object(y.jsx)(ve.a,Object(ge.a)({direction:"up",ref:t},e))})),Ne=Object(n.a)((function(e){return{bullets:{listStyle:"inside",padding:0,fontSize:"1rem","& li":{marginTop:"15px",color:e.palette.text.secondary}},icon:{display:"inline",padding:"10px"},techHeader:{paddingBottom:5,marginBottom:15,borderBottom:"solid ".concat(e.palette.text.secondary," 2px"),transition:"all 250ms","&:hover":{cursor:"pointer"}},expandClose:{float:"right",transform:"rotate(0deg)",transition:"all 250ms"},expandOpen:{float:"right",transform:"rotate(180deg)",transition:"all 250ms"},spaceBot:{marginBottom:20}}}));var Ee=function(e){var t=e.job,a=e.open,n=e.handleClose,i=Ne(),r=M.a.useState(!1),o=Object(Q.a)(r,2),c=o[0],s=o[1];return Object(y.jsxs)(fe.a,{open:a,TransitionComponent:Qe,keepMounted:!0,onClose:n,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(y.jsx)(Ce,{id:"customized-dialog-title",handleClose:n,children:t.title}),Object(y.jsxs)(Oe.a,{children:[t.techUsed&&Object(y.jsxs)("div",{className:i.spaceBot,children:[Object(y.jsx)(u.a,{variant:"h6",className:i.techHeader,children:"Technology Used"}),t.techUsed.map((function(e,t){return Object(y.jsx)("div",{className:["icon-hover",i.icon].join(" "),children:e},t)}))]}),Object(y.jsxs)(u.a,{variant:"h6",color:"textPrimary",className:i.techHeader,onClick:function(){s(!c)},"data-testid":"expand-acc-btn",children:["Accomplishments",Object(y.jsx)(ze.a,{className:c?i.expandOpen:i.expandClose,fontSize:"large"})]}),Object(y.jsx)(xe.a,{in:c,timeout:"auto",unmountOnExit:!0,"data-testid":"exp-expanded-acc",children:Object(y.jsx)("ul",{className:i.bullets,children:t.bullets.map((function(e,t){return Object(y.jsx)("li",{children:e},t)}))})})]})]})},Te=Object(n.a)((function(e){return{customTimeline:{"&::before":{background:e.palette.primary.main}},title:{fontSize:"1.75rem !important",margin:"0px !important"},company:{fontSize:"1.2rem !important",margin:"0px 0px 10px !important",padding:"10px 0"},desc:{margin:"0px 0px 20px !important"},btn:Object(h.a)({display:"inline-block"},e.breakpoints.down(1170),{float:"right"})}}));var Me=function(){var e=Te(),t=Object(E.a)(),a=function(){var e=ue(35);return[{startDate:new Date(2021,3,0),endDate:"Present",title:"Software Engineer",company:"Microsoft",bullets:["To be determined..."],media:"data:image/jpeg;base64,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",techUsed:[e.azure,e.postgresql,e.mysql,e.csharp]},{startDate:new Date(2021,1,0),endDate:new Date(2021,3,0),title:"Cloud Software Engineer Intern",company:"John Deere",bullets:["Designed and deployed automated aggregation for AWS indexes that summarized timeframes of data","Created documentation on how teams could utilize machine learning algorithms to alert when anomalous data is found in real time"],media:U,techUsed:[e.aws,e.python,e.kibana,e.elasticsearch,e.github]},{startDate:new Date(2020,9,0),endDate:new Date(2020,12,0),title:"Full Stack Software Engineer Intern",company:"LevelUP Code Works Software Factory",bullets:["Wrote Java/Spring tests for application backend which increased code coverage by 65% and met agile milestone 1 week ahead of time","Prototyped dashboard with Grafana, Python, PostgreSQL, and Jira/GitLab API to showcase agile metrics such as cycle time & lead time","Gained approval and updated Angular application frontend to official LTS version to ease future development and decrease complexity","Participated in DevSecOps culture by putting security at the forefront of each decision and communicating implications of vulnerabilities","Built and modified Nginx configuration script for application to increase security by blocking XSS/SSH attacks and limiting allowable domains","Modified Docker configuration to use Department of Defense hardened images for application frontend and backend to increase security"],media:I,techUsed:[e.java,e.typescript,e.python,e.node,e.angular,e.spring,e.docker,e.gitlab,e.bootstrap,e.nginx,e.grafana,e.sonarqube,e.rancher,e.mattermost]},{startDate:new Date(2018,9,0),endDate:new Date(2021,2,5),title:"Intelligence Analyst (Fusion Analyst)",company:"United States Air Force",bullets:["Communicated valuable threat warning reports that were further briefed to the National Security Council and POTUS","Responsible for quality control on 1000+ reports per year, obtaining 99% accuracy rate each period, well above standard","Conducted bi-annual job performance, goal setting, and career growth counseling for 3 team members"],media:F,description:"Produced/presented topical high-interest technical & operational intelligence briefings to leadership."},{startDate:new Date(2014,8,0),endDate:new Date(2018,9,0),title:"Aerospace Maintenance Technician",company:"United States Air Force",bullets:["Led team of 4 technicians to recover F-18 on runway; restored international airport to active status 75% faster than average recovery times","Worked with a 10-person team to recover collapsed private plane; cleared international airport runway in less than 1 hour","Responded to last minute pre-flight problem for critical Secretary of Defense mission; troubleshot and repaired C-17 cargo ramp that ensured on time take-off"],media:F,description:"Specialized in troubleshooting, rigging, and repair of C-17 aircraft flight controls, landing gear, ramp & door. Crash recovery personnel."}]}(),n=Object(T.useState)(!1),i=Object(Q.a)(n,2),r=i[0],o=i[1],c=Object(T.useState)(a[0]),s=Object(Q.a)(c,2),l=s[0],d=s[1],p=function(){o(!1)},m={background:t.palette.background.paper,color:t.palette.primary.main,borderTop:"3px solid ".concat(t.palette.secondary.main),boxShadow:"0 8px 6px -6px rgba(0, 0, 0, 0.4)"},j={borderRight:"7px solid ".concat(t.palette.background.paper)},b={background:"#fff",boxShadow:"none"},h={width:"100%",height:"100%",borderRadius:"50%"};return Object(y.jsx)(L.VerticalTimeline,{className:e.customTimeline,animate:!1,children:a.map((function(t,n){return Object(y.jsxs)(L.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:m,contentArrowStyle:j,date:D(t.startDate,t.endDate),iconStyle:b,icon:Object(y.jsx)("img",{src:t.media,style:h,alt:"".concat(t.company," logo"),"data-testid":"timeline-img-".concat(n)}),children:[Object(y.jsx)(u.a,{color:"textPrimary",variant:"h3",className:e.title,children:t.title}),Object(y.jsx)(u.a,{color:"textPrimary",variant:"h4",className:e.company,children:t.company}),t.description&&Object(y.jsx)(u.a,{color:"textSecondary",className:e.desc,"data-testid":"timeline-description-".concat(n),children:t.description}),Object(y.jsx)(N.a,{variant:"contained",color:"primary",className:e.btn,onClick:function(){return function(e){d(a[e]),o(!0)}(n)},"data-testid":"open-modal-btn",children:"Details"}),Object(y.jsx)(Ee,{job:l,open:r,handleClose:p})]},n)}))})},Le=a.p+"static/media/covid-app.9f78fdd3.png",Fe=a.p+"static/media/spacex-app.03eece51.png";var Ue=a(270),Ie=a(271),Pe=a(122),qe=a.n(Pe),Ge=a(123),Re=a.n(Ge),We=a(119),He=a.n(We),Je=a(268),Ve=a(278),Xe=a(65),Ke=a.n(Xe),Ye=a(121),Ze=a.n(Ye),_e=Object(n.a)({actions:{position:"absolute",bottom:0,width:"100%",height:"50px"}});var $e=function(e){var t=e.flipCard,a=e.flipBtn,n=e.code,i=e.live,r=_e();return Object(y.jsx)(Je.a,{className:r.actions,children:Object(y.jsxs)(O.a,{container:!0,justify:"space-between",children:[Object(y.jsxs)(O.a,{item:!0,children:[n&&Object(y.jsx)(Ve.a,{title:"Code",placement:"bottom",enterDelay:250,arrow:!0,children:Object(y.jsx)(N.a,{href:n,size:"small",color:"primary",target:"_blank",rel:"noreferrer",children:Object(y.jsx)(Ke.a,{})})}),i&&Object(y.jsx)(Ve.a,{title:"Live Application",placement:"bottom",enterDelay:250,arrow:!0,children:Object(y.jsx)(N.a,{href:i,size:"small",color:"primary",target:"_blank",rel:"noreferrer",children:Object(y.jsx)(Ze.a,{})})})]}),Object(y.jsx)(O.a,{item:!0,children:Object(y.jsx)(N.a,{onClick:t,size:"small",color:"secondary","aria-label":"Flip project card","data-testid":"card-flip-btn",children:a})})]})})},et=a(269);var tt=function(e){var t=e.accomplishments,a=e.techUsed,i=Object(n.a)((function(e){return{icon:{display:"inline",padding:"10px"},longDesc:{height:a?"220px":"340px"},bullets:{listStyle:"inside",padding:0,margin:0,fontSize:"1rem",maxHeight:a?"180px":"340px",overflowY:"auto","& li":{marginBottom:"8px",color:e.palette.text.secondary}}}}))();return Object(y.jsxs)(et.a,{children:[Object(y.jsxs)("div",{className:i.longDesc,children:[Object(y.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h3",children:"Accomplishments"}),Object(y.jsx)("ul",{className:i.bullets,children:t.map((function(e,t){return Object(y.jsx)("li",{children:e},t)}))})]}),a&&Object(y.jsx)(u.a,{gutterBottom:!0,variant:"h6",component:"h4",children:"Technologies Used"}),a&&a.slice(0,9).map((function(e,t){return Object(y.jsx)("div",{className:["icon-hover",i.icon].join(" "),children:e},t)}))]})};var at=function(e){var t=e.title,a=e.shortDesc;return Object(y.jsxs)(et.a,{children:[Object(y.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t}),Object(y.jsx)(u.a,{variant:"body2",color:"textSecondary",component:"p",children:a.substring(0,125)})]})};var nt=function(e){var t=e.project,a=Object(n.a)((function(){return{root:{width:"100%",height:"450px"},media:{height:220,width:"100%",filter:"brightness(100%)",transition:"filter .2s ease-in-out","&:hover":{filter:(t.liveLink||t.codeLink)&&"brightness(60%)",cursor:t.liveLink||t.codeLink?"pointer":"default"}}}})),i=Object(T.useState)(!1),r=Object(Q.a)(i,2),o=r[0],c=r[1],s=a(),l=function(){c(!o)};return Object(y.jsxs)(He.a,{isFlipped:o,children:[Object(y.jsxs)(Ue.a,{className:s.root,elevation:3,"data-testid":"flipping-card-front",children:[Object(y.jsx)(k.a,{href:t.liveLink?t.liveLink:t.codeLink&&!t.liveLink?t.codeLink:void 0,target:"_blank",rel:"noreferrer","data-testid":"flipping-card-media",children:Object(y.jsx)(Ie.a,{className:s.media,src:t.media,component:"img",title:"Project Image"})}),Object(y.jsx)(at,{title:t.title,shortDesc:t.shortDesc}),Object(y.jsx)($e,{flipCard:l,flipBtn:Object(y.jsx)(qe.a,{}),code:t.codeLink,live:t.liveLink})]}),Object(y.jsxs)(Ue.a,{className:s.root,"data-testid":"flipping-card-back",children:[Object(y.jsx)(tt,{accomplishments:t.accomplishments,techUsed:t.techUsed}),Object(y.jsx)($e,{flipCard:l,flipBtn:Object(y.jsx)(Re.a,{}),code:t.codeLink,live:t.liveLink})]})]})};var it=function(){var e=v(),t=function(){var e=ue(35);return[{id:0,media:Le,title:"Covid-19 Tracker V2",shortDesc:"Visualize global key data related to Covid-19 virus.",accomplishments:["Java Multi-threaded services for DB population & updating","CI/CD pipeline with GitHub Actions for static code analysis","Algorithms to shape data on FE and BE"],liveLink:"https://covid-19-tracker-v2-fe.vercel.app/",codeLink:"https://github.com/bhaden94/Covid-19-Tracker-V2",techUsed:[e.spring,e.java,e.react,e.typescript,e.materialui,e.mongodb,e.heroku]},{id:1,media:Fe,title:"SpaceX Timeline",shortDesc:"See milestones, past launches, and the next launch for SpaceX.",accomplishments:["React & Bootstrap to visualize data about SpaceX launches","Custom responsive sidebar component","One of a kind vertical timeline pagination!"],liveLink:"https://bhaden94.github.io/spacex-app/",codeLink:"https://github.com/bhaden94/spacex-app",techUsed:[e.react,e.javascript,e.bootstrap,e.github]}]}();return Object(y.jsx)("div",{className:e.container,children:Object(y.jsx)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:6,children:t.map((function(e,t){return Object(y.jsx)(O.a,{item:!0,xs:12,sm:6,lg:4,children:Object(y.jsx)(nt,{project:e})},t)}))})})};var rt=Object(n.a)((function(e){return{tech:{display:"inline-block",padding:"0 10px",textAlign:"center"},title:{padding:"1.2rem 1.2rem 0",fontWeight:300},skillContainer:{overflowX:"auto",overflowY:"hidden",whiteSpace:"nowrap",padding:"10px 0"}}}));var ot=function(){var e=function(){var e=ue(75);return[{title:"Frontend",tech:[{name:"React",icon:e.react},{name:"JavaScript",icon:e.javascript},{name:"TypeScript",icon:e.typescript},{name:"HTML5",icon:e.html},{name:"CSS3",icon:e.css}]},{title:"Backend",tech:[{name:"Java",icon:e.java},{name:"Spring",icon:e.spring},{name:"NodeJS",icon:e.node},{name:"MongoDB",icon:e.mongodb},{name:"PostgreSQL",icon:e.postgresql},{name:"MySQL",icon:e.mysql}]},{title:"Workflow",tech:[{name:"GitLab",icon:e.gitlab},{name:"GitHub",icon:e.github},{name:"Git",icon:e.git},{name:"Jira",icon:e.jira}]},{title:"Other",tech:[{name:"Docker",icon:e.docker},{name:"SonarQube",icon:e.sonarqube},{name:"Grafana",icon:e.grafana},{name:"Heroku",icon:e.heroku}]}]}(),t=rt(),a=v();return Object(y.jsx)("div",{children:e.map((function(e,n){return Object(y.jsxs)(f.a,{className:a.container,elevation:3,children:[Object(y.jsxs)(u.a,{className:t.title,variant:"h4",variantMapping:{h4:"h3"},color:"textSecondary",children:[e.title,Object(y.jsx)("hr",{})]}),Object(y.jsx)("div",{className:t.skillContainer,children:e.tech.map((function(e,a){return Object(y.jsxs)("div",{className:t.tech,children:[Object(y.jsx)("div",{className:"icon-hover",children:e.icon}),Object(y.jsx)(u.a,{color:"textSecondary",children:e.name})]},a)}))})]},n)}))})},ct=Object(n.a)((function(e){return Object(i.a)({icon:{color:e.palette.primary.main}})}));function st(){var e=ct();return[{id:0,text:"About",icon:Object(y.jsx)(d.a,{className:e.icon}),section:Object(y.jsx)(w,{})},{id:1,text:"Skills",icon:Object(y.jsx)(o.a,{className:e.icon}),section:Object(y.jsx)(ot,{})},{id:2,text:"Projects",icon:Object(y.jsx)(s.a,{className:e.icon}),section:Object(y.jsx)(it,{})},{id:3,text:"Experience",icon:Object(y.jsx)(b.a,{className:e.icon}),section:Object(y.jsx)(Me,{})},{id:4,text:"Education",icon:Object(y.jsx)(m.a,{className:e.icon}),section:Object(y.jsx)(C,{})}]}},108:function(e,t,a){"use strict";a.d(t,"b",(function(){return A}));var n=a(30),i=a(25),r=a(130),o=a(275),c=a(17),s=a(0),l=a.n(s),d=a(272),p=a(273),m=a(73),j=a(274);var b=a(2),h=l.a.createContext(null),A=(t.a=function(e){var t=e.children,a=e.theme,c={paletteType:"dark"===localStorage.getItem("theme")?"dark":"light"},s=l.a.useReducer((function(e,t){switch(t.type){case"changeTheme":return Object(n.a)(Object(n.a)({},e),{},{paletteType:t.payload});default:throw new Error}}),c),A=Object(i.a)(s,2),u=A[0],g=A[1],x=l.a.useMemo((function(){var e={light:{primary:d.a[900],secondary:p.a[600],background:{paper:m.a[50],default:m.a[200]},text:{primary:"rgba(0, 0, 0, 0.87);",secondary:"rgba(0, 0, 0, 0.75)"}},dark:{primary:d.a[500],secondary:p.a[800],background:{paper:j.a[900],default:j.a[800]},text:{primary:"#fff",secondary:"rgba(255, 255, 255, 0.75)"}}};return Object(r.a)(Object(n.a)(Object(n.a)({},a),{},{palette:{type:u.paletteType,primary:{main:"light"===u.paletteType?e.light.primary:e.dark.primary},secondary:{main:"light"===u.paletteType?e.light.secondary:e.dark.secondary},background:{paper:"light"===u.paletteType?e.light.background.paper:e.dark.background.paper,default:"light"===u.paletteType?e.light.background.default:e.dark.background.default},text:{primary:"light"===u.paletteType?e.light.text.primary:e.dark.text.primary,secondary:"light"===u.paletteType?e.light.text.secondary:e.dark.text.secondary}}}))}),[a,u.paletteType]);return Object(b.jsx)(o.a,{theme:x,children:Object(b.jsx)(h.Provider,{value:g,children:t})})},function(){var e=l.a.useContext(h),t=Object(c.a)(),a=l.a.useCallback((function(){return e({type:"changeTheme",payload:"light"===t.palette.type?"dark":"light"})}),[t.palette.type,e]);return localStorage.setItem("theme",t.palette.type),a})},148:function(e,t,a){},149:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),o=a.n(r),c=(a(148),a(276)),s=a(221),l=a(222),d=a(129),p=a.n(d),m=(a(149),a(224)),j=a(223),b=a(225),h=a(97),A=a(2),u=Object(s.a)((function(e){return Object(l.a)({icon:{color:e.palette.background.default},button:{borderRadius:"50%",height:"70px",width:"70px",marginRight:"20px"},item:{margin:"2% 0"},container:{padding:"2% 5%",position:"relative"},text:{position:"relative","&:hover":{textDecoration:"none"},"&::before":{content:"''",position:"absolute",width:"100%",height:"3px",bottom:0,left:0,backgroundColor:e.palette.secondary.main,visibility:"hidden",transform:"scaleX(0)",transition:"all 0.1s linear"},"&:hover::before":{visibility:"visible",transform:"scaleX(1)"}}})}));var g=function(){var e=u(),t=Object(h.a)(e.icon);return Object(A.jsx)(j.a,{container:!0,direction:"column",className:e.container,children:t.map((function(t,a){return Object(A.jsxs)(j.a,{item:!0,className:e.item,children:[Object(A.jsx)(m.a,{href:t.link,className:e.button,target:"_blank",rel:"noreferrer",variant:"contained",size:"large",color:"primary","aria-label":t.name,"data-testid":"icon-btn".concat(a),children:t.icon}),Object(A.jsx)(b.a,{className:e.text,href:t.link,target:"_blank",rel:"noreferrer",children:t.text})]},a)}))})},x=a(7),f=a(114),O=a.n(f),v=a(64),y=Object(s.a)((function(e){var t;return Object(l.a)({returnTopContainer:(t={position:"absolute",bottom:0},Object(x.a)(t,e.breakpoints.down("sm"),{bottom:60}),Object(x.a)(t,"&:hover $returnTop",{color:"dark"===e.palette.type?e.palette.primary.main:e.palette.secondary.main}),Object(x.a)(t,"width","100%"),Object(x.a)(t,"textAlign","center"),t),returnTop:{textAlign:"center",transition:"color 250ms",color:"dark"===e.palette.type?e.palette.secondary.main:e.palette.primary.main}})}));var z=function(){var e=y();return Object(A.jsx)(v.Link,{to:"top",smooth:!0,duration:500,children:Object(A.jsx)("div",{className:e.returnTopContainer,"data-testid":"scroll-to-top",children:Object(A.jsx)(O.a,{className:e.returnTop,fontSize:"large"})})})},w=a(133),k=a(37);var S=function(){var e=Object(k.a)(),t=Object(s.a)((function(t){var a,n;return Object(l.a)({container:{height:"100vh"},textContainer:(a={padding:"4rem 4rem"},Object(x.a)(a,t.breakpoints.down("md"),{padding:"3rem 3rem"}),Object(x.a)(a,t.breakpoints.down("sm"),{padding:"3rem 3rem",marginTop:"60px"}),Object(x.a)(a,t.breakpoints.down("xs"),{padding:"1.5rem 1.5rem"}),a),text:(n={fontSize:"4rem"},Object(x.a)(n,t.breakpoints.down("sm"),{fontSize:"2.5rem"}),Object(x.a)(n,"color",e.landingOpenerColorOverride||t.palette.text.primary),n)})}))();return Object(A.jsx)("div",{className:t.container,children:Object(A.jsx)("div",{className:t.textContainer,children:e.landingOpener.map((function(e,a){return Object(A.jsx)(w.a,{variant:"h2",className:t.text,"data-testid":"landing-opener-text",children:e},a)}))})})},D=a(25),B=a(227),C=a(230),Q=a(277),N=a(229),E=a(17),T=a(228),M=a(226),L=a(115),F=a.n(L);var U=function(e){var t=e.isDesktop,a=Object(s.a)((function(e){return Object(l.a)({container:{padding:t?"40px":"0px"},name:{fontSize:t?"2rem":"1.5rem",transition:"color 250ms","&:hover":{color:e.palette.secondary.main}},title:{fontSize:".8rem"}})}))(),n=Object(k.a)();return Object(A.jsxs)("div",{className:a.container,"data-testid":"name-title-header-div",children:[Object(A.jsx)(w.a,{className:a.name,color:"primary",variant:"h1",children:n.name}),Object(A.jsx)(w.a,{className:a.title,color:"textSecondary",variant:"h2",children:n.title})]})},I=i.a.lazy((function(){return a.e(5).then(a.bind(null,288))})),P=i.a.lazy((function(){return a.e(6).then(a.bind(null,290))})),q=i.a.lazy((function(){return a.e(4).then(a.bind(null,289))})),G=i.a.lazy((function(){return a.e(3).then(a.bind(null,291))})),R="md",W=Object(s.a)((function(e){return Object(l.a)({root:{display:"flex"},drawer:Object(x.a)({},e.breakpoints.up(R),{width:240,flexShrink:0}),appBar:Object(x.a)({backgroundColor:e.palette.background.paper,color:e.palette.primary.main},e.breakpoints.up(R),{display:"none"}),menuButton:Object(x.a)({marginRight:e.spacing(2)},e.breakpoints.up(R),{display:"none"}),drawerPaper:{width:240}})}));var H=function(){var e=W(),t=Object(E.a)(),a=i.a.useState(!1),r=Object(D.a)(a,2),o=r[0],c=r[1],s=Object(M.a)(t.breakpoints.up("md")),l=function(){c(!o)};return Object(A.jsxs)("div",{className:e.root,children:[Object(A.jsx)(B.a,{position:"fixed",className:e.appBar,children:Object(A.jsxs)(T.a,{children:[Object(A.jsx)(N.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:l,className:e.menuButton,children:Object(A.jsx)(F.a,{fontSize:"large","data-testid":"mobile-drawer-opener"})}),Object(A.jsx)(U,{isDesktop:s})]})}),Object(A.jsxs)("nav",{className:e.drawer,"aria-label":"Links to page items",children:[Object(A.jsx)(Q.a,{mdUp:!0,implementation:"js",children:Object(A.jsx)(n.Suspense,{fallback:Object(A.jsx)("div",{children:"Loading Navbar..."}),children:Object(A.jsxs)(P,{anchor:"left",open:o,onClose:l,onOpen:l,classes:{paper:e.drawerPaper},ModalProps:{keepMounted:!0},"data-testid":"mobile-drawer",children:[Object(A.jsx)(q,{toggleDrawer:l,isDesktop:s}),Object(A.jsx)(G,{})]})})}),Object(A.jsx)(Q.a,{smDown:!0,implementation:"js",children:Object(A.jsx)(n.Suspense,{fallback:Object(A.jsx)("div",{children:"Loading Navbar..."}),children:Object(A.jsxs)(I,{classes:{paper:e.drawerPaper},variant:"permanent",open:!0,"data-testid":"desktop-drawer",children:[Object(A.jsx)(v.Link,{to:"top",spy:!0,smooth:!0,offset:0,duration:300,children:Object(A.jsx)(U,{isDesktop:s})}),Object(A.jsx)(C.a,{}),Object(A.jsx)(q,{toggleDrawer:l,isDesktop:s}),Object(A.jsx)(G,{})]})})})]})]})},J=Object(s.a)((function(e){return Object(l.a)({container:{backgroundColor:e.palette.primary.main,width:"100%"},text:{color:"#fff",margin:0,padding:"10px 25px",textTransform:"uppercase",fontWeight:"lighter"}})}));var V=function(e){var t=e.text,a=J();return Object(A.jsx)("div",{className:a.container,children:Object(A.jsx)("h2",{className:a.text,children:t})})},X=a(105),K=a(108);var Y=function(){var e=p()(),t=Object(s.a)((function(){return Object(l.a)({top:{height:"100vh",backgroundImage:"url(".concat(Object(k.a)().landingImage,")"),backgroundAttachment:"fixed",backgroundSize:"cover"},section:{width:"100%"},bottom:{minHeight:"100vh",position:"relative"}})}))();return Object(A.jsx)(K.a,{theme:e,children:Object(A.jsxs)("div",{"data-testid":"root-app-div",children:[Object(A.jsx)(c.a,{}),Object(A.jsx)(H,{}),Object(A.jsxs)("div",{className:"App-header",children:[Object(A.jsx)("div",{id:"top",className:[t.top,t.section].join(" "),children:Object(A.jsx)(S,{})}),Object(X.a)().map((function(e,a){return Object(A.jsxs)("div",{id:e.text,className:t.section,children:[Object(A.jsx)(V,{text:e.text}),e.section]},a)})),Object(A.jsxs)("div",{id:"Contact",className:[t.bottom,t.section].join(" "),children:[Object(A.jsx)(V,{text:"Contact"}),Object(A.jsx)(g,{}),Object(A.jsx)(z,{})]})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(186);o.a.render(Object(A.jsx)(i.a.StrictMode,{children:Object(A.jsx)(Y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a.p+"static/media/browser.25470945.svg",i=a.p+"static/media/performance.01621b8f.svg",r=a.p+"static/media/responsive-design.db42e6df.svg",o=a.p+"static/media/Flat-Mountains.4d47bade.svg";function c(){return{name:"Brady Haden",title:"Software Engineer",landingOpener:['"There\'s a way to do it better. Find it."',"- Thomas Edison"],landingImage:o,headline:"Hi I am Brady, a Software Engineer and United States Air Force veteran passionate about making a difference through code!",strengths:[{short:"Beautifully Simplistic UI",long:"Less is more.",image:n},{short:"Performance Optimized Code",long:"My code is efficient, fast, and organized.",image:i},{short:"Responsive Web Design",long:"Over half of internet usage is from phones or tablets. I take pride in making sites for all devices.",image:r}]}}},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(65),i=a.n(n),r=a(112),o=a.n(r),c=a(113),s=a.n(c),l=a(2);function d(e){return[{name:"Github",link:"https://github.com/bhaden94",text:"See me on GitHub",icon:Object(l.jsx)(i.a,{fontSize:"large",className:e})},{name:"LinkedIn",link:"https://www.linkedin.com/in/brady-haden/",text:"Connect on LinkedIn",icon:Object(l.jsx)(o.a,{fontSize:"large",className:e})},{name:"Email",link:"mailto:brady.s.haden@gmail.com?subject=Greetings From Portfolio",text:"Send me an email",icon:Object(l.jsx)(s.a,{fontSize:"large",className:e})}]}}},[[187,1,2]]]);
//# sourceMappingURL=main.a194b94d.chunk.js.map