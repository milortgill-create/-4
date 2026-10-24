(()=>{var Nh="170";var om=0,td=1,am=2;var lf=1,Dh=2,ri=3,Bi=0,Ke=1,vn=2,Ni=0,js=1,ed=2,nd=3,id=4,cm=5,os=100,lm=101,hm=102,um=103,dm=104,fm=200,pm=201,mm=202,gm=203,hl=204,ul=205,ym=206,xm=207,vm=208,_m=209,Mm=210,wm=211,bm=212,Sm=213,Em=214,dl=0,fl=1,pl=2,tr=3,ml=4,gl=5,yl=6,xl=7,hf=0,Tm=1,Am=2,Di=0,Rm=1,Cm=2,Im=3,Fa=4,Pm=5,Lm=6,Nm=7;var uf=300,er=301,nr=302,vl=303,_l=304,Oa=306,ir=1e3,ls=1001,Ml=1002,Dn=1003,Dm=1004;var Oo=1005;var Gn=1006,Pc=1007;var hs=1008;var hi=1009,df=1010,ff=1011,Wr=1012,Bh=1013,us=1014,ai=1015,so=1016,Uh=1017,Fh=1018,sr=1020,pf=35902,mf=1021,gf=1022,Nn=1023,yf=1024,xf=1025,Js=1026,rr=1027,vf=1028,Oh=1029,_f=1030,zh=1031;var kh=1033,aa=33776,ca=33777,la=33778,ha=33779,wl=35840,bl=35841,Sl=35842,El=35843,Tl=36196,Al=37492,Rl=37496,Cl=37808,Il=37809,Pl=37810,Ll=37811,Nl=37812,Dl=37813,Bl=37814,Ul=37815,Fl=37816,Ol=37817,zl=37818,kl=37819,Hl=37820,Vl=37821,ua=36492,Gl=36494,Wl=36495,Mf=36283,ql=36284,Xl=36285,Yl=36286;var da=2300,$l=2301,Lc=2302,sd=2400,rd=2401,od=2402;var Bm=3200,Um=3201;var wf=0,Fm=1,cn="",Fe="srgb",hr="srgb-linear",za="linear",ue="srgb";var Ds=7680;var ad=519,Om=512,zm=513,km=514,bf=515,Hm=516,Vm=517,Gm=518,Wm=519,cd=35044;var ld="300 es",ci=2e3,fa=2001,Ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hd=1234567,zr=Math.PI/180,or=180/Math.PI;function ur(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Hh(i,t){return(i%t+t)%t}function qm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xm(i,t,e){return i!==t?(e-i)/(t-i):0}function kr(i,t,e){return(1-e)*i+e*t}function Ym(i,t,e,n){return kr(i,t,1-Math.exp(-e*n))}function $m(i,t=1){return t-Math.abs(Hh(i,t*2)-t)}function Zm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function jm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Jm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Km(i,t){return i+Math.random()*(t-i)}function Qm(i){return i*(.5-Math.random())}function t0(i){i!==void 0&&(hd=i);let t=hd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function e0(i){return i*zr}function n0(i){return i*or}function i0(i){return(i&i-1)===0&&i!==0}function s0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function r0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function o0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Yt={DEG2RAD:zr,RAD2DEG:or,generateUUID:ur,clamp:Oe,euclideanModulo:Hh,mapLinear:qm,inverseLerp:Xm,lerp:kr,damp:Ym,pingpong:$m,smoothstep:Zm,smootherstep:jm,randInt:Jm,randFloat:Km,randFloatSpread:Qm,seededRandom:t0,degToRad:e0,radToDeg:n0,isPowerOfTwo:i0,ceilPowerOfTwo:s0,floorPowerOfTwo:r0,setQuaternionFromProperEuler:o0,normalize:$e,denormalize:$s},at=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],x=s[1],w=s[4],v=s[7],R=s[2],T=s[5],A=s[8];return r[0]=o*y+a*x+c*R,r[3]=o*m+a*w+c*T,r[6]=o*p+a*v+c*A,r[1]=l*y+h*x+d*R,r[4]=l*m+h*w+d*T,r[7]=l*p+h*v+d*A,r[2]=u*y+f*x+g*R,r[5]=u*m+f*w+g*T,r[8]=u*p+f*v+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nc.makeScale(t,e)),this}rotate(t){return this.premultiply(Nc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nc=new Vt;function Sf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function a0(){let i=pa("canvas");return i.style.display="block",i}var ud={};function Fr(i){i in ud||(ud[i]=!0,console.warn(i))}function c0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function l0(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function h0(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ee={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(i.r=Ks(i.r),i.g=Ks(i.g),i.b=Ks(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===cn?za:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var dd=[.64,.33,.3,.6,.15,.06],fd=[.2126,.7152,.0722],pd=[.3127,.329],md=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gd=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[hr]:{primaries:dd,whitePoint:pd,transfer:za,toXYZ:md,fromXYZ:gd,luminanceCoefficients:fd,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:dd,whitePoint:pd,transfer:ue,toXYZ:md,fromXYZ:gd,luminanceCoefficients:fd,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});var Bs,Zl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bs===void 0&&(Bs=pa("canvas")),Bs.width=t.width,Bs.height=t.height;let n=Bs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},u0=0,ma=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=ur(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dc(s[o].image)):r.push(Dc(s[o]))}else r=Dc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var d0=0,ln=class i extends Ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ls,s=ls,r=Gn,o=hs,a=Nn,c=hi,l=i.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=ur(),this.name="",this.source=new ma(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ir:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case Ml:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ir:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case Ml:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=uf;ln.DEFAULT_ANISOTROPY=1;var de=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,v=(f+1)/2,R=(p+1)/2,T=(h+u)/4,A=(d+y)/4,I=(g+m)/4;return w>v&&w>R?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=A/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=I/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-y)/x,this.z=(u-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jl=class extends Ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ma(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends jl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ga=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jl=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(d!==y||c!==u||l!==f||h!==g){let m=1-a,p=c*u+l*f+h*g+d*y,x=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let R=Math.sqrt(w),T=Math.atan2(R,p*x);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let v=a*x;if(c=c*m+u*v,l=l*m+f*v,h=h*m+g*v,d=d*m+y*v,m===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bc.copy(this).projectOnVector(t),this.sub(Bc)}reflect(t){return this.sub(Bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bc=new D,yd=new Fi,ds=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zo.copy(n.boundingBox)),zo.applyMatrix4(t.matrixWorld),this.union(zo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lr),ko.subVectors(this.max,Lr),Us.subVectors(t.a,Lr),Fs.subVectors(t.b,Lr),Os.subVectors(t.c,Lr),Ai.subVectors(Fs,Us),Ri.subVectors(Os,Fs),Qi.subVectors(Us,Os);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Qi.z,Qi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Qi.z,0,-Qi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Qi.y,Qi.x,0];return!Uc(e,Us,Fs,Os,ko)||(e=[1,0,0,0,1,0,0,0,1],!Uc(e,Us,Fs,Os,ko))?!1:(Ho.crossVectors(Ai,Ri),e=[Ho.x,Ho.y,Ho.z],Uc(e,Us,Fs,Os,ko))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ti=[new D,new D,new D,new D,new D,new D,new D,new D],In=new D,zo=new ds,Us=new D,Fs=new D,Os=new D,Ai=new D,Ri=new D,Qi=new D,Lr=new D,ko=new D,Ho=new D,ts=new D;function Uc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ts.fromArray(i,r);let a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),c=t.dot(ts),l=e.dot(ts),h=n.dot(ts);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var f0=new ds,Nr=new D,Fc=new D,qr=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):f0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);let e=Nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(Fc)),this.expandByPoint(Nr.copy(t.center).sub(Fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ei=new D,Oc=new D,Vo=new D,Ci=new D,zc=new D,Go=new D,kc=new D,ya=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Oc.copy(t).add(e).multiplyScalar(.5),Vo.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(Oc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Vo),a=Ci.dot(this.direction),c=-Ci.dot(Vo),l=Ci.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Oc).addScaledVector(Vo,u),f}intersectSphere(t,e){ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){zc.subVectors(e,t),Go.subVectors(n,t),kc.crossVectors(zc,Go);let o=this.direction.dot(kc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);let c=a*this.direction.dot(Go.crossVectors(Ci,Go));if(c<0)return null;let l=a*this.direction.dot(zc.cross(Ci));if(l<0||c+l>o)return null;let h=-a*Ci.dot(kc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class i{constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,y,m)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/zs.setFromMatrixColumn(t,0).length(),r=1/zs.setFromMatrixColumn(t,1).length(),o=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,y=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-y*l,e[9]=-a*c,e[2]=y-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,y=l*d;e[0]=u+y*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=y+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,y=l*d;e[0]=u-y*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,y=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+y,e[1]=c*d,e[5]=y*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=o*c,f=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+y,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(p0,t,m0)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Ii.crossVectors(n,on),Ii.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ii.crossVectors(n,on)),Ii.normalize(),Wo.crossVectors(on,Ii),s[0]=Ii.x,s[4]=Wo.x,s[8]=on.x,s[1]=Ii.y,s[5]=Wo.y,s[9]=on.y,s[2]=Ii.z,s[6]=Wo.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],x=n[3],w=n[7],v=n[11],R=n[15],T=s[0],A=s[4],I=s[8],S=s[12],M=s[1],P=s[5],H=s[9],L=s[13],B=s[2],z=s[6],N=s[10],Z=s[14],V=s[3],j=s[7],ct=s[11],ft=s[15];return r[0]=o*T+a*M+c*B+l*V,r[4]=o*A+a*P+c*z+l*j,r[8]=o*I+a*H+c*N+l*ct,r[12]=o*S+a*L+c*Z+l*ft,r[1]=h*T+d*M+u*B+f*V,r[5]=h*A+d*P+u*z+f*j,r[9]=h*I+d*H+u*N+f*ct,r[13]=h*S+d*L+u*Z+f*ft,r[2]=g*T+y*M+m*B+p*V,r[6]=g*A+y*P+m*z+p*j,r[10]=g*I+y*H+m*N+p*ct,r[14]=g*S+y*L+m*Z+p*ft,r[3]=x*T+w*M+v*B+R*V,r[7]=x*A+w*P+v*z+R*j,r[11]=x*I+w*H+v*N+R*ct,r[15]=x*S+w*L+v*Z+R*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*f-n*c*f)+y*(+e*c*f-e*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*d+e*a*u+s*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],x=d*m*l-y*u*l+y*c*f-a*m*f-d*c*p+a*u*p,w=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,v=h*y*l-g*d*l+g*a*f-o*y*f-h*a*p+o*d*p,R=g*d*c-h*y*c-g*a*u+o*y*u+h*a*m-o*d*m,T=e*x+n*w+s*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=x*A,t[1]=(y*u*r-d*m*r-y*s*f+n*m*f+d*s*p-n*u*p)*A,t[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*p+n*c*p)*A,t[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*f-n*c*f)*A,t[4]=w*A,t[5]=(h*m*r-g*u*r+g*s*f-e*m*f-h*s*p+e*u*p)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*A,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*f+e*c*f)*A,t[8]=v*A,t[9]=(g*d*r-h*y*r-g*n*f+e*y*f+h*n*p-e*d*p)*A,t[10]=(o*y*r-g*a*r+g*n*l-e*y*l-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*A,t[12]=R*A,t[13]=(h*y*s-g*d*s+g*n*u-e*y*u-h*n*m+e*d*m)*A,t[14]=(g*a*s-o*y*s-g*n*c+e*y*c+o*n*m-e*a*m)*A,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*u+e*a*u)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,y=o*h,m=o*d,p=a*d,x=c*l,w=c*h,v=c*d,R=n.x,T=n.y,A=n.z;return s[0]=(1-(y+p))*R,s[1]=(f+v)*R,s[2]=(g-w)*R,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(u+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+w)*A,s[9]=(m-x)*A,s[10]=(1-(u+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=zs.set(s[0],s[1],s[2]).length(),o=zs.set(s[4],s[5],s[6]).length(),a=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);let l=1/r,h=1/o,d=1/a;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,e.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ci){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,g;if(a===ci)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===fa)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ci){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*l,f=(n+s)*h,g,y;if(a===ci)g=(o+r)*d,y=-2*d;else if(a===fa)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zs=new D,Pn=new Me,p0=new D(0,0,0),m0=new D(1,1,1),Ii=new D,Wo=new D,on=new D,xd=new Me,vd=new Fi,hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vd.setFromEuler(this),this.setFromQuaternion(vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},g0=0,_d=new D,ks=new Fi,ni=new Me,qo=new D,Dr=new D,y0=new D,x0=new Fi,Md=new D(1,0,0),wd=new D(0,1,0),bd=new D(0,0,1),Sd={type:"added"},v0={type:"removed"},Hs={type:"childadded",child:null},Hc={type:"childremoved",child:null},He=class i extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new hn,n=new Fi,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new Vt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Md,t)}rotateY(t){return this.rotateOnAxis(wd,t)}rotateZ(t){return this.rotateOnAxis(bd,t)}translateOnAxis(t,e){return _d.copy(t).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Md,t)}translateY(t){return this.translateOnAxis(wd,t)}translateZ(t){return this.translateOnAxis(bd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qo.copy(t):qo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Dr,qo,this.up):ni.lookAt(qo,Dr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(ni),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sd),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(v0),Hc.child=t,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sd),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,t,y0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,x0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};He.DEFAULT_UP=new D(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new D,ii=new D,Vc=new D,si=new D,Vs=new D,Gs=new D,Ed=new D,Gc=new D,Wc=new D,qc=new D,Xc=new de,Yc=new de,$c=new de,as=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),ii.subVectors(n,e),Vc.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(ii),c=Ln.dot(Vc),l=ii.dot(ii),h=ii.dot(Vc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(o,si.y),c.addScaledVector(a,si.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Xc.setScalar(0),Yc.setScalar(0),$c.setScalar(0),Xc.fromBufferAttribute(t,e),Yc.fromBufferAttribute(t,n),$c.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xc,r.x),o.addScaledVector(Yc,r.y),o.addScaledVector($c,r.z),o}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),ii.subVectors(t,e),Ln.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Ln.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Vs.subVectors(s,n),Gs.subVectors(r,n),Gc.subVectors(t,n);let c=Vs.dot(Gc),l=Gs.dot(Gc);if(c<=0&&l<=0)return e.copy(n);Wc.subVectors(t,s);let h=Vs.dot(Wc),d=Gs.dot(Wc);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Vs,o);qc.subVectors(t,r);let f=Vs.dot(qc),g=Gs.dot(qc);if(g>=0&&f<=g)return e.copy(r);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Gs,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Ed.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Ed,a);let p=1/(m+y+u);return o=y*p,a=u*p,e.copy(n).addScaledVector(Vs,o).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function Zc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Hh(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zc(o,r,t+1/3),this.g=Zc(o,r,t),this.b=Zc(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=Ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ee.fromWorkingColorSpace(qe.copy(this),t),Math.round(Oe(qe.r*255,0,255))*65536+Math.round(Oe(qe.g*255,0,255))*256+Math.round(Oe(qe.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(qe.copy(this),e);let n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Fe){ee.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,s=qe.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(Xo);let n=kr(Pi.h,Xo.h,e),s=kr(Pi.s,Xo.s,e),r=kr(Pi.l,Xo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Xt;Xt.NAMES=Ef;var _0=0,fs=class extends Ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=ur(),this.name="",this.blending=js,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=ul,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hl&&(n.blendSrc=this.blendSrc),this.blendDst!==ul&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ad&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Bn=class extends fs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new D,Yo=new at,_n=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cd,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yo.fromBufferAttribute(this,e),Yo.applyMatrix3(t),this.setXY(e,Yo.x,Yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$s(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$s(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$s(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cd&&(t.usage=this.usage),t}};var xa=class extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var va=class extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}},M0=0,xn=new Me,jc=new He,Ws=new D,an=new ds,Br=new ds,Ue=new D,Qe=class i extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sf(t)?va:xa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return jc.lookAt(t),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(an.min,Br.min),an.expandByPoint(Ue),Ue.addVectors(an.max,Br.max),an.expandByPoint(Ue)):(an.expandByPoint(Br.min),an.expandByPoint(Br.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ue.fromBufferAttribute(a,l),c&&(Ws.fromBufferAttribute(t,l),Ue.add(Ws)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new D,c[I]=new D;let l=new D,h=new D,d=new D,u=new at,f=new at,g=new at,y=new D,m=new D;function p(I,S,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(y),a[S].add(y),a[M].add(y),c[I].add(m),c[S].add(m),c[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,S=x.length;I<S;++I){let M=x[I],P=M.start,H=M.count;for(let L=P,B=P+H;L<B;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let w=new D,v=new D,R=new D,T=new D;function A(I){R.fromBufferAttribute(s,I),T.copy(R);let S=a[I];w.copy(S),w.sub(R.multiplyScalar(R.dot(S))).normalize(),v.crossVectors(T,S);let P=v.dot(c[I])<0?-1:1;o.setXYZW(I,w.x,w.y,w.z,P)}for(let I=0,S=x.length;I<S;++I){let M=x[I],P=M.start,H=M.count;for(let L=P,B=P+H;L<B;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new _n(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Td=new Me,es=new ya,$o=new qr,Ad=new D,Zo=new D,jo=new D,Jo=new D,Jc=new D,Ko=new D,Rd=new D,Qo=new D,bt=class extends He{constructor(t=new Qe,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ko.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Jc.fromBufferAttribute(d,t),o?Ko.addScaledVector(Jc,h):Ko.addScaledVector(Jc.sub(e),h))}e.add(Ko)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),es.copy(t.ray).recast(t.near),!($o.containsPoint(es.origin)===!1&&(es.intersectSphere($o,Ad)===null||es.origin.distanceToSquared(Ad)>(t.far-t.near)**2))&&(Td.copy(r).invert(),es.copy(t.ray).applyMatrix4(Td),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,R=w;v<R;v+=3){let T=a.getX(v),A=a.getX(v+1),I=a.getX(v+2);s=ta(this,p,t,n,l,h,d,T,A,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=ta(this,o,t,n,l,h,d,x,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,R=w;v<R;v+=3){let T=v,A=v+1,I=v+2;s=ta(this,p,t,n,l,h,d,T,A,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=m,w=m+1,v=m+2;s=ta(this,o,t,n,l,h,d,x,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function w0(i,t,e,n,s,r,o,a){let c;if(t.side===Ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Bi,a),c===null)return null;Qo.copy(a),Qo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Qo);return l<e.near||l>e.far?null:{distance:l,point:Qo.clone(),object:i}}function ta(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Zo),i.getVertexPosition(c,jo),i.getVertexPosition(l,Jo);let h=w0(i,t,e,n,Zo,jo,Jo,Rd);if(h){let d=new D;as.getBarycoord(Rd,Zo,jo,Jo,d),s&&(h.uv=as.getInterpolatedAttribute(s,a,c,l,d,new at)),r&&(h.uv1=as.getInterpolatedAttribute(r,a,c,l,d,new at)),o&&(h.normal=as.getInterpolatedAttribute(o,a,c,l,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};as.getNormal(Zo,jo,Jo,u.normal),h.face=u,h.barycoord=d}return h}var Pt=class i extends Qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function g(y,m,p,x,w,v,R,T,A,I,S){let M=v/A,P=R/I,H=v/2,L=R/2,B=T/2,z=A+1,N=I+1,Z=0,V=0,j=new D;for(let ct=0;ct<N;ct++){let ft=ct*P-L;for(let ot=0;ot<z;ot++){let $t=ot*M-H;j[y]=$t*x,j[m]=ft*w,j[p]=B,l.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[p]=T>0?1:-1,h.push(j.x,j.y,j.z),d.push(ot/A),d.push(1-ct/I),Z+=1}}for(let ct=0;ct<I;ct++)for(let ft=0;ft<A;ft++){let ot=u+ft+z*ct,$t=u+ft+z*(ct+1),Y=u+(ft+1)+z*(ct+1),it=u+(ft+1)+z*ct;c.push(ot,$t,it),c.push($t,Y,it),V+=6}a.addGroup(f,V,S),f+=V,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ar(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){let t={};for(let e=0;e<i.length;e++){let n=ar(i[e]);for(let s in n)t[s]=n[s]}return t}function b0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var S0={clone:ar,merge:Ze},E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wn=class extends fs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=T0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=b0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},_a=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new D,Cd=new at,Id=new at,ze=class extends _a{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return or*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,Cd,Id),e.subVectors(Id,Cd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qs=-90,Xs=1,Kl=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ze(qs,Xs,t,e);s.layers=this.layers,this.add(s);let r=new ze(qs,Xs,t,e);r.layers=this.layers,this.add(r);let o=new ze(qs,Xs,t,e);o.layers=this.layers,this.add(o);let a=new ze(qs,Xs,t,e);a.layers=this.layers,this.add(a);let c=new ze(qs,Xs,t,e);c.layers=this.layers,this.add(c);let l=new ze(qs,Xs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ma=class extends ln{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:er,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ql=class extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ma(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pt(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Ni});r.uniforms.tEquirect.value=e;let o=new bt(s,r),a=e.minFilter;return e.minFilter===hs&&(e.minFilter=Gn),new Kl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Kc=new D,A0=new D,R0=new Vt,oi=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Kc.subVectors(n,e).cross(A0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Kc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||R0.getNormalMatrix(t),s=this.coplanarPoint(Kc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ns=new qr,ea=new D,Yr=class{constructor(t=new oi,e=new oi,n=new oi,s=new oi,r=new oi,o=new oi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],x=s[13],w=s[14],v=s[15];if(n[0].setComponents(c-r,u-l,m-f,v-p).normalize(),n[1].setComponents(c+r,u+l,m+f,v+p).normalize(),n[2].setComponents(c+o,u+h,m+g,v+x).normalize(),n[3].setComponents(c-o,u-h,m-g,v-x).normalize(),n[4].setComponents(c-a,u-d,m-y,v-w).normalize(),e===ci)n[5].setComponents(c+a,u+d,m+y,v+w).normalize();else if(e===fa)n[5].setComponents(a,d,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ea.x=s.normal.x>0?t.max.x:t.min.x,ea.y=s.normal.y>0?t.max.y:t.min.y,ea.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Af(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function C0(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Un=class i extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let x=p*u-o;for(let w=0;w<l;w++){let v=w*d-r;g.push(v,-x,0),y.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){let w=x+l*p,v=x+l*(p+1),R=x+1+l*(p+1),T=x+1+l*p;f.push(w,v,T),f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(y,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,G0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,W0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ag=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,py=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,my=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,My=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,by=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Oy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$y=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ky=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ax=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:I0,alphahash_pars_fragment:P0,alphamap_fragment:L0,alphamap_pars_fragment:N0,alphatest_fragment:D0,alphatest_pars_fragment:B0,aomap_fragment:U0,aomap_pars_fragment:F0,batching_pars_vertex:O0,batching_vertex:z0,begin_vertex:k0,beginnormal_vertex:H0,bsdfs:V0,iridescence_fragment:G0,bumpmap_pars_fragment:W0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:Y0,clipping_planes_vertex:$0,color_fragment:Z0,color_pars_fragment:j0,color_pars_vertex:J0,color_vertex:K0,common:Q0,cube_uv_reflection_fragment:tg,defaultnormal_vertex:eg,displacementmap_pars_vertex:ng,displacementmap_vertex:ig,emissivemap_fragment:sg,emissivemap_pars_fragment:rg,colorspace_fragment:og,colorspace_pars_fragment:ag,envmap_fragment:cg,envmap_common_pars_fragment:lg,envmap_pars_fragment:hg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:wg,envmap_vertex:dg,fog_vertex:fg,fog_pars_vertex:pg,fog_fragment:mg,fog_pars_fragment:gg,gradientmap_pars_fragment:yg,lightmap_pars_fragment:xg,lights_lambert_fragment:vg,lights_lambert_pars_fragment:_g,lights_pars_begin:Mg,lights_toon_fragment:bg,lights_toon_pars_fragment:Sg,lights_phong_fragment:Eg,lights_phong_pars_fragment:Tg,lights_physical_fragment:Ag,lights_physical_pars_fragment:Rg,lights_fragment_begin:Cg,lights_fragment_maps:Ig,lights_fragment_end:Pg,logdepthbuf_fragment:Lg,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Dg,logdepthbuf_vertex:Bg,map_fragment:Ug,map_pars_fragment:Fg,map_particle_fragment:Og,map_particle_pars_fragment:zg,metalnessmap_fragment:kg,metalnessmap_pars_fragment:Hg,morphinstance_vertex:Vg,morphcolor_vertex:Gg,morphnormal_vertex:Wg,morphtarget_pars_vertex:qg,morphtarget_vertex:Xg,normal_fragment_begin:Yg,normal_fragment_maps:$g,normal_pars_fragment:Zg,normal_pars_vertex:jg,normal_vertex:Jg,normalmap_pars_fragment:Kg,clearcoat_normal_fragment_begin:Qg,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:ey,iridescence_pars_fragment:ny,opaque_fragment:iy,packing:sy,premultiplied_alpha_fragment:ry,project_vertex:oy,dithering_fragment:ay,dithering_pars_fragment:cy,roughnessmap_fragment:ly,roughnessmap_pars_fragment:hy,shadowmap_pars_fragment:uy,shadowmap_pars_vertex:dy,shadowmap_vertex:fy,shadowmask_pars_fragment:py,skinbase_vertex:my,skinning_pars_vertex:gy,skinning_vertex:yy,skinnormal_vertex:xy,specularmap_fragment:vy,specularmap_pars_fragment:_y,tonemapping_fragment:My,tonemapping_pars_fragment:wy,transmission_fragment:by,transmission_pars_fragment:Sy,uv_pars_fragment:Ey,uv_pars_vertex:Ty,uv_vertex:Ay,worldpos_vertex:Ry,background_vert:Cy,background_frag:Iy,backgroundCube_vert:Py,backgroundCube_frag:Ly,cube_vert:Ny,cube_frag:Dy,depth_vert:By,depth_frag:Uy,distanceRGBA_vert:Fy,distanceRGBA_frag:Oy,equirect_vert:zy,equirect_frag:ky,linedashed_vert:Hy,linedashed_frag:Vy,meshbasic_vert:Gy,meshbasic_frag:Wy,meshlambert_vert:qy,meshlambert_frag:Xy,meshmatcap_vert:Yy,meshmatcap_frag:$y,meshnormal_vert:Zy,meshnormal_frag:jy,meshphong_vert:Jy,meshphong_frag:Ky,meshphysical_vert:Qy,meshphysical_frag:tx,meshtoon_vert:ex,meshtoon_frag:nx,points_vert:ix,points_frag:sx,shadow_vert:rx,shadow_frag:ox,sprite_vert:ax,sprite_frag:cx},lt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Vn={basic:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ze([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ze([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ze([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ze([lt.points,lt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ze([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ze([lt.common,lt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ze([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ze([lt.sprite,lt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ze([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ze([lt.lights,lt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Vn.physical={uniforms:Ze([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var na={r:0,b:0,g:0},is=new hn,lx=new Me;function hx(i,t,e,n,s,r,o){let a=new Xt(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(x){let w=x.isScene===!0?x.background:null;return w&&w.isTexture&&(w=(x.backgroundBlurriness>0?e:t).get(w)),w}function y(x){let w=!1,v=g(x);v===null?p(a,c):v&&v.isColor&&(p(v,1),w=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,w){let v=g(w);v&&(v.isCubeTexture||v.mapping===Oa)?(h===void 0&&(h=new bt(new Pt(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:ar(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),is.copy(w.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lx.makeRotationFromEuler(is)),h.material.toneMapped=ee.getTransfer(v.colorSpace)!==ue,(d!==v||u!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new bt(new Un(2,2),new Wn({name:"BackgroundMaterial",uniforms:ar(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ee.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,w){x.getRGB(na,Tf(i)),n.buffers.color.setClear(na.r,na.g,na.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(x,w=1){a.set(x),c=w,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:y,addToRenderList:m}}function ux(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(M,P,H,L,B){let z=!1,N=d(L,H,P);r!==N&&(r=N,l(r.object)),z=f(M,L,H,B),z&&g(M,L,H,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(M,P,H,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,P,H){let L=H.wireframe===!0,B=n[M.id];B===void 0&&(B={},n[M.id]=B);let z=B[P.id];z===void 0&&(z={},B[P.id]=z);let N=z[L];return N===void 0&&(N=u(c()),z[L]=N),N}function u(M){let P=[],H=[],L=[];for(let B=0;B<e;B++)P[B]=0,H[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:L,object:M,attributes:{},index:null}}function f(M,P,H,L){let B=r.attributes,z=P.attributes,N=0,Z=H.getAttributes();for(let V in Z)if(Z[V].location>=0){let ct=B[V],ft=z[V];if(ft===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),ct===void 0||ct.attribute!==ft||ft&&ct.data!==ft.data)return!0;N++}return r.attributesNum!==N||r.index!==L}function g(M,P,H,L){let B={},z=P.attributes,N=0,Z=H.getAttributes();for(let V in Z)if(Z[V].location>=0){let ct=z[V];ct===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));let ft={};ft.attribute=ct,ct&&ct.data&&(ft.data=ct.data),B[V]=ft,N++}r.attributes=B,r.attributesNum=N,r.index=L}function y(){let M=r.newAttributes;for(let P=0,H=M.length;P<H;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){let H=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;H[M]=1,L[M]===0&&(i.enableVertexAttribArray(M),L[M]=1),B[M]!==P&&(i.vertexAttribDivisor(M,P),B[M]=P)}function x(){let M=r.newAttributes,P=r.enabledAttributes;for(let H=0,L=P.length;H<L;H++)P[H]!==M[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function w(M,P,H,L,B,z,N){N===!0?i.vertexAttribIPointer(M,P,H,B,z):i.vertexAttribPointer(M,P,H,L,B,z)}function v(M,P,H,L){y();let B=L.attributes,z=H.getAttributes(),N=P.defaultAttributeValues;for(let Z in z){let V=z[Z];if(V.location>=0){let j=B[Z];if(j===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){let ct=j.normalized,ft=j.itemSize,ot=t.get(j);if(ot===void 0)continue;let $t=ot.buffer,Y=ot.type,it=ot.bytesPerElement,St=Y===i.INT||Y===i.UNSIGNED_INT||j.gpuType===Bh;if(j.isInterleavedBufferAttribute){let ht=j.data,Bt=ht.stride,zt=j.offset;if(ht.isInstancedInterleavedBuffer){for(let qt=0;qt<V.locationSize;qt++)p(V.location+qt,ht.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let qt=0;qt<V.locationSize;qt++)m(V.location+qt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let qt=0;qt<V.locationSize;qt++)w(V.location+qt,ft/V.locationSize,Y,ct,Bt*it,(zt+ft/V.locationSize*qt)*it,St)}else{if(j.isInstancedBufferAttribute){for(let ht=0;ht<V.locationSize;ht++)p(V.location+ht,j.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ht=0;ht<V.locationSize;ht++)m(V.location+ht);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let ht=0;ht<V.locationSize;ht++)w(V.location+ht,ft/V.locationSize,Y,ct,ft*it,ft/V.locationSize*ht*it,St)}}else if(N!==void 0){let ct=N[Z];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(V.location,ct);break;case 3:i.vertexAttrib3fv(V.location,ct);break;case 4:i.vertexAttrib4fv(V.location,ct);break;default:i.vertexAttrib1fv(V.location,ct)}}}}x()}function R(){I();for(let M in n){let P=n[M];for(let H in P){let L=P[H];for(let B in L)h(L[B].object),delete L[B];delete P[H]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let H in P){let L=P[H];for(let B in L)h(L[B].object),delete L[B];delete P[H]}delete n[M.id]}function A(M){for(let P in n){let H=n[P];if(H[M.id]===void 0)continue;let L=H[M.id];for(let B in L)h(L[B].object),delete L[B];delete H[M.id]}}function I(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function dx(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*u[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function fx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Nn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let I=A===so&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==hi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ai&&!I)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function px(i){let t=this,e=null,n=0,s=!1,r=!1,o=new oi,a=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let x=r?0:n,w=x*4,v=p.clippingState||null;c.value=v,v=h(g,u,w,f);for(let R=0;R!==w;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==y;++w,v+=4)o.copy(d[w]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function mx(i){let t=new WeakMap;function e(o,a){return a===vl?o.mapping=er:a===_l&&(o.mapping=nr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===vl||a===_l)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ql(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var wa=class extends _a{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zs=4,Pd=[.125,.215,.35,.446,.526,.582],cs=20,Qc=new wa,Ld=new Xt,tl=null,el=0,nl=0,il=!1,rs=(1+Math.sqrt(5))/2,Ys=1/rs,Nd=[new D(-rs,Ys,0),new D(rs,Ys,0),new D(-Ys,0,rs),new D(Ys,0,rs),new D(0,rs,-Ys),new D(0,rs,Ys),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],ba=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tl,el,nl),this._renderer.xr.enabled=il,t.scissorTest=!1,ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===er||t.mapping===nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:so,format:Nn,colorSpace:hr,depthBuffer:!1},s=Dd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gx(r)),this._blurMaterial=yx(r,t,e)}return s}_compileMaterial(t){let e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,Qc)}_sceneToCubeUV(t,e,n,s){let a=new ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ld),h.toneMapping=Di,h.autoClear=!1;let f=new Bn({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),g=new bt(new Pt,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(Ld),y=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let w=this._cubeSize;ia(s,x*w,p>2?w:0,w,w),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===er||t.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ia(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Qc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nd[(s-r-1)%Nd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new bt(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*cs-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):cs;m>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);let p=[],x=0;for(let A=0;A<cs;++A){let I=A/y,S=Math.exp(-I*I/2);p.push(S),A===0?x+=S:A<m&&(x+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-n;let v=this._sizeLods[s],R=3*v*(s>w-Zs?s-w+Zs:0),T=4*(this._cubeSize-v);ia(e,R,T,3*v,2*v),c.setRenderTarget(e),c.render(d,Qc)}};function gx(i){let t=[],e=[],n=[],s=i,r=i-Zs+1+Pd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Zs?c=Pd[o-i+Zs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,x=new Float32Array(y*g*f),w=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,I=T>2?0:-1,S=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(S,y*g*T),w.set(u,m*g*T);let M=[T,T,T,T,T,T];v.set(M,p*g*T)}let R=new Qe;R.setAttribute("position",new _n(x,y)),R.setAttribute("uv",new _n(w,m)),R.setAttribute("faceIndex",new _n(v,p)),t.push(R),s>Zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dd(i,t,e){let n=new ui(i,t,e);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function yx(i,t,e){let n=new Float32Array(cs),s=new D(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Bd(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ud(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===vl||c===_l,h=c===er||c===nr;if(l||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ba(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ba(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _x(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let x=f.array;y=f.version;for(let w=0,v=x.length;w<v;w+=3){let R=x[w+0],T=x[w+1],A=x[w+2];u.push(R,T,T,A,A,R)}}else if(g!==void 0){let x=g.array;y=g.version;for(let w=0,v=x.length/3-1;w<v;w+=3){let R=w+0,T=w+1,A=w+2;u.push(R,T,T,A,A,R)}}else return;let m=new(Sf(u)?va:xa)(u,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Mx(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,y,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*y[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function wx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function bx(i,t,e){let n=new WeakMap,s=new de;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let v=a.attributes.position.count*w,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*R*4*d),A=new ga(T,v,R,d);A.type=ai,A.needsUpdate=!0;let I=w*4;for(let M=0;M<d;M++){let P=m[M],H=p[M],L=x[M],B=v*R*4*M;for(let z=0;z<P.count;z++){let N=z*I;f===!0&&(s.fromBufferAttribute(P,z),T[B+N+0]=s.x,T[B+N+1]=s.y,T[B+N+2]=s.z,T[B+N+3]=0),g===!0&&(s.fromBufferAttribute(H,z),T[B+N+4]=s.x,T[B+N+5]=s.y,T[B+N+6]=s.z,T[B+N+7]=0),y===!0&&(s.fromBufferAttribute(L,z),T[B+N+8]=s.x,T[B+N+9]=s.y,T[B+N+10]=s.z,T[B+N+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new at(v,R)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Sx(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Sa=class extends ln{constructor(t,e,n,s,r,o,a,c,l,h=Js){if(h!==Js&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Js&&(n=us),n===void 0&&h===rr&&(n=sr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Dn,this.minFilter=c!==void 0?c:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Rf=new ln,Fd=new Sa(1,1),Cf=new ga,If=new Jl,Pf=new Ma,Od=[],zd=[],kd=new Float32Array(16),Hd=new Float32Array(9),Vd=new Float32Array(4);function dr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Od[s];if(r===void 0&&(r=new Float32Array(s),Od[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ka(i,t){let e=zd[t];e===void 0&&(e=new Int32Array(t),zd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ex(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function Ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function Rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Cx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;Vd.set(n),i.uniformMatrix2fv(this.addr,!1,Vd),Pe(e,n)}}function Ix(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;Hd.set(n),i.uniformMatrix3fv(this.addr,!1,Hd),Pe(e,n)}}function Px(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;kd.set(n),i.uniformMatrix4fv(this.addr,!1,kd),Pe(e,n)}}function Lx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function Dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function Bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function Ux(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function Ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function kx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fd.compareFunction=bf,r=Fd):r=Rf,e.setTexture2D(t||r,s)}function Hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||If,s)}function Vx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Pf,s)}function Gx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Cf,s)}function Wx(i){switch(i){case 5126:return Ex;case 35664:return Tx;case 35665:return Ax;case 35666:return Rx;case 35674:return Cx;case 35675:return Ix;case 35676:return Px;case 5124:case 35670:return Lx;case 35667:case 35671:return Nx;case 35668:case 35672:return Dx;case 35669:case 35673:return Bx;case 5125:return Ux;case 36294:return Fx;case 36295:return Ox;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Gx}}function qx(i,t){i.uniform1fv(this.addr,t)}function Xx(i,t){let e=dr(t,this.size,2);i.uniform2fv(this.addr,e)}function Yx(i,t){let e=dr(t,this.size,3);i.uniform3fv(this.addr,e)}function $x(i,t){let e=dr(t,this.size,4);i.uniform4fv(this.addr,e)}function Zx(i,t){let e=dr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jx(i,t){let e=dr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jx(i,t){let e=dr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kx(i,t){i.uniform1iv(this.addr,t)}function Qx(i,t){i.uniform2iv(this.addr,t)}function tv(i,t){i.uniform3iv(this.addr,t)}function ev(i,t){i.uniform4iv(this.addr,t)}function nv(i,t){i.uniform1uiv(this.addr,t)}function iv(i,t){i.uniform2uiv(this.addr,t)}function sv(i,t){i.uniform3uiv(this.addr,t)}function rv(i,t){i.uniform4uiv(this.addr,t)}function ov(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Rf,r[o])}function av(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||If,r[o])}function cv(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Pf,r[o])}function lv(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Cf,r[o])}function hv(i){switch(i){case 5126:return qx;case 35664:return Xx;case 35665:return Yx;case 35666:return $x;case 35674:return Zx;case 35675:return jx;case 35676:return Jx;case 5124:case 35670:return Kx;case 35667:case 35671:return Qx;case 35668:case 35672:return tv;case 35669:case 35673:return ev;case 5125:return nv;case 36294:return iv;case 36295:return sv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return lv}}var th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wx(e.type)}},eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hv(e.type)}},nh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},sl=/(\w+)(\])?(\[|\.)?/g;function Gd(i,t){i.seq.push(t),i.map[t.id]=t}function uv(i,t,e){let n=i.name,s=n.length;for(sl.lastIndex=0;;){let r=sl.exec(n),o=sl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Gd(e,l===void 0?new th(a,i,t):new eh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new nh(a),Gd(e,d)),e=d}}}var Qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);uv(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Wd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var dv=37297,fv=0;function pv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var qd=new Vt;function mv(i){ee._getMatrix(qd,ee.workingColorSpace,i);let t=`mat3( ${qd.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case za:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+pv(i.getShaderSource(t),o)}else return s}function gv(i,t){let e=mv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yv(i,t){let e;switch(t){case Rm:e="Linear";break;case Cm:e="Reinhard";break;case Im:e="Cineon";break;case Fa:e="ACESFilmic";break;case Lm:e="AgX";break;case Nm:e="Neutral";break;case Pm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sa=new D;function xv(){ee.getLuminanceCoefficients(sa);let i=sa.x.toFixed(4),t=sa.y.toFixed(4),e=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function _v(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Or(i){return i!==""}function Yd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $d(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(i){return i.replace(wv,Sv)}var bv=new Map;function Sv(i,t){let e=Wt[t];if(e===void 0){let n=bv.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ih(e)}var Ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zd(i){return i.replace(Ev,Tv)}function Tv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Av(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function Rv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case er:case nr:t="ENVMAP_TYPE_CUBE";break;case Oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case nr:t="ENVMAP_MODE_REFRACTION";break}return t}function Iv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hf:t="ENVMAP_BLENDING_MULTIPLY";break;case Tm:t="ENVMAP_BLENDING_MIX";break;case Am:t="ENVMAP_BLENDING_ADD";break}return t}function Pv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Lv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Av(e),l=Rv(e),h=Cv(e),d=Iv(e),u=Pv(e),f=vv(e),g=_v(r),y=s.createProgram(),m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(m=[jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Di?yv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,gv("linearToOutputTexel",e.outputColorSpace),xv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),o=ih(o),o=Yd(o,e),o=$d(o,e),a=ih(a),a=Yd(a,e),a=$d(a,e),o=Zd(o),a=Zd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=x+m+o,v=x+p+a,R=Wd(s,s.VERTEX_SHADER,w),T=Wd(s,s.FRAGMENT_SHADER,v);s.attachShader(y,R),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(P){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(y).trim(),L=s.getShaderInfoLog(R).trim(),B=s.getShaderInfoLog(T).trim(),z=!0,N=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,R,T);else{let Z=Xd(s,R,"vertex"),V=Xd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+Z+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(L===""||B==="")&&(N=!1);N&&(P.diagnostics={runnable:z,programLog:H,vertexShader:{log:L,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(R),s.deleteShader(T),I=new Qs(s,y),S=Mv(s,y)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,dv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=T,this}var Nv=0,sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rh(t),e.set(t,n)),n}},rh=class{constructor(t){this.id=Nv++,this.code=t,this.usedTimes=0}};function Dv(i,t,e,n,s,r,o){let a=new Xr,c=new sh,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,H,L){let B=H.fog,z=L.geometry,N=S.isMeshStandardMaterial?H.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||N),V=Z&&Z.mapping===Oa?Z.image.height:null,j=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ct=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ft=ct!==void 0?ct.length:0,ot=0;z.morphAttributes.position!==void 0&&(ot=1),z.morphAttributes.normal!==void 0&&(ot=2),z.morphAttributes.color!==void 0&&(ot=3);let $t,Y,it,St;if(j){let he=Vn[j];$t=he.vertexShader,Y=he.fragmentShader}else $t=S.vertexShader,Y=S.fragmentShader,c.update(S),it=c.getVertexShaderID(S),St=c.getFragmentShaderID(S);let ht=i.getRenderTarget(),Bt=i.state.buffers.depth.getReversed(),zt=L.isInstancedMesh===!0,qt=L.isBatchedMesh===!0,Ee=!!S.map,Qt=!!S.matcap,Re=!!Z,k=!!S.aoMap,gn=!!S.lightMap,Zt=!!S.bumpMap,jt=!!S.normalMap,Nt=!!S.displacementMap,ge=!!S.emissiveMap,Lt=!!S.metalnessMap,C=!!S.roughnessMap,b=S.anisotropy>0,G=S.clearcoat>0,J=S.dispersion>0,et=S.iridescence>0,$=S.sheen>0,Rt=S.transmission>0,dt=b&&!!S.anisotropyMap,xt=G&&!!S.clearcoatMap,te=G&&!!S.clearcoatNormalMap,st=G&&!!S.clearcoatRoughnessMap,Mt=et&&!!S.iridescenceMap,Dt=et&&!!S.iridescenceThicknessMap,Ft=$&&!!S.sheenColorMap,wt=$&&!!S.sheenRoughnessMap,Jt=!!S.specularMap,Gt=!!S.specularColorMap,fe=!!S.specularIntensityMap,U=Rt&&!!S.transmissionMap,ut=Rt&&!!S.thicknessMap,X=!!S.gradientMap,K=!!S.alphaMap,gt=S.alphaTest>0,pt=!!S.alphaHash,kt=!!S.extensions,Te=Di;S.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Te=i.toneMapping);let Ge={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:$t,fragmentShader:Y,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:St,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:qt,batchingColor:qt&&L._colorsTexture!==null,instancing:zt,instancingColor:zt&&L.instanceColor!==null,instancingMorph:zt&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:hr,alphaToCoverage:!!S.alphaToCoverage,map:Ee,matcap:Qt,envMap:Re,envMapMode:Re&&Z.mapping,envMapCubeUVHeight:V,aoMap:k,lightMap:gn,bumpMap:Zt,normalMap:jt,displacementMap:u&&Nt,emissiveMap:ge,normalMapObjectSpace:jt&&S.normalMapType===Fm,normalMapTangentSpace:jt&&S.normalMapType===wf,metalnessMap:Lt,roughnessMap:C,anisotropy:b,anisotropyMap:dt,clearcoat:G,clearcoatMap:xt,clearcoatNormalMap:te,clearcoatRoughnessMap:st,dispersion:J,iridescence:et,iridescenceMap:Mt,iridescenceThicknessMap:Dt,sheen:$,sheenColorMap:Ft,sheenRoughnessMap:wt,specularMap:Jt,specularColorMap:Gt,specularIntensityMap:fe,transmission:Rt,transmissionMap:U,thicknessMap:ut,gradientMap:X,opaque:S.transparent===!1&&S.blending===js&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:gt,alphaHash:pt,combine:S.combine,mapUv:Ee&&y(S.map.channel),aoMapUv:k&&y(S.aoMap.channel),lightMapUv:gn&&y(S.lightMap.channel),bumpMapUv:Zt&&y(S.bumpMap.channel),normalMapUv:jt&&y(S.normalMap.channel),displacementMapUv:Nt&&y(S.displacementMap.channel),emissiveMapUv:ge&&y(S.emissiveMap.channel),metalnessMapUv:Lt&&y(S.metalnessMap.channel),roughnessMapUv:C&&y(S.roughnessMap.channel),anisotropyMapUv:dt&&y(S.anisotropyMap.channel),clearcoatMapUv:xt&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:te&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:wt&&y(S.sheenRoughnessMap.channel),specularMapUv:Jt&&y(S.specularMap.channel),specularColorMapUv:Gt&&y(S.specularColorMap.channel),specularIntensityMapUv:fe&&y(S.specularIntensityMap.channel),transmissionMapUv:U&&y(S.transmissionMap.channel),thicknessMapUv:ut&&y(S.thicknessMap.channel),alphaMapUv:K&&y(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(jt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Ee||K),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Bt,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ee&&S.map.isVideoTexture===!0&&ee.getTransfer(S.map.colorSpace)===ue,decodeVideoTextureEmissive:ge&&S.emissiveMap.isVideoTexture===!0&&ee.getTransfer(S.emissiveMap.colorSpace)===ue,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===vn,flipSided:S.side===Ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:kt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&S.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(M,S),w(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function w(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let M=g[S.type],P;if(M){let H=Vn[M];P=S0.clone(H.uniforms)}else P=S.uniforms;return P}function R(S,M){let P;for(let H=0,L=h.length;H<L;H++){let B=h[H];if(B.cacheKey===M){P=B,++P.usedTimes;break}}return P===void 0&&(P=new Lv(i,M,S,r),h.push(P)),P}function T(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function A(S){c.remove(S)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:I}}function Bv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Uv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Jd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,g,y,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),t++,p}function a(d,u,f,g,y,m){let p=o(d,u,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,u,f,g,y,m){let p=o(d,u,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||Uv),n.length>1&&n.sort(u||Jd),s.length>1&&s.sort(u||Jd)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Fv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Kd,i.set(n,[o])):s>=r.length?(o=new Kd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ov(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Xt};break;case"SpotLight":e={position:new D,direction:new D,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function zv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var kv=0;function Hv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vv(i){let t=new Ov,e=zv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new Me,o=new Me;function a(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,x=0,w=0,v=0,R=0,T=0,A=0;l.sort(Hv);for(let S=0,M=l.length;S<M;S++){let P=l[S],H=P.color,L=P.intensity,B=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*L,d+=H.g*L,u+=H.b*L;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],L);A++}else if(P.isDirectionalLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=N,f++}else if(P.isSpotLight){let N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(H).multiplyScalar(L),N.distance=B,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[y]=N;let Z=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,Z.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[y]=Z.matrix,P.castShadow){let V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=z,v++}y++}else if(P.isRectAreaLight){let N=t.get(P);N.color.copy(H).multiplyScalar(L),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=N,m++}else if(P.isPointLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){let Z=P.shadow,V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=N,g++}else if(P.isHemisphereLight){let N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(L),N.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[p]=N,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==w||I.numSpotShadows!==v||I.numSpotMaps!==R||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=f,I.pointLength=g,I.spotLength=y,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=w,I.numSpotShadows=v,I.numSpotMaps=R,I.numLightProbes=A,n.version=kv++)}function c(l,h){let d=0,u=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let w=l[p];if(w.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(w.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(w.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function Qd(i){let t=new Vv(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Gv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Qd(i),t.set(s,[a])):r>=o.length?(a=new Qd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var oh=class extends fs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ah=class extends fs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xv(i,t,e){let n=new Yr,s=new at,r=new at,o=new de,a=new oh({depthPacking:Um}),c=new ah,l={},h=e.maxTextureSize,d={[Bi]:Ke,[Ke]:Bi,[vn]:vn},u=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Wv,fragmentShader:qv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Qe;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new bt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lf;let p=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Ni),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let L=p!==ri&&this.type===ri,B=p===ri&&this.type!==ri;for(let z=0,N=T.length;z<N;z++){let Z=T[z],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let j=V.getFrameExtents();if(s.multiply(j),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,V.mapSize.y=r.y)),V.map===null||L===!0||B===!0){let ft=this.type!==ri?{minFilter:Dn,magFilter:Dn}:{};V.map!==null&&V.map.dispose(),V.map=new ui(s.x,s.y,ft),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ct=V.getViewportCount();for(let ft=0;ft<ct;ft++){let ot=V.getViewport(ft);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),H.viewport(o),V.updateMatrices(Z,ft),n=V.getFrustum(),v(A,I,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===ri&&x(V,I),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,P)};function x(T,A){let I=t.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ui(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,f,y,null)}function w(T,A,I,S){let M=null,P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=M.uuid,L=A.uuid,B=l[H];B===void 0&&(B={},l[H]=B);let z=B[L];z===void 0&&(z=M.clone(),B[L]=z,A.addEventListener("dispose",R)),M=z}if(M.visible=A.visible,M.wireframe=A.wireframe,S===ri?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=i.properties.get(M);H.light=I}return M}function v(T,A,I,S,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ri)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let L=t.update(T),B=T.material;if(Array.isArray(B)){let z=L.groups;for(let N=0,Z=z.length;N<Z;N++){let V=z[N],j=B[V.materialIndex];if(j&&j.visible){let ct=w(T,j,S,M);T.onBeforeShadow(i,T,A,I,L,ct,V),i.renderBufferDirect(I,null,L,ct,T,V),T.onAfterShadow(i,T,A,I,L,ct,V)}}}else if(B.visible){let z=w(T,B,S,M);T.onBeforeShadow(i,T,A,I,L,z,null),i.renderBufferDirect(I,null,L,z,T,null),T.onAfterShadow(i,T,A,I,L,z,null)}}let H=T.children;for(let L=0,B=H.length;L<B;L++)v(H[L],A,I,S,M)}function R(T){T.target.removeEventListener("dispose",R);for(let I in l){let S=l[I],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var Yv={[dl]:fl,[pl]:yl,[ml]:xl,[tr]:gl,[fl]:dl,[yl]:pl,[xl]:ml,[gl]:tr};function $v(i,t){function e(){let U=!1,ut=new de,X=null,K=new de(0,0,0,0);return{setMask:function(gt){X!==gt&&!U&&(i.colorMask(gt,gt,gt,gt),X=gt)},setLocked:function(gt){U=gt},setClear:function(gt,pt,kt,Te,Ge){Ge===!0&&(gt*=Te,pt*=Te,kt*=Te),ut.set(gt,pt,kt,Te),K.equals(ut)===!1&&(i.clearColor(gt,pt,kt,Te),K.copy(ut))},reset:function(){U=!1,X=null,K.set(-1,0,0,0)}}}function n(){let U=!1,ut=!1,X=null,K=null,gt=null;return{setReversed:function(pt){if(ut!==pt){let kt=t.get("EXT_clip_control");ut?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);let Te=gt;gt=null,this.setClear(Te)}ut=pt},getReversed:function(){return ut},setTest:function(pt){pt?ht(i.DEPTH_TEST):Bt(i.DEPTH_TEST)},setMask:function(pt){X!==pt&&!U&&(i.depthMask(pt),X=pt)},setFunc:function(pt){if(ut&&(pt=Yv[pt]),K!==pt){switch(pt){case dl:i.depthFunc(i.NEVER);break;case fl:i.depthFunc(i.ALWAYS);break;case pl:i.depthFunc(i.LESS);break;case tr:i.depthFunc(i.LEQUAL);break;case ml:i.depthFunc(i.EQUAL);break;case gl:i.depthFunc(i.GEQUAL);break;case yl:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=pt}},setLocked:function(pt){U=pt},setClear:function(pt){gt!==pt&&(ut&&(pt=1-pt),i.clearDepth(pt),gt=pt)},reset:function(){U=!1,X=null,K=null,gt=null,ut=!1}}}function s(){let U=!1,ut=null,X=null,K=null,gt=null,pt=null,kt=null,Te=null,Ge=null;return{setTest:function(he){U||(he?ht(i.STENCIL_TEST):Bt(i.STENCIL_TEST))},setMask:function(he){ut!==he&&!U&&(i.stencilMask(he),ut=he)},setFunc:function(he,Rn,Kn){(X!==he||K!==Rn||gt!==Kn)&&(i.stencilFunc(he,Rn,Kn),X=he,K=Rn,gt=Kn)},setOp:function(he,Rn,Kn){(pt!==he||kt!==Rn||Te!==Kn)&&(i.stencilOp(he,Rn,Kn),pt=he,kt=Rn,Te=Kn)},setLocked:function(he){U=he},setClear:function(he){Ge!==he&&(i.clearStencil(he),Ge=he)},reset:function(){U=!1,ut=null,X=null,K=null,gt=null,pt=null,kt=null,Te=null,Ge=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,x=null,w=null,v=null,R=null,T=null,A=new Xt(0,0,0),I=0,S=!1,M=null,P=null,H=null,L=null,B=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,Z=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=Z>=2);let j=null,ct={},ft=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),$t=new de().fromArray(ft),Y=new de().fromArray(ot);function it(U,ut,X,K){let gt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(U,pt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<X;kt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(ut+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return pt}let St={};St[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(tr),Zt(!1),jt(td),ht(i.CULL_FACE),k(Ni);function ht(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Bt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function zt(U,ut){return d[U]!==ut?(i.bindFramebuffer(U,ut),d[U]=ut,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ut),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function qt(U,ut){let X=f,K=!1;if(U){X=u.get(ut),X===void 0&&(X=[],u.set(ut,X));let gt=U.textures;if(X.length!==gt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,kt=gt.length;pt<kt;pt++)X[pt]=i.COLOR_ATTACHMENT0+pt;X.length=gt.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function Ee(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let Qt={[os]:i.FUNC_ADD,[lm]:i.FUNC_SUBTRACT,[hm]:i.FUNC_REVERSE_SUBTRACT};Qt[um]=i.MIN,Qt[dm]=i.MAX;let Re={[fm]:i.ZERO,[pm]:i.ONE,[mm]:i.SRC_COLOR,[hl]:i.SRC_ALPHA,[Mm]:i.SRC_ALPHA_SATURATE,[vm]:i.DST_COLOR,[ym]:i.DST_ALPHA,[gm]:i.ONE_MINUS_SRC_COLOR,[ul]:i.ONE_MINUS_SRC_ALPHA,[_m]:i.ONE_MINUS_DST_COLOR,[xm]:i.ONE_MINUS_DST_ALPHA,[wm]:i.CONSTANT_COLOR,[bm]:i.ONE_MINUS_CONSTANT_COLOR,[Sm]:i.CONSTANT_ALPHA,[Em]:i.ONE_MINUS_CONSTANT_ALPHA};function k(U,ut,X,K,gt,pt,kt,Te,Ge,he){if(U===Ni){y===!0&&(Bt(i.BLEND),y=!1);return}if(y===!1&&(ht(i.BLEND),y=!0),U!==cm){if(U!==m||he!==S){if((p!==os||v!==os)&&(i.blendEquation(i.FUNC_ADD),p=os,v=os),he)switch(U){case js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ed:i.blendFunc(i.ONE,i.ONE);break;case nd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case id:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ed:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case id:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,w=null,R=null,T=null,A.set(0,0,0),I=0,m=U,S=he}return}gt=gt||ut,pt=pt||X,kt=kt||K,(ut!==p||gt!==v)&&(i.blendEquationSeparate(Qt[ut],Qt[gt]),p=ut,v=gt),(X!==x||K!==w||pt!==R||kt!==T)&&(i.blendFuncSeparate(Re[X],Re[K],Re[pt],Re[kt]),x=X,w=K,R=pt,T=kt),(Te.equals(A)===!1||Ge!==I)&&(i.blendColor(Te.r,Te.g,Te.b,Ge),A.copy(Te),I=Ge),m=U,S=!1}function gn(U,ut){U.side===vn?Bt(i.CULL_FACE):ht(i.CULL_FACE);let X=U.side===Ke;ut&&(X=!X),Zt(X),U.blending===js&&U.transparent===!1?k(Ni):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let K=U.stencilWrite;a.setTest(K),K&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ge(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function jt(U){U!==om?(ht(i.CULL_FACE),U!==P&&(U===td?i.cullFace(i.BACK):U===am?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Bt(i.CULL_FACE),P=U}function Nt(U){U!==H&&(N&&i.lineWidth(U),H=U)}function ge(U,ut,X){U?(ht(i.POLYGON_OFFSET_FILL),(L!==ut||B!==X)&&(i.polygonOffset(ut,X),L=ut,B=X)):Bt(i.POLYGON_OFFSET_FILL)}function Lt(U){U?ht(i.SCISSOR_TEST):Bt(i.SCISSOR_TEST)}function C(U){U===void 0&&(U=i.TEXTURE0+z-1),j!==U&&(i.activeTexture(U),j=U)}function b(U,ut,X){X===void 0&&(j===null?X=i.TEXTURE0+z-1:X=j);let K=ct[X];K===void 0&&(K={type:void 0,texture:void 0},ct[X]=K),(K.type!==U||K.texture!==ut)&&(j!==X&&(i.activeTexture(X),j=X),i.bindTexture(U,ut||St[U]),K.type=U,K.texture=ut)}function G(){let U=ct[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(U){$t.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),$t.copy(U))}function wt(U){Y.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function Jt(U,ut){let X=l.get(ut);X===void 0&&(X=new WeakMap,l.set(ut,X));let K=X.get(U);K===void 0&&(K=i.getUniformBlockIndex(ut,U.name),X.set(U,K))}function Gt(U,ut){let K=l.get(ut).get(U);c.get(ut)!==K&&(i.uniformBlockBinding(ut,K,U.__bindingPointIndex),c.set(ut,K))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,ct={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,x=null,w=null,v=null,R=null,T=null,A=new Xt(0,0,0),I=0,S=!1,M=null,P=null,H=null,L=null,B=null,$t.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Bt,bindFramebuffer:zt,drawBuffers:qt,useProgram:Ee,setBlending:k,setMaterial:gn,setFlipSided:Zt,setCullFace:jt,setLineWidth:Nt,setPolygonOffset:ge,setScissorTest:Lt,activeTexture:C,bindTexture:b,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:Mt,texImage3D:Dt,updateUBOMapping:Jt,uniformBlockBinding:Gt,texStorage2D:te,texStorage3D:st,texSubImage2D:$,texSubImage3D:Rt,compressedTexSubImage2D:dt,compressedTexSubImage3D:xt,scissor:Ft,viewport:wt,reset:fe}}function tf(i,t,e,n){let s=Zv(n);switch(e){case mf:return i*t;case yf:return i*t;case xf:return i*t*2;case vf:return i*t/s.components*s.byteLength;case Oh:return i*t/s.components*s.byteLength;case _f:return i*t*2/s.components*s.byteLength;case zh:return i*t*2/s.components*s.byteLength;case gf:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case kh:return i*t*4/s.components*s.byteLength;case aa:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case la:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:case El:return Math.max(i,16)*Math.max(t,8)/4;case wl:case Sl:return Math.max(i,8)*Math.max(t,8)/2;case Tl:case Al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ua:case Gl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Mf:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xl:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zv(i){switch(i){case hi:case df:return{byteLength:1,components:1};case Wr:case ff:case so:return{byteLength:2,components:1};case Uh:case Fh:return{byteLength:2,components:4};case us:case Bh:case ai:return{byteLength:4,components:1};case pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function jv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return f?new OffscreenCanvas(C,b):pa("canvas")}function y(C,b,G){let J=1,et=Lt(C);if((et.width>G||et.height>G)&&(J=G/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let $=Math.floor(J*et.width),Rt=Math.floor(J*et.height);d===void 0&&(d=g($,Rt));let dt=b?g($,Rt):d;return dt.width=$,dt.height=Rt,dt.getContext("2d").drawImage(C,0,0,$,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+$+"x"+Rt+")."),dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(C,b,G,J,et=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=b;if(b===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),b===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGB8UI),G===i.UNSIGNED_SHORT&&($=i.RGB16UI),G===i.UNSIGNED_INT&&($=i.RGB32UI),G===i.BYTE&&($=i.RGB8I),G===i.SHORT&&($=i.RGB16I),G===i.INT&&($=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGBA8UI),G===i.UNSIGNED_SHORT&&($=i.RGBA16UI),G===i.UNSIGNED_INT&&($=i.RGBA32UI),G===i.BYTE&&($=i.RGBA8I),G===i.SHORT&&($=i.RGBA16I),G===i.INT&&($=i.RGBA32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),b===i.RGBA){let Rt=et?za:ee.getTransfer(J);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=Rt===ue?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(C,b){let G;return C?b===null||b===us||b===sr?G=i.DEPTH24_STENCIL8:b===ai?G=i.DEPTH32F_STENCIL8:b===Wr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===us||b===sr?G=i.DEPTH_COMPONENT24:b===ai?G=i.DEPTH_COMPONENT32F:b===Wr&&(G=i.DEPTH_COMPONENT16),G}function R(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Dn&&C.minFilter!==Gn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){let b=C.target;b.removeEventListener("dispose",T),I(b),b.isVideoTexture&&h.delete(b)}function A(C){let b=C.target;b.removeEventListener("dispose",A),M(b)}function I(C){let b=n.get(C);if(b.__webglInit===void 0)return;let G=C.source,J=u.get(G);if(J){let et=J[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(C),Object.keys(J).length===0&&u.delete(G)}n.remove(C)}function S(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let G=C.source,J=u.get(G);delete J[b.__cacheKey],o.memory.textures--}function M(C){let b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let et=0;et<b.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(b.__webglFramebuffer[J][et]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=C.textures;for(let J=0,et=G.length;J<et;J++){let $=n.get(G[J]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(C)}let P=0;function H(){P=0}function L(){let C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function B(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function z(C,b){let G=n.get(C);if(C.isVideoTexture&&Nt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){let J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,C,b);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function N(C,b){let G=n.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function Z(C,b){let G=n.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function V(C,b){let G=n.get(C);if(C.version>0&&G.__version!==C.version){it(G,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}let j={[ir]:i.REPEAT,[ls]:i.CLAMP_TO_EDGE,[Ml]:i.MIRRORED_REPEAT},ct={[Dn]:i.NEAREST,[Dm]:i.NEAREST_MIPMAP_NEAREST,[Oo]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[Pc]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},ft={[Om]:i.NEVER,[Wm]:i.ALWAYS,[zm]:i.LESS,[bf]:i.LEQUAL,[km]:i.EQUAL,[Gm]:i.GEQUAL,[Hm]:i.GREATER,[Vm]:i.NOTEQUAL};function ot(C,b){if(b.type===ai&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Gn||b.magFilter===Pc||b.magFilter===Oo||b.magFilter===hs||b.minFilter===Gn||b.minFilter===Pc||b.minFilter===Oo||b.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,j[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,j[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,j[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ct[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ft[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dn||b.minFilter!==Oo&&b.minFilter!==hs||b.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function $t(C,b){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));let J=b.source,et=u.get(J);et===void 0&&(et={},u.set(J,et));let $=B(b);if($!==C.__cacheKey){et[$]===void 0&&(et[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),et[$].usedTimes++;let Rt=et[C.__cacheKey];Rt!==void 0&&(et[C.__cacheKey].usedTimes--,Rt.usedTimes===0&&S(b)),C.__cacheKey=$,C.__webglTexture=et[$].texture}return G}function Y(C,b,G){let J=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=i.TEXTURE_3D);let et=$t(C,b),$=b.source;e.bindTexture(J,C.__webglTexture,i.TEXTURE0+G);let Rt=n.get($);if($.version!==Rt.__version||et===!0){e.activeTexture(i.TEXTURE0+G);let dt=ee.getPrimaries(ee.workingColorSpace),xt=b.colorSpace===cn?null:ee.getPrimaries(b.colorSpace),te=b.colorSpace===cn||dt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let st=y(b.image,!1,s.maxTextureSize);st=ge(b,st);let Mt=r.convert(b.format,b.colorSpace),Dt=r.convert(b.type),Ft=w(b.internalFormat,Mt,Dt,b.colorSpace,b.isVideoTexture);ot(J,b);let wt,Jt=b.mipmaps,Gt=b.isVideoTexture!==!0,fe=Rt.__version===void 0||et===!0,U=$.dataReady,ut=R(b,st);if(b.isDepthTexture)Ft=v(b.format===rr,b.type),fe&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,Ft,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Ft,st.width,st.height,0,Mt,Dt,null));else if(b.isDataTexture)if(Jt.length>0){Gt&&fe&&e.texStorage2D(i.TEXTURE_2D,ut,Ft,Jt[0].width,Jt[0].height);for(let X=0,K=Jt.length;X<K;X++)wt=Jt[X],Gt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,wt.width,wt.height,Mt,Dt,wt.data):e.texImage2D(i.TEXTURE_2D,X,Ft,wt.width,wt.height,0,Mt,Dt,wt.data);b.generateMipmaps=!1}else Gt?(fe&&e.texStorage2D(i.TEXTURE_2D,ut,Ft,st.width,st.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,Mt,Dt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,st.width,st.height,0,Mt,Dt,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Gt&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ft,Jt[0].width,Jt[0].height,st.depth);for(let X=0,K=Jt.length;X<K;X++)if(wt=Jt[X],b.format!==Nn)if(Mt!==null)if(Gt){if(U)if(b.layerUpdates.size>0){let gt=tf(wt.width,wt.height,b.format,b.type);for(let pt of b.layerUpdates){let kt=wt.data.subarray(pt*gt/wt.data.BYTES_PER_ELEMENT,(pt+1)*gt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,pt,wt.width,wt.height,1,Mt,kt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,wt.width,wt.height,st.depth,Mt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ft,wt.width,wt.height,st.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,wt.width,wt.height,st.depth,Mt,Dt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Ft,wt.width,wt.height,st.depth,0,Mt,Dt,wt.data)}else{Gt&&fe&&e.texStorage2D(i.TEXTURE_2D,ut,Ft,Jt[0].width,Jt[0].height);for(let X=0,K=Jt.length;X<K;X++)wt=Jt[X],b.format!==Nn?Mt!==null?Gt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,wt.width,wt.height,Mt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Ft,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,wt.width,wt.height,Mt,Dt,wt.data):e.texImage2D(i.TEXTURE_2D,X,Ft,wt.width,wt.height,0,Mt,Dt,wt.data)}else if(b.isDataArrayTexture)if(Gt){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ft,st.width,st.height,st.depth),U)if(b.layerUpdates.size>0){let X=tf(st.width,st.height,b.format,b.type);for(let K of b.layerUpdates){let gt=st.data.subarray(K*X/st.data.BYTES_PER_ELEMENT,(K+1)*X/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,st.width,st.height,1,Mt,Dt,gt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Mt,Dt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,st.width,st.height,st.depth,0,Mt,Dt,st.data);else if(b.isData3DTexture)Gt?(fe&&e.texStorage3D(i.TEXTURE_3D,ut,Ft,st.width,st.height,st.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Mt,Dt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,st.width,st.height,st.depth,0,Mt,Dt,st.data);else if(b.isFramebufferTexture){if(fe)if(Gt)e.texStorage2D(i.TEXTURE_2D,ut,Ft,st.width,st.height);else{let X=st.width,K=st.height;for(let gt=0;gt<ut;gt++)e.texImage2D(i.TEXTURE_2D,gt,Ft,X,K,0,Mt,Dt,null),X>>=1,K>>=1}}else if(Jt.length>0){if(Gt&&fe){let X=Lt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Ft,X.width,X.height)}for(let X=0,K=Jt.length;X<K;X++)wt=Jt[X],Gt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Mt,Dt,wt):e.texImage2D(i.TEXTURE_2D,X,Ft,Mt,Dt,wt);b.generateMipmaps=!1}else if(Gt){if(fe){let X=Lt(st);e.texStorage2D(i.TEXTURE_2D,ut,Ft,X.width,X.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Dt,st)}else e.texImage2D(i.TEXTURE_2D,0,Ft,Mt,Dt,st);m(b)&&p(J),Rt.__version=$.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function it(C,b,G){if(b.image.length!==6)return;let J=$t(C,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);let $=n.get(et);if(et.version!==$.__version||J===!0){e.activeTexture(i.TEXTURE0+G);let Rt=ee.getPrimaries(ee.workingColorSpace),dt=b.colorSpace===cn?null:ee.getPrimaries(b.colorSpace),xt=b.colorSpace===cn||Rt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let te=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,Mt=[];for(let K=0;K<6;K++)!te&&!st?Mt[K]=y(b.image[K],!0,s.maxCubemapSize):Mt[K]=st?b.image[K].image:b.image[K],Mt[K]=ge(b,Mt[K]);let Dt=Mt[0],Ft=r.convert(b.format,b.colorSpace),wt=r.convert(b.type),Jt=w(b.internalFormat,Ft,wt,b.colorSpace),Gt=b.isVideoTexture!==!0,fe=$.__version===void 0||J===!0,U=et.dataReady,ut=R(b,Dt);ot(i.TEXTURE_CUBE_MAP,b);let X;if(te){Gt&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Jt,Dt.width,Dt.height);for(let K=0;K<6;K++){X=Mt[K].mipmaps;for(let gt=0;gt<X.length;gt++){let pt=X[gt];b.format!==Nn?Ft!==null?Gt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,pt.width,pt.height,Ft,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Jt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,pt.width,pt.height,Ft,wt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Jt,pt.width,pt.height,0,Ft,wt,pt.data)}}}else{if(X=b.mipmaps,Gt&&fe){X.length>0&&ut++;let K=Lt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Jt,K.width,K.height)}for(let K=0;K<6;K++)if(st){Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Mt[K].width,Mt[K].height,Ft,wt,Mt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Jt,Mt[K].width,Mt[K].height,0,Ft,wt,Mt[K].data);for(let gt=0;gt<X.length;gt++){let kt=X[gt].image[K].image;Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,kt.width,kt.height,Ft,wt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Jt,kt.width,kt.height,0,Ft,wt,kt.data)}}else{Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ft,wt,Mt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Jt,Ft,wt,Mt[K]);for(let gt=0;gt<X.length;gt++){let pt=X[gt];Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,Ft,wt,pt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Jt,Ft,wt,pt.image[K])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),$.__version=et.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function St(C,b,G,J,et,$){let Rt=r.convert(G.format,G.colorSpace),dt=r.convert(G.type),xt=w(G.internalFormat,Rt,dt,G.colorSpace),te=n.get(b),st=n.get(G);if(st.__renderTarget=b,!te.__hasExternalTextures){let Mt=Math.max(1,b.width>>$),Dt=Math.max(1,b.height>>$);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,$,xt,Mt,Dt,b.depth,0,Rt,dt,null):e.texImage2D(et,$,xt,Mt,Dt,0,Rt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),jt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,st.__webglTexture,0,Zt(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,st.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(C,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){let J=b.depthTexture,et=J&&J.isDepthTexture?J.type:null,$=v(b.stencilBuffer,et),Rt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Zt(b);jt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,$,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,$,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,$,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,C)}else{let J=b.textures;for(let et=0;et<J.length;et++){let $=J[et],Rt=r.convert($.format,$.colorSpace),dt=r.convert($.type),xt=w($.internalFormat,Rt,dt,$.colorSpace),te=Zt(b);G&&jt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,xt,b.width,b.height):jt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,xt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);let et=J.__webglTexture,$=Zt(b);if(b.depthTexture.format===Js)jt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(b.depthTexture.format===rr)jt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function zt(C){let b=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let J=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){let et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=J}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Bt(b.__webglFramebuffer,C)}else if(G){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=i.createRenderbuffer(),ht(b.__webglDepthbuffer[J],C,!1);else{let et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ht(b.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(C,b,G){let J=n.get(C);b!==void 0&&St(J.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&zt(C)}function Ee(C){let b=C.texture,G=n.get(C),J=n.get(b);C.addEventListener("dispose",A);let et=C.textures,$=C.isWebGLCubeRenderTarget===!0,Rt=et.length>1;if(Rt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=b.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[dt]=[];for(let xt=0;xt<b.mipmaps.length;xt++)G.__webglFramebuffer[dt][xt]=i.createFramebuffer()}else G.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)G.__webglFramebuffer[dt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let dt=0,xt=et.length;dt<xt;dt++){let te=n.get(et[dt]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&jt(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){let xt=et[dt];G.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[dt]);let te=r.convert(xt.format,xt.colorSpace),st=r.convert(xt.type),Mt=w(xt.internalFormat,te,st,xt.colorSpace,C.isXRRenderTarget===!0),Dt=Zt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,G.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ot(i.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)St(G.__webglFramebuffer[dt][xt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else St(G.__webglFramebuffer[dt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let dt=0,xt=et.length;dt<xt;dt++){let te=et[dt],st=n.get(te);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),ot(i.TEXTURE_2D,te),St(G.__webglFramebuffer,C,te,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(te)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,J.__webglTexture),ot(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)St(G.__webglFramebuffer[xt],C,b,i.COLOR_ATTACHMENT0,dt,xt);else St(G.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,dt,0);m(b)&&p(dt),e.unbindTexture()}C.depthBuffer&&zt(C)}function Qt(C){let b=C.textures;for(let G=0,J=b.length;G<J;G++){let et=b[G];if(m(et)){let $=x(C),Rt=n.get(et).__webglTexture;e.bindTexture($,Rt),p($),e.unbindTexture()}}}let Re=[],k=[];function gn(C){if(C.samples>0){if(jt(C)===!1){let b=C.textures,G=C.width,J=C.height,et=i.COLOR_BUFFER_BIT,$=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(C),dt=b.length>1;if(dt)for(let xt=0;xt<b.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let xt=0;xt<b.length;xt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[xt]);let te=n.get(b[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,et,i.NEAREST),c===!0&&(Re.length=0,k.length=0,Re.push(i.COLOR_ATTACHMENT0+xt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Re.push($),k.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let xt=0;xt<b.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[xt]);let te=n.get(b[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Zt(C){return Math.min(s.maxSamples,C.samples)}function jt(C){let b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Nt(C){let b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function ge(C,b){let G=C.colorSpace,J=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==hr&&G!==cn&&(ee.getTransfer(G)===ue?(J!==Nn||et!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Lt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=H,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=qt,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=jt}function Jv(i,t){function e(n,s=cn){let r,o=ee.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===Uh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===df)return i.BYTE;if(n===ff)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===Bh)return i.INT;if(n===us)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===so)return i.HALF_FLOAT;if(n===mf)return i.ALPHA;if(n===gf)return i.RGB;if(n===Nn)return i.RGBA;if(n===yf)return i.LUMINANCE;if(n===xf)return i.LUMINANCE_ALPHA;if(n===Js)return i.DEPTH_COMPONENT;if(n===rr)return i.DEPTH_STENCIL;if(n===vf)return i.RED;if(n===Oh)return i.RED_INTEGER;if(n===_f)return i.RG;if(n===zh)return i.RG_INTEGER;if(n===kh)return i.RGBA_INTEGER;if(n===aa||n===ca||n===la||n===ha)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===bl||n===Sl||n===El)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tl||n===Al||n===Rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tl||n===Al)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cl||n===Il||n===Pl||n===Ll||n===Nl||n===Dl||n===Bl||n===Ul||n===Fl||n===Ol||n===zl||n===kl||n===Hl||n===Vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Il)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ll)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===Gl||n===Wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ua)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mf||n===ql||n===Xl||n===Yl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ch=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},se=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kv={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new ln,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Wn({vertexShader:Qv,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hh=class extends Ui{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,y=new lh,m=e.getContextAttributes(),p=null,x=null,w=[],v=[],R=new at,T=null,A=new ze;A.viewport=new de;let I=new ze;I.viewport=new de;let S=[A,I],M=new ch,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=w[Y];return it===void 0&&(it=new Hr,w[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=w[Y];return it===void 0&&(it=new Hr,w[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=w[Y];return it===void 0&&(it=new Hr,w[Y]=it),it.getHandSpace()};function L(Y){let it=v.indexOf(Y.inputSource);if(it===-1)return;let St=w[it];St!==void 0&&(St.update(Y.inputSource,Y.frame,l||o),St.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",z);for(let Y=0;Y<w.length;Y++){let it=v[Y];it!==null&&(v[Y]=null,w[Y].disconnect(it))}P=null,H=null,y.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,x=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",B),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ui(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,St=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?rr:Js,St=m.stencil?sr:us);let Bt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new ui(u.textureWidth,u.textureHeight,{format:Nn,type:hi,depthTexture:new Sa(u.textureWidth,u.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z(Y){for(let it=0;it<Y.removed.length;it++){let St=Y.removed[it],ht=v.indexOf(St);ht>=0&&(v[ht]=null,w[ht].disconnect(St))}for(let it=0;it<Y.added.length;it++){let St=Y.added[it],ht=v.indexOf(St);if(ht===-1){for(let zt=0;zt<w.length;zt++)if(zt>=v.length){v.push(St),ht=zt;break}else if(v[zt]===null){v[zt]=St,ht=zt;break}if(ht===-1)break}let Bt=w[ht];Bt&&Bt.connect(St)}}let N=new D,Z=new D;function V(Y,it,St){N.setFromMatrixPosition(it.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);let ht=N.distanceTo(Z),Bt=it.projectionMatrix.elements,zt=St.projectionMatrix.elements,qt=Bt[14]/(Bt[10]-1),Ee=Bt[14]/(Bt[10]+1),Qt=(Bt[9]+1)/Bt[5],Re=(Bt[9]-1)/Bt[5],k=(Bt[8]-1)/Bt[0],gn=(zt[8]+1)/zt[0],Zt=qt*k,jt=qt*gn,Nt=ht/(-k+gn),ge=Nt*-k;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ge),Y.translateZ(Nt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Bt[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Lt=qt+Nt,C=Ee+Nt,b=Zt-ge,G=jt+(ht-ge),J=Qt*Ee/C*Lt,et=Re*Ee/C*Lt;Y.projectionMatrix.makePerspective(b,G,J,et,Lt,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function j(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let it=Y.near,St=Y.far;y.texture!==null&&(y.depthNear>0&&(it=y.depthNear),y.depthFar>0&&(St=y.depthFar)),M.near=I.near=A.near=it,M.far=I.far=A.far=St,(P!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,H=M.far),A.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,M.layers.mask=A.layers.mask|I.layers.mask;let ht=Y.parent,Bt=M.cameras;j(M,ht);for(let zt=0;zt<Bt.length;zt++)j(Bt[zt],ht);Bt.length===2?V(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),ct(Y,M,ht)};function ct(Y,it,St){St===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(St.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=or*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let ft=null;function ot(Y,it){if(h=it.getViewerPose(l||o),g=it,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ht=!1;St.length!==M.cameras.length&&(M.cameras.length=0,ht=!0);for(let zt=0;zt<St.length;zt++){let qt=St[zt],Ee=null;if(f!==null)Ee=f.getViewport(qt);else{let Re=d.getViewSubImage(u,qt);Ee=Re.viewport,zt===0&&(t.setRenderTargetTextures(x,Re.colorTexture,u.ignoreDepthValues?void 0:Re.depthStencilTexture),t.setRenderTarget(x))}let Qt=S[zt];Qt===void 0&&(Qt=new ze,Qt.layers.enable(zt),Qt.viewport=new de,S[zt]=Qt),Qt.matrix.fromArray(qt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(qt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),zt===0&&(M.matrix.copy(Qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ht===!0&&M.cameras.push(Qt)}let Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){let zt=d.getDepthInformation(St[0]);zt&&zt.isValid&&zt.texture&&y.init(t,zt,s.renderState)}}for(let St=0;St<w.length;St++){let ht=v[St],Bt=w[St];ht!==null&&Bt!==void 0&&Bt.update(ht,it,l||o)}ft&&ft(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let $t=new Af;$t.setAnimationLoop(ot),this.setAnimationLoop=function(Y){ft=Y},this.dispose=function(){}}},ss=new hn,e_=new Me;function n_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,w,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p),w=x.envMap,v=x.envMapRotation;w&&(m.envMap.value=w,ss.copy(v),ss.x*=-1,ss.y*=-1,ss.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),m.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(ss)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,w){let v=w.program;n.uniformBlockBinding(x,v)}function l(x,w){let v=s[x.id];v===void 0&&(g(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));let R=w.program;n.updateUBOMapping(x,R);let T=t.render.frame;r[x.id]!==T&&(u(x),r[x.id]=T)}function h(x){let w=d();x.__bindingPointIndex=w;let v=i.createBuffer(),R=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,v),v}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let w=s[x.id],v=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,A=v.length;T<A;T++){let I=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,M=I.length;S<M;S++){let P=I[S];if(f(P,T,S,R)===!0){let H=P.__offset,L=Array.isArray(P.value)?P.value:[P.value],B=0;for(let z=0;z<L.length;z++){let N=L[z],Z=y(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,H+B,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,w,v,R){let T=x.value,A=w+"_"+v;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let I=R[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(x){let w=x.uniforms,v=0,R=16;for(let A=0,I=w.length;A<I;A++){let S=Array.isArray(w[A])?w[A]:[w[A]];for(let M=0,P=S.length;M<P;M++){let H=S[M],L=Array.isArray(H.value)?H.value:[H.value];for(let B=0,z=L.length;B<z;B++){let N=L[B],Z=y(N),V=v%R,j=V%Z.boundary,ct=V+j;v+=j,ct!==0&&R-ct<Z.storage&&(v+=R-ct),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=Z.storage}}}let T=v%R;return T>0&&(v+=R-T),x.__size=v,x.__cache={},this}function y(x){let w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),w}function m(x){let w=x.target;w.removeEventListener("dispose",m);let v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var $r=class{constructor(t={}){let{canvas:e=a0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,x=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Di,this.toneMappingExposure=1;let v=this,R=!1,T=0,A=0,I=null,S=-1,M=null,P=new de,H=new de,L=null,B=new Xt(0),z=0,N=e.width,Z=e.height,V=1,j=null,ct=null,ft=new de(0,0,N,Z),ot=new de(0,0,N,Z),$t=!1,Y=new Yr,it=!1,St=!1,ht=new Me,Bt=new Me,zt=new D,qt=new de,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function Re(){return I===null?V:1}let k=n;function gn(E,F){return e.getContext(E,F)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nh}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),k===null){let F="webgl2";if(k=gn(F,E),k===null)throw gn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Zt,jt,Nt,ge,Lt,C,b,G,J,et,$,Rt,dt,xt,te,st,Mt,Dt,Ft,wt,Jt,Gt,fe,U;function ut(){Zt=new vx(k),Zt.init(),Gt=new Jv(k,Zt),jt=new fx(k,Zt,t,Gt),Nt=new $v(k,Zt),jt.reverseDepthBuffer&&u&&Nt.buffers.depth.setReversed(!0),ge=new wx(k),Lt=new Bv,C=new jv(k,Zt,Nt,Lt,jt,Gt,ge),b=new mx(v),G=new xx(v),J=new C0(k),fe=new ux(k,J),et=new _x(k,J,ge,fe),$=new Sx(k,et,J,ge),Ft=new bx(k,jt,C),st=new px(Lt),Rt=new Dv(v,b,G,Zt,jt,fe,st),dt=new n_(v,Lt),xt=new Fv,te=new Gv(Zt),Dt=new hx(v,b,G,Nt,$,f,c),Mt=new Xv(v,$,jt),U=new i_(k,ge,jt,Nt),wt=new dx(k,Zt,ge),Jt=new Mx(k,Zt,ge),ge.programs=Rt.programs,v.capabilities=jt,v.extensions=Zt,v.properties=Lt,v.renderLists=xt,v.shadowMap=Mt,v.state=Nt,v.info=ge}ut();let X=new hh(v,k);this.xr=X,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let E=Zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(N,Z,!1))},this.getSize=function(E){return E.set(N,Z)},this.setSize=function(E,F,W=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,Z=F,e.width=Math.floor(E*V),e.height=Math.floor(F*V),W===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(N*V,Z*V).floor()},this.setDrawingBufferSize=function(E,F,W){N=E,Z=F,V=W,e.width=Math.floor(E*W),e.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(ft)},this.setViewport=function(E,F,W,q){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,F,W,q),Nt.viewport(P.copy(ft).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(ot)},this.setScissor=function(E,F,W,q){E.isVector4?ot.set(E.x,E.y,E.z,E.w):ot.set(E,F,W,q),Nt.scissor(H.copy(ot).multiplyScalar(V).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(E){Nt.setScissorTest($t=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){ct=E},this.getClearColor=function(E){return E.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(E=!0,F=!0,W=!0){let q=0;if(E){let O=!1;if(I!==null){let rt=I.texture.format;O=rt===kh||rt===zh||rt===Oh}if(O){let rt=I.texture.type,mt=rt===hi||rt===us||rt===Wr||rt===sr||rt===Uh||rt===Fh,Et=Dt.getClearColor(),Tt=Dt.getClearAlpha(),Ot=Et.r,Ht=Et.g,At=Et.b;mt?(g[0]=Ot,g[1]=Ht,g[2]=At,g[3]=Tt,k.clearBufferuiv(k.COLOR,0,g)):(y[0]=Ot,y[1]=Ht,y[2]=At,y[3]=Tt,k.clearBufferiv(k.COLOR,0,y))}else q|=k.COLOR_BUFFER_BIT}F&&(q|=k.DEPTH_BUFFER_BIT),W&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),xt.dispose(),te.dispose(),Lt.dispose(),b.dispose(),G.dispose(),$.dispose(),fe.dispose(),U.dispose(),Rt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Xu),X.removeEventListener("sessionend",Yu),Ki.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let E=ge.autoReset,F=Mt.enabled,W=Mt.autoUpdate,q=Mt.needsUpdate,O=Mt.type;ut(),ge.autoReset=E,Mt.enabled=F,Mt.autoUpdate=W,Mt.needsUpdate=q,Mt.type=O}function pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function kt(E){let F=E.target;F.removeEventListener("dispose",kt),Te(F)}function Te(E){Ge(E),Lt.remove(E)}function Ge(E){let F=Lt.get(E).programs;F!==void 0&&(F.forEach(function(W){Rt.releaseProgram(W)}),E.isShaderMaterial&&Rt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,q,O,rt){F===null&&(F=Ee);let mt=O.isMesh&&O.matrixWorld.determinant()<0,Et=im(E,F,W,q,O);Nt.setMaterial(q,mt);let Tt=W.index,Ot=1;if(q.wireframe===!0){if(Tt=et.getWireframeAttribute(W),Tt===void 0)return;Ot=2}let Ht=W.drawRange,At=W.attributes.position,ie=Ht.start*Ot,pe=(Ht.start+Ht.count)*Ot;rt!==null&&(ie=Math.max(ie,rt.start*Ot),pe=Math.min(pe,(rt.start+rt.count)*Ot)),Tt!==null?(ie=Math.max(ie,0),pe=Math.min(pe,Tt.count)):At!=null&&(ie=Math.max(ie,0),pe=Math.min(pe,At.count));let ye=pe-ie;if(ye<0||ye===1/0)return;fe.setup(O,q,Et,W,Tt);let Je,re=wt;if(Tt!==null&&(Je=J.get(Tt),re=Jt,re.setIndex(Je)),O.isMesh)q.wireframe===!0?(Nt.setLineWidth(q.wireframeLinewidth*Re()),re.setMode(k.LINES)):re.setMode(k.TRIANGLES);else if(O.isLine){let Ct=q.linewidth;Ct===void 0&&(Ct=1),Nt.setLineWidth(Ct*Re()),O.isLineSegments?re.setMode(k.LINES):O.isLineLoop?re.setMode(k.LINE_LOOP):re.setMode(k.LINE_STRIP)}else O.isPoints?re.setMode(k.POINTS):O.isSprite&&re.setMode(k.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)re.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))re.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ct=O._multiDrawStarts,Qn=O._multiDrawCounts,oe=O._multiDrawCount,Cn=Tt?J.get(Tt).bytesPerElement:1,Ns=Lt.get(q).currentProgram.getUniforms();for(let rn=0;rn<oe;rn++)Ns.setValue(k,"_gl_DrawID",rn),re.render(Ct[rn]/Cn,Qn[rn])}else if(O.isInstancedMesh)re.renderInstances(ie,ye,O.count);else if(W.isInstancedBufferGeometry){let Ct=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Qn=Math.min(W.instanceCount,Ct);re.renderInstances(ie,ye,Qn)}else re.render(ie,ye)};function he(E,F,W){E.transparent===!0&&E.side===vn&&E.forceSinglePass===!1?(E.side=Ke,E.needsUpdate=!0,Fo(E,F,W),E.side=Bi,E.needsUpdate=!0,Fo(E,F,W),E.side=vn):Fo(E,F,W)}this.compile=function(E,F,W=null){W===null&&(W=E),p=te.get(W),p.init(F),w.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==W&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let q=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let rt=O.material;if(rt)if(Array.isArray(rt))for(let mt=0;mt<rt.length;mt++){let Et=rt[mt];he(Et,W,O),q.add(Et)}else he(rt,W,O),q.add(rt)}),w.pop(),p=null,q},this.compileAsync=function(E,F,W=null){let q=this.compile(E,F,W);return new Promise(O=>{function rt(){if(q.forEach(function(mt){Lt.get(mt).currentProgram.isReady()&&q.delete(mt)}),q.size===0){O(E);return}setTimeout(rt,10)}Zt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Rn=null;function Kn(E){Rn&&Rn(E)}function Xu(){Ki.stop()}function Yu(){Ki.start()}let Ki=new Af;Ki.setAnimationLoop(Kn),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(E){Rn=E,X.setAnimationLoop(E),E===null?Ki.stop():Ki.start()},X.addEventListener("sessionstart",Xu),X.addEventListener("sessionend",Yu),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,I),p=te.get(E,w.length),p.init(F),w.push(p),Bt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Bt),St=this.localClippingEnabled,it=st.init(this.clippingPlanes,St),m=xt.get(E,x.length),m.init(),x.push(m),X.enabled===!0&&X.isPresenting===!0){let rt=v.xr.getDepthSensingMesh();rt!==null&&Ic(rt,F,-1/0,v.sortObjects)}Ic(E,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(j,ct),Qt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Qt&&Dt.addToRenderList(m,E),this.info.render.frame++,it===!0&&st.beginShadows();let W=p.state.shadowsArray;Mt.render(W,E,F),it===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){let rt=F.cameras;if(O.length>0)for(let mt=0,Et=rt.length;mt<Et;mt++){let Tt=rt[mt];Zu(q,O,E,Tt)}Qt&&Dt.render(E);for(let mt=0,Et=rt.length;mt<Et;mt++){let Tt=rt[mt];$u(m,E,Tt,Tt.viewport)}}else O.length>0&&Zu(q,O,E,F),Qt&&Dt.render(E),$u(m,E,F);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(v,E,F),fe.resetDefaultState(),S=-1,M=null,w.pop(),w.length>0?(p=w[w.length-1],it===!0&&st.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ic(E,F,W,q){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){q&&qt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Bt);let mt=$.update(E),Et=E.material;Et.visible&&m.push(E,mt,Et,W,qt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){let mt=$.update(E),Et=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),qt.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),qt.copy(mt.boundingSphere.center)),qt.applyMatrix4(E.matrixWorld).applyMatrix4(Bt)),Array.isArray(Et)){let Tt=mt.groups;for(let Ot=0,Ht=Tt.length;Ot<Ht;Ot++){let At=Tt[Ot],ie=Et[At.materialIndex];ie&&ie.visible&&m.push(E,mt,ie,W,qt.z,At)}}else Et.visible&&m.push(E,mt,Et,W,qt.z,null)}}let rt=E.children;for(let mt=0,Et=rt.length;mt<Et;mt++)Ic(rt[mt],F,W,q)}function $u(E,F,W,q){let O=E.opaque,rt=E.transmissive,mt=E.transparent;p.setupLightsView(W),it===!0&&st.setGlobalState(v.clippingPlanes,W),q&&Nt.viewport(P.copy(q)),O.length>0&&Uo(O,F,W),rt.length>0&&Uo(rt,F,W),mt.length>0&&Uo(mt,F,W),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function Zu(E,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new ui(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?so:hi,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let rt=p.state.transmissionRenderTarget[q.id],mt=q.viewport||P;rt.setSize(mt.z,mt.w);let Et=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(B),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),Qt&&Dt.render(W);let Tt=v.toneMapping;v.toneMapping=Di;let Ot=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),it===!0&&st.setGlobalState(v.clippingPlanes,q),Uo(E,W,q),C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let At=0,ie=F.length;At<ie;At++){let pe=F[At],ye=pe.object,Je=pe.geometry,re=pe.material,Ct=pe.group;if(re.side===vn&&ye.layers.test(q.layers)){let Qn=re.side;re.side=Ke,re.needsUpdate=!0,ju(ye,W,q,Je,re,Ct),re.side=Qn,re.needsUpdate=!0,Ht=!0}}Ht===!0&&(C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt))}v.setRenderTarget(Et),v.setClearColor(B,z),Ot!==void 0&&(q.viewport=Ot),v.toneMapping=Tt}function Uo(E,F,W){let q=F.isScene===!0?F.overrideMaterial:null;for(let O=0,rt=E.length;O<rt;O++){let mt=E[O],Et=mt.object,Tt=mt.geometry,Ot=q===null?mt.material:q,Ht=mt.group;Et.layers.test(W.layers)&&ju(Et,F,W,Tt,Ot,Ht)}}function ju(E,F,W,q,O,rt){E.onBeforeRender(v,F,W,q,O,rt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,F,W,q,E,rt),O.transparent===!0&&O.side===vn&&O.forceSinglePass===!1?(O.side=Ke,O.needsUpdate=!0,v.renderBufferDirect(W,F,q,O,E,rt),O.side=Bi,O.needsUpdate=!0,v.renderBufferDirect(W,F,q,O,E,rt),O.side=vn):v.renderBufferDirect(W,F,q,O,E,rt),E.onAfterRender(v,F,W,q,O,rt)}function Fo(E,F,W){F.isScene!==!0&&(F=Ee);let q=Lt.get(E),O=p.state.lights,rt=p.state.shadowsArray,mt=O.state.version,Et=Rt.getParameters(E,O.state,rt,F,W),Tt=Rt.getProgramCacheKey(Et),Ot=q.programs;q.environment=E.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(E.isMeshStandardMaterial?G:b).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ot===void 0&&(E.addEventListener("dispose",kt),Ot=new Map,q.programs=Ot);let Ht=Ot.get(Tt);if(Ht!==void 0){if(q.currentProgram===Ht&&q.lightsStateVersion===mt)return Ku(E,Et),Ht}else Et.uniforms=Rt.getUniforms(E),E.onBeforeCompile(Et,v),Ht=Rt.acquireProgram(Et,Tt),Ot.set(Tt,Ht),q.uniforms=Et.uniforms;let At=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=st.uniform),Ku(E,Et),q.needsLights=rm(E),q.lightsStateVersion=mt,q.needsLights&&(At.ambientLightColor.value=O.state.ambient,At.lightProbe.value=O.state.probe,At.directionalLights.value=O.state.directional,At.directionalLightShadows.value=O.state.directionalShadow,At.spotLights.value=O.state.spot,At.spotLightShadows.value=O.state.spotShadow,At.rectAreaLights.value=O.state.rectArea,At.ltc_1.value=O.state.rectAreaLTC1,At.ltc_2.value=O.state.rectAreaLTC2,At.pointLights.value=O.state.point,At.pointLightShadows.value=O.state.pointShadow,At.hemisphereLights.value=O.state.hemi,At.directionalShadowMap.value=O.state.directionalShadowMap,At.directionalShadowMatrix.value=O.state.directionalShadowMatrix,At.spotShadowMap.value=O.state.spotShadowMap,At.spotLightMatrix.value=O.state.spotLightMatrix,At.spotLightMap.value=O.state.spotLightMap,At.pointShadowMap.value=O.state.pointShadowMap,At.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Ht,q.uniformsList=null,Ht}function Ju(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Qs.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Ku(E,F){let W=Lt.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function im(E,F,W,q,O){F.isScene!==!0&&(F=Ee),C.resetTextureUnits();let rt=F.fog,mt=q.isMeshStandardMaterial?F.environment:null,Et=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:hr,Tt=(q.isMeshStandardMaterial?G:b).get(q.envMap||mt),Ot=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),At=!!W.morphAttributes.position,ie=!!W.morphAttributes.normal,pe=!!W.morphAttributes.color,ye=Di;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ye=v.toneMapping);let Je=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=Je!==void 0?Je.length:0,Ct=Lt.get(q),Qn=p.state.lights;if(it===!0&&(St===!0||E!==M)){let yn=E===M&&q.id===S;st.setState(q,E,yn)}let oe=!1;q.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Qn.state.version||Ct.outputColorSpace!==Et||O.isBatchedMesh&&Ct.batching===!1||!O.isBatchedMesh&&Ct.batching===!0||O.isBatchedMesh&&Ct.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ct.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ct.instancing===!1||!O.isInstancedMesh&&Ct.instancing===!0||O.isSkinnedMesh&&Ct.skinning===!1||!O.isSkinnedMesh&&Ct.skinning===!0||O.isInstancedMesh&&Ct.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ct.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ct.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ct.instancingMorph===!1&&O.morphTexture!==null||Ct.envMap!==Tt||q.fog===!0&&Ct.fog!==rt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==st.numPlanes||Ct.numIntersection!==st.numIntersection)||Ct.vertexAlphas!==Ot||Ct.vertexTangents!==Ht||Ct.morphTargets!==At||Ct.morphNormals!==ie||Ct.morphColors!==pe||Ct.toneMapping!==ye||Ct.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Ct.__version=q.version);let Cn=Ct.currentProgram;oe===!0&&(Cn=Fo(q,F,O));let Ns=!1,rn=!1,Ir=!1,xe=Cn.getUniforms(),Hn=Ct.uniforms;if(Nt.useProgram(Cn.program)&&(Ns=!0,rn=!0,Ir=!0),q.id!==S&&(S=q.id,rn=!0),Ns||M!==E){Nt.buffers.depth.getReversed()?(ht.copy(E.projectionMatrix),l0(ht),h0(ht),xe.setValue(k,"projectionMatrix",ht)):xe.setValue(k,"projectionMatrix",E.projectionMatrix),xe.setValue(k,"viewMatrix",E.matrixWorldInverse);let Ei=xe.map.cameraPosition;Ei!==void 0&&Ei.setValue(k,zt.setFromMatrixPosition(E.matrixWorld)),jt.logarithmicDepthBuffer&&xe.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&xe.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,rn=!0,Ir=!0)}if(O.isSkinnedMesh){xe.setOptional(k,O,"bindMatrix"),xe.setOptional(k,O,"bindMatrixInverse");let yn=O.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),xe.setValue(k,"boneTexture",yn.boneTexture,C))}O.isBatchedMesh&&(xe.setOptional(k,O,"batchingTexture"),xe.setValue(k,"batchingTexture",O._matricesTexture,C),xe.setOptional(k,O,"batchingIdTexture"),xe.setValue(k,"batchingIdTexture",O._indirectTexture,C),xe.setOptional(k,O,"batchingColorTexture"),O._colorsTexture!==null&&xe.setValue(k,"batchingColorTexture",O._colorsTexture,C));let Pr=W.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0)&&Ft.update(O,W,Cn),(rn||Ct.receiveShadow!==O.receiveShadow)&&(Ct.receiveShadow=O.receiveShadow,xe.setValue(k,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Hn.envMap.value=Tt,Hn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(Hn.envMapIntensity.value=F.environmentIntensity),rn&&(xe.setValue(k,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&sm(Hn,Ir),rt&&q.fog===!0&&dt.refreshFogUniforms(Hn,rt),dt.refreshMaterialUniforms(Hn,q,V,Z,p.state.transmissionRenderTarget[E.id]),Qs.upload(k,Ju(Ct),Hn,C)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Qs.upload(k,Ju(Ct),Hn,C),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&xe.setValue(k,"center",O.center),xe.setValue(k,"modelViewMatrix",O.modelViewMatrix),xe.setValue(k,"normalMatrix",O.normalMatrix),xe.setValue(k,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let yn=q.uniformsGroups;for(let Ei=0,Ti=yn.length;Ei<Ti;Ei++){let Qu=yn[Ei];U.update(Qu,Cn),U.bind(Qu,Cn)}}return Cn}function sm(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function rm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,F,W){Lt.get(E.texture).__webglTexture=F,Lt.get(E.depthTexture).__webglTexture=W;let q=Lt.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){let W=Lt.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,W=0){I=E,T=F,A=W;let q=!0,O=null,rt=!1,mt=!1;if(E){let Tt=Lt.get(E);if(Tt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(Tt.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Tt.__hasExternalTextures)C.rebindTextures(E,Lt.get(E.texture).__webglTexture,Lt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let At=E.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&Lt.has(At)&&(E.width!==At.image.width||E.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}let Ot=E.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(mt=!0);let Ht=Lt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ht[F])?O=Ht[F][W]:O=Ht[F],rt=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?O=Lt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ht)?O=Ht[W]:O=Ht,P.copy(E.viewport),H.copy(E.scissor),L=E.scissorTest}else P.copy(ft).multiplyScalar(V).floor(),H.copy(ot).multiplyScalar(V).floor(),L=$t;if(Nt.bindFramebuffer(k.FRAMEBUFFER,O)&&q&&Nt.drawBuffers(E,O),Nt.viewport(P),Nt.scissor(H),Nt.setScissorTest(L),rt){let Tt=Lt.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Tt.__webglTexture,W)}else if(mt){let Tt=Lt.get(E.texture),Ot=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Tt.__webglTexture,W||0,Ot)}S=-1},this.readRenderTargetPixels=function(E,F,W,q,O,rt,mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Lt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){Nt.bindFramebuffer(k.FRAMEBUFFER,Et);try{let Tt=E.texture,Ot=Tt.format,Ht=Tt.type;if(!jt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-q&&W>=0&&W<=E.height-O&&k.readPixels(F,W,q,O,Gt.convert(Ot),Gt.convert(Ht),rt)}finally{let Tt=I!==null?Lt.get(I).__webglFramebuffer:null;Nt.bindFramebuffer(k.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,q,O,rt,mt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Lt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){let Tt=E.texture,Ot=Tt.format,Ht=Tt.type;if(!jt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-q&&W>=0&&W<=E.height-O){Nt.bindFramebuffer(k.FRAMEBUFFER,Et);let At=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,At),k.bufferData(k.PIXEL_PACK_BUFFER,rt.byteLength,k.STREAM_READ),k.readPixels(F,W,q,O,Gt.convert(Ot),Gt.convert(Ht),0);let ie=I!==null?Lt.get(I).__webglFramebuffer:null;Nt.bindFramebuffer(k.FRAMEBUFFER,ie);let pe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await c0(k,pe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,At),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,rt),k.deleteBuffer(At),k.deleteSync(pe),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,W=0){E.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);let q=Math.pow(2,-W),O=Math.floor(E.image.width*q),rt=Math.floor(E.image.height*q),mt=F!==null?F.x:0,Et=F!==null?F.y:0;C.setTexture2D(E,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,mt,Et,O,rt),Nt.unbindTexture()},this.copyTextureToTexture=function(E,F,W=null,q=null,O=0){E.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,W=null);let rt,mt,Et,Tt,Ot,Ht,At,ie,pe,ye=E.isCompressedTexture?E.mipmaps[O]:E.image;W!==null?(rt=W.max.x-W.min.x,mt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,Tt=W.min.x,Ot=W.min.y,Ht=W.isBox3?W.min.z:0):(rt=ye.width,mt=ye.height,Et=ye.depth||1,Tt=0,Ot=0,Ht=0),q!==null?(At=q.x,ie=q.y,pe=q.z):(At=0,ie=0,pe=0);let Je=Gt.convert(F.format),re=Gt.convert(F.type),Ct;F.isData3DTexture?(C.setTexture3D(F,0),Ct=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Ct=k.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Ct=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);let Qn=k.getParameter(k.UNPACK_ROW_LENGTH),oe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Cn=k.getParameter(k.UNPACK_SKIP_PIXELS),Ns=k.getParameter(k.UNPACK_SKIP_ROWS),rn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ye.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ye.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Tt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ot),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ht);let Ir=E.isDataArrayTexture||E.isData3DTexture,xe=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Hn=Lt.get(E),Pr=Lt.get(F),yn=Lt.get(Hn.__renderTarget),Ei=Lt.get(Pr.__renderTarget);Nt.bindFramebuffer(k.READ_FRAMEBUFFER,yn.__webglFramebuffer),Nt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Ti=0;Ti<Et;Ti++)Ir&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Lt.get(E).__webglTexture,O,Ht+Ti),E.isDepthTexture?(xe&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Lt.get(F).__webglTexture,O,pe+Ti),k.blitFramebuffer(Tt,Ot,rt,mt,At,ie,rt,mt,k.DEPTH_BUFFER_BIT,k.NEAREST)):xe?k.copyTexSubImage3D(Ct,O,At,ie,pe+Ti,Tt,Ot,rt,mt):k.copyTexSubImage2D(Ct,O,At,ie,pe+Ti,Tt,Ot,rt,mt);Nt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else xe?E.isDataTexture||E.isData3DTexture?k.texSubImage3D(Ct,O,At,ie,pe,rt,mt,Et,Je,re,ye.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(Ct,O,At,ie,pe,rt,mt,Et,Je,ye.data):k.texSubImage3D(Ct,O,At,ie,pe,rt,mt,Et,Je,re,ye):E.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,O,At,ie,rt,mt,Je,re,ye.data):E.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,O,At,ie,ye.width,ye.height,Je,ye.data):k.texSubImage2D(k.TEXTURE_2D,O,At,ie,rt,mt,Je,re,ye);k.pixelStorei(k.UNPACK_ROW_LENGTH,Qn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,oe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Cn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ns),k.pixelStorei(k.UNPACK_SKIP_IMAGES,rn),O===0&&F.generateMipmaps&&k.generateMipmap(Ct),Nt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,W=null,q=null,O=0){return E.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0),Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,W,q,O)},this.initRenderTarget=function(E){Lt.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Nt.unbindTexture()},this.resetState=function(){T=0,A=0,I=null,Nt.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}},Ea=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zr=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var cr=class extends ln{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new at:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],o=[],a=new D,c=new Me;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},jr=class extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},uh=class extends jr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ra=new D,rl=new Gh,ol=new Gh,al=new Gh,dh=class extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ra.subVectors(s[0],s[1]).add(s[0]),l=ra);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ra.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ra),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),rl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,y,m),ol.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,y,m),al.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(rl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ol.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),al.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(rl.calc(c),ol.calc(c),al.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ef(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function s_(i,t){let e=1-i;return e*e*t}function r_(i,t){return 2*(1-i)*i*t}function o_(i,t){return i*i*t}function Vr(i,t,e,n){return s_(i,t)+r_(i,e)+o_(i,n)}function a_(i,t){let e=1-i;return e*e*e*t}function c_(i,t){let e=1-i;return 3*e*e*i*t}function l_(i,t){return 3*(1-i)*i*i*t}function h_(i,t){return i*i*i*t}function Gr(i,t,e,n,s){return a_(i,t)+c_(i,e)+l_(i,n)+h_(i,s)}var Ta=class extends Mn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gr(t,s.x,r.x,o.x,a.x),Gr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fh=class extends Mn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gr(t,s.x,r.x,o.x,a.x),Gr(t,s.y,r.y,o.y,a.y),Gr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Aa=class extends Mn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ph=class extends Mn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends Mn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mh=class extends Mn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y),Vr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ca=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ef(a,c.x,l.x,h.x,d.x),ef(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},nf=Object.freeze({__proto__:null,ArcCurve:uh,CatmullRomCurve3:dh,CubicBezierCurve:Ta,CubicBezierCurve3:fh,EllipseCurve:jr,LineCurve:Aa,LineCurve3:ph,QuadraticBezierCurve:Ra,QuadraticBezierCurve3:mh,SplineCurve:Ca}),gh=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nf[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new nf[s.type]().fromJSON(s))}return this}},yh=class extends gh{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Aa(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ra(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ta(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ca(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new jr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Jr=class i extends Qe{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,d=new D,u=new at,f=new D,g=new D,y=new D,m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),c.push(f.x,f.y,f.z),y.copy(g)}for(let x=0;x<=e;x++){let w=n+x*h*s,v=Math.sin(w),R=Math.cos(w);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*v,d.y=t[T].y,d.z=t[T].x*R,o.push(d.x,d.y,d.z),u.x=x/e,u.y=T/(t.length-1),a.push(u.x,u.y);let A=c[3*T+0]*v,I=c[3*T+1],S=c[3*T+0]*R;l.push(A,I,S)}}for(let x=0;x<e;x++)for(let w=0;w<t.length-1;w++){let v=w+x*t.length,R=v,T=v+t.length,A=v+t.length+1,I=v+1;r.push(R,T,I),r.push(A,I,T)}this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("uv",new ae(a,2)),this.setAttribute("normal",new ae(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Ia=class i extends Jr{constructor(t=1,e=1,n=4,s=8){let r=new yh;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},ps=class i extends Qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new D,h=new at;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},un=class i extends Qe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=n/2,p=0;x(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2));function x(){let v=new D,R=new D,T=0,A=(e-t)/n;for(let I=0;I<=r;I++){let S=[],M=I/r,P=M*(e-t)+t;for(let H=0;H<=s;H++){let L=H/s,B=L*c+a,z=Math.sin(B),N=Math.cos(B);R.x=P*z,R.y=-M*n+m,R.z=P*N,d.push(R.x,R.y,R.z),v.set(z,A,N).normalize(),u.push(v.x,v.y,v.z),f.push(L,1-M),S.push(g++)}y.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let M=y[S][I],P=y[S+1][I],H=y[S+1][I+1],L=y[S][I+1];(t>0||S!==0)&&(h.push(M,P,L),T+=3),(e>0||S!==r-1)&&(h.push(P,H,L),T+=3)}l.addGroup(p,T,0),p+=T}function w(v){let R=g,T=new at,A=new D,I=0,S=v===!0?t:e,M=v===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;let P=g;for(let H=0;H<=s;H++){let B=H/s*c+a,z=Math.cos(B),N=Math.sin(B);A.x=S*N,A.y=m*M,A.z=S*z,d.push(A.x,A.y,A.z),u.push(0,M,0),T.x=z*.5+.5,T.y=N*.5*M+.5,f.push(T.x,T.y),g++}for(let H=0;H<s;H++){let L=R+H,B=P+H;v===!0?h.push(B,B+1,L):h.push(B+1,B,L),I+=3}l.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Kr=class i extends un{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xh=class i extends Qe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let w=new D,v=new D,R=new D;for(let T=0;T<e.length;T+=3)f(e[T+0],w),f(e[T+1],v),f(e[T+2],R),c(w,v,R,x)}function c(x,w,v,R){let T=R+1,A=[];for(let I=0;I<=T;I++){A[I]=[];let S=x.clone().lerp(v,I/T),M=w.clone().lerp(v,I/T),P=T-I;for(let H=0;H<=P;H++)H===0&&I===T?A[I][H]=S:A[I][H]=S.clone().lerp(M,H/P)}for(let I=0;I<T;I++)for(let S=0;S<2*(T-I)-1;S++){let M=Math.floor(S/2);S%2===0?(u(A[I][M+1]),u(A[I+1][M]),u(A[I][M])):(u(A[I][M+1]),u(A[I+1][M+1]),u(A[I+1][M]))}}function l(x){let w=new D;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(x),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let x=new D;for(let w=0;w<r.length;w+=3){x.x=r[w+0],x.y=r[w+1],x.z=r[w+2];let v=m(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;o.push(v,1-R)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){let w=o[x+0],v=o[x+2],R=o[x+4],T=Math.max(w,v,R),A=Math.min(w,v,R);T>.9&&A<.1&&(w<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,w){let v=x*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function g(){let x=new D,w=new D,v=new D,R=new D,T=new at,A=new at,I=new at;for(let S=0,M=0;S<r.length;S+=9,M+=6){x.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),R.copy(x).add(w).add(v).divideScalar(3);let P=m(R);y(T,M+0,x,P),y(A,M+2,w,P),y(I,M+4,v,P)}}function y(x,w,v,R){R<0&&x.x===1&&(o[w]=x.x-1),v.x===0&&v.z===0&&(o[w]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Pa=class i extends xh{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},La=class i extends Qe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=t,u=(e-t)/s,f=new D,g=new at;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let x=p+m,w=x,v=x+n+1,R=x+n+2,T=x+1;a.push(w,v,T),a.push(v,R,T)}}this.setIndex(a),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Na=class i extends Qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new D,u=new D,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let x=[],w=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let T=R/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+w*a),d.y=t*Math.cos(o+w*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+w*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+v,1-w),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let w=h[p][x+1],v=h[p][x],R=h[p+1][x],T=h[p+1][x+1];(p!==0||o>0)&&f.push(w,v,T),(p!==n-1||c<Math.PI)&&f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(y,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Oi=class i extends Qe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;o.push(y,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var vt=class extends fs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function oa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function u_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var lr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vh=class extends lr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sd,endingEnd:sd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rd:r=t,a=2*e-n;break;case od:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rd:o=t,c=2*n-e;break;case od:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,x=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+x*o[l+R]+w*o[c+R]+v*o[d+R];return r}},_h=class extends lr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Mh=class extends lr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=oa(e,this.TimeBufferType),this.values=oa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:oa(t.times,Array),values:oa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _h(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case da:e=this.InterpolantFactoryMethodDiscrete;break;case $l:e=this.InterpolantFactoryMethodLinear;break;case Lc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return $l;case this.InterpolantFactoryMethodSmooth:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&u_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=$l;var ms=class extends Fn{constructor(t,e,n){super(t,e,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=da;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var wh=class extends Fn{};wh.prototype.ValueTypeName="color";var bh=class extends Fn{};bh.prototype.ValueTypeName="number";var Sh=class extends lr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Fi.slerpFlat(r,0,o,l-a,o,l,c);return r}},Da=class extends Fn{InterpolantFactoryMethodLinear(t){return new Sh(this.times,this.values,this.getValueSize(),t)}};Da.prototype.ValueTypeName="quaternion";Da.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends Fn{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=da;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Eh=class extends Fn{};Eh.prototype.ValueTypeName="vector";var Th=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},d_=new Th,Ah=class{constructor(t){this.manager=t!==void 0?t:d_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ah.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Qr=class extends ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},cl=new Me,sf=new D,rf=new D,to=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;sf.setFromMatrixPosition(t.matrixWorld),e.position.copy(sf),rf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rf),e.updateMatrixWorld(),cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Rh=class extends to{constructor(){super(new ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=or*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ba=class extends ys{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},of=new Me,Ur=new D,ll=new D,Ch=class extends to{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ur),ll.copy(n.position),ll.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ll),n.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of)}},eo=class extends ys{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ch}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ih=class extends to{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},no=class extends ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Ih}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ua=class extends ys{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wh="\\[\\]\\.:\\/",f_=new RegExp("["+Wh+"]","g"),qh="[^"+Wh+"]",p_="[^"+Wh.replace("\\.","")+"]",m_=/((?:WC+[\/:])*)/.source.replace("WC",qh),g_=/(WCOD+)?/.source.replace("WCOD",p_),y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qh),x_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qh),v_=new RegExp("^"+m_+g_+y_+x_+"$"),__=["material","materials","bones","map"],Ph=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(f_,"")}static parseTrackName(t){let e=v_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);__.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Ph;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var db=new Float32Array(1);var af=new Me,io=class{constructor(t,e,n=0,s=1/0){this.ray=new ya(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return af.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(af),this}intersectObject(t,e=!0,n=[]){return Lh(t,this,n,e),n.sort(cf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Lh(t[s],this,n,e);return n.sort(cf),n}};function cf(i,t){return i.distance-t.distance}function Lh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Lh(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);var ki=class i{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new _);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new _);let n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new i);let n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],y=s[0],m=s[1],p=s[2],x=s[3],w=s[4],v=s[5],R=s[6],T=s[7],A=s[8];return r[0]=o*y+a*x+c*R,r[1]=o*m+a*w+c*T,r[2]=o*p+a*v+c*A,r[3]=l*y+h*x+d*R,r[4]=l*m+h*w+d*T,r[5]=l*p+h*v+d*A,r[6]=u*y+f*x+g*R,r[7]=u*m+f*w+g*T,r[8]=u*p+f*v+g*A,e}scale(t,e){e===void 0&&(e=new i);let n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new _);let n=3,s=4,r=[],o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let c=3,l=c,h,d=4,u;do{if(o=l-c,r[o+s*o]===0){for(a=o+1;a<l;a++)if(r[o+s*a]!==0){h=d;do u=d-h,r[u+s*o]+=r[u+s*a];while(--h);break}}if(r[o+s*o]!==0)for(a=o+1;a<l;a++){let f=r[o+s*a]/r[o+s*o];h=d;do u=d-h,r[u+s*a]=u<=o?0:r[u+s*a]-r[u+s*o]*f;while(--h)}}while(--c);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="",e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new i);let e=3,n=6,s=w_,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3,c=a,l,h=n,d;do{if(r=c-a,s[r+n*r]===0){for(o=r+1;o<c;o++)if(s[r+n*o]!==0){l=h;do d=h-l,s[d+n*r]+=s[d+n*o];while(--l);break}}if(s[r+n*r]!==0)for(o=r+1;o<c;o++){let u=s[r+n*o]/s[r+n*r];l=h;do d=h-l,s[d+n*o]=d<=r?0:s[d+n*o]-s[d+n*r]*u;while(--l)}}while(--a);r=2;do{o=r-1;do{let u=s[r+n*o]/s[r+n*r];l=n;do d=n-l,s[d+n*o]=s[d+n*o]-s[d+n*r]*u;while(--l)}while(o--)}while(--r);r=2;do{let u=1/s[r+n*r];l=n;do d=n-l,s[d+n*r]=s[d+n*r]*u;while(--l)}while(r--);r=2;do{o=2;do{if(d=s[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,c=s+s,l=e*o,h=e*a,d=e*c,u=n*a,f=n*c,g=s*c,y=r*o,m=r*a,p=r*c,x=this.elements;return x[3*0+0]=1-(u+g),x[3*0+1]=h-p,x[3*0+2]=d+m,x[3*1+0]=h+p,x[3*1+1]=1-(l+g),x[3*1+2]=f-y,x[3*2+0]=d-m,x[3*2+1]=f+y,x[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new i);let e=this.elements,n=t.elements,s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}},w_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],_=class i{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new i);let n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*r-c*s,e.y=c*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new i(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new i(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new ki([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){let r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new i),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new i),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let s=b_,r=1/n;s.set(this.x*r,this.y*r,this.z*r);let o=S_;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Lf),Lf.almostEquals(t,e)}clone(){return new i(this.x,this.y,this.z)}};_.ZERO=new _(0,0,0);_.UNIT_X=new _(1,0,0);_.UNIT_Y=new _(0,1,0);_.UNIT_Z=new _(0,0,1);var b_=new _,S_=new _,Lf=new _,dn=class i{constructor(t){t===void 0&&(t={}),this.lowerBound=new _,this.upperBound=new _,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,Nf),l=Nf),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new i().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,c=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,c){let l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),s.set(l.x,h.y,h.z),r.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){let n=Df,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(s,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=Df,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(s,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,c=(this.upperBound.x-n.x)*s,l=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(g<0||f>g)}},Nf=new _,Df=[new _,new _,new _,new _,new _,new _,new _,new _],Xa=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){let r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){let o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},Ya=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}},Ne=class i{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new _),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=E_,s=T_;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+s*l-r*c,e.y=s*h+o*c+r*a-n*l,e.z=r*h+o*l+n*c-s*a,e.w=o*h-n*a-s*c-r*l,e}inverse(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);let o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new _);let n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*r-c*s,d=l*s+c*n-o*r,u=l*r+o*s-a*n,f=-o*n-a*s-c*r;return e.x=h*l+f*-o+d*-c-u*-a,e.y=d*l+f*-a+u*-o-h*-c,e.z=u*l+f*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r,o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":let h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),s=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,l),s=-Math.PI/2,r=0),n===void 0){let d=o*o,u=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*f),s=Math.asin(2*h),r=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");let r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):s==="YXZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):s==="ZXY"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):s==="ZYX"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):s==="YZX"?(this.x=c*o*a+r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a-c*l*h):s==="XZY"&&(this.x=c*o*a-r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a+c*l*h),this}clone(){return new i(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new i);let s=this.x,r=this.y,o=this.z,a=this.w,c=t.x,l=t.y,h=t.z,d=t.w,u,f,g,y,m;return f=s*c+r*l+o*h+a*d,f<0&&(f=-f,c=-c,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),y=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(y=1-e,m=e),n.x=y*s+m*c,n.y=y*r+m*l,n.z=y*o+m*h,n.w=y*a+m*d,n}integrate(t,e,n,s){s===void 0&&(s=new i);let r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return s.x+=u*(r*d+o*h-a*l),s.y+=u*(o*d+a*c-r*h),s.z+=u*(a*d+r*l-o*c),s.w+=u*(-r*c-o*l-a*h),s}},E_=new _,T_=new _,A_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},yt=class i{constructor(t){t===void 0&&(t={}),this.id=i.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};yt.idCounter=0;yt.types=A_;var ce=class i{constructor(t){t===void 0&&(t={}),this.position=new _,this.quaternion=new Ne,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return i.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return i.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new _),n.vsub(t,s),e.conjugate(Bf),Bf.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new _),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new _),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new _),e.w*=-1,e.vmult(n,s),e.w*=-1,s}},Bf=new Ne,$a=class i extends yt{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:yt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let s=new _;for(let r=0;r!==t.length;r++){let o=t[r],a=o.length;for(let c=0;c!==a;c++){let l=(c+1)%a;e[o[c]].vsub(e[o[l]],s),s.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(s)||n[d].almostEquals(s)){h=!0;break}h||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);let e=this.faceNormals[t]||new _;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];i.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){let r=new _,o=new _;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,c,l){let h=new _,d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),r.vmult(h,h);let y=h.dot(o);y>u&&(u=y,d=g)}let f=[];for(let g=0;g<n.faces[d].length;g++){let y=n.vertices[n.faces[d][g]],m=new _;m.copy(y),r.vmult(m,m),s.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,s,r,o,a,c){let l=new _,h=new _,d=new _,u=new _,f=new _,g=new _,y=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],l);let x=m.testSepAxis(l,t,e,n,s,r);if(x===!1)return!1;x<y&&(y=x,o.copy(l))}else{let p=a?a.length:m.faces.length;for(let x=0;x<p;x++){let w=a?a[x]:x;l.copy(m.faceNormals[w]),n.vmult(l,l);let v=m.testSepAxis(l,t,e,n,s,r);if(v===!1)return!1;v<y&&(y=v,o.copy(l))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],h);let x=m.testSepAxis(h,t,e,n,s,r);if(x===!1)return!1;x<y&&(y=x,o.copy(h))}else{let p=c?c.length:t.faces.length;for(let x=0;x<p;x++){let w=c?c[x]:x;h.copy(t.faceNormals[w]),r.vmult(h,h);let v=m.testSepAxis(h,t,e,n,s,r);if(v===!1)return!1;v<y&&(y=v,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let x=0;x!==t.uniqueEdges.length;x++)if(r.vmult(t.uniqueEdges[x],f),u.cross(f,g),!g.almostZero()){g.normalize();let w=m.testSepAxis(g,t,e,n,s,r);if(w===!1)return!1;w<y&&(y=w,o.copy(g))}}return s.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){let a=this;i.project(a,t,n,s,Xh),i.project(e,t,r,o,Yh);let c=Xh[0],l=Xh[1],h=Yh[0],d=Yh[1];if(c<d||h<l)return!1;let u=c-d,f=h-l;return u<f?u:f}calculateLocalInertia(t,e){let n=new _,s=new _;this.computeLocalAABB(s,n);let r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){let c=new _,l=new _,h=new _,d=new _,u=new _,f=new _,g=new _,y=new _,m=this,p=[],x=s,w=p,v=-1,R=Number.MAX_VALUE;for(let M=0;M<m.faces.length;M++){c.copy(m.faceNormals[M]),n.vmult(c,c);let P=c.dot(t);P<R&&(R=P,v=M)}if(v<0)return;let T=m.faces[v];T.connectedFaces=[];for(let M=0;M<m.faces.length;M++)for(let P=0;P<m.faces[M].length;P++)T.indexOf(m.faces[M][P])!==-1&&M!==v&&T.connectedFaces.indexOf(M)===-1&&T.connectedFaces.push(M);let A=T.length;for(let M=0;M<A;M++){let P=m.vertices[T[M]],H=m.vertices[T[(M+1)%A]];P.vsub(H,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[v]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(P),n.vmult(f,f),e.vadd(f,f);let L=T.connectedFaces[M];g.copy(this.faceNormals[L]);let B=this.getPlaneConstantOfFace(L);y.copy(g),n.vmult(y,y);let z=B-y.dot(e);for(this.clipFaceAgainstPlane(x,w,y,z);x.length;)x.shift();for(;w.length;)x.push(w.shift())}g.copy(this.faceNormals[v]);let I=this.getPlaneConstantOfFace(v);y.copy(g),n.vmult(y,y);let S=I-y.dot(e);for(let M=0;M<x.length;M++){let P=y.dot(x[M])+S;if(P<=r&&(console.log(`clamped: depth=${P} to minDist=${r}`),P=r),P<=o){let H=x[M];if(P<=1e-6){let L={point:H,normal:y,depth:P};a.push(L)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o,a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];r=n.dot(c)+s;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+s,r<0)if(o<0){let d=new _;d.copy(l),e.push(d)}else{let d=new _;c.lerp(l,r/(r-o),d),e.push(d)}else if(o<0){let d=new _;c.lerp(l,r/(r-o),d),e.push(d),e.push(l)}c=l,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new _);let n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){let r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new _);let n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){let r=this.vertices,o,a,c,l,h,d,u=new _;for(let f=0;f<r.length;f++){u.copy(r[f]),e.vmult(u,u),t.vadd(u,u);let g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),s.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new _);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){let o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){let o=s[r];o.vadd(t,o)}}pointIsInside(t){let e=this.vertices,n=this.faces,s=this.faceNormals,r=null,o=new _;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let c=s[a],l=e[n[a][0]],h=new _;t.vsub(l,h);let d=c.dot(h),u=new _;o.vsub(l,u);let f=c.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(t,e,n,s,r){let o=t.vertices.length,a=C_,c=0,l=0,h=I_,d=t.vertices;h.setZero(),ce.vectorToLocalFrame(n,s,e,a),ce.pointToLocalFrame(n,s,h,h);let u=h.dot(a);l=c=d[0].dot(a);for(let f=1;f<o;f++){let g=d[f].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=u,c-=u,l>c){let f=l;l=c,c=f}r[0]=c,r[1]=l}},Xh=[],Yh=[],R_=new _,C_=new _,I_=new _,gi=class i extends yt{constructor(t){super({type:yt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=_,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],c=new $a({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new _),i.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){let n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)zi.set(r[o][0],r[o][1],r[o][2]),e.vmult(zi,zi),t.vadd(zi,zi),n(zi.x,zi.y,zi.z)}calculateWorldAABB(t,e,n,s){let r=this.halfExtents;qn[0].set(r.x,r.y,r.z),qn[1].set(-r.x,r.y,r.z),qn[2].set(-r.x,-r.y,r.z),qn[3].set(-r.x,-r.y,-r.z),qn[4].set(r.x,-r.y,-r.z),qn[5].set(r.x,r.y,-r.z),qn[6].set(-r.x,r.y,-r.z),qn[7].set(r.x,-r.y,r.z);let o=qn[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){let c=qn[a];e.vmult(c,c),t.vadd(c,c);let l=c.x,h=c.y,d=c.z;l>s.x&&(s.x=l),h>s.y&&(s.y=h),d>s.z&&(s.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},zi=new _,qn=[new _,new _,new _,new _,new _,new _,new _,new _],au={DYNAMIC:1,STATIC:2,KINEMATIC:4},cu={AWAKE:0,SLEEPY:1,SLEEPING:2},It=class i extends Ya{constructor(t){t===void 0&&(t={}),super(),this.id=i.idCounter++,this.index=-1,this.world=null,this.vlambda=new _,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new _,this.previousPosition=new _,this.interpolatedPosition=new _,this.initPosition=new _,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new _,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new _,this.force=new _;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?i.STATIC:i.DYNAMIC,typeof t.type==typeof i.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=i.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new _,this.quaternion=new Ne,this.initQuaternion=new Ne,this.previousQuaternion=new Ne,this.interpolatedQuaternion=new Ne,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new _,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new _,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new _,this.invInertia=new _,this.invInertiaWorld=new ki,this.invMassSolve=0,this.invInertiaSolve=new _,this.invInertiaWorldSolve=new ki,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new _(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new _(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new dn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new _,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=i.AWAKE,this.wakeUpAfterNarrowphase=!1,t===i.SLEEPING&&this.dispatchEvent(i.wakeupEvent)}sleep(){this.sleepState=i.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===i.AWAKE&&n<s?(this.sleepState=i.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(i.sleepyEvent)):e===i.SLEEPY&&n>s?this.wakeUp():e===i.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(i.sleepEvent))}}updateSolveMassProperties(){this.sleepState===i.SLEEPING||this.type===i.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new _),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new _),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e}addShape(t,e,n){let s=new _,r=new Ne;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,s=0;for(let r=0;r!==n;r++){let o=t[r];o.updateBoundingSphereRadius();let a=e[r].length(),c=o.boundingSphereRadius;a+c>s&&(s=a+c)}this.boundingRadius=s}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=P_,o=L_,a=this.quaternion,c=this.aabb,l=N_;for(let h=0;h!==s;h++){let d=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=D_,s=B_;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new _),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=F_;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new _),this.type!==i.DYNAMIC)return;let n=O_,s=z_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===i.DYNAMIC&&(this.sleepState===i.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new _),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=e,s=k_;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);let r=H_;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new _),this.type!==i.DYNAMIC)return;let n=V_,s=G_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){let t=W_;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),gi.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new _;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===i.DYNAMIC||this.type===i.KINEMATIC)||this.sleepState===i.SLEEPING)return;let s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;s.x+=a.x*f*u.x,s.y+=a.y*f*u.y,s.z+=a.z*f*u.z;let g=d.elements,y=this.angularFactor,m=c.x*y.x,p=c.y*y.y,x=c.z*y.z;r.x+=t*(g[0]*m+g[1]*p+g[2]*x),r.y+=t*(g[3]*m+g[4]*p+g[5]*x),r.z+=t*(g[6]*m+g[7]*p+g[8]*x),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};It.idCounter=0;It.COLLIDE_EVENT_NAME="collide";It.DYNAMIC=au.DYNAMIC;It.STATIC=au.STATIC;It.KINEMATIC=au.KINEMATIC;It.AWAKE=cu.AWAKE;It.SLEEPY=cu.SLEEPY;It.SLEEPING=cu.SLEEPING;It.wakeupEvent={type:"wakeup"};It.sleepyEvent={type:"sleepy"};It.sleepEvent={type:"sleep"};var P_=new _,L_=new Ne,N_=new dn,D_=new ki,B_=new ki,U_=new ki,F_=new _,O_=new _,z_=new _,k_=new _,H_=new _,V_=new _,G_=new _,W_=new _,Za=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&It.STATIC||t.sleepState===It.SLEEPING)&&(e.type&It.STATIC||e.sleepState===It.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){let r=q_;e.position.vsub(t.position,r);let o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){let n=X_,s=Y_,r=$_,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let c=s[a].id,l=r[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];t.push(s[l]),e.push(r[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new _;t.position.vsub(e.position,n);let s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},q_=new _;new _;new Ne;new _;var X_={keys:[]},Y_=[],$_=[];new _;var fb=new _;new _;var Kh=class extends Za{constructor(){super()}collisionPairs(t,e,n){let s=t.bodies,r=s.length,o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=s[c],a=s[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){let r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}},gr=class{constructor(){this.rayFromWorld=new _,this.rayToWorld=new _,this.hitNormalWorld=new _,this.hitPointWorld=new _,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}},Yf,$f,Zf,jf,Jf,Kf,Qf,lu={CLOSEST:1,ANY:2,ALL:4};Yf=yt.types.SPHERE;$f=yt.types.PLANE;Zf=yt.types.BOX;jf=yt.types.CYLINDER;Jf=yt.types.CONVEXPOLYHEDRON;Kf=yt.types.HEIGHTFIELD;Qf=yt.types.TRIMESH;var wn=class i{get[Yf](){return this._intersectSphere}get[$f](){return this._intersectPlane}get[Zf](){return this._intersectBox}get[jf](){return this._intersectConvex}get[Jf](){return this._intersectConvex}get[Kf](){return this._intersectHeightfield}get[Qf](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new _),e===void 0&&(e=new _),this.from=t.clone(),this.to=e.clone(),this.direction=new _,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=i.ANY,this.result=new gr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||i.ANY,this.result=e.result||new gr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Uf),$h.length=0,t.broadphase.aabbQuery(t,Uf,$h),this.intersectBodies($h),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;let s=Z_,r=j_;for(let o=0,a=t.shapes.length;o<a;o++){let c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(c,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){let r=this.from;if(dM(r,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){let o=this.from,a=this.to,c=this.direction,l=new _(0,0,1);e.vmult(l,l);let h=new _;o.vsub(n,h);let d=h.dot(l);a.vsub(n,h);let u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;let f=l.dot(c);if(Math.abs(f)<this.precision)return;let g=new _,y=new _,m=new _;o.vsub(n,g);let p=-l.dot(g)/f;c.scale(p,y),o.vadd(y,m),this.reportIntersection(l,m,r,s,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;let o=J_;o.from.copy(this.from),o.to.copy(this.to),ce.pointToLocalFrame(n,e,o.from,o.from),ce.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();let a=K_,c,l,h,d;c=l=0,h=d=t.data.length-1;let u=new dn;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<h;f++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),ce.pointToWorldFrame(n,e,t.pillarOffset,Ha),this._intersectConvex(t.pillarConvex,e,Ha,s,r,Ff),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),ce.pointToWorldFrame(n,e,t.pillarOffset,Ha),this._intersectConvex(t.pillarConvex,e,Ha,s,r,Ff)}}}_intersectSphere(t,e,n,s,r){let o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,f=Q_,g=tM;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1);else{let y=(-h-Math.sqrt(u))/(2*l),m=(-h+Math.sqrt(u))/(2*l);if(y>=0&&y<=1&&(o.lerp(a,y,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){let a=eM,c=Of,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,g=this.from,y=this.to,m=g.distanceTo(y),p=l?l.length:h.length,x=this.result;for(let w=0;!x.shouldStop&&w<p;w++){let v=l?l[w]:w,R=h[v],T=u[v],A=e,I=n;c.copy(d[R[0]]),A.vmult(c,c),c.vadd(I,c),c.vsub(g,c),A.vmult(T,a);let S=f.dot(a);if(Math.abs(S)<this.precision)continue;let M=a.dot(c)/S;if(!(M<0)){f.scale(M,tn),tn.vadd(g,tn),On.copy(d[R[0]]),A.vmult(On,On),I.vadd(On,On);for(let P=1;!x.shouldStop&&P<R.length-1;P++){Xn.copy(d[R[P]]),Yn.copy(d[R[P+1]]),A.vmult(Xn,Xn),A.vmult(Yn,Yn),I.vadd(Xn,Xn),I.vadd(Yn,Yn);let H=tn.distanceTo(g);!(i.pointInTriangle(tn,On,Xn,Yn)||i.pointInTriangle(tn,Xn,On,Yn))||H>m||this.reportIntersection(a,tn,r,s,v)}}}}_intersectTrimesh(t,e,n,s,r,o){let a=sM,c=hM,l=uM,h=Of,d=rM,u=oM,f=aM,g=lM,y=cM,m=t.indices;t.vertices;let p=this.from,x=this.to,w=this.direction;l.position.copy(n),l.quaternion.copy(e),ce.vectorToLocalFrame(n,e,w,d),ce.pointToLocalFrame(n,e,p,u),ce.pointToLocalFrame(n,e,x,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();let v=u.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let R=0,T=c.length;!this.result.shouldStop&&R!==T;R++){let A=c[R];t.getNormal(A,a),t.getVertex(m[A*3],On),On.vsub(u,h);let I=d.dot(a),S=a.dot(h)/I;if(S<0)continue;d.scale(S,tn),tn.vadd(u,tn),t.getVertex(m[A*3+1],Xn),t.getVertex(m[A*3+2],Yn);let M=tn.distanceSquared(u);!(i.pointInTriangle(tn,Xn,On,Yn)||i.pointInTriangle(tn,On,Xn,Yn))||M>v||(ce.vectorToWorldFrame(e,a,y),ce.pointToWorldFrame(n,e,tn,g),this.reportIntersection(y,g,r,s,A))}c.length=0}reportIntersection(t,e,n,s,r){let o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case i.ALL:this.hasHit=!0,l.set(o,a,t,e,n,s,c),l.hasHit=!0,this.callback(l);break;case i.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,s,c));break;case i.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,s,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,vs),n.vsub(e,ro),t.vsub(e,Zh);let r=vs.dot(vs),o=vs.dot(ro),a=vs.dot(Zh),c=ro.dot(ro),l=ro.dot(Zh),h,d;return(h=c*a-o*l)>=0&&(d=r*l-o*a)>=0&&h+d<r*c-o*o}};wn.CLOSEST=lu.CLOSEST;wn.ANY=lu.ANY;wn.ALL=lu.ALL;var Uf=new dn,$h=[],ro=new _,Zh=new _,Z_=new _,j_=new Ne,tn=new _,On=new _,Xn=new _,Yn=new _;new _;new gr;var Ff={faceList:[0]},Ha=new _,J_=new wn,K_=[],Q_=new _,tM=new _,eM=new _,nM=new _,iM=new _,Of=new _,sM=new _,rM=new _,oM=new _,aM=new _,cM=new _,lM=new _;new dn;var hM=[],uM=new ce,vs=new _,Va=new _;function dM(i,t,e){e.vsub(i,vs);let n=vs.dot(t);return t.scale(n,Va),Va.vadd(i,Va),e.distanceTo(Va)}var ja=class i extends Za{static checkBounds(t,e,n){let s,r;n===0?(s=t.position.x,r=e.position.x):n===1?(s=t.position.y,r=e.position.y):n===2&&(s=t.position.z,r=e.position.z);let o=t.boundingRadius,a=e.boundingRadius,c=s+o;return r-a<c}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;let e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{let s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){let s=this.axisList,r=s.length,o=this.axisIndex,a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let l=s[a];for(c=a+1;c<r;c++){let h=s[c];if(this.needBroadphaseCollision(l,h)){if(!i.checkBounds(l,h,o))break;this.intersectionTest(l,h,e,n)}}}}sortList(){let t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){let r=t[s];r.aabbNeedsUpdate&&r.updateAABB()}e===0?i.insertionSortX(t):e===1?i.insertionSortY(t):e===2&&i.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,r=0,o=0,a=this.axisList,c=a.length,l=1/c;for(let f=0;f!==c;f++){let g=a[f],y=g.position.x;t+=y,e+=y*y;let m=g.position.y;n+=m,s+=m*m;let p=g.position.z;r+=p,o+=p*p}let h=e-t*t*l,d=s-n*n*l,u=o-r*r*l;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let s=this.axisIndex,r="x";s===1&&(r="y"),s===2&&(r="z");let o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){let c=o[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(e)&&n.push(c)}return n}},Ja=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},Ka=class i{constructor(t,e,n){n===void 0&&(n={}),n=Ja.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=i.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};Ka.idCounter=0;var Qa=class{constructor(){this.spatial=new _,this.rotational=new _}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},_s=class i{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=i.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Qa,this.jacobianElementB=new Qa,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){let s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,c=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,c=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,c=s.torque,l=n.invMassSolve,h=s.invMassSolve;return r.scale(l,zf),a.scale(h,kf),n.invInertiaWorldSolve.vmult(o,Hf),s.invInertiaWorldSolve.vmult(c,Vf),t.multiplyVectors(zf,Hf)+e.multiplyVectors(kf,Vf)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,c=s.invInertiaWorldSolve,l=r+o;return a.vmult(t.rotational,Ga),l+=Ga.dot(t.rotational),c.vmult(e.rotational,Ga),l+=Ga.dot(e.rotational),l}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=fM;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};_s.idCounter=0;var zf=new _,kf=new _,Hf=new _,Vf=new _,Ga=new _,fM=new _,mr=class extends _s{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new _,this.rj=new _,this.ni=new _}computeB(t){let e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,c=pM,l=mM,h=s.velocity,d=s.angularVelocity;s.force,s.torque;let u=r.velocity,f=r.angularVelocity;r.force,r.torque;let g=gM,y=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(y.spatial),c.negate(y.rotational),m.spatial.copy(p),m.rotational.copy(l),g.copy(r.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(o,g);let x=p.dot(g),w=this.restitution+1,v=w*u.dot(p)-w*h.dot(p)+f.dot(l)-d.dot(c),R=this.computeGiMf();return-x*e-v*n-t*R}getImpactVelocityAlongNormal(){let t=yM,e=xM,n=vM,s=_M,r=MM;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}},pM=new _,mM=new _,gM=new _,yM=new _,xM=new _,vM=new _,_M=new _,MM=new _,Qh=class extends Ka{constructor(t,e,n,s,r){e===void 0&&(e=new _),s===void 0&&(s=new _),r===void 0&&(r=1e6),super(t,n),this.pivotA=e.clone(),this.pivotB=s.clone();let o=this.equationX=new mr(t,n),a=this.equationY=new mr(t,n),c=this.equationZ=new mr(t,n);this.equations.push(o,a,c),o.minForce=a.minForce=c.minForce=-r,o.maxForce=a.maxForce=c.maxForce=r,o.ni.set(1,0,0),a.ni.set(0,1,0),c.ni.set(0,0,1)}update(){let t=this.bodyA,e=this.bodyB,n=this.equationX,s=this.equationY,r=this.equationZ;t.quaternion.vmult(this.pivotA,n.ri),e.quaternion.vmult(this.pivotB,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),r.ri.copy(n.ri),r.rj.copy(n.rj)}},tu=class extends _s{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-s,s),this.axisA=n.axisA?n.axisA.clone():new _(1,0,0),this.axisB=n.axisB?n.axisB.clone():new _(0,1,0),this.angle=typeof n.angle<"u"?n.angle:0}computeB(t){let e=this.a,n=this.b,s=this.axisA,r=this.axisB,o=wM,a=bM,c=this.jacobianElementA,l=this.jacobianElementB;s.cross(r,o),r.cross(s,a),c.rotational.copy(a),l.rotational.copy(o);let h=Math.cos(this.angle)-s.dot(r),d=this.computeGW(),u=this.computeGiMf();return-h*e-d*n-t*u}},wM=new _,bM=new _,eu=class extends _s{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-s,s),this.axisA=n.axisA?n.axisA.clone():new _(1,0,0),this.axisB=n.axisB?n.axisB.clone():new _(0,1,0),this.maxAngle=Math.PI/2}computeB(t){let e=this.a,n=this.b,s=this.axisA,r=this.axisB,o=SM,a=EM,c=this.jacobianElementA,l=this.jacobianElementB;s.cross(r,o),r.cross(s,a),c.rotational.copy(a),l.rotational.copy(o);let h=Math.cos(this.maxAngle)-s.dot(r),d=this.computeGW(),u=this.computeGiMf();return-h*e-d*n-t*u}},SM=new _,EM=new _,tc=class extends Qh{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6,r=n.pivotA?n.pivotA.clone():new _,o=n.pivotB?n.pivotB.clone():new _;super(t,r,e,o,s),this.axisA=n.axisA?n.axisA.clone():new _,this.axisB=n.axisB?n.axisB.clone():new _,this.collideConnected=!!n.collideConnected,this.angle=typeof n.angle<"u"?n.angle:0;let a=this.coneEquation=new tu(t,e,n),c=this.twistEquation=new eu(t,e,n);this.twistAngle=typeof n.twistAngle<"u"?n.twistAngle:0,a.maxForce=0,a.minForce=-s,c.maxForce=0,c.minForce=-s,this.equations.push(a,c)}update(){let t=this.bodyA,e=this.bodyB,n=this.coneEquation,s=this.twistEquation;super.update(),t.vectorToWorldFrame(this.axisA,n.axisA),e.vectorToWorldFrame(this.axisB,n.axisB),this.axisA.tangents(s.axisA,s.axisA),t.vectorToWorldFrame(s.axisA,s.axisA),this.axisB.tangents(s.axisB,s.axisB),e.vectorToWorldFrame(s.axisB,s.axisB),n.angle=this.angle,s.maxAngle=this.twistAngle}};new _;new _;var pb=new _,mb=new _;var gb=new _,yb=new _,ec=class extends _s{constructor(t,e,n){super(t,e,-n,n),this.ri=new _,this.rj=new _,this.t=new _}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,s=this.rj,r=TM,o=AM,a=this.t;n.cross(a,r),s.cross(a,o);let c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),r.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);let h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}},TM=new _,AM=new _,$n=class i{constructor(t,e,n){n=Ja.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=i.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};$n.idCounter=0;var yi=class i{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=i.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};yi.idCounter=0;var xb=new _,vb=new _,_b=new _,Mb=new _,wb=new _,bb=new _,Sb=new _,Eb=new _,Tb=new _,Ab=new _,Rb=new _;var Cb=new _,Ib=new _;new _;new _;new _;var Pb=new _,Lb=new _,Nb=new _;new wn;new _;var Db=new _,Bb=new _,Ub=[new _(1,0,0),new _(0,1,0),new _(0,0,1)],Fb=new _;var Ob=new _,zb=new _,kb=new _;var Hb=new _,Vb=new _,Gb=new _,Wb=new _;var qb=new _,Xb=new _,Yb=new _;var lo=class extends yt{constructor(t){if(super({type:yt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new _);let n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,s){let r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){let c=o[a];n[c]=t[c]-r,s[c]=t[c]+r}}};var $b=new _,Zb=new _;var jb=new _,Jb=new _,Kb=new _,Qb=new _,tS=new _,eS=new _,nS=new _,Ms=class extends $a{constructor(t,e,n,s){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),s===void 0&&(s=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");let r=s,o=[],a=[],c=[],l=[],h=[],d=Math.cos,u=Math.sin;o.push(new _(-e*u(0),-n*.5,e*d(0))),l.push(0),o.push(new _(-t*u(0),n*.5,t*d(0))),h.push(1);for(let g=0;g<r;g++){let y=2*Math.PI/r*(g+1),m=2*Math.PI/r*(g+.5);g<r-1?(o.push(new _(-e*u(y),-n*.5,e*d(y))),l.push(2*g+2),o.push(new _(-t*u(y),n*.5,t*d(y))),h.push(2*g+3),c.push([2*g,2*g+1,2*g+3,2*g+2])):c.push([2*g,2*g+1,1,0]),(r%2===1||g<r/2)&&a.push(new _(-u(m),0,d(m)))}c.push(l),a.push(new _(0,1,0));let f=[];for(let g=0;g<h.length;g++)f.push(h[h.length-g-1]);c.push(f),super({vertices:o,faces:c,axes:a}),this.type=yt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=s}};var iS=new _;var sS=new _,rS=new _,oS=new _,aS=new _,cS=new _,lS=new _,hS=new _,uS=new _,dS=new _;var fS=new _,pS=new dn;var mS=new _,gS=new dn,yS=new _,xS=new _,vS=new _,_S=new _,MS=new _,wS=new _,bS=new _,SS=new dn,ES=new _,TS=new ce,AS=new dn,nu=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},ho=class extends nu{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t,d,u,f,g,y,m;if(a!==0)for(let v=0;v!==l;v++)c[v].updateSolveMassProperties();let p=CM,x=IM,w=RM;p.length=a,x.length=a,w.length=a;for(let v=0;v!==a;v++){let R=o[v];w[v]=0,x[v]=R.computeB(h),p[v]=1/R.computeC()}if(a!==0){for(let T=0;T!==l;T++){let A=c[T],I=A.vlambda,S=A.wlambda;I.set(0,0,0),S.set(0,0,0)}for(n=0;n!==s;n++){g=0;for(let T=0;T!==a;T++){let A=o[T];d=x[T],u=p[T],m=w[T],y=A.computeGWlambda(),f=u*(d-y-A.eps*m),m+f<A.minForce?f=A.minForce-m:m+f>A.maxForce&&(f=A.maxForce-m),w[T]+=f,g+=f>0?f:-f,A.addToWlambda(f)}if(g*g<r)break}for(let T=0;T!==l;T++){let A=c[T],I=A.velocity,S=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),I.vadd(A.vlambda,I),A.wlambda.vmul(A.angularFactor,A.wlambda),S.vadd(A.wlambda,S)}let v=o.length,R=1/h;for(;v--;)o[v].multiplier=w[v]*R}return n}},RM=[],CM=[],IM=[];var RS=It.STATIC;var iu=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},su=class extends iu{constructor(){super(...arguments),this.type=_}constructObject(){return new _}},ve={sphereSphere:yt.types.SPHERE,spherePlane:yt.types.SPHERE|yt.types.PLANE,boxBox:yt.types.BOX|yt.types.BOX,sphereBox:yt.types.SPHERE|yt.types.BOX,planeBox:yt.types.PLANE|yt.types.BOX,convexConvex:yt.types.CONVEXPOLYHEDRON,sphereConvex:yt.types.SPHERE|yt.types.CONVEXPOLYHEDRON,planeConvex:yt.types.PLANE|yt.types.CONVEXPOLYHEDRON,boxConvex:yt.types.BOX|yt.types.CONVEXPOLYHEDRON,sphereHeightfield:yt.types.SPHERE|yt.types.HEIGHTFIELD,boxHeightfield:yt.types.BOX|yt.types.HEIGHTFIELD,convexHeightfield:yt.types.CONVEXPOLYHEDRON|yt.types.HEIGHTFIELD,sphereParticle:yt.types.PARTICLE|yt.types.SPHERE,planeParticle:yt.types.PLANE|yt.types.PARTICLE,boxParticle:yt.types.BOX|yt.types.PARTICLE,convexParticle:yt.types.PARTICLE|yt.types.CONVEXPOLYHEDRON,cylinderCylinder:yt.types.CYLINDER,sphereCylinder:yt.types.SPHERE|yt.types.CYLINDER,planeCylinder:yt.types.PLANE|yt.types.CYLINDER,boxCylinder:yt.types.BOX|yt.types.CYLINDER,convexCylinder:yt.types.CONVEXPOLYHEDRON|yt.types.CYLINDER,heightfieldCylinder:yt.types.HEIGHTFIELD|yt.types.CYLINDER,particleCylinder:yt.types.PARTICLE|yt.types.CYLINDER,sphereTrimesh:yt.types.SPHERE|yt.types.TRIMESH,planeTrimesh:yt.types.PLANE|yt.types.TRIMESH},ru=class{get[ve.sphereSphere](){return this.sphereSphere}get[ve.spherePlane](){return this.spherePlane}get[ve.boxBox](){return this.boxBox}get[ve.sphereBox](){return this.sphereBox}get[ve.planeBox](){return this.planeBox}get[ve.convexConvex](){return this.convexConvex}get[ve.sphereConvex](){return this.sphereConvex}get[ve.planeConvex](){return this.planeConvex}get[ve.boxConvex](){return this.boxConvex}get[ve.sphereHeightfield](){return this.sphereHeightfield}get[ve.boxHeightfield](){return this.boxHeightfield}get[ve.convexHeightfield](){return this.convexHeightfield}get[ve.sphereParticle](){return this.sphereParticle}get[ve.planeParticle](){return this.planeParticle}get[ve.boxParticle](){return this.boxParticle}get[ve.convexParticle](){return this.convexParticle}get[ve.cylinderCylinder](){return this.convexConvex}get[ve.sphereCylinder](){return this.sphereConvex}get[ve.planeCylinder](){return this.planeConvex}get[ve.boxCylinder](){return this.boxConvex}get[ve.convexCylinder](){return this.convexConvex}get[ve.heightfieldCylinder](){return this.heightfieldCylinder}get[ve.particleCylinder](){return this.particleCylinder}get[ve.sphereTrimesh](){return this.sphereTrimesh}get[ve.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new su,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new mr(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||t.material,h=s.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){let n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,h=r.material||n.material,d=o.material||s.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){let u=l*(a.frictionGravity||a.gravity).length(),f=n.invMass+s.invMass;f>0&&(f=1/f);let g=this.frictionEquationPool,y=g.length?g.pop():new ec(n,s,u*f),m=g.length?g.pop():new ec(n,s,u*f);return y.bi=m.bi=n,y.bj=m.bj=s,y.minForce=m.minForce=-u*f,y.maxForce=m.maxForce=u*f,y.ri.copy(t.ri),y.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(y.t,m.t),y.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),y.enabled=m.enabled=t.enabled,e.push(y,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];xs.setZero(),fr.setZero(),pr.setZero();let r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(xs.vadd(e.ni,xs),fr.vadd(e.ri,fr),pr.vadd(e.rj,pr)):(xs.vsub(e.ni,xs),fr.vadd(e.rj,fr),pr.vadd(e.ri,pr));let o=1/t;fr.scale(o,n.ri),pr.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),xs.normalize(),xs.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;let c=NM,l=DM,h=PM,d=LM;for(let u=0,f=t.length;u!==f;u++){let g=t[u],y=e[u],m=null;g.material&&y.material&&(m=n.getContactMaterial(g.material,y.material)||null);let p=g.type&It.KINEMATIC&&y.type&It.STATIC||g.type&It.STATIC&&y.type&It.KINEMATIC||g.type&It.KINEMATIC&&y.type&It.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],c),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);let w=g.shapes[x];for(let v=0;v<y.shapes.length;v++){y.quaternion.mult(y.shapeOrientations[v],l),y.quaternion.vmult(y.shapeOffsets[v],d),d.vadd(y.position,d);let R=y.shapes[v];if(!(w.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&w.collisionFilterGroup)||h.distanceTo(d)>w.boundingSphereRadius+R.boundingSphereRadius)continue;let T=null;w.material&&R.material&&(T=n.getContactMaterial(w.material,R.material)||null),this.currentContactMaterial=T||m||n.defaultContactMaterial;let A=w.type|R.type,I=this[A];if(I){let S=!1;w.type<R.type?S=I.call(this,w,R,h,d,c,l,g,y,w,R,p):S=I.call(this,R,w,d,h,l,c,y,g,w,R,p),S&&p&&(n.shapeOverlapKeeper.set(w.id,R.id),n.bodyOverlapKeeper.set(g.id,y.id))}}}}}sphereSphere(t,e,n,s,r,o,a,c,l,h,d){if(d)return n.distanceSquared(s)<(t.radius+e.radius)**2;let u=this.createContactEquation(a,c,t,e,l,h);s.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(s,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,c,l,h,d){let u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(s,Wa),u.ni.scale(u.ni.dot(Wa),Gf),Wa.vsub(Gf,u.rj),-Wa.dot(u.ni)<=t.radius){if(d)return!0;let f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(s,g),g.vsub(c.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,c,t,e,d)}sphereBox(t,e,n,s,r,o,a,c,l,h,d){let u=this.v3pool,f=ow;n.vsub(s,qa),e.getSideNormals(f,o);let g=t.radius,y=!1,m=cw,p=lw,x=hw,w=null,v=0,R=0,T=0,A=null;for(let N=0,Z=f.length;N!==Z&&y===!1;N++){let V=iw;V.copy(f[N]);let j=V.length();V.normalize();let ct=qa.dot(V);if(ct<j+g&&ct>0){let ft=sw,ot=rw;ft.copy(f[(N+1)%3]),ot.copy(f[(N+2)%3]);let $t=ft.length(),Y=ot.length();ft.normalize(),ot.normalize();let it=qa.dot(ft),St=qa.dot(ot);if(it<$t&&it>-$t&&St<Y&&St>-Y){let ht=Math.abs(ct-j-g);if((A===null||ht<A)&&(A=ht,R=it,T=St,w=j,m.copy(V),p.copy(ft),x.copy(ot),v++,d))return!0}}}if(v){y=!0;let N=this.createContactEquation(a,c,t,e,l,h);m.scale(-g,N.ri),N.ni.copy(m),N.ni.negate(N.ni),m.scale(w,m),p.scale(R,p),m.vadd(p,m),x.scale(T,x),m.vadd(x,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(s,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let I=u.get(),S=aw;for(let N=0;N!==2&&!y;N++)for(let Z=0;Z!==2&&!y;Z++)for(let V=0;V!==2&&!y;V++)if(I.set(0,0,0),N?I.vadd(f[0],I):I.vsub(f[0],I),Z?I.vadd(f[1],I):I.vsub(f[1],I),V?I.vadd(f[2],I):I.vsub(f[2],I),s.vadd(I,S),S.vsub(n,S),S.lengthSquared()<g*g){if(d)return!0;y=!0;let j=this.createContactEquation(a,c,t,e,l,h);j.ri.copy(S),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(g,j.ri),j.rj.copy(I),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(s,j.rj),j.rj.vsub(c.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}u.release(I),I=null;let M=u.get(),P=u.get(),H=u.get(),L=u.get(),B=u.get(),z=f.length;for(let N=0;N!==z&&!y;N++)for(let Z=0;Z!==z&&!y;Z++)if(N%3!==Z%3){f[Z].cross(f[N],M),M.normalize(),f[N].vadd(f[Z],P),H.copy(n),H.vsub(P,H),H.vsub(s,H);let V=H.dot(M);M.scale(V,L);let j=0;for(;j===N%3||j===Z%3;)j++;B.copy(n),B.vsub(L,B),B.vsub(P,B),B.vsub(s,B);let ct=Math.abs(V),ft=B.length();if(ct<f[j].length()&&ft<g){if(d)return!0;y=!0;let ot=this.createContactEquation(a,c,t,e,l,h);P.vadd(L,ot.rj),ot.rj.copy(ot.rj),B.negate(ot.ni),ot.ni.normalize(),ot.ri.copy(ot.rj),ot.ri.vadd(s,ot.ri),ot.ri.vsub(n,ot.ri),ot.ri.normalize(),ot.ri.scale(g,ot.ri),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),ot.rj.vadd(s,ot.rj),ot.rj.vsub(c.position,ot.rj),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult)}}u.release(M,P,H,L,B)}planeBox(t,e,n,s,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,c,t,e,d)}convexConvex(t,e,n,s,r,o,a,c,l,h,d,u,f){let g=Ew;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,g,u,f)){let y=[],m=Tw;t.clipAgainstHull(n,r,e,s,o,g,-100,100,y);let p=0;for(let x=0;x!==y.length;x++){if(d)return!0;let w=this.createContactEquation(a,c,t,e,l,h),v=w.ri,R=w.rj;g.negate(w.ni),y[x].normal.negate(m),m.scale(y[x].depth,m),y[x].point.vadd(m,v),R.copy(y[x].point),v.vsub(n,v),R.vsub(s,R),v.vadd(n,v),v.vsub(a.position,v),R.vadd(s,R),R.vsub(c.position,R),this.result.push(w),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,s,r,o,a,c,l,h,d){let u=this.v3pool;n.vsub(s,uw);let f=e.faceNormals,g=e.faces,y=e.vertices,m=t.radius,p=!1;for(let x=0;x!==y.length;x++){let w=y[x],v=mw;o.vmult(w,v),s.vadd(v,v);let R=pw;if(v.vsub(n,R),R.lengthSquared()<m*m){if(d)return!0;p=!0;let T=this.createContactEquation(a,c,t,e,l,h);T.ri.copy(R),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(m,T.ri),v.vsub(s,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(s,T.rj),T.rj.vsub(c.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let x=0,w=g.length;x!==w&&p===!1;x++){let v=f[x],R=g[x],T=gw;o.vmult(v,T);let A=yw;o.vmult(y[R[0]],A),A.vadd(s,A);let I=xw;T.scale(-m,I),n.vadd(I,I);let S=vw;I.vsub(A,S);let M=S.dot(T),P=_w;if(n.vsub(A,P),M<0&&P.dot(T)>0){let H=[];for(let L=0,B=R.length;L!==B;L++){let z=u.get();o.vmult(y[R[L]],z),s.vadd(z,z),H.push(z)}if(nw(H,T,n)){if(d)return!0;p=!0;let L=this.createContactEquation(a,c,t,e,l,h);T.scale(-m,L.ri),T.negate(L.ni);let B=u.get();T.scale(-M,B);let z=u.get();T.scale(-m,z),n.vsub(s,L.rj),L.rj.vadd(z,L.rj),L.rj.vadd(B,L.rj),L.rj.vadd(s,L.rj),L.rj.vsub(c.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),u.release(B),u.release(z),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let N=0,Z=H.length;N!==Z;N++)u.release(H[N]);return}else for(let L=0;L!==R.length;L++){let B=u.get(),z=u.get();o.vmult(y[R[(L+1)%R.length]],B),o.vmult(y[R[(L+2)%R.length]],z),s.vadd(B,B),s.vadd(z,z);let N=dw;z.vsub(B,N);let Z=fw;N.unit(Z);let V=u.get(),j=u.get();n.vsub(B,j);let ct=j.dot(Z);Z.scale(ct,V),V.vadd(B,V);let ft=u.get();if(V.vsub(n,ft),ct>0&&ct*ct<N.lengthSquared()&&ft.lengthSquared()<m*m){if(d)return!0;let ot=this.createContactEquation(a,c,t,e,l,h);V.vsub(s,ot.rj),V.vsub(n,ot.ni),ot.ni.normalize(),ot.ni.scale(m,ot.ri),ot.rj.vadd(s,ot.rj),ot.rj.vsub(c.position,ot.rj),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult);for(let $t=0,Y=H.length;$t!==Y;$t++)u.release(H[$t]);u.release(B),u.release(z),u.release(V),u.release(ft),u.release(j);return}u.release(B),u.release(z),u.release(V),u.release(ft),u.release(j)}for(let L=0,B=H.length;L!==B;L++)u.release(H[L])}}}planeConvex(t,e,n,s,r,o,a,c,l,h,d){let u=Mw,f=ww;f.set(0,0,1),r.vmult(f,f);let g=0,y=bw;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),s.vadd(u,u),u.vsub(n,y),f.dot(y)<=0){if(d)return!0;let x=this.createContactEquation(a,c,t,e,l,h),w=Sw;f.scale(f.dot(y),w),u.vsub(w,w),w.vsub(n,x.ri),x.ni.copy(f),u.vsub(s,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(s,x.rj),x.rj.vsub(c.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,s,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,c,t,e,d)}sphereHeightfield(t,e,n,s,r,o,a,c,l,h,d){let u=e.data,f=t.radius,g=e.elementSize,y=Ow,m=Fw;ce.pointToLocalFrame(s,o,n,m);let p=Math.floor((m.x-f)/g)-1,x=Math.ceil((m.x+f)/g)+1,w=Math.floor((m.y-f)/g)-1,v=Math.ceil((m.y+f)/g)+1;if(x<0||v<0||p>u.length||w>u[0].length)return;p<0&&(p=0),x<0&&(x=0),w<0&&(w=0),v<0&&(v=0),p>=u.length&&(p=u.length-1),x>=u.length&&(x=u.length-1),v>=u[0].length&&(v=u[0].length-1),w>=u[0].length&&(w=u[0].length-1);let R=[];e.getRectMinMax(p,w,x,v,R);let T=R[0],A=R[1];if(m.z-f>A||m.z+f<T)return;let I=this.result;for(let S=p;S<x;S++)for(let M=w;M<v;M++){let P=I.length,H=!1;if(e.getConvexTrianglePillar(S,M,!1),ce.pointToWorldFrame(s,o,e.pillarOffset,y),n.distanceTo(y)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,y,r,o,a,c,t,e,d)),d&&H||(e.getConvexTrianglePillar(S,M,!0),ce.pointToWorldFrame(s,o,e.pillarOffset,y),n.distanceTo(y)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,y,r,o,a,c,t,e,d)),d&&H))return!0;if(I.length-P>2)return}}boxHeightfield(t,e,n,s,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,c,t,e,d)}convexHeightfield(t,e,n,s,r,o,a,c,l,h,d){let u=e.data,f=e.elementSize,g=t.boundingSphereRadius,y=Bw,m=Uw,p=Dw;ce.pointToLocalFrame(s,o,n,p);let x=Math.floor((p.x-g)/f)-1,w=Math.ceil((p.x+g)/f)+1,v=Math.floor((p.y-g)/f)-1,R=Math.ceil((p.y+g)/f)+1;if(w<0||R<0||x>u.length||v>u[0].length)return;x<0&&(x=0),w<0&&(w=0),v<0&&(v=0),R<0&&(R=0),x>=u.length&&(x=u.length-1),w>=u.length&&(w=u.length-1),R>=u[0].length&&(R=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);let T=[];e.getRectMinMax(x,v,w,R,T);let A=T[0],I=T[1];if(!(p.z-g>I||p.z+g<A))for(let S=x;S<w;S++)for(let M=v;M<R;M++){let P=!1;if(e.getConvexTrianglePillar(S,M,!1),ce.pointToWorldFrame(s,o,e.pillarOffset,y),n.distanceTo(y)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,y,r,o,a,c,null,null,d,m,null)),d&&P||(e.getConvexTrianglePillar(S,M,!0),ce.pointToWorldFrame(s,o,e.pillarOffset,y),n.distanceTo(y)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,y,r,o,a,c,null,null,d,m,null)),d&&P))return!0}}sphereParticle(t,e,n,s,r,o,a,c,l,h,d){let u=Iw;if(u.set(0,0,1),s.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;let g=this.createContactEquation(c,a,e,t,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,c,l,h,d){let u=Aw;u.set(0,0,1),a.quaternion.vmult(u,u);let f=Rw;if(s.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let y=this.createContactEquation(c,a,e,t,l,h);y.ni.copy(u),y.ni.negate(y.ni),y.ri.set(0,0,0);let m=Cw;u.scale(u.dot(s),m),s.vsub(m,m),y.rj.copy(m),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,c,t,e,d)}convexParticle(t,e,n,s,r,o,a,c,l,h,d){let u=-1,f=Lw,g=Nw,y=null,m=Pw;if(m.copy(s),m.vsub(n,m),r.conjugate(Wf),Wf.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,x=t.faces.length;p!==x;p++){let w=[t.worldVertices[t.faces[p][0]]],v=t.worldFaceNormals[p];s.vsub(w[0],qf);let R=-v.dot(qf);if(y===null||Math.abs(R)<Math.abs(y)){if(d)return!0;y=R,u=p,f.copy(v)}}if(u!==-1){let p=this.createContactEquation(c,a,e,t,l,h);f.scale(y,g),g.vadd(s,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);let x=p.ri,w=p.rj;x.vadd(s,x),x.vsub(c.position,x),w.vadd(n,w),w.vsub(a.position,w),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,c,l,h,d){return this.convexHeightfield(e,t,s,n,o,r,c,a,l,h,d)}particleCylinder(t,e,n,s,r,o,a,c,l,h,d){return this.convexParticle(e,t,s,n,o,r,c,a,l,h,d)}sphereTrimesh(t,e,n,s,r,o,a,c,l,h,d){let u=VM,f=GM,g=WM,y=qM,m=XM,p=YM,x=JM,w=HM,v=zM,R=KM;ce.pointToLocalFrame(s,o,n,m);let T=t.radius;x.lowerBound.set(m.x-T,m.y-T,m.z-T),x.upperBound.set(m.x+T,m.y+T,m.z+T),e.getTrianglesInAABB(x,R);let A=kM,I=t.radius*t.radius;for(let L=0;L<R.length;L++)for(let B=0;B<3;B++)if(e.getVertex(e.indices[R[L]*3+B],A),A.vsub(m,v),v.lengthSquared()<=I){if(w.copy(A),ce.pointToWorldFrame(s,o,w,A),A.vsub(n,v),d)return!0;let z=this.createContactEquation(a,c,t,e,l,h);z.ni.copy(v),z.ni.normalize(),z.ri.copy(z.ni),z.ri.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),z.rj.copy(A),z.rj.vsub(c.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}for(let L=0;L<R.length;L++)for(let B=0;B<3;B++){e.getVertex(e.indices[R[L]*3+B],u),e.getVertex(e.indices[R[L]*3+(B+1)%3],f),f.vsub(u,g),m.vsub(f,p);let z=p.dot(g);m.vsub(u,p);let N=p.dot(g);if(N>0&&z<0&&(m.vsub(u,p),y.copy(g),y.normalize(),N=p.dot(y),y.scale(N,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;let V=this.createContactEquation(a,c,t,e,l,h);p.vsub(m,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),ce.pointToWorldFrame(s,o,p,p),p.vsub(c.position,V.rj),ce.vectorToWorldFrame(o,V.ni,V.ni),ce.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}let S=$M,M=ZM,P=jM,H=OM;for(let L=0,B=R.length;L!==B;L++){e.getTriangleVertices(R[L],S,M,P),e.getNormal(R[L],H),m.vsub(S,p);let z=p.dot(H);if(H.scale(z,p),m.vsub(p,p),z=p.distanceTo(m),wn.pointInTriangle(p,S,M,P)&&z<t.radius){if(d)return!0;let N=this.createContactEquation(a,c,t,e,l,h);p.vsub(m,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),ce.pointToWorldFrame(s,o,p,p),p.vsub(c.position,N.rj),ce.vectorToWorldFrame(o,N.ni,N.ni),ce.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}R.length=0}planeTrimesh(t,e,n,s,r,o,a,c,l,h,d){let u=new _,f=BM;f.set(0,0,1),r.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);let y=new _;y.copy(u),ce.pointToWorldFrame(s,o,y,u);let m=UM;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;let x=this.createContactEquation(a,c,t,e,l,h);x.ni.copy(f);let w=FM;f.scale(m.dot(f),w),u.vsub(w,w),x.ri.copy(w),x.ri.vsub(a.position,x.ri),x.rj.copy(u),x.rj.vsub(c.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}},xs=new _,fr=new _,pr=new _,PM=new _,LM=new _,NM=new Ne,DM=new Ne,BM=new _,UM=new _,FM=new _,OM=new _,zM=new _;new _;var kM=new _,HM=new _,VM=new _,GM=new _,WM=new _,qM=new _,XM=new _,YM=new _,$M=new _,ZM=new _,jM=new _,JM=new dn,KM=[],Wa=new _,Gf=new _,QM=new _,tw=new _,ew=new _;function nw(i,t,e){let n=null,s=i.length;for(let r=0;r!==s;r++){let o=i[r],a=QM;i[(r+1)%s].vsub(o,a);let c=tw;a.cross(t,c);let l=ew;e.vsub(o,l);let h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var qa=new _,iw=new _,sw=new _,rw=new _,ow=[new _,new _,new _,new _,new _,new _],aw=new _,cw=new _,lw=new _,hw=new _,uw=new _,dw=new _,fw=new _,pw=new _,mw=new _,gw=new _,yw=new _,xw=new _,vw=new _,_w=new _;new _;new _;var Mw=new _,ww=new _,bw=new _,Sw=new _,Ew=new _,Tw=new _,Aw=new _,Rw=new _,Cw=new _,Iw=new _,Wf=new Ne,Pw=new _;new _;var Lw=new _,qf=new _,Nw=new _,Dw=new _,Bw=new _,Uw=[0],Fw=new _,Ow=new _,nc=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),s=this.current,r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,s=this.previous,r=n.length,o=s.length,a=0;for(let c=0;c<r;c++){let l=!1,h=n[c];for(;h>s[a];)a++;l=h===s[a],l||Xf(t,h)}a=0;for(let c=0;c<o;c++){let l=!1,h=s[c];for(;h>n[a];)a++;l=n[a]===h,l||Xf(e,h)}}};function Xf(i,t){i.push((t&4294901760)>>16,t&65535)}var jh=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`,ou=class{constructor(){this.data={keys:[]}}get(t,e){let n=jh(t,e);return this.data[n]}set(t,e,n){let s=jh(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){let n=jh(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},ic=class extends Ya{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new _,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new _,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Kh,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new ho,this.constraints=[],this.narrowphase=new ru(this),this.collisionMatrix=new Xa,this.collisionMatrixPrevious=new Xa,this.bodyOverlapKeeper=new nc,this.shapeOverlapKeeper=new nc,this.contactmaterials=[],this.contactMaterialTable=new ou,this.defaultMaterial=new yi("default"),this.defaultContactMaterial=new $n(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof gr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=wn.ALL,n.from=t,n.to=e,n.callback=s,Jh.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=wn.ANY,n.from=t,n.to=e,n.result=s,Jh.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=wn.CLOSEST,n.from=t,n.to=e,n.result=s,Jh.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof It&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let s=e[n].shapes;for(let r=0;r<s.length;r++){let o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=Le.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let s=Le.now(),r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Le.now()-s>t*1e3)););this.accumulator=this.accumulator%t;let o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=Gw,s=Ww,r=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=It.DYNAMIC,u=-1/0,f=this.constraints,g=Vw;c.length();let y=c.x,m=c.y,p=c.z,x=0;for(l&&(u=Le.now()),x=0;x!==r;x++){let L=o[x];if(L.type===d){let B=L.force,z=L.mass;B.x+=z*y,B.y+=z*m,B.z+=z*p}}for(let L=0,B=this.subsystems.length;L!==B;L++)this.subsystems[L].update();l&&(u=Le.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),l&&(h.broadphase=Le.now()-u);let w=f.length;for(x=0;x!==w;x++){let L=f[x];if(!L.collideConnected)for(let B=n.length-1;B>=0;B-=1)(L.bodyA===n[B]&&L.bodyB===s[B]||L.bodyB===n[B]&&L.bodyA===s[B])&&(n.splice(B,1),s.splice(B,1))}this.collisionMatrixTick(),l&&(u=Le.now());let v=Hw,R=e.length;for(x=0;x!==R;x++)v.push(e[x]);e.length=0;let T=this.frictionEquations.length;for(x=0;x!==T;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,v,this.frictionEquations,g),l&&(h.narrowphase=Le.now()-u),l&&(u=Le.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);let A=e.length;for(let L=0;L!==A;L++){let B=e[L],z=B.bi,N=B.bj,Z=B.si,V=B.sj,j;if(z.material&&N.material?j=this.getContactMaterial(z.material,N.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,z.material&&N.material&&(z.material.friction>=0&&N.material.friction>=0&&z.material.friction*N.material.friction,z.material.restitution>=0&&N.material.restitution>=0&&(B.restitution=z.material.restitution*N.material.restitution)),a.addEquation(B),z.allowSleep&&z.type===It.DYNAMIC&&z.sleepState===It.SLEEPING&&N.sleepState===It.AWAKE&&N.type!==It.STATIC){let ct=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),ft=N.sleepSpeedLimit**2;ct>=ft*2&&(z.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===It.DYNAMIC&&N.sleepState===It.SLEEPING&&z.sleepState===It.AWAKE&&z.type!==It.STATIC){let ct=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),ft=z.sleepSpeedLimit**2;ct>=ft*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(z,N,!0),this.collisionMatrixPrevious.get(z,N)||(oo.body=N,oo.contact=B,z.dispatchEvent(oo),oo.body=z,N.dispatchEvent(oo)),this.bodyOverlapKeeper.set(z.id,N.id),this.shapeOverlapKeeper.set(Z.id,V.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Le.now()-u,u=Le.now()),x=0;x!==r;x++){let L=o[x];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(w=f.length,x=0;x!==w;x++){let L=f[x];L.update();for(let B=0,z=L.equations.length;B!==z;B++){let N=L.equations[B];a.addEquation(N)}}a.solve(t,this),l&&(h.solve=Le.now()-u),a.removeAllEquations();let I=Math.pow;for(x=0;x!==r;x++){let L=o[x];if(L.type&d){let B=I(1-L.linearDamping,t),z=L.velocity;z.scale(B,z);let N=L.angularVelocity;if(N){let Z=I(1-L.angularDamping,t);N.scale(Z,N)}}}this.dispatchEvent(kw),l&&(u=Le.now());let M=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(x=0;x!==r;x++)o[x].integrate(t,M,P);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Le.now()-u),this.stepnumber+=1,this.dispatchEvent(zw);let H=!0;if(this.allowSleep)for(H=!1,x=0;x!==r;x++){let L=o[x];L.sleepTick(this.time),L.sleepState!==It.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(di,fi),t){for(let r=0,o=di.length;r<o;r+=2)ao.bodyA=this.getBodyById(di[r]),ao.bodyB=this.getBodyById(di[r+1]),this.dispatchEvent(ao);ao.bodyA=ao.bodyB=null}if(e){for(let r=0,o=fi.length;r<o;r+=2)co.bodyA=this.getBodyById(fi[r]),co.bodyB=this.getBodyById(fi[r+1]),this.dispatchEvent(co);co.bodyA=co.bodyB=null}di.length=fi.length=0;let n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(di,fi),n){for(let r=0,o=di.length;r<o;r+=2){let a=this.getShapeById(di[r]),c=this.getShapeById(di[r+1]);pi.shapeA=a,pi.shapeB=c,a&&(pi.bodyA=a.body),c&&(pi.bodyB=c.body),this.dispatchEvent(pi)}pi.bodyA=pi.bodyB=pi.shapeA=pi.shapeB=null}if(s){for(let r=0,o=fi.length;r<o;r+=2){let a=this.getShapeById(fi[r]),c=this.getShapeById(fi[r+1]);mi.shapeA=a,mi.shapeB=c,a&&(mi.bodyA=a.body),c&&(mi.bodyB=c.body),this.dispatchEvent(mi)}mi.bodyA=mi.bodyB=mi.shapeA=mi.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}};new dn;var Jh=new wn,Le=globalThis.performance||{};if(!Le.now){let i=Date.now();Le.timing&&Le.timing.navigationStart&&(i=Le.timing.navigationStart),Le.now=()=>Date.now()-i}new _;var zw={type:"postStep"},kw={type:"preStep"},oo={type:It.COLLIDE_EVENT_NAME,body:null,contact:null},Hw=[],Vw=[],Gw=[],Ww=[],di=[],fi=[],ao={type:"beginContact",bodyA:null,bodyB:null},co={type:"endContact",bodyA:null,bodyB:null},pi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},mi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var sc=Object.freeze([{id:"cleaver",name:"\u0422\u0435\u0441\u0430\u043A",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"cleaver",damage:42,range:1.75,cooldown:.62,swingDuration:.46,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:1.15,description:"\u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0442\u0435\u0441\u0430\u043A \u0441 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u043C \u0448\u0438\u0440\u043E\u043A\u0438\u043C \u043B\u0435\u0437\u0432\u0438\u0435\u043C. \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0440\u0443\u0431\u044F\u0449\u0438\u0439 \u0437\u0430\u043C\u0430\u0445.",sound:{frequency:350,filter:760,duration:.18,noise:.14,bass:.025,swing:360,impact:115}},{id:"sledgehammer",name:"\u041A\u0443\u0432\u0430\u043B\u0434\u0430",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"sledgehammer",damage:68,range:1.95,cooldown:.9,swingDuration:.72,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:4.6,description:"\u0414\u0432\u0443\u0440\u0443\u0447\u043D\u0430\u044F \u043A\u0443\u0432\u0430\u043B\u0434\u0430: \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0439, \u043D\u043E \u043C\u043E\u0449\u043D\u044B\u0439 \u0443\u0434\u0430\u0440 \u0438 \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u0438\u043C\u043F\u0443\u043B\u044C\u0441 ragdoll.",sound:{frequency:105,filter:390,duration:.28,noise:.24,bass:.11,swing:145,impact:72}},{id:"nail-bat",name:"\u0411\u0438\u0442\u0430 \u0441 \u0433\u0432\u043E\u0437\u0434\u044F\u043C\u0438",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"nailBat",damage:50,range:1.9,cooldown:.74,swingDuration:.56,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:2.1,description:"\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u0431\u0438\u0442\u0430 \u0441 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0433\u0432\u043E\u0437\u0434\u044F\u043C\u0438 \u0438 \u0440\u0430\u0437\u043C\u0430\u0448\u0438\u0441\u0442\u043E\u0439 \u0430\u0442\u0430\u043A\u043E\u0439.",sound:{frequency:185,filter:520,duration:.22,noise:.2,bass:.055,swing:205,impact:96}},{id:"pm",name:"\u041F\u041C (\u041C\u0430\u043A\u0430\u0440\u043E\u0432)",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"pm",damage:24,range:38,cooldown:.29,magazineSize:8,reserve:40,reloadDuration:1.1,automatic:!1,weight:.81,description:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:108,filter:1450,duration:.16,noise:.82,bass:.12,waveform:"triangle"}},{id:"tt",name:"\u0422\u0422",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"tt",damage:31,range:48,cooldown:.31,magazineSize:8,reserve:40,reloadDuration:1.25,automatic:!1,weight:.85,description:"\u0422\u0443\u043B\u044C\u0441\u043A\u0438\u0439 \u0422\u043E\u043A\u0430\u0440\u0435\u0432 \u0441 \u0434\u043B\u0438\u043D\u043D\u044B\u043C \u0441\u0442\u0432\u043E\u043B\u043E\u043C. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:142,filter:1840,duration:.2,noise:.91,bass:.16,waveform:"sawtooth"}},{id:"glock-17",name:"Glock 17",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"glock",damage:22,range:42,cooldown:.17,magazineSize:17,reserve:68,reloadDuration:1,automatic:!1,weight:.71,description:"\u041B\u0451\u0433\u043A\u0438\u0439 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043D\u044B\u0439 \u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442. \u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 17 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:122,filter:2200,duration:.135,noise:.74,bass:.09,waveform:"square"}},{id:"ak-47",name:"\u0410\u041A-47",category:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u044B",type:"rifle",model:"ak",damage:34,range:58,cooldown:.105,magazineSize:30,reserve:90,reloadDuration:1.35,automatic:!0,weight:3.8,description:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442 \u0441 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C \u0446\u0435\u0432\u044C\u0451\u043C. \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0433\u043E\u043D\u044C, \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 30 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:86,filter:980,duration:.22,noise:1,bass:.22,waveform:"sawtooth"}},{id:"m4a1",name:"M4A1",category:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u044B",type:"rifle",model:"m4",damage:29,range:62,cooldown:.092,magazineSize:30,reserve:120,reloadDuration:1.25,automatic:!0,weight:3.4,description:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442 \u0441 \u043F\u043B\u0430\u043D\u043A\u0430\u043C\u0438 \u0438 \u0441\u043A\u043B\u0430\u0434\u043D\u044B\u043C \u043F\u0440\u0438\u043A\u043B\u0430\u0434\u043E\u043C. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 30 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:98,filter:1320,duration:.175,noise:.9,bass:.18,waveform:"triangle"}},{id:"pump-shotgun",name:"\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A (\u043F\u043E\u043C\u043F\u043E\u0432\u044B\u0439)",category:"\u0422\u044F\u0436\u0451\u043B\u043E\u0435",type:"shotgun",model:"shotgun",damage:11,pellets:8,spread:.018,range:34,cooldown:.72,magazineSize:8,reserve:32,reloadDuration:1.65,automatic:!1,weight:3.5,description:"\u041F\u043E\u043C\u043F\u043E\u0432\u044B\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A: 8 \u0434\u0440\u043E\u0431\u0438\u043D \u0437\u0430 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u0442\u0440\u0443\u0431\u0447\u0430\u0442\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:70,filter:720,duration:.31,noise:1.05,bass:.28,waveform:"sawtooth"}}]),ws=new Map(sc.map(i=>[i.id,i]));function tp(i){return{magazine:i.magazineSize===null?null:i.magazineSize,reserve:i.magazineSize===null?0:i.reserve}}function ep(i,t){return i.magazineSize===null?!0:!t||t.magazine<=0?!1:(t.magazine--,!0)}function np(i,t){if(i.magazineSize===null||!t||t.reserve<=0||t.magazine>=i.magazineSize)return 0;let e=Math.min(i.magazineSize-t.magazine,t.reserve);return t.magazine+=e,t.reserve-=e,e}function ip(i,t,e="torso",n=1){if(!i||!t)return{damage:0,health:i?.health??0,lethal:!1};let s=e==="head"?1.65:["handL","handR","footL","footR"].includes(e)?.7:1,r=Math.max(1,Math.round(t.damage*s*n));return i.health=Math.max(0,(Number.isFinite(i.health)?i.health:100)-r),i.health===0&&(i.dead=!0),{damage:r,health:i.health,lethal:i.dead===!0}}function sp(i,t){return i.intersectObjects(t,!0)}var tt=i=>document.getElementById(i),mo=tt("game"),gp=matchMedia("(pointer: coarse)").matches,je;try{je=new $r({canvas:mo,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(i){throw document.body.innerHTML='<div style="padding:24px;color:#e4eee9;font:16px Arial">\u0414\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043F\u043E\u043B\u0438\u0433\u043E\u043D\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u044B\u0439 WebGL. \u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u0447\u0442\u043E WebView \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435.</div>',i}je.setPixelRatio(Math.min(window.devicePixelRatio||1,gp?1.35:1.7));je.setSize(window.innerWidth,window.innerHeight,!1);je.outputColorSpace=Fe;je.toneMapping=Fa;je.toneMappingExposure=1.16;je.shadowMap.enabled=!0;je.shadowMap.type=Dh;var be=new Zr;be.background=new Xt(1054747);be.fog=new Ea(1054747,.018);var Xe=new ze(74,window.innerWidth/window.innerHeight,.06,70);Xe.rotation.order="YXZ";be.add(Xe);var Kt=new ic({gravity:new _(0,-9.82,0),allowSleep:!0});Kt.broadphase=new ja(Kt);Kt.solver=new ho;Kt.solver.iterations=12;Kt.solver.tolerance=.001;Kt.defaultContactMaterial.friction=.62;Kt.defaultContactMaterial.restitution=.08;Kt.defaultContactMaterial.contactEquationStiffness=1e7;Kt.defaultContactMaterial.contactEquationRelaxation=3;var Tu=new yi("concrete"),bo=new yi("test-props"),Mc=new yi("operator"),yp=new yi("mannequin"),xp=1,So=2,vp=4,_p=8,wc=xp|So|vp|_p;Kt.addContactMaterial(new $n(Tu,bo,{friction:.75,restitution:.06,contactEquationStiffness:1e7,contactEquationRelaxation:3}));Kt.addContactMaterial(new $n(bo,bo,{friction:.55,restitution:.09}));Kt.addContactMaterial(new $n(Mc,Tu,{friction:0,restitution:0}));Kt.addContactMaterial(new $n(Mc,bo,{friction:.18,restitution:0}));Kt.addContactMaterial(new $n(Mc,yp,{friction:.35,restitution:.02}));var Ps=[],Au=[],Mp=[],Mr=[],wp=[];function bp(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Ru(i,t,e,n){let r=document.createElement("canvas");r.width=512,r.height=512;let o=r.getContext("2d",{willReadFrequently:!0}),a=[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],c=bp(t),l=o.createImageData(512,512);for(let d=0;d<l.data.length;d+=4){let u=(c()-.5)*24;l.data[d]=Math.max(0,Math.min(255,a[0]+u)),l.data[d+1]=Math.max(0,Math.min(255,a[1]+u)),l.data[d+2]=Math.max(0,Math.min(255,a[2]+u)),l.data[d+3]=255}o.putImageData(l,0,0);for(let d=0;d<64;d++){let u=c()>.5?"rgba(8,14,15,.12)":"rgba(235,241,231,.10)";o.strokeStyle=u,o.lineWidth=c()*1.6+.25;let f=c()*512,g=c()*512;o.beginPath(),o.moveTo(f,g),o.lineTo(f+(c()-.5)*42,g+c()*18),o.stroke()}let h=new cr(r);return h.colorSpace=Fe,h.wrapS=h.wrapT=ir,h.repeat.set(e,n),h.anisotropy=Math.min(je.capabilities.getMaxAnisotropy(),8),h}function hu(i,t){let s=document.createElement("canvas");s.width=512,s.height=256;let r=s.getContext("2d",{willReadFrequently:!0}),o=[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],a=bp(t),c=r.createImageData(512,256);for(let h=0;h<256;h++){let d=Math.sin(h*.14)*4+Math.sin(h*.037)*7;for(let u=0;u<512;u++){let f=d+(a()-.5)*18,g=(h*512+u)*4;c.data[g]=Math.max(0,Math.min(255,o[0]+f)),c.data[g+1]=Math.max(0,Math.min(255,o[1]+f*.82)),c.data[g+2]=Math.max(0,Math.min(255,o[2]+f*.62)),c.data[g+3]=255}}r.putImageData(c,0,0);for(let h=0;h<175;h++){let d=a()*256;r.strokeStyle=a()>.5?"rgba(39,25,13,.19)":"rgba(255,226,171,.12)",r.lineWidth=a()*1.4+.25,r.beginPath(),r.moveTo(0,d),r.bezierCurveTo(512*.33,d+(a()-.5)*12,512*.67,d+(a()-.5)*9,512,d+(a()-.5)*6),r.stroke()}let l=new cr(s);return l.colorSpace=Fe,l.wrapS=l.wrapT=ir,l.repeat.set(1.5,1),l.anisotropy=Math.min(je.capabilities.getMaxAnisotropy(),8),l}function wr(i,t,e="#9bdac1"){let n=document.createElement("canvas");n.width=512,n.height=192;let s=n.getContext("2d");s.fillStyle="#182427",s.fillRect(0,0,512,192),s.fillStyle="#26393b",s.fillRect(10,10,492,172),s.strokeStyle=e,s.lineWidth=3,s.strokeRect(12,12,488,168),s.fillStyle=e,s.fillRect(28,28,6,136),s.fillStyle="#e3eee5",s.font="700 35px Arial",s.fillText(i,55,83),s.fillStyle="#8ba49c",s.font="20px Arial",s.fillText(t,57,128),s.fillStyle=e,s.fillRect(440,40,38,38),s.fillStyle="#13201e",s.font="700 20px Arial",s.fillText("01",448,66);let r=new cr(n);return r.colorSpace=Fe,r}var Sp=Ru("#50595a",19,2,1.6),Ep=Ru("#434b4b",81,3.2,2.5),Tp=Ru("#30393b",41,2.5,2.2),Ap=Sp.clone();Ap.colorSpace=cn;var Rp=Ep.clone();Rp.colorSpace=cn;var Cp=Tp.clone();Cp.colorSpace=cn;var rp=new vt({map:Sp,bumpMap:Ap,bumpScale:.065,color:13160138,roughness:.96,metalness:.02}),Xw=new vt({map:Ep,bumpMap:Rp,bumpScale:.048,color:12897482,roughness:.98,metalness:.02}),Yw=new vt({map:Tp,bumpMap:Cp,bumpScale:.032,color:11187121,roughness:.96}),$w=new vt({color:3160636,roughness:.9}),Cu=new vt({color:1778984,roughness:.72,metalness:.28}),op=new vt({color:14002773,roughness:.8,metalness:.06}),ap=new vt({color:12700869,roughness:.9,emissive:1581084,emissiveIntensity:.15});be.add(new Qr(12440016,2630947,1.1));be.add(new Ua(8229521,.48));var mn=new no(16771015,2.15);mn.position.set(-3.8,8.5,4.5);mn.castShadow=!0;mn.shadow.mapSize.set(1536,1536);mn.shadow.camera.left=-11;mn.shadow.camera.right=11;mn.shadow.camera.top=9;mn.shadow.camera.bottom=-9;mn.shadow.camera.near=.5;mn.shadow.camera.far=25;mn.shadow.bias=-18e-5;mn.shadow.normalBias=.025;mn.shadow.radius=4;be.add(mn);function bc(i,t,e=12774368,n=!1){let s=new bt(new Pt(1.05,.1,.25),Cu);s.position.set(i,5.66,t),s.castShadow=!1,s.receiveShadow=!0,be.add(s);let r=new bt(new Pt(.78,.035,.13),new vt({color:e,emissive:e,emissiveIntensity:1.35,roughness:.3}));if(r.position.set(i,5.585,t),be.add(r),n){let o=new Ba(e,42,12,Math.PI/3,.58,1.6);o.position.set(i,5.35,t),o.target.position.set(i,.15,t),o.castShadow=!0,o.shadow.mapSize.set(512,512),o.shadow.camera.near=.2,o.shadow.camera.far=13,o.shadow.bias=-35e-5,o.shadow.normalBias=.035,o.shadow.radius=4,be.add(o,o.target)}else{let o=new eo(e,8.5,8.4,2);o.position.set(i,5.35,t),be.add(o)}}bc(-4.3,-2.8,11787478,!0);bc(.4,-2.7,13886159,!1);bc(4.4,-2.5,11063509,!0);bc(0,4.25,10141120,!1);function Hi(i,t,e,n={}){let s=new bt(i,t);return s.position.set(e[0],e[1],e[2]),s.castShadow=n.castShadow??!0,s.receiveShadow=n.receiveShadow??!0,n.rotation&&s.rotation.set(n.rotation[0],n.rotation[1],n.rotation[2]),n.bulletSurface&&(s.userData.bulletSurface=!0,Mp.push(s)),be.add(s),s}function rc(i,t,e=Tu){let n=new It({mass:0,material:e,collisionFilterGroup:xp,collisionFilterMask:wc});return n.addShape(new gi(new _(t[0],t[1],t[2]))),n.position.set(i[0],i[1],i[2]),Kt.addBody(n),n}function Zw(){let i=Hi(new Pt(18,.5,14),Xw,[0,-.25,0],{bulletSurface:!0});i.receiveShadow=!0,rc([0,-.25,0],[9,.25,7]),Hi(new Pt(18.4,.42,14.4),Yw,[0,6.08,0],{bulletSurface:!0}),rc([0,6.08,0],[9.2,.21,7.2]);for(let s of[-1,1])Hi(new Pt(.4,6,14),rp,[s*9,3,0],{bulletSurface:!0}),rc([s*9,3,0],[.2,3,7]),Hi(new Pt(18,6,.4),rp,[0,3,s*7],{castShadow:!1,bulletSurface:!0}),rc([0,3,s*7],[9,3,.2]);for(let s of[-8.25,8.25])for(let r of[-5.85,0,5.85])Hi(new Pt(.42,5.8,.42),$w,[s,2.9,r]),Hi(new Pt(.5,.11,.5),Cu,[s,.12,r]);for(let s of[-6.72,6.72])Hi(new Pt(17.6,.2,.12),op,[0,.13,s],{castShadow:!1});for(let s of[-8.72,8.72])Hi(new Pt(.12,.2,13.7),op,[s,.13,0],{castShadow:!1});for(let s of[-5.6,-2.8,0,2.8,5.6]){let r=new bt(new Pt(.022,.012,10.8),ap);r.position.set(s,.008,-.1),be.add(r)}for(let s of[-5.3,-2.65,0,2.65,5.3]){let r=new bt(new Pt(16.8,.012,.022),ap);r.position.set(0,.009,s),be.add(r)}let t=new bt(new Un(2.8,.75),new Bn({map:wr("TEST BAY 01","IMPACT / MASS / JOINTS"),transparent:!1,toneMapped:!1}));t.rotation.x=-Math.PI/2,t.position.set(0,.012,-6.15),t.receiveShadow=!1,be.add(t);let e=new bt(new Un(3.1,1.16),new vt({map:wr("PHYSICS LAB","CONCRETE TEST CHAMBER"),roughness:.8,metalness:.1,emissive:1187869,emissiveIntensity:.3}));e.position.set(0,4.4,-6.785),be.add(e);let n=new bt(new Un(1.35,.48),new vt({map:wr("SECTOR 01","OFFLINE SIMULATION","#d9b46d"),roughness:.8,emissive:1512462,emissiveIntensity:.25}));n.position.set(8.785,3.9,-1.4),n.rotation.y=-Math.PI/2,be.add(n)}Zw();var Rs=[hu("#846744",213),hu("#725a40",932),hu("#9a7950",612)],go=Rs.map(i=>{let t=i.clone();return t.colorSpace=cn,t}),jw=[new vt({map:Rs[0],bumpMap:go[0],bumpScale:.035,color:8808262,roughness:.88}),new vt({map:Rs[1],bumpMap:go[1],bumpScale:.035,color:7296829,roughness:.91}),new vt({map:Rs[2],bumpMap:go[2],bumpScale:.035,color:10123343,roughness:.83})],Jw=new vt({color:3156772,roughness:.75,metalness:.15}),Kw=[new vt({color:7383713,roughness:.23,metalness:.05}),new vt({color:9940578,roughness:.27,metalness:.04}),new vt({color:8951472,roughness:.25,metalness:.08})],Qw=[new vt({color:4545884,roughness:.65,metalness:.38}),new vt({color:7296321,roughness:.7,metalness:.35})],fc=new vt({color:10660256,roughness:.44,metalness:.64}),t1=new vt({color:9139286,roughness:.91});function Ip(i,t){i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.userData.gameMeta=t)}),Au.push(i)}function Io(i,t,e,n,s,r=0,o={}){let a=new It({mass:e,material:bo,position:new _(n[0],n[1],n[2]),collisionFilterGroup:vp,collisionFilterMask:wc,linearDamping:o.linearDamping??.08,angularDamping:o.angularDamping??.18,allowSleep:!0,sleepSpeedLimit:.07,sleepTimeLimit:.55});if(Array.isArray(t))for(let c of t)a.addShape(c.shape,c.offset||new _);else a.addShape(t);return a.quaternion.setFromEuler(0,r,0,"YZX"),a.gameMeta={...i,body:a,initialMass:e,isHeld:!1,isStored:!1,originalCollisionFilterMask:a.collisionFilterMask,originalLinearDamping:a.linearDamping,originalAngularDamping:a.angularDamping,lastVelocity:{x:0,y:0,z:0}},Kt.addBody(a),s.position.copy(a.position),s.quaternion.copy(a.quaternion),s.userData.gameMeta=a.gameMeta,be.add(s),Ip(s,a.gameMeta),Ps.push({body:a,visual:s}),a}function e1(i,t,e,n,s){let r=new se,o=Math.abs(Math.floor(n))%Rs.length,a=new vt({map:Rs[o],bumpMap:go[o],bumpScale:.04,color:n,roughness:.9,metalness:.03}),c=new bt(new Pt(i,t,e),a);r.add(c);let l=Math.max(.045,i*.075),h=Math.max(.045,t*.075);for(let u of[-1,1])for(let f of[-1,1]){let g=new bt(new Pt(l,t+.015,l),Jw);g.position.set(u*(i/2-l/2),0,f*(e/2-l/2)),r.add(g)}for(let u of[-1,1]){let f=new bt(new Pt(i*.88,h,e+.012),jw[2]);f.position.y=u*(t/2-h/2),r.add(f)}let d=new bt(new Un(i*.42,t*.22),new vt({map:wr(s,"LOAD TEST / SEALED"),roughness:.76,metalness:.1}));return d.position.set(0,0,e/2+.008),r.add(d),r}function n1(i,t,e,n){let s=new se,r=new bt(new un(i*.9,i,t,20,1),Qw[e]);s.add(r);let o=new bt(new Oi(i*.92,.025,6,24),fc);o.rotation.x=Math.PI/2,o.position.y=t*.31,s.add(o);let a=o.clone();a.position.y=-t*.31,s.add(a);let c=new bt(new Oi(i*.96,.018,5,24),fc);c.rotation.x=Math.PI/2,c.position.y=-t*.09,s.add(c);let l=new bt(new un(i*.85,i*.85,.035,20),Cu);l.position.y=t/2-.015,s.add(l);let h=new bt(new Un(i*1.15,t*.23),new vt({map:wr(n,"TARE / STEEL DRUM"),roughness:.78}));return h.position.set(0,.04,i*.89+.008),s.add(h),s}function i1(i,t){let e=new se,n=[new at(0,-.22),new at(.073,-.22),new at(.103,-.19),new at(.108,-.12),new at(.103,-.015),new at(.096,.055),new at(.071,.105),new at(.048,.125),new at(.041,.15),new at(.041,.218),new at(.05,.228),new at(.05,.246),new at(0,.246)],s=new bt(new Jr(n,16),Kw[i]);e.add(s);let r=new bt(new un(.049,.047,.027,16),fc);r.position.y=.215,e.add(r);let o=new bt(new un(.044,.044,.038,12),new vt({color:2504244,roughness:.45}));o.position.y=.257,e.add(o);let a=new bt(new un(.105,.105,.055,16),new vt({color:14145468,roughness:.6}));a.position.y=-.045,e.add(a);let c=new bt(new Un(.12,.038),new Bn({map:wr(t,"LAB SAMPLE"),toneMapped:!1}));return c.position.set(0,-.045,.104),e.add(c),e}function s1(i,t,e,n){let s=new se,r=new bt(new Pt(i,e,t),t1);s.add(r);let o=new vt({color:n?5655353:5326645,roughness:.9});for(let a of[-t*.28,t*.28]){let c=new bt(new Pt(i*.84,.003,.009),o);c.position.set(0,e/2+.002,a),s.add(c)}for(let a of[-i*.39,i*.39])for(let c of[-t*.29,t*.29]){let l=new bt(new un(.012,.012,.006,8),fc);l.rotation.x=Math.PI/2,l.position.set(a,0,c),s.add(l)}return s}function r1(){let i=new se,t=new vt({map:Rs[2],bumpMap:go[2],bumpScale:.025,color:9204045,roughness:.86}),e=new vt({color:7898497,roughness:.42,metalness:.68}),n=new bt(new un(.022,.029,.96,10),t);n.rotation.z=Math.PI/2,n.position.set(-.09,.005,0),i.add(n);let s=new bt(new Oi(.052,.012,6,14),t);s.position.set(-.55,.01,0),s.rotation.x=Math.PI/2,i.add(s);let r=new bt(new Pt(.11,.065,.075),e);r.position.set(.35,-.005,0),i.add(r);let o=new bt(new Pt(.35,.045,.36),e);o.position.set(.49,-.008,0),i.add(o);let a=new bt(new Pt(.28,.012,.035),new vt({color:10332835,roughness:.38,metalness:.75}));return a.position.set(.48,.018,0),i.add(a),i}function Po(i,t,e,n,s,r=0){let[o,a,c]=e,l=e1(o,a,c,s,i);return Io({kind:"prop",type:"\u042F\u0429\u0418\u041A",name:i,mass:n,detail:`${n.toFixed(1)} \u041A\u0413 \xB7 \u0414\u0415\u0420\u0415\u0412\u041E`,description:"\u0423\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0439 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0439 \u0438\u0441\u043F\u044B\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u044F\u0449\u0438\u043A \u0441 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u043D\u0430\u043A\u043B\u0430\u0434\u043A\u0430\u043C\u0438.",range:4.5,inventoryWidth:o>.88?3:2,inventoryHeight:a>.88?3:2,inventoryIcon:"\u25A3"},new gi(new _(o/2,a/2,c/2)),n,t,l,r)}function Iu(i,t,e,n,s,r,o=0){let a=n1(e,n,r,i),c=new Ms(e*.9,e,n,12);return Io({kind:"prop",type:"\u0411\u041E\u0427\u041A\u0410",name:i,mass:s,detail:`${s.toFixed(0)} \u041A\u0413 \xB7 \u0422\u042F\u0416\u0401\u041B\u0410\u042F \u0421\u0422\u0410\u041B\u042C`,description:"\u0422\u044F\u0436\u0451\u043B\u0430\u044F \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0442\u0430\u0440\u0430; \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u043A\u0440\u0443\u043F\u043D\u044B\u0439 \u043E\u0431\u044A\u0451\u043C \u0438 \u0440\u0435\u0437\u043A\u043E \u043D\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u043C\u044B\u0439 \u0432\u0435\u0441.",range:4.4,inventoryWidth:2,inventoryHeight:3,inventoryIcon:"\u25C9"},c,s,t,a,o,{angularDamping:.23})}function Lo(i,t,e,n=0){let s=i1(e,i),r=[{shape:new Ms(.103,.103,.33,10),offset:new _(0,-.055,0)},{shape:new Ms(.043,.043,.19,9),offset:new _(0,.165,0)}];return Io({kind:"prop",type:"\u0411\u0423\u0422\u042B\u041B\u041A\u0410",name:i,mass:.38,detail:"0.38 \u041A\u0413 \xB7 \u041B\u0401\u0413\u041A\u041E\u0415 \u0421\u0422\u0415\u041A\u041B\u041E",description:"\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0442\u0435\u043A\u043B\u044F\u043D\u043D\u044B\u0439 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0439 \u0444\u043B\u0430\u043A\u043E\u043D. \u041F\u043E\u0447\u0442\u0438 \u043D\u0435 \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u043E\u0431\u0449\u0438\u0439 \u0432\u0435\u0441.",range:3.8,inventoryWidth:1,inventoryHeight:1,inventoryIcon:"\u25C9"},r,.38,t,s,n,{linearDamping:.035,angularDamping:.12})}function Sc(i,t,e,n,s,r,o=0){let a=s1(e,n,s,Math.abs(o)>.1?1:0);return Io({kind:"prop",type:"\u0414\u041E\u0421\u041A\u0410",name:i,mass:r,detail:`${r.toFixed(1)} \u041A\u0413 \xB7 \u0421\u041E\u0421\u041D\u0410`,description:"\u0414\u043B\u0438\u043D\u043D\u0430\u044F \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u0434\u043E\u0441\u043A\u0430; \u0432 \u0440\u044E\u043A\u0437\u0430\u043A\u0435 \u0443\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E.",range:4.3,inventoryWidth:1,inventoryHeight:4,inventoryIcon:"\u25AC"},new gi(new _(e/2,s/2,n/2)),r,t,a,o,{angularDamping:.21})}function o1(i,t,e=0){let n=r1();return Io({kind:"prop",type:"\u041B\u041E\u041F\u0410\u0422\u0410",name:i,mass:3.6,detail:"3.6 \u041A\u0413 \xB7 \u0421\u0422\u0410\u041B\u042C / \u0414\u0415\u0420\u0415\u0412\u041E",description:"\u041F\u043E\u043B\u0435\u0432\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0441\u043E \u0441\u0442\u0430\u043B\u044C\u043D\u044B\u043C \u0448\u0442\u044B\u043A\u043E\u043C \u0438 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u043E\u0439 \u0440\u0443\u043A\u043E\u044F\u0442\u044C\u044E. \u0420\u0430\u0437\u043C\u0435\u0440 2 \xD7 3 \u044F\u0447\u0435\u0439\u043A\u0438.",range:4.5,inventoryWidth:2,inventoryHeight:3,inventoryIcon:"\u2692"},new gi(new _(.64,.07,.2)),3.6,t,n,e,{angularDamping:.3})}Po("\u042F\u0429\u0418\u041A A-01",[-3.55,.42,-1],[.86,.84,.78],7.5,7692356,-.08);Po("\u042F\u0429\u0418\u041A A-02",[-2.73,.38,-1.27],[.72,.76,.68],5.2,9137480,.14);Po("\u042F\u0429\u0418\u041A A-03",[-3.1,1.23,-1.12],[.68,.76,.64],5.8,6903359,.06);Po("\u042F\u0429\u0418\u041A B-01",[4.95,.48,.1],[.95,.96,.86],11,7428673,.24);Po("\u042F\u0429\u0418\u041A B-02",[5.8,.38,-.25],[.72,.76,.72],5.4,9137480,-.17);Iu("\u0411\u041E\u0427\u041A\u0410 M-01",[2.75,.54,-1.9],.38,1.08,18,0);Iu("\u0411\u041E\u0427\u041A\u0410 M-02",[3.75,.5,-2.75],.35,1,15,1,.18);Iu("\u0411\u041E\u0427\u041A\u0410 M-03",[1.93,.47,-3.25],.33,.94,14,0,-.12);Lo("\u0424\u041B\u0410\u041A\u041E\u041D G-01",[-.62,.22,-2.35],0);Lo("\u0424\u041B\u0410\u041A\u041E\u041D G-02",[.05,.22,-2.55],1,.5);Lo("\u0424\u041B\u0410\u041A\u041E\u041D G-03",[.62,.22,-2.38],2,-.3);Lo("\u0424\u041B\u0410\u041A\u041E\u041D G-04",[-4.72,.22,1],1,.4);Lo("\u0424\u041B\u0410\u041A\u041E\u041D G-05",[4.2,.22,1.6],0,-.6);Sc("\u0414\u041E\u0421\u041A\u0410 P-01",[-1.45,.085,-4.1],2.35,.36,.15,3.4,.06);Sc("\u0414\u041E\u0421\u041A\u0410 P-02",[-.2,.09,-4.35],2,.32,.16,3.1,-.33);Sc("\u0414\u041E\u0421\u041A\u0410 P-03",[.85,.075,1.05],2.7,.4,.13,4.2,.52);Sc("\u0414\u041E\u0421\u041A\u0410 P-04",[6.15,.08,2.2],2.15,.3,.14,3,-.13);o1("\u041B\u041E\u041F\u0410\u0422\u0410 S-01",[-5.55,.07,2.7],-.25);var a1=[new vt({color:10926262,roughness:.73,metalness:.14}),new vt({color:12753512,roughness:.76,metalness:.1})],cc=new vt({color:5399911,roughness:.63,metalness:.22}),c1=[new vt({color:7916220,roughness:.45,metalness:.12,emissive:1194549,emissiveIntensity:.25}),new vt({color:15044177,roughness:.5,metalness:.12,emissive:3743763,emissiveIntensity:.2})];function l1(i,t){if(i==="head")return new Na(t[0]/2,14,10);if(i.includes("hand"))return new Pt(t[0],t[1],t[2]);if(i.includes("foot"))return new Pt(t[0],t[1],t[2]);if(i==="torso")return new Pt(t[0],t[1],t[2]);if(i==="pelvis")return new Pt(t[0],t[1],t[2]);let e=Math.min(t[0],t[2])*.48,n=Math.max(.03,t[1]-2*e);return new Ia(e,n,3,9)}function xi(i,t,e,n,s,r=i.skin,o=null){let a=new It({mass:n,type:It.KINEMATIC,material:yp,position:new _(s[0],s[1],s[2]),collisionFilterGroup:_p,collisionFilterMask:wc,angularDamping:.2,linearDamping:.08,allowSleep:!0,sleepSpeedLimit:.08,sleepTimeLimit:.65});a.addShape(new gi(new _(e[0]/2,e[1]/2,e[2]/2))),a.gameMeta={kind:"mannequin",human:i,key:t,body:a},Kt.addBody(a);let c=new se,l=new bt(o||l1(t,e),r);if(c.add(l),t==="torso"){let d=new bt(new Pt(e[0]*.42,e[1]*.24,.018),c1[i.colorIndex]);d.position.set(0,.04,e[2]/2+.009),c.add(d);let u=new bt(new Pt(e[0]*.26,.022,.02),cc);u.position.set(0,-.06,e[2]/2+.012),c.add(u)}if(t==="head"){let d=new bt(new Pt(e[0]*.44,.026,.012),cc);d.position.set(0,.005,e[2]/2-.008),c.add(d)}if(t.startsWith("hand")){let d=new bt(new Pt(.038,.09,.045),r);d.position.set(t.endsWith("L")?.062:-.062,.003,.002),c.add(d)}if(t.startsWith("foot")){let d=new bt(new Pt(e[0]*.78,e[1]*.45,.022),cc);d.position.set(0,-.01,e[2]/2-.012),c.add(d)}c.position.copy(a.position),c.quaternion.copy(a.quaternion),be.add(c),Ip(c,a.gameMeta);let h={key:t,body:a,visual:c,mass:n,size:e};return i.parts.push(h),i.partMap[t]=h,Ps.push({body:a,visual:c}),h}function Vi(i,t,e,n,s,r,o=.35,a=[0,1,0]){let c=i.partMap[t].body,l=i.partMap[e].body,h=new tc(c,l,{pivotA:new _(...n),pivotB:new _(...s),axisA:new _(...a),axisB:new _(...a),angle:r,twistAngle:o,maxForce:2e5,collideConnected:!1});return Kt.addConstraint(h),i.constraints.push(h),h}function Pp(i,t,e){let n={id:i,origin:t,colorIndex:e,skin:a1[e],parts:[],partMap:{},constraints:[],active:!1,dead:!1,health:100,hitFlash:0,behavior:i==="D-01"?"peaceful":"aggressive",state:"idle",rootX:t[0],rootZ:t[2],yaw:0,stateTime:0,quietTime:0,attackCooldown:0,punchSide:1,walkPhase:0,wanderTarget:null,navDirection:null},s=t[0],r=t[2],o=(a,c,l)=>[s+a,c,r+l];xi(n,"pelvis",[.39,.28,.25],5.2,o(0,.97,0),cc),xi(n,"torso",[.44,.58,.28],9.4,o(0,1.39,0)),xi(n,"head",[.32,.32,.32],3.1,o(0,1.84,0));for(let a of[-1,1]){let c=a<0?"L":"R";xi(n,`upperArm${c}`,[.16,.39,.16],2.15,o(a*.32,1.365,0),n.skin),xi(n,`lowerArm${c}`,[.135,.34,.135],1.45,o(a*.35,1,.015),n.skin),xi(n,`hand${c}`,[.135,.13,.095],.55,o(a*.36,.765,.025),n.skin),xi(n,`thigh${c}`,[.21,.45,.21],4.15,o(a*.125,.735,0)),xi(n,`shin${c}`,[.16,.41,.17],2.55,o(a*.13,.305,.005)),xi(n,`foot${c}`,[.17,.12,.31],.9,o(a*.13,.06,.075))}Vi(n,"pelvis","torso",[0,.14,0],[0,-.29,0],.34,.28),Vi(n,"torso","head",[0,.285,0],[0,-.15,0],.5,.38);for(let a of[-1,1]){let c=a<0?"L":"R";Vi(n,"torso",`upperArm${c}`,[a*.215,.17,0],[-a*.105,.19,0],1.36,.88,[1,0,0]),Vi(n,`upperArm${c}`,`lowerArm${c}`,[a*.015,-.195,0],[-a*.015,.17,-.015],.16,2.15,[1,0,0]),Vi(n,`lowerArm${c}`,`hand${c}`,[a*.005,-.17,0],[-a*.005,.06,-.01],.42,.46,[1,0,0]),Vi(n,"pelvis",`thigh${c}`,[a*.125,-.02,0],[0,.22,0],1.08,.55,[1,0,0]),Vi(n,`thigh${c}`,`shin${c}`,[0,-.22,0],[0,.205,-.005],.14,2.05,[1,0,0]),Vi(n,`shin${c}`,`foot${c}`,[0,-.205,0],[0,.035,-.075],.34,.42,[1,0,0])}for(let a of n.parts)a.restLocal={x:a.body.position.x-s,y:a.body.position.y,z:a.body.position.z-r},a.restQuaternion=a.body.quaternion.clone();for(let a of n.parts)a.body.addEventListener("collide",c=>{if(n.active)return;let l=c.body,h=l?.gameMeta?.lastVelocity,d=h?Math.hypot(h.x,h.y,h.z):0,u=c.contact?Math.abs(c.contact.getImpactVelocityAlongNormal()):0,f=Math.max(u,d);if(f>1.15&&l&&l.type===It.DYNAMIC&&l.gameMeta?.kind!=="mannequin"){let g=h?new _(h.x,h.y,h.z):l.velocity;Hu(n,a,f,g)}});return wp.push(n),n}Pp("D-01",[-3.6,0,-4.55],0);Pp("D-02",[3.7,0,-4.5],1);var h1={pelvis:[0,.84,0,.08,0,0],torso:[0,1.28,.025,.08,0,0],head:[0,1.69,.025,0,0,0],upperArmL:[-.31,1.18,.045,-.12,0,-.04],lowerArmL:[-.34,.94,.16,-.72,0,0],handL:[-.35,.77,.29,-.55,0,0],upperArmR:[.31,1.18,.045,-.12,0,.04],lowerArmR:[.34,.94,.16,-.72,0,0],handR:[.35,.77,.29,-.55,0,0],thighL:[-.125,.49,.055,0,0,0],shinL:[-.13,.14,-.115,-Math.PI/2,0,0],footL:[-.13,.065,-.3,0,0,0],thighR:[.125,.49,.055,0,0,0],shinR:[.13,.14,-.115,-Math.PI/2,0,0],footR:[.13,.065,-.3,0,0,0]};function u1(i,t="idle"){let e={},n=i.walkPhase,s=t==="walk"||t==="attack",r=t==="attack"?Math.sin(Yt.clamp(i.stateTime/.74,0,1)*Math.PI):0;for(let o of i.parts){let a=o.restLocal,c=[a.x,a.y,a.z,0,0,0];if(o.key==="pelvis"&&s&&(c[1]+=Math.sin(n*2)*.014),o.key==="torso"&&s&&(c[1]+=Math.sin(n*2+.4)*.018),o.key==="head"&&s&&(c[1]+=Math.sin(n*2+.7)*.012),s&&/^(thigh|shin|foot)[LR]$/.test(o.key)){let l=o.key.endsWith("L")?-1:1,h=Math.sin(n+(l>0?Math.PI:0));o.key.startsWith("thigh")?(c[2]+=h*.105,c[3]=-h*.3):o.key.startsWith("shin")?(c[2]-=h*.045,c[3]=Math.max(0,h)*.3):(c[2]+=h*.05,c[3]=-h*.12)}if(s&&/^(upperArm|lowerArm|hand)[LR]$/.test(o.key)){let l=o.key.endsWith("L")?-1:1,h=Math.sin(n+(l>0?Math.PI:0));c[2]-=h*(o.key.startsWith("upperArm")?.085:.045),c[3]=-h*(o.key.startsWith("upperArm")?.4:.18)}if(t==="attack"&&/^(upperArm|lowerArm|hand)[LR]$/.test(o.key)){let l=o.key.endsWith("L")?-1:1;l===i.punchSide?o.key.startsWith("upperArm")?(c[0]=l*.31,c[1]=1.43,c[2]=.12+r*.11,c[3]=-.92*r):o.key.startsWith("lowerArm")?(c[0]=l*.33,c[1]=1.22,c[2]=.27+r*.2,c[3]=-1.12*r):(c[0]=l*.35,c[1]=1.08,c[2]=.44+r*.26,c[3]=-.75*r):o.key.startsWith("upperArm")?(c[1]=1.37,c[2]=.06,c[3]=-.26):o.key.startsWith("lowerArm")?(c[1]=1.18,c[2]=.14,c[3]=-.48):(c[1]=1.02,c[2]=.2,c[3]=-.38)}e[o.key]=c}return e}function Lp(i,t){let e={},n=Math.cos(i.yaw),s=Math.sin(i.yaw),r=new Ne;r.setFromAxisAngle(new _(0,1,0),i.yaw);for(let o of i.parts){let a=t[o.key]||[o.restLocal.x,o.restLocal.y,o.restLocal.z,0,0,0],c=new Ne;c.setFromEuler(a[3]||0,a[4]||0,a[5]||0,"XYZ");let l=new Ne;r.mult(c,l),e[o.key]={position:new _(i.rootX+a[0]*n+a[2]*s,a[1],i.rootZ-a[0]*s+a[2]*n),quaternion:l}}return e}function qi(i,t="idle"){return Lp(i,u1(i,t))}function d1(i){return Lp(i,h1)}function f1(i){let t={};for(let e of i.parts)t[e.key]={position:e.body.position.clone(),quaternion:e.body.quaternion.clone()};return t}function p1(i,t){for(let e of i.parts){let n=e.body;n.type=t,n.mass=e.mass,n.updateMassProperties(),n.force.set(0,0,0),n.torque.set(0,0,0),n.velocity.set(0,0,0),n.angularVelocity.set(0,0,0),n.wakeUp()}Kt.broadphase.dirty=!0}function Gi(i,t,e){let n=Math.max(.001,e);for(let s of i.parts){let r=s.body,o=t[s.key];r.velocity.set(Yt.clamp((o.position.x-r.position.x)/n,-9,9),Yt.clamp((o.position.y-r.position.y)/n,-9,9),Yt.clamp((o.position.z-r.position.z)/n,-9,9)),r.quaternion.copy(o.quaternion),r.angularVelocity.set(0,0,0),r.force.set(0,0,0),r.torque.set(0,0,0),r.aabbNeedsUpdate=!0,r.wakeUp()}Kt.broadphase.dirty=!0}function cp(i,t,e,n,s){let r=Yt.smoothstep(n,0,1),o=Math.max(.001,s);for(let a of i.parts){let c=a.body,l=t[a.key],h=e[a.key],d=Yt.lerp(l.position.x,h.position.x,r),u=Yt.lerp(l.position.y,h.position.y,r),f=Yt.lerp(l.position.z,h.position.z,r);c.velocity.set(Yt.clamp((d-c.position.x)/o,-9,9),Yt.clamp((u-c.position.y)/o,-9,9),Yt.clamp((f-c.position.z)/o,-9,9)),l.quaternion.slerp(h.quaternion,r,c.quaternion),c.angularVelocity.set(0,0,0),c.force.set(0,0,0),c.torque.set(0,0,0),c.aabbNeedsUpdate=!0,c.wakeUp()}Kt.broadphase.dirty=!0}function m1(i){let t=i.partMap.pelvis.body.position;i.rootX=Yt.clamp(t.x,-8,8),i.rootZ=Yt.clamp(t.z,-6,6);let e=i.behavior==="peaceful"?Yt.clamp(i.rootX+(i.rootX<0?-2.6:2.6),-7.4,7.4):_t.position.x,n=i.behavior==="peaceful"?i.rootZ+.05:_t.position.z;i.yaw=Math.atan2(e-i.rootX,n-i.rootZ),i.recoveryFrom=f1(i),i.kneelingPose=d1(i),i.standingPose=qi(i,"idle"),i.state="recovering-to-knees",i.stateTime=0,p1(i,It.KINEMATIC)}function g1(i){if(i.stateTime=0,i.walkPhase=0,i.navDirection=null,i.behavior==="peaceful"){let t=i.rootX<0?-1:1;i.wanderTarget={x:Yt.clamp(i.rootX+t*2.6,-7.4,7.4),z:Yt.clamp(i.rootZ+.12,-5.9,5.9)},i.state="walking-away"}else i.state="chasing"}function y1(i,t,e){let n=Math.hypot(t,e);if(n<1e-4)return{x:0,z:0};t/=n,e/=n;let s=[0,.38,-.38,.76,-.76,1.18,-1.18,1.62,-1.62],r={x:t,z:e,score:-1/0};for(let o of s){let a=Math.cos(o),c=Math.sin(o),l=t*a-e*c,h=t*c+e*a,d=(l*t+h*e)*2.1;i.navDirection&&(d+=(l*i.navDirection.x+h*i.navDirection.z)*.24);for(let u of Ps){let f=u.body,g=f.gameMeta;if(g?.kind!=="prop"||g.isStored||g.isHeld)continue;let y=f.position.x-i.rootX,m=f.position.z-i.rootZ,p=y*l+m*h;if(p<-.15||p>2.1)continue;let x=Math.abs(y*h-m*l),w=Math.min(1.35,Math.max(.36,f.boundingRadius||.55))+.38;if(x<w){let v=Yt.clamp((2.1-Math.max(0,p))/1.75,.35,1.45);d-=(w-x)*2.2*v}}d>r.score&&(r={x:l,z:h,score:d})}return i.navDirection={x:r.x,z:r.z},r}function lc(i,t,e,n){if(Math.hypot(t,e)<1e-4)return;let r=Math.atan2(t,e)-i.yaw;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;i.yaw+=Yt.clamp(r,-n*5.5,n*5.5)}function lp(i,t,e,n,s){let r=t-i.rootX,o=e-i.rootZ,a=Math.hypot(r,o);if(a<.025)return a;let c=y1(i,r,o);lc(i,c.x,c.z,s);let l=Math.min(a,n*s);return i.rootX=Yt.clamp(i.rootX+c.x*l,-8,8),i.rootZ=Yt.clamp(i.rootZ+c.z*l,-6,6),i.walkPhase+=s*(n+1.8),a}function x1(i){let t=0,e=0;for(let n of i.parts)t=Math.max(t,n.body.velocity.length()),e=Math.max(e,n.body.angularVelocity.length());return t<.58&&e<1.15}function v1(i){for(let t of wp){if(t.hitFlash=Math.max(0,t.hitFlash-i),t.dead||!t.active)continue;if(t.attackCooldown=Math.max(0,t.attackCooldown-i),t.state==="falling"){t.stateTime+=i,t.quietTime=x1(t)?t.quietTime+i:0,t.stateTime>=1.15&&(t.quietTime>=.58||t.stateTime>=3.85)&&m1(t);continue}if(t.state==="recovering-to-knees"){t.stateTime+=i,cp(t,t.recoveryFrom,t.kneelingPose,t.stateTime/1.2,i),t.stateTime>=1.2&&(t.state="kneeling-hold",t.stateTime=0);continue}if(t.state==="kneeling-hold"){t.stateTime+=i,Gi(t,t.kneelingPose,i),t.stateTime>=.48&&(t.state="recovering-to-feet",t.stateTime=0);continue}if(t.state==="recovering-to-feet"){t.stateTime+=i,cp(t,t.kneelingPose,t.standingPose,t.stateTime/1.08,i),t.stateTime>=1.08&&g1(t);continue}if(t.state==="walking-away"){let r=lp(t,t.wanderTarget.x,t.wanderTarget.z,1.35,i);r<.24&&(t.state="idle-after",t.stateTime=0),Gi(t,qi(t,r>.24?"walk":"idle"),i);continue}if(t.state==="idle-after"){t.stateTime+=i,Gi(t,qi(t,"idle"),i);continue}if(t.behavior!=="aggressive")continue;let e=_t.position.x-t.rootX,n=_t.position.z-t.rootZ,s=Math.hypot(e,n);if(t.state==="attacking"){if(t.stateTime+=i,lc(t,e,n,i),s>1.95&&t.stateTime<.28){t.state="chasing",t.stateTime=0,Gi(t,qi(t,"walk"),i);continue}Gi(t,qi(t,"attack"),i),!t.attackHitDone&&t.stateTime>=.27&&(t.attackHitDone=!0,s<=1.55&&Xp(8,"torso")),t.stateTime>=.74&&(t.state="chasing",t.stateTime=0);continue}if(s<=1.35&&t.attackCooldown<=0){t.state="attacking",t.stateTime=0,t.attackHitDone=!1,t.attackCooldown=1.35,t.punchSide*=-1,lc(t,e,n,i),Gi(t,qi(t,"attack"),i);continue}s>1.05?(lp(t,_t.position.x,_t.position.z,2.9,i),Gi(t,qi(t,"walk"),i)):(lc(t,e,n,i),Gi(t,qi(t,"idle"),i))}}var ji=new _(0,.87,5.25),_t=new It({mass:72,material:Mc,position:ji.clone(),collisionFilterGroup:So,collisionFilterMask:wc&~So,fixedRotation:!0,linearDamping:.02,angularDamping:1,allowSleep:!1});_t.addShape(new Ms(.31,.31,1.08,12));_t.addShape(new lo(.31),new _(0,.53,0));_t.addShape(new lo(.31),new _(0,-.53,0));_t.gameMeta={kind:"player"};Kt.addBody(_t);var pc=!1,mc=ji.y,gc=0,hp=0,yr=new se;Xe.add(yr);var _1=new vt({color:5858394,roughness:.86,metalness:.02}),M1=new vt({color:2436649,roughness:.78,metalness:.08}),fo=new vt({color:3753018,roughness:.91,metalness:.01}),uu=new vt({color:2107681,roughness:.84,metalness:.03}),uo=new vt({color:5661262,roughness:.88,metalness:.02}),ne=new vt({color:2699832,roughness:.46,metalness:.68}),Ut=new vt({color:1514784,roughness:.62,metalness:.42}),wi=new vt({color:3357239,roughness:.82,metalness:.08}),yc=new vt({color:7491637,roughness:.84,metalness:.02}),Ec=new vt({color:4994854,roughness:.9,metalness:.01}),gu=new vt({color:5342898,roughness:.23,metalness:.26,emissive:1057594,emissiveIntensity:.2}),pn=new se;yr.add(pn);var Q=new se;pn.add(Q);var _i=new D(.28,-.33,-.78),Mi=new hn(.25,.25,.015,"XYZ");pn.position.copy(_i);pn.rotation.copy(Mi);var Ss={},De=null,br=new D(0,-.145,.035),fn=null,Es=new D(0,-.045,-.44),Tn=new se;pn.add(Tn);var xr=0,Xi=0,bn=0,Eo=0,Cs=0,sn=!1,Ts=0,xc=!1,vr=0,Si="ak-47",Pu=new Map(sc.map(i=>[i.id,tp(i)])),bs=null,yu=null,xu=[],vi=0,Lu=0;function Rr(i){Lu=le?i:.78}function en(i,t,e,n=0){let s=new bt(i,t);return s.position.set(e[0],e[1],e[2]),s.rotation.z=n,s.castShadow=!1,s.receiveShadow=!1,s}function nt(i,t,e,n,s=[0,0,0]){let r=new bt(new Pt(t[0],t[1],t[2]),n);return r.position.set(e[0],e[1],e[2]),r.rotation.set(s[0],s[1],s[2]),r.castShadow=!1,r.receiveShadow=!1,i.add(r),r}function Ve(i,t,e,n,s,r=12){let o=new bt(new un(t,t,e,r,1),s);return o.position.set(n[0],n[1],n[2]),o.rotation.x=Math.PI/2,o.castShadow=!1,o.receiveShadow=!1,i.add(o),o}var Nu=new vt({color:7957330,roughness:.79,metalness:.08}),As=new vt({color:5660773,roughness:.4,metalness:.74}),w1=new vt({color:9016474,roughness:.31,metalness:.82}),hc=new vt({color:2435625,roughness:.92,metalness:.02}),b1=new vt({color:9080717,roughness:.38,metalness:.83});function S1(){let i=new bt(new Kr(.06,.19,6),new Bn({color:16760168,transparent:!0,opacity:.92}));i.rotation.x=-Math.PI/2,i.position.z=-.075,Tn.add(i),Tn.add(new bt(new Pa(.055,0),new Bn({color:16773296})));let t=new eo(16754499,0,2.2,2);Tn.add(t),Tn.userData.light=t,Tn.visible=!1}S1();function E1(){Q.traverse(i=>{i.geometry&&i.geometry.dispose()}),Q.clear(),De=null,fn=null}function T1(){nt(Q,[.205,.145,.46],[0,.005,.035],ne),nt(Q,[.184,.036,.43],[0,.095,.025],Ut),nt(Q,[.045,.025,.47],[0,.132,-.02],ne),nt(Q,[.11,.02,.11],[0,.158,-.15],Ut),nt(Q,[.018,.026,.16],[.112,.025,.035],Ut),nt(Q,[.055,.036,.13],[.112,.026,-.03],ne),nt(Q,[.065,.025,.1],[-.113,.025,.105],Ut),nt(Q,[.06,.025,.1],[-.12,-.005,.16],ne),Ve(Q,.033,.76,[0,.025,-.575],ne,10),Ve(Q,.046,.13,[0,.025,-1.015],Ut,10),nt(Q,[.085,.065,.08],[0,.115,-.88],ne),nt(Q,[.018,.075,.025],[0,.18,-.91],Ut),nt(Q,[.13,.025,.045],[0,.153,-.9],ne);for(let s of[-1,1])nt(Q,[.012,.028,.045],[s*.043,.026,-1.015],ne);nt(Q,[.17,.095,.36],[0,-.045,-.39],yc),nt(Q,[.178,.016,.31],[0,.014,-.39],Ec);for(let s of[-1,1]){nt(Q,[.014,.022,.31],[s*.09,-.045,-.39],ne);for(let r=0;r<7;r++)nt(Q,[.009,.013,.018],[s*.101,-.045,-.52+r*.043],Ut)}nt(Q,[.055,.035,.44],[0,.118,-.39],Ut),nt(Q,[.11,.06,.08],[0,.16,-.105],ne),nt(Q,[.045,.047,.028],[0,.195,-.115],Ut);let i=new se;i.position.set(0,.226,-.17),Q.add(i),Ve(i,.063,.28,[0,0,-.015],Ut,8),Ve(i,.073,.055,[0,0,.105],ne,8),Ve(i,.073,.04,[0,0,-.155],ne,8);let t=new bt(new ps(.053,8),gu);t.position.z=.135,i.add(t);let e=new bt(new ps(.047,8),gu);e.position.z=-.177,e.rotation.y=Math.PI,i.add(e),nt(Q,[.11,.025,.22],[0,.178,-.17],ne),nt(Q,[.088,.22,.115],[.012,-.17,.165],wi,[-.18,0,-.04]);let n=new bt(new Oi(.061,.009,5,12),ne);n.position.set(0,-.105,.075),Q.add(n),nt(Q,[.018,.09,.022],[.015,-.1,.045],Ut,[.22,0,0]),De=new se,br.set(0,-.145,.035),Q.add(De),nt(De,[.11,.26,.17],[0,-.13,0],wi,[-.12,0,0]),nt(De,[.116,.035,.175],[0,-.252,-.01],Ut,[-.12,0,0]);for(let s=0;s<4;s++)nt(De,[.115,.012,.18],[0,-.06-s*.045,0],ne,[-.12,0,0]);nt(Q,[.105,.105,.44],[0,.015,.445],wi),nt(Q,[.13,.12,.045],[0,.005,.67],Ut),nt(Q,[.09,.045,.24],[0,.078,.42],ne),nt(Q,[.18,.012,.12],[0,-.048,.57],Ut)}function A1(){nt(Q,[.2,.15,.43],[0,.005,.035],ne),nt(Q,[.19,.045,.39],[0,.097,.025],Ut),nt(Q,[.05,.025,.55],[0,.134,-.09],ne),nt(Q,[.17,.105,.4],[0,-.025,-.39],wi),nt(Q,[.19,.02,.42],[0,.045,-.38],Ut);for(let e of[-1,1]){nt(Q,[.015,.025,.35],[e*.095,-.025,-.4],ne);for(let n=0;n<6;n++)nt(Q,[.012,.012,.025],[e*.105,-.025,-.55+n*.06],Ut)}Ve(Q,.029,.88,[0,.02,-.75],ne,10),Ve(Q,.043,.11,[0,.02,-1.245],Ut,10),nt(Q,[.045,.12,.04],[0,.17,-1.11],ne),nt(Q,[.09,.04,.08],[0,.125,-1.08],Ut),nt(Q,[.17,.024,.48],[0,.16,-.17],Ut),nt(Q,[.12,.075,.11],[0,.205,-.12],ne);let i=new se;i.position.set(0,.25,-.19),Q.add(i),Ve(i,.055,.25,[0,0,0],Ut,8),Ve(i,.064,.035,[0,0,.12],ne,8);let t=new bt(new ps(.044,8),gu);t.position.z=.14,i.add(t),nt(Q,[.09,.035,.09],[0,.19,.03],Ut),nt(Q,[.09,.19,.12],[.012,-.15,.16],wi,[-.17,0,0]),nt(Q,[.11,.04,.4],[0,-.008,.44],Ut),nt(Q,[.08,.11,.08],[0,.005,.64],wi),nt(Q,[.07,.095,.06],[0,.015,.72],Ut),De=new se,br.set(0,-.145,.035),Q.add(De),nt(De,[.11,.26,.16],[0,-.13,0],Ut,[-.06,0,0]),nt(De,[.12,.028,.17],[0,-.255,-.01],ne);for(let e=0;e<4;e++)nt(De,[.115,.012,.17],[0,-.07-e*.045,0],Nu);nt(Q,[.18,.012,.13],[0,-.045,.56],Ut)}function R1(i){let t=i.id==="tt",e=i.id==="glock-17",n=t?.39:e?.34:.32,s=-.055,r=e?wi:ne;nt(Q,[.14,.095,.31],[0,-.035,.055],Ut),nt(Q,[.13,.105,n],[0,.035,s],r),nt(Q,[.12,.018,n*.78],[0,.092,s-.015],As),Ve(Q,t?.025:.022,t?.35:.28,[0,.025,-.27],Ut,9),nt(Q,[.09,.19,.12],[.008,-.15,.155],e?wi:hc,[-.19,0,0]),nt(Q,[.095,.035,.13],[.008,-.235,.16],Ut,[-.19,0,0]),nt(Q,[.013,.075,.015],[.02,-.1,.08],ne,[.22,0,0]),nt(Q,[.035,.038,.035],[0,.105,.075],Ut),nt(Q,[.035,.04,.03],[0,.105,s-n*.46],Ut),e?(nt(Q,[.17,.035,.18],[0,-.068,-.11],Ut),nt(Q,[.105,.018,.08],[0,.1,-.17],Nu)):(nt(Q,[.018,.075,.19],[.076,.035,.035],Ut),nt(Q,[.02,.07,.16],[-.078,.035,.035],As),t&&nt(Q,[.012,.085,.17],[.075,.035,-.12],As),nt(Q,[.09,.14,.018],[0,-.16,.22],Ec,[-.19,0,0])),De=new se,br.set(0,-.17,.15),Q.add(De),nt(De,[.09,.18,.105],[0,-.08,0],Ut,[-.17,0,0]),nt(De,[.095,.018,.11],[0,-.17,-.005],As,[-.17,0,0])}function C1(){nt(Q,[.2,.17,.39],[0,.005,.02],ne),nt(Q,[.14,.055,.31],[0,.11,.01],Ut),Ve(Q,.038,.98,[0,.052,-.77],As,10),Ve(Q,.046,.12,[0,.052,-1.32],Ut,10),Ve(Q,.027,.84,[0,-.055,-.63],Ut,10),nt(Q,[.045,.1,.08],[0,.135,-1.17],ne),nt(Q,[.11,.035,.17],[0,.13,-.12],Ut),nt(Q,[.11,.21,.13],[0,-.16,.16],wi,[-.14,0,0]),nt(Q,[.14,.12,.43],[0,0,.48],yc),nt(Q,[.16,.13,.05],[0,-.005,.69],Ut),nt(Q,[.19,.012,.1],[0,-.06,.57],Ut),fn=new se,Es.set(0,-.035,-.48),fn.position.copy(Es),Q.add(fn),nt(fn,[.16,.11,.26],[0,0,0],yc),nt(fn,[.17,.018,.23],[0,.052,0],Ec);for(let t=0;t<5;t++)nt(fn,[.17,.014,.018],[0,-.045+t*.021,-.105],Ut);let i=new bt(new Oi(.065,.009,5,12),ne);i.position.set(0,-.095,.11),Q.add(i),nt(Q,[.018,.08,.02],[.01,-.095,.08],Ut),De=null}function I1(i){if(i.model==="cleaver")nt(Q,[.075,.24,.085],[0,-.1,.2],hc,[-.12,0,0]),nt(Q,[.09,.055,.095],[0,-.205,.2],ne),nt(Q,[.31,.24,.065],[-.02,.075,-.17],w1,[0,0,-.08]),nt(Q,[.26,.025,.072],[-.035,-.048,-.18],As,[0,0,-.08]),nt(Q,[.075,.22,.06],[.1,.08,-.19],ne,[0,0,-.1]),nt(Q,[.025,.025,.02],[0,-.07,.2],Nu);else if(i.model==="sledgehammer"){Ve(Q,.033,.98,[0,-.02,-.08],Ec,8),Ve(Q,.043,.34,[0,-.02,.24],hc,8);for(let t=0;t<4;t++)nt(Q,[.09,.012,.018],[0,-.02,.12+t*.055],ne);nt(Q,[.42,.2,.22],[0,.02,-.64],ne),nt(Q,[.11,.23,.24],[-.18,.02,-.64],Ut),nt(Q,[.11,.23,.24],[.18,.02,-.64],Ut),nt(Q,[.26,.035,.235],[0,.135,-.64],As)}else{Ve(Q,.058,.88,[0,-.005,-.17],yc,9),Ve(Q,.045,.28,[0,-.01,.33],hc,8),nt(Q,[.12,.1,.04],[0,-.005,.17],Ut);for(let t=0;t<7;t++){let e=-.52+t*.105,n=t%2===0?1:-1,s=new bt(new Kr(.021,.13,4),b1);s.position.set(n*.062,.018,e),s.rotation.z=n*Math.PI/2,Q.add(s),nt(Q,[.025,.025,.025],[n*.035,.018,e+.035],Ut)}}}function vu(i,t){let e=Ss[i];if(!e)return;let n=i==="left"?-1:1,s=new D(t[0]-n*.15,t[1]-.285,t[2]+.025);e.userData.gripPosition=s,e.userData.gripRotation=new hn(i==="left"?.08:-.06,0,i==="left"?.05:-.05),e.position.copy(s),e.rotation.copy(e.userData.gripRotation)}function P1(i){E1(),i.type==="melee"?I1(i):i.model==="ak"?T1():i.model==="m4"?A1():i.type==="pistol"?R1(i):i.type==="shotgun"&&C1();let t=i.type==="melee"?{position:[.29,-.34,-.82],rotation:[.2,.22,.04],left:[-.08,-.1,-.055],right:[.07,-.105,.18]}:i.type==="pistol"?{position:[.3,-.39,-.69],rotation:[.18,.22,.02],left:[-.045,-.14,.17],right:[.035,-.105,.15]}:i.type==="shotgun"?{position:[.28,-.34,-.82],rotation:[.23,.24,.015],left:[-.09,-.015,-.46],right:[.07,-.105,.17]}:{position:[.28,-.33,-.78],rotation:[.25,.25,.015],left:[-.09,-.015,-.39],right:[.07,-.105,.17]};_i.set(...t.position),Mi.set(...t.rotation,"XYZ"),pn.position.copy(_i),pn.rotation.copy(Mi),vu("left",t.left),vu("right",t.right);let e=i.type==="pistol"?-.43:i.type==="shotgun"?-1.38:i.type==="melee"?0:-1.09;Tn.position.set(0,i.type==="shotgun"?.052:.025,e),Tn.visible=!1,Q.visible=!0}function No(){return ws.get(Si)||ws.get("ak-47")}function Tc(){return Pu.get(Si)}function Np(i,t=!0){let e=ws.get(i);return e?(Si=i,sn=!1,Cs=0,bn=0,Eo=0,Ts=0,xc=!1,vr=0,Xi=0,xr=0,P1(e),Ac(),t&&Be(`${e.name.toUpperCase()} \xB7 \u0413\u041E\u0422\u041E\u0412\u041E`,.9),!0):!1}function Dp(i){let t=new se,e=i<0?-1:1,n=en(new Pt(.145,.33,.17),_1,[-e*.045,-.065,0],e*.37);t.add(n);let s=en(new Pt(.152,.018,.176),uu,[-e*.018,.058,-.002],e*.37);t.add(s);let r=en(new Pt(.18,.075,.19),M1,[e*.082,.19,-.006],e*.37);t.add(r),t.add(en(new Pt(.145,.018,.194),uo,[e*.082,.166,-.006],e*.37));let o=new se;o.position.set(e*.15,.285,-.025),o.rotation.z=-e*.06,t.add(o),o.add(en(new Pt(.225,.165,.112),fo,[0,0,0])),o.add(en(new Pt(.135,.074,.012),uo,[0,.005,-.062])),o.add(en(new Pt(.084,.018,.018),uu,[0,-.071,-.052])),o.add(en(new Pt(.196,.025,.018),uu,[0,.067,-.057]));let a=[.081,.094,.087,.071];for(let u=0;u<4;u++){let f=new se,g=a[u]*.59,y=a[u]*.41;f.position.set((u-1.5)*.052,.078,-.018),o.add(f),f.add(en(new Pt(.041,g,.076),fo,[0,g*.5,0])),f.add(en(new Pt(.044,.022,.078),uo,[0,g-.008,-.004]));let m=new se;m.position.y=g-.004,f.add(m),m.add(en(new Pt(.037,y,.071),fo,[0,y*.48,0])),m.add(en(new Pt(.038,.015,.073),uo,[0,y-.007,-.002])),xu.push({base:f,distal:m,fan:(u-1.5)*.055,side:e})}let c=new se;c.position.set(e*.104,-.008,-.025),c.rotation.z=e*.54,o.add(c),c.add(en(new Pt(.057,.085,.078),fo,[0,.041,0]));let l=new se;l.position.y=.075,c.add(l),l.add(en(new Pt(.052,.067,.072),uo,[0,.031,-.002])),xu.push({base:c,distal:l,fan:.54,side:e,thumb:!0});let h=i<0?[-.09,-.015,-.39]:[.07,-.105,.17];pn.add(t);let d=i<0?"left":"right";Ss[d]=t,vu(d,h)}Dp(-1);Dp(1);vi=Lu=.78;Np(Si,!1);function L1(i){vi=Yt.damp(vi,Lu,13,i);for(let t of xu)t.thumb?(t.base.rotation.x=-vi*.6,t.base.rotation.z=t.side*(.54+vi*.62),t.distal.rotation.x=-vi*.9):(t.base.rotation.x=-vi*.58,t.base.rotation.z=t.fan*(.25+vi*.25),t.distal.rotation.x=-vi*1.28)}function Ac(){let i=No(),t=Tc(),e=tt("ammo-count");e&&(e.textContent=i.magazineSize===null?"":`${t.magazine} / ${t.reserve}`);let n=tt("fire-label");n&&(n.textContent=i.type==="melee"?"\u0423\u0414\u0410\u0420":"\u041E\u0413\u041E\u041D\u042C");let s=tt("fire-button");s&&(s.disabled=i.magazineSize!==null&&t.magazine<=0&&t.reserve<=0,s.setAttribute("aria-label",`${i.name}: ${i.type==="melee"?"\u0443\u0434\u0430\u0440":"\u043E\u0433\u043E\u043D\u044C"}`),s.classList.toggle("melee-mode",i.type==="melee"));let r=tt("reload-button");r&&(r.style.display=i.magazineSize===null?"none":"grid")}function N1(){if(bs)return bs;let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;bs=new i;let t=Math.floor(bs.sampleRate*.65);yu=bs.createBuffer(1,t,bs.sampleRate);let e=yu.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1;return bs}function vc(i,t="fire"){try{let e=N1();if(!e)return;e.state==="suspended"&&e.resume();let n=e.currentTime,s=i.sound,r=t==="fire"?s.duration:t==="swing"?.17:t==="impact"?.095:.075,o=t==="swing"?s.swing:t==="impact"?s.impact:s.frequency,a=t==="fire"?s.noise:t==="impact"?s.noise*.48:t==="swing"?.18:.08,c=e.createBiquadFilter();c.type=t==="swing"?"highpass":"lowpass",c.frequency.setValueAtTime(t==="fire"?s.filter:Math.max(240,s.filter*.72),n),c.Q.value=t==="swing"?.7:.5;let l=e.createGain();l.gain.setValueAtTime(Math.min(.34,a*.24),n),l.gain.exponentialRampToValueAtTime(1e-4,n+r);let h=e.createBufferSource();h.buffer=yu,h.connect(c),c.connect(l),l.connect(e.destination),h.start(n),h.stop(n+r);let d=e.createOscillator();d.type=t==="fire"?s.waveform||"triangle":"sine",d.frequency.setValueAtTime(o,n),d.frequency.exponentialRampToValueAtTime(Math.max(32,o*(t==="swing"?.52:.36)),n+r);let u=e.createGain(),f=t==="fire"?s.bass:t==="impact"?s.bass*1.2:t==="swing"?.015:.022;u.gain.setValueAtTime(Math.max(1e-4,f),n),u.gain.exponentialRampToValueAtTime(1e-4,n+r),d.connect(u),u.connect(e.destination),d.start(n),d.stop(n+r)}catch{}}function Du(){let i=No(),t=Tc();if(!(me||Ye||Se||le||bn>0||i.magazineSize===null)){if(t.magazine>=i.magazineSize){Be("\u041C\u0410\u0413\u0410\u0417\u0418\u041D \u041F\u041E\u041B\u041E\u041D",.85);return}if(t.reserve<=0){Be("\u041D\u0415\u0422 \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412",.9);return}sn=!1,bn=i.reloadDuration,Eo=0,Xi=0,vc(i,"reload"),Be("\u041F\u0415\u0420\u0415\u0417\u0410\u0420\u042F\u0414\u041A\u0410",.8)}}function D1(){let i=No(),t=np(i,Tc());Eo=1,Ac(),t>0&&Be("\u0413\u041E\u0422\u041E\u0412\u041E",.65)}function B1(i){let t=new se,e=i.face?.normal?.clone()||new D(0,0,1);i.object.updateWorldMatrix(!0,!1),e.transformDirection(i.object.matrixWorld).normalize();let n=new Bn({color:1119509,transparent:!0,opacity:.96,depthWrite:!1,side:vn,polygonOffset:!0,polygonOffsetFactor:-2}),s=new Bn({color:7168592,transparent:!0,opacity:.76,depthWrite:!1,side:vn,polygonOffset:!0,polygonOffsetFactor:-2}),r=new bt(new La(.023,.035,8),s),o=new bt(new ps(.024,8),n);if(t.add(r,o),t.position.copy(i.point).addScaledVector(e,.004),t.quaternion.setFromUnitVectors(new D(0,0,1),e),be.add(t),Mr.push({object:t,life:22,maxLife:22}),Mr.length>72){let a=Mr.shift();Bp(a)}}function Bp(i){i?.object&&(be.remove(i.object),i.object.traverse(t=>{t.geometry?.dispose(),t.material&&t.material!==Ut&&t.material.dispose?.()}))}function U1(i){for(let t=Mr.length-1;t>=0;t--){let e=Mr[t];e.life-=i;let n=Yt.clamp(e.life/e.maxLife,0,1);e.object.traverse(s=>{s.material?.transparent&&(s.material.opacity=n*(s.geometry?.type==="RingGeometry"?.76:.96))}),e.life<=0&&(Mr.splice(t,1),Bp(e))}}function F1(i,t,e,n=1){if(!(!i||i.isStored||i.isHeld)){if(i.kind==="mannequin"&&i.human){let s=i.human,r=s.partMap[i.key]||s.partMap.torso,o=ip(s,e,i.key,n);s.hitFlash=.32;let a=new _(t.x,t.y,t.z);if(!s.active)Hu(s,r,Math.max(6,o.damage*.18),a,!1);else if(s.state!=="falling"&&!s.dead){s.state="falling",s.stateTime=0,s.quietTime=0;for(let c of s.parts)c.body.type=It.DYNAMIC,c.body.mass=c.mass,c.body.updateMassProperties(),c.body.wakeUp();Kt.broadphase.dirty=!0}if(r.body.type===It.DYNAMIC){let c=e.type==="melee"?5+o.damage*.25:1.8+o.damage*.12;r.body.applyImpulse(new _(t.x*c,t.y*c,t.z*c),new _)}o.lethal&&(s.dead=!0,s.active=!0,s.state="dead"),e.pellets||vc(e,"impact"),Be(`${s.id} \xB7 ${e.name.toUpperCase()} \u2212${o.damage} \u041E\u0417 \xB7 ${o.health} \u041E\u0417`,1.05);return}if(i.kind==="prop"&&i.body?.type===It.DYNAMIC){let s=e.type==="melee"?7:e.type==="shotgun"?3.5:2.4;i.body.applyImpulse(new _(t.x*s,t.y*s,t.z*s),new _),i.body.wakeUp()}}}var oc=new io;function _u(i,t=0,e=0,n=1){Xe.updateMatrixWorld(!0),oc.far=i.range,oc.setFromCamera(new at(t,e),Xe);let s=[...Au,...Mp],r=sp(oc,s)[0];if(!r)return null;let o=r.object.userData.gameMeta||r.object.parent?.userData?.gameMeta;return o?F1(o,oc.ray.direction,i,n):r.object.userData.bulletSurface&&B1(r),r}function O1(i){Do(),_u(i)}function Bu(){let i=No(),t=Tc();if(!(me||Ye||Se||le||bn>0||Cs>0)){if(i.type==="melee"){if(Ts>0)return;Ts=i.swingDuration,xc=!1,Cs=i.cooldown,sn=!1,vc(i,"swing");return}if(!ep(i,t)){Du();return}if(Ac(),Cs=i.cooldown,Xi=i.type==="shotgun"?1.25:i.type==="rifle"?.9:.7,Zn=Math.min(.5,Zn+(i.type==="shotgun"?.22:.1)),$i=Yt.clamp($i+(i.type==="shotgun"?.026:.009),-1.18,1.18),vc(i,"fire"),xr=i.type==="shotgun"?.11:.075,Tn.visible=!0,Tn.userData.light.intensity=i.type==="shotgun"?4.1:2.8,Do(),i.pellets){for(let e=0;e<i.pellets;e++){let n=e*2.399963229728653,s=e===0?0:i.spread*Math.sqrt(e/(i.pellets-1));_u(i,Math.cos(n)*s,Math.sin(n)*s,1)}vr=.34}else _u(i);i.automatic||(sn=!1)}}function z1(i){let t=No();Cs=Math.max(0,Cs-i),Xi=Yt.damp(Xi,0,18,i),sn&&Cs<=0&&bn<=0&&Bu(),bn>0&&(bn=Math.max(0,bn-i),Eo=1-bn/t.reloadDuration,bn===0&&D1()),xr>0&&(xr=Math.max(0,xr-i),xr===0&&(Tn.visible=!1,Tn.userData.light.intensity=0));let e=bn>0?Math.sin(Eo*Math.PI):0;if(vr>0){vr=Math.max(0,vr-i);let n=1-vr/.34;fn&&fn.position.set(Es.x,Es.y,Es.z+Math.sin(n*Math.PI)*.13)}else fn&&fn.position.copy(Es);if(Ts>0){Ts=Math.max(0,Ts-i);let n=1-Ts/t.swingDuration,s=Math.sin(n*Math.PI);pn.position.set(_i.x,_i.y-s*.12,_i.z+s*.08),pn.rotation.set(Mi.x+s*.36,Mi.y-s*.12,Mi.z-s*.92),!xc&&n>=.43&&(xc=!0,O1(t))}else pn.position.set(_i.x,_i.y-Xi*.035-e*.07,_i.z+Xi*.065),pn.rotation.set(Mi.x+Xi*.11-e*.08,Mi.y,Mi.z+e*.07);if(De&&(De.position.set(br.x,br.y-e*.18,br.z+e*.035),De.rotation.x=-e*.24),Ss.left){let n=Ss.left.userData.gripPosition,s=Ss.left.userData.gripRotation;n&&s&&(Ss.left.position.set(n.x,n.y-e*.11,n.z+e*.12),Ss.left.rotation.set(s.x-e*.22,s.y,s.z))}fn&&bn>0&&(fn.position.z=Es.z+e*.08),pn.visible=!me&&!le}var Cr=new Zr;Cr.background=null;var To=new ze(31,1,.1,20);To.position.set(2.35,2.05,3.9);To.lookAt(0,.98,0);var we=new se;Cr.add(we);var Up=new vt({color:5858898,roughness:.88}),up=new vt({color:3423285,roughness:.92}),k1=new vt({color:2435621,roughness:.85}),Ao=new vt({color:3753277,roughness:.76,metalness:.08}),Rc=new vt({color:10718305,roughness:.92}),H1=new vt({color:6713939,roughness:.78}),Uu=new vt({color:2108202,roughness:.56,metalness:.18}),Fp=new vt({color:10193778,roughness:.88}),V1=new vt({color:11895373,roughness:.68,metalness:.12});function Ae(i,t,e,n,s=[0,0,0]){let r=new bt(new Pt(t[0],t[1],t[2]),n);return r.position.set(e[0],e[1],e[2]),r.rotation.set(s[0],s[1],s[2]),i.add(r),r}var Op=new bt(new un(.67,.72,.055,28),new vt({color:2568492,roughness:.96,metalness:.04}));Op.position.y=.015;Cr.add(Op);Ae(we,[.44,.24,.27],[0,.58,0],Ao);Ae(we,[.5,.69,.3],[0,1.02,0],Up);Ae(we,[.37,.56,.2],[0,1,-.22],Ao);Ae(we,[.07,.52,.035],[-.13,1.03,.17],Rc,[0,0,-.1]);Ae(we,[.07,.52,.035],[.13,1.03,.17],Rc,[0,0,.1]);Ae(we,[.46,.07,.32],[0,.69,0],Rc);Ae(we,[.13,.16,.06],[0,.94,.185],V1);Ae(we,[.12,.13,.035],[0,1.05,.19],Rc);Ae(we,[.15,.14,.15],[0,1.45,0],Fp);Ae(we,[.32,.33,.28],[0,1.67,0],Fp);Ae(we,[.38,.2,.35],[0,1.83,-.005],H1);Ae(we,[.4,.045,.38],[0,1.77,.005],Ao);Ae(we,[.22,.105,.08],[0,1.59,.17],Uu);Ae(we,[.075,.105,.085],[-.145,1.59,.16],Uu);Ae(we,[.075,.105,.085],[.145,1.59,.16],Uu);for(let i of[-1,1])Ae(we,[.18,.46,.2],[i*.35,1.05,0],Up,[0,0,i*-.06]),Ae(we,[.15,.37,.17],[i*.39,.67,.025],Ao,[0,0,i*.025]),Ae(we,[.15,.11,.15],[i*.39,.42,.035],fo),Ae(we,[.19,.43,.22],[i*.125,.36,0],up),Ae(we,[.16,.34,.18],[i*.13,.17,.015],up),Ae(we,[.2,.13,.3],[i*.13,.065,.07],k1),Ae(we,[.23,.035,.31],[i*.13,.015,.075],Ao);Cr.add(new Qr(13885391,3883063,1.6));var zp=new no(16769719,2.2);zp.position.set(-2.5,4.5,3.5);Cr.add(zp);var zn=null,Mu=!1,dp=0,du=0,Yi=0,$i=0,Jn=!0,le=null,uc=null,nn={x:0,y:0,pointerId:null},Sn=null,po=0,Zn=0,_c=0,Zi=100,yo=100,xo=100,fu=0,me=!1,Fu=0,wu=!1,kp=null,Se=!1,Sr="bag",bi=Si,Ye=!1,An=[],jn=null,G1=0,Hp=8,Vp=5,vo=30,_r={head:0,neck:0,torso:0,"arm-left":0,"arm-right":0,"leg-left":0,"leg-right":0},Ou=new Set,_o=0,pu=0,zu=0,mu=0,ac=0,fp=60,bu=!1,ke=new Set,Su=new io;Su.far=5;var En=new D,Wi=new D,pp=new D;function Be(i,t=1.45){let e=tt("toast");e&&(e.textContent=i,e.classList.add("visible"),_o=t)}var Mo={head:"injury-head",neck:"injury-neck",torso:"injury-torso","arm-left":"injury-arm-left","arm-right":"injury-arm-right","leg-left":"injury-leg-left","leg-right":"injury-leg-right"};function ku(){tt("health-value").textContent=String(Zi),tt("health-bar").style.width=`${Zi}%`,tt("health-bar").style.background=Zi<35?"#d95c50":Zi<70?"#c3a66d":"#9ab779"}function Gp(){tt("hunger-value").textContent=String(Math.round(yo)),tt("hunger-bar").style.width=`${yo}%`,tt("hunger-bar").style.background=yo<25?"#dc7950":"#c4a66e",tt("thirst-value").textContent=String(Math.round(xo)),tt("thirst-bar").style.width=`${xo}%`,tt("thirst-bar").style.background=xo<25?"#5fa6c5":"#78aeb6"}function wo(i){return{head:"\u0413\u041E\u041B\u041E\u0412\u0410",neck:"\u0428\u0415\u042F",torso:"\u041A\u041E\u0420\u041F\u0423\u0421","arm-left":"\u041B\u0415\u0412\u0410\u042F \u0420\u0423\u041A\u0410","arm-right":"\u041F\u0420\u0410\u0412\u0410\u042F \u0420\u0423\u041A\u0410","leg-left":"\u041B\u0415\u0412\u0410\u042F \u041D\u041E\u0413\u0410","leg-right":"\u041F\u0420\u0410\u0412\u0410\u042F \u041D\u041E\u0413\u0410"}[i]||"\u041A\u041E\u0420\u041F\u0423\u0421"}function Wp(i){let t=_r[i]||0,e=Ou.has(i);tt("injury-status").textContent=e?`\u041A\u0420\u041E\u0412\u041E\u0422\u0415\u0427\u0415\u041D\u0418\u0415 \xB7 ${wo(i)}`:t>0?`\u0422\u0420\u0410\u0412\u041C\u0410 \xB7 ${wo(i)}`:`\u0411\u0415\u0417 \u0422\u0420\u0410\u0412\u041C \xB7 ${wo(i)}`,tt("injury-status").classList.toggle("alert",t>0||e)}function W1(i,t){let e=Mo[i]?i:"torso",n=tt(Mo[e]);_r[e]=Math.min(1,(_r[e]||0)+Math.max(.28,t/24)),n.classList.add("injured"),n.style.opacity=String(.55+_r[e]*.45),_r[e]>=.55&&(Ou.add(e),tt(`bleed-${e}`).classList.add("active")),kp=e;for(let[s,r]of Object.entries(Mo))tt(r).classList.toggle("selected",s===e);Wp(e)}function qp(i){if(!Mo[i])return;kp=i;for(let[n,s]of Object.entries(Mo))tt(s).classList.toggle("selected",n===i);Wp(i);let t=_r[i]||0,e=Ou.has(i)?" \xB7 \u041A\u0420\u041E\u0412\u041E\u0422\u0415\u0427\u0415\u041D\u0418\u0415":t>0?` \xB7 \u0422\u0420\u0410\u0412\u041C\u0410 ${Math.round(t*100)}%`:" \xB7 \u041F\u041E\u0412\u0420\u0415\u0416\u0414\u0415\u041D\u0418\u0419 \u041D\u0415\u0422";Be(`${wo(i)}${e}`,1.2)}function mp(i="\u041A\u0420\u0418\u0422\u0418\u0427\u0415\u0421\u041A\u041E\u0415 \u041F\u041E\u0412\u0420\u0415\u0416\u0414\u0415\u041D\u0418\u0415"){me||(Se&&kn(!1),Ye&&Er(!1),sn=!1,wu=!!le,me=!0,Fu=0,Zi=0,ku(),tt("death-detail").textContent=i,tt("death-overlay").classList.add("visible"),tt("death-overlay").setAttribute("aria-hidden","false"),document.body.classList.add("dead"),ke.clear(),Ls(),Sn=null,_t.velocity.set(0,0,0),Rr(0),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock())}function Xp(i,t="torso"){if(!Jn||me)return;let e=Math.max(1,Math.round(i)),n=t==="neck"&&e>=14;if(!(_c>0&&!n)){if(_c=.72,Zi=Math.max(0,Zi-e),Zn=Math.min(1.4,Zn+.85),ku(),W1(t,e),document.body.classList.add("damage-flash"),setTimeout(()=>document.body.classList.remove("damage-flash"),170),t==="neck"&&e>=14){mp("\u0428\u0415\u0419\u041D\u0410\u042F \u0422\u0420\u0410\u0412\u041C\u0410 \xB7 \u041A\u0420\u0418\u0422\u0418\u0427\u0415\u0421\u041A\u0410\u042F \u041A\u0420\u041E\u0412\u041E\u041F\u041E\u0422\u0415\u0420\u042F");return}if(Zi===0){mp(`\u0421\u041C\u0415\u0420\u0422\u0415\u041B\u042C\u041D\u041E\u0415 \u0420\u0410\u041D\u0415\u041D\u0418\u0415 \xB7 ${wo(t)}`);return}Be(`\u0423\u0414\u0410\u0420 \xB7 \u2212${e}%`,.9)}}function q1(i){!Jn||Se||Ye||me||(yo=Math.max(0,yo-i*.045),xo=Math.max(0,xo-i*.065),fu+=i,fu>=.35&&(fu=0,Gp()))}function Hu(i,t=i.partMap.torso,e=0,n=null,s=!1){if(i.active){if(s&&t?.body){let r=new _(En.x*8.5,Math.max(1,En.y*8.5),En.z*8.5);t.body.applyImpulse(r,new _),Be("\u0418\u041C\u041F\u0423\u041B\u042C\u0421 \u041F\u0415\u0420\u0415\u0414\u0410\u041D",.85)}return}i.active=!0,i.state="falling",i.stateTime=0,i.quietTime=0,i.hitFlash=.24;for(let r of i.parts)r.body.type=It.DYNAMIC,r.body.mass=r.mass,r.body.updateMassProperties(),r.body.wakeUp();if(Kt.broadphase.dirty=!0,t?.body){let r;if(s){r=new _(En.x,Math.max(.08,En.y),En.z),r.normalize();let o=r.scale(13.5);t.body.applyImpulse(o,new _)}else{r=n&&n.lengthSquared()>.08?n.clone():new _(0,0,1);let o=r.length();r.normalize();let a=Math.min(48,Math.max(6,e*t.mass*.78));t.body.applyImpulse(r.scale(a),t.body.position)}}Be(s?`${i.id} \xB7 \u0420\u0410\u0413\u0414\u041E\u041B\u041B \u0410\u041A\u0422\u0418\u0412\u0418\u0420\u041E\u0412\u0410\u041D`:`${i.id} \xB7 \u0423\u0414\u0410\u0420 / \u0420\u0410\u0413\u0414\u041E\u041B\u041B`,1.3)}function Do(){return Xe.getWorldDirection(En),En}function Yp(){Su.setFromCamera(new at(0,0),Xe);let i=Su.intersectObjects(Au,!0);for(let t of i){let e=t.object.userData.gameMeta||t.object.parent?.userData?.gameMeta;if(!(!e||e.isStored||t.distance>(e.range||4.5)))return{meta:e,distance:t.distance,point:t.point}}return null}function Vu(){let i=tt("action-button");if(!i)return;let t=tt("action-label");if(t.textContent="\u0414\u0415\u0419\u0421\u0422\u0412\u0418\u0415",me){uc=null,i.classList.remove("is-holding","has-target");return}if(uc=Yp(),le){i.classList.add("is-holding"),i.classList.remove("has-target");return}i.classList.remove("is-holding"),i.classList.toggle("has-target",!!uc)}function Gu(i){let t=i.body;t.collisionFilterMask=i.originalCollisionFilterMask&~So,i.playerCollisionSuspended=!0,i.playerCollisionReEnableAfter=zu+.35}function $p(i){let t=i.body;!t||t.gameMeta?.isHeld||i.isStored||(le=t,t.gameMeta.isHeld=!0,t.type=It.DYNAMIC,t.mass=t.gameMeta.initialMass,t.gameMeta.playerCollisionSuspended=!1,t.collisionFilterMask=t.gameMeta.originalCollisionFilterMask&~So,t.linearDamping=.82,t.angularDamping=.92,t.updateMassProperties(),t.velocity.set(0,0,0),t.angularVelocity.set(0,0,0),t.force.set(0,0,0),t.wakeUp(),Kt.broadphase.dirty=!0,Rr(1),Be(`${i.name} \xB7 ${i.mass.toFixed(1)} \u041A\u0413`,1.15))}function X1(){if(!le)return;let i=le,t=i.gameMeta;Do(),i.type=It.DYNAMIC,i.mass=t.initialMass,Gu(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.updateMassProperties(),i.gameMeta.isHeld=!1,i.force.set(0,0,0),i.updateAABB();let e=Math.max(.08,(i.aabb.upperBound.y-i.aabb.lowerBound.y)*.5);i.position.y=Math.max(i.position.y,e+.025);let s=9.6*Math.max(.34,Math.min(1.15,Math.sqrt(2.8/t.initialMass)));i.velocity.set(En.x*s+_t.velocity.x,En.y*s+1.05+_t.velocity.y,En.z*s+_t.velocity.z),i.angularVelocity.set((Math.random()-.5)*3.4,(Math.random()-.5)*3.4,(Math.random()-.5)*3.4),i.wakeUp(),Kt.broadphase.dirty=!0,le=null,Rr(0),Be(`\u0411\u0420\u041E\u0421\u041E\u041A \xB7 ${t.name}`,.95)}function Y1(){if(!le)return;let i=le,t=i.gameMeta;i.type=It.DYNAMIC,i.mass=t.initialMass,Gu(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.gameMeta.isHeld=!1,i.updateMassProperties(),i.updateAABB();let e=Math.max(.08,(i.aabb.upperBound.y-i.aabb.lowerBound.y)*.5);i.position.y=Math.max(i.position.y,e+.025),i.velocity.set(_t.velocity.x*.45,-.18,_t.velocity.z*.45),i.angularVelocity.set(0,0,0),i.wakeUp(),Kt.broadphase.dirty=!0,le=null,Rr(0),Be(`\u041F\u041E\u041B\u041E\u0416\u0415\u041D\u041E \xB7 ${t.name}`,.95)}function $1(){if(!le)return;let i=le,t=i.gameMeta;t.isHeld=!1,Gu(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.velocity.set(0,0,0),i.angularVelocity.set(0,0,0),i.wakeUp(),le=null,Kt.broadphase.dirty=!0,Rr(0)}function Zp(){return An.reduce((i,t)=>i+t.meta.mass,0)}function Z1(i,t){for(let e=0;e<=Vp-t;e++)for(let n=0;n<=Hp-i;n++)if(!An.some(r=>n<r.x+r.width&&n+i>r.x&&e<r.y+r.height&&e+t>r.y))return{x:n,y:e};return null}function j1(i){let t=An.find(n=>n.id===i);if(!t)return;Cc("bag"),jn=i,tt("inventory-selected-name").textContent=t.meta.name,tt("inventory-selected-weight").textContent=`${t.meta.mass.toFixed(1)} \u043A\u0433`,tt("inventory-selected-description").textContent=t.meta.description||t.meta.detail||"\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439.";let e=tt("inventory-take");e.disabled=!!le,e.textContent=le?"\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422":"\u0414\u041E\u0421\u0422\u0410\u0422\u042C \u041F\u0420\u0415\u0414\u041C\u0415\u0422",tt("inventory-message").textContent=`${t.meta.type} \xB7 ${t.width} \xD7 ${t.height} \u042F\u0427\u0415\u0419\u041A\u0418`;for(let n of tt("inventory-grid").querySelectorAll(".inventory-item"))n.classList.toggle("selected",n.dataset.itemId===i),n.setAttribute("aria-pressed",String(n.dataset.itemId===i))}function J1(i){let t=ws.get(i);if(!t)return;Sr="all",bi=i,tt("inventory-tab-bag").classList.remove("active"),tt("inventory-tab-bag").setAttribute("aria-selected","false"),tt("inventory-tab-all").classList.add("active"),tt("inventory-tab-all").setAttribute("aria-selected","true"),tt("inventory-bag-view").hidden=!0,tt("inventory-all-view").hidden=!1,tt("inventory-selected-name").textContent=t.name,tt("inventory-selected-weight").textContent=`${t.weight.toFixed(1)} \u043A\u0433`;let e=t.magazineSize===null?"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0431\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439":`\u041C\u0430\u0433\u0430\u0437\u0438\u043D ${t.magazineSize} \xB7 \u0437\u0430\u043F\u0430\u0441 ${t.reserve} \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432`,n=t.pellets?`${t.pellets} \u0434\u0440\u043E\u0431\u0438\u043D \xD7 ${t.damage} \u0443\u0440\u043E\u043D\u0430`:`${t.damage} \u0443\u0440\u043E\u043D\u0430 \u0437\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435`;tt("inventory-selected-description").textContent=`${t.description} ${n}. ${e}.`;let s=Si===i;tt("inventory-take").disabled=s,tt("inventory-take").textContent=s?"\u0423\u0416\u0415 \u0412 \u0420\u0423\u041A\u0410\u0425":"\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C";let r=Pu.get(i);tt("inventory-message").textContent=`${t.category.toUpperCase()} \xB7 ${t.magazineSize===null?"\u0411\u041B\u0418\u0416\u041D\u0418\u0419 \u0411\u041E\u0419":`${r.magazine} / ${r.reserve} \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412`}`;for(let o of tt("inventory-all-grid").querySelectorAll(".armory-item"))o.classList.toggle("selected",o.dataset.weaponId===i),o.setAttribute("aria-pressed",String(o.dataset.weaponId===i))}function Cc(i){Sr=i==="all"?"all":"bag";let t=Sr==="all";tt("inventory-tab-bag").classList.toggle("active",!t),tt("inventory-tab-bag").setAttribute("aria-selected",String(!t)),tt("inventory-tab-all").classList.toggle("active",t),tt("inventory-tab-all").setAttribute("aria-selected",String(t)),tt("inventory-bag-view").hidden=t,tt("inventory-all-view").hidden=!t,jp()}function jp(){let i=tt("inventory-take");if(Sr==="all"){ws.has(bi)||(bi=Si);let e=ws.get(bi),n=Pu.get(e.id);tt("inventory-selected-name").textContent=e.name,tt("inventory-selected-weight").textContent=`${e.weight.toFixed(1)} \u043A\u0433`;let s=e.magazineSize===null?"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0431\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439":`\u041C\u0430\u0433\u0430\u0437\u0438\u043D ${e.magazineSize} \xB7 \u0437\u0430\u043F\u0430\u0441 ${e.reserve} \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432`,r=e.pellets?`${e.pellets} \u0434\u0440\u043E\u0431\u0438\u043D \xD7 ${e.damage} \u0443\u0440\u043E\u043D\u0430`:`${e.damage} \u0443\u0440\u043E\u043D\u0430 \u0437\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435`;tt("inventory-selected-description").textContent=`${e.description} ${r}. ${s}.`;let o=Si===e.id;i.disabled=o,i.textContent=o?"\u0423\u0416\u0415 \u0412 \u0420\u0423\u041A\u0410\u0425":"\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C",tt("inventory-message").textContent=`${e.category.toUpperCase()} \xB7 ${e.magazineSize===null?"\u0411\u041B\u0418\u0416\u041D\u0418\u0419 \u0411\u041E\u0419":`${n.magazine} / ${n.reserve} \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412`}`;return}let t=An.find(e=>e.id===jn);if(!t){jn=null,tt("inventory-selected-name").textContent="\u041F\u0420\u0415\u0414\u041C\u0415\u0422 \u041D\u0415 \u0412\u042B\u0411\u0420\u0410\u041D",tt("inventory-selected-weight").textContent="\u2014",tt("inventory-selected-description").textContent="\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0432 \u0441\u0435\u0442\u043A\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0435\u0433\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B.",i.disabled=!0,i.textContent="\u0412\u042B\u0411\u0415\u0420\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422",tt("inventory-message").textContent=An.length?"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0435\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430.":"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0443\u0431\u0440\u0430\u0442\u044C \u0441\u044E\u0434\u0430 \u0438\u0437 \u0440\u0443\u043A.";return}tt("inventory-selected-name").textContent=t.meta.name,tt("inventory-selected-weight").textContent=`${t.meta.mass.toFixed(1)} \u043A\u0433`,tt("inventory-selected-description").textContent=t.meta.description||t.meta.detail||"\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439.",i.disabled=!!le,i.textContent=le?"\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422":"\u0414\u041E\u0421\u0422\u0410\u0422\u042C \u041F\u0420\u0415\u0414\u041C\u0415\u0422"}function K1(){let i=tt("inventory-all-grid");i.replaceChildren();for(let t of sc){let e=document.createElement("button");e.type="button",e.className=`armory-item${t.id===bi?" selected":""}`,e.dataset.weaponId=t.id,e.setAttribute("aria-pressed",String(t.id===bi)),e.title=`${t.name} \xB7 ${t.description}`;let n=document.createElement("span");n.className=`armory-item-icon ${t.type}`,n.textContent=t.type==="melee"?"\u2694":t.type==="pistol"?"\u25A3":t.type==="shotgun"?"\u25C6":"\u2301";let s=document.createElement("b");s.className="armory-item-name",s.textContent=t.name;let r=document.createElement("small");r.className="armory-item-category",r.textContent=t.category.toUpperCase();let o=document.createElement("small");o.className="armory-item-stats",o.textContent=t.magazineSize===null?`${t.damage} \u0423\u0420\u041E\u041D \xB7 ${t.range.toFixed(1)} \u041C`:`${t.magazineSize} \xB7 ${t.damage}${t.pellets?` \xD7 ${t.pellets}`:""}`,e.append(n,s,r,o),e.addEventListener("click",()=>J1(t.id)),i.appendChild(e)}}function Bo(){let i=tt("inventory-grid");An.some(e=>e.id===jn)||(jn=An[0]?.id||null),i.replaceChildren();for(let e=0;e<Hp*Vp;e++){let n=document.createElement("div");n.className="inventory-cell",n.setAttribute("aria-hidden","true"),i.appendChild(n)}for(let e of An){let n=document.createElement("button");n.type="button",n.className=`inventory-item${e.id===jn?" selected":""}`,n.dataset.itemId=e.id,n.setAttribute("aria-pressed",String(e.id===jn)),n.style.gridColumn=`${e.x+1} / span ${e.width}`,n.style.gridRow=`${e.y+1} / span ${e.height}`,n.title=`${e.meta.name} \xB7 ${e.meta.mass.toFixed(1)} \u043A\u0433 \xB7 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F`;let s=document.createElement("span");s.className="inventory-item-top";let r=document.createElement("b");r.className="inventory-item-icon",r.textContent=e.meta.inventoryIcon||"\u25A3";let o=document.createElement("small");o.className="inventory-item-weight",o.textContent=`${e.meta.mass.toFixed(1)} \u043A\u0433`,s.append(r,o);let a=document.createElement("span");a.className="inventory-item-name",a.textContent=e.meta.name,n.append(s,a),n.addEventListener("click",()=>j1(e.id)),i.appendChild(n)}let t=Zp();tt("inventory-weight").textContent=t.toFixed(1),tt("inventory-limit").textContent=vo.toFixed(1),tt("inventory-weight-bar").style.width=`${Math.min(100,t/vo*100)}%`,tt("inventory-weight-bar").style.background=t/vo>.82?"#d08353":"#a4c17e",tt("inventory-empty").style.display=Sr==="bag"&&An.length===0?"flex":"none",tt("inventory-drop").disabled=!le,tt("inventory-stash").disabled=!le,K1(),jp()}function Wu(){if(Mu)return;let t=tt("inventory-preview-frame").getBoundingClientRect();if(!(t.width<8||t.height<8)){if(!zn)try{zn=new $r({canvas:tt("inventory-preview-canvas"),alpha:!0,antialias:!0,powerPreference:"low-power"}),zn.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),zn.outputColorSpace=Fe,zn.toneMapping=Fa,zn.toneMappingExposure=1.05,zn.setClearColor(0,0),tt("inventory-preview-fallback").style.display="none"}catch{Mu=!0,tt("inventory-preview-fallback").classList.add("visible");return}zn.setSize(t.width,t.height,!1),To.aspect=t.width/t.height,To.updateProjectionMatrix()}}function Q1(i){!Se||Mu||(zn||Wu(),zn&&(dp+=i,du+=i,we.rotation.y=Math.sin(dp*.42)*.46,!(du<1/30)&&(du=0,zn.render(Cr,To))))}function kn(i){if(i&&(!Jn||me||Ye))return;Se=i;let t=tt("inventory-overlay");t.classList.toggle("open",i),t.setAttribute("aria-hidden",String(!i)),i?(sn=!1,Ji=null,Ls(),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),Bo(),Wu()):ke.clear()}function Er(i){if(i&&(!Jn||me))return;i&&Se&&kn(!1),Ye=i;let t=tt("menu-overlay");t.classList.toggle("open",i),t.setAttribute("aria-hidden",String(!i)),i?(sn=!1,Ji=null,Ls(),ke.clear(),_o=0,tt("toast").classList.remove("visible"),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock()):ke.clear()}function tb(){if(!le)return;let i=le,t=i.gameMeta,e=t.inventoryWidth||2,n=t.inventoryHeight||2;if(Zp()+t.mass>vo+1e-6){Be(`\u041F\u0420\u0415\u0412\u042B\u0428\u0415\u041D \u041B\u0418\u041C\u0418\u0422 \xB7 ${vo} \u041A\u0413`,1.15),tt("inventory-message").textContent="\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0442\u044F\u0436\u0435\u043B\u043E: \u043E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u0435 \u043C\u0435\u0441\u0442\u043E \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u043B\u0435\u0433\u0447\u0435.";return}let r=Z1(e,n);if(!r){Be("\u041D\u0415\u0422 \u0421\u0412\u041E\u0411\u041E\u0414\u041D\u042B\u0425 \u042F\u0427\u0415\u0415\u041A",1);return}let o=Ps.find(c=>c.body===i);if(!o)return;i.gameMeta.isHeld=!1,i.gameMeta.isStored=!0,i.gameMeta.playerCollisionSuspended=!1,i.collisionFilterMask=t.originalCollisionFilterMask,i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.velocity.set(0,0,0),i.angularVelocity.set(0,0,0),Kt.removeBody(i),be.remove(o.visual),le=null,Rr(0);let a={id:`bag-${++G1}`,meta:t,body:i,visual:o.visual,x:r.x,y:r.y,width:e,height:n};An.push(a),jn=a.id,Bo(),Vu(),Be(`\u0412 \u0420\u042E\u041A\u0417\u0410\u041A\u0415 \xB7 ${t.name}`,1),Cc("bag"),kn(!0)}function eb(i){if(me)return;if(le){Be("\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u0423\u0414\u0415\u0420\u0416\u0418\u0412\u0410\u0415\u041C\u042B\u0419 \u041F\u0420\u0415\u0414\u041C\u0415\u0422",1);return}let t=An.findIndex(o=>o.id===i);if(t<0)return;let[e]=An.splice(t,1),{body:n,visual:s,meta:r}=e;r.isStored=!1,n.type=It.DYNAMIC,n.mass=r.initialMass,n.collisionFilterMask=r.originalCollisionFilterMask,n.linearDamping=r.originalLinearDamping,n.angularDamping=r.originalAngularDamping,n.force.set(0,0,0),n.velocity.set(0,0,0),n.angularVelocity.set(0,0,0),n.updateMassProperties(),be.add(s),Kt.addBody(n),Kt.broadphase.dirty=!0,kn(!1),$p(r),Bo()}function Jp(){if(me||!Jn||Se||Ye)return;if(le){X1();return}let i=uc||Yp();if(!i){Be("\u041D\u0415\u0422 \u0426\u0415\u041B\u0418 \u0412 \u0417\u041E\u041D\u0415 \u0414\u041E\u0421\u042F\u0413\u0410\u0415\u041C\u041E\u0421\u0422\u0418",.9);return}if(i.meta.kind==="prop"){$p(i.meta);return}i.meta.kind==="mannequin"&&(Do(),Hu(i.meta.human,i.meta.human.partMap[i.meta.key]||i.meta.human.partMap.torso,0,null,!0))}function nb(i){if(!le||me)return;Do();let t=Xe.getWorldPosition(Wi);pp.copy(En).multiplyScalar(1.62),Wi.add(pp),Wi.y-=.11;let e=le;e.updateAABB();let n=Math.max(.08,(e.aabb.upperBound.y-e.aabb.lowerBound.y)*.5);Wi.y=Yt.clamp(Wi.y,n+.025,5.4-n);let s=Math.sqrt(2.8/e.gameMeta.initialMass),r=Yt.clamp(7.5*s,3,9),o=Yt.clamp(13*s,5,18);e.velocity.set(Yt.clamp((Wi.x-e.position.x)*o,-r,r),Yt.clamp((Wi.y-e.position.y)*o,-r,r),Yt.clamp((Wi.z-e.position.z)*o,-r,r)),e.angularVelocity.set(0,0,0),e.force.set(0,e.mass*9.82,0),e.wakeUp(),e.aabbNeedsUpdate=!0}function ib(){return!Se&&!Ye&&!me&&(ke.has("KeyW")||ke.has("KeyA")||ke.has("KeyS")||ke.has("KeyD")||Math.abs(nn.x)+Math.abs(nn.y)>.12)}function sb(i){if(me){_t.velocity.x=0,_t.velocity.z=0;return}let t=Se?0:nn.x,e=Se?0:-nn.y;Se||(ke.has("KeyA")&&(t-=1),ke.has("KeyD")&&(t+=1),ke.has("KeyW")&&(e+=1),ke.has("KeyS")&&(e-=1));let n=Math.hypot(t,e);n>1&&(t/=n,e/=n);let r=!Se&&(ke.has("ShiftLeft")||ke.has("ShiftRight")||Math.hypot(nn.x,nn.y)>.84)?5.25:3.8,o=-Math.sin(Yi)*e+Math.cos(Yi)*t,a=-Math.cos(Yi)*e-Math.sin(Yi)*t,c=Math.min(1,i*(n>.02?13:17));_t.velocity.x+=(o*r-_t.velocity.x)*c,_t.velocity.z+=(a*r-_t.velocity.z)*c,n>.02&&(po+=i*(r+1.6))}function rb(i){if(_c=Math.max(0,_c-i),Zn=Math.max(0,Zn-i*2.6),me){let o=Yt.smoothstep(Fu,.05,1.25);Xe.position.set(_t.position.x,_t.position.y+.77-o*.68,_t.position.z),Xe.rotation.set($i+o*.08,Yi,-o*.62,"YXZ"),yr.visible=!1;return}yr.visible=!0;let t=ib(),e=t?Math.sin(po*2)*.026:0,n=t?Math.sin(po)*.012:0,s=Zn>0?(Math.random()-.5)*.045*Zn:0,r=Zn>0?(Math.random()-.5)*.036*Zn:0;Xe.position.set(_t.position.x+n+s,_t.position.y+.77+e+r,_t.position.z),Xe.rotation.set($i,Yi,0,"YXZ"),yr.position.y=t?Math.sin(po*2+.75)*.012:0,yr.position.x=t?Math.sin(po)*.008:0}function Kp(){pc=!1,mc=ji.y,gc=0}function Qp(){if(!pc)return;let i=mc-ji.y,t=gc;if(Kp(),i<2.4||t<5.2)return;let e=Math.min(65,Math.round(10+(i-2.4)*14+(t-5.2)*3));Xp(e,"leg-left")}function ob(){if(me||Ye||Se)return;let i=_t.position.y,t=_t.velocity.y;t<-1.2&&i>ji.y+.4&&(pc=!0,mc=Math.max(mc,i),gc=Math.max(gc,-t)),pc&&hp<-1.2&&t>-.45&&Qp(),hp=t}function ab(){if(me)return;let i=8.45,t=6.45;if(![_t.position.x,_t.position.y,_t.position.z].every(Number.isFinite)||_t.position.y<.48){Qp(),_t.position.copy(ji),_t.previousPosition.copy(ji),_t.interpolatedPosition.copy(ji),_t.velocity.set(0,0,0),_t.force.set(0,0,0),_t.aabbNeedsUpdate=!0,Kt.broadphase.dirty=!0,_t.wakeUp(),Kp(),Be("\u0412\u041E\u0417\u0412\u0420\u0410\u0422 \u0412 \u0421\u0415\u041A\u0422\u041E\u0420 \xB7 \u041F\u0410\u0414\u0415\u041D\u0418\u0415",1.4);return}(_t.position.x<-i||_t.position.x>i)&&(_t.position.x=Yt.clamp(_t.position.x,-i,i),Math.sign(_t.velocity.x)===Math.sign(_t.position.x)&&(_t.velocity.x=0)),(_t.position.z<-t||_t.position.z>t)&&(_t.position.z=Yt.clamp(_t.position.z,-t,t),Math.sign(_t.velocity.z)===Math.sign(_t.position.z)&&(_t.velocity.z=0)),_t.position.y>5.02&&(_t.position.y=5.02,_t.velocity.y>0&&(_t.velocity.y=0)),_t.aabbNeedsUpdate=!0}function cb(){let i=!1;for(let t of Ps){let e=t.body.gameMeta;if(!e?.playerCollisionSuspended||e.isHeld||e.isStored||zu<(e.playerCollisionReEnableAfter||0))continue;let n=Math.max(.34,t.body.boundingRadius||.5),s=t.body.position.x-_t.position.x,r=t.body.position.z-_t.position.z,o=Math.abs(t.body.position.y-_t.position.y);(Math.hypot(s,r)>n+.36||o>n+.9)&&(t.body.collisionFilterMask=e.originalCollisionFilterMask,e.playerCollisionSuspended=!1,i=!0)}i&&(Kt.broadphase.dirty=!0)}function lb(){for(let i of Ps)i.visual.position.copy(i.body.position),i.visual.quaternion.copy(i.body.quaternion)}function dc(i){requestAnimationFrame(dc);let t=Math.min(.05,Math.max(.001,(i-(dc.lastTime||i))/1e3));if(dc.lastTime=i,zu+=t,me&&(Fu+=t),mu++,ac+=t,ac>=1&&(fp=Math.round(mu/ac),mu=0,ac=0,fp<32&&!bu&&(bu=!0,je.setPixelRatio(Math.min(window.devicePixelRatio||1,1)))),_o>0&&(_o-=t,_o<=0&&tt("toast").classList.remove("visible")),Ye){je.render(be,Xe);return}sb(t),rb(t),L1(t),z1(t),U1(t),nb(t);for(let e of Ps){let n=e.body.gameMeta?.lastVelocity;n&&(n.x=e.body.velocity.x,n.y=e.body.velocity.y,n.z=e.body.velocity.z)}v1(t),Kt.step(1/60,t,4),ob(),wu&&($1(),wu=!1),ab(),cb(),q1(t),lb(),pu+=t,pu>.09&&(Vu(),pu=0),je.render(be,Xe),Q1(t)}requestAnimationFrame(dc);function tm(){let i=window.innerWidth,t=window.innerHeight;Xe.aspect=i/t,Xe.updateProjectionMatrix(),je.setSize(i,t,!1),je.setPixelRatio(Math.min(window.devicePixelRatio||1,bu?1:gp?1.35:1.7)),Se&&Wu()}window.addEventListener("resize",tm,{passive:!0});window.addEventListener("orientationchange",()=>setTimeout(tm,120),{passive:!0});var Tr=tt("joystick"),em=tt("joystick-knob");function nm(i,t){let e=Tr.getBoundingClientRect(),n=e.left+e.width/2,s=e.top+e.height/2,r=i-n,o=t-s,a=36,c=Math.hypot(r,o);c>a&&(r=r/c*a,o=o/c*a),nn.x=r/a,nn.y=o/a,em.style.transform=`translate(${r}px, ${o}px)`}function Ls(){nn.x=0,nn.y=0,nn.pointerId=null,em.style.transform="translate(0px, 0px)"}Tr.addEventListener("pointerdown",i=>{!Jn||me||Ye||Se||(i.preventDefault(),nn.pointerId=i.pointerId,Tr.setPointerCapture(i.pointerId),nm(i.clientX,i.clientY))});Tr.addEventListener("pointermove",i=>{i.pointerId===nn.pointerId&&(i.preventDefault(),nm(i.clientX,i.clientY))});Tr.addEventListener("pointerup",i=>{i.pointerId===nn.pointerId&&Ls()});Tr.addEventListener("pointercancel",Ls);function hb(i){if(!(!Jn||me||Se||Ye||i.pointerType==="touch"&&i.clientX<window.innerWidth*.4)&&!i.target.closest("button, #joystick, .vitals-panel")){if(i.pointerType==="mouse"&&document.pointerLockElement!==mo&&mo.requestPointerLock)try{mo.requestPointerLock()}catch{}Sn={pointerId:i.pointerId,x:i.clientX,y:i.clientY,pointerType:i.pointerType}}}window.addEventListener("pointerdown",hb,{passive:!1});window.addEventListener("pointermove",i=>{if(document.pointerLockElement===mo){if(!Jn||me)return;Yi-=(i.movementX||0)*.0027,$i=Yt.clamp($i-(i.movementY||0)*.0027,-1.18,1.18);return}if(!Sn||i.pointerId!==Sn.pointerId)return;let t=i.clientX-Sn.x,e=i.clientY-Sn.y;Sn.x=i.clientX,Sn.y=i.clientY;let n=i.pointerType==="touch"?.0043:.0034;Yi-=t*n,$i=Yt.clamp($i-e*n,-1.18,1.18)},{passive:!0});window.addEventListener("pointerup",i=>{Sn?.pointerId===i.pointerId&&(Sn=null)},{passive:!0});window.addEventListener("pointercancel",()=>{Sn=null},{passive:!0});var Ro=tt("action-button"),Co=null,Is=0,Eu=!1;function ub(){Is&&clearTimeout(Is),Is=0,Co=null}Ro.addEventListener("pointerdown",i=>{if(i.preventDefault(),i.stopPropagation(),!(me||Se||Ye)){Co=i.pointerId,Eu=!1;try{Ro.setPointerCapture(i.pointerId)}catch{}Is=setTimeout(()=>{Co!==i.pointerId||me||(Eu=!0,kn(!0))},560)}});Ro.addEventListener("pointerup",i=>{if(i.preventDefault(),i.stopPropagation(),i.pointerId!==Co)return;Is&&clearTimeout(Is),Is=0;let t=Eu;Co=null,t||Jp()});Ro.addEventListener("pointercancel",ub);Ro.addEventListener("contextmenu",i=>i.preventDefault());var Ar=tt("fire-button"),Ji=null;function qu(i){Ji!==null&&i.pointerId!==void 0&&i.pointerId!==Ji||(Ji=null,sn=!1)}Ar.addEventListener("pointerdown",i=>{if(i.preventDefault(),i.stopPropagation(),!(me||Ye||Se)){Ji=i.pointerId,sn=!0;try{Ar.setPointerCapture(i.pointerId)}catch{}Bu()}});Ar.addEventListener("pointerup",qu);Ar.addEventListener("pointercancel",qu);Ar.addEventListener("lostpointercapture",qu);Ar.addEventListener("contextmenu",i=>i.preventDefault());tt("reload-button").addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),Du()});tt("menu-button").addEventListener("click",()=>Er(!Ye));tt("inventory-button").addEventListener("click",()=>kn(!Se));tt("menu-resume").addEventListener("click",()=>Er(!1));tt("menu-restart").addEventListener("click",()=>window.location.reload());tt("menu-overlay").addEventListener("click",i=>{i.target===tt("menu-overlay")&&Er(!1)});tt("inventory-close").addEventListener("click",()=>kn(!1));tt("inventory-take").addEventListener("click",()=>{if(Sr==="all"){bi&&bi!==Si&&(Np(bi),kn(!1));return}jn&&eb(jn)});tt("inventory-tab-bag").addEventListener("click",()=>Cc("bag"));tt("inventory-tab-all").addEventListener("click",()=>Cc("all"));tt("inventory-drop").addEventListener("click",()=>{le&&(Y1(),Bo())});tt("inventory-stash").addEventListener("click",()=>tb());tt("inventory-overlay").addEventListener("click",i=>{i.target===tt("inventory-overlay")&&kn(!1)});tt("death-restart").addEventListener("click",()=>window.location.reload());tt("injury-doll").addEventListener("pointerdown",i=>{let t=i.target.closest?.(".doll-part");t&&(i.preventDefault(),i.stopPropagation(),qp(t.id.replace("injury-","")))});tt("injury-doll").addEventListener("keydown",i=>{if(!["Enter"," "].includes(i.key))return;let t=i.target.closest?.(".doll-part");t&&(i.preventDefault(),qp(t.id.replace("injury-","")))});document.addEventListener("keydown",i=>{if(Ye){(i.code==="Escape"||i.code==="Enter")&&(i.preventDefault(),Er(!1));return}if(me){if(i.code==="KeyR"){i.preventDefault(),window.location.reload();return}i.target.closest?.("button")||i.preventDefault();return}if(i.code==="Tab"){i.preventDefault(),Jn&&kn(!Se);return}if(i.code==="Escape"){i.preventDefault(),Se?kn(!1):Jn&&Er(!0);return}["KeyW","KeyA","KeyS","KeyD","ShiftLeft","ShiftRight","KeyE","KeyR","Space"].includes(i.code)&&i.preventDefault(),ke.add(i.code),i.code==="KeyE"&&!i.repeat&&!Se&&Jp(),i.code==="KeyR"&&!i.repeat&&Du(),i.code==="Space"&&!Se&&(sn=!0,i.repeat||Bu())});document.addEventListener("keyup",i=>{ke.delete(i.code),i.code==="Space"&&(sn=!1)});document.addEventListener("visibilitychange",()=>{document.hidden&&(ke.clear(),Ls(),Sn=null,sn=!1,Ji=null)});window.addEventListener("blur",()=>{ke.clear(),sn=!1,Ji=null,Ls()},{passive:!0});Ac();ku();Gp();Bo();Vu();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
