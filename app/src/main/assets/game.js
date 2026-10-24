(()=>{var Vu="170";var z0=0,pf=1,O0=2;var Ep=1,Gu=2,wi=3,es=0,pn=1,Fe=2,Qi=0,vr=1,oc=2,mf=3,gf=4,H0=5,Is=100,k0=101,V0=102,G0=103,W0=104,q0=200,X0=201,Y0=202,$0=203,yh=204,vh=205,Z0=206,j0=207,J0=208,K0=209,Q0=210,tg=211,eg=212,ng=213,ig=214,_h=0,Mh=1,wh=2,br=3,bh=4,Eh=5,Sh=6,Th=7,Sp=0,sg=1,rg=2,ts=0,og=1,ag=2,cg=3,Bc=4,lg=5,hg=6,ug=7;var Tp=300,Er=301,Sr=302,Ah=303,Rh=304,Fc=306,ns=1e3,Ls=1001,Ch=1002,En=1003,dg=1004;var Ca=1005;var ni=1006,Ol=1007;var Ds=1008;var Ti=1009,Ap=1010,Rp=1011,Co=1012,Wu=1013,Bs=1014,ii=1015,Vo=1016,qu=1017,Xu=1018,Tr=1020,Cp=35902,Ip=1021,Pp=1022,$n=1023,Np=1024,Lp=1025,_r=1026,Ar=1027,Yu=1028,$u=1029,Dp=1030,Zu=1031;var ju=1033,ec=33776,nc=33777,ic=33778,sc=33779,Ih=35840,Ph=35841,Nh=35842,Lh=35843,Dh=36196,Bh=37492,Fh=37496,Uh=37808,zh=37809,Oh=37810,Hh=37811,kh=37812,Vh=37813,Gh=37814,Wh=37815,qh=37816,Xh=37817,Yh=37818,$h=37819,Zh=37820,jh=37821,rc=36492,Jh=36494,Kh=36495,Bp=36283,Qh=36284,tu=36285,eu=36286;var ac=2300,nu=2301,Hl=2302,xf=2400,yf=2401,vf=2402;var fg=3200,pg=3201;var Fp=0,mg=1,cn="",Pe="srgb",Ur="srgb-linear",Uc="linear",me="srgb";var nr=7680;var _f=519,gg=512,xg=513,yg=514,Up=515,vg=516,_g=517,Mg=518,wg=519,Rr=35044;var Mf="300 es",Ei=2e3,cc=2001,is=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wf=1234567,Eo=Math.PI/180,Cr=180/Math.PI;function zr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function Ju(i,t){return(i%t+t)%t}function bg(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Eg(i,t,e){return i!==t?(e-i)/(t-i):0}function So(i,t,e){return(1-e)*i+e*t}function Sg(i,t,e,n){return So(i,t,1-Math.exp(-e*n))}function Tg(i,t=1){return t-Math.abs(Ju(i,t*2)-t)}function Ag(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ig(i,t){return i+Math.random()*(t-i)}function Pg(i){return i*(.5-Math.random())}function Ng(i){i!==void 0&&(wf=i);let t=wf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lg(i){return i*Eo}function Dg(i){return i*Cr}function Bg(i){return(i&i-1)===0&&i!==0}function Fg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ug(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zg(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Jt={DEG2RAD:Eo,RAD2DEG:Cr,generateUUID:zr,clamp:We,euclideanModulo:Ju,mapLinear:bg,inverseLerp:Eg,lerp:So,damp:Sg,pingpong:Tg,smoothstep:Ag,smootherstep:Rg,randInt:Cg,randFloat:Ig,randFloatSpread:Pg,seededRandom:Ng,degToRad:Lg,radToDeg:Dg,isPowerOfTwo:Bg,ceilPowerOfTwo:Fg,floorPowerOfTwo:Ug,setQuaternionFromProperEuler:zg,normalize:on,denormalize:xr},lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],_=s[4],v=s[7],R=s[2],S=s[5],A=s[8];return r[0]=o*x+a*y+c*R,r[3]=o*g+a*_+c*S,r[6]=o*p+a*v+c*A,r[1]=l*x+h*y+d*R,r[4]=l*g+h*_+d*S,r[7]=l*p+h*v+d*A,r[2]=u*x+f*y+m*R,r[5]=u*g+f*_+m*S,r[8]=u*p+f*v+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kl.makeScale(t,e)),this}rotate(t){return this.premultiply(kl.makeRotation(-t)),this}translate(t,e){return this.premultiply(kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kl=new qt;function zp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Og(){let i=lc("canvas");return i.style.display="block",i}var bf={};function wo(i){i in bf||(bf[i]=!0,console.warn(i))}function Hg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function kg(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vg(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var oe={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=Mr(i.r),i.g=Mr(i.g),i.b=Mr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===cn?Uc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ef=[.64,.33,.3,.6,.15,.06],Sf=[.2126,.7152,.0722],Tf=[.3127,.329],Af=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rf=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[Ur]:{primaries:Ef,whitePoint:Tf,transfer:Uc,toXYZ:Af,fromXYZ:Rf,luminanceCoefficients:Sf,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:Ef,whitePoint:Tf,transfer:me,toXYZ:Af,fromXYZ:Rf,luminanceCoefficients:Sf,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});var ir,iu=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ir===void 0&&(ir=lc("canvas")),ir.width=t.width,ir.height=t.height;let n=ir.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ir}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lc("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gg=0,hc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=zr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vl(s[o].image)):r.push(Vl(s[o]))}else r=Vl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?iu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wg=0,mn=class i extends is{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ls,s=Ls,r=ni,o=Ds,a=$n,c=Ti,l=i.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=zr(),this.name="",this.source=new hc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case Ls:t.x=t.x<0?0:1;break;case Ch:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case Ls:t.y=t.y<0?0:1;break;case Ch:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Tp;mn.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,v=(f+1)/2,R=(p+1)/2,S=(h+u)/4,A=(d+x)/4,C=(m+g)/4;return _>v&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=S/n,r=A/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},su=class extends is{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new hc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ai=class extends su{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},uc=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ru=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ze=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(d!==x||c!==u||l!==f||h!==m){let g=1-a,p=c*u+l*f+h*m+d*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),S=Math.atan2(R,p*y);g=Math.sin(g*S)/R,a=Math.sin(a*S)/R}let v=a*y;if(c=c*g+u*v,l=l*g+f*v,h=h*g+m*v,d=d*g+x*v,g===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+c*f-l*u,t[e+1]=c*m+h*u+l*d-a*f,t[e+2]=l*m+h*f+a*u-c*d,t[e+3]=h*m-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gl=new L,Cf=new Ze,Ri=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(t.matrixWorld),this.union(Ia)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mo),Pa.subVectors(this.max,mo),sr.subVectors(t.a,mo),rr.subVectors(t.b,mo),or.subVectors(t.c,mo),Yi.subVectors(rr,sr),$i.subVectors(or,rr),bs.subVectors(sr,or);let e=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-bs.z,bs.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,bs.z,0,-bs.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-bs.y,bs.x,0];return!Wl(e,sr,rr,or,Pa)||(e=[1,0,0,0,1,0,0,0,1],!Wl(e,sr,rr,or,Pa))?!1:(Na.crossVectors(Yi,$i),e=[Na.x,Na.y,Na.z],Wl(e,sr,rr,or,Pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},xi=[new L,new L,new L,new L,new L,new L,new L,new L],qn=new L,Ia=new Ri,sr=new L,rr=new L,or=new L,Yi=new L,$i=new L,bs=new L,mo=new L,Pa=new L,Na=new L,Es=new L;function Wl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Es.fromArray(i,r);let a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),c=t.dot(Es),l=e.dot(Es),h=n.dot(Es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var qg=new Ri,go=new L,ql=new L,ss=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):qg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;go.subVectors(t,this.center);let e=go.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(go,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ql.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(go.copy(t.center).add(ql)),this.expandByPoint(go.copy(t.center).sub(ql))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new L,Xl=new L,La=new L,Zi=new L,Yl=new L,Da=new L,$l=new L,Io=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xl.copy(t).add(e).multiplyScalar(.5),La.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(Xl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(La),a=Zi.dot(this.direction),c=-Zi.dot(La),l=Zi.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*c-a,u=o*a-c,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xl).addScaledVector(La,u),f}intersectSphere(t,e){yi.subVectors(t.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,s,r){Yl.subVectors(e,t),Da.subVectors(n,t),$l.crossVectors(Yl,Da);let o=this.direction.dot($l),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,t);let c=a*this.direction.dot(Da.crossVectors(Zi,Da));if(c<0)return null;let l=a*this.direction.dot(Yl.cross(Zi));if(l<0||c+l>o)return null;let h=-a*Zi.dot($l);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class i{constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,m,x,g)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ar.setFromMatrixColumn(t,0).length(),r=1/ar.setFromMatrixColumn(t,1).length(),o=1/ar.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+m*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,m=l*h,x=l*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,m=l*h,x=l*d;e[0]=u-x*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=c*h,e[4]=m*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xg,t,Yg)}lookAt(t,e,n){let s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),ji.crossVectors(n,wn),ji.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),ji.crossVectors(n,wn)),ji.normalize(),Ba.crossVectors(wn,ji),s[0]=ji.x,s[4]=Ba.x,s[8]=wn.x,s[1]=ji.y,s[5]=Ba.y,s[9]=wn.y,s[2]=ji.z,s[6]=Ba.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],_=n[7],v=n[11],R=n[15],S=s[0],A=s[4],C=s[8],b=s[12],w=s[1],P=s[5],H=s[9],N=s[13],B=s[2],z=s[6],D=s[10],J=s[14],V=s[3],j=s[7],ht=s[11],pt=s[15];return r[0]=o*S+a*w+c*B+l*V,r[4]=o*A+a*P+c*z+l*j,r[8]=o*C+a*H+c*D+l*ht,r[12]=o*b+a*N+c*J+l*pt,r[1]=h*S+d*w+u*B+f*V,r[5]=h*A+d*P+u*z+f*j,r[9]=h*C+d*H+u*D+f*ht,r[13]=h*b+d*N+u*J+f*pt,r[2]=m*S+x*w+g*B+p*V,r[6]=m*A+x*P+g*z+p*j,r[10]=m*C+x*H+g*D+p*ht,r[14]=m*b+x*N+g*J+p*pt,r[3]=y*S+_*w+v*B+R*V,r[7]=y*A+_*P+v*z+R*j,r[11]=y*C+_*H+v*D+R*ht,r[15]=y*b+_*N+v*J+R*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*f-n*c*f)+x*(+e*c*f-e*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+g*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*d+e*a*u+s*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=d*g*l-x*u*l+x*c*f-a*g*f-d*c*p+a*u*p,_=m*u*l-h*g*l-m*c*f+o*g*f+h*c*p-o*u*p,v=h*x*l-m*d*l+m*a*f-o*x*f-h*a*p+o*d*p,R=m*d*c-h*x*c-m*a*u+o*x*u+h*a*g-o*d*g,S=e*y+n*_+s*v+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/S;return t[0]=y*A,t[1]=(x*u*r-d*g*r-x*s*f+n*g*f+d*s*p-n*u*p)*A,t[2]=(a*g*r-x*c*r+x*s*l-n*g*l-a*s*p+n*c*p)*A,t[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*f-n*c*f)*A,t[4]=_*A,t[5]=(h*g*r-m*u*r+m*s*f-e*g*f-h*s*p+e*u*p)*A,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*A,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*f+e*c*f)*A,t[8]=v*A,t[9]=(m*d*r-h*x*r-m*n*f+e*x*f+h*n*p-e*d*p)*A,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*A,t[12]=R*A,t[13]=(h*x*s-m*d*s+m*n*u-e*x*u-h*n*g+e*d*g)*A,t[14]=(m*a*s-o*x*s-m*n*c+e*x*c+o*n*g-e*a*g)*A,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*u+e*a*u)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,m=r*d,x=o*h,g=o*d,p=a*d,y=c*l,_=c*h,v=c*d,R=n.x,S=n.y,A=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+v)*R,s[2]=(m-_)*R,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(u+p))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(m+_)*A,s[9]=(g-y)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ar.set(s[0],s[1],s[2]).length(),o=ar.set(s[4],s[5],s[6]).length(),a=ar.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Xn.copy(this);let l=1/r,h=1/o,d=1/a;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,e.setFromRotationMatrix(Xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ei){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,m;if(a===Ei)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===cc)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ei){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*l,f=(n+s)*h,m,x;if(a===Ei)m=(o+r)*d,x=-2*d;else if(a===cc)m=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ar=new L,Xn=new ce,Xg=new L(0,0,0),Yg=new L(1,1,1),ji=new L,Ba=new L,wn=new L,If=new ce,Pf=new Ze,hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return If.makeRotationFromQuaternion(t),this.setFromRotationMatrix(If,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pf.setFromEuler(this),this.setFromQuaternion(Pf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var Po=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$g=0,Nf=new L,cr=new Ze,vi=new ce,Fa=new L,xo=new L,Zg=new L,jg=new Ze,Lf=new L(1,0,0),Df=new L(0,1,0),Bf=new L(0,0,1),Ff={type:"added"},Jg={type:"removed"},lr={type:"childadded",child:null},Zl={type:"childremoved",child:null},Xe=class i extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new hn,n=new Ze,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new qt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(Lf,t)}rotateY(t){return this.rotateOnAxis(Df,t)}rotateZ(t){return this.rotateOnAxis(Bf,t)}translateOnAxis(t,e){return Nf.copy(t).applyQuaternion(this.quaternion),this.position.add(Nf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lf,t)}translateY(t){return this.translateOnAxis(Df,t)}translateZ(t){return this.translateOnAxis(Bf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fa.copy(t):Fa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(xo,Fa,this.up):vi.lookAt(Fa,xo,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(vi),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ff),lr.child=t,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jg),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ff),lr.child=t,this.dispatchEvent(lr),lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,t,Zg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,jg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Xe.DEFAULT_UP=new L(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new L,_i=new L,jl=new L,Mi=new L,hr=new L,ur=new L,Uf=new L,Jl=new L,Kl=new L,Ql=new L,th=new ge,eh=new ge,nh=new ge,Ps=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Yn.subVectors(t,e),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Yn.subVectors(s,e),_i.subVectors(n,e),jl.subVectors(t,e);let o=Yn.dot(Yn),a=Yn.dot(_i),c=Yn.dot(jl),l=_i.dot(_i),h=_i.dot(jl),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,m=(o*h-a*c)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return th.setScalar(0),eh.setScalar(0),nh.setScalar(0),th.fromBufferAttribute(t,e),eh.fromBufferAttribute(t,n),nh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(th,r.x),o.addScaledVector(eh,r.y),o.addScaledVector(nh,r.z),o}static isFrontFacing(t,e,n,s){return Yn.subVectors(n,e),_i.subVectors(t,e),Yn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Yn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;hr.subVectors(s,n),ur.subVectors(r,n),Jl.subVectors(t,n);let c=hr.dot(Jl),l=ur.dot(Jl);if(c<=0&&l<=0)return e.copy(n);Kl.subVectors(t,s);let h=hr.dot(Kl),d=ur.dot(Kl);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(hr,o);Ql.subVectors(t,r);let f=hr.dot(Ql),m=ur.dot(Ql);if(m>=0&&f<=m)return e.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ur,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Uf.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Uf,a);let p=1/(g+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(hr,o).addScaledVector(ur,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function ih(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Ju(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ih(o,r,t+1/3),this.g=ih(o,r,t),this.b=ih(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=Op[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return oe.fromWorkingColorSpace(en.copy(this),t),Math.round(We(en.r*255,0,255))*65536+Math.round(We(en.g*255,0,255))*256+Math.round(We(en.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(en.copy(this),e);let n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Pe){oe.fromWorkingColorSpace(en.copy(this),t);let e=en.r,n=en.g,s=en.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(Ua);let n=So(Ji.h,Ua.h,e),s=So(Ji.s,Ua.s,e),r=So(Ji.l,Ua.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Xt;Xt.NAMES=Op;var Kg=0,rs=class extends is{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=zr(),this.name="",this.blending=vr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=vh,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==es&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yh&&(n.blendSrc=this.blendSrc),this.blendDst!==vh&&(n.blendDst=this.blendDst),this.blendEquation!==Is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_f&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},gn=class extends rs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new L,za=new lt,ln=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rr,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)za.fromBufferAttribute(this,e),za.applyMatrix3(t),this.setXY(e,za.x,za.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xr(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xr(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xr(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rr&&(t.usage=this.usage),t}};var dc=class extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fc=class extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qg=0,Ln=new ce,sh=new Xe,dr=new L,bn=new Ri,yo=new Ri,Ge=new L,Re=class i extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zp(t)?fc:dc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return sh.lookAt(t),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(bn.min,yo.min),bn.expandByPoint(Ge),Ge.addVectors(bn.max,yo.max),bn.expandByPoint(Ge)):(bn.expandByPoint(yo.min),bn.expandByPoint(yo.max))}bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ge.fromBufferAttribute(a,l),c&&(dr.fromBufferAttribute(t,l),Ge.add(dr)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new L,c[C]=new L;let l=new L,h=new L,d=new L,u=new lt,f=new lt,m=new lt,x=new L,g=new L;function p(C,b,w){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,w),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,w),h.sub(l),d.sub(l),f.sub(u),m.sub(u);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[C].add(x),a[b].add(x),a[w].add(x),c[C].add(g),c[b].add(g),c[w].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,b=y.length;C<b;++C){let w=y[C],P=w.start,H=w.count;for(let N=P,B=P+H;N<B;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new L,v=new L,R=new L,S=new L;function A(C){R.fromBufferAttribute(s,C),S.copy(R);let b=a[C];_.copy(b),_.sub(R.multiplyScalar(R.dot(b))).normalize(),v.crossVectors(S,b);let P=v.dot(c[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,P)}for(let C=0,b=y.length;C<b;++C){let w=y[C],P=w.start,H=w.count;for(let N=P,B=P+H;N<B;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)u[m++]=l[f++]}return new ln(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zf=new ce,Ss=new Io,Oa=new ss,Of=new L,Ha=new L,ka=new L,Va=new L,rh=new L,Ga=new L,Hf=new L,Wa=new L,it=class extends Xe{constructor(t=new Re,e=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ga.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(rh.fromBufferAttribute(d,t),o?Ga.addScaledVector(rh,h):Ga.addScaledVector(rh.sub(e),h))}e.add(Ga)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),Ss.copy(t.ray).recast(t.near),!(Oa.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Oa,Of)===null||Ss.origin.distanceToSquared(Of)>(t.far-t.near)**2))&&(zf.copy(r).invert(),Ss.copy(t.ray).applyMatrix4(zf),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ss)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,R=_;v<R;v+=3){let S=a.getX(v),A=a.getX(v+1),C=a.getX(v+2);s=qa(this,p,t,n,l,h,d,S,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);s=qa(this,o,t,n,l,h,d,y,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,R=_;v<R;v+=3){let S=v,A=v+1,C=v+2;s=qa(this,p,t,n,l,h,d,S,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=g,_=g+1,v=g+2;s=qa(this,o,t,n,l,h,d,y,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function tx(i,t,e,n,s,r,o,a){let c;if(t.side===pn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===es,a),c===null)return null;Wa.copy(a),Wa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Wa);return l<e.near||l>e.far?null:{distance:l,point:Wa.clone(),object:i}}function qa(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ha),i.getVertexPosition(c,ka),i.getVertexPosition(l,Va);let h=tx(i,t,e,n,Ha,ka,Va,Hf);if(h){let d=new L;Ps.getBarycoord(Hf,Ha,ka,Va,d),s&&(h.uv=Ps.getInterpolatedAttribute(s,a,c,l,d,new lt)),r&&(h.uv1=Ps.getInterpolatedAttribute(r,a,c,l,d,new lt)),o&&(h.normal=Ps.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};Ps.getNormal(Ha,ka,Va,u.normal),h.face=u,h.barycoord=d}return h}var Rt=class i extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function m(x,g,p,y,_,v,R,S,A,C,b){let w=v/A,P=R/C,H=v/2,N=R/2,B=S/2,z=A+1,D=C+1,J=0,V=0,j=new L;for(let ht=0;ht<D;ht++){let pt=ht*P-N;for(let ot=0;ot<z;ot++){let Ft=ot*w-H;j[x]=Ft*y,j[g]=pt*_,j[p]=B,l.push(j.x,j.y,j.z),j[x]=0,j[g]=0,j[p]=S>0?1:-1,h.push(j.x,j.y,j.z),d.push(ot/A),d.push(1-ht/C),J+=1}}for(let ht=0;ht<C;ht++)for(let pt=0;pt<A;pt++){let ot=u+pt+z*ht,Ft=u+pt+z*(ht+1),X=u+(pt+1)+z*(ht+1),rt=u+(pt+1)+z*ht;c.push(ot,Ft,rt),c.push(Ft,X,rt),V+=6}a.addGroup(f,V,b),f+=V,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ir(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=Ir(i[e]);for(let s in n)t[s]=n[s]}return t}function ex(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hp(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var nx={clone:Ir,merge:an},ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,si=class extends rs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ix,this.fragmentShader=sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=ex(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},pc=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ki=new L,kf=new lt,Vf=new lt,qe=class extends pc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,kf,Vf),e.subVectors(Vf,kf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fr=-90,pr=1,ou=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(fr,pr,t,e);s.layers=this.layers,this.add(s);let r=new qe(fr,pr,t,e);r.layers=this.layers,this.add(r);let o=new qe(fr,pr,t,e);o.layers=this.layers,this.add(o);let a=new qe(fr,pr,t,e);a.layers=this.layers,this.add(a);let c=new qe(fr,pr,t,e);c.layers=this.layers,this.add(c);let l=new qe(fr,pr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===cc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},mc=class extends mn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Er,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},au=class extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new mc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ni}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rt(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Qi});r.uniforms.tEquirect.value=e;let o=new it(s,r),a=e.minFilter;return e.minFilter===Ds&&(e.minFilter=ni),new ou(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},oh=new L,rx=new L,ox=new qt,bi=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=oh.subVectors(n,e).cross(rx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(oh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ox.getNormalMatrix(t),s=this.coplanarPoint(oh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ts=new ss,Xa=new L,No=class{constructor(t=new bi,e=new bi,n=new bi,s=new bi,r=new bi,o=new bi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ei){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],y=s[13],_=s[14],v=s[15];if(n[0].setComponents(c-r,u-l,g-f,v-p).normalize(),n[1].setComponents(c+r,u+l,g+f,v+p).normalize(),n[2].setComponents(c+o,u+h,g+m,v+y).normalize(),n[3].setComponents(c-o,u-h,g-m,v-y).normalize(),n[4].setComponents(c-a,u-d,g-x,v-_).normalize(),e===Ei)n[5].setComponents(c+a,u+d,g+x,v+_).normalize();else if(e===cc)n[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Xa.x=s.normal.x>0?t.max.x:t.min.x,Xa.y=s.normal.y>0?t.max.y:t.min.y,Xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ax(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var xn=class i extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let y=p*u-o;for(let _=0;_<l;_++){let v=_*d-r;m.push(v,-y,0),x.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let _=y+l*p,v=y+l*(p+1),R=y+1+l*(p+1),S=y+1+l*p;f.push(_,v,S),f.push(v,R,S)}this.setIndex(f),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lx=`#ifdef USE_ALPHAHASH
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
#endif`,hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
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
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gx=`#ifdef USE_BATCHING
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
#endif`,xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mx=`#ifdef USE_IRIDESCENCE
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
#endif`,wx=`#ifdef USE_BUMPMAP
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
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Px=`#define PI 3.141592653589793
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
} // validated`,Nx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lx=`vec3 transformedNormal = objectNormal;
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
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hx=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zx=`#ifdef USE_GRADIENTMAP
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
}`,jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
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
#endif`,ty=`#ifdef USE_ENVMAP
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
#endif`,ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ry=`PhysicalMaterial material;
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
#endif`,oy=`struct PhysicalMaterial {
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
}`,ay=`
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
#endif`,cy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,my=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xy=`#if defined( USE_POINTS_UV )
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
#endif`,yy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_y=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
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
#endif`,Ey=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iy=`#ifdef USE_NORMALMAP
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
#endif`,Py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,By=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xy=`float getShadowMask() {
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
}`,Yy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,Zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jy=`#ifdef USE_SKINNING
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
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#ifdef USE_TRANSMISSION
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cv=`uniform sampler2D t2D;
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
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`#include <common>
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
}`,pv=`#if DEPTH_PACKING == 3200
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
}`,mv=`#define DISTANCE
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
}`,gv=`#define DISTANCE
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
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
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
}`,_v=`uniform vec3 diffuse;
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
}`,Mv=`#include <common>
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
}`,wv=`uniform vec3 diffuse;
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
}`,bv=`#define LAMBERT
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
}`,Ev=`#define LAMBERT
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
}`,Sv=`#define MATCAP
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
}`,Tv=`#define MATCAP
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
}`,Av=`#define NORMAL
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
}`,Rv=`#define NORMAL
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
}`,Cv=`#define PHONG
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
}`,Iv=`#define PHONG
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
}`,Pv=`#define STANDARD
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
}`,Nv=`#define STANDARD
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
}`,Lv=`#define TOON
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
}`,Dv=`#define TOON
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
}`,Bv=`uniform float size;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Uv=`#include <common>
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
}`,zv=`uniform vec3 color;
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
}`,Ov=`uniform float rotation;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:cx,alphahash_pars_fragment:lx,alphamap_fragment:hx,alphamap_pars_fragment:ux,alphatest_fragment:dx,alphatest_pars_fragment:fx,aomap_fragment:px,aomap_pars_fragment:mx,batching_pars_vertex:gx,batching_vertex:xx,begin_vertex:yx,beginnormal_vertex:vx,bsdfs:_x,iridescence_fragment:Mx,bumpmap_pars_fragment:wx,clipping_planes_fragment:bx,clipping_planes_pars_fragment:Ex,clipping_planes_pars_vertex:Sx,clipping_planes_vertex:Tx,color_fragment:Ax,color_pars_fragment:Rx,color_pars_vertex:Cx,color_vertex:Ix,common:Px,cube_uv_reflection_fragment:Nx,defaultnormal_vertex:Lx,displacementmap_pars_vertex:Dx,displacementmap_vertex:Bx,emissivemap_fragment:Fx,emissivemap_pars_fragment:Ux,colorspace_fragment:zx,colorspace_pars_fragment:Ox,envmap_fragment:Hx,envmap_common_pars_fragment:kx,envmap_pars_fragment:Vx,envmap_pars_vertex:Gx,envmap_physical_pars_fragment:ty,envmap_vertex:Wx,fog_vertex:qx,fog_pars_vertex:Xx,fog_fragment:Yx,fog_pars_fragment:$x,gradientmap_pars_fragment:Zx,lightmap_pars_fragment:jx,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:Kx,lights_pars_begin:Qx,lights_toon_fragment:ey,lights_toon_pars_fragment:ny,lights_phong_fragment:iy,lights_phong_pars_fragment:sy,lights_physical_fragment:ry,lights_physical_pars_fragment:oy,lights_fragment_begin:ay,lights_fragment_maps:cy,lights_fragment_end:ly,logdepthbuf_fragment:hy,logdepthbuf_pars_fragment:uy,logdepthbuf_pars_vertex:dy,logdepthbuf_vertex:fy,map_fragment:py,map_pars_fragment:my,map_particle_fragment:gy,map_particle_pars_fragment:xy,metalnessmap_fragment:yy,metalnessmap_pars_fragment:vy,morphinstance_vertex:_y,morphcolor_vertex:My,morphnormal_vertex:wy,morphtarget_pars_vertex:by,morphtarget_vertex:Ey,normal_fragment_begin:Sy,normal_fragment_maps:Ty,normal_pars_fragment:Ay,normal_pars_vertex:Ry,normal_vertex:Cy,normalmap_pars_fragment:Iy,clearcoat_normal_fragment_begin:Py,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Ly,iridescence_pars_fragment:Dy,opaque_fragment:By,packing:Fy,premultiplied_alpha_fragment:Uy,project_vertex:zy,dithering_fragment:Oy,dithering_pars_fragment:Hy,roughnessmap_fragment:ky,roughnessmap_pars_fragment:Vy,shadowmap_pars_fragment:Gy,shadowmap_pars_vertex:Wy,shadowmap_vertex:qy,shadowmask_pars_fragment:Xy,skinbase_vertex:Yy,skinning_pars_vertex:$y,skinning_vertex:Zy,skinnormal_vertex:jy,specularmap_fragment:Jy,specularmap_pars_fragment:Ky,tonemapping_fragment:Qy,tonemapping_pars_fragment:tv,transmission_fragment:ev,transmission_pars_fragment:nv,uv_pars_fragment:iv,uv_pars_vertex:sv,uv_vertex:rv,worldpos_vertex:ov,background_vert:av,background_frag:cv,backgroundCube_vert:lv,backgroundCube_frag:hv,cube_vert:uv,cube_frag:dv,depth_vert:fv,depth_frag:pv,distanceRGBA_vert:mv,distanceRGBA_frag:gv,equirect_vert:xv,equirect_frag:yv,linedashed_vert:vv,linedashed_frag:_v,meshbasic_vert:Mv,meshbasic_frag:wv,meshlambert_vert:bv,meshlambert_frag:Ev,meshmatcap_vert:Sv,meshmatcap_frag:Tv,meshnormal_vert:Av,meshnormal_frag:Rv,meshphong_vert:Cv,meshphong_frag:Iv,meshphysical_vert:Pv,meshphysical_frag:Nv,meshtoon_vert:Lv,meshtoon_frag:Dv,points_vert:Bv,points_frag:Fv,shadow_vert:Uv,shadow_frag:zv,sprite_vert:Ov,sprite_frag:Hv},dt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},ei={basic:{uniforms:an([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:an([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:an([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:an([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:an([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:an([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:an([dt.points,dt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:an([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:an([dt.common,dt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:an([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:an([dt.sprite,dt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:an([dt.common,dt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:an([dt.lights,dt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};ei.physical={uniforms:an([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Ya={r:0,b:0,g:0},As=new hn,kv=new ce;function Vv(i,t,e,n,s,r,o){let a=new Xt(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function x(y){let _=!1,v=m(y);v===null?p(a,c):v&&v.isColor&&(p(v,1),_=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,_){let v=m(_);v&&(v.isCubeTexture||v.mapping===Fc)?(h===void 0&&(h=new it(new Rt(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Ir(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),As.copy(_.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kv.makeRotationFromEuler(As)),h.material.toneMapped=oe.getTransfer(v.colorSpace)!==me,(d!==v||u!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new it(new xn(2,2),new si({name:"BackgroundMaterial",uniforms:Ir(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(Ya,Hp(i)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:g}}function Gv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(w,P,H,N,B){let z=!1,D=d(N,H,P);r!==D&&(r=D,l(r.object)),z=f(w,N,H,B),z&&m(w,N,H,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(w,P,H,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function d(w,P,H){let N=H.wireframe===!0,B=n[w.id];B===void 0&&(B={},n[w.id]=B);let z=B[P.id];z===void 0&&(z={},B[P.id]=z);let D=z[N];return D===void 0&&(D=u(c()),z[N]=D),D}function u(w){let P=[],H=[],N=[];for(let B=0;B<e;B++)P[B]=0,H[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:N,object:w,attributes:{},index:null}}function f(w,P,H,N){let B=r.attributes,z=P.attributes,D=0,J=H.getAttributes();for(let V in J)if(J[V].location>=0){let ht=B[V],pt=z[V];if(pt===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(pt=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(pt=w.instanceColor)),ht===void 0||ht.attribute!==pt||pt&&ht.data!==pt.data)return!0;D++}return r.attributesNum!==D||r.index!==N}function m(w,P,H,N){let B={},z=P.attributes,D=0,J=H.getAttributes();for(let V in J)if(J[V].location>=0){let ht=z[V];ht===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(ht=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(ht=w.instanceColor));let pt={};pt.attribute=ht,ht&&ht.data&&(pt.data=ht.data),B[V]=pt,D++}r.attributes=B,r.attributesNum=D,r.index=N}function x(){let w=r.newAttributes;for(let P=0,H=w.length;P<H;P++)w[P]=0}function g(w){p(w,0)}function p(w,P){let H=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;H[w]=1,N[w]===0&&(i.enableVertexAttribArray(w),N[w]=1),B[w]!==P&&(i.vertexAttribDivisor(w,P),B[w]=P)}function y(){let w=r.newAttributes,P=r.enabledAttributes;for(let H=0,N=P.length;H<N;H++)P[H]!==w[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function _(w,P,H,N,B,z,D){D===!0?i.vertexAttribIPointer(w,P,H,B,z):i.vertexAttribPointer(w,P,H,N,B,z)}function v(w,P,H,N){x();let B=N.attributes,z=H.getAttributes(),D=P.defaultAttributeValues;for(let J in z){let V=z[J];if(V.location>=0){let j=B[J];if(j===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(j=w.instanceColor)),j!==void 0){let ht=j.normalized,pt=j.itemSize,ot=t.get(j);if(ot===void 0)continue;let Ft=ot.buffer,X=ot.type,rt=ot.bytesPerElement,wt=X===i.INT||X===i.UNSIGNED_INT||j.gpuType===Wu;if(j.isInterleavedBufferAttribute){let ut=j.data,Ut=ut.stride,Vt=j.offset;if(ut.isInstancedInterleavedBuffer){for(let jt=0;jt<V.locationSize;jt++)p(V.location+jt,ut.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let jt=0;jt<V.locationSize;jt++)g(V.location+jt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let jt=0;jt<V.locationSize;jt++)_(V.location+jt,pt/V.locationSize,X,ht,Ut*rt,(Vt+pt/V.locationSize*jt)*rt,wt)}else{if(j.isInstancedBufferAttribute){for(let ut=0;ut<V.locationSize;ut++)p(V.location+ut,j.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ut=0;ut<V.locationSize;ut++)g(V.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let ut=0;ut<V.locationSize;ut++)_(V.location+ut,pt/V.locationSize,X,ht,pt*rt,pt/V.locationSize*ut*rt,wt)}}else if(D!==void 0){let ht=D[J];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(V.location,ht);break;case 3:i.vertexAttrib3fv(V.location,ht);break;case 4:i.vertexAttrib4fv(V.location,ht);break;default:i.vertexAttrib1fv(V.location,ht)}}}}y()}function R(){C();for(let w in n){let P=n[w];for(let H in P){let N=P[H];for(let B in N)h(N[B].object),delete N[B];delete P[H]}delete n[w]}}function S(w){if(n[w.id]===void 0)return;let P=n[w.id];for(let H in P){let N=P[H];for(let B in N)h(N[B].object),delete N[B];delete P[H]}delete n[w.id]}function A(w){for(let P in n){let H=n[P];if(H[w.id]===void 0)continue;let N=H[w.id];for(let B in N)h(N[B].object),delete N[B];delete H[w.id]}}function C(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Wv(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let m=0;for(let x=0;x<d;x++)m+=h[x]*u[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function qv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==$n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===Vo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ti&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ii&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:S}}function Xv(i){let t=this,e=null,n=0,s=!1,r=!1,o=new bi,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let y=r?0:n,_=y*4,v=p.clippingState||null;c.value=v,v=h(m,u,_,f);for(let R=0;R!==_;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=f;_!==x;++_,v+=4)o.copy(d[_]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Yv(i){let t=new WeakMap;function e(o,a){return a===Ah?o.mapping=Er:a===Rh&&(o.mapping=Sr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ah||a===Rh)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new au(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var gc=class extends pc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yr=4,Gf=[.125,.215,.35,.446,.526,.582],Ns=20,ah=new gc,Wf=new Xt,ch=null,lh=0,hh=0,uh=!1,Cs=(1+Math.sqrt(5))/2,mr=1/Cs,qf=[new L(-Cs,mr,0),new L(Cs,mr,0),new L(-mr,0,Cs),new L(mr,0,Cs),new L(0,Cs,-mr),new L(0,Cs,mr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],xc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ch=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ch,lh,hh),this._renderer.xr.enabled=uh,t.scissorTest=!1,$a(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Er||t.mapping===Sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ch=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Vo,format:$n,colorSpace:Ur,depthBuffer:!1},s=Xf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$v(r)),this._blurMaterial=Zv(r,t,e)}return s}_compileMaterial(t){let e=new it(this._lodPlanes[0],t);this._renderer.compile(e,ah)}_sceneToCubeUV(t,e,n,s){let a=new qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Wf),h.toneMapping=ts,h.autoClear=!1;let f=new gn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),m=new it(new Rt,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(Wf),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;$a(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Er||t.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$f()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;$a(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ah)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qf[(s-r-1)%qf.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new it(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ns-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Ns;g>Ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ns}`);let p=[],y=0;for(let A=0;A<Ns;++A){let C=A/x,b=Math.exp(-C*C/2);p.push(b),A===0?y+=b:A<g&&(y+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-n;let v=this._sizeLods[s],R=3*v*(s>_-yr?s-_+yr:0),S=4*(this._cubeSize-v);$a(e,R,S,3*v,2*v),c.setRenderTarget(e),c.render(d,ah)}};function $v(i){let t=[],e=[],n=[],s=i,r=i-yr+1+Gf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-yr?c=Gf[o-i+yr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,x=3,g=2,p=1,y=new Float32Array(x*m*f),_=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let S=0;S<f;S++){let A=S%3*2/3-1,C=S>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(b,x*m*S),_.set(u,g*m*S);let w=[S,S,S,S,S,S];v.set(w,p*m*S)}let R=new Re;R.setAttribute("position",new ln(y,x)),R.setAttribute("uv",new ln(_,g)),R.setAttribute("faceIndex",new ln(v,p)),t.push(R),s>yr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xf(i,t,e){let n=new Ai(i,t,e);return n.texture.mapping=Fc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $a(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zv(i,t,e){let n=new Float32Array(Ns),s=new L(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Yf(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function $f(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Ku(){return`

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
	`}function jv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ah||c===Rh,h=c===Er||c===Sr;if(l||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new xc(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new xc(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Jv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&wo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Kv(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);for(let m in u.morphAttributes){let x=u.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,v=y.length;_<v;_+=3){let R=y[_+0],S=y[_+1],A=y[_+2];u.push(R,S,S,A,A,R)}}else if(m!==void 0){let y=m.array;x=m.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let R=_+0,S=_+1,A=_+2;u.push(R,S,S,A,A,R)}}else return;let g=new(zp(u)?fc:dc)(u,1);g.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Qv(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,u*o,m),e.update(f,n,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function d(u,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,x,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function t_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function e_(i,t,e){let n=new WeakMap,s=new ge;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*R*4*d),A=new uc(S,v,R,d);A.type=ii,A.needsUpdate=!0;let C=_*4;for(let w=0;w<d;w++){let P=g[w],H=p[w],N=y[w],B=v*R*4*w;for(let z=0;z<P.count;z++){let D=z*C;f===!0&&(s.fromBufferAttribute(P,z),S[B+D+0]=s.x,S[B+D+1]=s.y,S[B+D+2]=s.z,S[B+D+3]=0),m===!0&&(s.fromBufferAttribute(H,z),S[B+D+4]=s.x,S[B+D+5]=s.y,S[B+D+6]=s.z,S[B+D+7]=0),x===!0&&(s.fromBufferAttribute(N,z),S[B+D+8]=s.x,S[B+D+9]=s.y,S[B+D+10]=s.z,S[B+D+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new lt(v,R)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function n_(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var yc=class extends mn{constructor(t,e,n,s,r,o,a,c,l,h=_r){if(h!==_r&&h!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_r&&(n=Bs),n===void 0&&h===Ar&&(n=Tr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:En,this.minFilter=c!==void 0?c:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Vp=new mn,Zf=new yc(1,1),Gp=new uc,Wp=new ru,qp=new mc,jf=[],Jf=[],Kf=new Float32Array(16),Qf=new Float32Array(9),tp=new Float32Array(4);function Or(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=jf[s];if(r===void 0&&(r=new Float32Array(s),jf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zc(i,t){let e=Jf[t];e===void 0&&(e=new Int32Array(t),Jf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function i_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function a_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Ue(e,n))return;tp.set(n),i.uniformMatrix2fv(this.addr,!1,tp),ze(e,n)}}function c_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Ue(e,n))return;Qf.set(n),i.uniformMatrix3fv(this.addr,!1,Qf),ze(e,n)}}function l_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Ue(e,n))return;Kf.set(n),i.uniformMatrix4fv(this.addr,!1,Kf),ze(e,n)}}function h_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function p_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function m_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function g_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function x_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function y_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zf.compareFunction=Up,r=Zf):r=Vp,e.setTexture2D(t||r,s)}function v_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wp,s)}function __(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qp,s)}function M_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gp,s)}function w_(i){switch(i){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return o_;case 35674:return a_;case 35675:return c_;case 35676:return l_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return d_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return M_}}function b_(i,t){i.uniform1fv(this.addr,t)}function E_(i,t){let e=Or(t,this.size,2);i.uniform2fv(this.addr,e)}function S_(i,t){let e=Or(t,this.size,3);i.uniform3fv(this.addr,e)}function T_(i,t){let e=Or(t,this.size,4);i.uniform4fv(this.addr,e)}function A_(i,t){let e=Or(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function R_(i,t){let e=Or(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function C_(i,t){let e=Or(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function I_(i,t){i.uniform1iv(this.addr,t)}function P_(i,t){i.uniform2iv(this.addr,t)}function N_(i,t){i.uniform3iv(this.addr,t)}function L_(i,t){i.uniform4iv(this.addr,t)}function D_(i,t){i.uniform1uiv(this.addr,t)}function B_(i,t){i.uniform2uiv(this.addr,t)}function F_(i,t){i.uniform3uiv(this.addr,t)}function U_(i,t){i.uniform4uiv(this.addr,t)}function z_(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Vp,r[o])}function O_(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wp,r[o])}function H_(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qp,r[o])}function k_(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gp,r[o])}function V_(i){switch(i){case 5126:return b_;case 35664:return E_;case 35665:return S_;case 35666:return T_;case 35674:return A_;case 35675:return R_;case 35676:return C_;case 5124:case 35670:return I_;case 35667:case 35671:return P_;case 35668:case 35672:return N_;case 35669:case 35673:return L_;case 5125:return D_;case 36294:return B_;case 36295:return F_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return k_}}var cu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=w_(e.type)}},lu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V_(e.type)}},hu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},dh=/(\w+)(\])?(\[|\.)?/g;function ep(i,t){i.seq.push(t),i.map[t.id]=t}function G_(i,t,e){let n=i.name,s=n.length;for(dh.lastIndex=0;;){let r=dh.exec(n),o=dh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ep(e,l===void 0?new cu(a,i,t):new lu(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new hu(a),ep(e,d)),e=d}}}var wr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);G_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function np(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var W_=37297,q_=0;function X_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ip=new qt;function Y_(i){oe._getMatrix(ip,oe.workingColorSpace,i);let t=`mat3( ${ip.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Uc:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+X_(i.getShaderSource(t),o)}else return s}function $_(i,t){let e=Y_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Z_(i,t){let e;switch(t){case og:e="Linear";break;case ag:e="Reinhard";break;case cg:e="Cineon";break;case Bc:e="ACESFilmic";break;case hg:e="AgX";break;case ug:e="Neutral";break;case lg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Za=new L;function j_(){oe.getLuminanceCoefficients(Za);let i=Za.x.toFixed(4),t=Za.y.toFixed(4),e=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function K_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Q_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function bo(i){return i!==""}function rp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function op(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var tM=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(i){return i.replace(tM,nM)}var eM=new Map;function nM(i,t){let e=$t[t];if(e===void 0){let n=eM.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uu(e)}var iM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ap(i){return i.replace(iM,sM)}function sM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function rM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ep?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wi&&(t="SHADOWMAP_TYPE_VSM"),t}function oM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Er:case Sr:t="ENVMAP_TYPE_CUBE";break;case Fc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function aM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Sr:t="ENVMAP_MODE_REFRACTION";break}return t}function cM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sp:t="ENVMAP_BLENDING_MULTIPLY";break;case sg:t="ENVMAP_BLENDING_MIX";break;case rg:t="ENVMAP_BLENDING_ADD";break}return t}function lM(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function hM(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=rM(e),l=oM(e),h=aM(e),d=cM(e),u=lM(e),f=J_(e),m=K_(r),x=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bo).join(`
`),p.length>0&&(p+=`
`)):(g=[cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),p=[cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ts?"#define TONE_MAPPING":"",e.toneMapping!==ts?$t.tonemapping_pars_fragment:"",e.toneMapping!==ts?Z_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,$_("linearToOutputTexel",e.outputColorSpace),j_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bo).join(`
`)),o=uu(o),o=rp(o,e),o=op(o,e),a=uu(a),a=rp(a,e),a=op(a,e),o=ap(o),a=ap(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+g+o,v=y+p+a,R=np(s,s.VERTEX_SHADER,_),S=np(s,s.FRAGMENT_SHADER,v);s.attachShader(x,R),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(R).trim(),B=s.getShaderInfoLog(S).trim(),z=!0,D=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,S);else{let J=sp(s,R,"vertex"),V=sp(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+J+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||B==="")&&(D=!1);D&&(P.diagnostics={runnable:z,programLog:H,vertexShader:{log:N,prefix:g},fragmentShader:{log:B,prefix:p}})}s.deleteShader(R),s.deleteShader(S),C=new wr(s,x),b=Q_(s,x)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,W_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=S,this}var uM=0,du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new fu(t),e.set(t,n)),n}},fu=class{constructor(t){this.id=uM++,this.code=t,this.usedTimes=0}};function dM(i,t,e,n,s,r,o){let a=new Po,c=new du,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,w,P,H,N){let B=H.fog,z=N.geometry,D=b.isMeshStandardMaterial?H.environment:null,J=(b.isMeshStandardMaterial?e:t).get(b.envMap||D),V=J&&J.mapping===Fc?J.image.height:null,j=m[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let ht=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,pt=ht!==void 0?ht.length:0,ot=0;z.morphAttributes.position!==void 0&&(ot=1),z.morphAttributes.normal!==void 0&&(ot=2),z.morphAttributes.color!==void 0&&(ot=3);let Ft,X,rt,wt;if(j){let fe=ei[j];Ft=fe.vertexShader,X=fe.fragmentShader}else Ft=b.vertexShader,X=b.fragmentShader,c.update(b),rt=c.getVertexShaderID(b),wt=c.getFragmentShaderID(b);let ut=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),Vt=N.isInstancedMesh===!0,jt=N.isBatchedMesh===!0,Ae=!!b.map,se=!!b.matcap,Le=!!J,k=!!b.aoMap,Pn=!!b.lightMap,te=!!b.bumpMap,ee=!!b.normalMap,Lt=!!b.displacementMap,_e=!!b.emissiveMap,Nt=!!b.metalnessMap,I=!!b.roughnessMap,E=b.anisotropy>0,G=b.clearcoat>0,K=b.dispersion>0,nt=b.iridescence>0,Z=b.sheen>0,Ct=b.transmission>0,gt=E&&!!b.anisotropyMap,Mt=G&&!!b.clearcoatMap,re=G&&!!b.clearcoatNormalMap,at=G&&!!b.clearcoatRoughnessMap,bt=nt&&!!b.iridescenceMap,Dt=nt&&!!b.iridescenceThicknessMap,zt=Z&&!!b.sheenColorMap,Et=Z&&!!b.sheenRoughnessMap,ne=!!b.specularMap,Yt=!!b.specularColorMap,ye=!!b.specularIntensityMap,F=Ct&&!!b.transmissionMap,mt=Ct&&!!b.thicknessMap,Y=!!b.gradientMap,Q=!!b.alphaMap,vt=b.alphaTest>0,xt=!!b.alphaHash,Gt=!!b.extensions,Ie=ts;b.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ie=i.toneMapping);let Qe={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:Ft,fragmentShader:X,defines:b.defines,customVertexShaderID:rt,customFragmentShaderID:wt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:jt,batchingColor:jt&&N._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&N.instanceColor!==null,instancingMorph:Vt&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ur,alphaToCoverage:!!b.alphaToCoverage,map:Ae,matcap:se,envMap:Le,envMapMode:Le&&J.mapping,envMapCubeUVHeight:V,aoMap:k,lightMap:Pn,bumpMap:te,normalMap:ee,displacementMap:u&&Lt,emissiveMap:_e,normalMapObjectSpace:ee&&b.normalMapType===mg,normalMapTangentSpace:ee&&b.normalMapType===Fp,metalnessMap:Nt,roughnessMap:I,anisotropy:E,anisotropyMap:gt,clearcoat:G,clearcoatMap:Mt,clearcoatNormalMap:re,clearcoatRoughnessMap:at,dispersion:K,iridescence:nt,iridescenceMap:bt,iridescenceThicknessMap:Dt,sheen:Z,sheenColorMap:zt,sheenRoughnessMap:Et,specularMap:ne,specularColorMap:Yt,specularIntensityMap:ye,transmission:Ct,transmissionMap:F,thicknessMap:mt,gradientMap:Y,opaque:b.transparent===!1&&b.blending===vr&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:vt,alphaHash:xt,combine:b.combine,mapUv:Ae&&x(b.map.channel),aoMapUv:k&&x(b.aoMap.channel),lightMapUv:Pn&&x(b.lightMap.channel),bumpMapUv:te&&x(b.bumpMap.channel),normalMapUv:ee&&x(b.normalMap.channel),displacementMapUv:Lt&&x(b.displacementMap.channel),emissiveMapUv:_e&&x(b.emissiveMap.channel),metalnessMapUv:Nt&&x(b.metalnessMap.channel),roughnessMapUv:I&&x(b.roughnessMap.channel),anisotropyMapUv:gt&&x(b.anisotropyMap.channel),clearcoatMapUv:Mt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(b.sheenRoughnessMap.channel),specularMapUv:ne&&x(b.specularMap.channel),specularColorMapUv:Yt&&x(b.specularColorMap.channel),specularIntensityMapUv:ye&&x(b.specularIntensityMap.channel),transmissionMapUv:F&&x(b.transmissionMap.channel),thicknessMapUv:mt&&x(b.thicknessMap.channel),alphaMapUv:Q&&x(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ee||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Ae||Q),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ut,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:ot,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===me,decodeVideoTextureEmissive:_e&&b.emissiveMap.isVideoTexture===!0&&oe.getTransfer(b.emissiveMap.colorSpace)===me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fe,flipSided:b.side===pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Gt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&b.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function p(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)w.push(P),w.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(w,b),_(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function y(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let w=m[b.type],P;if(w){let H=ei[w];P=nx.clone(H.uniforms)}else P=b.uniforms;return P}function R(b,w){let P;for(let H=0,N=h.length;H<N;H++){let B=h[H];if(B.cacheKey===w){P=B,++P.usedTimes;break}}return P===void 0&&(P=new hM(i,w,b,r),h.push(P)),P}function S(b){if(--b.usedTimes===0){let w=h.indexOf(b);h[w]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:C}}function fM(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function pM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function lp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,m,x,g){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:x,group:g},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=x,p.group=g),t++,p}function a(d,u,f,m,x,g){let p=o(d,u,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,u,f,m,x,g){let p=o(d,u,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||pM),n.length>1&&n.sort(u||lp),s.length>1&&s.sort(u||lp)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function mM(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new hp,i.set(n,[o])):s>=r.length?(o=new hp,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function gM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Xt};break;case"SpotLight":e={position:new L,direction:new L,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function xM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var yM=0;function vM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _M(i){let t=new gM,e=xM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new ce,o=new ce;function a(l){let h=0,d=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,y=0,_=0,v=0,R=0,S=0,A=0;l.sort(vM);for(let b=0,w=l.length;b<w;b++){let P=l[b],H=P.color,N=P.intensity,B=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*N,d+=H.g*N,u+=H.b*N;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],N);A++}else if(P.isDirectionalLight){let D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,V=e.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=D,f++}else if(P.isSpotLight){let D=t.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(H).multiplyScalar(N),D.distance=B,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[x]=D;let J=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,J.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[x]=J.matrix,P.castShadow){let V=e.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=z,v++}x++}else if(P.isRectAreaLight){let D=t.get(P);D.color.copy(H).multiplyScalar(N),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=D,g++}else if(P.isPointLight){let D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){let J=P.shadow,V=e.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=P.shadow.matrix,_++}n.point[m]=D,m++}else if(P.isHemisphereLight){let D=t.get(P);D.skyColor.copy(P.color).multiplyScalar(N),D.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=D,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+R-S,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,C.directionalLength=f,C.pointLength=m,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=A,n.version=yM++)}function c(l,h){let d=0,u=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let _=l[p];if(_.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function up(i){let t=new _M(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function MM(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new up(i),t.set(s,[a])):r>=o.length?(a=new up(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var pu=class extends rs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mu=class extends rs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},wM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bM=`uniform sampler2D shadow_pass;
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
}`;function EM(i,t,e){let n=new No,s=new lt,r=new lt,o=new ge,a=new pu({depthPacking:pg}),c=new mu,l={},h=e.maxTextureSize,d={[es]:pn,[pn]:es,[Fe]:Fe},u=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:wM,fragmentShader:bM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Re;m.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new it(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ep;let p=this.type;this.render=function(S,A,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let b=i.getRenderTarget(),w=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Qi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let N=p!==wi&&this.type===wi,B=p===wi&&this.type!==wi;for(let z=0,D=S.length;z<D;z++){let J=S[z],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let j=V.getFrameExtents();if(s.multiply(j),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,V.mapSize.y=r.y)),V.map===null||N===!0||B===!0){let pt=this.type!==wi?{minFilter:En,magFilter:En}:{};V.map!==null&&V.map.dispose(),V.map=new Ai(s.x,s.y,pt),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ht=V.getViewportCount();for(let pt=0;pt<ht;pt++){let ot=V.getViewport(pt);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),H.viewport(o),V.updateMatrices(J,pt),n=V.getFrustum(),v(A,C,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===wi&&y(V,C),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,w,P)};function y(S,A){let C=t.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ai(s.x,s.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,C,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,C,f,x,null)}function _(S,A,C,b){let w=null,P=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)w=P;else if(w=C.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=w.uuid,N=A.uuid,B=l[H];B===void 0&&(B={},l[H]=B);let z=B[N];z===void 0&&(z=w.clone(),B[N]=z,A.addEventListener("dispose",R)),w=z}if(w.visible=A.visible,w.wireframe=A.wireframe,b===wi?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:d[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let H=i.properties.get(w);H.light=C}return w}function v(S,A,C,b,w){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===wi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let N=t.update(S),B=S.material;if(Array.isArray(B)){let z=N.groups;for(let D=0,J=z.length;D<J;D++){let V=z[D],j=B[V.materialIndex];if(j&&j.visible){let ht=_(S,j,b,w);S.onBeforeShadow(i,S,A,C,N,ht,V),i.renderBufferDirect(C,null,N,ht,S,V),S.onAfterShadow(i,S,A,C,N,ht,V)}}}else if(B.visible){let z=_(S,B,b,w);S.onBeforeShadow(i,S,A,C,N,z,null),i.renderBufferDirect(C,null,N,z,S,null),S.onAfterShadow(i,S,A,C,N,z,null)}}let H=S.children;for(let N=0,B=H.length;N<B;N++)v(H[N],A,C,b,w)}function R(S){S.target.removeEventListener("dispose",R);for(let C in l){let b=l[C],w=S.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}var SM={[_h]:Mh,[wh]:Sh,[bh]:Th,[br]:Eh,[Mh]:_h,[Sh]:wh,[Th]:bh,[Eh]:br};function TM(i,t){function e(){let F=!1,mt=new ge,Y=null,Q=new ge(0,0,0,0);return{setMask:function(vt){Y!==vt&&!F&&(i.colorMask(vt,vt,vt,vt),Y=vt)},setLocked:function(vt){F=vt},setClear:function(vt,xt,Gt,Ie,Qe){Qe===!0&&(vt*=Ie,xt*=Ie,Gt*=Ie),mt.set(vt,xt,Gt,Ie),Q.equals(mt)===!1&&(i.clearColor(vt,xt,Gt,Ie),Q.copy(mt))},reset:function(){F=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let F=!1,mt=!1,Y=null,Q=null,vt=null;return{setReversed:function(xt){if(mt!==xt){let Gt=t.get("EXT_clip_control");mt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let Ie=vt;vt=null,this.setClear(Ie)}mt=xt},getReversed:function(){return mt},setTest:function(xt){xt?ut(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(xt){Y!==xt&&!F&&(i.depthMask(xt),Y=xt)},setFunc:function(xt){if(mt&&(xt=SM[xt]),Q!==xt){switch(xt){case _h:i.depthFunc(i.NEVER);break;case Mh:i.depthFunc(i.ALWAYS);break;case wh:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case bh:i.depthFunc(i.EQUAL);break;case Eh:i.depthFunc(i.GEQUAL);break;case Sh:i.depthFunc(i.GREATER);break;case Th:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=xt}},setLocked:function(xt){F=xt},setClear:function(xt){vt!==xt&&(mt&&(xt=1-xt),i.clearDepth(xt),vt=xt)},reset:function(){F=!1,Y=null,Q=null,vt=null,mt=!1}}}function s(){let F=!1,mt=null,Y=null,Q=null,vt=null,xt=null,Gt=null,Ie=null,Qe=null;return{setTest:function(fe){F||(fe?ut(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(fe){mt!==fe&&!F&&(i.stencilMask(fe),mt=fe)},setFunc:function(fe,Gn,mi){(Y!==fe||Q!==Gn||vt!==mi)&&(i.stencilFunc(fe,Gn,mi),Y=fe,Q=Gn,vt=mi)},setOp:function(fe,Gn,mi){(xt!==fe||Gt!==Gn||Ie!==mi)&&(i.stencilOp(fe,Gn,mi),xt=fe,Gt=Gn,Ie=mi)},setLocked:function(fe){F=fe},setClear:function(fe){Qe!==fe&&(i.clearStencil(fe),Qe=fe)},reset:function(){F=!1,mt=null,Y=null,Q=null,vt=null,xt=null,Gt=null,Ie=null,Qe=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,f=[],m=null,x=!1,g=null,p=null,y=null,_=null,v=null,R=null,S=null,A=new Xt(0,0,0),C=0,b=!1,w=null,P=null,H=null,N=null,B=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,J=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),D=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),D=J>=2);let j=null,ht={},pt=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),Ft=new ge().fromArray(pt),X=new ge().fromArray(ot);function rt(F,mt,Y,Q){let vt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(F,xt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<Y;Gt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(mt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return xt}let wt={};wt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(br),te(!1),ee(pf),ut(i.CULL_FACE),k(Qi);function ut(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Ut(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Vt(F,mt){return d[F]!==mt?(i.bindFramebuffer(F,mt),d[F]=mt,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function jt(F,mt){let Y=f,Q=!1;if(F){Y=u.get(mt),Y===void 0&&(Y=[],u.set(mt,Y));let vt=F.textures;if(Y.length!==vt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Gt=vt.length;xt<Gt;xt++)Y[xt]=i.COLOR_ATTACHMENT0+xt;Y.length=vt.length,Q=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Y)}function Ae(F){return m!==F?(i.useProgram(F),m=F,!0):!1}let se={[Is]:i.FUNC_ADD,[k0]:i.FUNC_SUBTRACT,[V0]:i.FUNC_REVERSE_SUBTRACT};se[G0]=i.MIN,se[W0]=i.MAX;let Le={[q0]:i.ZERO,[X0]:i.ONE,[Y0]:i.SRC_COLOR,[yh]:i.SRC_ALPHA,[Q0]:i.SRC_ALPHA_SATURATE,[J0]:i.DST_COLOR,[Z0]:i.DST_ALPHA,[$0]:i.ONE_MINUS_SRC_COLOR,[vh]:i.ONE_MINUS_SRC_ALPHA,[K0]:i.ONE_MINUS_DST_COLOR,[j0]:i.ONE_MINUS_DST_ALPHA,[tg]:i.CONSTANT_COLOR,[eg]:i.ONE_MINUS_CONSTANT_COLOR,[ng]:i.CONSTANT_ALPHA,[ig]:i.ONE_MINUS_CONSTANT_ALPHA};function k(F,mt,Y,Q,vt,xt,Gt,Ie,Qe,fe){if(F===Qi){x===!0&&(Ut(i.BLEND),x=!1);return}if(x===!1&&(ut(i.BLEND),x=!0),F!==H0){if(F!==g||fe!==b){if((p!==Is||v!==Is)&&(i.blendEquation(i.FUNC_ADD),p=Is,v=Is),fe)switch(F){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.ONE,i.ONE);break;case mf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,_=null,R=null,S=null,A.set(0,0,0),C=0,g=F,b=fe}return}vt=vt||mt,xt=xt||Y,Gt=Gt||Q,(mt!==p||vt!==v)&&(i.blendEquationSeparate(se[mt],se[vt]),p=mt,v=vt),(Y!==y||Q!==_||xt!==R||Gt!==S)&&(i.blendFuncSeparate(Le[Y],Le[Q],Le[xt],Le[Gt]),y=Y,_=Q,R=xt,S=Gt),(Ie.equals(A)===!1||Qe!==C)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Qe),A.copy(Ie),C=Qe),g=F,b=!1}function Pn(F,mt){F.side===Fe?Ut(i.CULL_FACE):ut(i.CULL_FACE);let Y=F.side===pn;mt&&(Y=!Y),te(Y),F.blending===vr&&F.transparent===!1?k(Qi):k(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Q=F.stencilWrite;a.setTest(Q),Q&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),_e(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(F){w!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),w=F)}function ee(F){F!==z0?(ut(i.CULL_FACE),F!==P&&(F===pf?i.cullFace(i.BACK):F===O0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),P=F}function Lt(F){F!==H&&(D&&i.lineWidth(F),H=F)}function _e(F,mt,Y){F?(ut(i.POLYGON_OFFSET_FILL),(N!==mt||B!==Y)&&(i.polygonOffset(mt,Y),N=mt,B=Y)):Ut(i.POLYGON_OFFSET_FILL)}function Nt(F){F?ut(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function I(F){F===void 0&&(F=i.TEXTURE0+z-1),j!==F&&(i.activeTexture(F),j=F)}function E(F,mt,Y){Y===void 0&&(j===null?Y=i.TEXTURE0+z-1:Y=j);let Q=ht[Y];Q===void 0&&(Q={type:void 0,texture:void 0},ht[Y]=Q),(Q.type!==F||Q.texture!==mt)&&(j!==Y&&(i.activeTexture(Y),j=Y),i.bindTexture(F,mt||wt[F]),Q.type=F,Q.texture=mt)}function G(){let F=ht[j];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(F){Ft.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ft.copy(F))}function Et(F){X.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),X.copy(F))}function ne(F,mt){let Y=l.get(mt);Y===void 0&&(Y=new WeakMap,l.set(mt,Y));let Q=Y.get(F);Q===void 0&&(Q=i.getUniformBlockIndex(mt,F.name),Y.set(F,Q))}function Yt(F,mt){let Q=l.get(mt).get(F);c.get(mt)!==Q&&(i.uniformBlockBinding(mt,Q,F.__bindingPointIndex),c.set(mt,Q))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,ht={},d={},u=new WeakMap,f=[],m=null,x=!1,g=null,p=null,y=null,_=null,v=null,R=null,S=null,A=new Xt(0,0,0),C=0,b=!1,w=null,P=null,H=null,N=null,B=null,Ft.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:Ut,bindFramebuffer:Vt,drawBuffers:jt,useProgram:Ae,setBlending:k,setMaterial:Pn,setFlipSided:te,setCullFace:ee,setLineWidth:Lt,setPolygonOffset:_e,setScissorTest:Nt,activeTexture:I,bindTexture:E,unbindTexture:G,compressedTexImage2D:K,compressedTexImage3D:nt,texImage2D:bt,texImage3D:Dt,updateUBOMapping:ne,uniformBlockBinding:Yt,texStorage2D:re,texStorage3D:at,texSubImage2D:Z,texSubImage3D:Ct,compressedTexSubImage2D:gt,compressedTexSubImage3D:Mt,scissor:zt,viewport:Et,reset:ye}}function dp(i,t,e,n){let s=AM(n);switch(e){case Ip:return i*t;case Np:return i*t;case Lp:return i*t*2;case Yu:return i*t/s.components*s.byteLength;case $u:return i*t/s.components*s.byteLength;case Dp:return i*t*2/s.components*s.byteLength;case Zu:return i*t*2/s.components*s.byteLength;case Pp:return i*t*3/s.components*s.byteLength;case $n:return i*t*4/s.components*s.byteLength;case ju:return i*t*4/s.components*s.byteLength;case ec:case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ic:case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ph:case Lh:return Math.max(i,16)*Math.max(t,8)/4;case Ih:case Nh:return Math.max(i,8)*Math.max(t,8)/2;case Dh:case Bh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Oh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $h:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rc:case Jh:case Kh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bp:case Qh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case tu:case eu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function AM(i){switch(i){case Ti:case Ap:return{byteLength:1,components:1};case Co:case Rp:case Vo:return{byteLength:2,components:1};case qu:case Xu:return{byteLength:2,components:4};case Bs:case Wu:case ii:return{byteLength:4,components:1};case Cp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function RM(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,E){return f?new OffscreenCanvas(I,E):lc("canvas")}function x(I,E,G){let K=1,nt=Nt(I);if((nt.width>G||nt.height>G)&&(K=G/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Z=Math.floor(K*nt.width),Ct=Math.floor(K*nt.height);d===void 0&&(d=m(Z,Ct));let gt=E?m(Z,Ct):d;return gt.width=Z,gt.height=Ct,gt.getContext("2d").drawImage(I,0,0,Z,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Z+"x"+Ct+")."),gt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,E,G,K,nt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Z=E;if(E===i.RED&&(G===i.FLOAT&&(Z=i.R32F),G===i.HALF_FLOAT&&(Z=i.R16F),G===i.UNSIGNED_BYTE&&(Z=i.R8)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.R8UI),G===i.UNSIGNED_SHORT&&(Z=i.R16UI),G===i.UNSIGNED_INT&&(Z=i.R32UI),G===i.BYTE&&(Z=i.R8I),G===i.SHORT&&(Z=i.R16I),G===i.INT&&(Z=i.R32I)),E===i.RG&&(G===i.FLOAT&&(Z=i.RG32F),G===i.HALF_FLOAT&&(Z=i.RG16F),G===i.UNSIGNED_BYTE&&(Z=i.RG8)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RG8UI),G===i.UNSIGNED_SHORT&&(Z=i.RG16UI),G===i.UNSIGNED_INT&&(Z=i.RG32UI),G===i.BYTE&&(Z=i.RG8I),G===i.SHORT&&(Z=i.RG16I),G===i.INT&&(Z=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),G===i.UNSIGNED_INT&&(Z=i.RGB32UI),G===i.BYTE&&(Z=i.RGB8I),G===i.SHORT&&(Z=i.RGB16I),G===i.INT&&(Z=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),G===i.UNSIGNED_INT&&(Z=i.RGBA32UI),G===i.BYTE&&(Z=i.RGBA8I),G===i.SHORT&&(Z=i.RGBA16I),G===i.INT&&(Z=i.RGBA32I)),E===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),E===i.RGBA){let Ct=nt?Uc:oe.getTransfer(K);G===i.FLOAT&&(Z=i.RGBA32F),G===i.HALF_FLOAT&&(Z=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Z=Ct===me?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(I,E){let G;return I?E===null||E===Bs||E===Tr?G=i.DEPTH24_STENCIL8:E===ii?G=i.DEPTH32F_STENCIL8:E===Co&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Bs||E===Tr?G=i.DEPTH_COMPONENT24:E===ii?G=i.DEPTH_COMPONENT32F:E===Co&&(G=i.DEPTH_COMPONENT16),G}function R(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==En&&I.minFilter!==ni?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function S(I){let E=I.target;E.removeEventListener("dispose",S),C(E),E.isVideoTexture&&h.delete(E)}function A(I){let E=I.target;E.removeEventListener("dispose",A),w(E)}function C(I){let E=n.get(I);if(E.__webglInit===void 0)return;let G=I.source,K=u.get(G);if(K){let nt=K[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(I),Object.keys(K).length===0&&u.delete(G)}n.remove(I)}function b(I){let E=n.get(I);i.deleteTexture(E.__webglTexture);let G=I.source,K=u.get(G);delete K[E.__cacheKey],o.memory.textures--}function w(I){let E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let nt=0;nt<E.__webglFramebuffer[K].length;nt++)i.deleteFramebuffer(E.__webglFramebuffer[K][nt]);else i.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)i.deleteFramebuffer(E.__webglFramebuffer[K]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let G=I.textures;for(let K=0,nt=G.length;K<nt;K++){let Z=n.get(G[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(G[K])}n.remove(I)}let P=0;function H(){P=0}function N(){let I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function B(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function z(I,E){let G=n.get(I);if(I.isVideoTexture&&Lt(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){let K=I.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,I,E);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function D(I,E){let G=n.get(I);if(I.version>0&&G.__version!==I.version){X(G,I,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function J(I,E){let G=n.get(I);if(I.version>0&&G.__version!==I.version){X(G,I,E);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function V(I,E){let G=n.get(I);if(I.version>0&&G.__version!==I.version){rt(G,I,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}let j={[ns]:i.REPEAT,[Ls]:i.CLAMP_TO_EDGE,[Ch]:i.MIRRORED_REPEAT},ht={[En]:i.NEAREST,[dg]:i.NEAREST_MIPMAP_NEAREST,[Ca]:i.NEAREST_MIPMAP_LINEAR,[ni]:i.LINEAR,[Ol]:i.LINEAR_MIPMAP_NEAREST,[Ds]:i.LINEAR_MIPMAP_LINEAR},pt={[gg]:i.NEVER,[wg]:i.ALWAYS,[xg]:i.LESS,[Up]:i.LEQUAL,[yg]:i.EQUAL,[Mg]:i.GEQUAL,[vg]:i.GREATER,[_g]:i.NOTEQUAL};function ot(I,E){if(E.type===ii&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ni||E.magFilter===Ol||E.magFilter===Ca||E.magFilter===Ds||E.minFilter===ni||E.minFilter===Ol||E.minFilter===Ca||E.minFilter===Ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,j[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,j[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,j[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ht[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ht[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,pt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===En||E.minFilter!==Ca&&E.minFilter!==Ds||E.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ft(I,E){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",S));let K=E.source,nt=u.get(K);nt===void 0&&(nt={},u.set(K,nt));let Z=B(E);if(Z!==I.__cacheKey){nt[Z]===void 0&&(nt[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),nt[Z].usedTimes++;let Ct=nt[I.__cacheKey];Ct!==void 0&&(nt[I.__cacheKey].usedTimes--,Ct.usedTimes===0&&b(E)),I.__cacheKey=Z,I.__webglTexture=nt[Z].texture}return G}function X(I,E,G){let K=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=i.TEXTURE_3D);let nt=Ft(I,E),Z=E.source;e.bindTexture(K,I.__webglTexture,i.TEXTURE0+G);let Ct=n.get(Z);if(Z.version!==Ct.__version||nt===!0){e.activeTexture(i.TEXTURE0+G);let gt=oe.getPrimaries(oe.workingColorSpace),Mt=E.colorSpace===cn?null:oe.getPrimaries(E.colorSpace),re=E.colorSpace===cn||gt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let at=x(E.image,!1,s.maxTextureSize);at=_e(E,at);let bt=r.convert(E.format,E.colorSpace),Dt=r.convert(E.type),zt=_(E.internalFormat,bt,Dt,E.colorSpace,E.isVideoTexture);ot(K,E);let Et,ne=E.mipmaps,Yt=E.isVideoTexture!==!0,ye=Ct.__version===void 0||nt===!0,F=Z.dataReady,mt=R(E,at);if(E.isDepthTexture)zt=v(E.format===Ar,E.type),ye&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,zt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,zt,at.width,at.height,0,bt,Dt,null));else if(E.isDataTexture)if(ne.length>0){Yt&&ye&&e.texStorage2D(i.TEXTURE_2D,mt,zt,ne[0].width,ne[0].height);for(let Y=0,Q=ne.length;Y<Q;Y++)Et=ne[Y],Yt?F&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,bt,Dt,Et.data):e.texImage2D(i.TEXTURE_2D,Y,zt,Et.width,Et.height,0,bt,Dt,Et.data);E.generateMipmaps=!1}else Yt?(ye&&e.texStorage2D(i.TEXTURE_2D,mt,zt,at.width,at.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,bt,Dt,at.data)):e.texImage2D(i.TEXTURE_2D,0,zt,at.width,at.height,0,bt,Dt,at.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Yt&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,zt,ne[0].width,ne[0].height,at.depth);for(let Y=0,Q=ne.length;Y<Q;Y++)if(Et=ne[Y],E.format!==$n)if(bt!==null)if(Yt){if(F)if(E.layerUpdates.size>0){let vt=dp(Et.width,Et.height,E.format,E.type);for(let xt of E.layerUpdates){let Gt=Et.data.subarray(xt*vt/Et.data.BYTES_PER_ELEMENT,(xt+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,xt,Et.width,Et.height,1,bt,Gt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,at.depth,bt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,zt,Et.width,Et.height,at.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,at.depth,bt,Dt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,zt,Et.width,Et.height,at.depth,0,bt,Dt,Et.data)}else{Yt&&ye&&e.texStorage2D(i.TEXTURE_2D,mt,zt,ne[0].width,ne[0].height);for(let Y=0,Q=ne.length;Y<Q;Y++)Et=ne[Y],E.format!==$n?bt!==null?Yt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,zt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?F&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,bt,Dt,Et.data):e.texImage2D(i.TEXTURE_2D,Y,zt,Et.width,Et.height,0,bt,Dt,Et.data)}else if(E.isDataArrayTexture)if(Yt){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,zt,at.width,at.height,at.depth),F)if(E.layerUpdates.size>0){let Y=dp(at.width,at.height,E.format,E.type);for(let Q of E.layerUpdates){let vt=at.data.subarray(Q*Y/at.data.BYTES_PER_ELEMENT,(Q+1)*Y/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,at.width,at.height,1,bt,Dt,vt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,bt,Dt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,at.width,at.height,at.depth,0,bt,Dt,at.data);else if(E.isData3DTexture)Yt?(ye&&e.texStorage3D(i.TEXTURE_3D,mt,zt,at.width,at.height,at.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,bt,Dt,at.data)):e.texImage3D(i.TEXTURE_3D,0,zt,at.width,at.height,at.depth,0,bt,Dt,at.data);else if(E.isFramebufferTexture){if(ye)if(Yt)e.texStorage2D(i.TEXTURE_2D,mt,zt,at.width,at.height);else{let Y=at.width,Q=at.height;for(let vt=0;vt<mt;vt++)e.texImage2D(i.TEXTURE_2D,vt,zt,Y,Q,0,bt,Dt,null),Y>>=1,Q>>=1}}else if(ne.length>0){if(Yt&&ye){let Y=Nt(ne[0]);e.texStorage2D(i.TEXTURE_2D,mt,zt,Y.width,Y.height)}for(let Y=0,Q=ne.length;Y<Q;Y++)Et=ne[Y],Yt?F&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,bt,Dt,Et):e.texImage2D(i.TEXTURE_2D,Y,zt,bt,Dt,Et);E.generateMipmaps=!1}else if(Yt){if(ye){let Y=Nt(at);e.texStorage2D(i.TEXTURE_2D,mt,zt,Y.width,Y.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Dt,at)}else e.texImage2D(i.TEXTURE_2D,0,zt,bt,Dt,at);g(E)&&p(K),Ct.__version=Z.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function rt(I,E,G){if(E.image.length!==6)return;let K=Ft(I,E),nt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);let Z=n.get(nt);if(nt.version!==Z.__version||K===!0){e.activeTexture(i.TEXTURE0+G);let Ct=oe.getPrimaries(oe.workingColorSpace),gt=E.colorSpace===cn?null:oe.getPrimaries(E.colorSpace),Mt=E.colorSpace===cn||Ct===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let re=E.isCompressedTexture||E.image[0].isCompressedTexture,at=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let Q=0;Q<6;Q++)!re&&!at?bt[Q]=x(E.image[Q],!0,s.maxCubemapSize):bt[Q]=at?E.image[Q].image:E.image[Q],bt[Q]=_e(E,bt[Q]);let Dt=bt[0],zt=r.convert(E.format,E.colorSpace),Et=r.convert(E.type),ne=_(E.internalFormat,zt,Et,E.colorSpace),Yt=E.isVideoTexture!==!0,ye=Z.__version===void 0||K===!0,F=nt.dataReady,mt=R(E,Dt);ot(i.TEXTURE_CUBE_MAP,E);let Y;if(re){Yt&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,ne,Dt.width,Dt.height);for(let Q=0;Q<6;Q++){Y=bt[Q].mipmaps;for(let vt=0;vt<Y.length;vt++){let xt=Y[vt];E.format!==$n?zt!==null?Yt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,xt.width,xt.height,zt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,ne,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,xt.width,xt.height,zt,Et,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,ne,xt.width,xt.height,0,zt,Et,xt.data)}}}else{if(Y=E.mipmaps,Yt&&ye){Y.length>0&&mt++;let Q=Nt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,ne,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(at){Yt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,bt[Q].width,bt[Q].height,zt,Et,bt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ne,bt[Q].width,bt[Q].height,0,zt,Et,bt[Q].data);for(let vt=0;vt<Y.length;vt++){let Gt=Y[vt].image[Q].image;Yt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,Gt.width,Gt.height,zt,Et,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,ne,Gt.width,Gt.height,0,zt,Et,Gt.data)}}else{Yt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,zt,Et,bt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ne,zt,Et,bt[Q]);for(let vt=0;vt<Y.length;vt++){let xt=Y[vt];Yt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,zt,Et,xt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,ne,zt,Et,xt.image[Q])}}}g(E)&&p(i.TEXTURE_CUBE_MAP),Z.__version=nt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function wt(I,E,G,K,nt,Z){let Ct=r.convert(G.format,G.colorSpace),gt=r.convert(G.type),Mt=_(G.internalFormat,Ct,gt,G.colorSpace),re=n.get(E),at=n.get(G);if(at.__renderTarget=E,!re.__hasExternalTextures){let bt=Math.max(1,E.width>>Z),Dt=Math.max(1,E.height>>Z);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Z,Mt,bt,Dt,E.depth,0,Ct,gt,null):e.texImage2D(nt,Z,Mt,bt,Dt,0,Ct,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),ee(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,nt,at.__webglTexture,0,te(E)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,nt,at.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(I,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){let K=E.depthTexture,nt=K&&K.isDepthTexture?K.type:null,Z=v(E.stencilBuffer,nt),Ct=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=te(E);ee(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,Z,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,Z,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Z,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,I)}else{let K=E.textures;for(let nt=0;nt<K.length;nt++){let Z=K[nt],Ct=r.convert(Z.format,Z.colorSpace),gt=r.convert(Z.type),Mt=_(Z.internalFormat,Ct,gt,Z.colorSpace),re=te(E);G&&ee(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Mt,E.width,E.height):ee(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);let nt=K.__webglTexture,Z=te(E);if(E.depthTexture.format===_r)ee(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(E.depthTexture.format===Ar)ee(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Vt(I){let E=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let K=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){let nt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),E.__depthDisposeCallback=nt}E.__boundDepthTexture=K}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ut(E.__webglFramebuffer,I)}else if(G){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=i.createRenderbuffer(),ut(E.__webglDepthbuffer[K],I,!1);else{let nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ut(E.__webglDepthbuffer,I,!1);else{let K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(I,E,G){let K=n.get(I);E!==void 0&&wt(K.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Vt(I)}function Ae(I){let E=I.texture,G=n.get(I),K=n.get(E);I.addEventListener("dispose",A);let nt=I.textures,Z=I.isWebGLCubeRenderTarget===!0,Ct=nt.length>1;if(Ct||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=E.version,o.memory.textures++),Z){G.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[gt]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)G.__webglFramebuffer[gt][Mt]=i.createFramebuffer()}else G.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)G.__webglFramebuffer[gt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let gt=0,Mt=nt.length;gt<Mt;gt++){let re=n.get(nt[gt]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ee(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let gt=0;gt<nt.length;gt++){let Mt=nt[gt];G.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[gt]);let re=r.convert(Mt.format,Mt.colorSpace),at=r.convert(Mt.type),bt=_(Mt.internalFormat,re,at,Mt.colorSpace,I.isXRRenderTarget===!0),Dt=te(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,bt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,G.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ot(i.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)wt(G.__webglFramebuffer[gt][Mt],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Mt);else wt(G.__webglFramebuffer[gt],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let gt=0,Mt=nt.length;gt<Mt;gt++){let re=nt[gt],at=n.get(re);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),ot(i.TEXTURE_2D,re),wt(G.__webglFramebuffer,I,re,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),g(re)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(gt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,K.__webglTexture),ot(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)wt(G.__webglFramebuffer[Mt],I,E,i.COLOR_ATTACHMENT0,gt,Mt);else wt(G.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,gt,0);g(E)&&p(gt),e.unbindTexture()}I.depthBuffer&&Vt(I)}function se(I){let E=I.textures;for(let G=0,K=E.length;G<K;G++){let nt=E[G];if(g(nt)){let Z=y(I),Ct=n.get(nt).__webglTexture;e.bindTexture(Z,Ct),p(Z),e.unbindTexture()}}}let Le=[],k=[];function Pn(I){if(I.samples>0){if(ee(I)===!1){let E=I.textures,G=I.width,K=I.height,nt=i.COLOR_BUFFER_BIT,Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(I),gt=E.length>1;if(gt)for(let Mt=0;Mt<E.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Mt=0;Mt<E.length;Mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);let re=n.get(E[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,G,K,0,0,G,K,nt,i.NEAREST),c===!0&&(Le.length=0,k.length=0,Le.push(i.COLOR_ATTACHMENT0+Mt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Le.push(Z),k.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Mt=0;Mt<E.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);let re=n.get(E[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function te(I){return Math.min(s.maxSamples,I.samples)}function ee(I){let E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Lt(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function _e(I,E){let G=I.colorSpace,K=I.format,nt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Ur&&G!==cn&&(oe.getTransfer(G)===me?(K!==$n||nt!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Nt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=z,this.setTexture2DArray=D,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=jt,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Pn,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=ee}function CM(i,t){function e(n,s=cn){let r,o=oe.getTransfer(s);if(n===Ti)return i.UNSIGNED_BYTE;if(n===qu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ap)return i.BYTE;if(n===Rp)return i.SHORT;if(n===Co)return i.UNSIGNED_SHORT;if(n===Wu)return i.INT;if(n===Bs)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===Vo)return i.HALF_FLOAT;if(n===Ip)return i.ALPHA;if(n===Pp)return i.RGB;if(n===$n)return i.RGBA;if(n===Np)return i.LUMINANCE;if(n===Lp)return i.LUMINANCE_ALPHA;if(n===_r)return i.DEPTH_COMPONENT;if(n===Ar)return i.DEPTH_STENCIL;if(n===Yu)return i.RED;if(n===$u)return i.RED_INTEGER;if(n===Dp)return i.RG;if(n===Zu)return i.RG_INTEGER;if(n===ju)return i.RGBA_INTEGER;if(n===ec||n===nc||n===ic||n===sc)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ec)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ic)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ih||n===Ph||n===Nh||n===Lh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ih)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ph)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dh||n===Bh||n===Fh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dh||n===Bh)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uh||n===zh||n===Oh||n===Hh||n===kh||n===Vh||n===Gh||n===Wh||n===qh||n===Xh||n===Yh||n===$h||n===Zh||n===jh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$h)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rc||n===Jh||n===Kh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rc)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bp||n===Qh||n===tu||n===eu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var gu=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Qt=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},IM={type:"move"},To=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},PM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NM=`
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

}`,xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new si({vertexShader:PM,fragmentShader:NM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends is{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null,x=new xu,g=e.getContextAttributes(),p=null,y=null,_=[],v=[],R=new lt,S=null,A=new qe;A.viewport=new ge;let C=new qe;C.viewport=new ge;let b=[A,C],w=new gu,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let rt=_[X];return rt===void 0&&(rt=new To,_[X]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(X){let rt=_[X];return rt===void 0&&(rt=new To,_[X]=rt),rt.getGripSpace()},this.getHand=function(X){let rt=_[X];return rt===void 0&&(rt=new To,_[X]=rt),rt.getHandSpace()};function N(X){let rt=v.indexOf(X.inputSource);if(rt===-1)return;let wt=_[rt];wt!==void 0&&(wt.update(X.inputSource,X.frame,l||o),wt.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",z);for(let X=0;X<_.length;X++){let rt=v[X];rt!==null&&(v[X]=null,_[X].disconnect(rt))}P=null,H=null,x.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,y=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let rt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ai(f.framebufferWidth,f.framebufferHeight,{format:$n,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let rt=null,wt=null,ut=null;g.depth&&(ut=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=g.stencil?Ar:_r,wt=g.stencil?Tr:Bs);let Ut={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Ai(u.textureWidth,u.textureHeight,{format:$n,type:Ti,depthTexture:new yc(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z(X){for(let rt=0;rt<X.removed.length;rt++){let wt=X.removed[rt],ut=v.indexOf(wt);ut>=0&&(v[ut]=null,_[ut].disconnect(wt))}for(let rt=0;rt<X.added.length;rt++){let wt=X.added[rt],ut=v.indexOf(wt);if(ut===-1){for(let Vt=0;Vt<_.length;Vt++)if(Vt>=v.length){v.push(wt),ut=Vt;break}else if(v[Vt]===null){v[Vt]=wt,ut=Vt;break}if(ut===-1)break}let Ut=_[ut];Ut&&Ut.connect(wt)}}let D=new L,J=new L;function V(X,rt,wt){D.setFromMatrixPosition(rt.matrixWorld),J.setFromMatrixPosition(wt.matrixWorld);let ut=D.distanceTo(J),Ut=rt.projectionMatrix.elements,Vt=wt.projectionMatrix.elements,jt=Ut[14]/(Ut[10]-1),Ae=Ut[14]/(Ut[10]+1),se=(Ut[9]+1)/Ut[5],Le=(Ut[9]-1)/Ut[5],k=(Ut[8]-1)/Ut[0],Pn=(Vt[8]+1)/Vt[0],te=jt*k,ee=jt*Pn,Lt=ut/(-k+Pn),_e=Lt*-k;if(rt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(_e),X.translateZ(Lt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ut[10]===-1)X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Nt=jt+Lt,I=Ae+Lt,E=te-_e,G=ee+(ut-_e),K=se*Ae/I*Nt,nt=Le*Ae/I*Nt;X.projectionMatrix.makePerspective(E,G,K,nt,Nt,I),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function j(X,rt){rt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(rt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let rt=X.near,wt=X.far;x.texture!==null&&(x.depthNear>0&&(rt=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),w.near=C.near=A.near=rt,w.far=C.far=A.far=wt,(P!==w.near||H!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,H=w.far),A.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,w.layers.mask=A.layers.mask|C.layers.mask;let ut=X.parent,Ut=w.cameras;j(w,ut);for(let Vt=0;Vt<Ut.length;Vt++)j(Ut[Vt],ut);Ut.length===2?V(w,A,C):w.projectionMatrix.copy(A.projectionMatrix),ht(X,w,ut)};function ht(X,rt,wt){wt===null?X.matrix.copy(rt.matrixWorld):(X.matrix.copy(wt.matrixWorld),X.matrix.invert(),X.matrix.multiply(rt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Cr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(X){c=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let pt=null;function ot(X,rt){if(h=rt.getViewerPose(l||o),m=rt,h!==null){let wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ut=!1;wt.length!==w.cameras.length&&(w.cameras.length=0,ut=!0);for(let Vt=0;Vt<wt.length;Vt++){let jt=wt[Vt],Ae=null;if(f!==null)Ae=f.getViewport(jt);else{let Le=d.getViewSubImage(u,jt);Ae=Le.viewport,Vt===0&&(t.setRenderTargetTextures(y,Le.colorTexture,u.ignoreDepthValues?void 0:Le.depthStencilTexture),t.setRenderTarget(y))}let se=b[Vt];se===void 0&&(se=new qe,se.layers.enable(Vt),se.viewport=new ge,b[Vt]=se),se.matrix.fromArray(jt.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(jt.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Vt===0&&(w.matrix.copy(se.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ut===!0&&w.cameras.push(se)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){let Vt=d.getDepthInformation(wt[0]);Vt&&Vt.isValid&&Vt.texture&&x.init(t,Vt,s.renderState)}}for(let wt=0;wt<_.length;wt++){let ut=v[wt],Ut=_[wt];ut!==null&&Ut!==void 0&&Ut.update(ut,rt,l||o)}pt&&pt(X,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}let Ft=new kp;Ft.setAnimationLoop(ot),this.setAnimationLoop=function(X){pt=X},this.dispose=function(){}}},Rs=new hn,LM=new ce;function DM(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Hp(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===pn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===pn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),_=y.envMap,v=y.envMapRotation;_&&(g.envMap.value=_,Rs.copy(v),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),g.envMapRotation.value.setFromMatrix4(LM.makeRotationFromEuler(Rs)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function BM(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function l(y,_){let v=s[y.id];v===void 0&&(m(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",g));let R=_.program;n.updateUBOMapping(y,R);let S=t.render.frame;r[y.id]!==S&&(u(y),r[y.id]=S)}function h(y){let _=d();y.__bindingPointIndex=_;let v=i.createBuffer(),R=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let _=s[y.id],v=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,A=v.length;S<A;S++){let C=Array.isArray(v[S])?v[S]:[v[S]];for(let b=0,w=C.length;b<w;b++){let P=C[b];if(f(P,S,b,R)===!0){let H=P.__offset,N=Array.isArray(P.value)?P.value:[P.value],B=0;for(let z=0;z<N.length;z++){let D=N[z],J=x(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,H+B,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,B),B+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,v,R){let S=y.value,A=_+"_"+v;if(R[A]===void 0)return typeof S=="number"||typeof S=="boolean"?R[A]=S:R[A]=S.clone(),!0;{let C=R[A];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return R[A]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function m(y){let _=y.uniforms,v=0,R=16;for(let A=0,C=_.length;A<C;A++){let b=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,P=b.length;w<P;w++){let H=b[w],N=Array.isArray(H.value)?H.value:[H.value];for(let B=0,z=N.length;B<z;B++){let D=N[B],J=x(D),V=v%R,j=V%J.boundary,ht=V+j;v+=j,ht!==0&&R-ht<J.storage&&(v+=R-ht),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=J.storage}}}let S=v%R;return S>0&&(v+=R-S),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){let _=y.target;_.removeEventListener("dispose",g);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Lo=class{constructor(t={}){let{canvas:e=Og(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,y=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=ts,this.toneMappingExposure=1;let v=this,R=!1,S=0,A=0,C=null,b=-1,w=null,P=new ge,H=new ge,N=null,B=new Xt(0),z=0,D=e.width,J=e.height,V=1,j=null,ht=null,pt=new ge(0,0,D,J),ot=new ge(0,0,D,J),Ft=!1,X=new No,rt=!1,wt=!1,ut=new ce,Ut=new ce,Vt=new L,jt=new ge,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function Le(){return C===null?V:1}let k=n;function Pn(T,U){return e.getContext(T,U)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vu}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),k===null){let U="webgl2";if(k=Pn(U,T),k===null)throw Pn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let te,ee,Lt,_e,Nt,I,E,G,K,nt,Z,Ct,gt,Mt,re,at,bt,Dt,zt,Et,ne,Yt,ye,F;function mt(){te=new Jv(k),te.init(),Yt=new CM(k,te),ee=new qv(k,te,t,Yt),Lt=new TM(k,te),ee.reverseDepthBuffer&&u&&Lt.buffers.depth.setReversed(!0),_e=new t_(k),Nt=new fM,I=new RM(k,te,Lt,Nt,ee,Yt,_e),E=new Yv(v),G=new jv(v),K=new ax(k),ye=new Gv(k,K),nt=new Kv(k,K,_e,ye),Z=new n_(k,nt,K,_e),zt=new e_(k,ee,I),at=new Xv(Nt),Ct=new dM(v,E,G,te,ee,ye,at),gt=new DM(v,Nt),Mt=new mM,re=new MM(te),Dt=new Vv(v,E,G,Lt,Z,f,c),bt=new EM(v,Z,ee),F=new BM(k,_e,ee,Lt),Et=new Wv(k,te,_e),ne=new Qv(k,te,_e),_e.programs=Ct.programs,v.capabilities=ee,v.extensions=te,v.properties=Nt,v.renderLists=Mt,v.shadowMap=bt,v.state=Lt,v.info=_e}mt();let Y=new yu(v,k);this.xr=Y,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(D,J,!1))},this.getSize=function(T){return T.set(D,J)},this.setSize=function(T,U,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=T,J=U,e.width=Math.floor(T*V),e.height=Math.floor(U*V),W===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(D*V,J*V).floor()},this.setDrawingBufferSize=function(T,U,W){D=T,J=U,V=W,e.width=Math.floor(T*W),e.height=Math.floor(U*W),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(pt)},this.setViewport=function(T,U,W,q){T.isVector4?pt.set(T.x,T.y,T.z,T.w):pt.set(T,U,W,q),Lt.viewport(P.copy(pt).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(ot)},this.setScissor=function(T,U,W,q){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,U,W,q),Lt.scissor(H.copy(ot).multiplyScalar(V).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(T){Lt.setScissorTest(Ft=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){ht=T},this.getClearColor=function(T){return T.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(T=!0,U=!0,W=!0){let q=0;if(T){let O=!1;if(C!==null){let ct=C.texture.format;O=ct===ju||ct===Zu||ct===$u}if(O){let ct=C.texture.type,yt=ct===Ti||ct===Bs||ct===Co||ct===Tr||ct===qu||ct===Xu,St=Dt.getClearColor(),Tt=Dt.getClearAlpha(),Ht=St.r,Wt=St.g,At=St.b;yt?(m[0]=Ht,m[1]=Wt,m[2]=At,m[3]=Tt,k.clearBufferuiv(k.COLOR,0,m)):(x[0]=Ht,x[1]=Wt,x[2]=At,x[3]=Tt,k.clearBufferiv(k.COLOR,0,x))}else q|=k.COLOR_BUFFER_BIT}U&&(q|=k.DEPTH_BUFFER_BIT),W&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Mt.dispose(),re.dispose(),Nt.dispose(),E.dispose(),G.dispose(),Z.dispose(),ye.dispose(),F.dispose(),Ct.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",of),Y.removeEventListener("sessionend",af),ws.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let T=_e.autoReset,U=bt.enabled,W=bt.autoUpdate,q=bt.needsUpdate,O=bt.type;mt(),_e.autoReset=T,bt.enabled=U,bt.autoUpdate=W,bt.needsUpdate=q,bt.type=O}function xt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Gt(T){let U=T.target;U.removeEventListener("dispose",Gt),Ie(U)}function Ie(T){Qe(T),Nt.remove(T)}function Qe(T){let U=Nt.get(T).programs;U!==void 0&&(U.forEach(function(W){Ct.releaseProgram(W)}),T.isShaderMaterial&&Ct.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,W,q,O,ct){U===null&&(U=Ae);let yt=O.isMesh&&O.matrixWorld.determinant()<0,St=B0(T,U,W,q,O);Lt.setMaterial(q,yt);let Tt=W.index,Ht=1;if(q.wireframe===!0){if(Tt=nt.getWireframeAttribute(W),Tt===void 0)return;Ht=2}let Wt=W.drawRange,At=W.attributes.position,ae=Wt.start*Ht,ve=(Wt.start+Wt.count)*Ht;ct!==null&&(ae=Math.max(ae,ct.start*Ht),ve=Math.min(ve,(ct.start+ct.count)*Ht)),Tt!==null?(ae=Math.max(ae,0),ve=Math.min(ve,Tt.count)):At!=null&&(ae=Math.max(ae,0),ve=Math.min(ve,At.count));let Me=ve-ae;if(Me<0||Me===1/0)return;ye.setup(O,q,St,W,Tt);let fn,he=Et;if(Tt!==null&&(fn=K.get(Tt),he=ne,he.setIndex(fn)),O.isMesh)q.wireframe===!0?(Lt.setLineWidth(q.wireframeLinewidth*Le()),he.setMode(k.LINES)):he.setMode(k.TRIANGLES);else if(O.isLine){let It=q.linewidth;It===void 0&&(It=1),Lt.setLineWidth(It*Le()),O.isLineSegments?he.setMode(k.LINES):O.isLineLoop?he.setMode(k.LINE_LOOP):he.setMode(k.LINE_STRIP)}else O.isPoints?he.setMode(k.POINTS):O.isSprite&&he.setMode(k.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)he.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))he.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let It=O._multiDrawStarts,gi=O._multiDrawCounts,ue=O._multiDrawCount,Wn=Tt?K.get(Tt).bytesPerElement:1,er=Nt.get(q).currentProgram.getUniforms();for(let Mn=0;Mn<ue;Mn++)er.setValue(k,"_gl_DrawID",Mn),he.render(It[Mn]/Wn,gi[Mn])}else if(O.isInstancedMesh)he.renderInstances(ae,Me,O.count);else if(W.isInstancedBufferGeometry){let It=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,gi=Math.min(W.instanceCount,It);he.renderInstances(ae,Me,gi)}else he.render(ae,Me)};function fe(T,U,W){T.transparent===!0&&T.side===Fe&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,Ra(T,U,W),T.side=es,T.needsUpdate=!0,Ra(T,U,W),T.side=Fe):Ra(T,U,W)}this.compile=function(T,U,W=null){W===null&&(W=T),p=re.get(W),p.init(U),_.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==W&&T.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let q=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ct=O.material;if(ct)if(Array.isArray(ct))for(let yt=0;yt<ct.length;yt++){let St=ct[yt];fe(St,W,O),q.add(St)}else fe(ct,W,O),q.add(ct)}),_.pop(),p=null,q},this.compileAsync=function(T,U,W=null){let q=this.compile(T,U,W);return new Promise(O=>{function ct(){if(q.forEach(function(yt){Nt.get(yt).currentProgram.isReady()&&q.delete(yt)}),q.size===0){O(T);return}setTimeout(ct,10)}te.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Gn=null;function mi(T){Gn&&Gn(T)}function of(){ws.stop()}function af(){ws.start()}let ws=new kp;ws.setAnimationLoop(mi),typeof self<"u"&&ws.setContext(self),this.setAnimationLoop=function(T){Gn=T,Y.setAnimationLoop(T),T===null?ws.stop():ws.start()},Y.addEventListener("sessionstart",of),Y.addEventListener("sessionend",af),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,C),p=re.get(T,_.length),p.init(U),_.push(p),Ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Ut),wt=this.localClippingEnabled,rt=at.init(this.clippingPlanes,wt),g=Mt.get(T,y.length),g.init(),y.push(g),Y.enabled===!0&&Y.isPresenting===!0){let ct=v.xr.getDepthSensingMesh();ct!==null&&zl(ct,U,-1/0,v.sortObjects)}zl(T,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(j,ht),se=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,se&&Dt.addToRenderList(g,T),this.info.render.frame++,rt===!0&&at.beginShadows();let W=p.state.shadowsArray;bt.render(W,T,U),rt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,O=g.transmissive;if(p.setupLights(),U.isArrayCamera){let ct=U.cameras;if(O.length>0)for(let yt=0,St=ct.length;yt<St;yt++){let Tt=ct[yt];lf(q,O,T,Tt)}se&&Dt.render(T);for(let yt=0,St=ct.length;yt<St;yt++){let Tt=ct[yt];cf(g,T,Tt,Tt.viewport)}}else O.length>0&&lf(q,O,T,U),se&&Dt.render(T),cf(g,T,U);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,U),ye.resetDefaultState(),b=-1,w=null,_.pop(),_.length>0?(p=_[_.length-1],rt===!0&&at.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function zl(T,U,W,q){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){q&&jt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ut);let yt=Z.update(T),St=T.material;St.visible&&g.push(T,yt,St,W,jt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){let yt=Z.update(T),St=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),jt.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),jt.copy(yt.boundingSphere.center)),jt.applyMatrix4(T.matrixWorld).applyMatrix4(Ut)),Array.isArray(St)){let Tt=yt.groups;for(let Ht=0,Wt=Tt.length;Ht<Wt;Ht++){let At=Tt[Ht],ae=St[At.materialIndex];ae&&ae.visible&&g.push(T,yt,ae,W,jt.z,At)}}else St.visible&&g.push(T,yt,St,W,jt.z,null)}}let ct=T.children;for(let yt=0,St=ct.length;yt<St;yt++)zl(ct[yt],U,W,q)}function cf(T,U,W,q){let O=T.opaque,ct=T.transmissive,yt=T.transparent;p.setupLightsView(W),rt===!0&&at.setGlobalState(v.clippingPlanes,W),q&&Lt.viewport(P.copy(q)),O.length>0&&Aa(O,U,W),ct.length>0&&Aa(ct,U,W),yt.length>0&&Aa(yt,U,W),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function lf(T,U,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Ai(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Vo:Ti,minFilter:Ds,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let ct=p.state.transmissionRenderTarget[q.id],yt=q.viewport||P;ct.setSize(yt.z,yt.w);let St=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(B),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),se&&Dt.render(W);let Tt=v.toneMapping;v.toneMapping=ts;let Ht=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),rt===!0&&at.setGlobalState(v.clippingPlanes,q),Aa(T,W,q),I.updateMultisampleRenderTarget(ct),I.updateRenderTargetMipmap(ct),te.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let At=0,ae=U.length;At<ae;At++){let ve=U[At],Me=ve.object,fn=ve.geometry,he=ve.material,It=ve.group;if(he.side===Fe&&Me.layers.test(q.layers)){let gi=he.side;he.side=pn,he.needsUpdate=!0,hf(Me,W,q,fn,he,It),he.side=gi,he.needsUpdate=!0,Wt=!0}}Wt===!0&&(I.updateMultisampleRenderTarget(ct),I.updateRenderTargetMipmap(ct))}v.setRenderTarget(St),v.setClearColor(B,z),Ht!==void 0&&(q.viewport=Ht),v.toneMapping=Tt}function Aa(T,U,W){let q=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ct=T.length;O<ct;O++){let yt=T[O],St=yt.object,Tt=yt.geometry,Ht=q===null?yt.material:q,Wt=yt.group;St.layers.test(W.layers)&&hf(St,U,W,Tt,Ht,Wt)}}function hf(T,U,W,q,O,ct){T.onBeforeRender(v,U,W,q,O,ct),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,U,W,q,T,ct),O.transparent===!0&&O.side===Fe&&O.forceSinglePass===!1?(O.side=pn,O.needsUpdate=!0,v.renderBufferDirect(W,U,q,O,T,ct),O.side=es,O.needsUpdate=!0,v.renderBufferDirect(W,U,q,O,T,ct),O.side=Fe):v.renderBufferDirect(W,U,q,O,T,ct),T.onAfterRender(v,U,W,q,O,ct)}function Ra(T,U,W){U.isScene!==!0&&(U=Ae);let q=Nt.get(T),O=p.state.lights,ct=p.state.shadowsArray,yt=O.state.version,St=Ct.getParameters(T,O.state,ct,U,W),Tt=Ct.getProgramCacheKey(St),Ht=q.programs;q.environment=T.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ht===void 0&&(T.addEventListener("dispose",Gt),Ht=new Map,q.programs=Ht);let Wt=Ht.get(Tt);if(Wt!==void 0){if(q.currentProgram===Wt&&q.lightsStateVersion===yt)return df(T,St),Wt}else St.uniforms=Ct.getUniforms(T),T.onBeforeCompile(St,v),Wt=Ct.acquireProgram(St,Tt),Ht.set(Tt,Wt),q.uniforms=St.uniforms;let At=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(At.clippingPlanes=at.uniform),df(T,St),q.needsLights=U0(T),q.lightsStateVersion=yt,q.needsLights&&(At.ambientLightColor.value=O.state.ambient,At.lightProbe.value=O.state.probe,At.directionalLights.value=O.state.directional,At.directionalLightShadows.value=O.state.directionalShadow,At.spotLights.value=O.state.spot,At.spotLightShadows.value=O.state.spotShadow,At.rectAreaLights.value=O.state.rectArea,At.ltc_1.value=O.state.rectAreaLTC1,At.ltc_2.value=O.state.rectAreaLTC2,At.pointLights.value=O.state.point,At.pointLightShadows.value=O.state.pointShadow,At.hemisphereLights.value=O.state.hemi,At.directionalShadowMap.value=O.state.directionalShadowMap,At.directionalShadowMatrix.value=O.state.directionalShadowMatrix,At.spotShadowMap.value=O.state.spotShadowMap,At.spotLightMatrix.value=O.state.spotLightMatrix,At.spotLightMap.value=O.state.spotLightMap,At.pointShadowMap.value=O.state.pointShadowMap,At.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Wt,q.uniformsList=null,Wt}function uf(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=wr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function df(T,U){let W=Nt.get(T);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function B0(T,U,W,q,O){U.isScene!==!0&&(U=Ae),I.resetTextureUnits();let ct=U.fog,yt=q.isMeshStandardMaterial?U.environment:null,St=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ur,Tt=(q.isMeshStandardMaterial?G:E).get(q.envMap||yt),Ht=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),At=!!W.morphAttributes.position,ae=!!W.morphAttributes.normal,ve=!!W.morphAttributes.color,Me=ts;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Me=v.toneMapping);let fn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,he=fn!==void 0?fn.length:0,It=Nt.get(q),gi=p.state.lights;if(rt===!0&&(wt===!0||T!==w)){let Nn=T===w&&q.id===b;at.setState(q,T,Nn)}let ue=!1;q.version===It.__version?(It.needsLights&&It.lightsStateVersion!==gi.state.version||It.outputColorSpace!==St||O.isBatchedMesh&&It.batching===!1||!O.isBatchedMesh&&It.batching===!0||O.isBatchedMesh&&It.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&It.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&It.instancing===!1||!O.isInstancedMesh&&It.instancing===!0||O.isSkinnedMesh&&It.skinning===!1||!O.isSkinnedMesh&&It.skinning===!0||O.isInstancedMesh&&It.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&It.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&It.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&It.instancingMorph===!1&&O.morphTexture!==null||It.envMap!==Tt||q.fog===!0&&It.fog!==ct||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==at.numPlanes||It.numIntersection!==at.numIntersection)||It.vertexAlphas!==Ht||It.vertexTangents!==Wt||It.morphTargets!==At||It.morphNormals!==ae||It.morphColors!==ve||It.toneMapping!==Me||It.morphTargetsCount!==he)&&(ue=!0):(ue=!0,It.__version=q.version);let Wn=It.currentProgram;ue===!0&&(Wn=Ra(q,U,O));let er=!1,Mn=!1,fo=!1,we=Wn.getUniforms(),ti=It.uniforms;if(Lt.useProgram(Wn.program)&&(er=!0,Mn=!0,fo=!0),q.id!==b&&(b=q.id,Mn=!0),er||w!==T){Lt.buffers.depth.getReversed()?(ut.copy(T.projectionMatrix),kg(ut),Vg(ut),we.setValue(k,"projectionMatrix",ut)):we.setValue(k,"projectionMatrix",T.projectionMatrix),we.setValue(k,"viewMatrix",T.matrixWorldInverse);let qi=we.map.cameraPosition;qi!==void 0&&qi.setValue(k,Vt.setFromMatrixPosition(T.matrixWorld)),ee.logarithmicDepthBuffer&&we.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&we.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,Mn=!0,fo=!0)}if(O.isSkinnedMesh){we.setOptional(k,O,"bindMatrix"),we.setOptional(k,O,"bindMatrixInverse");let Nn=O.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),we.setValue(k,"boneTexture",Nn.boneTexture,I))}O.isBatchedMesh&&(we.setOptional(k,O,"batchingTexture"),we.setValue(k,"batchingTexture",O._matricesTexture,I),we.setOptional(k,O,"batchingIdTexture"),we.setValue(k,"batchingIdTexture",O._indirectTexture,I),we.setOptional(k,O,"batchingColorTexture"),O._colorsTexture!==null&&we.setValue(k,"batchingColorTexture",O._colorsTexture,I));let po=W.morphAttributes;if((po.position!==void 0||po.normal!==void 0||po.color!==void 0)&&zt.update(O,W,Wn),(Mn||It.receiveShadow!==O.receiveShadow)&&(It.receiveShadow=O.receiveShadow,we.setValue(k,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ti.envMap.value=Tt,ti.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&U.environment!==null&&(ti.envMapIntensity.value=U.environmentIntensity),Mn&&(we.setValue(k,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&F0(ti,fo),ct&&q.fog===!0&&gt.refreshFogUniforms(ti,ct),gt.refreshMaterialUniforms(ti,q,V,J,p.state.transmissionRenderTarget[T.id]),wr.upload(k,uf(It),ti,I)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(wr.upload(k,uf(It),ti,I),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&we.setValue(k,"center",O.center),we.setValue(k,"modelViewMatrix",O.modelViewMatrix),we.setValue(k,"normalMatrix",O.normalMatrix),we.setValue(k,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Nn=q.uniformsGroups;for(let qi=0,Xi=Nn.length;qi<Xi;qi++){let ff=Nn[qi];F.update(ff,Wn),F.bind(ff,Wn)}}return Wn}function F0(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function U0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,U,W){Nt.get(T.texture).__webglTexture=U,Nt.get(T.depthTexture).__webglTexture=W;let q=Nt.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){let W=Nt.get(T);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,W=0){C=T,S=U,A=W;let q=!0,O=null,ct=!1,yt=!1;if(T){let Tt=Nt.get(T);if(Tt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(Tt.__webglFramebuffer===void 0)I.setupRenderTarget(T);else if(Tt.__hasExternalTextures)I.rebindTextures(T,Nt.get(T.texture).__webglTexture,Nt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let At=T.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&Nt.has(At)&&(T.width!==At.image.width||T.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(T)}}let Ht=T.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(yt=!0);let Wt=Nt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[U])?O=Wt[U][W]:O=Wt[U],ct=!0):T.samples>0&&I.useMultisampledRTT(T)===!1?O=Nt.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?O=Wt[W]:O=Wt,P.copy(T.viewport),H.copy(T.scissor),N=T.scissorTest}else P.copy(pt).multiplyScalar(V).floor(),H.copy(ot).multiplyScalar(V).floor(),N=Ft;if(Lt.bindFramebuffer(k.FRAMEBUFFER,O)&&q&&Lt.drawBuffers(T,O),Lt.viewport(P),Lt.scissor(H),Lt.setScissorTest(N),ct){let Tt=Nt.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,W)}else if(yt){let Tt=Nt.get(T.texture),Ht=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Tt.__webglTexture,W||0,Ht)}b=-1},this.readRenderTargetPixels=function(T,U,W,q,O,ct,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){Lt.bindFramebuffer(k.FRAMEBUFFER,St);try{let Tt=T.texture,Ht=Tt.format,Wt=Tt.type;if(!ee.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-q&&W>=0&&W<=T.height-O&&k.readPixels(U,W,q,O,Yt.convert(Ht),Yt.convert(Wt),ct)}finally{let Tt=C!==null?Nt.get(C).__webglFramebuffer:null;Lt.bindFramebuffer(k.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(T,U,W,q,O,ct,yt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){let Tt=T.texture,Ht=Tt.format,Wt=Tt.type;if(!ee.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-q&&W>=0&&W<=T.height-O){Lt.bindFramebuffer(k.FRAMEBUFFER,St);let At=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,At),k.bufferData(k.PIXEL_PACK_BUFFER,ct.byteLength,k.STREAM_READ),k.readPixels(U,W,q,O,Yt.convert(Ht),Yt.convert(Wt),0);let ae=C!==null?Nt.get(C).__webglFramebuffer:null;Lt.bindFramebuffer(k.FRAMEBUFFER,ae);let ve=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Hg(k,ve,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,At),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ct),k.deleteBuffer(At),k.deleteSync(ve),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,W=0){T.isTexture!==!0&&(wo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);let q=Math.pow(2,-W),O=Math.floor(T.image.width*q),ct=Math.floor(T.image.height*q),yt=U!==null?U.x:0,St=U!==null?U.y:0;I.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,yt,St,O,ct),Lt.unbindTexture()},this.copyTextureToTexture=function(T,U,W=null,q=null,O=0){T.isTexture!==!0&&(wo("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],U=arguments[2],O=arguments[3]||0,W=null);let ct,yt,St,Tt,Ht,Wt,At,ae,ve,Me=T.isCompressedTexture?T.mipmaps[O]:T.image;W!==null?(ct=W.max.x-W.min.x,yt=W.max.y-W.min.y,St=W.isBox3?W.max.z-W.min.z:1,Tt=W.min.x,Ht=W.min.y,Wt=W.isBox3?W.min.z:0):(ct=Me.width,yt=Me.height,St=Me.depth||1,Tt=0,Ht=0,Wt=0),q!==null?(At=q.x,ae=q.y,ve=q.z):(At=0,ae=0,ve=0);let fn=Yt.convert(U.format),he=Yt.convert(U.type),It;U.isData3DTexture?(I.setTexture3D(U,0),It=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(I.setTexture2DArray(U,0),It=k.TEXTURE_2D_ARRAY):(I.setTexture2D(U,0),It=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);let gi=k.getParameter(k.UNPACK_ROW_LENGTH),ue=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Wn=k.getParameter(k.UNPACK_SKIP_PIXELS),er=k.getParameter(k.UNPACK_SKIP_ROWS),Mn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Me.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Me.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Tt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ht),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Wt);let fo=T.isDataArrayTexture||T.isData3DTexture,we=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let ti=Nt.get(T),po=Nt.get(U),Nn=Nt.get(ti.__renderTarget),qi=Nt.get(po.__renderTarget);Lt.bindFramebuffer(k.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Lt.bindFramebuffer(k.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Xi=0;Xi<St;Xi++)fo&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Nt.get(T).__webglTexture,O,Wt+Xi),T.isDepthTexture?(we&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Nt.get(U).__webglTexture,O,ve+Xi),k.blitFramebuffer(Tt,Ht,ct,yt,At,ae,ct,yt,k.DEPTH_BUFFER_BIT,k.NEAREST)):we?k.copyTexSubImage3D(It,O,At,ae,ve+Xi,Tt,Ht,ct,yt):k.copyTexSubImage2D(It,O,At,ae,ve+Xi,Tt,Ht,ct,yt);Lt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else we?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(It,O,At,ae,ve,ct,yt,St,fn,he,Me.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(It,O,At,ae,ve,ct,yt,St,fn,Me.data):k.texSubImage3D(It,O,At,ae,ve,ct,yt,St,fn,he,Me):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,O,At,ae,ct,yt,fn,he,Me.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,O,At,ae,Me.width,Me.height,fn,Me.data):k.texSubImage2D(k.TEXTURE_2D,O,At,ae,ct,yt,fn,he,Me);k.pixelStorei(k.UNPACK_ROW_LENGTH,gi),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ue),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Wn),k.pixelStorei(k.UNPACK_SKIP_ROWS,er),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Mn),O===0&&U.generateMipmaps&&k.generateMipmap(It),Lt.unbindTexture()},this.copyTextureToTexture3D=function(T,U,W=null,q=null,O=0){return T.isTexture!==!0&&(wo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,T=arguments[2],U=arguments[3],O=arguments[4]||0),wo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,W,q,O)},this.initRenderTarget=function(T){Nt.get(T).__webglFramebuffer===void 0&&I.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?I.setTextureCube(T,0):T.isData3DTexture?I.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?I.setTexture2DArray(T,0):I.setTexture2D(T,0),Lt.unbindTexture()},this.resetState=function(){S=0,A=0,C=null,Lt.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}},vc=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Do=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var vu=class extends mn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=En,h=En,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _c=class extends ln{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},gr=new ce,fp=new ce,ja=[],pp=new Ri,FM=new ce,vo=new it,_o=new ss,Pr=class extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,FM)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gr),pp.copy(t.boundingBox).applyMatrix4(gr),this.boundingBox.union(pp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gr),_o.copy(t.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(_o)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_o.copy(this.boundingSphere),_o.applyMatrix4(n),t.ray.intersectsSphere(_o)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gr),fp.multiplyMatrices(n,gr),vo.matrixWorld=fp,vo.raycast(t,ja);for(let o=0,a=ja.length;o<a;o++){let c=ja[o];c.instanceId=r,c.object=this,e.push(c)}ja.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vu(new Float32Array(s*this.count),s,this.count,Yu,ii));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Bo=class extends rs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mp=new ce,_u=new Io,Ja=new ss,Ka=new L,Mc=class extends Xe{constructor(t=new Re,e=new Bo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,t.ray.intersectsSphere(Ja)===!1)return;mp.copy(s).invert(),_u.copy(t.ray).applyMatrix4(mp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=u,x=f;m<x;m++){let g=l.getX(m);Ka.fromBufferAttribute(d,g),gp(Ka,g,c,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,x=f;m<x;m++)Ka.fromBufferAttribute(d,m),gp(Ka,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function gp(i,t,e,n,s,r,o){let a=_u.distanceSqToPoint(i);if(a<e){let c=new L;_u.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ri=class extends mn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new lt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,c=new ce;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(We(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Fo=class extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Mu=class extends Fo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Qu(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Qa=new L,fh=new Qu,ph=new Qu,mh=new Qu,wu=class extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Qa.subVectors(s[0],s[1]).add(s[0]),l=Qa);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Qa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),fh.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,m,x,g),ph.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,m,x,g),mh.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(fh.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ph.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),mh.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(fh.calc(c),ph.calc(c),mh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function xp(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function UM(i,t){let e=1-i;return e*e*t}function zM(i,t){return 2*(1-i)*i*t}function OM(i,t){return i*i*t}function Ao(i,t,e,n){return UM(i,t)+zM(i,e)+OM(i,n)}function HM(i,t){let e=1-i;return e*e*e*t}function kM(i,t){let e=1-i;return 3*e*e*i*t}function VM(i,t){return 3*(1-i)*i*i*t}function GM(i,t){return i*i*i*t}function Ro(i,t,e,n,s){return HM(i,t)+kM(i,e)+VM(i,n)+GM(i,s)}var wc=class extends Dn{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ro(t,s.x,r.x,o.x,a.x),Ro(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bu=class extends Dn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ro(t,s.x,r.x,o.x,a.x),Ro(t,s.y,r.y,o.y,a.y),Ro(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bc=class extends Dn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eu=class extends Dn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ec=class extends Dn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ao(t,s.x,r.x,o.x),Ao(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Su=class extends Dn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ao(t,s.x,r.x,o.x),Ao(t,s.y,r.y,o.y),Ao(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sc=class extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(xp(a,c.x,l.x,h.x,d.x),xp(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},yp=Object.freeze({__proto__:null,ArcCurve:Mu,CatmullRomCurve3:wu,CubicBezierCurve:wc,CubicBezierCurve3:bu,EllipseCurve:Fo,LineCurve:bc,LineCurve3:Eu,QuadraticBezierCurve:Ec,QuadraticBezierCurve3:Su,SplineCurve:Sc}),Tu=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yp[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new yp[s.type]().fromJSON(s))}return this}},Au=class extends Tu{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new bc(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ec(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new wc(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Sc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Fo(t,e,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Uo=class i extends Re{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=We(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,d=new L,u=new lt,f=new L,m=new L,x=new L,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let y=0;y<=e;y++){let _=n+y*h*s,v=Math.sin(_),R=Math.cos(_);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*v,d.y=t[S].y,d.z=t[S].x*R,o.push(d.x,d.y,d.z),u.x=y/e,u.y=S/(t.length-1),a.push(u.x,u.y);let A=c[3*S+0]*v,C=c[3*S+1],b=c[3*S+0]*R;l.push(A,C,b)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let v=_+y*t.length,R=v,S=v+t.length,A=v+t.length+1,C=v+1;r.push(R,S,C),r.push(A,C,S)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Tc=class i extends Uo{constructor(t=1,e=1,n=4,s=8){let r=new Au;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Ci=class i extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,h=new lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},nn=class i extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,x=[],g=n/2,p=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2));function y(){let v=new L,R=new L,S=0,A=(e-t)/n;for(let C=0;C<=r;C++){let b=[],w=C/r,P=w*(e-t)+t;for(let H=0;H<=s;H++){let N=H/s,B=N*c+a,z=Math.sin(B),D=Math.cos(B);R.x=P*z,R.y=-w*n+g,R.z=P*D,d.push(R.x,R.y,R.z),v.set(z,A,D).normalize(),u.push(v.x,v.y,v.z),f.push(N,1-w),b.push(m++)}x.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){let w=x[b][C],P=x[b+1][C],H=x[b+1][C+1],N=x[b][C+1];(t>0||b!==0)&&(h.push(w,P,N),S+=3),(e>0||b!==r-1)&&(h.push(P,H,N),S+=3)}l.addGroup(p,S,0),p+=S}function _(v){let R=m,S=new lt,A=new L,C=0,b=v===!0?t:e,w=v===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,g*w,0),u.push(0,w,0),f.push(.5,.5),m++;let P=m;for(let H=0;H<=s;H++){let B=H/s*c+a,z=Math.cos(B),D=Math.sin(B);A.x=b*D,A.y=g*w,A.z=b*z,d.push(A.x,A.y,A.z),u.push(0,w,0),S.x=z*.5+.5,S.y=D*.5*w+.5,f.push(S.x,S.y),m++}for(let H=0;H<s;H++){let N=R+H,B=P+H;v===!0?h.push(B,B+1,N):h.push(B+1,B,N),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nr=class i extends nn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Lr=class i extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new L,v=new L,R=new L;for(let S=0;S<e.length;S+=3)f(e[S+0],_),f(e[S+1],v),f(e[S+2],R),c(_,v,R,y)}function c(y,_,v,R){let S=R+1,A=[];for(let C=0;C<=S;C++){A[C]=[];let b=y.clone().lerp(v,C/S),w=_.clone().lerp(v,C/S),P=S-C;for(let H=0;H<=P;H++)H===0&&C===S?A[C][H]=b:A[C][H]=b.clone().lerp(w,H/P)}for(let C=0;C<S;C++)for(let b=0;b<2*(S-C)-1;b++){let w=Math.floor(b/2);b%2===0?(u(A[C][w+1]),u(A[C+1][w]),u(A[C][w])):(u(A[C][w+1]),u(A[C+1][w+1]),u(A[C+1][w]))}}function l(y){let _=new L;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(y),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let y=new L;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let v=g(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(v,1-R)}m(),d()}function d(){for(let y=0;y<o.length;y+=6){let _=o[y+0],v=o[y+2],R=o[y+4],S=Math.max(_,v,R),A=Math.min(_,v,R);S>.9&&A<.1&&(_<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,_){let v=y*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function m(){let y=new L,_=new L,v=new L,R=new L,S=new lt,A=new lt,C=new lt;for(let b=0,w=0;b<r.length;b+=9,w+=6){y.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),S.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),C.set(o[w+4],o[w+5]),R.copy(y).add(_).add(v).divideScalar(3);let P=g(R);x(S,w+0,y,P),x(A,w+2,_,P),x(C,w+4,v,P)}}function x(y,_,v,R){R<0&&y.x===1&&(o[_]=y.x-1),v.x===0&&v.z===0&&(o[_]=R/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ac=class i extends Lr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Dr=class i extends Lr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Rc=class i extends Lr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Cc=class i extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=t,u=(e-t)/s,f=new L,m=new lt;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,_=y,v=y+n+1,R=y+n+2,S=y+1;a.push(_,v,S),a.push(v,R,S)}}this.setIndex(a),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ic=class i extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new L,u=new L,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],_=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let S=R/e;d.x=-t*Math.cos(s+S*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(s+S*r)*Math.sin(o+_*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(S+v,1-_),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],v=h[p][y],R=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&f.push(_,v,S),(p!==n-1||c<Math.PI)&&f.push(v,R,S)}this.setIndex(f),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Pc=class i extends Lr{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Zn=class i extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,d=new L,u=new L;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(x),d.y=(t+e*Math.cos(g))*Math.sin(x),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,y=(s+1)*f+m;o.push(x,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var et=class extends rs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fp,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function tc(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function WM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Br=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ru=class extends Br{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xf,endingEnd:xf}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yf:r=t,a=2*e-n;break;case vf:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case yf:o=t,c=2*n-e;break;case vf:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,y=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,_=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[l+R]+_*o[c+R]+v*o[d+R];return r}},Cu=class extends Br{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Iu=class extends Br{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},jn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tc(e,this.TimeBufferType),this.values=tc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:tc(t.times,Array),values:tc(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Iu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ru(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ac:e=this.InterpolantFactoryMethodDiscrete;break;case nu:e=this.InterpolantFactoryMethodLinear;break;case Hl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ac;case this.InterpolantFactoryMethodLinear:return nu;case this.InterpolantFactoryMethodSmooth:return Hl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&WM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Hl,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=nu;var Fs=class extends jn{constructor(t,e,n){super(t,e,n)}};Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=ac;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Pu=class extends jn{};Pu.prototype.ValueTypeName="color";var Nu=class extends jn{};Nu.prototype.ValueTypeName="number";var Lu=class extends Br{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ze.slerpFlat(r,0,o,l-a,o,l,c);return r}},Nc=class extends jn{InterpolantFactoryMethodLinear(t){return new Lu(this.times,this.values,this.getValueSize(),t)}};Nc.prototype.ValueTypeName="quaternion";Nc.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends jn{constructor(t,e,n){super(t,e,n)}};Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=ac;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Du=class extends jn{};Du.prototype.ValueTypeName="vector";var Bu=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},qM=new Bu,Fu=class{constructor(t){this.manager=t!==void 0?t:qM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Fu.DEFAULT_MATERIAL_NAME="__DEFAULT";var zs=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},zo=class extends zs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},gh=new ce,vp=new L,_p=new L,Oo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new No,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;vp.setFromMatrixPosition(t.matrixWorld),e.position.copy(vp),_p.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_p),e.updateMatrixWorld(),gh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Uu=class extends Oo{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Cr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Lc=class extends zs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Uu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Mp=new ce,Mo=new L,xh=new L,zu=class extends Oo{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Mo.setFromMatrixPosition(t.matrixWorld),n.position.copy(Mo),xh.copy(n.position),xh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xh),n.updateMatrixWorld(),s.makeTranslation(-Mo.x,-Mo.y,-Mo.z),Mp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mp)}},Fr=class extends zs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ou=class extends Oo{constructor(){super(new gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ho=class extends zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Ou}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Dc=class extends zs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var td="\\[\\]\\.:\\/",XM=new RegExp("["+td+"]","g"),ed="[^"+td+"]",YM="[^"+td.replace("\\.","")+"]",$M=/((?:WC+[\/:])*)/.source.replace("WC",ed),ZM=/(WCOD+)?/.source.replace("WCOD",YM),jM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ed),JM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ed),KM=new RegExp("^"+$M+ZM+jM+JM+"$"),QM=["material","materials","bones","map"],Hu=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(XM,"")}static parseTrackName(t){let e=KM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);QM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Hu;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _S=new Float32Array(1);var wp=new ce,ko=class{constructor(t,e,n=0,s=1/0){this.ray=new Io(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wp),this}intersectObject(t,e=!0,n=[]){return ku(t,this,n,e),n.sort(bp),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ku(t[s],this,n,e);return n.sort(bp),n}};function bp(i,t){return i.distance-t.distance}function ku(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ku(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vu);var as=class i{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);let n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new i);let n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],f=n[7],m=n[8],x=s[0],g=s[1],p=s[2],y=s[3],_=s[4],v=s[5],R=s[6],S=s[7],A=s[8];return r[0]=o*x+a*y+c*R,r[1]=o*g+a*_+c*S,r[2]=o*p+a*v+c*A,r[3]=l*x+h*y+d*R,r[4]=l*g+h*_+d*S,r[5]=l*p+h*v+d*A,r[6]=u*x+f*y+m*R,r[7]=u*g+f*_+m*S,r[8]=u*p+f*v+m*A,e}scale(t,e){e===void 0&&(e=new i);let n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new M);let n=3,s=4,r=[],o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let c=3,l=c,h,d=4,u;do{if(o=l-c,r[o+s*o]===0){for(a=o+1;a<l;a++)if(r[o+s*a]!==0){h=d;do u=d-h,r[u+s*o]+=r[u+s*a];while(--h);break}}if(r[o+s*o]!==0)for(a=o+1;a<l;a++){let f=r[o+s*a]/r[o+s*o];h=d;do u=d-h,r[u+s*a]=u<=o?0:r[u+s*a]-r[u+s*o]*f;while(--h)}}while(--c);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="",e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new i);let e=3,n=6,s=e1,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3,c=a,l,h=n,d;do{if(r=c-a,s[r+n*r]===0){for(o=r+1;o<c;o++)if(s[r+n*o]!==0){l=h;do d=h-l,s[d+n*r]+=s[d+n*o];while(--l);break}}if(s[r+n*r]!==0)for(o=r+1;o<c;o++){let u=s[r+n*o]/s[r+n*r];l=h;do d=h-l,s[d+n*o]=d<=r?0:s[d+n*o]-s[d+n*r]*u;while(--l)}}while(--a);r=2;do{o=r-1;do{let u=s[r+n*o]/s[r+n*r];l=n;do d=n-l,s[d+n*o]=s[d+n*o]-s[d+n*r]*u;while(--l)}while(o--)}while(--r);r=2;do{let u=1/s[r+n*r];l=n;do d=n-l,s[d+n*r]=s[d+n*r]*u;while(--l)}while(r--);r=2;do{o=2;do{if(d=s[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,c=s+s,l=e*o,h=e*a,d=e*c,u=n*a,f=n*c,m=s*c,x=r*o,g=r*a,p=r*c,y=this.elements;return y[3*0+0]=1-(u+m),y[3*0+1]=h-p,y[3*0+2]=d+g,y[3*1+0]=h+p,y[3*1+1]=1-(l+m),y[3*1+2]=f-x,y[3*2+0]=d-g,y[3*2+1]=f+x,y[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new i);let e=this.elements,n=t.elements,s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}},e1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],M=class i{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new i);let n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*r-c*s,e.y=c*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new i(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new i(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new as([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){let r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new i),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new i),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let s=n1,r=1/n;s.set(this.x*r,this.y*r,this.z*r);let o=i1;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Xp),Xp.almostEquals(t,e)}clone(){return new i(this.x,this.y,this.z)}};M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);var n1=new M,i1=new M,Xp=new M,Sn=class i{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,Yp),l=Yp),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new i().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,c=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,c){let l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),s.set(l.x,h.y,h.z),r.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){let n=$p,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(s,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=$p,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(s,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,c=(this.upperBound.x-n.x)*s,l=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),m=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(m<0||f>m)}},Yp=new M,$p=[new M,new M,new M,new M,new M,new M,new M,new M],Wc=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){let r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){let o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},qc=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}},Be=class i{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=s1,s=r1;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+s*l-r*c,e.y=s*h+o*c+r*a-n*l,e.z=r*h+o*l+n*c-s*a,e.w=o*h-n*a-s*c-r*l,e}inverse(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);let o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);let n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*r-c*s,d=l*s+c*n-o*r,u=l*r+o*s-a*n,f=-o*n-a*s-c*r;return e.x=h*l+f*-o+d*-c-u*-a,e.y=d*l+f*-a+u*-o-h*-c,e.z=u*l+f*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r,o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":let h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),s=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,l),s=-Math.PI/2,r=0),n===void 0){let d=o*o,u=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*f),s=Math.asin(2*h),r=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");let r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):s==="YXZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):s==="ZXY"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):s==="ZYX"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):s==="YZX"?(this.x=c*o*a+r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a-c*l*h):s==="XZY"&&(this.x=c*o*a-r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a+c*l*h),this}clone(){return new i(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new i);let s=this.x,r=this.y,o=this.z,a=this.w,c=t.x,l=t.y,h=t.z,d=t.w,u,f,m,x,g;return f=s*c+r*l+o*h+a*d,f<0&&(f=-f,c=-c,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),m=Math.sin(u),x=Math.sin((1-e)*u)/m,g=Math.sin(e*u)/m):(x=1-e,g=e),n.x=x*s+g*c,n.y=x*r+g*l,n.z=x*o+g*h,n.w=x*a+g*d,n}integrate(t,e,n,s){s===void 0&&(s=new i);let r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return s.x+=u*(r*d+o*h-a*l),s.y+=u*(o*d+a*c-r*h),s.z+=u*(a*d+r*l-o*c),s.w+=u*(-r*c-o*l-a*h),s}},s1=new M,r1=new M,o1={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},_t=class i{constructor(t){t===void 0&&(t={}),this.id=i.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};_t.idCounter=0;_t.types=o1;var de=class i{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new Be,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return i.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return i.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new M),n.vsub(t,s),e.conjugate(Zp),Zp.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new M),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new M),e.w*=-1,e.vmult(n,s),e.w*=-1,s}},Zp=new Be,Xc=class i extends _t{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:_t.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let s=new M;for(let r=0;r!==t.length;r++){let o=t[r],a=o.length;for(let c=0;c!==a;c++){let l=(c+1)%a;e[o[c]].vsub(e[o[l]],s),s.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(s)||n[d].almostEquals(s)){h=!0;break}h||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);let e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];i.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){let r=new M,o=new M;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,c,l){let h=new M,d=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),r.vmult(h,h);let x=h.dot(o);x>u&&(u=x,d=m)}let f=[];for(let m=0;m<n.faces[d].length;m++){let x=n.vertices[n.faces[d][m]],g=new M;g.copy(x),r.vmult(g,g),s.vadd(g,g),f.push(g)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,s,r,o,a,c){let l=new M,h=new M,d=new M,u=new M,f=new M,m=new M,x=Number.MAX_VALUE,g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){n.vmult(g.uniqueAxes[p],l);let y=g.testSepAxis(l,t,e,n,s,r);if(y===!1)return!1;y<x&&(x=y,o.copy(l))}else{let p=a?a.length:g.faces.length;for(let y=0;y<p;y++){let _=a?a[y]:y;l.copy(g.faceNormals[_]),n.vmult(l,l);let v=g.testSepAxis(l,t,e,n,s,r);if(v===!1)return!1;v<x&&(x=v,o.copy(l))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],h);let y=g.testSepAxis(h,t,e,n,s,r);if(y===!1)return!1;y<x&&(x=y,o.copy(h))}else{let p=c?c.length:t.faces.length;for(let y=0;y<p;y++){let _=c?c[y]:y;h.copy(t.faceNormals[_]),r.vmult(h,h);let v=g.testSepAxis(h,t,e,n,s,r);if(v===!1)return!1;v<x&&(x=v,o.copy(h))}}for(let p=0;p!==g.uniqueEdges.length;p++){n.vmult(g.uniqueEdges[p],u);for(let y=0;y!==t.uniqueEdges.length;y++)if(r.vmult(t.uniqueEdges[y],f),u.cross(f,m),!m.almostZero()){m.normalize();let _=g.testSepAxis(m,t,e,n,s,r);if(_===!1)return!1;_<x&&(x=_,o.copy(m))}}return s.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){let a=this;i.project(a,t,n,s,nd),i.project(e,t,r,o,id);let c=nd[0],l=nd[1],h=id[0],d=id[1];if(c<d||h<l)return!1;let u=c-d,f=h-l;return u<f?u:f}calculateLocalInertia(t,e){let n=new M,s=new M;this.computeLocalAABB(s,n);let r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){let c=new M,l=new M,h=new M,d=new M,u=new M,f=new M,m=new M,x=new M,g=this,p=[],y=s,_=p,v=-1,R=Number.MAX_VALUE;for(let w=0;w<g.faces.length;w++){c.copy(g.faceNormals[w]),n.vmult(c,c);let P=c.dot(t);P<R&&(R=P,v=w)}if(v<0)return;let S=g.faces[v];S.connectedFaces=[];for(let w=0;w<g.faces.length;w++)for(let P=0;P<g.faces[w].length;P++)S.indexOf(g.faces[w][P])!==-1&&w!==v&&S.connectedFaces.indexOf(w)===-1&&S.connectedFaces.push(w);let A=S.length;for(let w=0;w<A;w++){let P=g.vertices[S[w]],H=g.vertices[S[(w+1)%A]];P.vsub(H,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[v]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(P),n.vmult(f,f),e.vadd(f,f);let N=S.connectedFaces[w];m.copy(this.faceNormals[N]);let B=this.getPlaneConstantOfFace(N);x.copy(m),n.vmult(x,x);let z=B-x.dot(e);for(this.clipFaceAgainstPlane(y,_,x,z);y.length;)y.shift();for(;_.length;)y.push(_.shift())}m.copy(this.faceNormals[v]);let C=this.getPlaneConstantOfFace(v);x.copy(m),n.vmult(x,x);let b=C-x.dot(e);for(let w=0;w<y.length;w++){let P=x.dot(y[w])+b;if(P<=r&&(console.log(`clamped: depth=${P} to minDist=${r}`),P=r),P<=o){let H=y[w];if(P<=1e-6){let N={point:H,normal:x,depth:P};a.push(N)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o,a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];r=n.dot(c)+s;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+s,r<0)if(o<0){let d=new M;d.copy(l),e.push(d)}else{let d=new M;c.lerp(l,r/(r-o),d),e.push(d)}else if(o<0){let d=new M;c.lerp(l,r/(r-o),d),e.push(d),e.push(l)}c=l,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);let n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){let r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);let n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){let r=this.vertices,o,a,c,l,h,d,u=new M;for(let f=0;f<r.length;f++){u.copy(r[f]),e.vmult(u,u),t.vadd(u,u);let m=u;(o===void 0||m.x<o)&&(o=m.x),(l===void 0||m.x>l)&&(l=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(c===void 0||m.z<c)&&(c=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(o,a,c),s.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){let o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){let o=s[r];o.vadd(t,o)}}pointIsInside(t){let e=this.vertices,n=this.faces,s=this.faceNormals,r=null,o=new M;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let c=s[a],l=e[n[a][0]],h=new M;t.vsub(l,h);let d=c.dot(h),u=new M;o.vsub(l,u);let f=c.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(t,e,n,s,r){let o=t.vertices.length,a=c1,c=0,l=0,h=l1,d=t.vertices;h.setZero(),de.vectorToLocalFrame(n,s,e,a),de.pointToLocalFrame(n,s,h,h);let u=h.dot(a);l=c=d[0].dot(a);for(let f=1;f<o;f++){let m=d[f].dot(a);m>c&&(c=m),m<l&&(l=m)}if(l-=u,c-=u,l>c){let f=l;l=c,c=f}r[0]=c,r[1]=l}},nd=[],id=[],a1=new M,c1=new M,l1=new M,Fn=class i extends _t{constructor(t){super({type:_t.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=M,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],c=new Xc({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),i.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){let n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)os.set(r[o][0],r[o][1],r[o][2]),e.vmult(os,os),t.vadd(os,os),n(os.x,os.y,os.z)}calculateWorldAABB(t,e,n,s){let r=this.halfExtents;oi[0].set(r.x,r.y,r.z),oi[1].set(-r.x,r.y,r.z),oi[2].set(-r.x,-r.y,r.z),oi[3].set(-r.x,-r.y,-r.z),oi[4].set(r.x,-r.y,-r.z),oi[5].set(r.x,r.y,-r.z),oi[6].set(-r.x,r.y,-r.z),oi[7].set(r.x,-r.y,r.z);let o=oi[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){let c=oi[a];e.vmult(c,c),t.vadd(c,c);let l=c.x,h=c.y,d=c.z;l>s.x&&(s.x=l),h>s.y&&(s.y=h),d>s.z&&(s.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},os=new M,oi=[new M,new M,new M,new M,new M,new M,new M,new M],xd={DYNAMIC:1,STATIC:2,KINEMATIC:4},yd={AWAKE:0,SLEEPY:1,SLEEPING:2},Pt=class i extends qc{constructor(t){t===void 0&&(t={}),super(),this.id=i.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?i.STATIC:i.DYNAMIC,typeof t.type==typeof i.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=i.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new Be,this.initQuaternion=new Be,this.previousQuaternion=new Be,this.interpolatedQuaternion=new Be,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new as,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new as,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Sn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=i.AWAKE,this.wakeUpAfterNarrowphase=!1,t===i.SLEEPING&&this.dispatchEvent(i.wakeupEvent)}sleep(){this.sleepState=i.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===i.AWAKE&&n<s?(this.sleepState=i.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(i.sleepyEvent)):e===i.SLEEPY&&n>s?this.wakeUp():e===i.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(i.sleepEvent))}}updateSolveMassProperties(){this.sleepState===i.SLEEPING||this.type===i.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){let s=new M,r=new Be;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,s=0;for(let r=0;r!==n;r++){let o=t[r];o.updateBoundingSphereRadius();let a=e[r].length(),c=o.boundingSphereRadius;a+c>s&&(s=a+c)}this.boundingRadius=s}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=h1,o=u1,a=this.quaternion,c=this.aabb,l=d1;for(let h=0;h!==s;h++){let d=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=f1,s=p1;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=g1;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==i.DYNAMIC)return;let n=x1,s=y1;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===i.DYNAMIC&&(this.sleepState===i.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=e,s=v1;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);let r=_1;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==i.DYNAMIC)return;let n=M1,s=w1;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){let t=b1;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Fn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===i.DYNAMIC||this.type===i.KINEMATIC)||this.sleepState===i.SLEEPING)return;let s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;s.x+=a.x*f*u.x,s.y+=a.y*f*u.y,s.z+=a.z*f*u.z;let m=d.elements,x=this.angularFactor,g=c.x*x.x,p=c.y*x.y,y=c.z*x.z;r.x+=t*(m[0]*g+m[1]*p+m[2]*y),r.y+=t*(m[3]*g+m[4]*p+m[5]*y),r.z+=t*(m[6]*g+m[7]*p+m[8]*y),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};Pt.idCounter=0;Pt.COLLIDE_EVENT_NAME="collide";Pt.DYNAMIC=xd.DYNAMIC;Pt.STATIC=xd.STATIC;Pt.KINEMATIC=xd.KINEMATIC;Pt.AWAKE=yd.AWAKE;Pt.SLEEPY=yd.SLEEPY;Pt.SLEEPING=yd.SLEEPING;Pt.wakeupEvent={type:"wakeup"};Pt.sleepyEvent={type:"sleepy"};Pt.sleepEvent={type:"sleep"};var h1=new M,u1=new Be,d1=new Sn,f1=new as,p1=new as,m1=new as,g1=new M,x1=new M,y1=new M,v1=new M,_1=new M,M1=new M,w1=new M,b1=new M,Yc=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Pt.STATIC||t.sleepState===Pt.SLEEPING)&&(e.type&Pt.STATIC||e.sleepState===Pt.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){let r=E1;e.position.vsub(t.position,r);let o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){let n=S1,s=T1,r=A1,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let c=s[a].id,l=r[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];t.push(s[l]),e.push(r[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new M;t.position.vsub(e.position,n);let s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},E1=new M;new M;new Be;new M;var S1={keys:[]},T1=[],A1=[];new M;var MS=new M;new M;var cd=class extends Yc{constructor(){super()}collisionPairs(t,e,n){let s=t.bodies,r=s.length,o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=s[c],a=s[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){let r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}},Gr=class{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}},am,cm,lm,hm,um,dm,fm,vd={CLOSEST:1,ANY:2,ALL:4};am=_t.types.SPHERE;cm=_t.types.PLANE;lm=_t.types.BOX;hm=_t.types.CYLINDER;um=_t.types.CONVEXPOLYHEDRON;dm=_t.types.HEIGHTFIELD;fm=_t.types.TRIMESH;var Bn=class i{get[am](){return this._intersectSphere}get[cm](){return this._intersectPlane}get[lm](){return this._intersectBox}get[hm](){return this._intersectConvex}get[um](){return this._intersectConvex}get[dm](){return this._intersectHeightfield}get[fm](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=i.ANY,this.result=new Gr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||i.ANY,this.result=e.result||new Gr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(jp),sd.length=0,t.broadphase.aabbQuery(t,jp,sd),this.intersectBodies(sd),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;let s=R1,r=C1;for(let o=0,a=t.shapes.length;o<a;o++){let c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(c,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){let r=this.from;if(q1(r,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){let o=this.from,a=this.to,c=this.direction,l=new M(0,0,1);e.vmult(l,l);let h=new M;o.vsub(n,h);let d=h.dot(l);a.vsub(n,h);let u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;let f=l.dot(c);if(Math.abs(f)<this.precision)return;let m=new M,x=new M,g=new M;o.vsub(n,m);let p=-l.dot(m)/f;c.scale(p,x),o.vadd(x,g),this.reportIntersection(l,g,r,s,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;let o=I1;o.from.copy(this.from),o.to.copy(this.to),de.pointToLocalFrame(n,e,o.from,o.from),de.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();let a=P1,c,l,h,d;c=l=0,h=d=t.data.length-1;let u=new Sn;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<h;f++)for(let m=l;m<d;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,m,!1),de.pointToWorldFrame(n,e,t.pillarOffset,Oc),this._intersectConvex(t.pillarConvex,e,Oc,s,r,Jp),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),de.pointToWorldFrame(n,e,t.pillarOffset,Oc),this._intersectConvex(t.pillarConvex,e,Oc,s,r,Jp)}}}_intersectSphere(t,e,n,s,r){let o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,f=N1,m=L1;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,s,-1);else{let x=(-h-Math.sqrt(u))/(2*l),g=(-h+Math.sqrt(u))/(2*l);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,s,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(o.lerp(a,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){let a=D1,c=Kp,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,m=this.from,x=this.to,g=m.distanceTo(x),p=l?l.length:h.length,y=this.result;for(let _=0;!y.shouldStop&&_<p;_++){let v=l?l[_]:_,R=h[v],S=u[v],A=e,C=n;c.copy(d[R[0]]),A.vmult(c,c),c.vadd(C,c),c.vsub(m,c),A.vmult(S,a);let b=f.dot(a);if(Math.abs(b)<this.precision)continue;let w=a.dot(c)/b;if(!(w<0)){f.scale(w,yn),yn.vadd(m,yn),Jn.copy(d[R[0]]),A.vmult(Jn,Jn),C.vadd(Jn,Jn);for(let P=1;!y.shouldStop&&P<R.length-1;P++){ai.copy(d[R[P]]),ci.copy(d[R[P+1]]),A.vmult(ai,ai),A.vmult(ci,ci),C.vadd(ai,ai),C.vadd(ci,ci);let H=yn.distanceTo(m);!(i.pointInTriangle(yn,Jn,ai,ci)||i.pointInTriangle(yn,ai,Jn,ci))||H>g||this.reportIntersection(a,yn,r,s,v)}}}}_intersectTrimesh(t,e,n,s,r,o){let a=U1,c=G1,l=W1,h=Kp,d=z1,u=O1,f=H1,m=V1,x=k1,g=t.indices;t.vertices;let p=this.from,y=this.to,_=this.direction;l.position.copy(n),l.quaternion.copy(e),de.vectorToLocalFrame(n,e,_,d),de.pointToLocalFrame(n,e,p,u),de.pointToLocalFrame(n,e,y,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();let v=u.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let R=0,S=c.length;!this.result.shouldStop&&R!==S;R++){let A=c[R];t.getNormal(A,a),t.getVertex(g[A*3],Jn),Jn.vsub(u,h);let C=d.dot(a),b=a.dot(h)/C;if(b<0)continue;d.scale(b,yn),yn.vadd(u,yn),t.getVertex(g[A*3+1],ai),t.getVertex(g[A*3+2],ci);let w=yn.distanceSquared(u);!(i.pointInTriangle(yn,ai,Jn,ci)||i.pointInTriangle(yn,Jn,ai,ci))||w>v||(de.vectorToWorldFrame(e,a,x),de.pointToWorldFrame(n,e,yn,m),this.reportIntersection(x,m,r,s,A))}c.length=0}reportIntersection(t,e,n,s,r){let o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case i.ALL:this.hasHit=!0,l.set(o,a,t,e,n,s,c),l.hasHit=!0,this.callback(l);break;case i.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,s,c));break;case i.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,s,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,Hs),n.vsub(e,Go),t.vsub(e,rd);let r=Hs.dot(Hs),o=Hs.dot(Go),a=Hs.dot(rd),c=Go.dot(Go),l=Go.dot(rd),h,d;return(h=c*a-o*l)>=0&&(d=r*l-o*a)>=0&&h+d<r*c-o*o}};Bn.CLOSEST=vd.CLOSEST;Bn.ANY=vd.ANY;Bn.ALL=vd.ALL;var jp=new Sn,sd=[],Go=new M,rd=new M,R1=new M,C1=new Be,yn=new M,Jn=new M,ai=new M,ci=new M;new M;new Gr;var Jp={faceList:[0]},Oc=new M,I1=new Bn,P1=[],N1=new M,L1=new M,D1=new M,B1=new M,F1=new M,Kp=new M,U1=new M,z1=new M,O1=new M,H1=new M,k1=new M,V1=new M;new Sn;var G1=[],W1=new de,Hs=new M,Hc=new M;function q1(i,t,e){e.vsub(i,Hs);let n=Hs.dot(t);return t.scale(n,Hc),Hc.vadd(i,Hc),e.distanceTo(Hc)}var $c=class i extends Yc{static checkBounds(t,e,n){let s,r;n===0?(s=t.position.x,r=e.position.x):n===1?(s=t.position.y,r=e.position.y):n===2&&(s=t.position.z,r=e.position.z);let o=t.boundingRadius,a=e.boundingRadius,c=s+o;return r-a<c}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;let e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{let s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){let s=this.axisList,r=s.length,o=this.axisIndex,a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let l=s[a];for(c=a+1;c<r;c++){let h=s[c];if(this.needBroadphaseCollision(l,h)){if(!i.checkBounds(l,h,o))break;this.intersectionTest(l,h,e,n)}}}}sortList(){let t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){let r=t[s];r.aabbNeedsUpdate&&r.updateAABB()}e===0?i.insertionSortX(t):e===1?i.insertionSortY(t):e===2&&i.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,r=0,o=0,a=this.axisList,c=a.length,l=1/c;for(let f=0;f!==c;f++){let m=a[f],x=m.position.x;t+=x,e+=x*x;let g=m.position.y;n+=g,s+=g*g;let p=m.position.z;r+=p,o+=p*p}let h=e-t*t*l,d=s-n*n*l,u=o-r*r*l;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let s=this.axisIndex,r="x";s===1&&(r="y"),s===2&&(r="z");let o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){let c=o[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(e)&&n.push(c)}return n}},Zc=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},jc=class i{constructor(t,e,n){n===void 0&&(n={}),n=Zc.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=i.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};jc.idCounter=0;var Jc=class{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},ks=class i{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=i.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Jc,this.jacobianElementB=new Jc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){let s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,c=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,c=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,c=s.torque,l=n.invMassSolve,h=s.invMassSolve;return r.scale(l,Qp),a.scale(h,tm),n.invInertiaWorldSolve.vmult(o,em),s.invInertiaWorldSolve.vmult(c,nm),t.multiplyVectors(Qp,em)+e.multiplyVectors(tm,nm)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,c=s.invInertiaWorldSolve,l=r+o;return a.vmult(t.rotational,kc),l+=kc.dot(t.rotational),c.vmult(e.rotational,kc),l+=kc.dot(e.rotational),l}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=X1;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};ks.idCounter=0;var Qp=new M,tm=new M,em=new M,nm=new M,kc=new M,X1=new M,Vr=class extends ks{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){let e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,c=Y1,l=$1,h=s.velocity,d=s.angularVelocity;s.force,s.torque;let u=r.velocity,f=r.angularVelocity;r.force,r.torque;let m=Z1,x=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(x.spatial),c.negate(x.rotational),g.spatial.copy(p),g.rotational.copy(l),m.copy(r.position),m.vadd(a,m),m.vsub(s.position,m),m.vsub(o,m);let y=p.dot(m),_=this.restitution+1,v=_*u.dot(p)-_*h.dot(p)+f.dot(l)-d.dot(c),R=this.computeGiMf();return-y*e-v*n-t*R}getImpactVelocityAlongNormal(){let t=j1,e=J1,n=K1,s=Q1,r=tw;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}},Y1=new M,$1=new M,Z1=new M,j1=new M,J1=new M,K1=new M,Q1=new M,tw=new M,ld=class extends jc{constructor(t,e,n,s,r){e===void 0&&(e=new M),s===void 0&&(s=new M),r===void 0&&(r=1e6),super(t,n),this.pivotA=e.clone(),this.pivotB=s.clone();let o=this.equationX=new Vr(t,n),a=this.equationY=new Vr(t,n),c=this.equationZ=new Vr(t,n);this.equations.push(o,a,c),o.minForce=a.minForce=c.minForce=-r,o.maxForce=a.maxForce=c.maxForce=r,o.ni.set(1,0,0),a.ni.set(0,1,0),c.ni.set(0,0,1)}update(){let t=this.bodyA,e=this.bodyB,n=this.equationX,s=this.equationY,r=this.equationZ;t.quaternion.vmult(this.pivotA,n.ri),e.quaternion.vmult(this.pivotB,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),r.ri.copy(n.ri),r.rj.copy(n.rj)}},hd=class extends ks{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-s,s),this.axisA=n.axisA?n.axisA.clone():new M(1,0,0),this.axisB=n.axisB?n.axisB.clone():new M(0,1,0),this.angle=typeof n.angle<"u"?n.angle:0}computeB(t){let e=this.a,n=this.b,s=this.axisA,r=this.axisB,o=ew,a=nw,c=this.jacobianElementA,l=this.jacobianElementB;s.cross(r,o),r.cross(s,a),c.rotational.copy(a),l.rotational.copy(o);let h=Math.cos(this.angle)-s.dot(r),d=this.computeGW(),u=this.computeGiMf();return-h*e-d*n-t*u}},ew=new M,nw=new M,ud=class extends ks{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-s,s),this.axisA=n.axisA?n.axisA.clone():new M(1,0,0),this.axisB=n.axisB?n.axisB.clone():new M(0,1,0),this.maxAngle=Math.PI/2}computeB(t){let e=this.a,n=this.b,s=this.axisA,r=this.axisB,o=iw,a=sw,c=this.jacobianElementA,l=this.jacobianElementB;s.cross(r,o),r.cross(s,a),c.rotational.copy(a),l.rotational.copy(o);let h=Math.cos(this.maxAngle)-s.dot(r),d=this.computeGW(),u=this.computeGiMf();return-h*e-d*n-t*u}},iw=new M,sw=new M,Kc=class extends ld{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6,r=n.pivotA?n.pivotA.clone():new M,o=n.pivotB?n.pivotB.clone():new M;super(t,r,e,o,s),this.axisA=n.axisA?n.axisA.clone():new M,this.axisB=n.axisB?n.axisB.clone():new M,this.collideConnected=!!n.collideConnected,this.angle=typeof n.angle<"u"?n.angle:0;let a=this.coneEquation=new hd(t,e,n),c=this.twistEquation=new ud(t,e,n);this.twistAngle=typeof n.twistAngle<"u"?n.twistAngle:0,a.maxForce=0,a.minForce=-s,c.maxForce=0,c.minForce=-s,this.equations.push(a,c)}update(){let t=this.bodyA,e=this.bodyB,n=this.coneEquation,s=this.twistEquation;super.update(),t.vectorToWorldFrame(this.axisA,n.axisA),e.vectorToWorldFrame(this.axisB,n.axisB),this.axisA.tangents(s.axisA,s.axisA),t.vectorToWorldFrame(s.axisA,s.axisA),this.axisB.tangents(s.axisB,s.axisB),e.vectorToWorldFrame(s.axisB,s.axisB),n.angle=this.angle,s.maxAngle=this.twistAngle}};new M;new M;var wS=new M,bS=new M;var ES=new M,SS=new M,Qc=class extends ks{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,s=this.rj,r=rw,o=ow,a=this.t;n.cross(a,r),s.cross(a,o);let c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),r.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);let h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}},rw=new M,ow=new M,li=class i{constructor(t,e,n){n=Zc.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=i.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};li.idCounter=0;var Di=class i{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=i.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};Di.idCounter=0;var TS=new M,AS=new M,RS=new M,CS=new M,IS=new M,PS=new M,NS=new M,LS=new M,DS=new M,BS=new M,FS=new M;var US=new M,zS=new M;new M;new M;new M;var OS=new M,HS=new M,kS=new M;new Bn;new M;var VS=new M,GS=new M,WS=[new M(1,0,0),new M(0,1,0),new M(0,0,1)],qS=new M;var XS=new M,YS=new M,$S=new M;var ZS=new M,jS=new M,JS=new M,KS=new M;var QS=new M,tT=new M,eT=new M;var Wr=class extends _t{constructor(t){if(super({type:_t.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new M);let n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,s){let r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){let c=o[a];n[c]=t[c]-r,s[c]=t[c]+r}}};var nT=new M,iT=new M;var sT=new M,rT=new M,oT=new M,aT=new M,cT=new M,lT=new M,hT=new M,Vs=class extends Xc{constructor(t,e,n,s){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),s===void 0&&(s=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");let r=s,o=[],a=[],c=[],l=[],h=[],d=Math.cos,u=Math.sin;o.push(new M(-e*u(0),-n*.5,e*d(0))),l.push(0),o.push(new M(-t*u(0),n*.5,t*d(0))),h.push(1);for(let m=0;m<r;m++){let x=2*Math.PI/r*(m+1),g=2*Math.PI/r*(m+.5);m<r-1?(o.push(new M(-e*u(x),-n*.5,e*d(x))),l.push(2*m+2),o.push(new M(-t*u(x),n*.5,t*d(x))),h.push(2*m+3),c.push([2*m,2*m+1,2*m+3,2*m+2])):c.push([2*m,2*m+1,1,0]),(r%2===1||m<r/2)&&a.push(new M(-u(g),0,d(g)))}c.push(l),a.push(new M(0,1,0));let f=[];for(let m=0;m<h.length;m++)f.push(h[h.length-m-1]);c.push(f),super({vertices:o,faces:c,axes:a}),this.type=_t.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=s}};var uT=new M;var dT=new M,fT=new M,pT=new M,mT=new M,gT=new M,xT=new M,yT=new M,vT=new M,_T=new M;var MT=new M,wT=new Sn;var bT=new M,ET=new Sn,ST=new M,TT=new M,AT=new M,RT=new M,CT=new M,IT=new M,PT=new M,NT=new Sn,LT=new M,DT=new de,BT=new Sn,dd=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},Yo=class extends dd{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t,d,u,f,m,x,g;if(a!==0)for(let v=0;v!==l;v++)c[v].updateSolveMassProperties();let p=cw,y=lw,_=aw;p.length=a,y.length=a,_.length=a;for(let v=0;v!==a;v++){let R=o[v];_[v]=0,y[v]=R.computeB(h),p[v]=1/R.computeC()}if(a!==0){for(let S=0;S!==l;S++){let A=c[S],C=A.vlambda,b=A.wlambda;C.set(0,0,0),b.set(0,0,0)}for(n=0;n!==s;n++){m=0;for(let S=0;S!==a;S++){let A=o[S];d=y[S],u=p[S],g=_[S],x=A.computeGWlambda(),f=u*(d-x-A.eps*g),g+f<A.minForce?f=A.minForce-g:g+f>A.maxForce&&(f=A.maxForce-g),_[S]+=f,m+=f>0?f:-f,A.addToWlambda(f)}if(m*m<r)break}for(let S=0;S!==l;S++){let A=c[S],C=A.velocity,b=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),C.vadd(A.vlambda,C),A.wlambda.vmul(A.angularFactor,A.wlambda),b.vadd(A.wlambda,b)}let v=o.length,R=1/h;for(;v--;)o[v].multiplier=_[v]*R}return n}},aw=[],cw=[],lw=[];var FT=Pt.STATIC;var fd=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},pd=class extends fd{constructor(){super(...arguments),this.type=M}constructObject(){return new M}},be={sphereSphere:_t.types.SPHERE,spherePlane:_t.types.SPHERE|_t.types.PLANE,boxBox:_t.types.BOX|_t.types.BOX,sphereBox:_t.types.SPHERE|_t.types.BOX,planeBox:_t.types.PLANE|_t.types.BOX,convexConvex:_t.types.CONVEXPOLYHEDRON,sphereConvex:_t.types.SPHERE|_t.types.CONVEXPOLYHEDRON,planeConvex:_t.types.PLANE|_t.types.CONVEXPOLYHEDRON,boxConvex:_t.types.BOX|_t.types.CONVEXPOLYHEDRON,sphereHeightfield:_t.types.SPHERE|_t.types.HEIGHTFIELD,boxHeightfield:_t.types.BOX|_t.types.HEIGHTFIELD,convexHeightfield:_t.types.CONVEXPOLYHEDRON|_t.types.HEIGHTFIELD,sphereParticle:_t.types.PARTICLE|_t.types.SPHERE,planeParticle:_t.types.PLANE|_t.types.PARTICLE,boxParticle:_t.types.BOX|_t.types.PARTICLE,convexParticle:_t.types.PARTICLE|_t.types.CONVEXPOLYHEDRON,cylinderCylinder:_t.types.CYLINDER,sphereCylinder:_t.types.SPHERE|_t.types.CYLINDER,planeCylinder:_t.types.PLANE|_t.types.CYLINDER,boxCylinder:_t.types.BOX|_t.types.CYLINDER,convexCylinder:_t.types.CONVEXPOLYHEDRON|_t.types.CYLINDER,heightfieldCylinder:_t.types.HEIGHTFIELD|_t.types.CYLINDER,particleCylinder:_t.types.PARTICLE|_t.types.CYLINDER,sphereTrimesh:_t.types.SPHERE|_t.types.TRIMESH,planeTrimesh:_t.types.PLANE|_t.types.TRIMESH},md=class{get[be.sphereSphere](){return this.sphereSphere}get[be.spherePlane](){return this.spherePlane}get[be.boxBox](){return this.boxBox}get[be.sphereBox](){return this.sphereBox}get[be.planeBox](){return this.planeBox}get[be.convexConvex](){return this.convexConvex}get[be.sphereConvex](){return this.sphereConvex}get[be.planeConvex](){return this.planeConvex}get[be.boxConvex](){return this.boxConvex}get[be.sphereHeightfield](){return this.sphereHeightfield}get[be.boxHeightfield](){return this.boxHeightfield}get[be.convexHeightfield](){return this.convexHeightfield}get[be.sphereParticle](){return this.sphereParticle}get[be.planeParticle](){return this.planeParticle}get[be.boxParticle](){return this.boxParticle}get[be.convexParticle](){return this.convexParticle}get[be.cylinderCylinder](){return this.convexConvex}get[be.sphereCylinder](){return this.sphereConvex}get[be.planeCylinder](){return this.planeConvex}get[be.boxCylinder](){return this.boxConvex}get[be.convexCylinder](){return this.convexConvex}get[be.heightfieldCylinder](){return this.heightfieldCylinder}get[be.particleCylinder](){return this.particleCylinder}get[be.sphereTrimesh](){return this.sphereTrimesh}get[be.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new pd,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Vr(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||t.material,h=s.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){let n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,h=r.material||n.material,d=o.material||s.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){let u=l*(a.frictionGravity||a.gravity).length(),f=n.invMass+s.invMass;f>0&&(f=1/f);let m=this.frictionEquationPool,x=m.length?m.pop():new Qc(n,s,u*f),g=m.length?m.pop():new Qc(n,s,u*f);return x.bi=g.bi=n,x.bj=g.bj=s,x.minForce=g.minForce=-u*f,x.maxForce=g.maxForce=u*f,x.ri.copy(t.ri),x.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(x.t,g.t),x.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),g.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),x.enabled=g.enabled=t.enabled,e.push(x,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Os.setZero(),Hr.setZero(),kr.setZero();let r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Os.vadd(e.ni,Os),Hr.vadd(e.ri,Hr),kr.vadd(e.rj,kr)):(Os.vsub(e.ni,Os),Hr.vadd(e.rj,Hr),kr.vadd(e.ri,kr));let o=1/t;Hr.scale(o,n.ri),kr.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Os.normalize(),Os.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;let c=dw,l=fw,h=hw,d=uw;for(let u=0,f=t.length;u!==f;u++){let m=t[u],x=e[u],g=null;m.material&&x.material&&(g=n.getContactMaterial(m.material,x.material)||null);let p=m.type&Pt.KINEMATIC&&x.type&Pt.STATIC||m.type&Pt.STATIC&&x.type&Pt.KINEMATIC||m.type&Pt.KINEMATIC&&x.type&Pt.KINEMATIC;for(let y=0;y<m.shapes.length;y++){m.quaternion.mult(m.shapeOrientations[y],c),m.quaternion.vmult(m.shapeOffsets[y],h),h.vadd(m.position,h);let _=m.shapes[y];for(let v=0;v<x.shapes.length;v++){x.quaternion.mult(x.shapeOrientations[v],l),x.quaternion.vmult(x.shapeOffsets[v],d),d.vadd(x.position,d);let R=x.shapes[v];if(!(_.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+R.boundingSphereRadius)continue;let S=null;_.material&&R.material&&(S=n.getContactMaterial(_.material,R.material)||null),this.currentContactMaterial=S||g||n.defaultContactMaterial;let A=_.type|R.type,C=this[A];if(C){let b=!1;_.type<R.type?b=C.call(this,_,R,h,d,c,l,m,x,_,R,p):b=C.call(this,R,_,d,h,l,c,x,m,_,R,p),b&&p&&(n.shapeOverlapKeeper.set(_.id,R.id),n.bodyOverlapKeeper.set(m.id,x.id))}}}}}sphereSphere(t,e,n,s,r,o,a,c,l,h,d){if(d)return n.distanceSquared(s)<(t.radius+e.radius)**2;let u=this.createContactEquation(a,c,t,e,l,h);s.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(s,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,c,l,h,d){let u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(s,Vc),u.ni.scale(u.ni.dot(Vc),im),Vc.vsub(im,u.rj),-Vc.dot(u.ni)<=t.radius){if(d)return!0;let f=u.ri,m=u.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(s,m),m.vsub(c.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,c,t,e,d)}sphereBox(t,e,n,s,r,o,a,c,l,h,d){let u=this.v3pool,f=Ow;n.vsub(s,Gc),e.getSideNormals(f,o);let m=t.radius,x=!1,g=kw,p=Vw,y=Gw,_=null,v=0,R=0,S=0,A=null;for(let D=0,J=f.length;D!==J&&x===!1;D++){let V=Fw;V.copy(f[D]);let j=V.length();V.normalize();let ht=Gc.dot(V);if(ht<j+m&&ht>0){let pt=Uw,ot=zw;pt.copy(f[(D+1)%3]),ot.copy(f[(D+2)%3]);let Ft=pt.length(),X=ot.length();pt.normalize(),ot.normalize();let rt=Gc.dot(pt),wt=Gc.dot(ot);if(rt<Ft&&rt>-Ft&&wt<X&&wt>-X){let ut=Math.abs(ht-j-m);if((A===null||ut<A)&&(A=ut,R=rt,S=wt,_=j,g.copy(V),p.copy(pt),y.copy(ot),v++,d))return!0}}}if(v){x=!0;let D=this.createContactEquation(a,c,t,e,l,h);g.scale(-m,D.ri),D.ni.copy(g),D.ni.negate(D.ni),g.scale(_,g),p.scale(R,p),g.vadd(p,g),y.scale(S,y),g.vadd(y,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.vadd(s,D.rj),D.rj.vsub(c.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let C=u.get(),b=Hw;for(let D=0;D!==2&&!x;D++)for(let J=0;J!==2&&!x;J++)for(let V=0;V!==2&&!x;V++)if(C.set(0,0,0),D?C.vadd(f[0],C):C.vsub(f[0],C),J?C.vadd(f[1],C):C.vsub(f[1],C),V?C.vadd(f[2],C):C.vsub(f[2],C),s.vadd(C,b),b.vsub(n,b),b.lengthSquared()<m*m){if(d)return!0;x=!0;let j=this.createContactEquation(a,c,t,e,l,h);j.ri.copy(b),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(m,j.ri),j.rj.copy(C),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(s,j.rj),j.rj.vsub(c.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}u.release(C),C=null;let w=u.get(),P=u.get(),H=u.get(),N=u.get(),B=u.get(),z=f.length;for(let D=0;D!==z&&!x;D++)for(let J=0;J!==z&&!x;J++)if(D%3!==J%3){f[J].cross(f[D],w),w.normalize(),f[D].vadd(f[J],P),H.copy(n),H.vsub(P,H),H.vsub(s,H);let V=H.dot(w);w.scale(V,N);let j=0;for(;j===D%3||j===J%3;)j++;B.copy(n),B.vsub(N,B),B.vsub(P,B),B.vsub(s,B);let ht=Math.abs(V),pt=B.length();if(ht<f[j].length()&&pt<m){if(d)return!0;x=!0;let ot=this.createContactEquation(a,c,t,e,l,h);P.vadd(N,ot.rj),ot.rj.copy(ot.rj),B.negate(ot.ni),ot.ni.normalize(),ot.ri.copy(ot.rj),ot.ri.vadd(s,ot.ri),ot.ri.vsub(n,ot.ri),ot.ri.normalize(),ot.ri.scale(m,ot.ri),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),ot.rj.vadd(s,ot.rj),ot.rj.vsub(c.position,ot.rj),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult)}}u.release(w,P,H,N,B)}planeBox(t,e,n,s,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,c,t,e,d)}convexConvex(t,e,n,s,r,o,a,c,l,h,d,u,f){let m=sb;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,m,u,f)){let x=[],g=rb;t.clipAgainstHull(n,r,e,s,o,m,-100,100,x);let p=0;for(let y=0;y!==x.length;y++){if(d)return!0;let _=this.createContactEquation(a,c,t,e,l,h),v=_.ri,R=_.rj;m.negate(_.ni),x[y].normal.negate(g),g.scale(x[y].depth,g),x[y].point.vadd(g,v),R.copy(x[y].point),v.vsub(n,v),R.vsub(s,R),v.vadd(n,v),v.vsub(a.position,v),R.vadd(s,R),R.vsub(c.position,R),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,s,r,o,a,c,l,h,d){let u=this.v3pool;n.vsub(s,Ww);let f=e.faceNormals,m=e.faces,x=e.vertices,g=t.radius,p=!1;for(let y=0;y!==x.length;y++){let _=x[y],v=$w;o.vmult(_,v),s.vadd(v,v);let R=Yw;if(v.vsub(n,R),R.lengthSquared()<g*g){if(d)return!0;p=!0;let S=this.createContactEquation(a,c,t,e,l,h);S.ri.copy(R),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(g,S.ri),v.vsub(s,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(s,S.rj),S.rj.vsub(c.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let y=0,_=m.length;y!==_&&p===!1;y++){let v=f[y],R=m[y],S=Zw;o.vmult(v,S);let A=jw;o.vmult(x[R[0]],A),A.vadd(s,A);let C=Jw;S.scale(-g,C),n.vadd(C,C);let b=Kw;C.vsub(A,b);let w=b.dot(S),P=Qw;if(n.vsub(A,P),w<0&&P.dot(S)>0){let H=[];for(let N=0,B=R.length;N!==B;N++){let z=u.get();o.vmult(x[R[N]],z),s.vadd(z,z),H.push(z)}if(Bw(H,S,n)){if(d)return!0;p=!0;let N=this.createContactEquation(a,c,t,e,l,h);S.scale(-g,N.ri),S.negate(N.ni);let B=u.get();S.scale(-w,B);let z=u.get();S.scale(-g,z),n.vsub(s,N.rj),N.rj.vadd(z,N.rj),N.rj.vadd(B,N.rj),N.rj.vadd(s,N.rj),N.rj.vsub(c.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),u.release(B),u.release(z),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let D=0,J=H.length;D!==J;D++)u.release(H[D]);return}else for(let N=0;N!==R.length;N++){let B=u.get(),z=u.get();o.vmult(x[R[(N+1)%R.length]],B),o.vmult(x[R[(N+2)%R.length]],z),s.vadd(B,B),s.vadd(z,z);let D=qw;z.vsub(B,D);let J=Xw;D.unit(J);let V=u.get(),j=u.get();n.vsub(B,j);let ht=j.dot(J);J.scale(ht,V),V.vadd(B,V);let pt=u.get();if(V.vsub(n,pt),ht>0&&ht*ht<D.lengthSquared()&&pt.lengthSquared()<g*g){if(d)return!0;let ot=this.createContactEquation(a,c,t,e,l,h);V.vsub(s,ot.rj),V.vsub(n,ot.ni),ot.ni.normalize(),ot.ni.scale(g,ot.ri),ot.rj.vadd(s,ot.rj),ot.rj.vsub(c.position,ot.rj),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult);for(let Ft=0,X=H.length;Ft!==X;Ft++)u.release(H[Ft]);u.release(B),u.release(z),u.release(V),u.release(pt),u.release(j);return}u.release(B),u.release(z),u.release(V),u.release(pt),u.release(j)}for(let N=0,B=H.length;N!==B;N++)u.release(H[N])}}}planeConvex(t,e,n,s,r,o,a,c,l,h,d){let u=tb,f=eb;f.set(0,0,1),r.vmult(f,f);let m=0,x=nb;for(let g=0;g!==e.vertices.length;g++)if(u.copy(e.vertices[g]),o.vmult(u,u),s.vadd(u,u),u.vsub(n,x),f.dot(x)<=0){if(d)return!0;let y=this.createContactEquation(a,c,t,e,l,h),_=ib;f.scale(f.dot(x),_),u.vsub(_,_),_.vsub(n,y.ri),y.ni.copy(f),u.vsub(s,y.rj),y.ri.vadd(n,y.ri),y.ri.vsub(a.position,y.ri),y.rj.vadd(s,y.rj),y.rj.vsub(c.position,y.rj),this.result.push(y),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,s,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,c,t,e,d)}sphereHeightfield(t,e,n,s,r,o,a,c,l,h,d){let u=e.data,f=t.radius,m=e.elementSize,x=xb,g=gb;de.pointToLocalFrame(s,o,n,g);let p=Math.floor((g.x-f)/m)-1,y=Math.ceil((g.x+f)/m)+1,_=Math.floor((g.y-f)/m)-1,v=Math.ceil((g.y+f)/m)+1;if(y<0||v<0||p>u.length||_>u[0].length)return;p<0&&(p=0),y<0&&(y=0),_<0&&(_=0),v<0&&(v=0),p>=u.length&&(p=u.length-1),y>=u.length&&(y=u.length-1),v>=u[0].length&&(v=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);let R=[];e.getRectMinMax(p,_,y,v,R);let S=R[0],A=R[1];if(g.z-f>A||g.z+f<S)return;let C=this.result;for(let b=p;b<y;b++)for(let w=_;w<v;w++){let P=C.length,H=!1;if(e.getConvexTrianglePillar(b,w,!1),de.pointToWorldFrame(s,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,x,r,o,a,c,t,e,d)),d&&H||(e.getConvexTrianglePillar(b,w,!0),de.pointToWorldFrame(s,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,x,r,o,a,c,t,e,d)),d&&H))return!0;if(C.length-P>2)return}}boxHeightfield(t,e,n,s,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,c,t,e,d)}convexHeightfield(t,e,n,s,r,o,a,c,l,h,d){let u=e.data,f=e.elementSize,m=t.boundingSphereRadius,x=pb,g=mb,p=fb;de.pointToLocalFrame(s,o,n,p);let y=Math.floor((p.x-m)/f)-1,_=Math.ceil((p.x+m)/f)+1,v=Math.floor((p.y-m)/f)-1,R=Math.ceil((p.y+m)/f)+1;if(_<0||R<0||y>u.length||v>u[0].length)return;y<0&&(y=0),_<0&&(_=0),v<0&&(v=0),R<0&&(R=0),y>=u.length&&(y=u.length-1),_>=u.length&&(_=u.length-1),R>=u[0].length&&(R=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);let S=[];e.getRectMinMax(y,v,_,R,S);let A=S[0],C=S[1];if(!(p.z-m>C||p.z+m<A))for(let b=y;b<_;b++)for(let w=v;w<R;w++){let P=!1;if(e.getConvexTrianglePillar(b,w,!1),de.pointToWorldFrame(s,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,x,r,o,a,c,null,null,d,g,null)),d&&P||(e.getConvexTrianglePillar(b,w,!0),de.pointToWorldFrame(s,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,x,r,o,a,c,null,null,d,g,null)),d&&P))return!0}}sphereParticle(t,e,n,s,r,o,a,c,l,h,d){let u=lb;if(u.set(0,0,1),s.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;let m=this.createContactEquation(c,a,e,t,l,h);u.normalize(),m.rj.copy(u),m.rj.scale(t.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,c,l,h,d){let u=ob;u.set(0,0,1),a.quaternion.vmult(u,u);let f=ab;if(s.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let x=this.createContactEquation(c,a,e,t,l,h);x.ni.copy(u),x.ni.negate(x.ni),x.ri.set(0,0,0);let g=cb;u.scale(u.dot(s),g),s.vsub(g,g),x.rj.copy(g),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,c,t,e,d)}convexParticle(t,e,n,s,r,o,a,c,l,h,d){let u=-1,f=ub,m=db,x=null,g=hb;if(g.copy(s),g.vsub(n,g),r.conjugate(sm),sm.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,y=t.faces.length;p!==y;p++){let _=[t.worldVertices[t.faces[p][0]]],v=t.worldFaceNormals[p];s.vsub(_[0],rm);let R=-v.dot(rm);if(x===null||Math.abs(R)<Math.abs(x)){if(d)return!0;x=R,u=p,f.copy(v)}}if(u!==-1){let p=this.createContactEquation(c,a,e,t,l,h);f.scale(x,m),m.vadd(s,m),m.vsub(n,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);let y=p.ri,_=p.rj;y.vadd(s,y),y.vsub(c.position,y),_.vadd(n,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,c,l,h,d){return this.convexHeightfield(e,t,s,n,o,r,c,a,l,h,d)}particleCylinder(t,e,n,s,r,o,a,c,l,h,d){return this.convexParticle(e,t,s,n,o,r,c,a,l,h,d)}sphereTrimesh(t,e,n,s,r,o,a,c,l,h,d){let u=Mw,f=ww,m=bw,x=Ew,g=Sw,p=Tw,y=Iw,_=_w,v=yw,R=Pw;de.pointToLocalFrame(s,o,n,g);let S=t.radius;y.lowerBound.set(g.x-S,g.y-S,g.z-S),y.upperBound.set(g.x+S,g.y+S,g.z+S),e.getTrianglesInAABB(y,R);let A=vw,C=t.radius*t.radius;for(let N=0;N<R.length;N++)for(let B=0;B<3;B++)if(e.getVertex(e.indices[R[N]*3+B],A),A.vsub(g,v),v.lengthSquared()<=C){if(_.copy(A),de.pointToWorldFrame(s,o,_,A),A.vsub(n,v),d)return!0;let z=this.createContactEquation(a,c,t,e,l,h);z.ni.copy(v),z.ni.normalize(),z.ri.copy(z.ni),z.ri.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),z.rj.copy(A),z.rj.vsub(c.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}for(let N=0;N<R.length;N++)for(let B=0;B<3;B++){e.getVertex(e.indices[R[N]*3+B],u),e.getVertex(e.indices[R[N]*3+(B+1)%3],f),f.vsub(u,m),g.vsub(f,p);let z=p.dot(m);g.vsub(u,p);let D=p.dot(m);if(D>0&&z<0&&(g.vsub(u,p),x.copy(m),x.normalize(),D=p.dot(x),x.scale(D,p),p.vadd(u,p),p.distanceTo(g)<t.radius)){if(d)return!0;let V=this.createContactEquation(a,c,t,e,l,h);p.vsub(g,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),de.pointToWorldFrame(s,o,p,p),p.vsub(c.position,V.rj),de.vectorToWorldFrame(o,V.ni,V.ni),de.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}let b=Aw,w=Rw,P=Cw,H=xw;for(let N=0,B=R.length;N!==B;N++){e.getTriangleVertices(R[N],b,w,P),e.getNormal(R[N],H),g.vsub(b,p);let z=p.dot(H);if(H.scale(z,p),g.vsub(p,p),z=p.distanceTo(g),Bn.pointInTriangle(p,b,w,P)&&z<t.radius){if(d)return!0;let D=this.createContactEquation(a,c,t,e,l,h);p.vsub(g,D.ni),D.ni.normalize(),D.ni.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),de.pointToWorldFrame(s,o,p,p),p.vsub(c.position,D.rj),de.vectorToWorldFrame(o,D.ni,D.ni),de.vectorToWorldFrame(o,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}R.length=0}planeTrimesh(t,e,n,s,r,o,a,c,l,h,d){let u=new M,f=pw;f.set(0,0,1),r.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,u);let x=new M;x.copy(u),de.pointToWorldFrame(s,o,x,u);let g=mw;if(u.vsub(n,g),f.dot(g)<=0){if(d)return!0;let y=this.createContactEquation(a,c,t,e,l,h);y.ni.copy(f);let _=gw;f.scale(g.dot(f),_),u.vsub(_,_),y.ri.copy(_),y.ri.vsub(a.position,y.ri),y.rj.copy(u),y.rj.vsub(c.position,y.rj),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}}},Os=new M,Hr=new M,kr=new M,hw=new M,uw=new M,dw=new Be,fw=new Be,pw=new M,mw=new M,gw=new M,xw=new M,yw=new M;new M;var vw=new M,_w=new M,Mw=new M,ww=new M,bw=new M,Ew=new M,Sw=new M,Tw=new M,Aw=new M,Rw=new M,Cw=new M,Iw=new Sn,Pw=[],Vc=new M,im=new M,Nw=new M,Lw=new M,Dw=new M;function Bw(i,t,e){let n=null,s=i.length;for(let r=0;r!==s;r++){let o=i[r],a=Nw;i[(r+1)%s].vsub(o,a);let c=Lw;a.cross(t,c);let l=Dw;e.vsub(o,l);let h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var Gc=new M,Fw=new M,Uw=new M,zw=new M,Ow=[new M,new M,new M,new M,new M,new M],Hw=new M,kw=new M,Vw=new M,Gw=new M,Ww=new M,qw=new M,Xw=new M,Yw=new M,$w=new M,Zw=new M,jw=new M,Jw=new M,Kw=new M,Qw=new M;new M;new M;var tb=new M,eb=new M,nb=new M,ib=new M,sb=new M,rb=new M,ob=new M,ab=new M,cb=new M,lb=new M,sm=new Be,hb=new M;new M;var ub=new M,rm=new M,db=new M,fb=new M,pb=new M,mb=[0],gb=new M,xb=new M,tl=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),s=this.current,r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,s=this.previous,r=n.length,o=s.length,a=0;for(let c=0;c<r;c++){let l=!1,h=n[c];for(;h>s[a];)a++;l=h===s[a],l||om(t,h)}a=0;for(let c=0;c<o;c++){let l=!1,h=s[c];for(;h>n[a];)a++;l=n[a]===h,l||om(e,h)}}};function om(i,t){i.push((t&4294901760)>>16,t&65535)}var od=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`,gd=class{constructor(){this.data={keys:[]}}get(t,e){let n=od(t,e);return this.data[n]}set(t,e,n){let s=od(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){let n=od(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},el=class extends qc{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new cd,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Yo,this.constraints=[],this.narrowphase=new md(this),this.collisionMatrix=new Wc,this.collisionMatrixPrevious=new Wc,this.bodyOverlapKeeper=new tl,this.shapeOverlapKeeper=new tl,this.contactmaterials=[],this.contactMaterialTable=new gd,this.defaultMaterial=new Di("default"),this.defaultContactMaterial=new li(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Gr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=Bn.ALL,n.from=t,n.to=e,n.callback=s,ad.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=Bn.ANY,n.from=t,n.to=e,n.result=s,ad.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=Bn.CLOSEST,n.from=t,n.to=e,n.result=s,ad.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Pt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let s=e[n].shapes;for(let r=0;r<s.length;r++){let o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=Oe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let s=Oe.now(),r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Oe.now()-s>t*1e3)););this.accumulator=this.accumulator%t;let o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=wb,s=bb,r=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=Pt.DYNAMIC,u=-1/0,f=this.constraints,m=Mb;c.length();let x=c.x,g=c.y,p=c.z,y=0;for(l&&(u=Oe.now()),y=0;y!==r;y++){let N=o[y];if(N.type===d){let B=N.force,z=N.mass;B.x+=z*x,B.y+=z*g,B.z+=z*p}}for(let N=0,B=this.subsystems.length;N!==B;N++)this.subsystems[N].update();l&&(u=Oe.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),l&&(h.broadphase=Oe.now()-u);let _=f.length;for(y=0;y!==_;y++){let N=f[y];if(!N.collideConnected)for(let B=n.length-1;B>=0;B-=1)(N.bodyA===n[B]&&N.bodyB===s[B]||N.bodyB===n[B]&&N.bodyA===s[B])&&(n.splice(B,1),s.splice(B,1))}this.collisionMatrixTick(),l&&(u=Oe.now());let v=_b,R=e.length;for(y=0;y!==R;y++)v.push(e[y]);e.length=0;let S=this.frictionEquations.length;for(y=0;y!==S;y++)m.push(this.frictionEquations[y]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,v,this.frictionEquations,m),l&&(h.narrowphase=Oe.now()-u),l&&(u=Oe.now()),y=0;y<this.frictionEquations.length;y++)a.addEquation(this.frictionEquations[y]);let A=e.length;for(let N=0;N!==A;N++){let B=e[N],z=B.bi,D=B.bj,J=B.si,V=B.sj,j;if(z.material&&D.material?j=this.getContactMaterial(z.material,D.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,z.material&&D.material&&(z.material.friction>=0&&D.material.friction>=0&&z.material.friction*D.material.friction,z.material.restitution>=0&&D.material.restitution>=0&&(B.restitution=z.material.restitution*D.material.restitution)),a.addEquation(B),z.allowSleep&&z.type===Pt.DYNAMIC&&z.sleepState===Pt.SLEEPING&&D.sleepState===Pt.AWAKE&&D.type!==Pt.STATIC){let ht=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),pt=D.sleepSpeedLimit**2;ht>=pt*2&&(z.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===Pt.DYNAMIC&&D.sleepState===Pt.SLEEPING&&z.sleepState===Pt.AWAKE&&z.type!==Pt.STATIC){let ht=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),pt=z.sleepSpeedLimit**2;ht>=pt*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(z,D,!0),this.collisionMatrixPrevious.get(z,D)||(Wo.body=D,Wo.contact=B,z.dispatchEvent(Wo),Wo.body=z,D.dispatchEvent(Wo)),this.bodyOverlapKeeper.set(z.id,D.id),this.shapeOverlapKeeper.set(J.id,V.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Oe.now()-u,u=Oe.now()),y=0;y!==r;y++){let N=o[y];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(_=f.length,y=0;y!==_;y++){let N=f[y];N.update();for(let B=0,z=N.equations.length;B!==z;B++){let D=N.equations[B];a.addEquation(D)}}a.solve(t,this),l&&(h.solve=Oe.now()-u),a.removeAllEquations();let C=Math.pow;for(y=0;y!==r;y++){let N=o[y];if(N.type&d){let B=C(1-N.linearDamping,t),z=N.velocity;z.scale(B,z);let D=N.angularVelocity;if(D){let J=C(1-N.angularDamping,t);D.scale(J,D)}}}this.dispatchEvent(vb),l&&(u=Oe.now());let w=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(y=0;y!==r;y++)o[y].integrate(t,w,P);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Oe.now()-u),this.stepnumber+=1,this.dispatchEvent(yb);let H=!0;if(this.allowSleep)for(H=!1,y=0;y!==r;y++){let N=o[y];N.sleepTick(this.time),N.sleepState!==Pt.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Ii,Pi),t){for(let r=0,o=Ii.length;r<o;r+=2)qo.bodyA=this.getBodyById(Ii[r]),qo.bodyB=this.getBodyById(Ii[r+1]),this.dispatchEvent(qo);qo.bodyA=qo.bodyB=null}if(e){for(let r=0,o=Pi.length;r<o;r+=2)Xo.bodyA=this.getBodyById(Pi[r]),Xo.bodyB=this.getBodyById(Pi[r+1]),this.dispatchEvent(Xo);Xo.bodyA=Xo.bodyB=null}Ii.length=Pi.length=0;let n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(Ii,Pi),n){for(let r=0,o=Ii.length;r<o;r+=2){let a=this.getShapeById(Ii[r]),c=this.getShapeById(Ii[r+1]);Ni.shapeA=a,Ni.shapeB=c,a&&(Ni.bodyA=a.body),c&&(Ni.bodyB=c.body),this.dispatchEvent(Ni)}Ni.bodyA=Ni.bodyB=Ni.shapeA=Ni.shapeB=null}if(s){for(let r=0,o=Pi.length;r<o;r+=2){let a=this.getShapeById(Pi[r]),c=this.getShapeById(Pi[r+1]);Li.shapeA=a,Li.shapeB=c,a&&(Li.bodyA=a.body),c&&(Li.bodyB=c.body),this.dispatchEvent(Li)}Li.bodyA=Li.bodyB=Li.shapeA=Li.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}};new Sn;var ad=new Bn,Oe=globalThis.performance||{};if(!Oe.now){let i=Date.now();Oe.timing&&Oe.timing.navigationStart&&(i=Oe.timing.navigationStart),Oe.now=()=>Date.now()-i}new M;var yb={type:"postStep"},vb={type:"preStep"},Wo={type:Pt.COLLIDE_EVENT_NAME,body:null,contact:null},_b=[],Mb=[],wb=[],bb=[],Ii=[],Pi=[],qo={type:"beginContact",bodyA:null,bodyB:null},Xo={type:"endContact",bodyA:null,bodyB:null},Ni={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Li={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var nl=Object.freeze([{id:"cleaver",name:"\u0422\u0435\u0441\u0430\u043A",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"cleaver",damage:42,range:1.75,cooldown:.62,swingDuration:.46,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:1.15,description:"\u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0442\u0435\u0441\u0430\u043A \u0441 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u043C \u0448\u0438\u0440\u043E\u043A\u0438\u043C \u043B\u0435\u0437\u0432\u0438\u0435\u043C. \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0440\u0443\u0431\u044F\u0449\u0438\u0439 \u0437\u0430\u043C\u0430\u0445.",sound:{frequency:350,filter:760,duration:.18,noise:.14,bass:.025,swing:360,impact:115}},{id:"sledgehammer",name:"\u041A\u0443\u0432\u0430\u043B\u0434\u0430",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"sledgehammer",damage:68,range:1.95,cooldown:.9,swingDuration:.72,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:4.6,description:"\u0414\u0432\u0443\u0440\u0443\u0447\u043D\u0430\u044F \u043A\u0443\u0432\u0430\u043B\u0434\u0430: \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0439, \u043D\u043E \u043C\u043E\u0449\u043D\u044B\u0439 \u0443\u0434\u0430\u0440 \u0438 \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u0438\u043C\u043F\u0443\u043B\u044C\u0441 ragdoll.",sound:{frequency:105,filter:390,duration:.28,noise:.24,bass:.11,swing:145,impact:72}},{id:"nail-bat",name:"\u0411\u0438\u0442\u0430 \u0441 \u0433\u0432\u043E\u0437\u0434\u044F\u043C\u0438",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"nailBat",damage:50,range:1.9,cooldown:.74,swingDuration:.56,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:2.1,description:"\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u0431\u0438\u0442\u0430 \u0441 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0433\u0432\u043E\u0437\u0434\u044F\u043C\u0438 \u0438 \u0440\u0430\u0437\u043C\u0430\u0448\u0438\u0441\u0442\u043E\u0439 \u0430\u0442\u0430\u043A\u043E\u0439.",sound:{frequency:185,filter:520,duration:.22,noise:.2,bass:.055,swing:205,impact:96}},{id:"pm",name:"\u041F\u041C (\u041C\u0430\u043A\u0430\u0440\u043E\u0432)",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"pm",damage:24,range:38,cooldown:.29,magazineSize:8,reserve:40,reloadDuration:1.1,automatic:!1,weight:.81,description:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:108,filter:1450,duration:.16,noise:.82,bass:.12,waveform:"triangle"}},{id:"tt",name:"\u0422\u0422",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"tt",damage:31,range:48,cooldown:.31,magazineSize:8,reserve:40,reloadDuration:1.25,automatic:!1,weight:.85,description:"\u0422\u0443\u043B\u044C\u0441\u043A\u0438\u0439 \u0422\u043E\u043A\u0430\u0440\u0435\u0432 \u0441 \u0434\u043B\u0438\u043D\u043D\u044B\u043C \u0441\u0442\u0432\u043E\u043B\u043E\u043C. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:142,filter:1840,duration:.2,noise:.91,bass:.16,waveform:"sawtooth"}},{id:"glock-17",name:"Glock 17",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"glock",damage:22,range:42,cooldown:.17,magazineSize:17,reserve:68,reloadDuration:1,automatic:!1,weight:.71,description:"\u041B\u0451\u0433\u043A\u0438\u0439 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043D\u044B\u0439 \u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442. \u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 17 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:122,filter:2200,duration:.135,noise:.74,bass:.09,waveform:"square"}},{id:"ak-47",name:"\u0410\u041A-47",category:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u044B",type:"rifle",model:"ak",damage:34,range:58,cooldown:.105,magazineSize:30,reserve:90,reloadDuration:1.35,automatic:!0,weight:3.8,description:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442 \u0441 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C \u0446\u0435\u0432\u044C\u0451\u043C. \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0433\u043E\u043D\u044C, \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 30 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:86,filter:980,duration:.22,noise:1,bass:.22,waveform:"sawtooth"}},{id:"m4a1",name:"M4A1",category:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u044B",type:"rifle",model:"m4",damage:29,range:62,cooldown:.092,magazineSize:30,reserve:120,reloadDuration:1.25,automatic:!0,weight:3.4,description:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442 \u0441 \u043F\u043B\u0430\u043D\u043A\u0430\u043C\u0438 \u0438 \u0441\u043A\u043B\u0430\u0434\u043D\u044B\u043C \u043F\u0440\u0438\u043A\u043B\u0430\u0434\u043E\u043C. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 30 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:98,filter:1320,duration:.175,noise:.9,bass:.18,waveform:"triangle"}},{id:"pump-shotgun",name:"\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A (\u043F\u043E\u043C\u043F\u043E\u0432\u044B\u0439)",category:"\u0422\u044F\u0436\u0451\u043B\u043E\u0435",type:"shotgun",model:"shotgun",damage:11,pellets:8,spread:.018,range:34,cooldown:.72,magazineSize:8,reserve:32,reloadDuration:1.65,automatic:!1,weight:3.5,description:"\u041F\u043E\u043C\u043F\u043E\u0432\u044B\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A: 8 \u0434\u0440\u043E\u0431\u0438\u043D \u0437\u0430 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u0442\u0440\u0443\u0431\u0447\u0430\u0442\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:70,filter:720,duration:.31,noise:1.05,bass:.28,waveform:"sawtooth"}},{id:"shovel",name:"\u041B\u043E\u043F\u0430\u0442\u0430",category:"\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",type:"tool",model:"shovel",damage:24,range:1.8,cooldown:.82,swingDuration:.64,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:3.6,description:"\u0421\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0448\u0442\u044B\u043A\u043E\u0432\u0430\u044F \u043B\u043E\u043F\u0430\u0442\u0430 \u0441 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C \u0447\u0435\u0440\u0435\u043D\u043A\u043E\u043C. \u0415\u044E \u043C\u043E\u0436\u043D\u043E \u0447\u0435\u0440\u043F\u0430\u0442\u044C \u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u044C \u0441\u043D\u0435\u0433.",sound:{frequency:125,filter:620,duration:.24,noise:.23,bass:.065,swing:230,impact:92}}]),Gs=new Map(nl.map(i=>[i.id,i]));function pm(i){return{magazine:i.magazineSize===null?null:i.magazineSize,reserve:i.magazineSize===null?0:i.reserve}}function mm(i,t){return i.magazineSize===null?!0:!t||t.magazine<=0?!1:(t.magazine--,!0)}function gm(i,t){if(i.magazineSize===null||!t||t.reserve<=0||t.magazine>=i.magazineSize)return 0;let e=Math.min(i.magazineSize-t.magazine,t.reserve);return t.magazine+=e,t.reserve-=e,e}function xm(i,t,e="torso",n=1){if(!i||!t)return{damage:0,health:i?.health??0,lethal:!1};let s=e==="head"?1.65:["handL","handR","footL","footR"].includes(e)?.7:1,r=Math.max(1,Math.round(t.damage*s*n));return i.health=Math.max(0,(Number.isFinite(i.health)?i.health:100)-r),i.health===0&&(i.dead=!0),{damage:r,health:i.health,lethal:i.dead===!0}}function ym(i,t){return i.intersectObjects(t,!0)}function vm(i,t=0,e=.28){if(t>0)return{ok:!1,reason:"already-carrying",amount:0};if(!i||!Number.isFinite(i.amount)||i.amount<=0)return{ok:!1,reason:"empty",amount:0};let n=Math.min(Math.max(0,e),i.amount);return i.amount=Math.max(0,i.amount-n),{ok:n>0,reason:n>0?null:"empty",amount:n}}function _m(i,t){return!Number.isFinite(i)||i<=0||!t||!Number.isFinite(t.x)||!Number.isFinite(t.z)?{ok:!1,pile:null,remaining:Math.max(0,Number(i)||0)}:{ok:!0,pile:{x:t.x,z:t.z,amount:i},remaining:0}}function Mm(i,t){return i*(t>0?.72:1)}function wm(i,t,e){let n=e?5.5:-.36;return Math.max(0,Math.min(100,i+Math.max(0,t)*n))}var Ce=Object.freeze({minX:-310,maxX:310,minZ:-450,maxZ:450});function le(i){return Math.max(0,Math.min(4,(i+100)*.02))}var un=Object.freeze({pond:Object.freeze({x:-232,z:-356,radiusX:34,radiusZ:23,label:"\u041A\u0410\u0420\u041F\u042F\u0422\u041D\u0418\u041A"}),stop:Object.freeze({x:232,z:164}),school:Object.freeze({x:-164,z:236,width:32,depth:21}),shop:Object.freeze({x:42,z:178,width:13,depth:9}),garages:Object.freeze([Object.freeze({x:76,z:172,width:10,depth:7}),Object.freeze({x:88,z:172,width:10,depth:7}),Object.freeze({x:76,z:183,width:10,depth:7})]),hangars:Object.freeze([Object.freeze({x:145,z:-338,width:72,depth:27,height:7}),Object.freeze({x:150,z:-276,width:28,depth:76,height:6}),Object.freeze({x:207,z:-274,width:30,depth:78,height:6}),Object.freeze({x:268,z:-220,width:32,depth:50,height:5})]),scrapYards:Object.freeze([Object.freeze({x:240,z:-342,width:58,depth:44,gate:"south"}),Object.freeze({x:255,z:-150,width:62,depth:54,gate:"west"}),Object.freeze({x:187,z:-82,width:42,depth:34,gate:"south"})]),roads:Object.freeze([Object.freeze({width:9,points:Object.freeze([[-159,-420],[-151,-320],[-153,-220],[-150,-126],[-155,-16],[-156,92],[-160,176],[-151,286],[-142,414]])}),Object.freeze({width:8,points:Object.freeze([[-91,-143],[-84,-70],[-81,4],[-78,87],[-70,162],[-70,235]])}),Object.freeze({width:9,points:Object.freeze([[-14,106],[-13,188],[-17,276],[-22,383]])}),Object.freeze({width:11,points:Object.freeze([[-214,-108],[-157,-104],[-103,-98],[-42,-94],[27,-86],[99,-63],[166,-33],[220,16]])}),Object.freeze({width:11,points:Object.freeze([[-130,153],[-85,151],[-35,149],[24,151],[91,155],[157,160],[232,164]])}),Object.freeze({width:8,points:Object.freeze([[-156,225],[-117,223],[-75,221],[-35,216],[10,211],[55,208]])}),Object.freeze({width:8,points:Object.freeze([[-81,283],[-42,286],[3,290],[44,294]])}),Object.freeze({width:7,points:Object.freeze([[87,128],[121,117],[154,101],[176,66],[183,22]])}),Object.freeze({width:5,points:Object.freeze([[42,151],[42,158],[42,164]])}),Object.freeze({width:7,points:Object.freeze([[183,22],[185,-18],[186,-48],[187,-60]])}),Object.freeze({width:7,points:Object.freeze([[187,-60],[208,-60],[218,-72],[218,-112],[218,-148]])}),Object.freeze({width:8,points:Object.freeze([[218,-148],[218,-180],[230,-210],[237,-245],[238,-280],[238,-310]])})]),lots:Object.freeze([Object.freeze({id:"L-01",x:-226,z:-126,width:36,depth:52,gate:"east",houseWidth:11,houseDepth:8,roof:0}),Object.freeze({id:"L-02",x:-226,z:-66,width:36,depth:52,gate:"east",houseWidth:10,houseDepth:8,roof:1}),Object.freeze({id:"L-03",x:-226,z:-6,width:36,depth:52,gate:"east",houseWidth:12,houseDepth:9,roof:2}),Object.freeze({id:"L-04",x:-226,z:54,width:36,depth:52,gate:"east",houseWidth:10,houseDepth:8,roof:3}),Object.freeze({id:"L-05",x:-226,z:114,width:36,depth:52,gate:"east",houseWidth:12,houseDepth:9,roof:0}),Object.freeze({id:"L-06",x:-124,z:-103,width:38,depth:52,gate:"west",houseWidth:12,houseDepth:9,roof:1}),Object.freeze({id:"L-07",x:-124,z:-43,width:38,depth:52,gate:"west",houseWidth:10,houseDepth:8,roof:2}),Object.freeze({id:"L-08",x:-124,z:17,width:38,depth:52,gate:"west",houseWidth:12,houseDepth:9,roof:3}),Object.freeze({id:"L-09",x:-124,z:77,width:38,depth:52,gate:"west",houseWidth:11,houseDepth:8,roof:0}),Object.freeze({id:"M-01",x:-51,z:-91,width:38,depth:47,gate:"south",houseWidth:11,houseDepth:8,roof:2}),Object.freeze({id:"M-02",x:-4,z:-87,width:38,depth:47,gate:"south",houseWidth:12,houseDepth:9,roof:3}),Object.freeze({id:"M-03",x:-51,z:-34,width:38,depth:47,gate:"south",houseWidth:10,houseDepth:8,roof:0}),Object.freeze({id:"M-04",x:-4,z:-30,width:38,depth:47,gate:"south",houseWidth:11,houseDepth:8,roof:1}),Object.freeze({id:"M-05",x:-51,z:24,width:38,depth:47,gate:"south",houseWidth:12,houseDepth:9,roof:3}),Object.freeze({id:"M-06",x:-4,z:29,width:38,depth:47,gate:"south",houseWidth:10,houseDepth:8,roof:2}),Object.freeze({id:"S-01",x:-73,z:257,width:48,depth:52,gate:"east",houseWidth:13,houseDepth:10,roof:1}),Object.freeze({id:"S-02",x:34,z:257,width:48,depth:52,gate:"west",houseWidth:12,houseDepth:9,roof:2}),Object.freeze({id:"S-03",x:-73,z:325,width:48,depth:52,gate:"east",houseWidth:11,houseDepth:8,roof:3}),Object.freeze({id:"S-04",x:34,z:325,width:48,depth:52,gate:"west",houseWidth:12,houseDepth:9,roof:0}),Object.freeze({id:"S-05",x:-73,z:393,width:48,depth:52,gate:"east",houseWidth:12,houseDepth:9,roof:2}),Object.freeze({id:"S-06",x:34,z:393,width:48,depth:52,gate:"west",houseWidth:13,houseDepth:10,roof:1})]),snowDrifts:Object.freeze([Object.freeze({x:-281,z:-278,amount:1.1}),Object.freeze({x:-196,z:-274,amount:.92}),Object.freeze({x:-270,z:-187,amount:1.18}),Object.freeze({x:-203,z:-151,amount:.88}),Object.freeze({x:-285,z:-69,amount:1.16}),Object.freeze({x:-178,z:-5,amount:1.08}),Object.freeze({x:-281,z:42,amount:1.2}),Object.freeze({x:-184,z:164,amount:.95}),Object.freeze({x:-108,z:-295,amount:1.06}),Object.freeze({x:-106,z:184,amount:.9}),Object.freeze({x:95,z:236,amount:.94}),Object.freeze({x:110,z:315,amount:1.12}),Object.freeze({x:208,z:-22,amount:1.04}),Object.freeze({x:275,z:54,amount:.92})])});var Hi=i=>i?.type==="melee"||i?.type==="tool",tt=i=>document.getElementById(i),ea=tt("game"),Bm=matchMedia("(pointer: coarse)").matches,Ke;try{Ke=new Lo({canvas:ea,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(i){throw document.body.innerHTML='<div style="padding:24px;color:#e4eee9;font:16px Arial">\u0414\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043F\u043E\u043B\u0438\u0433\u043E\u043D\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u044B\u0439 WebGL. \u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u0447\u0442\u043E WebView \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435.</div>',i}Ke.setPixelRatio(Math.min(window.devicePixelRatio||1,Bm?1.35:1.7));Ke.setSize(window.innerWidth,window.innerHeight,!1);Ke.outputColorSpace=Pe;Ke.toneMapping=Bc;Ke.toneMappingExposure=1.16;Ke.shadowMap.enabled=!0;Ke.shadowMap.type=Gu;var Ot=new Do;Ot.background=new Xt(11451837);Ot.fog=new vc(13358548,.00145);var Ve=new qe(74,window.innerWidth/window.innerHeight,.08,1200);Ve.rotation.order="YXZ";Ot.add(Ve);var kt=new el({gravity:new M(0,-9.82,0),allowSleep:!0});kt.broadphase=new $c(kt);kt.solver=new Yo;kt.solver.iterations=12;kt.solver.tolerance=.001;kt.defaultContactMaterial.friction=.62;kt.defaultContactMaterial.restitution=.08;kt.defaultContactMaterial.contactEquationStiffness=1e7;kt.defaultContactMaterial.contactEquationRelaxation=3;var co=new Di("concrete"),da=new Di("test-props"),Sl=new Di("operator"),Fm=new Di("mannequin"),ba=1,fa=2,Um=4,zm=8,Js=ba|fa|Um|zm;kt.addContactMaterial(new li(co,da,{friction:.75,restitution:.06,contactEquationStiffness:1e7,contactEquationRelaxation:3}));kt.addContactMaterial(new li(da,da,{friction:.55,restitution:.09}));kt.addContactMaterial(new li(Sl,co,{friction:.56,restitution:0}));kt.addContactMaterial(new li(Sl,da,{friction:.18,restitution:0}));kt.addContactMaterial(new li(Sl,Fm,{friction:.35,restitution:.02}));var Gi=[],Kr=[],Om=[],Qr=[],Hm=[],Sb=[],Cd=null;function lo(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function km(i,t,e,n){let r=document.createElement("canvas");r.width=r.height=512;let o=r.getContext("2d",{willReadFrequently:!0}),a=[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],c=lo(t),l=o.createImageData(512,512);for(let d=0;d<l.data.length;d+=4){let u=(c()-.5)*20;l.data[d]=Math.max(0,Math.min(255,a[0]+u-2)),l.data[d+1]=Math.max(0,Math.min(255,a[1]+u)),l.data[d+2]=Math.max(0,Math.min(255,a[2]+u+4)),l.data[d+3]=255}o.putImageData(l,0,0);for(let d=0;d<95;d++){let u=c()*512,f=c()*512,m=8+c()*48;o.fillStyle=c()>.55?"rgba(126,157,166,.075)":"rgba(255,255,255,.11)",o.beginPath(),o.ellipse(u,f,m*(.8+c()*.8),m*(.25+c()*.48),c()*Math.PI,0,Math.PI*2),o.fill()}for(let d=0;d<520;d++){let u=c()*512,f=c()*512;o.fillStyle=c()>.58?"rgba(102,136,148,.22)":"rgba(255,255,255,.68)",o.fillRect(u,f,1+c()*2.2,1+c()*1.4)}let h=new ri(r);return h.colorSpace=Pe,h.wrapS=h.wrapT=ns,h.repeat.set(e,n),h.anisotropy=Math.min(Ke.capabilities.getMaxAnisotropy(),8),h}function Tb(i){let n=document.createElement("canvas");n.width=512,n.height=256;let s=n.getContext("2d",{willReadFrequently:!0}),r=lo(i),o=s.createImageData(512,256);for(let c=0;c<256;c++){let l=c/256,h=Math.min(Math.abs(l-.3),Math.abs(l-.7)),d=h<.075?-30*(1-h/.075):0;for(let u=0;u<512;u++){let f=(r()-.5)*30+d,m=(c*512+u)*4;o.data[m]=Math.max(0,Math.min(255,122+f)),o.data[m+1]=Math.max(0,Math.min(255,105+f*.9)),o.data[m+2]=Math.max(0,Math.min(255,82+f*.72)),o.data[m+3]=255}}s.putImageData(o,0,0);for(let c=0;c<700;c++){s.fillStyle=r()>.55?"rgba(239,242,235,.34)":"rgba(49,44,37,.22)";let l=r()*512,h=r()*256;s.fillRect(l,h,1+r()*4,1+r()*2)}for(let c of[75,179])s.strokeStyle="rgba(54,48,40,.34)",s.lineWidth=9,s.beginPath(),s.moveTo(0,c),s.bezierCurveTo(150,c-7,340,c+7,512,c),s.stroke();let a=new ri(n);return a.colorSpace=Pe,a.wrapS=a.wrapT=ns,a.anisotropy=Math.min(Ke.capabilities.getMaxAnisotropy(),8),a}function Ab(){let i=document.createElement("canvas");i.width=128,i.height=96;let t=i.getContext("2d");t.fillStyle="#352d25",t.fillRect(0,0,128,96),t.fillStyle="#8aa9aa",t.fillRect(9,8,110,80),t.fillStyle="rgba(232,243,239,.35)",t.fillRect(14,12,46,70),t.fillStyle="#4b4032",t.fillRect(61,8,6,80),t.fillRect(9,45,110,6);let e=new ri(i);return e.colorSpace=Pe,e}function Rb(i){let t=document.createElement("canvas");t.width=512,t.height=256;let e=t.getContext("2d");e.fillStyle="#c0b3a0",e.fillRect(0,0,t.width,t.height);let n=lo(i),s=64,r=26,o=5;for(let c=0;c<10;c++){let l=c%2?-s/2:0;for(let h=-1;h<10;h++){let d=Math.floor(105+n()*42);e.fillStyle=`rgb(${d},${Math.max(0,d-25)},${Math.max(0,d-38)})`;let u=l+h*s+o/2,f=c*r+o/2;e.fillRect(u,f,s-o,r-o),e.fillStyle="rgba(255,235,213,.15)",e.fillRect(u+3,f+3,s-o-6,2)}}let a=new ri(t);return a.colorSpace=Pe,a.wrapS=a.wrapT=ns,a.anisotropy=Math.min(Ke.capabilities.getMaxAnisotropy(),8),a}function Cb(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(227,235,234,.55)"),e.addColorStop(.45,"rgba(227,235,234,.28)"),e.addColorStop(1,"rgba(227,235,234,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new ri(i)}function na(i,t){let s=document.createElement("canvas");s.width=512,s.height=256;let r=s.getContext("2d",{willReadFrequently:!0}),o=[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],a=lo(t),c=r.createImageData(512,256);for(let h=0;h<256;h++){let d=Math.sin(h*.14)*4+Math.sin(h*.037)*7;for(let u=0;u<512;u++){let f=d+(a()-.5)*18,m=(h*512+u)*4;c.data[m]=Math.max(0,Math.min(255,o[0]+f)),c.data[m+1]=Math.max(0,Math.min(255,o[1]+f*.82)),c.data[m+2]=Math.max(0,Math.min(255,o[2]+f*.62)),c.data[m+3]=255}}r.putImageData(c,0,0);for(let h=0;h<175;h++){let d=a()*256;r.strokeStyle=a()>.5?"rgba(39,25,13,.19)":"rgba(255,226,171,.12)",r.lineWidth=a()*1.4+.25,r.beginPath(),r.moveTo(0,d),r.bezierCurveTo(512*.33,d+(a()-.5)*12,512*.67,d+(a()-.5)*9,512,d+(a()-.5)*6),r.stroke()}let l=new ri(s);return l.colorSpace=Pe,l.wrapS=l.wrapT=ns,l.repeat.set(1.5,1),l.anisotropy=Math.min(Ke.capabilities.getMaxAnisotropy(),8),l}function Ks(i,t,e="#9bdac1"){let n=document.createElement("canvas");n.width=512,n.height=192;let s=n.getContext("2d");s.fillStyle="#182427",s.fillRect(0,0,512,192),s.fillStyle="#26393b",s.fillRect(10,10,492,172),s.strokeStyle=e,s.lineWidth=3,s.strokeRect(12,12,488,168),s.fillStyle=e,s.fillRect(28,28,6,136),s.fillStyle="#e3eee5",s.font="700 35px Arial",s.fillText(i,55,83),s.fillStyle="#8ba49c",s.font="20px Arial",s.fillText(t,57,128),s.fillStyle=e,s.fillRect(440,40,38,38),s.fillStyle="#13201e",s.font="700 20px Arial",s.fillText("01",448,66);let r=new ri(n);return r.colorSpace=Pe,r}var Od=na("#775a3d",319);Od.repeat.set(5.4,1.8);var Vm=km("#e2e9e9",81,4.6,3.5),Hd=na("#51402d",441);Hd.repeat.set(4.2,1.8);var Gm=Od.clone();Gm.colorSpace=cn;var kd=Vm.clone();kd.colorSpace=cn;var Wm=Hd.clone();Wm.colorSpace=cn;var GT=new et({map:Od,bumpMap:Gm,bumpScale:.045,color:16777215,roughness:.94,metalness:.01}),WT=new et({map:Vm,bumpMap:kd,bumpScale:.025,color:15857140,roughness:.98,metalness:0}),qT=new et({map:Hd,bumpMap:Wm,bumpScale:.035,color:12956050,roughness:.96}),XT=new et({color:3160636,roughness:.9}),Tl=new et({color:3419429,roughness:.72,metalness:.18}),YT=new et({color:14002773,roughness:.8,metalness:.06}),$T=new et({color:12700869,roughness:.9,emissive:1581084,emissiveIntensity:.15}),ZT=new et({color:4929576,roughness:.9}),ml=new et({color:16054263,roughness:.96,metalness:0,bumpMap:kd,bumpScale:.018}),Vd=km("#e2e7df",512,1,1);Vd.repeat.set(28,42);var qm=Vd.clone();qm.colorSpace=cn;var Ib=new et({map:Vd,bumpMap:qm,bumpScale:.028,color:16777215,vertexColors:!0,roughness:.98}),Xm=Tb(2048);Xm.repeat.set(1,1);var Pb=new et({map:Xm,color:14801095,roughness:.98,side:Fe,polygonOffset:!0,polygonOffsetFactor:-1}),Nb=new et({color:10061939,roughness:1,side:Fe}),ll=new et({color:7898461,roughness:1,side:Fe}),_d=new et({color:10193247,roughness:1,side:Fe}),jT=new et({color:7364682,roughness:1}),Lb=new et({color:2847111,roughness:.24,metalness:.08,transparent:!0,opacity:.92}),Al=new et({color:9409165,roughness:.96}),Ym=Cb();Ym.colorSpace=Pe;Ot.add(new zo(15201011,5592133,1.55));Ot.add(new Dc(12832975,.55));var In=new Ho(16773336,2.3);In.position.set(-280,420,180);In.castShadow=!0;In.shadow.mapSize.set(1536,1536);In.shadow.camera.left=-360;In.shadow.camera.right=360;In.shadow.camera.top=470;In.shadow.camera.bottom=-470;In.shadow.camera.near=5;In.shadow.camera.far=1200;In.shadow.bias=-18e-5;In.shadow.normalBias=.03;In.shadow.radius=5;Ot.add(In);var Rl=1320,gl=new Re,hl=new Float32Array(Rl*3),xl=new Float32Array(Rl*2),$o=lo(240126);for(let i=0;i<Rl;i++)hl[i*3]=($o()-.5)*72,hl[i*3+1]=($o()-.5)*44,hl[i*3+2]=-2.5-$o()*48,xl[i*2]=-3.8-$o()*6.6,xl[i*2+1]=5+$o()*8.5;gl.setAttribute("position",new ln(hl,3));var Db=new Bo({color:16054519,size:.12,transparent:!0,opacity:.74,depthWrite:!1,sizeAttenuation:!0}),Gd=new Mc(gl,Db);Gd.frustumCulled=!1;Gd.renderOrder=5;Ve.add(Gd);function Bb(i){let t=gl.attributes.position.array;for(let e=0;e<Rl;e++){let n=e*3;t[n]+=xl[e*2]*i,t[n+1]-=xl[e*2+1]*i,t[n]<-38&&(t[n]=38),t[n+1]<-24&&(t[n+1]=24)}gl.attributes.position.needsUpdate=!0}function Cl(i,t,e=12774368,n=!1){let s=new it(new Rt(1.05,.1,.25),Tl);s.position.set(i,5.66,t),s.castShadow=!1,s.receiveShadow=!0,Ot.add(s);let r=new it(new Rt(.78,.035,.13),new et({color:e,emissive:e,emissiveIntensity:1.35,roughness:.3}));if(r.position.set(i,5.585,t),Ot.add(r),n){let o=new Lc(e,42,12,Math.PI/3,.58,1.6);o.position.set(i,5.35,t),o.target.position.set(i,.15,t),o.castShadow=!0,o.shadow.mapSize.set(512,512),o.shadow.camera.near=.2,o.shadow.camera.far=13,o.shadow.bias=-35e-5,o.shadow.normalBias=.035,o.shadow.radius=4,Ot.add(o,o.target)}else{let o=new Fr(e,8.5,8.4,2);o.position.set(i,5.35,t),Ot.add(o)}}Cl(-4.3,-2.8,11787478,!0);Cl(.4,-2.7,13886159,!1);Cl(4.4,-2.5,11063509,!0);Cl(0,4.25,10141120,!1);function Wi(i,t,e=co){let n=new Pt({mass:0,material:e,collisionFilterGroup:ba,collisionFilterMask:Js});return n.addShape(new Fn(new M(t[0],t[1],t[2]))),n.position.set(i[0],i[1],i[2]),kt.addBody(n),n}function Fb(){let e=Ce.minX,n=Ce.maxX,s=Ce.minZ,r=Ce.maxZ,o=[],a=[],c=[],l=[],h=new Xt("#c6d0c4"),d=new Xt("#d0d1c8"),u=new Xt("#c8c9bf");for(let g=0;g<=144;g++){let p=s+(r-s)*g/144;for(let y=0;y<=124;y++){let _=e+(n-e)*y/124,v=le(_);o.push(_,v-.012,p);let R;if(_<=-100?R=h:_>=100?R=u:R=h.clone().lerp(d,(_+100)/200),a.push(R.r,R.g,R.b),c.push((_-e)/(n-e),(p-s)/(r-s)),y<124&&g<144){let S=g*125+y,A=S+1,C=S+124+1,b=C+1;l.push(S,C,A,A,C,b)}}}let f=new Re;f.setAttribute("position",new Zt(o,3)),f.setAttribute("color",new Zt(a,3)),f.setAttribute("uv",new Zt(c,2)),f.setIndex(l),f.computeVertexNormals();let m=new it(f,Ib);m.receiveShadow=!0,m.userData.groundSurface=!0,Cd=m,Ot.add(m),Wi([-205.25,-.42,0],[106.25,.42,450]);let x=new Pt({mass:0,material:co,collisionFilterGroup:ba,collisionFilterMask:Js});x.addShape(new Fn(new M(100.5,.5,450))),x.position.set(0,1.5,0),x.quaternion.setFromEuler(0,0,Math.atan(.02),"XYZ"),kt.addBody(x),Wi([205.25,3.58,0],[106.25,.42,450]),kt.broadphase.dirty=!0}Fb();var vs=[na("#846744",213),na("#725a40",932),na("#9a7950",612)],to=vs.map(i=>{let t=i.clone();return t.colorSpace=cn,t}),Xr=[new et({map:vs[0],bumpMap:to[0],bumpScale:.035,color:8808262,roughness:.88}),new et({map:vs[1],bumpMap:to[1],bumpScale:.035,color:7296829,roughness:.91}),new et({map:vs[2],bumpMap:to[2],bumpScale:.035,color:10123343,roughness:.83})],Wd=Rb(483);Wd.repeat.set(2.6,1.45);var $m=Wd.clone();$m.colorSpace=cn;var Md=new et({map:Wd,bumpMap:$m,bumpScale:.035,color:15852498,roughness:.94}),zi=[new et({color:3686975,roughness:.82,metalness:.16}),new et({color:6705469,roughness:.94,metalness:.02}),new et({color:5717041,roughness:.88,metalness:.04}),new et({color:5858410,roughness:.48,metalness:.38})],_s=new et({color:6705209,roughness:.93}),Ub=new et({color:4799021,roughness:.9}),zb=new et({map:Ab(),roughness:.54,metalness:.05,side:Fe}),Il=new et({color:5661021,roughness:.7,metalness:.42}),Zm=new et({color:7685940,roughness:.86,metalness:.18}),Ob=new et({color:4611146,roughness:.96}),Hb=new et({color:13358802,roughness:.94}),kb=new et({color:5850418,roughness:.96}),Vb=new et({color:3156772,roughness:.75,metalness:.15}),Gb=[new et({color:7383713,roughness:.23,metalness:.05}),new et({color:9940578,roughness:.27,metalness:.04}),new et({color:8951472,roughness:.25,metalness:.08})],Wb=[new et({color:4545884,roughness:.65,metalness:.38}),new et({color:7296321,roughness:.7,metalness:.35})],yl=new et({color:10660256,roughness:.44,metalness:.64}),qb=new et({color:9139286,roughness:.91});function Pl(i,t){i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.userData.gameMeta=t)}),i.userData.gameMeta=t,Kr.push(i)}function Xb(i,t){i.body&&(kt.removeBody(i.body),i.body=null);let e=Math.max(1.5,.9*t);for(let r of kt.bodies){if(r.mass<=0)continue;let o=r.position.x-i.x,a=r.position.z-i.z;o*o+a*a<=e*e&&r.position.y<i.baseY+2.2&&r.wakeUp()}if(i.meta.isEmpty){kt.broadphase.dirty=!0;return}let n=.48*t,s=new Pt({mass:0,material:co,collisionFilterGroup:ba,collisionFilterMask:Js});s.addShape(new Wr(n)),s.position.set(i.x,i.baseY+n,i.z),s.gameMeta={kind:"snowdrift",name:"\u0421\u0423\u0413\u0420\u041E\u0411",drift:i},kt.addBody(s),i.body=s,kt.broadphase.dirty=!0}function jm(i){let t=Math.max(0,i.amount),e=Math.cbrt(t);i.meta.isEmpty=t<=.012,i.group.visible=!i.meta.isEmpty,i.group.scale.setScalar(e),i.group.position.y=i.baseY+.02+.07*e,Xb(i,e)}function Yr(i,t,e=1){let n=new Qt,s=new it(new Dr(1,1),ml);s.scale.set(.88,.38,.76),s.position.set(0,.31,0),n.add(s);for(let[a,c,l,h,d,u]of[[-.37,.18,.08,.45,.25,.48],[.34,.17,-.1,.48,.23,.44],[.04,.24,.35,.43,.27,.38]]){let f=new it(new Dr(.68,1),ml);f.position.set(a,c,l),f.scale.set(h,d,u),n.add(f)}n.position.set(i,le(i),t),Ot.add(n);let r={kind:"snowdrift",name:"\u0421\u0423\u0413\u0420\u041E\u0411",range:4.5,isEmpty:!1},o={group:n,amount:Math.max(0,e),meta:r,x:i,z:t,baseY:le(i),body:null};return r.drift=o,Pl(n,r),Sb.push(o),jm(o),o}function ho(i,t,e,n,s,r=0,o={}){let a=new Pt({mass:e,material:da,position:new M(n[0],n[1],n[2]),collisionFilterGroup:Um,collisionFilterMask:Js,linearDamping:o.linearDamping??.08,angularDamping:o.angularDamping??.18,allowSleep:!0,sleepSpeedLimit:.07,sleepTimeLimit:.55});if(Array.isArray(t))for(let c of t)a.addShape(c.shape,c.offset||new M);else a.addShape(t);return a.quaternion.setFromEuler(0,r,0,"YZX"),a.gameMeta={...i,body:a,initialMass:e,isHeld:!1,isStored:!1,originalCollisionFilterMask:a.collisionFilterMask,originalLinearDamping:a.linearDamping,originalAngularDamping:a.angularDamping,lastVelocity:{x:0,y:0,z:0}},kt.addBody(a),s.position.copy(a.position),s.quaternion.copy(a.quaternion),s.userData.gameMeta=a.gameMeta,Ot.add(s),Pl(s,a.gameMeta),Gi.push({body:a,visual:s}),a}function Yb(i,t,e,n,s){let r=new Qt,o=Math.abs(Math.floor(n))%vs.length,a=new et({map:vs[o],bumpMap:to[o],bumpScale:.04,color:n,roughness:.9,metalness:.03}),c=new it(new Rt(i,t,e),a);r.add(c);let l=Math.max(.045,i*.075),h=Math.max(.045,t*.075);for(let u of[-1,1])for(let f of[-1,1]){let m=new it(new Rt(l,t+.015,l),Vb);m.position.set(u*(i/2-l/2),0,f*(e/2-l/2)),r.add(m)}for(let u of[-1,1]){let f=new it(new Rt(i*.88,h,e+.012),Xr[2]);f.position.y=u*(t/2-h/2),r.add(f)}let d=new it(new xn(i*.42,t*.22),new et({map:Ks(s,"LOAD TEST / SEALED"),roughness:.76,metalness:.1}));return d.position.set(0,0,e/2+.008),r.add(d),r}function $b(i,t,e,n){let s=new Qt,r=new it(new nn(i*.9,i,t,20,1),Wb[e]);s.add(r);let o=new it(new Zn(i*.92,.025,6,24),yl);o.rotation.x=Math.PI/2,o.position.y=t*.31,s.add(o);let a=o.clone();a.position.y=-t*.31,s.add(a);let c=new it(new Zn(i*.96,.018,5,24),yl);c.rotation.x=Math.PI/2,c.position.y=-t*.09,s.add(c);let l=new it(new nn(i*.85,i*.85,.035,20),Tl);l.position.y=t/2-.015,s.add(l);let h=new it(new xn(i*1.15,t*.23),new et({map:Ks(n,"TARE / STEEL DRUM"),roughness:.78}));return h.position.set(0,.04,i*.89+.008),s.add(h),s}function Zb(i,t){let e=new Qt,n=[new lt(0,-.22),new lt(.073,-.22),new lt(.103,-.19),new lt(.108,-.12),new lt(.103,-.015),new lt(.096,.055),new lt(.071,.105),new lt(.048,.125),new lt(.041,.15),new lt(.041,.218),new lt(.05,.228),new lt(.05,.246),new lt(0,.246)],s=new it(new Uo(n,16),Gb[i]);e.add(s);let r=new it(new nn(.049,.047,.027,16),yl);r.position.y=.215,e.add(r);let o=new it(new nn(.044,.044,.038,12),new et({color:2504244,roughness:.45}));o.position.y=.257,e.add(o);let a=new it(new nn(.105,.105,.055,16),new et({color:14145468,roughness:.6}));a.position.y=-.045,e.add(a);let c=new it(new xn(.12,.038),new gn({map:Ks(t,"LAB SAMPLE"),toneMapped:!1}));return c.position.set(0,-.045,.104),e.add(c),e}function jb(i,t,e,n){let s=new Qt,r=new it(new Rt(i,e,t),qb);s.add(r);let o=new et({color:n?5655353:5326645,roughness:.9});for(let a of[-t*.28,t*.28]){let c=new it(new Rt(i*.84,.003,.009),o);c.position.set(0,e/2+.002,a),s.add(c)}for(let a of[-i*.39,i*.39])for(let c of[-t*.29,t*.29]){let l=new it(new nn(.012,.012,.006,8),yl);l.rotation.x=Math.PI/2,l.position.set(a,0,c),s.add(l)}return s}function Jb(){let i=new Qt,t=new et({map:vs[2],bumpMap:to[2],bumpScale:.025,color:9204045,roughness:.86}),e=new et({color:7898497,roughness:.42,metalness:.68}),n=new it(new nn(.022,.029,.96,10),t);n.rotation.z=Math.PI/2,n.position.set(-.09,.005,0),i.add(n);let s=new it(new Zn(.052,.012,6,14),t);s.position.set(-.55,.01,0),s.rotation.x=Math.PI/2,i.add(s);let r=new it(new Rt(.11,.065,.075),e);r.position.set(.35,-.005,0),i.add(r);let o=new it(new Rt(.35,.045,.36),e);o.position.set(.49,-.008,0),i.add(o);let a=new it(new Rt(.28,.012,.035),new et({color:10332835,roughness:.38,metalness:.75}));return a.position.set(.48,.018,0),i.add(a),i}function il(i,t,e,n,s,r=0){let[o,a,c]=e,l=Yb(o,a,c,s,i);return ho({kind:"prop",type:"\u042F\u0429\u0418\u041A",name:i,mass:n,detail:`${n.toFixed(1)} \u041A\u0413 \xB7 \u0414\u0415\u0420\u0415\u0412\u041E`,description:"\u0423\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0439 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0439 \u0438\u0441\u043F\u044B\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u044F\u0449\u0438\u043A \u0441 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u043D\u0430\u043A\u043B\u0430\u0434\u043A\u0430\u043C\u0438.",range:4.5,inventoryWidth:o>.88?3:2,inventoryHeight:a>.88?3:2,inventoryIcon:"\u25A3"},new Fn(new M(o/2,a/2,c/2)),n,t,l,r)}function wd(i,t,e,n,s,r,o=0){let a=$b(e,n,r,i),c=new Vs(e*.9,e,n,12);return ho({kind:"prop",type:"\u0411\u041E\u0427\u041A\u0410",name:i,mass:s,detail:`${s.toFixed(0)} \u041A\u0413 \xB7 \u0422\u042F\u0416\u0401\u041B\u0410\u042F \u0421\u0422\u0410\u041B\u042C`,description:"\u0422\u044F\u0436\u0451\u043B\u0430\u044F \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0442\u0430\u0440\u0430; \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u043A\u0440\u0443\u043F\u043D\u044B\u0439 \u043E\u0431\u044A\u0451\u043C \u0438 \u0440\u0435\u0437\u043A\u043E \u043D\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u043C\u044B\u0439 \u0432\u0435\u0441.",range:4.4,inventoryWidth:2,inventoryHeight:3,inventoryIcon:"\u25C9"},c,s,t,a,o,{angularDamping:.23})}function sl(i,t,e,n=0){let s=Zb(e,i),r=[{shape:new Vs(.103,.103,.33,10),offset:new M(0,-.055,0)},{shape:new Vs(.043,.043,.19,9),offset:new M(0,.165,0)}];return ho({kind:"prop",type:"\u0411\u0423\u0422\u042B\u041B\u041A\u0410",name:i,mass:.38,detail:"0.38 \u041A\u0413 \xB7 \u041B\u0401\u0413\u041A\u041E\u0415 \u0421\u0422\u0415\u041A\u041B\u041E",description:"\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0442\u0435\u043A\u043B\u044F\u043D\u043D\u044B\u0439 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0439 \u0444\u043B\u0430\u043A\u043E\u043D. \u041F\u043E\u0447\u0442\u0438 \u043D\u0435 \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u043E\u0431\u0449\u0438\u0439 \u0432\u0435\u0441.",range:3.8,inventoryWidth:1,inventoryHeight:1,inventoryIcon:"\u25C9"},r,.38,t,s,n,{linearDamping:.035,angularDamping:.12})}function bm(i,t,e,n,s,r,o=0){let a=jb(e,n,s,Math.abs(o)>.1?1:0);return ho({kind:"prop",type:"\u0414\u041E\u0421\u041A\u0410",name:i,mass:r,detail:`${r.toFixed(1)} \u041A\u0413 \xB7 \u0421\u041E\u0421\u041D\u0410`,description:"\u0414\u043B\u0438\u043D\u043D\u0430\u044F \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u0434\u043E\u0441\u043A\u0430; \u0432 \u0440\u044E\u043A\u0437\u0430\u043A\u0435 \u0443\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E.",range:4.3,inventoryWidth:1,inventoryHeight:4,inventoryIcon:"\u25AC"},new Fn(new M(e/2,s/2,n/2)),r,t,a,o,{angularDamping:.21})}function Kb(i,t,e=0){let n=Jb();return ho({kind:"prop",type:"\u041B\u041E\u041F\u0410\u0422\u0410",name:i,mass:3.6,detail:"3.6 \u041A\u0413 \xB7 \u0421\u0422\u0410\u041B\u042C / \u0414\u0415\u0420\u0415\u0412\u041E",description:"\u041F\u043E\u043B\u0435\u0432\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0441\u043E \u0441\u0442\u0430\u043B\u044C\u043D\u044B\u043C \u0448\u0442\u044B\u043A\u043E\u043C \u0438 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u043E\u0439 \u0440\u0443\u043A\u043E\u044F\u0442\u044C\u044E. \u0420\u0430\u0437\u043C\u0435\u0440 2 \xD7 3 \u044F\u0447\u0435\u0439\u043A\u0438.",range:4.5,inventoryWidth:2,inventoryHeight:3,inventoryIcon:"\u2692"},new Fn(new M(.64,.07,.2)),3.6,t,n,e,{angularDamping:.3})}function Qb(){let i=new Qt,t=new et({map:vs[1],bumpMap:to[1],bumpScale:.025,color:7493434,roughness:.96}),e=new et({color:12624250,roughness:.96}),n=new it(new nn(.083,.09,.66,10),t);n.rotation.z=Math.PI/2,i.add(n);for(let s of[-1,1]){let r=new it(new Ci(.082,10),e);r.position.x=s*.331,r.rotation.y=s*Math.PI/2,i.add(r)}return i}function rl(i,t,e=0){let s=Qb();return ho({kind:"firewood",type:"\u0414\u0420\u041E\u0412\u0410",name:i,mass:1.35,detail:`${1.35.toFixed(1)} \u041A\u0413 \xB7 \u0421\u0423\u0425\u041E\u0415 \u041F\u041E\u041B\u0415\u041D\u041E`,description:"\u041F\u043E\u043B\u0435\u043D\u043E \u0434\u043B\u044F \u0440\u0430\u0441\u0442\u043E\u043F\u043A\u0438 \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0447\u0438. \u0412\u043E\u0437\u044C\u043C\u0438\u0442\u0435 \u0435\u0433\u043E \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0440\u044F\u0434\u043E\u043C \u0441 \u043F\u0435\u0447\u044C\u044E.",range:4.5,inventoryWidth:1,inventoryHeight:2,inventoryIcon:"\u25A4"},new Fn(new M(.34,.09,.09)),1.35,t,s,e,{angularDamping:.28})}var Ye=new L(-18,le(-18),108),Jm=[],Km=[],Qm=[],t0=[],e0=[[],[],[]],n0=[[],[]],Id=new Map,Jo=[];function eo(i,t,e,n){i.push({position:t.clone(),quaternion:e.clone(),scale:n.clone()})}function no(i,t,e,n=!0){if(!e.length)return null;let s=new Pr(i,t,e.length);s.castShadow=n,s.receiveShadow=!0,s.instanceMatrix.setUsage(Rr);let r=new ce;for(let o=0;o<e.length;o++){let a=e[o];r.compose(a.position,a.quaternion,a.scale),s.setMatrixAt(o,r)}return s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere(),Ot.add(s),s}function Zo(i,t,e,n,s="south",r=2.8){let o=e/2,a=n/2,c=[{name:"north",a:[-o,-a],b:[o,-a],axis:"x"},{name:"south",a:[-o,a],b:[o,a],axis:"x"},{name:"west",a:[-o,-a],b:[-o,a],axis:"z"},{name:"east",a:[o,-a],b:[o,a],axis:"z"}],l=new Pt({mass:0,material:co,collisionFilterGroup:ba,collisionFilterMask:Js});for(let h of c){let d=i+h.a[0],u=t+h.a[1],f=i+h.b[0],m=t+h.b[1],x=f-d,g=m-u,p=Math.hypot(x,g),y=h.name===s,_=y?(p-r)/2:p,v=y?(p+r)/2:p,R=y?[[0,_],[v,p]]:[[0,p]],S=A=>{let C=A/p;return{x:d+x*C,z:u+g*C}};for(let[A,C]of R){if(C-A<.3)continue;let b=S(A),w=S(C),P=S((A+C)/2),H=le(P.x),N=C-A,B=new L(w.x-b.x,le(w.x)-le(b.x),w.z-b.z).normalize(),z=new Ze().setFromUnitVectors(new L(1,0,0),B);for(let Ft of[.28,.68,1.08]){let X=new L(b.x,le(b.x)+Ft,b.z),rt=new L(w.x,le(w.x)+Ft,w.z),wt=X.clone().add(rt).multiplyScalar(.5),ut=new L(N,1,1);eo(Qm,wt,z,ut)}let D=S(A),J=S(C),V=[A,C];for(let Ft=A+4;Ft<C-.25;Ft+=4)V.push(Ft);for(let Ft of V){let X=S(Ft),rt=le(X.x);eo(Jm,new L(X.x,rt+.67,X.z),new Ze,new L(1,1,1))}for(let Ft=A+1.8;Ft<C-.7;Ft+=1.8){let X=S(Ft),rt=le(X.x);eo(Km,new L(X.x,rt+.53,X.z),new Ze,new L(1,1,1))}let j=h.axis==="x"?new M(N/2,.62,.085):new M(.085,.62,N/2),ht=new Fn(j),pt=new M(P.x,H+.62,P.z),ot=new Be;h.axis==="x"&&ot.setFromEuler(0,0,Math.atan(.02),"XYZ"),l.addShape(ht,pt,ot)}}l.shapes.length&&kt.addBody(l)}function tE(){no(new Rt(.16,1.34,.16),_s,Jm),no(new Rt(.075,1,.12),_s,Km),no(new Rt(1,.13,.12),_s,Qm)}function Je(i,t,e,n=!1,s=[0,0,0]){let r=Id.get(e);r||(r=[],Id.set(e,r));let o={position:new L(t[0],t[1],t[2]),scale:new L(i[0],i[1],i[2]),rotation:[...s],bulletSurface:n};return r.push(o),{userData:{},instance:o}}function eE(i,t,e,n=1.12,s=.86){Jo.push({position:new L(i,t,e),scale:new L(n,s,1),quaternion:new Ze})}function nE(){let i=new Rt(1,1,1);for(let[t,e]of Id){let n=new Pr(i,t,e.length),s=new ce;for(let r=0;r<e.length;r++){let o=e[r],a=new Ze().setFromEuler(new hn(...o.rotation));s.compose(o.position,a,o.scale),n.setMatrixAt(r,s)}n.castShadow=!0,n.receiveShadow=!0,n.instanceMatrix.setUsage(Rr),n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),Ot.add(n),e.some(r=>r.bulletSurface)&&(n.userData.bulletSurface=!0,Om.push(n))}if(Jo.length){let t=new Pr(new xn(1,1),zb,Jo.length),e=new ce;for(let n=0;n<Jo.length;n++){let s=Jo[n];e.compose(s.position,s.quaternion,s.scale),t.setMatrixAt(n,e)}t.castShadow=!1,t.receiveShadow=!0,t.instanceMatrix.setUsage(Rr),t.instanceMatrix.needsUpdate=!0,t.computeBoundingSphere(),Ot.add(t)}}function i0(i,t,e){let n=i/2,s=t/2,r=[-n,0,-s,0,e,-s,n,0,-s,-n,0,s,0,e,s,n,0,s],o=new Re;return o.setAttribute("position",new Zt(r,3)),o.setIndex([0,1,4,0,4,3,1,2,5,1,5,4,0,2,1,3,4,5]),o.computeVertexNormals(),o}function iE(i,t,e){let n=i/2,s=t/2,r=[[-n,0],[-n*.32,e*.42],[0,e],[n*.32,e*.42],[n,0]],o=[];for(let[l,h]of r)o.push(l,h,-s);for(let[l,h]of r)o.push(l,h,s);let a=[];for(let l=0;l<4;l++)a.push(l,l+1,6+l,l,6+l,5+l);a.push(0,4,2,5,7,9);let c=new Re;return c.setAttribute("position",new Zt(o,3)),c.setIndex(a),c.computeVertexNormals(),c}function sE(i,t,e){let n=i/2,s=t/2,r=[-n,0,-s,n,0,-s,n,0,s,-n,0,s,0,e,0],o=new Re;return o.setAttribute("position",new Zt(r,3)),o.setIndex([0,1,4,1,2,4,2,3,4,3,0,4]),o.computeVertexNormals(),o}function ol({x:i,z:t,width:e,depth:n,height:s,label:r,subtitle:o="\u0414\u0415\u0420\u0415\u0412\u041D\u042F / \u041F\u041E\u041B\u0418\u0413\u041E\u041D 01",wallMaterial:a,roofType:c=0,roofMaterial:l=zi[0],brick:h=!1,windows:d=2,chimney:u=!0,accent:f="#c5d7d0"}){let m=le(i),x=.28;Je([e+.45,x,n+.45],[i,m+x/2,t],Al);let g=m+x+s/2,p=Je([e,s,n],[i,g,t],a,!0);p.userData.structure=r,Wi([i,g,t],[e/2,s/2,n/2]);let y=t+n/2+.065,_=Math.min(1.15,e*.16);Je([_+.18,2.05,.13],[i,m+x+1.03,y],_s),Je([_,1.85,.055],[i,m+x+.96,y+.08],Ub);for(let b=0;b<d;b++){let w=i+(b-(d-1)/2)*Math.min(3.2,e/(d+.5)),P=m+x+s*.59;eE(w,P,y+.105)}let v=m+x+s,R;if(c===1)R=sE(e+.55,n+.55,Math.min(e,n)*.34);else if(c===2)R=iE(e+.5,n+.5,e*.31);else if(c===3){let b=new it(new Rt(e+.7,.22,n+.7),l);b.position.set(i,v+.42,t),b.rotation.z=e>9?-.18:.13,b.castShadow=!0,b.receiveShadow=!0,Ot.add(b),R=null}else R=i0(e+.55,n+.55,e*.29);if(R){let b=new it(R,l);b.position.set(i,v,t),b.castShadow=!0,b.receiveShadow=!0,b.userData.structure=`${r} / \u041A\u0420\u042B\u0428\u0410`,Ot.add(b)}u&&e<24&&(Je([.42,1.05,.42],[i+e*.29,v+.5,t-n*.15],Zm),Je([.56,.11,.56],[i+e*.29,v+1.07,t-n*.15],Il));let S=Math.min(e*.7,Math.max(2.3,r.length*.32)),A=m+x+Math.min(s-.45,s*.82);Je([S,.55,.1],[i,A,y+.095],_s);let C=new it(new xn(S-.12,.44),new et({map:Ks(r,o,f),roughness:.83,emissive:1448214,emissiveIntensity:.12}));C.position.set(i,A,y+.153),Ot.add(C)}function rE(i){let{x:t,z:e,width:n,depth:s,height:r}=i,o=le(t),a=new et({color:7502710,roughness:.76,metalness:.34});Je([n+.8,.35,s+.8],[t,o+.175,e],Al);let c=o+.35+r/2;Je([n,r,s],[t,c,e],a,!0),Wi([t,c,e],[n/2,r/2,s/2]);let l=Math.min(13,n*.24),h=r*.72;Je([l,h,.16],[t,o+.35+h/2,e+s/2+.09],Il);let d=new it(i0(n+1,s+.8,Math.min(n*.09,3.2)),zi[3]);d.position.set(t,o+.35+r,e),d.castShadow=!0,d.receiveShadow=!0,Ot.add(d);let u=Math.min(10,Math.max(3,Math.floor(n/8)));for(let m=0;m<=u;m++){let x=t-n/2+n*m/u;Je([.07,r-.25,.08],[x,o+.35+r/2,e+s/2+.1],Tl)}let f=new it(new xn(Math.min(14,n*.45),1.05),new et({map:Ks("\u041C\u0418\u0425\u0422\u041E\u041A","\u0410\u041D\u0413\u0410\u0420 \xB7 \u0421\u041A\u041B\u0410\u0414","#d6c29a"),roughness:.8}));f.position.set(t,o+.35+r*.78,e+s/2+.145),Ot.add(f)}function Em(i,t,e,n=!1){let s=t/2,r=[],o=[],a=[],c=0;for(let d=0;d<i.length;d++){let u=i[Math.max(0,d-1)],f=i[Math.min(i.length-1,d+1)],m=f[0]-u[0],x=f[1]-u[1],g=Math.hypot(m,x)||1,p=-x/g,y=m/g;d>0&&(c+=Math.hypot(i[d][0]-i[d-1][0],i[d][1]-i[d-1][1]));for(let _ of[-1,1]){let v=i[d][0]+p*s*_,R=i[d][1]+y*s*_;r.push(v,le(v)+(n?.016:.034),R),o.push(c/9,_<0?0:1)}if(d<i.length-1){let _=d*2,v=_+1,R=_+2,S=_+3;a.push(_,R,v,v,R,S)}}let l=new Re;l.setAttribute("position",new Zt(r,3)),l.setAttribute("uv",new Zt(o,2)),l.setIndex(a),l.computeVertexNormals();let h=new it(l,e);return h.receiveShadow=!0,Ot.add(h),h}function qr(i,t,e,n,s,r=ll,o=1){let a=lo(o),c=[];for(let d=0;d<s;d++){let u=i+(a()-.5)*e,f=t+(a()-.5)*n,m=le(u)+.015,x=.62+a()*.78,g=.035+a()*.055,p=a()*Math.PI,y=Math.cos(p)*g,_=Math.sin(p)*g,v=(a()-.5)*.12,R=(a()-.5)*.12;c.push(u-y,m,f-_,u+y,m,f+_,u+v,m+x,f+R)}let l=new Re;l.setAttribute("position",new Zt(c,3)),l.computeVertexNormals();let h=new it(l,r);h.frustumCulled=!0,h.castShadow=!1,Ot.add(h)}function bd(i,t,e,n=.7){let s=new gn({map:Ym,color:14476514,transparent:!0,opacity:.42,depthWrite:!1,side:Fe}),r=new it(new xn(e,e*.72),s);r.rotation.x=-Math.PI/2,r.position.set(i,le(i)+n,t),r.renderOrder=2,Ot.add(r)}function oE(){let i=un.pond,t=le(i.x),e=new it(new Ci(1,80),Lb);e.scale.set(i.radiusX,i.radiusZ,1),e.rotation.x=-Math.PI/2,e.position.set(i.x,t+.04,i.z),e.receiveShadow=!0,Ot.add(e);let n=new it(new Zn(1,.045,7,80),ml);n.scale.set(i.radiusX+1.3,i.radiusZ+1.3,1),n.rotation.x=Math.PI/2,n.position.set(i.x,t+.055,i.z),Ot.add(n);for(let a of[-.25,.3]){let c=new it(new Zn(1,.012,4,72),new gn({color:12374480,transparent:!0,opacity:.38}));c.scale.set(i.radiusX*(.58+a),i.radiusZ*(.58+a),1),c.rotation.x=Math.PI/2,c.position.set(i.x,t+.052,i.z),Ot.add(c)}let s=i.x+i.radiusX+5,r=i.z+i.radiusZ*.45;Je([.16,2,.16],[s,t+1,r],_s);let o=new it(new xn(5.4,1.2),new et({map:Ks(i.label,"\u0417\u0410\u041F\u0410\u0414\u041D\u0410\u042F \u041D\u0418\u0417\u0418\u041D\u0410 \xB7 0 \u041C","#b5d8d8"),roughness:.82}));o.position.set(s,t+1.76,r+.11),Ot.add(o);for(let a=0;a<5;a++){let c=a*1.21,l=i.x+Math.cos(c)*(i.radiusX+2+a%2),h=i.z+Math.sin(c)*(i.radiusZ+2),d=new it(new Ac(.6+a%3*.12,0),Al);d.position.set(l,t+.15,h),d.scale.set(1.2,.48,.9),d.castShadow=!0,Ot.add(d)}bd(i.x-10,i.z+4,80,.7),bd(i.x+15,i.z-9,72,.95),bd(i.x+2,i.z+22,65,.72)}function aE(i,t,e=1){let n=le(i);eo(t0,new L(i,n+1.05*e,t),new Ze,new L(e,e,e));for(let s=0;s<3;s++){let r=(2.1-s*.42)*e,o=(1.05-s*.15)*e;if(eo(e0[s],new L(i,n+(1.45+s*.82)*e,t),new Ze,new L(o,r,o)),s<2){let a=(.79-s*.12)*e,c=new Ze().setFromEuler(new hn(0,0,-.08));eo(n0[s],new L(i+.06*e,n+(1.49+s*.82)*e,t+.04*e),c,new L(a,r*.82,a))}}Wi([i,n+1*e,t],[.19*e,1*e,.19*e])}function cE(){no(new nn(.13,.23,2.1,7),kb,t0);let i=new Nr(1,1,7);for(let t of e0)no(i,Ob,t);for(let t of n0)no(i,Hb,t)}function lE(){let i=un.stop,t=le(i.x),e=new et({color:5982519,roughness:.9});Je([6.4,.22,4.2],[i.x,t+.11,i.z],Al);for(let o of[-2.8,2.8])for(let a of[-1.65,1.65])Je([.16,2.6,.16],[i.x+o,t+1.3,i.z+a],e),Wi([i.x+o,t+1.3,i.z+a],[.08,1.3,.08]);Je([6.6,.22,4.3],[i.x,t+2.66,i.z],zi[3],!1,[0,0,-.015]),Je([4.5,.12,.54],[i.x,t+.72,i.z+1.1],_s),Je([4.5,.12,.14],[i.x,t+1.12,i.z+1.27],_s);let n=new it(new xn(4.4,1.1),new et({map:Ks("\u041E\u0421\u0422\u0410\u041D\u041E\u0412\u041A\u0410","\u0412\u041E\u0421\u0422\u041E\u0427\u041D\u042B\u0419 \u0422\u0420\u0410\u041A\u0422 \xB7 +4 \u041C","#d8c392"),roughness:.83}));n.position.set(i.x,t+1.82,i.z+1.74),Ot.add(n);let s=new it(new nn(.08,.1,3.6,8),Il);s.position.set(i.x+4.2,t+1.8,i.z-2.4),Ot.add(s);let r=new it(new Rt(.9,1.2,.12),new et({color:5401704,roughness:.64,metalness:.22}));r.position.set(i.x+4.2,t+3.9,i.z-2.4),Ot.add(r)}function hE(){oE();for(let s of un.roads)Em(s.points,s.width+.9,Nb,!0),Em(s.points,s.width,Pb,!1);qr(-274,-342,35,88,340,_d,67),qr(-283,-216,34,72,320,ll,119),qr(-280,-45,35,82,360,_d,283),qr(-265,114,34,76,300,ll,617),qr(-204,-325,28,58,230,ll,342),qr(-205,172,26,40,180,_d,721);let i=[[-298,-414,1.15],[-285,-390,.9],[-304,-300,1],[-292,-232,1.22],[-300,-178,.88],[-292,-110,1.12],[-300,-38,.95],[-290,38,1.16],[-302,124,1],[-286,186,1.18],[-300,262,.92],[-286,336,1.08],[-300,407,1.24],[294,-405,1],[301,-315,1.15],[293,-248,.92],[299,-174,1.05],[292,-102,.88],[300,-28,1.12],[292,44,1],[300,238,1.15],[294,316,.96],[301,404,1.18]];for(let[s,r,o]of i)aE(s,r,o);cE();for(let s of un.lots){Zo(s.x,s.z,s.width,s.depth,s.gate);let r=s.x,o=s.z;s.gate==="east"?r-=6:s.gate==="west"?r+=6:s.gate==="north"?o+=5:o-=5;let a=s.id.startsWith("S-")||Number(s.id.split("-")[1])%3===0?Md:Xr[Number(s.id.split("-")[1])%Xr.length];ol({x:r,z:o,width:s.houseWidth,depth:s.houseDepth,height:s.id.startsWith("S-")?3.1:2.85,label:s.id,subtitle:"\u0416\u0418\u041B\u041E\u0419 \u0423\u0427\u0410\u0421\u0422\u041E\u041A",wallMaterial:a,roofType:s.roof,roofMaterial:zi[(s.roof+Number(s.id.split("-")[1]))%zi.length],brick:a===Md,windows:s.houseWidth>11?2:1,chimney:!0})}let t=un.school;Zo(t.x,t.z,t.width+12,t.depth+14,"east",3.2),ol({x:t.x,z:t.z,width:t.width,depth:t.depth,height:4.8,label:"\u0428\u041A\u041E\u041B\u0410",subtitle:"\u0421\u0415\u041B\u042C\u0421\u041A\u0410\u042F \u0428\u041A\u041E\u041B\u0410",wallMaterial:Md,roofType:1,roofMaterial:zi[2],windows:7,chimney:!0,accent:"#d8c8a4"});let e=un.shop;Zo(e.x,e.z,24,19,"north",3.2),ol({x:e.x,z:e.z,width:e.width,depth:e.depth,height:3.45,label:"\u041C\u0410\u0413\u0410\u0417\u0418\u041D",subtitle:"\u041F\u0420\u041E\u0414\u0423\u041A\u0422\u042B \xB7 08:00\u201320:00",wallMaterial:Xr[2],roofType:0,roofMaterial:zi[1],windows:2,accent:"#e3d19e"});for(let s=0;s<un.garages.length;s++){let r=un.garages[s];ol({x:r.x,z:r.z,width:r.width,depth:r.depth,height:2.8,label:`\u0413\u0410\u0420\u0410\u0416 ${s+1}`,subtitle:"\u0427\u0410\u0421\u0422\u041D\u042B\u0419 \u0421\u0415\u041A\u0422\u041E\u0420",wallMaterial:Xr[s%Xr.length],roofType:s%4,roofMaterial:zi[s%zi.length],windows:0,chimney:!1})}lE();for(let s of un.hangars)Zo(s.x,s.z,s.width+9,s.depth+10,"south",5),rE(s);for(let s of un.scrapYards){Zo(s.x,s.z,s.width,s.depth,s.gate,5.5);let r=le(s.x),o=[[-s.width*.29,-s.depth*.18,2.4,1,1.6],[s.width*.26,-s.depth*.22,1.8,1.25,1],[-s.width*.1,s.depth*.26,3.1,.75,1.25],[s.width*.26,s.depth*.2,1.7,.8,1.8]];for(let a=0;a<o.length;a++){let[c,l,h,d,u]=o[a],f=new it(new Rt(h,d,u),a%2?Zm:Il);f.position.set(s.x+c,r+d/2+.08,s.z+l),f.rotation.y=(a-1)*.23,f.rotation.z=a%2?.08:-.06,f.castShadow=!0,f.receiveShadow=!0,Ot.add(f),Wi([s.x+c,r+d/2+.08,s.z+l],[h/2,d/2,u/2])}for(let a=0;a<3;a++){let c=new it(new Zn(.72+a*.04,.19,8,18),Tl);c.rotation.x=Math.PI/2,c.position.set(s.x-s.width*.12+a*1.9,r+.19,s.z+s.depth*.02),c.castShadow=!0,Ot.add(c)}}tE();for(let s of un.snowDrifts)Yr(s.x,s.z,s.amount);Yr(-248,-390,.86),Yr(255,178,.9),Yr(126,91,.82),Yr(-149,304,.82);let n=le(Ye.x)+.105;rl("\u0414\u0420\u041E\u0412\u0410 F-01",[-15.4,n,108.7],.18),rl("\u0414\u0420\u041E\u0412\u0410 F-02",[-14.6,n,108.5],-.36),rl("\u0414\u0420\u041E\u0412\u0410 F-03",[-15.7,n,109.4],.46),rl("\u0414\u0420\u041E\u0412\u0410 F-04",[-14.9,n+.17,109.1],-.2),Kb("\u041B\u041E\u041F\u0410\u0422\u0410 S-01",[-36.5,le(-36.5)+.08,117],-.25),il("\u042F\u0429\u0418\u041A M-01",[230,Tn(230)+.42,-336],[.86,.84,.78],7.5,7692356,-.08),il("\u042F\u0429\u0418\u041A M-02",[251,Tn(251)+.38,-351],[.72,.76,.68],5.2,9137480,.14),wd("\u0411\u041E\u0427\u041A\u0410 M-01",[241,Tn(241)+.54,-354],.38,1.08,18,0),bm("\u0414\u041E\u0421\u041A\u0410 P-01",[235,Tn(235)+.09,-326],2.35,.36,.15,3.4,.06),il("\u042F\u0429\u0418\u041A M-03",[248,Tn(248)+.48,-159],[.95,.96,.86],11,7428673,.24),wd("\u0411\u041E\u0427\u041A\u0410 M-02",[260,Tn(260)+.5,-138],.35,1,15,1,.18),sl("\u0424\u041B\u0410\u041A\u041E\u041D G-01",[240,Tn(240)+.22,-142],0),sl("\u0424\u041B\u0410\u041A\u041E\u041D G-02",[242,Tn(242)+.22,-142.3],1,.5),il("\u042F\u0429\u0418\u041A M-04",[181,Tn(181)+.44,-81],[.72,.76,.72],5.4,9137480,-.17),wd("\u0411\u041E\u0427\u041A\u0410 M-03",[194,Tn(194)+.47,-90],.33,.94,14,0,-.12),bm("\u0414\u041E\u0421\u041A\u0410 P-02",[186,Tn(186)+.085,-70],2,.32,.16,3.1,-.33),sl("\u0424\u041B\u0410\u041A\u041E\u041D G-03",[47,Tn(47)+.22,166],2,-.3),sl("\u0424\u041B\u0410\u041A\u041E\u041D G-04",[49,Tn(49)+.22,166.3],1,.4),nE()}function Tn(i){return le(i)}hE();var s0=[],qs=null,uE=null,fs=null,ia=null,hi=!1,sa=0,ul=0,di=0,Oi=0,r0=.82,vl=null,dn=null;function dE(){let i=[new et({color:8009768,roughness:.95}),new et({color:9126960,roughness:.94}),new et({color:6500646,roughness:.96})],t=new et({color:2501417,roughness:.62,metalness:.62}),e=new Qt;e.position.copy(Ye);let n=new it(new Rt(1.28,1,1.06),i[0]);n.position.y=.5,e.add(n);for(let d=0;d<5;d++)for(let u=0;u<4;u++){let f=d%2?.14:0,m=new it(new Rt(.27,.16,.045),i[(d*3+u)%i.length]);m.position.set(-.47+u*.29+f,.13+d*.18,.54),e.add(m)}let s=new it(new Rt(.58,.39,.035),t);s.position.set(0,.48,.591),e.add(s);let r=new it(new Rt(.43,.25,.014),new et({color:1117707,roughness:1,emissive:788227}));r.position.set(0,.48,.616),e.add(r),fs=new it(new Rt(.39,.22,.008),new gn({color:16743212,transparent:!0,opacity:.86})),fs.position.set(0,.48,.628),fs.visible=!1,e.add(fs);for(let d of[-.34,.34]){let u=new it(new Rt(.065,.5,.075),t);u.position.set(d,.48,.64),e.add(u)}for(let d of[.24,.72]){let u=new it(new Rt(.72,.06,.075),t);u.position.set(0,d,.64),e.add(u)}let o=new it(new Rt(.035,.16,.045),t);o.position.set(.25,.48,.69),e.add(o);let a=new it(new Rt(.42,1.62,.44),i[2]);a.position.set(.32,1.78,-.24),e.add(a);let c=new it(new Rt(.55,.1,.57),t);c.position.set(.32,2.64,-.24),e.add(c),Ot.add(e),Pl(e,{kind:"stove",name:"\u041A\u0418\u0420\u041F\u0418\u0427\u041D\u0410\u042F \u041F\u0415\u0427\u042C",range:4.7}),uE=e,Wi([Ye.x,Ye.y+.5,Ye.z],[.66,.5,.55]),Wi([Ye.x+.32,Ye.y+1.78,Ye.z-.24],[.21,.81,.22]),qs=new Qt,qs.position.set(Ye.x,Ye.y,Ye.z+.66),qs.visible=!1,Ot.add(qs);let h=[16733986,16747303,16761678,16769162];for(let d=0;d<13;d++){let u=new gn({color:h[d%h.length],transparent:!0,opacity:0,depthWrite:!1,side:Fe,blending:oc}),f=new it(new Pc(.1+d%3*.025,0),u);f.visible=!1,qs.add(f),s0.push({mesh:f,phase:Math.random()*Math.PI*2,rate:1.35+Math.random()*1.45,spread:.03+Math.random()*.11})}ia=new Fr(16746296,0,5.3,2),ia.position.set(Ye.x,Ye.y+.92,Ye.z+.92),Ot.add(ia)}dE();var fE=[new et({color:10926262,roughness:.73,metalness:.14}),new et({color:12753512,roughness:.76,metalness:.1})],dl=new et({color:5399911,roughness:.63,metalness:.22}),pE=[new et({color:7916220,roughness:.45,metalness:.12,emissive:1194549,emissiveIntensity:.25}),new et({color:15044177,roughness:.5,metalness:.12,emissive:3743763,emissiveIntensity:.2})];function mE(i,t){if(i==="head")return new Ic(t[0]/2,14,10);if(i.includes("hand"))return new Rt(t[0],t[1],t[2]);if(i.includes("foot"))return new Rt(t[0],t[1],t[2]);if(i==="torso")return new Rt(t[0],t[1],t[2]);if(i==="pelvis")return new Rt(t[0],t[1],t[2]);let e=Math.min(t[0],t[2])*.48,n=Math.max(.03,t[1]-2*e);return new Tc(e,n,3,9)}function Bi(i,t,e,n,s,r=i.skin,o=null){let a=new Pt({mass:n,type:Pt.KINEMATIC,material:Fm,position:new M(s[0],s[1],s[2]),collisionFilterGroup:zm,collisionFilterMask:Js,angularDamping:.2,linearDamping:.08,allowSleep:!0,sleepSpeedLimit:.08,sleepTimeLimit:.65});a.addShape(new Fn(new M(e[0]/2,e[1]/2,e[2]/2))),a.gameMeta={kind:"mannequin",human:i,key:t,body:a},kt.addBody(a);let c=new Qt,l=new it(o||mE(t,e),r);if(c.add(l),t==="torso"){let d=new it(new Rt(e[0]*.42,e[1]*.24,.018),pE[i.colorIndex]);d.position.set(0,.04,e[2]/2+.009),c.add(d);let u=new it(new Rt(e[0]*.26,.022,.02),dl);u.position.set(0,-.06,e[2]/2+.012),c.add(u)}if(t==="head"){let d=new it(new Rt(e[0]*.44,.026,.012),dl);d.position.set(0,.005,e[2]/2-.008),c.add(d)}if(t.startsWith("hand")){let d=new it(new Rt(.038,.09,.045),r);d.position.set(t.endsWith("L")?.062:-.062,.003,.002),c.add(d)}if(t.startsWith("foot")){let d=new it(new Rt(e[0]*.78,e[1]*.45,.022),dl);d.position.set(0,-.01,e[2]/2-.012),c.add(d)}c.position.copy(a.position),c.quaternion.copy(a.quaternion),Ot.add(c),Pl(c,a.gameMeta);let h={key:t,body:a,visual:c,mass:n,size:e};return i.parts.push(h),i.partMap[t]=h,Gi.push({body:a,visual:c}),h}function cs(i,t,e,n,s,r,o=.35,a=[0,1,0]){let c=i.partMap[t].body,l=i.partMap[e].body,h=new Kc(c,l,{pivotA:new M(...n),pivotB:new M(...s),axisA:new M(...a),axisB:new M(...a),angle:r,twistAngle:o,maxForce:2e5,collideConnected:!1});return kt.addConstraint(h),i.constraints.push(h),h}function o0(i,t,e){let n={id:i,origin:t,colorIndex:e,skin:fE[e],parts:[],partMap:{},constraints:[],active:!1,dead:!1,health:100,hitFlash:0,behavior:i==="D-01"?"peaceful":"aggressive",state:"idle",rootX:t[0],rootZ:t[2],yaw:0,stateTime:0,quietTime:0,attackCooldown:0,punchSide:1,walkPhase:0,wanderTarget:null,navDirection:null},s=t[0],r=t[2],o=le(s),a=(c,l,h)=>[s+c,o+l,r+h];Bi(n,"pelvis",[.39,.28,.25],5.2,a(0,.97,0),dl),Bi(n,"torso",[.44,.58,.28],9.4,a(0,1.39,0)),Bi(n,"head",[.32,.32,.32],3.1,a(0,1.84,0));for(let c of[-1,1]){let l=c<0?"L":"R";Bi(n,`upperArm${l}`,[.16,.39,.16],2.15,a(c*.32,1.365,0),n.skin),Bi(n,`lowerArm${l}`,[.135,.34,.135],1.45,a(c*.35,1,.015),n.skin),Bi(n,`hand${l}`,[.135,.13,.095],.55,a(c*.36,.765,.025),n.skin),Bi(n,`thigh${l}`,[.21,.45,.21],4.15,a(c*.125,.735,0)),Bi(n,`shin${l}`,[.16,.41,.17],2.55,a(c*.13,.305,.005)),Bi(n,`foot${l}`,[.17,.12,.31],.9,a(c*.13,.06,.075))}cs(n,"pelvis","torso",[0,.14,0],[0,-.29,0],.34,.28),cs(n,"torso","head",[0,.285,0],[0,-.15,0],.5,.38);for(let c of[-1,1]){let l=c<0?"L":"R";cs(n,"torso",`upperArm${l}`,[c*.215,.17,0],[-c*.105,.19,0],1.36,.88,[1,0,0]),cs(n,`upperArm${l}`,`lowerArm${l}`,[c*.015,-.195,0],[-c*.015,.17,-.015],.16,2.15,[1,0,0]),cs(n,`lowerArm${l}`,`hand${l}`,[c*.005,-.17,0],[-c*.005,.06,-.01],.42,.46,[1,0,0]),cs(n,"pelvis",`thigh${l}`,[c*.125,-.02,0],[0,.22,0],1.08,.55,[1,0,0]),cs(n,`thigh${l}`,`shin${l}`,[0,-.22,0],[0,.205,-.005],.14,2.05,[1,0,0]),cs(n,`shin${l}`,`foot${l}`,[0,-.205,0],[0,.035,-.075],.34,.42,[1,0,0])}for(let c of n.parts)c.restLocal={x:c.body.position.x-s,y:c.body.position.y-o,z:c.body.position.z-r},c.restQuaternion=c.body.quaternion.clone();for(let c of n.parts)c.body.addEventListener("collide",l=>{if(n.active)return;let h=l.body,d=h?.gameMeta?.lastVelocity,u=d?Math.hypot(d.x,d.y,d.z):0,f=l.contact?Math.abs(l.contact.getImpactVelocityAlongNormal()):0,m=Math.max(f,u);if(m>1.15&&h&&h.type===Pt.DYNAMIC&&h.gameMeta?.kind!=="mannequin"){let x=d?new M(d.x,d.y,d.z):h.velocity;tf(n,c,m,x)}});return Hm.push(n),n}o0("D-01",[-135,0,212],0);o0("D-02",[143,0,-142],1);var gE={pelvis:[0,.84,0,.08,0,0],torso:[0,1.28,.025,.08,0,0],head:[0,1.69,.025,0,0,0],upperArmL:[-.31,1.18,.045,-.12,0,-.04],lowerArmL:[-.34,.94,.16,-.72,0,0],handL:[-.35,.77,.29,-.55,0,0],upperArmR:[.31,1.18,.045,-.12,0,.04],lowerArmR:[.34,.94,.16,-.72,0,0],handR:[.35,.77,.29,-.55,0,0],thighL:[-.125,.49,.055,0,0,0],shinL:[-.13,.14,-.115,-Math.PI/2,0,0],footL:[-.13,.065,-.3,0,0,0],thighR:[.125,.49,.055,0,0,0],shinR:[.13,.14,-.115,-Math.PI/2,0,0],footR:[.13,.065,-.3,0,0,0]};function xE(i,t="idle"){let e={},n=i.walkPhase,s=t==="walk"||t==="attack",r=t==="attack"?Math.sin(Jt.clamp(i.stateTime/.74,0,1)*Math.PI):0;for(let o of i.parts){let a=o.restLocal,c=[a.x,a.y,a.z,0,0,0];if(o.key==="pelvis"&&s&&(c[1]+=Math.sin(n*2)*.014),o.key==="torso"&&s&&(c[1]+=Math.sin(n*2+.4)*.018),o.key==="head"&&s&&(c[1]+=Math.sin(n*2+.7)*.012),s&&/^(thigh|shin|foot)[LR]$/.test(o.key)){let l=o.key.endsWith("L")?-1:1,h=Math.sin(n+(l>0?Math.PI:0));o.key.startsWith("thigh")?(c[2]+=h*.105,c[3]=-h*.3):o.key.startsWith("shin")?(c[2]-=h*.045,c[3]=Math.max(0,h)*.3):(c[2]+=h*.05,c[3]=-h*.12)}if(s&&/^(upperArm|lowerArm|hand)[LR]$/.test(o.key)){let l=o.key.endsWith("L")?-1:1,h=Math.sin(n+(l>0?Math.PI:0));c[2]-=h*(o.key.startsWith("upperArm")?.085:.045),c[3]=-h*(o.key.startsWith("upperArm")?.4:.18)}if(t==="attack"&&/^(upperArm|lowerArm|hand)[LR]$/.test(o.key)){let l=o.key.endsWith("L")?-1:1;l===i.punchSide?o.key.startsWith("upperArm")?(c[0]=l*.31,c[1]=1.43,c[2]=.12+r*.11,c[3]=-.92*r):o.key.startsWith("lowerArm")?(c[0]=l*.33,c[1]=1.22,c[2]=.27+r*.2,c[3]=-1.12*r):(c[0]=l*.35,c[1]=1.08,c[2]=.44+r*.26,c[3]=-.75*r):o.key.startsWith("upperArm")?(c[1]=1.37,c[2]=.06,c[3]=-.26):o.key.startsWith("lowerArm")?(c[1]=1.18,c[2]=.14,c[3]=-.48):(c[1]=1.02,c[2]=.2,c[3]=-.38)}e[o.key]=c}return e}function a0(i,t){let e={},n=Math.cos(i.yaw),s=Math.sin(i.yaw),r=new Be;r.setFromAxisAngle(new M(0,1,0),i.yaw);for(let o of i.parts){let a=t[o.key]||[o.restLocal.x,o.restLocal.y,o.restLocal.z,0,0,0],c=new Be;c.setFromEuler(a[3]||0,a[4]||0,a[5]||0,"XYZ");let l=new Be;r.mult(c,l),e[o.key]={position:new M(i.rootX+a[0]*n+a[2]*s,le(i.rootX)+a[1],i.rootZ-a[0]*s+a[2]*n),quaternion:l}}return e}function us(i,t="idle"){return a0(i,xE(i,t))}function yE(i){return a0(i,gE)}function vE(i){let t={};for(let e of i.parts)t[e.key]={position:e.body.position.clone(),quaternion:e.body.quaternion.clone()};return t}function _E(i,t){for(let e of i.parts){let n=e.body;n.type=t,n.mass=e.mass,n.updateMassProperties(),n.force.set(0,0,0),n.torque.set(0,0,0),n.velocity.set(0,0,0),n.angularVelocity.set(0,0,0),n.wakeUp()}kt.broadphase.dirty=!0}function ls(i,t,e){let n=Math.max(.001,e);for(let s of i.parts){let r=s.body,o=t[s.key];r.velocity.set(Jt.clamp((o.position.x-r.position.x)/n,-9,9),Jt.clamp((o.position.y-r.position.y)/n,-9,9),Jt.clamp((o.position.z-r.position.z)/n,-9,9)),r.quaternion.copy(o.quaternion),r.angularVelocity.set(0,0,0),r.force.set(0,0,0),r.torque.set(0,0,0),r.aabbNeedsUpdate=!0,r.wakeUp()}kt.broadphase.dirty=!0}function Sm(i,t,e,n,s){let r=Jt.smoothstep(n,0,1),o=Math.max(.001,s);for(let a of i.parts){let c=a.body,l=t[a.key],h=e[a.key],d=Jt.lerp(l.position.x,h.position.x,r),u=Jt.lerp(l.position.y,h.position.y,r),f=Jt.lerp(l.position.z,h.position.z,r);c.velocity.set(Jt.clamp((d-c.position.x)/o,-9,9),Jt.clamp((u-c.position.y)/o,-9,9),Jt.clamp((f-c.position.z)/o,-9,9)),l.quaternion.slerp(h.quaternion,r,c.quaternion),c.angularVelocity.set(0,0,0),c.force.set(0,0,0),c.torque.set(0,0,0),c.aabbNeedsUpdate=!0,c.wakeUp()}kt.broadphase.dirty=!0}function ME(i){let t=i.partMap.pelvis.body.position;i.rootX=Jt.clamp(t.x,Ce.minX+2,Ce.maxX-2),i.rootZ=Jt.clamp(t.z,Ce.minZ+2,Ce.maxZ-2);let e=i.behavior==="peaceful"?Jt.clamp(i.rootX+(i.rootX<0?-2.6:2.6),Ce.minX+3,Ce.maxX-3):ft.position.x,n=i.behavior==="peaceful"?i.rootZ+.05:ft.position.z;i.yaw=Math.atan2(e-i.rootX,n-i.rootZ),i.recoveryFrom=vE(i),i.kneelingPose=yE(i),i.standingPose=us(i,"idle"),i.state="recovering-to-knees",i.stateTime=0,_E(i,Pt.KINEMATIC)}function wE(i){if(i.stateTime=0,i.walkPhase=0,i.navDirection=null,i.behavior==="peaceful"){let t=i.rootX<0?-1:1;i.wanderTarget={x:Jt.clamp(i.rootX+t*2.6,Ce.minX+3,Ce.maxX-3),z:Jt.clamp(i.rootZ+.12,Ce.minZ+3,Ce.maxZ-3)},i.state="walking-away"}else i.state="chasing"}function bE(i,t,e){let n=Math.hypot(t,e);if(n<1e-4)return{x:0,z:0};t/=n,e/=n;let s=[0,.38,-.38,.76,-.76,1.18,-1.18,1.62,-1.62],r={x:t,z:e,score:-1/0};for(let o of s){let a=Math.cos(o),c=Math.sin(o),l=t*a-e*c,h=t*c+e*a,d=(l*t+h*e)*2.1;i.navDirection&&(d+=(l*i.navDirection.x+h*i.navDirection.z)*.24);for(let u of Gi){let f=u.body,m=f.gameMeta;if(m?.kind!=="prop"||m.isStored||m.isHeld)continue;let x=f.position.x-i.rootX,g=f.position.z-i.rootZ,p=x*l+g*h;if(p<-.15||p>2.1)continue;let y=Math.abs(x*h-g*l),_=Math.min(1.35,Math.max(.36,f.boundingRadius||.55))+.38;if(y<_){let v=Jt.clamp((2.1-Math.max(0,p))/1.75,.35,1.45);d-=(_-y)*2.2*v}}d>r.score&&(r={x:l,z:h,score:d})}return i.navDirection={x:r.x,z:r.z},r}function fl(i,t,e,n){if(Math.hypot(t,e)<1e-4)return;let r=Math.atan2(t,e)-i.yaw;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;i.yaw+=Jt.clamp(r,-n*5.5,n*5.5)}function Tm(i,t,e,n,s){let r=t-i.rootX,o=e-i.rootZ,a=Math.hypot(r,o);if(a<.025)return a;let c=bE(i,r,o);fl(i,c.x,c.z,s);let l=Math.min(a,n*s);return i.rootX=Jt.clamp(i.rootX+c.x*l,Ce.minX+2,Ce.maxX-2),i.rootZ=Jt.clamp(i.rootZ+c.z*l,Ce.minZ+2,Ce.maxZ-2),i.walkPhase+=s*(n+1.8),a}function EE(i){let t=0,e=0;for(let n of i.parts)t=Math.max(t,n.body.velocity.length()),e=Math.max(e,n.body.angularVelocity.length());return t<.58&&e<1.15}function SE(i){for(let t of Hm){if(t.hitFlash=Math.max(0,t.hitFlash-i),t.dead||!t.active)continue;if(t.attackCooldown=Math.max(0,t.attackCooldown-i),t.state==="falling"){t.stateTime+=i,t.quietTime=EE(t)?t.quietTime+i:0,t.stateTime>=1.15&&(t.quietTime>=.58||t.stateTime>=3.85)&&ME(t);continue}if(t.state==="recovering-to-knees"){t.stateTime+=i,Sm(t,t.recoveryFrom,t.kneelingPose,t.stateTime/1.2,i),t.stateTime>=1.2&&(t.state="kneeling-hold",t.stateTime=0);continue}if(t.state==="kneeling-hold"){t.stateTime+=i,ls(t,t.kneelingPose,i),t.stateTime>=.48&&(t.state="recovering-to-feet",t.stateTime=0);continue}if(t.state==="recovering-to-feet"){t.stateTime+=i,Sm(t,t.kneelingPose,t.standingPose,t.stateTime/1.08,i),t.stateTime>=1.08&&wE(t);continue}if(t.state==="walking-away"){let r=Tm(t,t.wanderTarget.x,t.wanderTarget.z,1.35,i);r<.24&&(t.state="idle-after",t.stateTime=0),ls(t,us(t,r>.24?"walk":"idle"),i);continue}if(t.state==="idle-after"){t.stateTime+=i,ls(t,us(t,"idle"),i);continue}if(t.behavior!=="aggressive")continue;let e=ft.position.x-t.rootX,n=ft.position.z-t.rootZ,s=Math.hypot(e,n);if(t.state==="attacking"){if(t.stateTime+=i,fl(t,e,n,i),s>1.95&&t.stateTime<.28){t.state="chasing",t.stateTime=0,ls(t,us(t,"walk"),i);continue}ls(t,us(t,"attack"),i),!t.attackHitDone&&t.stateTime>=.27&&(t.attackHitDone=!0,s<=1.55&&w0(8,"torso")),t.stateTime>=.74&&(t.state="chasing",t.stateTime=0);continue}if(s<=1.35&&t.attackCooldown<=0){t.state="attacking",t.stateTime=0,t.attackHitDone=!1,t.attackCooldown=1.35,t.punchSide*=-1,fl(t,e,n,i),ls(t,us(t,"attack"),i);continue}s>1.05?(Tm(t,ft.position.x,ft.position.z,2.9,i),ls(t,us(t,"walk"),i)):(fl(t,e,n,i),ls(t,us(t,"idle"),i))}}var ra=new M(un.stop.x,le(un.stop.x)+.87,un.stop.z+4),ft=new Pt({mass:72,material:Sl,position:ra.clone(),collisionFilterGroup:fa,collisionFilterMask:Js&~fa,fixedRotation:!0,linearDamping:.02,angularDamping:1,allowSleep:!1});ft.addShape(new Vs(.31,.31,1.08,12));ft.addShape(new Wr(.31),new M(0,.53,0));ft.addShape(new Wr(.31),new M(0,-.53,0));ft.gameMeta={kind:"player"};kt.addBody(ft);var _l=!1,Ml=ra.y,wl=0,Am=0,ps=new Qt;Ve.add(ps);var TE=new et({color:5858394,roughness:.86,metalness:.02}),AE=new et({color:2436649,roughness:.78,metalness:.08}),Ko=new et({color:3753018,roughness:.91,metalness:.01}),Ed=new et({color:2107681,roughness:.84,metalness:.03}),jo=new et({color:5661262,roughness:.88,metalness:.02}),ie=new et({color:2699832,roughness:.46,metalness:.68}),Bt=new et({color:1514784,roughness:.62,metalness:.42}),ki=new et({color:3357239,roughness:.82,metalness:.08}),pa=new et({color:7491637,roughness:.84,metalness:.02}),Nl=new et({color:4994854,roughness:.9,metalness:.01}),Pd=new et({color:5342898,roughness:.23,metalness:.26,emissive:1057594,emissiveIntensity:.2}),je=new Qt;ps.add(je);var $=new Qt;je.add($);var Un=new L(.28,-.33,-.78),zn=new hn(.25,.25,.015,"XYZ");je.position.copy(Un);je.rotation.copy(zn);var Xs={},ke=null,io=new L(0,-.145,.035),An=null,Ys=new L(0,-.045,-.44),Rn=new Qt;je.add(Rn);var $r=0,ds=0,On=0,ma=0,Zs=0,sn=!1,$s=0,bl=!1,Zr=0,Cn=null,qd=new Map(nl.map(i=>[i.id,pm(i)])),Ws=null,ga=null,Nd=[],Fi=0,Xd=0;function Qs(i){Xd=Kt?i:.78}function vn(i,t,e,n=0){let s=new it(i,t);return s.position.set(e[0],e[1],e[2]),s.rotation.z=n,s.castShadow=!1,s.receiveShadow=!1,s}function st(i,t,e,n,s=[0,0,0]){let r=new it(new Rt(t[0],t[1],t[2]),n);return r.position.set(e[0],e[1],e[2]),r.rotation.set(s[0],s[1],s[2]),r.castShadow=!1,r.receiveShadow=!1,i.add(r),r}function He(i,t,e,n,s,r=12){let o=new it(new nn(t,t,e,r,1),s);return o.position.set(n[0],n[1],n[2]),o.rotation.x=Math.PI/2,o.castShadow=!1,o.receiveShadow=!1,i.add(o),o}var Yd=new et({color:7957330,roughness:.79,metalness:.08}),ms=new et({color:5660773,roughness:.4,metalness:.74}),Rm=new et({color:9016474,roughness:.31,metalness:.82}),Qo=new et({color:2435625,roughness:.92,metalness:.02}),RE=new et({color:9080717,roughness:.38,metalness:.83});function CE(){let i=new it(new Nr(.06,.19,6),new gn({color:16760168,transparent:!0,opacity:.92}));i.rotation.x=-Math.PI/2,i.position.z=-.075,Rn.add(i),Rn.add(new it(new Rc(.055,0),new gn({color:16773296})));let t=new Fr(16754499,0,2.2,2);Rn.add(t),Rn.userData.light=t,Rn.visible=!1}CE();function IE(){$.traverse(i=>{i.geometry&&i.geometry.dispose()}),$.clear(),ke=null,An=null,dn=null}function PE(){st($,[.205,.145,.46],[0,.005,.035],ie),st($,[.184,.036,.43],[0,.095,.025],Bt),st($,[.045,.025,.47],[0,.132,-.02],ie),st($,[.11,.02,.11],[0,.158,-.15],Bt),st($,[.018,.026,.16],[.112,.025,.035],Bt),st($,[.055,.036,.13],[.112,.026,-.03],ie),st($,[.065,.025,.1],[-.113,.025,.105],Bt),st($,[.06,.025,.1],[-.12,-.005,.16],ie),He($,.033,.76,[0,.025,-.575],ie,10),He($,.046,.13,[0,.025,-1.015],Bt,10),st($,[.085,.065,.08],[0,.115,-.88],ie),st($,[.018,.075,.025],[0,.18,-.91],Bt),st($,[.13,.025,.045],[0,.153,-.9],ie);for(let s of[-1,1])st($,[.012,.028,.045],[s*.043,.026,-1.015],ie);st($,[.17,.095,.36],[0,-.045,-.39],pa),st($,[.178,.016,.31],[0,.014,-.39],Nl);for(let s of[-1,1]){st($,[.014,.022,.31],[s*.09,-.045,-.39],ie);for(let r=0;r<7;r++)st($,[.009,.013,.018],[s*.101,-.045,-.52+r*.043],Bt)}st($,[.055,.035,.44],[0,.118,-.39],Bt),st($,[.11,.06,.08],[0,.16,-.105],ie),st($,[.045,.047,.028],[0,.195,-.115],Bt);let i=new Qt;i.position.set(0,.226,-.17),$.add(i),He(i,.063,.28,[0,0,-.015],Bt,8),He(i,.073,.055,[0,0,.105],ie,8),He(i,.073,.04,[0,0,-.155],ie,8);let t=new it(new Ci(.053,8),Pd);t.position.z=.135,i.add(t);let e=new it(new Ci(.047,8),Pd);e.position.z=-.177,e.rotation.y=Math.PI,i.add(e),st($,[.11,.025,.22],[0,.178,-.17],ie),st($,[.088,.22,.115],[.012,-.17,.165],ki,[-.18,0,-.04]);let n=new it(new Zn(.061,.009,5,12),ie);n.position.set(0,-.105,.075),$.add(n),st($,[.018,.09,.022],[.015,-.1,.045],Bt,[.22,0,0]),ke=new Qt,io.set(0,-.145,.035),$.add(ke),st(ke,[.11,.26,.17],[0,-.13,0],ki,[-.12,0,0]),st(ke,[.116,.035,.175],[0,-.252,-.01],Bt,[-.12,0,0]);for(let s=0;s<4;s++)st(ke,[.115,.012,.18],[0,-.06-s*.045,0],ie,[-.12,0,0]);st($,[.105,.105,.44],[0,.015,.445],ki),st($,[.13,.12,.045],[0,.005,.67],Bt),st($,[.09,.045,.24],[0,.078,.42],ie),st($,[.18,.012,.12],[0,-.048,.57],Bt)}function NE(){st($,[.2,.15,.43],[0,.005,.035],ie),st($,[.19,.045,.39],[0,.097,.025],Bt),st($,[.05,.025,.55],[0,.134,-.09],ie),st($,[.17,.105,.4],[0,-.025,-.39],ki),st($,[.19,.02,.42],[0,.045,-.38],Bt);for(let e of[-1,1]){st($,[.015,.025,.35],[e*.095,-.025,-.4],ie);for(let n=0;n<6;n++)st($,[.012,.012,.025],[e*.105,-.025,-.55+n*.06],Bt)}He($,.029,.88,[0,.02,-.75],ie,10),He($,.043,.11,[0,.02,-1.245],Bt,10),st($,[.045,.12,.04],[0,.17,-1.11],ie),st($,[.09,.04,.08],[0,.125,-1.08],Bt),st($,[.17,.024,.48],[0,.16,-.17],Bt),st($,[.12,.075,.11],[0,.205,-.12],ie);let i=new Qt;i.position.set(0,.25,-.19),$.add(i),He(i,.055,.25,[0,0,0],Bt,8),He(i,.064,.035,[0,0,.12],ie,8);let t=new it(new Ci(.044,8),Pd);t.position.z=.14,i.add(t),st($,[.09,.035,.09],[0,.19,.03],Bt),st($,[.09,.19,.12],[.012,-.15,.16],ki,[-.17,0,0]),st($,[.11,.04,.4],[0,-.008,.44],Bt),st($,[.08,.11,.08],[0,.005,.64],ki),st($,[.07,.095,.06],[0,.015,.72],Bt),ke=new Qt,io.set(0,-.145,.035),$.add(ke),st(ke,[.11,.26,.16],[0,-.13,0],Bt,[-.06,0,0]),st(ke,[.12,.028,.17],[0,-.255,-.01],ie);for(let e=0;e<4;e++)st(ke,[.115,.012,.17],[0,-.07-e*.045,0],Yd);st($,[.18,.012,.13],[0,-.045,.56],Bt)}function LE(i){let t=i.id==="tt",e=i.id==="glock-17",n=t?.39:e?.34:.32,s=-.055,r=e?ki:ie;st($,[.14,.095,.31],[0,-.035,.055],Bt),st($,[.13,.105,n],[0,.035,s],r),st($,[.12,.018,n*.78],[0,.092,s-.015],ms),He($,t?.025:.022,t?.35:.28,[0,.025,-.27],Bt,9),st($,[.09,.19,.12],[.008,-.15,.155],e?ki:Qo,[-.19,0,0]),st($,[.095,.035,.13],[.008,-.235,.16],Bt,[-.19,0,0]),st($,[.013,.075,.015],[.02,-.1,.08],ie,[.22,0,0]),st($,[.035,.038,.035],[0,.105,.075],Bt),st($,[.035,.04,.03],[0,.105,s-n*.46],Bt),e?(st($,[.17,.035,.18],[0,-.068,-.11],Bt),st($,[.105,.018,.08],[0,.1,-.17],Yd)):(st($,[.018,.075,.19],[.076,.035,.035],Bt),st($,[.02,.07,.16],[-.078,.035,.035],ms),t&&st($,[.012,.085,.17],[.075,.035,-.12],ms),st($,[.09,.14,.018],[0,-.16,.22],Nl,[-.19,0,0])),ke=new Qt,io.set(0,-.17,.15),$.add(ke),st(ke,[.09,.18,.105],[0,-.08,0],Bt,[-.17,0,0]),st(ke,[.095,.018,.11],[0,-.17,-.005],ms,[-.17,0,0])}function DE(){st($,[.2,.17,.39],[0,.005,.02],ie),st($,[.14,.055,.31],[0,.11,.01],Bt),He($,.038,.98,[0,.052,-.77],ms,10),He($,.046,.12,[0,.052,-1.32],Bt,10),He($,.027,.84,[0,-.055,-.63],Bt,10),st($,[.045,.1,.08],[0,.135,-1.17],ie),st($,[.11,.035,.17],[0,.13,-.12],Bt),st($,[.11,.21,.13],[0,-.16,.16],ki,[-.14,0,0]),st($,[.14,.12,.43],[0,0,.48],pa),st($,[.16,.13,.05],[0,-.005,.69],Bt),st($,[.19,.012,.1],[0,-.06,.57],Bt),An=new Qt,Ys.set(0,-.035,-.48),An.position.copy(Ys),$.add(An),st(An,[.16,.11,.26],[0,0,0],pa),st(An,[.17,.018,.23],[0,.052,0],Nl);for(let t=0;t<5;t++)st(An,[.17,.014,.018],[0,-.045+t*.021,-.105],Bt);let i=new it(new Zn(.065,.009,5,12),ie);i.position.set(0,-.095,.11),$.add(i),st($,[.018,.08,.02],[.01,-.095,.08],Bt),ke=null}function BE(i){if(i.model==="cleaver")st($,[.075,.24,.085],[0,-.1,.2],Qo,[-.12,0,0]),st($,[.09,.055,.095],[0,-.205,.2],ie),st($,[.31,.24,.065],[-.02,.075,-.17],Rm,[0,0,-.08]),st($,[.26,.025,.072],[-.035,-.048,-.18],ms,[0,0,-.08]),st($,[.075,.22,.06],[.1,.08,-.19],ie,[0,0,-.1]),st($,[.025,.025,.02],[0,-.07,.2],Yd);else if(i.model==="sledgehammer"){He($,.033,.98,[0,-.02,-.08],Nl,8),He($,.043,.34,[0,-.02,.24],Qo,8);for(let t=0;t<4;t++)st($,[.09,.012,.018],[0,-.02,.12+t*.055],ie);st($,[.42,.2,.22],[0,.02,-.64],ie),st($,[.11,.23,.24],[-.18,.02,-.64],Bt),st($,[.11,.23,.24],[.18,.02,-.64],Bt),st($,[.26,.035,.235],[0,.135,-.64],ms)}else if(i.model==="shovel")He($,.029,.98,[0,-.005,-.12],pa,10),He($,.04,.25,[0,0,.28],Qo,9),st($,[.11,.07,.075],[0,-.005,-.36],ie),st($,[.31,.045,.32],[0,-.035,-.59],ms,[.08,0,0]),st($,[.29,.018,.075],[0,-.006,-.69],Rm,[.08,0,0]),st($,[.035,.024,.035],[0,.015,-.43],Bt),dn=new it(new Dr(.12,1),ml),dn.scale.set(1.15,.62,1.45),dn.position.set(0,.006,-.57),dn.rotation.set(.18,.2,-.12),dn.visible=di>0,$.add(dn);else{He($,.058,.88,[0,-.005,-.17],pa,9),He($,.045,.28,[0,-.01,.33],Qo,8),st($,[.12,.1,.04],[0,-.005,.17],Bt);for(let t=0;t<7;t++){let e=-.52+t*.105,n=t%2===0?1:-1,s=new it(new Nr(.021,.13,4),RE);s.position.set(n*.062,.018,e),s.rotation.z=n*Math.PI/2,$.add(s),st($,[.025,.025,.025],[n*.035,.018,e+.035],Bt)}}}function Ld(i,t){let e=Xs[i];if(!e)return;let n=i==="left"?-1:1,s=new L(t[0]-n*.15,t[1]-.285,t[2]+.025);e.userData.gripPosition=s,e.userData.gripRotation=new hn(i==="left"?.08:-.06,0,i==="left"?.05:-.05),e.position.copy(s),e.rotation.copy(e.userData.gripRotation)}function FE(i){IE(),Hi(i)?BE(i):i.model==="ak"?PE():i.model==="m4"?NE():i.type==="pistol"?LE(i):i.type==="shotgun"&&DE();let t=Hi(i)?{position:[.29,-.34,-.82],rotation:[.2,.22,.04],left:[-.08,-.1,-.055],right:[.07,-.105,.18]}:i.type==="pistol"?{position:[.3,-.39,-.69],rotation:[.18,.22,.02],left:[-.045,-.14,.17],right:[.035,-.105,.15]}:i.type==="shotgun"?{position:[.28,-.34,-.82],rotation:[.23,.24,.015],left:[-.09,-.015,-.46],right:[.07,-.105,.17]}:{position:[.28,-.33,-.78],rotation:[.25,.25,.015],left:[-.09,-.015,-.39],right:[.07,-.105,.17]};Un.set(...t.position),zn.set(...t.rotation,"XYZ"),je.position.copy(Un),je.rotation.copy(zn),Ld("left",t.left),Ld("right",t.right);let e=i.type==="pistol"?-.43:i.type==="shotgun"?-1.38:Hi(i)?0:-1.09;Rn.position.set(0,i.type==="shotgun"?.052:.025,e),Rn.visible=!1,dn&&(dn.visible=di>0),$.visible=!0}function Ea(){return Gs.get(Cn)||null}function Ll(){return Cn&&qd.get(Cn)||null}function UE(i,t=!0){let e=Gs.get(i);return e?(Cn=i,sn=!1,Zs=0,On=0,ma=0,$s=0,bl=!1,Oi=0,vl=null,Zr=0,ds=0,$r=0,FE(e),Dl(),t&&pe(`${e.name.toUpperCase()} \xB7 \u0413\u041E\u0422\u041E\u0412\u041E`,.9),!0):!1}function c0(i){let t=new Qt,e=i<0?-1:1,n=vn(new Rt(.145,.33,.17),TE,[-e*.045,-.065,0],e*.37);t.add(n);let s=vn(new Rt(.152,.018,.176),Ed,[-e*.018,.058,-.002],e*.37);t.add(s);let r=vn(new Rt(.18,.075,.19),AE,[e*.082,.19,-.006],e*.37);t.add(r),t.add(vn(new Rt(.145,.018,.194),jo,[e*.082,.166,-.006],e*.37));let o=new Qt;o.position.set(e*.15,.285,-.025),o.rotation.z=-e*.06,t.add(o),o.add(vn(new Rt(.225,.165,.112),Ko,[0,0,0])),o.add(vn(new Rt(.135,.074,.012),jo,[0,.005,-.062])),o.add(vn(new Rt(.084,.018,.018),Ed,[0,-.071,-.052])),o.add(vn(new Rt(.196,.025,.018),Ed,[0,.067,-.057]));let a=[.081,.094,.087,.071];for(let u=0;u<4;u++){let f=new Qt,m=a[u]*.59,x=a[u]*.41;f.position.set((u-1.5)*.052,.078,-.018),o.add(f),f.add(vn(new Rt(.041,m,.076),Ko,[0,m*.5,0])),f.add(vn(new Rt(.044,.022,.078),jo,[0,m-.008,-.004]));let g=new Qt;g.position.y=m-.004,f.add(g),g.add(vn(new Rt(.037,x,.071),Ko,[0,x*.48,0])),g.add(vn(new Rt(.038,.015,.073),jo,[0,x-.007,-.002])),Nd.push({base:f,distal:g,fan:(u-1.5)*.055,side:e})}let c=new Qt;c.position.set(e*.104,-.008,-.025),c.rotation.z=e*.54,o.add(c),c.add(vn(new Rt(.057,.085,.078),Ko,[0,.041,0]));let l=new Qt;l.position.y=.075,c.add(l),l.add(vn(new Rt(.052,.067,.072),jo,[0,.031,-.002])),Nd.push({base:c,distal:l,fan:.54,side:e,thumb:!0});let h=i<0?[-.09,-.015,-.39]:[.07,-.105,.17];je.add(t);let d=i<0?"left":"right";Xs[d]=t,Ld(d,h)}c0(-1);c0(1);Fi=Xd=.78;ps.visible=!1;je.visible=!1;$.visible=!1;function zE(i){Fi=Jt.damp(Fi,Xd,13,i);for(let t of Nd)t.thumb?(t.base.rotation.x=-Fi*.6,t.base.rotation.z=t.side*(.54+Fi*.62),t.distal.rotation.x=-Fi*.9):(t.base.rotation.x=-Fi*.58,t.base.rotation.z=t.fan*(.25+Fi*.25),t.distal.rotation.x=-Fi*1.28)}function Dl(){let i=Ea(),t=Ll(),e=document.querySelector(".weapon-controls");e&&(e.style.display=i?"block":"none");let n=tt("ammo-count"),s=tt("fire-label"),r=tt("fire-button"),o=tt("reload-button");if(!i){n&&(n.textContent=""),s&&(s.textContent=""),r&&(r.disabled=!0,r.setAttribute("aria-label","\u041D\u0435\u0442 \u044D\u043A\u0438\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430"),r.classList.remove("melee-mode")),o&&(o.style.display="none");return}n&&(n.textContent=i.magazineSize===null?"":`${t.magazine} / ${t.reserve}`),s&&(s.textContent=Hi(i)?"\u0423\u0414\u0410\u0420":"\u041E\u0413\u041E\u041D\u042C"),r&&(r.disabled=i.magazineSize!==null&&t.magazine<=0&&t.reserve<=0,r.setAttribute("aria-label",`${i.name}: ${Hi(i)?"\u0443\u0434\u0430\u0440":"\u043E\u0433\u043E\u043D\u044C"}`),r.classList.toggle("melee-mode",Hi(i))),o&&(o.style.display=i.magazineSize===null?"none":"grid")}function l0(){if(Ws)return Ws;let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;Ws=new i;let t=Math.floor(Ws.sampleRate*.65);ga=Ws.createBuffer(1,t,Ws.sampleRate);let e=ga.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1;return Ws}function h0(){try{let i=l0();if(!i||!ga)return;i.state==="suspended"&&i.resume();let t=i.currentTime,e=.035+Math.random()*.055,n=i.createBufferSource();n.buffer=ga;let s=i.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(850+Math.random()*1800,t),s.Q.value=1.6+Math.random()*1.4;let r=i.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.035+Math.random()*.025,t+.006),r.gain.exponentialRampToValueAtTime(1e-4,t+e),n.connect(s),s.connect(r),r.connect(i.destination),n.start(t,Math.random()*.45,e),n.stop(t+e+.01)}catch{}}function OE(i){hi&&(sa=Math.max(0,sa-i),sa<=0&&(hi=!1,pe("\u0414\u0420\u041E\u0412\u0410 \u041F\u0420\u041E\u0413\u041E\u0420\u0415\u041B\u0418",1))),qs&&(qs.visible=hi),fs&&(fs.visible=hi),ia&&(ia.intensity=hi?2.3+Math.sin(Fl*17)*.28+Math.random()*.18:0);for(let t of s0){if(!hi){t.mesh.visible=!1;continue}t.phase=(t.phase+i*t.rate)%(Math.PI*2);let e=t.phase/(Math.PI*2);t.mesh.position.set(Math.sin(t.phase*2.15)*t.spread,.11+e*.54,Math.cos(t.phase*1.55)*t.spread*.42),t.mesh.rotation.set(t.phase*.7,t.phase*.45,t.phase*1.1),t.mesh.scale.set(.65+e*.48,.72+e*.66,.62+e*.5),t.mesh.material.opacity=Math.sin(Math.PI*e)*.92,t.mesh.visible=e<.96}hi&&(ul-=i,ul<=0&&(h0(),ul=.55+Math.random()*1.15))}function xa(i,t="fire"){try{let e=l0();if(!e)return;e.state==="suspended"&&e.resume();let n=e.currentTime,s=i.sound,r=t==="fire"?s.duration:t==="swing"?.17:t==="impact"?.095:.075,o=t==="swing"?s.swing:t==="impact"?s.impact:s.frequency,a=t==="fire"?s.noise:t==="impact"?s.noise*.48:t==="swing"?.18:.08,c=e.createBiquadFilter();c.type=t==="swing"?"highpass":"lowpass",c.frequency.setValueAtTime(t==="fire"?s.filter:Math.max(240,s.filter*.72),n),c.Q.value=t==="swing"?.7:.5;let l=e.createGain();l.gain.setValueAtTime(Math.min(.34,a*.24),n),l.gain.exponentialRampToValueAtTime(1e-4,n+r);let h=e.createBufferSource();h.buffer=ga,h.connect(c),c.connect(l),l.connect(e.destination),h.start(n),h.stop(n+r);let d=e.createOscillator();d.type=t==="fire"?s.waveform||"triangle":"sine",d.frequency.setValueAtTime(o,n),d.frequency.exponentialRampToValueAtTime(Math.max(32,o*(t==="swing"?.52:.36)),n+r);let u=e.createGain(),f=t==="fire"?s.bass:t==="impact"?s.bass*1.2:t==="swing"?.015:.022;u.gain.setValueAtTime(Math.max(1e-4,f),n),u.gain.exponentialRampToValueAtTime(1e-4,n+r),d.connect(u),u.connect(e.destination),d.start(n),d.stop(n+r)}catch{}}function $d(){let i=Ea(),t=Ll();if(!(xe||rn||Te||Kt||!i||!t||On>0||i.magazineSize===null)){if(t.magazine>=i.magazineSize){pe("\u041C\u0410\u0413\u0410\u0417\u0418\u041D \u041F\u041E\u041B\u041E\u041D",.85);return}if(t.reserve<=0){pe("\u041D\u0415\u0422 \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412",.9);return}sn=!1,On=i.reloadDuration,ma=0,ds=0,xa(i,"reload"),pe("\u041F\u0415\u0420\u0415\u0417\u0410\u0420\u042F\u0414\u041A\u0410",.8)}}function HE(){let i=Ea(),t=Ll();if(!i||!t||i.magazineSize===null)return;let e=gm(i,t);ma=1,Dl(),e>0&&pe("\u0413\u041E\u0422\u041E\u0412\u041E",.65)}function kE(i){let t=new Qt,e=i.face?.normal?.clone()||new L(0,0,1);i.object.updateWorldMatrix(!0,!1),e.transformDirection(i.object.matrixWorld).normalize();let n=new gn({color:1119509,transparent:!0,opacity:.96,depthWrite:!1,side:Fe,polygonOffset:!0,polygonOffsetFactor:-2}),s=new gn({color:7168592,transparent:!0,opacity:.76,depthWrite:!1,side:Fe,polygonOffset:!0,polygonOffsetFactor:-2}),r=new it(new Cc(.023,.035,8),s),o=new it(new Ci(.024,8),n);if(t.add(r,o),t.position.copy(i.point).addScaledVector(e,.004),t.quaternion.setFromUnitVectors(new L(0,0,1),e),Ot.add(t),Qr.push({object:t,life:22,maxLife:22}),Qr.length>72){let a=Qr.shift();u0(a)}}function u0(i){i?.object&&(Ot.remove(i.object),i.object.traverse(t=>{t.geometry?.dispose(),t.material&&t.material!==Bt&&t.material.dispose?.()}))}function VE(i){for(let t=Qr.length-1;t>=0;t--){let e=Qr[t];e.life-=i;let n=Jt.clamp(e.life/e.maxLife,0,1);e.object.traverse(s=>{s.material?.transparent&&(s.material.opacity=n*(s.geometry?.type==="RingGeometry"?.76:.96))}),e.life<=0&&(Qr.splice(t,1),u0(e))}}function GE(i,t,e,n=1){if(!(!i||i.isStored||i.isHeld)){if(i.kind==="mannequin"&&i.human){let s=i.human,r=s.partMap[i.key]||s.partMap.torso,o=xm(s,e,i.key,n);s.hitFlash=.32;let a=new M(t.x,t.y,t.z);if(!s.active)tf(s,r,Math.max(6,o.damage*.18),a,!1);else if(s.state!=="falling"&&!s.dead){s.state="falling",s.stateTime=0,s.quietTime=0;for(let c of s.parts)c.body.type=Pt.DYNAMIC,c.body.mass=c.mass,c.body.updateMassProperties(),c.body.wakeUp();kt.broadphase.dirty=!0}if(r.body.type===Pt.DYNAMIC){let c=Hi(e)?5+o.damage*.25:1.8+o.damage*.12;r.body.applyImpulse(new M(t.x*c,t.y*c,t.z*c),new M)}o.lethal&&(s.dead=!0,s.active=!0,s.state="dead"),e.pellets||xa(e,"impact"),pe(`${s.id} \xB7 ${e.name.toUpperCase()} \u2212${o.damage} \u041E\u0417 \xB7 ${o.health} \u041E\u0417`,1.05);return}if(i.kind==="prop"&&i.body?.type===Pt.DYNAMIC){let s=Hi(e)?7:e.type==="shotgun"?3.5:2.4;i.body.applyImpulse(new M(t.x*s,t.y*s,t.z*s),new M),i.body.wakeUp()}}}var al=new ko;function Dd(i,t=0,e=0,n=1){Ve.updateMatrixWorld(!0),al.far=i.range,al.setFromCamera(new lt(t,e),Ve);let s=[...Kr,...Om],r=ym(al,s)[0];if(!r)return null;let o=r.object.userData.gameMeta||r.object.parent?.userData?.gameMeta;return o?GE(o,al.ray.direction,i,n):r.object.userData.bulletSurface&&kE(r),r}function WE(i){Sa(),Dd(i)}function Zd(){let i=Ea(),t=Ll();if(!(xe||rn||Te||Kt||!i||On>0||Zs>0||Oi>0)){if(Hi(i)){if($s>0)return;$s=i.swingDuration,bl=!1,Zs=i.cooldown,sn=!1,xa(i,"swing");return}if(!mm(i,t)){$d();return}if(Dl(),Zs=i.cooldown,ds=i.type==="shotgun"?1.25:i.type==="rifle"?.9:.7,ui=Math.min(.5,ui+(i.type==="shotgun"?.22:.1)),xs=Jt.clamp(xs+(i.type==="shotgun"?.026:.009),-1.18,1.18),xa(i,"fire"),$r=i.type==="shotgun"?.11:.075,Rn.visible=!0,Rn.userData.light.intensity=i.type==="shotgun"?4.1:2.8,Sa(),i.pellets){for(let e=0;e<i.pellets;e++){let n=e*2.399963229728653,s=e===0?0:i.spread*Math.sqrt(e/(i.pellets-1));Dd(i,Math.cos(n)*s,Math.sin(n)*s,1)}Zr=.34}else Dd(i);i.automatic||(sn=!1)}}function qE(i){let t=Ea();if(Zs=Math.max(0,Zs-i),ds=Jt.damp(ds,0,18,i),!t){sn=!1,Rn.visible=!1,$.visible=!1,je.visible=!1,ps.visible=!1;return}sn&&Zs<=0&&On<=0&&Zd(),On>0&&(On=Math.max(0,On-i),ma=1-On/t.reloadDuration,On===0&&HE()),$r>0&&($r=Math.max(0,$r-i),$r===0&&(Rn.visible=!1,Rn.userData.light.intensity=0));let e=On>0?Math.sin(ma*Math.PI):0;if(Zr>0){Zr=Math.max(0,Zr-i);let n=1-Zr/.34;An&&An.position.set(Ys.x,Ys.y,Ys.z+Math.sin(n*Math.PI)*.13)}else An&&An.position.copy(Ys);if(Oi>0){let n=1-Oi/r0,s=Math.sin(n*Math.PI);Oi=Math.max(0,Oi-i),je.position.set(Un.x,Un.y-s*.17,Un.z+s*.16),je.rotation.set(zn.x+s*.52,zn.y+s*.04,zn.z-s*.12),Oi===0&&KE()}else if($s>0){$s=Math.max(0,$s-i);let n=1-$s/t.swingDuration,s=Math.sin(n*Math.PI);je.position.set(Un.x,Un.y-s*.12,Un.z+s*.08),je.rotation.set(zn.x+s*.36,zn.y-s*.12,zn.z-s*.92),!bl&&n>=.43&&(bl=!0,WE(t))}else je.position.set(Un.x,Un.y-ds*.035-e*.07,Un.z+ds*.065),je.rotation.set(zn.x+ds*.11-e*.08,zn.y,zn.z+e*.07);if(ke&&(ke.position.set(io.x,io.y-e*.18,io.z+e*.035),ke.rotation.x=-e*.24),Xs.left){let n=Xs.left.userData.gripPosition,s=Xs.left.userData.gripRotation;n&&s&&(Xs.left.position.set(n.x,n.y-e*.11,n.z+e*.12),Xs.left.rotation.set(s.x-e*.22,s.y,s.z))}An&&On>0&&(An.position.z=Ys.z+e*.08),dn&&(dn.visible=di>0&&!Kt),$.visible=!Kt,je.visible=!xe&&!!t}var uo=new Do;uo.background=null;var ya=new qe(31,1,.1,20);ya.position.set(2.35,2.05,3.9);ya.lookAt(0,.98,0);var Se=new Qt;uo.add(Se);var d0=new et({color:5858898,roughness:.88}),Cm=new et({color:3423285,roughness:.92}),XE=new et({color:2435621,roughness:.85}),va=new et({color:3753277,roughness:.76,metalness:.08}),Bl=new et({color:10718305,roughness:.92}),YE=new et({color:6713939,roughness:.78}),jd=new et({color:2108202,roughness:.56,metalness:.18}),f0=new et({color:10193778,roughness:.88}),$E=new et({color:11895373,roughness:.68,metalness:.12});function Ne(i,t,e,n,s=[0,0,0]){let r=new it(new Rt(t[0],t[1],t[2]),n);return r.position.set(e[0],e[1],e[2]),r.rotation.set(s[0],s[1],s[2]),i.add(r),r}var p0=new it(new nn(.67,.72,.055,28),new et({color:2568492,roughness:.96,metalness:.04}));p0.position.y=.015;uo.add(p0);Ne(Se,[.44,.24,.27],[0,.58,0],va);Ne(Se,[.5,.69,.3],[0,1.02,0],d0);Ne(Se,[.37,.56,.2],[0,1,-.22],va);Ne(Se,[.07,.52,.035],[-.13,1.03,.17],Bl,[0,0,-.1]);Ne(Se,[.07,.52,.035],[.13,1.03,.17],Bl,[0,0,.1]);Ne(Se,[.46,.07,.32],[0,.69,0],Bl);Ne(Se,[.13,.16,.06],[0,.94,.185],$E);Ne(Se,[.12,.13,.035],[0,1.05,.19],Bl);Ne(Se,[.15,.14,.15],[0,1.45,0],f0);Ne(Se,[.32,.33,.28],[0,1.67,0],f0);Ne(Se,[.38,.2,.35],[0,1.83,-.005],YE);Ne(Se,[.4,.045,.38],[0,1.77,.005],va);Ne(Se,[.22,.105,.08],[0,1.59,.17],jd);Ne(Se,[.075,.105,.085],[-.145,1.59,.16],jd);Ne(Se,[.075,.105,.085],[.145,1.59,.16],jd);for(let i of[-1,1])Ne(Se,[.18,.46,.2],[i*.35,1.05,0],d0,[0,0,i*-.06]),Ne(Se,[.15,.37,.17],[i*.39,.67,.025],va,[0,0,i*.025]),Ne(Se,[.15,.11,.15],[i*.39,.42,.035],Ko),Ne(Se,[.19,.43,.22],[i*.125,.36,0],Cm),Ne(Se,[.16,.34,.18],[i*.13,.17,.015],Cm),Ne(Se,[.2,.13,.3],[i*.13,.065,.07],XE),Ne(Se,[.23,.035,.31],[i*.13,.015,.075],va);uo.add(new zo(13885391,3883063,1.6));var m0=new Ho(16769719,2.2);m0.position.set(-2.5,4.5,3.5);uo.add(m0);var Kn=null,Bd=!1,Im=0,Sd=0,gs=Math.PI/2,xs=-.08,pi=!0,Kt=null,Ui=null,_n={x:0,y:0,pointerId:null},Hn=null,ta=0,ui=0,El=0,ys=100,oa=100,aa=100,jr=58,Td=0,xe=!1,Jd=0,Fd=!1,g0=null,Te=!1,so="bag",Vi="shovel",rn=!1,Vn=[],fi=null,ZE=0,x0=8,y0=5,ca=30,Jr={head:0,neck:0,torso:0,"arm-left":0,"arm-right":0,"leg-left":0,"leg-right":0},Kd=new Set,la=0,Ad=0,Fl=0,Rd=0,cl=0,Pm=60,Ud=!1,$e=new Set,_a=new ko;_a.far=5;var kn=new L,hs=new L,Nm=new L;function pe(i,t=1.45){let e=tt("toast");e&&(e.textContent=i,e.classList.add("visible"),la=t)}var ha={head:"injury-head",neck:"injury-neck",torso:"injury-torso","arm-left":"injury-arm-left","arm-right":"injury-arm-right","leg-left":"injury-leg-left","leg-right":"injury-leg-right"};function Qd(){tt("health-value").textContent=String(ys),tt("health-bar").style.width=`${ys}%`,tt("health-bar").style.background=ys<35?"#d95c50":ys<70?"#c3a66d":"#9ab779"}function v0(){tt("hunger-value").textContent=String(Math.round(oa)),tt("hunger-bar").style.width=`${oa}%`,tt("hunger-bar").style.background=oa<25?"#dc7950":"#c4a66e",tt("thirst-value").textContent=String(Math.round(aa)),tt("thirst-bar").style.width=`${aa}%`,tt("thirst-bar").style.background=aa<25?"#5fa6c5":"#78aeb6",tt("heat-value").textContent=String(Math.round(jr)),tt("heat-bar").style.width=`${jr}%`,tt("heat-bar").style.background=jr<25?"#69a9c2":jr>78?"#edaf68":"#cf8756"}function ua(i){return{head:"\u0413\u041E\u041B\u041E\u0412\u0410",neck:"\u0428\u0415\u042F",torso:"\u041A\u041E\u0420\u041F\u0423\u0421","arm-left":"\u041B\u0415\u0412\u0410\u042F \u0420\u0423\u041A\u0410","arm-right":"\u041F\u0420\u0410\u0412\u0410\u042F \u0420\u0423\u041A\u0410","leg-left":"\u041B\u0415\u0412\u0410\u042F \u041D\u041E\u0413\u0410","leg-right":"\u041F\u0420\u0410\u0412\u0410\u042F \u041D\u041E\u0413\u0410"}[i]||"\u041A\u041E\u0420\u041F\u0423\u0421"}function _0(i){let t=Jr[i]||0,e=Kd.has(i);tt("injury-status").textContent=e?`\u041A\u0420\u041E\u0412\u041E\u0422\u0415\u0427\u0415\u041D\u0418\u0415 \xB7 ${ua(i)}`:t>0?`\u0422\u0420\u0410\u0412\u041C\u0410 \xB7 ${ua(i)}`:`\u0411\u0415\u0417 \u0422\u0420\u0410\u0412\u041C \xB7 ${ua(i)}`,tt("injury-status").classList.toggle("alert",t>0||e)}function jE(i,t){let e=ha[i]?i:"torso",n=tt(ha[e]);Jr[e]=Math.min(1,(Jr[e]||0)+Math.max(.28,t/24)),n.classList.add("injured"),n.style.opacity=String(.55+Jr[e]*.45),Jr[e]>=.55&&(Kd.add(e),tt(`bleed-${e}`).classList.add("active")),g0=e;for(let[s,r]of Object.entries(ha))tt(r).classList.toggle("selected",s===e);_0(e)}function M0(i){if(!ha[i])return;g0=i;for(let[n,s]of Object.entries(ha))tt(s).classList.toggle("selected",n===i);_0(i);let t=Jr[i]||0,e=Kd.has(i)?" \xB7 \u041A\u0420\u041E\u0412\u041E\u0422\u0415\u0427\u0415\u041D\u0418\u0415":t>0?` \xB7 \u0422\u0420\u0410\u0412\u041C\u0410 ${Math.round(t*100)}%`:" \xB7 \u041F\u041E\u0412\u0420\u0415\u0416\u0414\u0415\u041D\u0418\u0419 \u041D\u0415\u0422";pe(`${ua(i)}${e}`,1.2)}function Lm(i="\u041A\u0420\u0418\u0422\u0418\u0427\u0415\u0421\u041A\u041E\u0415 \u041F\u041E\u0412\u0420\u0415\u0416\u0414\u0415\u041D\u0418\u0415"){xe||(Te&&Qn(!1),rn&&ro(!1),sn=!1,Fd=!!Kt,xe=!0,Jd=0,ys=0,Qd(),tt("death-detail").textContent=i,tt("death-overlay").classList.add("visible"),tt("death-overlay").setAttribute("aria-hidden","false"),document.body.classList.add("dead"),$e.clear(),tr(),Hn=null,ft.velocity.set(0,0,0),Qs(0),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock())}function w0(i,t="torso"){if(!pi||xe)return;let e=Math.max(1,Math.round(i)),n=t==="neck"&&e>=14;if(!(El>0&&!n)){if(El=.72,ys=Math.max(0,ys-e),ui=Math.min(1.4,ui+.85),Qd(),jE(t,e),document.body.classList.add("damage-flash"),setTimeout(()=>document.body.classList.remove("damage-flash"),170),t==="neck"&&e>=14){Lm("\u0428\u0415\u0419\u041D\u0410\u042F \u0422\u0420\u0410\u0412\u041C\u0410 \xB7 \u041A\u0420\u0418\u0422\u0418\u0427\u0415\u0421\u041A\u0410\u042F \u041A\u0420\u041E\u0412\u041E\u041F\u041E\u0422\u0415\u0420\u042F");return}if(ys===0){Lm(`\u0421\u041C\u0415\u0420\u0422\u0415\u041B\u042C\u041D\u041E\u0415 \u0420\u0410\u041D\u0415\u041D\u0418\u0415 \xB7 ${ua(t)}`);return}pe(`\u0423\u0414\u0410\u0420 \xB7 \u2212${e}%`,.9)}}function JE(i){if(!pi||Te||rn||xe)return;oa=Math.max(0,oa-i*.045),aa=Math.max(0,aa-i*.065);let t=Math.hypot(ft.position.x-Ye.x,ft.position.z-Ye.z);jr=wm(jr,i,hi&&t<=3.8),Td+=i,Td>=.35&&(Td=0,v0())}function tf(i,t=i.partMap.torso,e=0,n=null,s=!1){if(i.active){if(s&&t?.body){let r=new M(kn.x*8.5,Math.max(1,kn.y*8.5),kn.z*8.5);t.body.applyImpulse(r,new M),pe("\u0418\u041C\u041F\u0423\u041B\u042C\u0421 \u041F\u0415\u0420\u0415\u0414\u0410\u041D",.85)}return}i.active=!0,i.state="falling",i.stateTime=0,i.quietTime=0,i.hitFlash=.24;for(let r of i.parts)r.body.type=Pt.DYNAMIC,r.body.mass=r.mass,r.body.updateMassProperties(),r.body.wakeUp();if(kt.broadphase.dirty=!0,t?.body){let r;if(s){r=new M(kn.x,Math.max(.08,kn.y),kn.z),r.normalize();let o=r.scale(13.5);t.body.applyImpulse(o,new M)}else{r=n&&n.lengthSquared()>.08?n.clone():new M(0,0,1);let o=r.length();r.normalize();let a=Math.min(48,Math.max(6,e*t.mass*.78));t.body.applyImpulse(r.scale(a),t.body.position)}}pe(s?`${i.id} \xB7 \u0420\u0410\u0413\u0414\u041E\u041B\u041B \u0410\u041A\u0422\u0418\u0412\u0418\u0420\u041E\u0412\u0410\u041D`:`${i.id} \xB7 \u0423\u0414\u0410\u0420 / \u0420\u0410\u0413\u0414\u041E\u041B\u041B`,1.3)}function Sa(){return Ve.getWorldDirection(kn),kn}function b0(){_a.setFromCamera(new lt(0,0),Ve);let i=_a.intersectObjects(Kr,!0);for(let t of i){let e=t.object.userData.gameMeta||t.object.parent?.userData?.gameMeta;if(!(!e||e.isStored||e.isEmpty||t.distance>(e.range||4.5)))return{meta:e,distance:t.distance,point:t.point}}return null}function E0(){if(!Cd)return null;Ve.updateMatrixWorld(!0),_a.setFromCamera(new lt(0,0),Ve);let i=_a.intersectObject(Cd,!1)[0];return i&&i.distance<=4.8?i:null}function S0(){return Math.hypot(ft.position.x-Ye.x,ft.position.z-Ye.z)<=2.85}function Dm(i,t){return Cn!=="shovel"?(pe("\u041D\u0423\u0416\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0410",1),!1):Oi>0?!1:(vl=i==="scoop"?{kind:i,drift:t}:{kind:i,point:{x:t.x,z:t.z}},Oi=r0,sn=!1,xa(Gs.get("shovel"),"swing"),!0)}function KE(){let i=vl;if(vl=null,!i)return;if(i.kind==="scoop"){let e=vm(i.drift,di);if(!e.ok){pe(e.reason==="already-carrying"?"\u0421\u041D\u0415\u0413 \u0423\u0416\u0415 \u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0415":"\u0421\u0423\u0413\u0420\u041E\u0411 \u0417\u0410\u041A\u041E\u041D\u0427\u0418\u041B\u0421\u042F",1);return}di=e.amount,jm(i.drift),dn&&(dn.visible=!0),pe("\u0421\u041D\u0415\u0413 \u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0415 \xB7 \u041F\u0415\u0420\u0415\u041D\u041E\u0421 \u0417\u0410\u041C\u0415\u0414\u041B\u042F\u0415\u0422",1.35);return}let t=_m(di,i.point);if(!t.ok){pe("\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0415 \u041D\u0415\u0422 \u0421\u041D\u0415\u0413\u0410",.9);return}Yr(t.pile.x,t.pile.z,t.pile.amount),di=t.remaining,dn&&(dn.visible=!1),pe("\u0421\u041D\u0415\u0413 \u0421\u0411\u0420\u041E\u0428\u0415\u041D \xB7 \u041D\u041E\u0412\u042B\u0419 \u0421\u0423\u0413\u0420\u041E\u0411",1.2)}function ef(){let i=tt("action-button");if(!i)return;let t=tt("action-label");if(t.textContent="\u0414\u0415\u0419\u0421\u0422\u0412\u0418\u0415",xe){Ui=null,i.classList.remove("is-holding","has-target");return}if(Ui=b0(),Kt){let n=Kt.gameMeta?.kind==="firewood"&&S0();t.textContent=n?hi?"\u041F\u041E\u0414\u0411\u0420\u041E\u0421\u0418\u0422\u042C \u0414\u0420\u041E\u0412\u0410":"\u0420\u0410\u0417\u0416\u0415\u0427\u042C \u041F\u0415\u0427\u042C":"\u041F\u041E\u041B\u041E\u0416\u0418\u0422\u042C \u041F\u0420\u0415\u0414\u041C\u0415\u0422",i.classList.add("is-holding"),i.classList.toggle("has-target",n);return}if(i.classList.remove("is-holding"),Cn==="shovel"&&di>0){t.textContent="\u0421\u0411\u0420\u041E\u0421\u0418\u0422\u042C \u0421\u041D\u0415\u0413",i.classList.toggle("has-target",!!(Ui||E0()));return}Ui?.meta.kind==="snowdrift"?t.textContent=Cn==="shovel"?"\u0427\u0415\u0420\u041F\u0410\u0422\u042C \u0421\u041D\u0415\u0413":"\u041D\u0423\u0416\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0410":Ui?.meta.kind==="stove"?t.textContent="\u041D\u0423\u0416\u041D\u042B \u0414\u0420\u041E\u0412\u0410":(Ui?.meta.kind==="firewood"||Ui?.meta.kind==="prop")&&(t.textContent="\u0412\u0417\u042F\u0422\u042C"),i.classList.toggle("has-target",!!Ui)}function nf(i){let t=i.body;t.collisionFilterMask=i.originalCollisionFilterMask&~fa,i.playerCollisionSuspended=!0,i.playerCollisionReEnableAfter=Fl+.35}function T0(i){let t=i.body;!t||t.gameMeta?.isHeld||i.isStored||(Kt=t,t.gameMeta.isHeld=!0,t.type=Pt.DYNAMIC,t.mass=t.gameMeta.initialMass,t.gameMeta.playerCollisionSuspended=!1,t.collisionFilterMask=t.gameMeta.originalCollisionFilterMask&~fa,t.linearDamping=.82,t.angularDamping=.92,t.updateMassProperties(),t.velocity.set(0,0,0),t.angularVelocity.set(0,0,0),t.force.set(0,0,0),t.wakeUp(),kt.broadphase.dirty=!0,Qs(1),pe(`${i.name} \xB7 ${i.mass.toFixed(1)} \u041A\u0413`,1.15))}function QE(){if(!Kt)return;let i=Kt,t=i.gameMeta;Sa(),i.type=Pt.DYNAMIC,i.mass=t.initialMass,nf(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.updateMassProperties(),i.gameMeta.isHeld=!1,i.force.set(0,0,0),i.updateAABB();let e=Math.max(.08,(i.aabb.upperBound.y-i.aabb.lowerBound.y)*.5);i.position.y=Math.max(i.position.y,e+.025);let s=9.6*Math.max(.34,Math.min(1.15,Math.sqrt(2.8/t.initialMass)));i.velocity.set(kn.x*s+ft.velocity.x,kn.y*s+1.05+ft.velocity.y,kn.z*s+ft.velocity.z),i.angularVelocity.set((Math.random()-.5)*3.4,(Math.random()-.5)*3.4,(Math.random()-.5)*3.4),i.wakeUp(),kt.broadphase.dirty=!0,Kt=null,Qs(0),pe(`\u0411\u0420\u041E\u0421\u041E\u041A \xB7 ${t.name}`,.95)}function tS(){if(!Kt)return;let i=Kt,t=i.gameMeta;i.type=Pt.DYNAMIC,i.mass=t.initialMass,nf(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.gameMeta.isHeld=!1,i.updateMassProperties(),i.updateAABB();let e=Math.max(.08,(i.aabb.upperBound.y-i.aabb.lowerBound.y)*.5);i.position.y=Math.max(i.position.y,e+.025),i.velocity.set(ft.velocity.x*.45,-.18,ft.velocity.z*.45),i.angularVelocity.set(0,0,0),i.wakeUp(),kt.broadphase.dirty=!0,Kt=null,Qs(0),pe(`\u041F\u041E\u041B\u041E\u0416\u0415\u041D\u041E \xB7 ${t.name}`,.95)}function eS(){if(!Kt)return;let i=Kt,t=i.gameMeta;t.isHeld=!1,nf(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.velocity.set(0,0,0),i.angularVelocity.set(0,0,0),i.wakeUp(),Kt=null,kt.broadphase.dirty=!0,Qs(0)}function A0(){return Vn.reduce((i,t)=>i+t.meta.mass,0)}function nS(i,t){for(let e=0;e<=y0-t;e++)for(let n=0;n<=x0-i;n++)if(!Vn.some(r=>n<r.x+r.width&&n+i>r.x&&e<r.y+r.height&&e+t>r.y))return{x:n,y:e};return null}function iS(i){let t=Vn.find(n=>n.id===i);if(!t)return;Ul("bag"),fi=i,tt("inventory-selected-name").textContent=t.meta.name,tt("inventory-selected-weight").textContent=`${t.meta.mass.toFixed(1)} \u043A\u0433`,tt("inventory-selected-description").textContent=t.meta.description||t.meta.detail||"\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439.";let e=tt("inventory-take");e.disabled=!!Kt,e.textContent=Kt?"\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422":"\u0414\u041E\u0421\u0422\u0410\u0422\u042C \u041F\u0420\u0415\u0414\u041C\u0415\u0422",tt("inventory-message").textContent=`${t.meta.type} \xB7 ${t.width} \xD7 ${t.height} \u042F\u0427\u0415\u0419\u041A\u0418`;for(let n of tt("inventory-grid").querySelectorAll(".inventory-item"))n.classList.toggle("selected",n.dataset.itemId===i),n.setAttribute("aria-pressed",String(n.dataset.itemId===i))}function sS(i){let t=Gs.get(i);if(!t)return;so="all",Vi=i,tt("inventory-tab-bag").classList.remove("active"),tt("inventory-tab-bag").setAttribute("aria-selected","false"),tt("inventory-tab-all").classList.add("active"),tt("inventory-tab-all").setAttribute("aria-selected","true"),tt("inventory-bag-view").hidden=!0,tt("inventory-all-view").hidden=!1,tt("inventory-selected-name").textContent=t.name,tt("inventory-selected-weight").textContent=`${t.weight.toFixed(1)} \u043A\u0433`;let e=t.magazineSize===null?t.type==="tool"?"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442":"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0431\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439":`\u041C\u0430\u0433\u0430\u0437\u0438\u043D ${t.magazineSize} \xB7 \u0437\u0430\u043F\u0430\u0441 ${t.reserve} \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432`,n=t.pellets?`${t.pellets} \u0434\u0440\u043E\u0431\u0438\u043D \xD7 ${t.damage} \u0443\u0440\u043E\u043D\u0430`:`${t.damage} \u0443\u0440\u043E\u043D\u0430 \u0437\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435`;tt("inventory-selected-description").textContent=`${t.description} ${n}. ${e}.`;let s=Cn===i;tt("inventory-take").disabled=s,tt("inventory-take").textContent=s?"\u0423\u0416\u0415 \u0412 \u0420\u0423\u041A\u0410\u0425":"\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C";let r=qd.get(i);tt("inventory-message").textContent=`${t.category.toUpperCase()} \xB7 ${t.type==="tool"?"\u0418\u041D\u0421\u0422\u0420\u0423\u041C\u0415\u041D\u0422":t.magazineSize===null?"\u0411\u041B\u0418\u0416\u041D\u0418\u0419 \u0411\u041E\u0419":`${r.magazine} / ${r.reserve} \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412`}`;for(let o of tt("inventory-all-grid").querySelectorAll(".armory-item"))o.classList.toggle("selected",o.dataset.weaponId===i),o.setAttribute("aria-pressed",String(o.dataset.weaponId===i))}function Ul(i){so=i==="all"?"all":"bag";let t=so==="all";tt("inventory-tab-bag").classList.toggle("active",!t),tt("inventory-tab-bag").setAttribute("aria-selected",String(!t)),tt("inventory-tab-all").classList.toggle("active",t),tt("inventory-tab-all").setAttribute("aria-selected",String(t)),tt("inventory-bag-view").hidden=t,tt("inventory-all-view").hidden=!t,R0()}function R0(){let i=tt("inventory-take");if(so==="all"){Gs.has(Vi)||(Vi="shovel");let e=Gs.get(Vi),n=qd.get(e.id);tt("inventory-selected-name").textContent=e.name,tt("inventory-selected-weight").textContent=`${e.weight.toFixed(1)} \u043A\u0433`;let s=e.magazineSize===null?e.type==="tool"?"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442":"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0431\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439":`\u041C\u0430\u0433\u0430\u0437\u0438\u043D ${e.magazineSize} \xB7 \u0437\u0430\u043F\u0430\u0441 ${e.reserve} \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432`,r=e.pellets?`${e.pellets} \u0434\u0440\u043E\u0431\u0438\u043D \xD7 ${e.damage} \u0443\u0440\u043E\u043D\u0430`:`${e.damage} \u0443\u0440\u043E\u043D\u0430 \u0437\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435`;tt("inventory-selected-description").textContent=`${e.description} ${r}. ${s}.`;let o=Cn===e.id;i.disabled=o,i.textContent=o?"\u0423\u0416\u0415 \u0412 \u0420\u0423\u041A\u0410\u0425":"\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C",tt("inventory-message").textContent=`${e.category.toUpperCase()} \xB7 ${e.type==="tool"?"\u0418\u041D\u0421\u0422\u0420\u0423\u041C\u0415\u041D\u0422":e.magazineSize===null?"\u0411\u041B\u0418\u0416\u041D\u0418\u0419 \u0411\u041E\u0419":`${n.magazine} / ${n.reserve} \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412`}`;return}let t=Vn.find(e=>e.id===fi);if(!t){fi=null,tt("inventory-selected-name").textContent="\u041F\u0420\u0415\u0414\u041C\u0415\u0422 \u041D\u0415 \u0412\u042B\u0411\u0420\u0410\u041D",tt("inventory-selected-weight").textContent="\u2014",tt("inventory-selected-description").textContent="\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0432 \u0441\u0435\u0442\u043A\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0435\u0433\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B.",i.disabled=!0,i.textContent="\u0412\u042B\u0411\u0415\u0420\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422",tt("inventory-message").textContent=Vn.length?"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0435\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430.":"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0443\u0431\u0440\u0430\u0442\u044C \u0441\u044E\u0434\u0430 \u0438\u0437 \u0440\u0443\u043A.";return}tt("inventory-selected-name").textContent=t.meta.name,tt("inventory-selected-weight").textContent=`${t.meta.mass.toFixed(1)} \u043A\u0433`,tt("inventory-selected-description").textContent=t.meta.description||t.meta.detail||"\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439.",i.disabled=!!Kt,i.textContent=Kt?"\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422":"\u0414\u041E\u0421\u0422\u0410\u0422\u042C \u041F\u0420\u0415\u0414\u041C\u0415\u0422"}function rS(){let i=tt("inventory-all-grid");i.replaceChildren();for(let t of nl){let e=document.createElement("button");e.type="button",e.className=`armory-item${t.id===Vi?" selected":""}`,e.dataset.weaponId=t.id,e.setAttribute("aria-pressed",String(t.id===Vi)),e.title=`${t.name} \xB7 ${t.description}`;let n=document.createElement("span");n.className=`armory-item-icon ${t.type}`,n.textContent=t.type==="tool"?"\u2692":t.type==="melee"?"\u2694":t.type==="pistol"?"\u25A3":t.type==="shotgun"?"\u25C6":"\u2301";let s=document.createElement("b");s.className="armory-item-name",s.textContent=t.name;let r=document.createElement("small");r.className="armory-item-category",r.textContent=t.category.toUpperCase();let o=document.createElement("small");o.className="armory-item-stats",o.textContent=t.magazineSize===null?`${t.damage} \u0423\u0420\u041E\u041D \xB7 ${t.range.toFixed(1)} \u041C`:`${t.magazineSize} \xB7 ${t.damage}${t.pellets?` \xD7 ${t.pellets}`:""}`,e.append(n,s,r,o),e.addEventListener("click",()=>sS(t.id)),i.appendChild(e)}}function Ta(){let i=tt("inventory-grid");Vn.some(e=>e.id===fi)||(fi=Vn[0]?.id||null),i.replaceChildren();for(let e=0;e<x0*y0;e++){let n=document.createElement("div");n.className="inventory-cell",n.setAttribute("aria-hidden","true"),i.appendChild(n)}for(let e of Vn){let n=document.createElement("button");n.type="button",n.className=`inventory-item${e.id===fi?" selected":""}`,n.dataset.itemId=e.id,n.setAttribute("aria-pressed",String(e.id===fi)),n.style.gridColumn=`${e.x+1} / span ${e.width}`,n.style.gridRow=`${e.y+1} / span ${e.height}`,n.title=`${e.meta.name} \xB7 ${e.meta.mass.toFixed(1)} \u043A\u0433 \xB7 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F`;let s=document.createElement("span");s.className="inventory-item-top";let r=document.createElement("b");r.className="inventory-item-icon",r.textContent=e.meta.inventoryIcon||"\u25A3";let o=document.createElement("small");o.className="inventory-item-weight",o.textContent=`${e.meta.mass.toFixed(1)} \u043A\u0433`,s.append(r,o);let a=document.createElement("span");a.className="inventory-item-name",a.textContent=e.meta.name,n.append(s,a),n.addEventListener("click",()=>iS(e.id)),i.appendChild(n)}let t=A0();tt("inventory-weight").textContent=t.toFixed(1),tt("inventory-limit").textContent=ca.toFixed(1),tt("inventory-weight-bar").style.width=`${Math.min(100,t/ca*100)}%`,tt("inventory-weight-bar").style.background=t/ca>.82?"#d08353":"#a4c17e",tt("inventory-empty").style.display=so==="bag"&&Vn.length===0?"flex":"none",tt("inventory-drop").disabled=!Kt,tt("inventory-stash").disabled=!Kt,rS(),R0()}function sf(){if(Bd)return;let t=tt("inventory-preview-frame").getBoundingClientRect();if(!(t.width<8||t.height<8)){if(!Kn)try{Kn=new Lo({canvas:tt("inventory-preview-canvas"),alpha:!0,antialias:!0,powerPreference:"low-power"}),Kn.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),Kn.outputColorSpace=Pe,Kn.toneMapping=Bc,Kn.toneMappingExposure=1.05,Kn.setClearColor(0,0),tt("inventory-preview-fallback").style.display="none"}catch{Bd=!0,tt("inventory-preview-fallback").classList.add("visible");return}Kn.setSize(t.width,t.height,!1),ya.aspect=t.width/t.height,ya.updateProjectionMatrix()}}function oS(i){!Te||Bd||(Kn||sf(),Kn&&(Im+=i,Sd+=i,Se.rotation.y=Math.sin(Im*.42)*.46,!(Sd<1/30)&&(Sd=0,Kn.render(uo,ya))))}function Qn(i){if(i&&(!pi||xe||rn))return;Te=i;let t=tt("inventory-overlay");t.classList.toggle("open",i),t.setAttribute("aria-hidden",String(!i)),i?(sn=!1,Ms=null,tr(),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),Ta(),sf()):$e.clear()}function ro(i){if(i&&(!pi||xe))return;i&&Te&&Qn(!1),rn=i;let t=tt("menu-overlay");t.classList.toggle("open",i),t.setAttribute("aria-hidden",String(!i)),i?(sn=!1,Ms=null,tr(),$e.clear(),la=0,tt("toast").classList.remove("visible"),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock()):$e.clear()}function aS(){if(!Kt)return;let i=Kt,t=i.gameMeta,e=t.inventoryWidth||2,n=t.inventoryHeight||2;if(A0()+t.mass>ca+1e-6){pe(`\u041F\u0420\u0415\u0412\u042B\u0428\u0415\u041D \u041B\u0418\u041C\u0418\u0422 \xB7 ${ca} \u041A\u0413`,1.15),tt("inventory-message").textContent="\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0442\u044F\u0436\u0435\u043B\u043E: \u043E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u0435 \u043C\u0435\u0441\u0442\u043E \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u043B\u0435\u0433\u0447\u0435.";return}let r=nS(e,n);if(!r){pe("\u041D\u0415\u0422 \u0421\u0412\u041E\u0411\u041E\u0414\u041D\u042B\u0425 \u042F\u0427\u0415\u0415\u041A",1);return}let o=Gi.find(c=>c.body===i);if(!o)return;i.gameMeta.isHeld=!1,i.gameMeta.isStored=!0,i.gameMeta.playerCollisionSuspended=!1,i.collisionFilterMask=t.originalCollisionFilterMask,i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.velocity.set(0,0,0),i.angularVelocity.set(0,0,0),kt.removeBody(i),Ot.remove(o.visual),Kt=null,Qs(0);let a={id:`bag-${++ZE}`,meta:t,body:i,visual:o.visual,x:r.x,y:r.y,width:e,height:n};Vn.push(a),fi=a.id,Ta(),ef(),pe(`\u0412 \u0420\u042E\u041A\u0417\u0410\u041A\u0415 \xB7 ${t.name}`,1),Ul("bag"),Qn(!0)}function cS(i){if(xe)return;if(Kt){pe("\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u0423\u0414\u0415\u0420\u0416\u0418\u0412\u0410\u0415\u041C\u042B\u0419 \u041F\u0420\u0415\u0414\u041C\u0415\u0422",1);return}let t=Vn.findIndex(o=>o.id===i);if(t<0)return;let[e]=Vn.splice(t,1),{body:n,visual:s,meta:r}=e;r.isStored=!1,n.type=Pt.DYNAMIC,n.mass=r.initialMass,n.collisionFilterMask=r.originalCollisionFilterMask,n.linearDamping=r.originalLinearDamping,n.angularDamping=r.originalAngularDamping,n.force.set(0,0,0),n.velocity.set(0,0,0),n.angularVelocity.set(0,0,0),n.updateMassProperties(),Ot.add(s),kt.addBody(n),kt.broadphase.dirty=!0,Qn(!1),T0(r),Ta()}function lS(){if(!Kt||Kt.gameMeta?.kind!=="firewood"||!S0())return!1;let i=Kt,t=i.gameMeta,e=Gi.findIndex(s=>s.body===i);if(e<0)return!1;let[n]=Gi.splice(e,1);t.isHeld=!1,Kt=null,kt.removeBody(i),Ot.remove(n.visual);for(let s=Kr.length-1;s>=0;s--)Kr[s].userData.gameMeta===t&&Kr.splice(s,1);return kt.broadphase.dirty=!0,Qs(0),sa+=52,hi=!0,fs&&(fs.visible=!0),ul=.75+Math.random()*.55,h0(),pe(sa>52?"\u0414\u0420\u041E\u0412\u0410 \u0414\u041E\u0411\u0410\u0412\u041B\u0415\u041D\u042B \xB7 \u041F\u0415\u0427\u042C \u0413\u041E\u0420\u0418\u0422":"\u041F\u0415\u0427\u042C \u0420\u0410\u0421\u0422\u041E\u041F\u041B\u0415\u041D\u0410",1.2),!0}function C0(){if(xe||!pi||Te||rn)return;if(Kt){lS()||QE();return}if(Cn==="shovel"&&di>0){let t=E0();t?Dm("dump",t.point):pe("\u041D\u0410\u041F\u0420\u0410\u0412\u042C\u0422\u0415 \u041B\u041E\u041F\u0410\u0422\u0423 \u041D\u0410 \u041F\u041E\u041B",1);return}let i=Ui||b0();if(!i){pe("\u041D\u0415\u0422 \u0426\u0415\u041B\u0418 \u0412 \u0417\u041E\u041D\u0415 \u0414\u041E\u0421\u042F\u0413\u0410\u0415\u041C\u041E\u0421\u0422\u0418",.9);return}if(i.meta.kind==="snowdrift"){if(Cn!=="shovel"){pe("\u041D\u0423\u0416\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0410",1);return}Dm("scoop",i.meta.drift);return}if(i.meta.kind==="stove"){pe("\u0412\u041E\u0417\u042C\u041C\u0418\u0422\u0415 \u0414\u0420\u041E\u0412\u0410 \u0418 \u0418\u0421\u041F\u041E\u041B\u042C\u0417\u0423\u0419\u0422\u0415 \u0414\u0415\u0419\u0421\u0422\u0412\u0418\u0415",1.15);return}if(i.meta.kind==="firewood"||i.meta.kind==="prop"){T0(i.meta);return}i.meta.kind==="mannequin"&&(Sa(),tf(i.meta.human,i.meta.human.partMap[i.meta.key]||i.meta.human.partMap.torso,0,null,!0))}function hS(i){if(!Kt||xe)return;Sa();let t=Ve.getWorldPosition(hs);Nm.copy(kn).multiplyScalar(1.62),hs.add(Nm),hs.y-=.11;let e=Kt;e.updateAABB();let n=Math.max(.08,(e.aabb.upperBound.y-e.aabb.lowerBound.y)*.5);hs.y=Jt.clamp(hs.y,n+.025,5.4-n);let s=Math.sqrt(2.8/e.gameMeta.initialMass),r=Jt.clamp(7.5*s,3,9),o=Jt.clamp(13*s,5,18);e.velocity.set(Jt.clamp((hs.x-e.position.x)*o,-r,r),Jt.clamp((hs.y-e.position.y)*o,-r,r),Jt.clamp((hs.z-e.position.z)*o,-r,r)),e.angularVelocity.set(0,0,0),e.force.set(0,e.mass*9.82,0),e.wakeUp(),e.aabbNeedsUpdate=!0}function uS(){return!Te&&!rn&&!xe&&($e.has("KeyW")||$e.has("KeyA")||$e.has("KeyS")||$e.has("KeyD")||Math.abs(_n.x)+Math.abs(_n.y)>.12)}function dS(i){if(xe){ft.velocity.x=0,ft.velocity.z=0;return}let t=Te?0:_n.x,e=Te?0:-_n.y;Te||($e.has("KeyA")&&(t-=1),$e.has("KeyD")&&(t+=1),$e.has("KeyW")&&(e+=1),$e.has("KeyS")&&(e-=1));let n=Math.hypot(t,e);n>1&&(t/=n,e/=n);let s=!Te&&($e.has("ShiftLeft")||$e.has("ShiftRight")||Math.hypot(_n.x,_n.y)>.84),r=Mm(s?5.25:3.8,di),o=-Math.sin(gs)*e+Math.cos(gs)*t,a=-Math.cos(gs)*e-Math.sin(gs)*t,c=Math.min(1,i*(n>.02?13:17));ft.velocity.x+=(o*r-ft.velocity.x)*c,ft.velocity.z+=(a*r-ft.velocity.z)*c,n>.02&&(ta+=i*(r+1.6))}function fS(i){if(El=Math.max(0,El-i),ui=Math.max(0,ui-i*2.6),xe){let o=Jt.smoothstep(Jd,.05,1.25);Ve.position.set(ft.position.x,ft.position.y+.77-o*.68,ft.position.z),Ve.rotation.set(xs+o*.08,gs,-o*.62,"YXZ"),ps.visible=!1;return}ps.visible=!!Cn&&!xe;let t=uS(),e=t?Math.sin(ta*2)*.026:0,n=t?Math.sin(ta)*.012:0,s=ui>0?(Math.random()-.5)*.045*ui:0,r=ui>0?(Math.random()-.5)*.036*ui:0;Ve.position.set(ft.position.x+n+s,ft.position.y+.77+e+r,ft.position.z),Ve.rotation.set(xs,gs,0,"YXZ"),ps.position.y=t?Math.sin(ta*2+.75)*.012:0,ps.position.x=t?Math.sin(ta)*.008:0}function I0(){_l=!1,Ml=ft.position.y,wl=0}function P0(){if(!_l)return;let i=le(ft.position.x)+.87,t=Ml-i,e=wl;if(I0(),t<2.4||e<5.2)return;let n=Math.min(65,Math.round(10+(t-2.4)*14+(e-5.2)*3));w0(n,"leg-left")}function pS(){if(xe||rn||Te)return;let i=ft.position.y,t=ft.velocity.y,e=le(ft.position.x);t<-1.2&&i>e+1.25&&(_l=!0,Ml=Math.max(Ml,i),wl=Math.max(wl,-t)),_l&&Am<-1.2&&t>-.45&&P0(),Am=t}function mS(){if(xe)return;let i=Ce.minX+.5,t=Ce.maxX-.5,e=Ce.minZ+.5,n=Ce.maxZ-.5,s=le(ft.position.x);if(![ft.position.x,ft.position.y,ft.position.z].every(Number.isFinite)||ft.position.y<s+.48){P0(),ft.position.copy(ra),ft.previousPosition.copy(ra),ft.interpolatedPosition.copy(ra),ft.velocity.set(0,0,0),ft.force.set(0,0,0),ft.aabbNeedsUpdate=!0,kt.broadphase.dirty=!0,ft.wakeUp(),I0(),pe("\u0412\u041E\u0417\u0412\u0420\u0410\u0422 \u0412 \u0421\u0415\u041A\u0422\u041E\u0420 \xB7 \u041F\u0410\u0414\u0415\u041D\u0418\u0415",1.4);return}(ft.position.x<i||ft.position.x>t)&&(ft.position.x=Jt.clamp(ft.position.x,i,t),Math.sign(ft.velocity.x)===Math.sign(ft.position.x-(i+t)/2)&&(ft.velocity.x=0)),(ft.position.z<e||ft.position.z>n)&&(ft.position.z=Jt.clamp(ft.position.z,e,n),Math.sign(ft.velocity.z)===Math.sign(ft.position.z)&&(ft.velocity.z=0));let r=le(ft.position.x)+5.02;ft.position.y>r&&(ft.position.y=r,ft.velocity.y>0&&(ft.velocity.y=0)),ft.aabbNeedsUpdate=!0}function gS(){let i=!1;for(let t of Gi){let e=t.body.gameMeta;if(!e?.playerCollisionSuspended||e.isHeld||e.isStored||Fl<(e.playerCollisionReEnableAfter||0))continue;let n=Math.max(.34,t.body.boundingRadius||.5),s=t.body.position.x-ft.position.x,r=t.body.position.z-ft.position.z,o=Math.abs(t.body.position.y-ft.position.y);(Math.hypot(s,r)>n+.36||o>n+.9)&&(t.body.collisionFilterMask=e.originalCollisionFilterMask,e.playerCollisionSuspended=!1,i=!0)}i&&(kt.broadphase.dirty=!0)}function xS(){for(let i of Gi)i.visual.position.copy(i.body.position),i.visual.quaternion.copy(i.body.quaternion)}function pl(i){requestAnimationFrame(pl);let t=Math.min(.05,Math.max(.001,(i-(pl.lastTime||i))/1e3));if(pl.lastTime=i,Fl+=t,Bb(t),xe&&(Jd+=t),Rd++,cl+=t,cl>=1&&(Pm=Math.round(Rd/cl),Rd=0,cl=0,Pm<32&&!Ud&&(Ud=!0,Ke.setPixelRatio(Math.min(window.devicePixelRatio||1,1)))),la>0&&(la-=t,la<=0&&tt("toast").classList.remove("visible")),rn){Ke.render(Ot,Ve);return}dS(t),fS(t),zE(t),qE(t),VE(t),hS(t);for(let e of Gi){let n=e.body.gameMeta?.lastVelocity;n&&(n.x=e.body.velocity.x,n.y=e.body.velocity.y,n.z=e.body.velocity.z)}SE(t),kt.step(1/60,t,4),pS(),Fd&&(eS(),Fd=!1),mS(),gS(),OE(t),JE(t),xS(),Ad+=t,Ad>.09&&(ef(),Ad=0),Ke.render(Ot,Ve),oS(t)}requestAnimationFrame(pl);function N0(){let i=window.innerWidth,t=window.innerHeight;Ve.aspect=i/t,Ve.updateProjectionMatrix(),Ke.setSize(i,t,!1),Ke.setPixelRatio(Math.min(window.devicePixelRatio||1,Ud?1:Bm?1.35:1.7)),Te&&sf()}window.addEventListener("resize",N0,{passive:!0});window.addEventListener("orientationchange",()=>setTimeout(N0,120),{passive:!0});var oo=tt("joystick"),L0=tt("joystick-knob");function D0(i,t){let e=oo.getBoundingClientRect(),n=e.left+e.width/2,s=e.top+e.height/2,r=i-n,o=t-s,a=36,c=Math.hypot(r,o);c>a&&(r=r/c*a,o=o/c*a),_n.x=r/a,_n.y=o/a,L0.style.transform=`translate(${r}px, ${o}px)`}function tr(){_n.x=0,_n.y=0,_n.pointerId=null,L0.style.transform="translate(0px, 0px)"}oo.addEventListener("pointerdown",i=>{!pi||xe||rn||Te||(i.preventDefault(),_n.pointerId=i.pointerId,oo.setPointerCapture(i.pointerId),D0(i.clientX,i.clientY))});oo.addEventListener("pointermove",i=>{i.pointerId===_n.pointerId&&(i.preventDefault(),D0(i.clientX,i.clientY))});oo.addEventListener("pointerup",i=>{i.pointerId===_n.pointerId&&tr()});oo.addEventListener("pointercancel",tr);function yS(i){if(!(!pi||xe||Te||rn||i.pointerType==="touch"&&i.clientX<window.innerWidth*.4)&&!i.target.closest("button, #joystick, .vitals-panel")){if(i.pointerType==="mouse"&&document.pointerLockElement!==ea&&ea.requestPointerLock)try{ea.requestPointerLock()}catch{}Hn={pointerId:i.pointerId,x:i.clientX,y:i.clientY,pointerType:i.pointerType}}}window.addEventListener("pointerdown",yS,{passive:!1});window.addEventListener("pointermove",i=>{if(document.pointerLockElement===ea){if(!pi||xe)return;gs-=(i.movementX||0)*.0027,xs=Jt.clamp(xs-(i.movementY||0)*.0027,-1.18,1.18);return}if(!Hn||i.pointerId!==Hn.pointerId)return;let t=i.clientX-Hn.x,e=i.clientY-Hn.y;Hn.x=i.clientX,Hn.y=i.clientY;let n=i.pointerType==="touch"?.0043:.0034;gs-=t*n,xs=Jt.clamp(xs-e*n,-1.18,1.18)},{passive:!0});window.addEventListener("pointerup",i=>{Hn?.pointerId===i.pointerId&&(Hn=null)},{passive:!0});window.addEventListener("pointercancel",()=>{Hn=null},{passive:!0});var Ma=tt("action-button"),wa=null,js=0,zd=!1;function vS(){js&&clearTimeout(js),js=0,wa=null}Ma.addEventListener("pointerdown",i=>{if(i.preventDefault(),i.stopPropagation(),!(xe||Te||rn)){wa=i.pointerId,zd=!1;try{Ma.setPointerCapture(i.pointerId)}catch{}js=setTimeout(()=>{wa!==i.pointerId||xe||(zd=!0,Qn(!0))},560)}});Ma.addEventListener("pointerup",i=>{if(i.preventDefault(),i.stopPropagation(),i.pointerId!==wa)return;js&&clearTimeout(js),js=0;let t=zd;wa=null,t||C0()});Ma.addEventListener("pointercancel",vS);Ma.addEventListener("contextmenu",i=>i.preventDefault());var ao=tt("fire-button"),Ms=null;function rf(i){Ms!==null&&i.pointerId!==void 0&&i.pointerId!==Ms||(Ms=null,sn=!1)}ao.addEventListener("pointerdown",i=>{if(i.preventDefault(),i.stopPropagation(),!(xe||rn||Te)){Ms=i.pointerId,sn=!0;try{ao.setPointerCapture(i.pointerId)}catch{}Zd()}});ao.addEventListener("pointerup",rf);ao.addEventListener("pointercancel",rf);ao.addEventListener("lostpointercapture",rf);ao.addEventListener("contextmenu",i=>i.preventDefault());tt("reload-button").addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),$d()});tt("menu-button").addEventListener("click",()=>ro(!rn));tt("inventory-button").addEventListener("click",()=>Qn(!Te));tt("menu-resume").addEventListener("click",()=>ro(!1));tt("menu-restart").addEventListener("click",()=>window.location.reload());tt("menu-overlay").addEventListener("click",i=>{i.target===tt("menu-overlay")&&ro(!1)});tt("inventory-close").addEventListener("click",()=>Qn(!1));tt("inventory-take").addEventListener("click",()=>{if(so==="all"){Vi&&Vi!==Cn&&(UE(Vi),Qn(!1));return}fi&&cS(fi)});tt("inventory-tab-bag").addEventListener("click",()=>Ul("bag"));tt("inventory-tab-all").addEventListener("click",()=>Ul("all"));tt("inventory-drop").addEventListener("click",()=>{Kt&&(tS(),Ta())});tt("inventory-stash").addEventListener("click",()=>aS());tt("inventory-overlay").addEventListener("click",i=>{i.target===tt("inventory-overlay")&&Qn(!1)});tt("death-restart").addEventListener("click",()=>window.location.reload());tt("injury-doll").addEventListener("pointerdown",i=>{let t=i.target.closest?.(".doll-part");t&&(i.preventDefault(),i.stopPropagation(),M0(t.id.replace("injury-","")))});tt("injury-doll").addEventListener("keydown",i=>{if(!["Enter"," "].includes(i.key))return;let t=i.target.closest?.(".doll-part");t&&(i.preventDefault(),M0(t.id.replace("injury-","")))});document.addEventListener("keydown",i=>{if(rn){(i.code==="Escape"||i.code==="Enter")&&(i.preventDefault(),ro(!1));return}if(xe){if(i.code==="KeyR"){i.preventDefault(),window.location.reload();return}i.target.closest?.("button")||i.preventDefault();return}if(i.code==="Tab"){i.preventDefault(),pi&&Qn(!Te);return}if(i.code==="Escape"){i.preventDefault(),Te?Qn(!1):pi&&ro(!0);return}["KeyW","KeyA","KeyS","KeyD","ShiftLeft","ShiftRight","KeyE","KeyR","Space"].includes(i.code)&&i.preventDefault(),$e.add(i.code),i.code==="KeyE"&&!i.repeat&&!Te&&C0(),i.code==="KeyR"&&!i.repeat&&$d(),i.code==="Space"&&!Te&&(sn=!0,i.repeat||Zd())});document.addEventListener("keyup",i=>{$e.delete(i.code),i.code==="Space"&&(sn=!1)});document.addEventListener("visibilitychange",()=>{document.hidden&&($e.clear(),tr(),Hn=null,sn=!1,Ms=null)});window.addEventListener("blur",()=>{$e.clear(),sn=!1,Ms=null,tr()},{passive:!0});Dl();Qd();v0();Ta();ef();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
