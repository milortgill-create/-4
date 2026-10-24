(()=>{var su="170";var Bm=0,bd=1,Fm=2;var Pf=1,ru=2,fi=3,Gi=0,en=1,un=2,ki=0,ar=1,Ba=2,Ed=3,Sd=4,Um=5,xs=100,Om=101,zm=102,Hm=103,km=104,Vm=200,Gm=201,Wm=202,qm=203,Fc=204,Uc=205,Xm=206,Ym=207,$m=208,Zm=209,jm=210,Jm=211,Km=212,Qm=213,t0=214,Oc=0,zc=1,Hc=2,ur=3,kc=4,Vc=5,Gc=6,Wc=7,Nf=0,e0=1,n0=2,Vi=0,i0=1,s0=2,r0=3,ll=4,o0=5,a0=6,l0=7;var Lf=300,dr=301,fr=302,qc=303,Xc=304,cl=306,pr=1e3,Ms=1001,Yc=1002,Hn=1003,c0=1004;var aa=1005;var Yn=1006,ic=1007;var ws=1008;var xi=1009,Df=1010,Bf=1011,ro=1012,ou=1013,bs=1014,mi=1015,_o=1016,au=1017,lu=1018,mr=1020,Ff=35902,Uf=1021,Of=1022,zn=1023,zf=1024,Hf=1025,lr=1026,gr=1027,kf=1028,cu=1029,Vf=1030,hu=1031;var uu=1033,Ia=33776,Pa=33777,Na=33778,La=33779,$c=35840,Zc=35841,jc=35842,Jc=35843,Kc=36196,Qc=37492,th=37496,eh=37808,nh=37809,ih=37810,sh=37811,rh=37812,oh=37813,ah=37814,lh=37815,ch=37816,hh=37817,uh=37818,dh=37819,fh=37820,ph=37821,Da=36492,mh=36494,gh=36495,Gf=36283,yh=36284,xh=36285,vh=36286;var Fa=2300,_h=2301,sc=2302,Td=2400,Ad=2401,Rd=2402;var h0=3200,u0=3201;var Wf=0,d0=1,dn="",Oe="srgb",br="srgb-linear",hl="linear",de="srgb";var qs=7680;var Cd=519,f0=512,p0=513,m0=514,qf=515,g0=516,y0=517,x0=518,v0=519,Id=35044;var Pd="300 es",gi=2e3,Ua=2001,Wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nd=1234567,to=Math.PI/180,yr=180/Math.PI;function Er(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function du(i,t){return(i%t+t)%t}function _0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function M0(i,t,e){return i!==t?(e-i)/(t-i):0}function eo(i,t,e){return(1-e)*i+e*t}function w0(i,t,e,n){return eo(i,t,1-Math.exp(-e*n))}function b0(i,t=1){return t-Math.abs(du(i,t*2)-t)}function E0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function S0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function T0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function A0(i,t){return i+Math.random()*(t-i)}function R0(i){return i*(.5-Math.random())}function C0(i){i!==void 0&&(Nd=i);let t=Nd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function I0(i){return i*to}function P0(i){return i*yr}function N0(i){return(i&i-1)===0&&i!==0}function L0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function D0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function B0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var $t={DEG2RAD:to,RAD2DEG:yr,generateUUID:Er,clamp:ze,euclideanModulo:du,mapLinear:_0,inverseLerp:M0,lerp:eo,damp:w0,pingpong:b0,smoothstep:E0,smootherstep:S0,randInt:T0,randFloat:A0,randFloatSpread:R0,seededRandom:C0,degToRad:I0,radToDeg:P0,isPowerOfTwo:N0,ceilPowerOfTwo:L0,floorPowerOfTwo:D0,setQuaternionFromProperEuler:B0,normalize:je,denormalize:rr},at=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],x=s[1],w=s[4],v=s[7],R=s[2],T=s[5],A=s[8];return r[0]=o*y+a*x+l*R,r[3]=o*m+a*w+l*T,r[6]=o*p+a*v+l*A,r[1]=c*y+h*x+d*R,r[4]=c*m+h*w+d*T,r[7]=c*p+h*v+d*A,r[2]=u*y+f*x+g*R,r[5]=u*m+f*w+g*T,r[8]=u*p+f*v+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rc.makeScale(t,e)),this}rotate(t){return this.premultiply(rc.makeRotation(-t)),this}translate(t,e){return this.premultiply(rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rc=new Vt;function Xf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function F0(){let i=Oa("canvas");return i.style.display="block",i}var Ld={};function Kr(i){i in Ld||(Ld[i]=!0,console.warn(i))}function U0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function O0(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function z0(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var se={enabled:!0,workingColorSpace:br,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===dn?hl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Dd=[.64,.33,.3,.6,.15,.06],Bd=[.2126,.7152,.0722],Fd=[.3127,.329],Ud=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Od=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[br]:{primaries:Dd,whitePoint:Fd,transfer:hl,toXYZ:Ud,fromXYZ:Od,luminanceCoefficients:Bd,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:Dd,whitePoint:Fd,transfer:de,toXYZ:Ud,fromXYZ:Od,luminanceCoefficients:Bd,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});var Xs,Mh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xs===void 0&&(Xs=Oa("canvas")),Xs.width=t.width,Xs.height=t.height;let n=Xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Oa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},H0=0,za=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Er(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(oc(s[o].image)):r.push(oc(s[o]))}else r=oc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function oc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var k0=0,fn=class i extends Wi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ms,s=Ms,r=Yn,o=ws,a=zn,l=xi,c=i.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Er(),this.name="",this.source=new za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pr:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case Yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pr:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case Yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Lf;fn.DEFAULT_ANISOTROPY=1;var fe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(f+1)/2,R=(p+1)/2,T=(h+u)/4,A=(d+y)/4,I=(g+m)/4;return w>v&&w>R?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=A/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=I/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-y)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wh=class extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new za(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends wh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ha=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bh=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(d!==y||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*y,x=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let R=Math.sqrt(w),T=Math.atan2(R,p*x);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let v=a*x;if(l=l*m+u*v,c=c*m+f*v,h=h*m+g*v,d=d*m+y*v,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ac.copy(this).projectOnVector(t),this.sub(ac)}reflect(t){return this.sub(ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ac=new D,zd=new qi,Es=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),la.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(t.matrixWorld),this.union(la)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),ca.subVectors(this.max,Yr),Ys.subVectors(t.a,Yr),$s.subVectors(t.b,Yr),Zs.subVectors(t.c,Yr),Bi.subVectors($s,Ys),Fi.subVectors(Zs,$s),us.subVectors(Ys,Zs);let e=[0,-Bi.z,Bi.y,0,-Fi.z,Fi.y,0,-us.z,us.y,Bi.z,0,-Bi.x,Fi.z,0,-Fi.x,us.z,0,-us.x,-Bi.y,Bi.x,0,-Fi.y,Fi.x,0,-us.y,us.x,0];return!lc(e,Ys,$s,Zs,ca)||(e=[1,0,0,0,1,0,0,0,1],!lc(e,Ys,$s,Zs,ca))?!1:(ha.crossVectors(Bi,Fi),e=[ha.x,ha.y,ha.z],lc(e,Ys,$s,Zs,ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},li=[new D,new D,new D,new D,new D,new D,new D,new D],Fn=new D,la=new Es,Ys=new D,$s=new D,Zs=new D,Bi=new D,Fi=new D,us=new D,Yr=new D,ca=new D,ha=new D,ds=new D;function lc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ds.fromArray(i,r);let a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=t.dot(ds),c=e.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var V0=new Es,$r=new D,cc=new D,oo=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):V0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);let e=$r.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($r,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(cc)),this.expandByPoint($r.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ci=new D,hc=new D,ua=new D,Ui=new D,uc=new D,da=new D,dc=new D,ka=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){hc.copy(t).add(e).multiplyScalar(.5),ua.copy(e).sub(t).normalize(),Ui.copy(this.origin).sub(hc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ua),a=Ui.dot(this.direction),l=-Ui.dot(ua),c=Ui.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hc).addScaledVector(ua,u),f}intersectSphere(t,e){ci.subVectors(t.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,s,r){uc.subVectors(e,t),da.subVectors(n,t),dc.crossVectors(uc,da);let o=this.direction.dot(dc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,t);let l=a*this.direction.dot(da.crossVectors(Ui,da));if(l<0)return null;let c=a*this.direction.dot(uc.cross(Ui));if(c<0||l+c>o)return null;let h=-a*Ui.dot(dc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/js.setFromMatrixColumn(t,0).length(),r=1/js.setFromMatrixColumn(t,1).length(),o=1/js.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(G0,t,W0)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Oi.crossVectors(n,cn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Oi.crossVectors(n,cn)),Oi.normalize(),fa.crossVectors(cn,Oi),s[0]=Oi.x,s[4]=fa.x,s[8]=cn.x,s[1]=Oi.y,s[5]=fa.y,s[9]=cn.y,s[2]=Oi.z,s[6]=fa.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],x=n[3],w=n[7],v=n[11],R=n[15],T=s[0],A=s[4],I=s[8],E=s[12],M=s[1],P=s[5],k=s[9],N=s[13],B=s[2],z=s[6],L=s[10],j=s[14],V=s[3],J=s[7],lt=s[11],mt=s[15];return r[0]=o*T+a*M+l*B+c*V,r[4]=o*A+a*P+l*z+c*J,r[8]=o*I+a*k+l*L+c*lt,r[12]=o*E+a*N+l*j+c*mt,r[1]=h*T+d*M+u*B+f*V,r[5]=h*A+d*P+u*z+f*J,r[9]=h*I+d*k+u*L+f*lt,r[13]=h*E+d*N+u*j+f*mt,r[2]=g*T+y*M+m*B+p*V,r[6]=g*A+y*P+m*z+p*J,r[10]=g*I+y*k+m*L+p*lt,r[14]=g*E+y*N+m*j+p*mt,r[3]=x*T+w*M+v*B+R*V,r[7]=x*A+w*P+v*z+R*J,r[11]=x*I+w*k+v*L+R*lt,r[15]=x*E+w*N+v*j+R*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*f-n*l*f)+y*(+e*l*f-e*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],x=d*m*c-y*u*c+y*l*f-a*m*f-d*l*p+a*u*p,w=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,v=h*y*c-g*d*c+g*a*f-o*y*f-h*a*p+o*d*p,R=g*d*l-h*y*l-g*a*u+o*y*u+h*a*m-o*d*m,T=e*x+n*w+s*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=x*A,t[1]=(y*u*r-d*m*r-y*s*f+n*m*f+d*s*p-n*u*p)*A,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*p+n*l*p)*A,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*f-n*l*f)*A,t[4]=w*A,t[5]=(h*m*r-g*u*r+g*s*f-e*m*f-h*s*p+e*u*p)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*f+e*l*f)*A,t[8]=v*A,t[9]=(g*d*r-h*y*r-g*n*f+e*y*f+h*n*p-e*d*p)*A,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*A,t[12]=R*A,t[13]=(h*y*s-g*d*s+g*n*u-e*y*u-h*n*m+e*d*m)*A,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*m-e*a*m)*A,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,y=o*h,m=o*d,p=a*d,x=l*c,w=l*h,v=l*d,R=n.x,T=n.y,A=n.z;return s[0]=(1-(y+p))*R,s[1]=(f+v)*R,s[2]=(g-w)*R,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(u+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+w)*A,s[9]=(m-x)*A,s[10]=(1-(u+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=js.set(s[0],s[1],s[2]).length(),o=js.set(s[4],s[5],s[6]).length(),a=js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);let c=1/r,h=1/o,d=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,e.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=gi){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,g;if(a===gi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ua)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=gi){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*c,f=(n+s)*h,g,y;if(a===gi)g=(o+r)*d,y=-2*d;else if(a===Ua)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},js=new D,Un=new be,G0=new D(0,0,0),W0=new D(1,1,1),Oi=new D,fa=new D,cn=new D,Hd=new be,kd=new qi,pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kd.setFromEuler(this),this.setFromQuaternion(kd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var ao=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},q0=0,Vd=new D,Js=new qi,hi=new be,pa=new D,Zr=new D,X0=new D,Y0=new qi,Gd=new D(1,0,0),Wd=new D(0,1,0),qd=new D(0,0,1),Xd={type:"added"},$0={type:"removed"},Ks={type:"childadded",child:null},fc={type:"childremoved",child:null},Ge=class i extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new pn,n=new qi,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new Vt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(Gd,t)}rotateY(t){return this.rotateOnAxis(Wd,t)}rotateZ(t){return this.rotateOnAxis(qd,t)}translateOnAxis(t,e){return Vd.copy(t).applyQuaternion(this.quaternion),this.position.add(Vd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gd,t)}translateY(t){return this.translateOnAxis(Wd,t)}translateZ(t){return this.translateOnAxis(qd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pa.copy(t):pa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Zr,pa,this.up):hi.lookAt(pa,Zr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(hi),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xd),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($0),fc.child=t,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xd),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,t,X0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,Y0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ge.DEFAULT_UP=new D(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new D,ui=new D,pc=new D,di=new D,Qs=new D,tr=new D,Yd=new D,mc=new D,gc=new D,yc=new D,xc=new fe,vc=new fe,_c=new fe,vs=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),ui.subVectors(n,e),pc.subVectors(t,e);let o=On.dot(On),a=On.dot(ui),l=On.dot(pc),c=ui.dot(ui),h=ui.dot(pc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return xc.setScalar(0),vc.setScalar(0),_c.setScalar(0),xc.fromBufferAttribute(t,e),vc.fromBufferAttribute(t,n),_c.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xc,r.x),o.addScaledVector(vc,r.y),o.addScaledVector(_c,r.z),o}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),ui.subVectors(t,e),On.cross(ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),On.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Qs.subVectors(s,n),tr.subVectors(r,n),mc.subVectors(t,n);let l=Qs.dot(mc),c=tr.dot(mc);if(l<=0&&c<=0)return e.copy(n);gc.subVectors(t,s);let h=Qs.dot(gc),d=tr.dot(gc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Qs,o);yc.subVectors(t,r);let f=Qs.dot(yc),g=tr.dot(yc);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(tr,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Yd.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Yd,a);let p=1/(m+y+u);return o=y*p,a=u*p,e.copy(n).addScaledVector(Qs,o).addScaledVector(tr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Mc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=du(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Mc(o,r,t+1/3),this.g=Mc(o,r,t),this.b=Mc(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=Yf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return se.fromWorkingColorSpace(Ye.copy(this),t),Math.round(ze(Ye.r*255,0,255))*65536+Math.round(ze(Ye.g*255,0,255))*256+Math.round(ze(Ye.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Oe){se.fromWorkingColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(ma);let n=eo(zi.h,ma.h,e),s=eo(zi.s,ma.s,e),r=eo(zi.l,ma.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new Yt;Yt.NAMES=Yf;var Z0=0,Ss=class extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Er(),this.name="",this.blending=ar,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Uc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fc&&(n.blendSrc=this.blendSrc),this.blendDst!==Uc&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Sn=class extends Ss{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new D,ga=new at,En=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Id,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ga.fromBufferAttribute(this,e),ga.applyMatrix3(t),this.setXY(e,ga.x,ga.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Id&&(t.usage=this.usage),t}};var Va=class extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ga=class extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}},j0=0,bn=new be,wc=new Ge,er=new D,hn=new Es,jr=new Es,Ue=new D,nn=class i extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xf(t)?Ga:Va)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return wc.lookAt(t),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(hn.min,jr.min),hn.expandByPoint(Ue),Ue.addVectors(hn.max,jr.max),hn.expandByPoint(Ue)):(hn.expandByPoint(jr.min),hn.expandByPoint(jr.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(t,c),Ue.add(er)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new D,l[I]=new D;let c=new D,h=new D,d=new D,u=new at,f=new at,g=new at,y=new D,m=new D;function p(I,E,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(y),a[E].add(y),a[M].add(y),l[I].add(m),l[E].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,E=x.length;I<E;++I){let M=x[I],P=M.start,k=M.count;for(let N=P,B=P+k;N<B;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let w=new D,v=new D,R=new D,T=new D;function A(I){R.fromBufferAttribute(s,I),T.copy(R);let E=a[I];w.copy(E),w.sub(R.multiplyScalar(R.dot(E))).normalize(),v.crossVectors(T,E);let P=v.dot(l[I])<0?-1:1;o.setXYZW(I,w.x,w.y,w.z,P)}for(let I=0,E=x.length;I<E;++I){let M=x[I],P=M.start,k=M.count;for(let N=P,B=P+k;N<B;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new En(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$d=new be,fs=new ka,ya=new oo,Zd=new D,xa=new D,va=new D,_a=new D,bc=new D,Ma=new D,jd=new D,wa=new D,ct=class extends Ge{constructor(t=new nn,e=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(bc.fromBufferAttribute(d,t),o?Ma.addScaledVector(bc,h):Ma.addScaledVector(bc.sub(e),h))}e.add(Ma)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),fs.copy(t.ray).recast(t.near),!(ya.containsPoint(fs.origin)===!1&&(fs.intersectSphere(ya,Zd)===null||fs.origin.distanceToSquared(Zd)>(t.far-t.near)**2))&&($d.copy(r).invert(),fs.copy(t.ray).applyMatrix4($d),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,R=w;v<R;v+=3){let T=a.getX(v),A=a.getX(v+1),I=a.getX(v+2);s=ba(this,p,t,n,c,h,d,T,A,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=ba(this,o,t,n,c,h,d,x,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,R=w;v<R;v+=3){let T=v,A=v+1,I=v+2;s=ba(this,p,t,n,c,h,d,T,A,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=m,w=m+1,v=m+2;s=ba(this,o,t,n,c,h,d,x,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function J0(i,t,e,n,s,r,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Gi,a),l===null)return null;wa.copy(a),wa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wa);return c<e.near||c>e.far?null:{distance:c,point:wa.clone(),object:i}}function ba(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,xa),i.getVertexPosition(l,va),i.getVertexPosition(c,_a);let h=J0(i,t,e,n,xa,va,_a,jd);if(h){let d=new D;vs.getBarycoord(jd,xa,va,_a,d),s&&(h.uv=vs.getInterpolatedAttribute(s,a,l,c,d,new at)),r&&(h.uv1=vs.getInterpolatedAttribute(r,a,l,c,d,new at)),o&&(h.normal=vs.getInterpolatedAttribute(o,a,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new D,materialIndex:0};vs.getNormal(xa,va,_a,u.normal),h.face=u,h.barycoord=d}return h}var St=class i extends nn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2));function g(y,m,p,x,w,v,R,T,A,I,E){let M=v/A,P=R/I,k=v/2,N=R/2,B=T/2,z=A+1,L=I+1,j=0,V=0,J=new D;for(let lt=0;lt<L;lt++){let mt=lt*P-N;for(let ot=0;ot<z;ot++){let Jt=ot*M-k;J[y]=Jt*x,J[m]=mt*w,J[p]=B,c.push(J.x,J.y,J.z),J[y]=0,J[m]=0,J[p]=T>0?1:-1,h.push(J.x,J.y,J.z),d.push(ot/A),d.push(1-lt/I),j+=1}}for(let lt=0;lt<I;lt++)for(let mt=0;mt<A;mt++){let ot=u+mt+z*lt,Jt=u+mt+z*(lt+1),Y=u+(mt+1)+z*(lt+1),it=u+(mt+1)+z*lt;l.push(ot,Jt,it),l.push(Jt,Y,it),V+=6}a.addGroup(f,V,E),f+=V,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function xr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Je(i){let t={};for(let e=0;e<i.length;e++){let n=xr(i[e]);for(let s in n)t[s]=n[s]}return t}function K0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $f(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Q0={clone:xr,merge:Je},tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends Ss{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=K0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Wa=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hi=new D,Jd=new at,Kd=new at,He=class extends Wa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,Jd,Kd),e.subVectors(Kd,Jd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(to*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},nr=-90,ir=1,Eh=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new He(nr,ir,t,e);s.layers=this.layers,this.add(s);let r=new He(nr,ir,t,e);r.layers=this.layers,this.add(r);let o=new He(nr,ir,t,e);o.layers=this.layers,this.add(o);let a=new He(nr,ir,t,e);a.layers=this.layers,this.add(a);let l=new He(nr,ir,t,e);l.layers=this.layers,this.add(l);let c=new He(nr,ir,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qa=class extends fn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:dr,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sh=class extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new St(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:ki});r.uniforms.tEquirect.value=e;let o=new ct(s,r),a=e.minFilter;return e.minFilter===ws&&(e.minFilter=Yn),new Eh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ec=new D,ng=new D,ig=new Vt,pi=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ec.subVectors(n,e).cross(ng.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ec),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ig.getNormalMatrix(t),s=this.coplanarPoint(Ec).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ps=new oo,Ea=new D,lo=class{constructor(t=new pi,e=new pi,n=new pi,s=new pi,r=new pi,o=new pi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],x=s[13],w=s[14],v=s[15];if(n[0].setComponents(l-r,u-c,m-f,v-p).normalize(),n[1].setComponents(l+r,u+c,m+f,v+p).normalize(),n[2].setComponents(l+o,u+h,m+g,v+x).normalize(),n[3].setComponents(l-o,u-h,m-g,v-x).normalize(),n[4].setComponents(l-a,u-d,m-y,v-w).normalize(),e===gi)n[5].setComponents(l+a,u+d,m+y,v+w).normalize();else if(e===Ua)n[5].setComponents(a,d,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ea.x=s.normal.x>0?t.max.x:t.min.x,Ea.y=s.normal.y>0?t.max.y:t.min.y,Ea.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sg(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Zn=class i extends nn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let x=p*u-o;for(let w=0;w<c;w++){let v=w*d-r;g.push(v,-x,0),y.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let w=x+c*p,v=x+c*(p+1),R=x+1+c*(p+1),T=x+1+c*p;f.push(w,v,T),f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(y,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,og=`#ifdef USE_ALPHAHASH
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
#endif`,ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ug=`#ifdef USE_AOMAP
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
#endif`,dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fg=`#ifdef USE_BATCHING
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
#endif`,pg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xg=`#ifdef USE_IRIDESCENCE
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
#endif`,vg=`#ifdef USE_BUMPMAP
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rg=`#define PI 3.141592653589793
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
} // validated`,Cg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ig=`vec3 transformedNormal = objectNormal;
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
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xg=`#ifdef USE_GRADIENTMAP
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
}`,Yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jg=`uniform bool receiveShadow;
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
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ny=`PhysicalMaterial material;
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
#endif`,iy=`struct PhysicalMaterial {
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
}`,sy=`
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
#endif`,ry=`#if defined( RE_IndirectDiffuse )
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ay=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ly=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,py=`#if defined( USE_POINTS_UV )
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
#endif`,my=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
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
#endif`,My=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,by=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ay=`#ifdef USE_NORMALMAP
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
#endif`,Ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,By=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gy=`float getShadowMask() {
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
}`,Wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yy=`#ifdef USE_SKINNING
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
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ky=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#ifdef USE_TRANSMISSION
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`#include <common>
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
}`,ux=`#if DEPTH_PACKING == 3200
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
}`,dx=`#define DISTANCE
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
}`,fx=`#define DISTANCE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
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
}`,yx=`uniform vec3 diffuse;
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
}`,xx=`#include <common>
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
}`,vx=`uniform vec3 diffuse;
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
}`,_x=`#define LAMBERT
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
}`,Mx=`#define LAMBERT
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
}`,wx=`#define MATCAP
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
}`,bx=`#define MATCAP
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
}`,Ex=`#define NORMAL
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
}`,Sx=`#define NORMAL
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
}`,Tx=`#define PHONG
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
}`,Ax=`#define PHONG
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define STANDARD
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
}`,Ix=`#define TOON
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
}`,Px=`#define TOON
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
}`,Nx=`uniform float size;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Bx=`uniform vec3 color;
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
}`,Fx=`uniform float rotation;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:rg,alphahash_pars_fragment:og,alphamap_fragment:ag,alphamap_pars_fragment:lg,alphatest_fragment:cg,alphatest_pars_fragment:hg,aomap_fragment:ug,aomap_pars_fragment:dg,batching_pars_vertex:fg,batching_vertex:pg,begin_vertex:mg,beginnormal_vertex:gg,bsdfs:yg,iridescence_fragment:xg,bumpmap_pars_fragment:vg,clipping_planes_fragment:_g,clipping_planes_pars_fragment:Mg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:bg,color_fragment:Eg,color_pars_fragment:Sg,color_pars_vertex:Tg,color_vertex:Ag,common:Rg,cube_uv_reflection_fragment:Cg,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Pg,displacementmap_vertex:Ng,emissivemap_fragment:Lg,emissivemap_pars_fragment:Dg,colorspace_fragment:Bg,colorspace_pars_fragment:Fg,envmap_fragment:Ug,envmap_common_pars_fragment:Og,envmap_pars_fragment:zg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:Jg,envmap_vertex:kg,fog_vertex:Vg,fog_pars_vertex:Gg,fog_fragment:Wg,fog_pars_fragment:qg,gradientmap_pars_fragment:Xg,lightmap_pars_fragment:Yg,lights_lambert_fragment:$g,lights_lambert_pars_fragment:Zg,lights_pars_begin:jg,lights_toon_fragment:Kg,lights_toon_pars_fragment:Qg,lights_phong_fragment:ty,lights_phong_pars_fragment:ey,lights_physical_fragment:ny,lights_physical_pars_fragment:iy,lights_fragment_begin:sy,lights_fragment_maps:ry,lights_fragment_end:oy,logdepthbuf_fragment:ay,logdepthbuf_pars_fragment:ly,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:hy,map_fragment:uy,map_pars_fragment:dy,map_particle_fragment:fy,map_particle_pars_fragment:py,metalnessmap_fragment:my,metalnessmap_pars_fragment:gy,morphinstance_vertex:yy,morphcolor_vertex:xy,morphnormal_vertex:vy,morphtarget_pars_vertex:_y,morphtarget_vertex:My,normal_fragment_begin:wy,normal_fragment_maps:by,normal_pars_fragment:Ey,normal_pars_vertex:Sy,normal_vertex:Ty,normalmap_pars_fragment:Ay,clearcoat_normal_fragment_begin:Ry,clearcoat_normal_fragment_maps:Cy,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Py,opaque_fragment:Ny,packing:Ly,premultiplied_alpha_fragment:Dy,project_vertex:By,dithering_fragment:Fy,dithering_pars_fragment:Uy,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:zy,shadowmap_pars_fragment:Hy,shadowmap_pars_vertex:ky,shadowmap_vertex:Vy,shadowmask_pars_fragment:Gy,skinbase_vertex:Wy,skinning_pars_vertex:qy,skinning_vertex:Xy,skinnormal_vertex:Yy,specularmap_fragment:$y,specularmap_pars_fragment:Zy,tonemapping_fragment:jy,tonemapping_pars_fragment:Jy,transmission_fragment:Ky,transmission_pars_fragment:Qy,uv_pars_fragment:tx,uv_pars_vertex:ex,uv_vertex:nx,worldpos_vertex:ix,background_vert:sx,background_frag:rx,backgroundCube_vert:ox,backgroundCube_frag:ax,cube_vert:lx,cube_frag:cx,depth_vert:hx,depth_frag:ux,distanceRGBA_vert:dx,distanceRGBA_frag:fx,equirect_vert:px,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:yx,meshbasic_vert:xx,meshbasic_frag:vx,meshlambert_vert:_x,meshlambert_frag:Mx,meshmatcap_vert:wx,meshmatcap_frag:bx,meshnormal_vert:Ex,meshnormal_frag:Sx,meshphong_vert:Tx,meshphong_frag:Ax,meshphysical_vert:Rx,meshphysical_frag:Cx,meshtoon_vert:Ix,meshtoon_frag:Px,points_vert:Nx,points_frag:Lx,shadow_vert:Dx,shadow_frag:Bx,sprite_vert:Fx,sprite_frag:Ux},ht={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Xn={basic:{uniforms:Je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Je([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Je([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Je([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Je([ht.points,ht.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Je([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Je([ht.common,ht.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Je([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Je([ht.sprite,ht.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Je([ht.common,ht.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Je([ht.lights,ht.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Xn.physical={uniforms:Je([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var Sa={r:0,b:0,g:0},ms=new pn,Ox=new be;function zx(i,t,e,n,s,r,o){let a=new Yt(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(x){let w=x.isScene===!0?x.background:null;return w&&w.isTexture&&(w=(x.backgroundBlurriness>0?e:t).get(w)),w}function y(x){let w=!1,v=g(x);v===null?p(a,l):v&&v.isColor&&(p(v,1),w=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,w){let v=g(w);v&&(v.isCubeTexture||v.mapping===cl)?(h===void 0&&(h=new ct(new St(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:xr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ms.copy(w.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(ms)),h.material.toneMapped=se.getTransfer(v.colorSpace)!==de,(d!==v||u!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ct(new Zn(2,2),new $n({name:"BackgroundMaterial",uniforms:xr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=se.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,w){x.getRGB(Sa,$f(i)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(x,w=1){a.set(x),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:y,addToRenderList:m}}function Hx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(M,P,k,N,B){let z=!1,L=d(N,k,P);r!==L&&(r=L,c(r.object)),z=f(M,N,k,B),z&&g(M,N,k,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(M,P,k,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,P,k){let N=k.wireframe===!0,B=n[M.id];B===void 0&&(B={},n[M.id]=B);let z=B[P.id];z===void 0&&(z={},B[P.id]=z);let L=z[N];return L===void 0&&(L=u(l()),z[N]=L),L}function u(M){let P=[],k=[],N=[];for(let B=0;B<e;B++)P[B]=0,k[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,P,k,N){let B=r.attributes,z=P.attributes,L=0,j=k.getAttributes();for(let V in j)if(j[V].location>=0){let lt=B[V],mt=z[V];if(mt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),lt===void 0||lt.attribute!==mt||mt&&lt.data!==mt.data)return!0;L++}return r.attributesNum!==L||r.index!==N}function g(M,P,k,N){let B={},z=P.attributes,L=0,j=k.getAttributes();for(let V in j)if(j[V].location>=0){let lt=z[V];lt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor));let mt={};mt.attribute=lt,lt&&lt.data&&(mt.data=lt.data),B[V]=mt,L++}r.attributes=B,r.attributesNum=L,r.index=N}function y(){let M=r.newAttributes;for(let P=0,k=M.length;P<k;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){let k=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;k[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),B[M]!==P&&(i.vertexAttribDivisor(M,P),B[M]=P)}function x(){let M=r.newAttributes,P=r.enabledAttributes;for(let k=0,N=P.length;k<N;k++)P[k]!==M[k]&&(i.disableVertexAttribArray(k),P[k]=0)}function w(M,P,k,N,B,z,L){L===!0?i.vertexAttribIPointer(M,P,k,B,z):i.vertexAttribPointer(M,P,k,N,B,z)}function v(M,P,k,N){y();let B=N.attributes,z=k.getAttributes(),L=P.defaultAttributeValues;for(let j in z){let V=z[j];if(V.location>=0){let J=B[j];if(J===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){let lt=J.normalized,mt=J.itemSize,ot=t.get(J);if(ot===void 0)continue;let Jt=ot.buffer,Y=ot.type,it=ot.bytesPerElement,Et=Y===i.INT||Y===i.UNSIGNED_INT||J.gpuType===ou;if(J.isInterleavedBufferAttribute){let ut=J.data,Ft=ut.stride,zt=J.offset;if(ut.isInstancedInterleavedBuffer){for(let Xt=0;Xt<V.locationSize;Xt++)p(V.location+Xt,ut.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Xt=0;Xt<V.locationSize;Xt++)m(V.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Xt=0;Xt<V.locationSize;Xt++)w(V.location+Xt,mt/V.locationSize,Y,lt,Ft*it,(zt+mt/V.locationSize*Xt)*it,Et)}else{if(J.isInstancedBufferAttribute){for(let ut=0;ut<V.locationSize;ut++)p(V.location+ut,J.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ut=0;ut<V.locationSize;ut++)m(V.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let ut=0;ut<V.locationSize;ut++)w(V.location+ut,mt/V.locationSize,Y,lt,mt*it,mt/V.locationSize*ut*it,Et)}}else if(L!==void 0){let lt=L[j];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(V.location,lt);break;case 3:i.vertexAttrib3fv(V.location,lt);break;case 4:i.vertexAttrib4fv(V.location,lt);break;default:i.vertexAttrib1fv(V.location,lt)}}}}x()}function R(){I();for(let M in n){let P=n[M];for(let k in P){let N=P[k];for(let B in N)h(N[B].object),delete N[B];delete P[k]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let k in P){let N=P[k];for(let B in N)h(N[B].object),delete N[B];delete P[k]}delete n[M.id]}function A(M){for(let P in n){let k=n[P];if(k[M.id]===void 0)continue;let N=k[M.id];for(let B in N)h(N[B].object),delete N[B];delete k[M.id]}}function I(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function kx(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*u[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let I=A===_o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==xi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mi&&!I)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function Gx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new pi,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,w=x*4,v=p.clippingState||null;l.value=v,v=h(g,u,w,f);for(let R=0;R!==w;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==y;++w,v+=4)o.copy(d[w]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Wx(i){let t=new WeakMap;function e(o,a){return a===qc?o.mapping=dr:a===Xc&&(o.mapping=fr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qc||a===Xc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Sh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Xa=class extends Wa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},or=4,Qd=[.125,.215,.35,.446,.526,.582],_s=20,Sc=new Xa,tf=new Yt,Tc=null,Ac=0,Rc=0,Cc=!1,ys=(1+Math.sqrt(5))/2,sr=1/ys,ef=[new D(-ys,sr,0),new D(ys,sr,0),new D(-sr,0,ys),new D(sr,0,ys),new D(0,ys,-sr),new D(0,ys,sr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Ya=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Tc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tc,Ac,Rc),this._renderer.xr.enabled=Cc,t.scissorTest=!1,Ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dr||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:_o,format:zn,colorSpace:br,depthBuffer:!1},s=nf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qx(r)),this._blurMaterial=Xx(r,t,e)}return s}_compileMaterial(t){let e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,Sc)}_sceneToCubeUV(t,e,n,s){let a=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(tf),h.toneMapping=Vi,h.autoClear=!1;let f=new Sn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new ct(new St,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(tf),y=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let w=this._cubeSize;Ta(s,x*w,p>2?w:0,w,w),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===dr||t.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ta(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Sc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ef[(s-r-1)%ef.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ct(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_s-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):_s;m>_s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_s}`);let p=[],x=0;for(let A=0;A<_s;++A){let I=A/y,E=Math.exp(-I*I/2);p.push(E),A===0?x+=E:A<m&&(x+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-n;let v=this._sizeLods[s],R=3*v*(s>w-or?s-w+or:0),T=4*(this._cubeSize-v);Ta(e,R,T,3*v,2*v),l.setRenderTarget(e),l.render(d,Sc)}};function qx(i){let t=[],e=[],n=[],s=i,r=i-or+1+Qd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-or?l=Qd[o-i+or-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,x=new Float32Array(y*g*f),w=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,I=T>2?0:-1,E=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(E,y*g*T),w.set(u,m*g*T);let M=[T,T,T,T,T,T];v.set(M,p*g*T)}let R=new nn;R.setAttribute("position",new En(x,y)),R.setAttribute("uv",new En(w,m)),R.setAttribute("faceIndex",new En(v,p)),t.push(R),s>or&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nf(i,t,e){let n=new vi(i,t,e);return n.texture.mapping=cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xx(i,t,e){let n=new Float32Array(_s),s=new D(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fu(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function sf(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function rf(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function fu(){return`

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
	`}function Yx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===qc||l===Xc,h=l===dr||l===fr;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ya(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ya(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $x(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Kr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zx(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let x=f.array;y=f.version;for(let w=0,v=x.length;w<v;w+=3){let R=x[w+0],T=x[w+1],A=x[w+2];u.push(R,T,T,A,A,R)}}else if(g!==void 0){let x=g.array;y=g.version;for(let w=0,v=x.length/3-1;w<v;w+=3){let R=w+0,T=w+1,A=w+2;u.push(R,T,T,A,A,R)}}else return;let m=new(Xf(u)?Ga:Va)(u,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function jx(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,y,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*y[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Jx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Kx(i,t,e){let n=new WeakMap,s=new fe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let v=a.attributes.position.count*w,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*R*4*d),A=new Ha(T,v,R,d);A.type=mi,A.needsUpdate=!0;let I=w*4;for(let M=0;M<d;M++){let P=m[M],k=p[M],N=x[M],B=v*R*4*M;for(let z=0;z<P.count;z++){let L=z*I;f===!0&&(s.fromBufferAttribute(P,z),T[B+L+0]=s.x,T[B+L+1]=s.y,T[B+L+2]=s.z,T[B+L+3]=0),g===!0&&(s.fromBufferAttribute(k,z),T[B+L+4]=s.x,T[B+L+5]=s.y,T[B+L+6]=s.z,T[B+L+7]=0),y===!0&&(s.fromBufferAttribute(N,z),T[B+L+8]=s.x,T[B+L+9]=s.y,T[B+L+10]=s.z,T[B+L+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new at(v,R)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Qx(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var $a=class extends fn{constructor(t,e,n,s,r,o,a,l,c,h=lr){if(h!==lr&&h!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===lr&&(n=bs),n===void 0&&h===gr&&(n=mr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Hn,this.minFilter=l!==void 0?l:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},jf=new fn,of=new $a(1,1),Jf=new Ha,Kf=new bh,Qf=new qa,af=[],lf=[],cf=new Float32Array(16),hf=new Float32Array(9),uf=new Float32Array(4);function Sr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=af[s];if(r===void 0&&(r=new Float32Array(s),af[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ul(i,t){let e=lf[t];e===void 0&&(e=new Int32Array(t),lf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function sv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Pe(e,n))return;uf.set(n),i.uniformMatrix2fv(this.addr,!1,uf),Ne(e,n)}}function rv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Pe(e,n))return;hf.set(n),i.uniformMatrix3fv(this.addr,!1,hf),Ne(e,n)}}function ov(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Pe(e,n))return;cf.set(n),i.uniformMatrix4fv(this.addr,!1,cf),Ne(e,n)}}function av(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function lv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function cv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function hv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function uv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function mv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(of.compareFunction=qf,r=of):r=jf,e.setTexture2D(t||r,s)}function gv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kf,s)}function yv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qf,s)}function xv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jf,s)}function vv(i){switch(i){case 5126:return tv;case 35664:return ev;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return ov;case 5124:case 35670:return av;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return hv;case 5125:return uv;case 36294:return dv;case 36295:return fv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return xv}}function _v(i,t){i.uniform1fv(this.addr,t)}function Mv(i,t){let e=Sr(t,this.size,2);i.uniform2fv(this.addr,e)}function wv(i,t){let e=Sr(t,this.size,3);i.uniform3fv(this.addr,e)}function bv(i,t){let e=Sr(t,this.size,4);i.uniform4fv(this.addr,e)}function Ev(i,t){let e=Sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sv(i,t){let e=Sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tv(i,t){let e=Sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Av(i,t){i.uniform1iv(this.addr,t)}function Rv(i,t){i.uniform2iv(this.addr,t)}function Cv(i,t){i.uniform3iv(this.addr,t)}function Iv(i,t){i.uniform4iv(this.addr,t)}function Pv(i,t){i.uniform1uiv(this.addr,t)}function Nv(i,t){i.uniform2uiv(this.addr,t)}function Lv(i,t){i.uniform3uiv(this.addr,t)}function Dv(i,t){i.uniform4uiv(this.addr,t)}function Bv(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||jf,r[o])}function Fv(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Kf,r[o])}function Uv(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qf,r[o])}function Ov(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Jf,r[o])}function zv(i){switch(i){case 5126:return _v;case 35664:return Mv;case 35665:return wv;case 35666:return bv;case 35674:return Ev;case 35675:return Sv;case 35676:return Tv;case 5124:case 35670:return Av;case 35667:case 35671:return Rv;case 35668:case 35672:return Cv;case 35669:case 35673:return Iv;case 5125:return Pv;case 36294:return Nv;case 36295:return Lv;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Ov}}var Th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vv(e.type)}},Ah=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zv(e.type)}},Rh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ic=/(\w+)(\])?(\[|\.)?/g;function df(i,t){i.seq.push(t),i.map[t.id]=t}function Hv(i,t,e){let n=i.name,s=n.length;for(Ic.lastIndex=0;;){let r=Ic.exec(n),o=Ic.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){df(e,c===void 0?new Th(a,i,t):new Ah(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Rh(a),df(e,d)),e=d}}}var hr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Hv(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ff(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var kv=37297,Vv=0;function Gv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var pf=new Vt;function Wv(i){se._getMatrix(pf,se.workingColorSpace,i);let t=`mat3( ${pf.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case hl:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Gv(i.getShaderSource(t),o)}else return s}function qv(i,t){let e=Wv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xv(i,t){let e;switch(t){case i0:e="Linear";break;case s0:e="Reinhard";break;case r0:e="Cineon";break;case ll:e="ACESFilmic";break;case a0:e="AgX";break;case l0:e="Neutral";break;case o0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Aa=new D;function Yv(){se.getLuminanceCoefficients(Aa);let i=Aa.x.toFixed(4),t=Aa.y.toFixed(4),e=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $v(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function Zv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qr(i){return i!==""}function gf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(i){return i.replace(Jv,Qv)}var Kv=new Map;function Qv(i,t){let e=Wt[t];if(e===void 0){let n=Kv.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ch(e)}var t_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xf(i){return i.replace(t_,e_)}function e_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function n_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ru?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function i_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case fr:t="ENVMAP_TYPE_CUBE";break;case cl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function s_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fr:t="ENVMAP_MODE_REFRACTION";break}return t}function r_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nf:t="ENVMAP_BLENDING_MULTIPLY";break;case e0:t="ENVMAP_BLENDING_MIX";break;case n0:t="ENVMAP_BLENDING_ADD";break}return t}function o_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function a_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=n_(e),c=i_(e),h=s_(e),d=r_(e),u=o_(e),f=$v(e),g=Zv(r),y=s.createProgram(),m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qr).join(`
`),p.length>0&&(p+=`
`)):(m=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),p=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Vi?Xv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,qv("linearToOutputTexel",e.outputColorSpace),Yv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Ch(o),o=gf(o,e),o=yf(o,e),a=Ch(a),a=gf(a,e),a=yf(a,e),o=xf(o),a=xf(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=x+m+o,v=x+p+a,R=ff(s,s.VERTEX_SHADER,w),T=ff(s,s.FRAGMENT_SHADER,v);s.attachShader(y,R),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(P){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(y).trim(),N=s.getShaderInfoLog(R).trim(),B=s.getShaderInfoLog(T).trim(),z=!0,L=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,R,T);else{let j=mf(s,R,"vertex"),V=mf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+j+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||B==="")&&(L=!1);L&&(P.diagnostics={runnable:z,programLog:k,vertexShader:{log:N,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(R),s.deleteShader(T),I=new hr(s,y),E=jv(s,y)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,kv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=T,this}var l_=0,Ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ph(t),e.set(t,n)),n}},Ph=class{constructor(t){this.id=l_++,this.code=t,this.usedTimes=0}};function c_(i,t,e,n,s,r,o){let a=new ao,l=new Ih,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,k,N){let B=k.fog,z=N.geometry,L=E.isMeshStandardMaterial?k.environment:null,j=(E.isMeshStandardMaterial?e:t).get(E.envMap||L),V=j&&j.mapping===cl?j.image.height:null,J=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let lt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,mt=lt!==void 0?lt.length:0,ot=0;z.morphAttributes.position!==void 0&&(ot=1),z.morphAttributes.normal!==void 0&&(ot=2),z.morphAttributes.color!==void 0&&(ot=3);let Jt,Y,it,Et;if(J){let he=Xn[J];Jt=he.vertexShader,Y=he.fragmentShader}else Jt=E.vertexShader,Y=E.fragmentShader,l.update(E),it=l.getVertexShaderID(E),Et=l.getFragmentShaderID(E);let ut=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),zt=N.isInstancedMesh===!0,Xt=N.isBatchedMesh===!0,Te=!!E.map,ne=!!E.matcap,Ce=!!j,H=!!E.aoMap,Mn=!!E.lightMap,Kt=!!E.bumpMap,Qt=!!E.normalMap,Lt=!!E.displacementMap,ye=!!E.emissiveMap,Nt=!!E.metalnessMap,C=!!E.roughnessMap,b=E.anisotropy>0,G=E.clearcoat>0,K=E.dispersion>0,et=E.iridescence>0,Z=E.sheen>0,Ct=E.transmission>0,pt=b&&!!E.anisotropyMap,Mt=G&&!!E.clearcoatMap,ie=G&&!!E.clearcoatNormalMap,st=G&&!!E.clearcoatRoughnessMap,wt=et&&!!E.iridescenceMap,Dt=et&&!!E.iridescenceThicknessMap,Ut=Z&&!!E.sheenColorMap,bt=Z&&!!E.sheenRoughnessMap,te=!!E.specularMap,Gt=!!E.specularColorMap,me=!!E.specularIntensityMap,F=Ct&&!!E.transmissionMap,ft=Ct&&!!E.thicknessMap,X=!!E.gradientMap,Q=!!E.alphaMap,xt=E.alphaTest>0,gt=!!E.alphaHash,Ht=!!E.extensions,Ae=Vi;E.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let qe={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:Jt,fragmentShader:Y,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:Et,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Xt,batchingColor:Xt&&N._colorsTexture!==null,instancing:zt,instancingColor:zt&&N.instanceColor!==null,instancingMorph:zt&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:br,alphaToCoverage:!!E.alphaToCoverage,map:Te,matcap:ne,envMap:Ce,envMapMode:Ce&&j.mapping,envMapCubeUVHeight:V,aoMap:H,lightMap:Mn,bumpMap:Kt,normalMap:Qt,displacementMap:u&&Lt,emissiveMap:ye,normalMapObjectSpace:Qt&&E.normalMapType===d0,normalMapTangentSpace:Qt&&E.normalMapType===Wf,metalnessMap:Nt,roughnessMap:C,anisotropy:b,anisotropyMap:pt,clearcoat:G,clearcoatMap:Mt,clearcoatNormalMap:ie,clearcoatRoughnessMap:st,dispersion:K,iridescence:et,iridescenceMap:wt,iridescenceThicknessMap:Dt,sheen:Z,sheenColorMap:Ut,sheenRoughnessMap:bt,specularMap:te,specularColorMap:Gt,specularIntensityMap:me,transmission:Ct,transmissionMap:F,thicknessMap:ft,gradientMap:X,opaque:E.transparent===!1&&E.blending===ar&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:xt,alphaHash:gt,combine:E.combine,mapUv:Te&&y(E.map.channel),aoMapUv:H&&y(E.aoMap.channel),lightMapUv:Mn&&y(E.lightMap.channel),bumpMapUv:Kt&&y(E.bumpMap.channel),normalMapUv:Qt&&y(E.normalMap.channel),displacementMapUv:Lt&&y(E.displacementMap.channel),emissiveMapUv:ye&&y(E.emissiveMap.channel),metalnessMapUv:Nt&&y(E.metalnessMap.channel),roughnessMapUv:C&&y(E.roughnessMap.channel),anisotropyMapUv:pt&&y(E.anisotropyMap.channel),clearcoatMapUv:Mt&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:ie&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:bt&&y(E.sheenRoughnessMap.channel),specularMapUv:te&&y(E.specularMap.channel),specularColorMapUv:Gt&&y(E.specularColorMap.channel),specularIntensityMapUv:me&&y(E.specularIntensityMap.channel),transmissionMapUv:F&&y(E.transmissionMap.channel),thicknessMapUv:ft&&y(E.thicknessMap.channel),alphaMapUv:Q&&y(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Qt||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Te||Q),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ft,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Te&&E.map.isVideoTexture===!0&&se.getTransfer(E.map.colorSpace)===de,decodeVideoTextureEmissive:ye&&E.emissiveMap.isVideoTexture===!0&&se.getTransfer(E.emissiveMap.colorSpace)===de,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===un,flipSided:E.side===en,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ht&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&E.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(x(M,E),w(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function x(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function w(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){let M=g[E.type],P;if(M){let k=Xn[M];P=Q0.clone(k.uniforms)}else P=E.uniforms;return P}function R(E,M){let P;for(let k=0,N=h.length;k<N;k++){let B=h[k];if(B.cacheKey===M){P=B,++P.usedTimes;break}}return P===void 0&&(P=new a_(i,M,E,r),h.push(P)),P}function T(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:I}}function h_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function u_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _f(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,g,y,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),t++,p}function a(d,u,f,g,y,m){let p=o(d,u,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,g,y,m){let p=o(d,u,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||u_),n.length>1&&n.sort(u||_f),s.length>1&&s.sort(u||_f)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function d_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Mf,i.set(n,[o])):s>=r.length?(o=new Mf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function f_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Yt};break;case"SpotLight":e={position:new D,direction:new D,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function p_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var m_=0;function g_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function y_(i){let t=new f_,e=p_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new be,o=new be;function a(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,x=0,w=0,v=0,R=0,T=0,A=0;c.sort(g_);for(let E=0,M=c.length;E<M;E++){let P=c[E],k=P.color,N=P.intensity,B=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*N,d+=k.g*N,u+=k.b*N;else if(P.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(P.sh.coefficients[L],N);A++}else if(P.isDirectionalLight){let L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,V=e.get(P);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=L,f++}else if(P.isSpotLight){let L=t.get(P);L.position.setFromMatrixPosition(P.matrixWorld),L.color.copy(k).multiplyScalar(N),L.distance=B,L.coneCos=Math.cos(P.angle),L.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),L.decay=P.decay,n.spot[y]=L;let j=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,j.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[y]=j.matrix,P.castShadow){let V=e.get(P);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=z,v++}y++}else if(P.isRectAreaLight){let L=t.get(P);L.color.copy(k).multiplyScalar(N),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=L,m++}else if(P.isPointLight){let L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),L.distance=P.distance,L.decay=P.decay,P.castShadow){let j=P.shadow,V=e.get(P);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=L,g++}else if(P.isHemisphereLight){let L=t.get(P);L.skyColor.copy(P.color).multiplyScalar(N),L.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=L,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==w||I.numSpotShadows!==v||I.numSpotMaps!==R||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=f,I.pointLength=g,I.spotLength=y,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=w,I.numSpotShadows=v,I.numSpotMaps=R,I.numLightProbes=A,n.version=m_++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){let w=c[p];if(w.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(w.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(w.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function wf(i){let t=new y_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function x_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new wf(i),t.set(s,[a])):r>=o.length?(a=new wf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Nh=class extends Ss{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lh=class extends Ss{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
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
}`;function M_(i,t,e){let n=new lo,s=new at,r=new at,o=new fe,a=new Nh({depthPacking:u0}),l=new Lh,c={},h=e.maxTextureSize,d={[Gi]:en,[en]:Gi,[un]:un},u=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:v_,fragmentShader:__}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new nn;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ct(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pf;let p=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ki),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let N=p!==fi&&this.type===fi,B=p===fi&&this.type!==fi;for(let z=0,L=T.length;z<L;z++){let j=T[z],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let J=V.getFrameExtents();if(s.multiply(J),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,V.mapSize.y=r.y)),V.map===null||N===!0||B===!0){let mt=this.type!==fi?{minFilter:Hn,magFilter:Hn}:{};V.map!==null&&V.map.dispose(),V.map=new vi(s.x,s.y,mt),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let lt=V.getViewportCount();for(let mt=0;mt<lt;mt++){let ot=V.getViewport(mt);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),k.viewport(o),V.updateMatrices(j,mt),n=V.getFrustum(),v(A,I,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===fi&&x(V,I),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,P)};function x(T,A){let I=t.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vi(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,f,y,null)}function w(T,A,I,E){let M=null,P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let k=M.uuid,N=A.uuid,B=c[k];B===void 0&&(B={},c[k]=B);let z=B[N];z===void 0&&(z=M.clone(),B[N]=z,A.addEventListener("dispose",R)),M=z}if(M.visible=A.visible,M.wireframe=A.wireframe,E===fi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=i.properties.get(M);k.light=I}return M}function v(T,A,I,E,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===fi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let N=t.update(T),B=T.material;if(Array.isArray(B)){let z=N.groups;for(let L=0,j=z.length;L<j;L++){let V=z[L],J=B[V.materialIndex];if(J&&J.visible){let lt=w(T,J,E,M);T.onBeforeShadow(i,T,A,I,N,lt,V),i.renderBufferDirect(I,null,N,lt,T,V),T.onAfterShadow(i,T,A,I,N,lt,V)}}}else if(B.visible){let z=w(T,B,E,M);T.onBeforeShadow(i,T,A,I,N,z,null),i.renderBufferDirect(I,null,N,z,T,null),T.onAfterShadow(i,T,A,I,N,z,null)}}let k=T.children;for(let N=0,B=k.length;N<B;N++)v(k[N],A,I,E,M)}function R(T){T.target.removeEventListener("dispose",R);for(let I in c){let E=c[I],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var w_={[Oc]:zc,[Hc]:Gc,[kc]:Wc,[ur]:Vc,[zc]:Oc,[Gc]:Hc,[Wc]:kc,[Vc]:ur};function b_(i,t){function e(){let F=!1,ft=new fe,X=null,Q=new fe(0,0,0,0);return{setMask:function(xt){X!==xt&&!F&&(i.colorMask(xt,xt,xt,xt),X=xt)},setLocked:function(xt){F=xt},setClear:function(xt,gt,Ht,Ae,qe){qe===!0&&(xt*=Ae,gt*=Ae,Ht*=Ae),ft.set(xt,gt,Ht,Ae),Q.equals(ft)===!1&&(i.clearColor(xt,gt,Ht,Ae),Q.copy(ft))},reset:function(){F=!1,X=null,Q.set(-1,0,0,0)}}}function n(){let F=!1,ft=!1,X=null,Q=null,xt=null;return{setReversed:function(gt){if(ft!==gt){let Ht=t.get("EXT_clip_control");ft?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);let Ae=xt;xt=null,this.setClear(Ae)}ft=gt},getReversed:function(){return ft},setTest:function(gt){gt?ut(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(gt){X!==gt&&!F&&(i.depthMask(gt),X=gt)},setFunc:function(gt){if(ft&&(gt=w_[gt]),Q!==gt){switch(gt){case Oc:i.depthFunc(i.NEVER);break;case zc:i.depthFunc(i.ALWAYS);break;case Hc:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case kc:i.depthFunc(i.EQUAL);break;case Vc:i.depthFunc(i.GEQUAL);break;case Gc:i.depthFunc(i.GREATER);break;case Wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=gt}},setLocked:function(gt){F=gt},setClear:function(gt){xt!==gt&&(ft&&(gt=1-gt),i.clearDepth(gt),xt=gt)},reset:function(){F=!1,X=null,Q=null,xt=null,ft=!1}}}function s(){let F=!1,ft=null,X=null,Q=null,xt=null,gt=null,Ht=null,Ae=null,qe=null;return{setTest:function(he){F||(he?ut(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(he){ft!==he&&!F&&(i.stencilMask(he),ft=he)},setFunc:function(he,Dn,oi){(X!==he||Q!==Dn||xt!==oi)&&(i.stencilFunc(he,Dn,oi),X=he,Q=Dn,xt=oi)},setOp:function(he,Dn,oi){(gt!==he||Ht!==Dn||Ae!==oi)&&(i.stencilOp(he,Dn,oi),gt=he,Ht=Dn,Ae=oi)},setLocked:function(he){F=he},setClear:function(he){qe!==he&&(i.clearStencil(he),qe=he)},reset:function(){F=!1,ft=null,X=null,Q=null,xt=null,gt=null,Ht=null,Ae=null,qe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,x=null,w=null,v=null,R=null,T=null,A=new Yt(0,0,0),I=0,E=!1,M=null,P=null,k=null,N=null,B=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,j=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),L=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),L=j>=2);let J=null,lt={},mt=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),Jt=new fe().fromArray(mt),Y=new fe().fromArray(ot);function it(F,ft,X,Q){let xt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(F,gt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<X;Ht++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(ft+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return gt}let Et={};Et[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(ur),Kt(!1),Qt(bd),ut(i.CULL_FACE),H(ki);function ut(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Ft(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function zt(F,ft){return d[F]!==ft?(i.bindFramebuffer(F,ft),d[F]=ft,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ft),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Xt(F,ft){let X=f,Q=!1;if(F){X=u.get(ft),X===void 0&&(X=[],u.set(ft,X));let xt=F.textures;if(X.length!==xt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Ht=xt.length;gt<Ht;gt++)X[gt]=i.COLOR_ATTACHMENT0+gt;X.length=xt.length,Q=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Q=!0);Q&&i.drawBuffers(X)}function Te(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let ne={[xs]:i.FUNC_ADD,[Om]:i.FUNC_SUBTRACT,[zm]:i.FUNC_REVERSE_SUBTRACT};ne[Hm]=i.MIN,ne[km]=i.MAX;let Ce={[Vm]:i.ZERO,[Gm]:i.ONE,[Wm]:i.SRC_COLOR,[Fc]:i.SRC_ALPHA,[jm]:i.SRC_ALPHA_SATURATE,[$m]:i.DST_COLOR,[Xm]:i.DST_ALPHA,[qm]:i.ONE_MINUS_SRC_COLOR,[Uc]:i.ONE_MINUS_SRC_ALPHA,[Zm]:i.ONE_MINUS_DST_COLOR,[Ym]:i.ONE_MINUS_DST_ALPHA,[Jm]:i.CONSTANT_COLOR,[Km]:i.ONE_MINUS_CONSTANT_COLOR,[Qm]:i.CONSTANT_ALPHA,[t0]:i.ONE_MINUS_CONSTANT_ALPHA};function H(F,ft,X,Q,xt,gt,Ht,Ae,qe,he){if(F===ki){y===!0&&(Ft(i.BLEND),y=!1);return}if(y===!1&&(ut(i.BLEND),y=!0),F!==Um){if(F!==m||he!==E){if((p!==xs||v!==xs)&&(i.blendEquation(i.FUNC_ADD),p=xs,v=xs),he)switch(F){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFunc(i.ONE,i.ONE);break;case Ed:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ed:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,w=null,R=null,T=null,A.set(0,0,0),I=0,m=F,E=he}return}xt=xt||ft,gt=gt||X,Ht=Ht||Q,(ft!==p||xt!==v)&&(i.blendEquationSeparate(ne[ft],ne[xt]),p=ft,v=xt),(X!==x||Q!==w||gt!==R||Ht!==T)&&(i.blendFuncSeparate(Ce[X],Ce[Q],Ce[gt],Ce[Ht]),x=X,w=Q,R=gt,T=Ht),(Ae.equals(A)===!1||qe!==I)&&(i.blendColor(Ae.r,Ae.g,Ae.b,qe),A.copy(Ae),I=qe),m=F,E=!1}function Mn(F,ft){F.side===un?Ft(i.CULL_FACE):ut(i.CULL_FACE);let X=F.side===en;ft&&(X=!X),Kt(X),F.blending===ar&&F.transparent===!1?H(ki):H(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Q=F.stencilWrite;a.setTest(Q),Q&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ye(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function Qt(F){F!==Bm?(ut(i.CULL_FACE),F!==P&&(F===bd?i.cullFace(i.BACK):F===Fm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),P=F}function Lt(F){F!==k&&(L&&i.lineWidth(F),k=F)}function ye(F,ft,X){F?(ut(i.POLYGON_OFFSET_FILL),(N!==ft||B!==X)&&(i.polygonOffset(ft,X),N=ft,B=X)):Ft(i.POLYGON_OFFSET_FILL)}function Nt(F){F?ut(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function C(F){F===void 0&&(F=i.TEXTURE0+z-1),J!==F&&(i.activeTexture(F),J=F)}function b(F,ft,X){X===void 0&&(J===null?X=i.TEXTURE0+z-1:X=J);let Q=lt[X];Q===void 0&&(Q={type:void 0,texture:void 0},lt[X]=Q),(Q.type!==F||Q.texture!==ft)&&(J!==X&&(i.activeTexture(X),J=X),i.bindTexture(F,ft||Et[F]),Q.type=F,Q.texture=ft)}function G(){let F=lt[J];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ut(F){Jt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Jt.copy(F))}function bt(F){Y.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function te(F,ft){let X=c.get(ft);X===void 0&&(X=new WeakMap,c.set(ft,X));let Q=X.get(F);Q===void 0&&(Q=i.getUniformBlockIndex(ft,F.name),X.set(F,Q))}function Gt(F,ft){let Q=c.get(ft).get(F);l.get(ft)!==Q&&(i.uniformBlockBinding(ft,Q,F.__bindingPointIndex),l.set(ft,Q))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,lt={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,x=null,w=null,v=null,R=null,T=null,A=new Yt(0,0,0),I=0,E=!1,M=null,P=null,k=null,N=null,B=null,Jt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:Ft,bindFramebuffer:zt,drawBuffers:Xt,useProgram:Te,setBlending:H,setMaterial:Mn,setFlipSided:Kt,setCullFace:Qt,setLineWidth:Lt,setPolygonOffset:ye,setScissorTest:Nt,activeTexture:C,bindTexture:b,unbindTexture:G,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:wt,texImage3D:Dt,updateUBOMapping:te,uniformBlockBinding:Gt,texStorage2D:ie,texStorage3D:st,texSubImage2D:Z,texSubImage3D:Ct,compressedTexSubImage2D:pt,compressedTexSubImage3D:Mt,scissor:Ut,viewport:bt,reset:me}}function bf(i,t,e,n){let s=E_(n);switch(e){case Uf:return i*t;case zf:return i*t;case Hf:return i*t*2;case kf:return i*t/s.components*s.byteLength;case cu:return i*t/s.components*s.byteLength;case Vf:return i*t*2/s.components*s.byteLength;case hu:return i*t*2/s.components*s.byteLength;case Of:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case uu:return i*t*4/s.components*s.byteLength;case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zc:case Jc:return Math.max(i,16)*Math.max(t,8)/4;case $c:case jc:return Math.max(i,8)*Math.max(t,8)/2;case Kc:case Qc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case th:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ih:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ah:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case hh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case uh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ph:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Da:case mh:case gh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gf:case yh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xh:case vh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function E_(i){switch(i){case xi:case Df:return{byteLength:1,components:1};case ro:case Bf:case _o:return{byteLength:2,components:1};case au:case lu:return{byteLength:2,components:4};case bs:case ou:case mi:return{byteLength:4,components:1};case Ff:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function S_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return f?new OffscreenCanvas(C,b):Oa("canvas")}function y(C,b,G){let K=1,et=Nt(C);if((et.width>G||et.height>G)&&(K=G/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Z=Math.floor(K*et.width),Ct=Math.floor(K*et.height);d===void 0&&(d=g(Z,Ct));let pt=b?g(Z,Ct):d;return pt.width=Z,pt.height=Ct,pt.getContext("2d").drawImage(C,0,0,Z,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Ct+")."),pt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(C,b,G,K,et=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=b;if(b===i.RED&&(G===i.FLOAT&&(Z=i.R32F),G===i.HALF_FLOAT&&(Z=i.R16F),G===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.R8UI),G===i.UNSIGNED_SHORT&&(Z=i.R16UI),G===i.UNSIGNED_INT&&(Z=i.R32UI),G===i.BYTE&&(Z=i.R8I),G===i.SHORT&&(Z=i.R16I),G===i.INT&&(Z=i.R32I)),b===i.RG&&(G===i.FLOAT&&(Z=i.RG32F),G===i.HALF_FLOAT&&(Z=i.RG16F),G===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RG8UI),G===i.UNSIGNED_SHORT&&(Z=i.RG16UI),G===i.UNSIGNED_INT&&(Z=i.RG32UI),G===i.BYTE&&(Z=i.RG8I),G===i.SHORT&&(Z=i.RG16I),G===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),G===i.UNSIGNED_INT&&(Z=i.RGB32UI),G===i.BYTE&&(Z=i.RGB8I),G===i.SHORT&&(Z=i.RGB16I),G===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),G===i.UNSIGNED_INT&&(Z=i.RGBA32UI),G===i.BYTE&&(Z=i.RGBA8I),G===i.SHORT&&(Z=i.RGBA16I),G===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),b===i.RGBA){let Ct=et?hl:se.getTransfer(K);G===i.FLOAT&&(Z=i.RGBA32F),G===i.HALF_FLOAT&&(Z=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Z=Ct===de?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(C,b){let G;return C?b===null||b===bs||b===mr?G=i.DEPTH24_STENCIL8:b===mi?G=i.DEPTH32F_STENCIL8:b===ro&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===bs||b===mr?G=i.DEPTH_COMPONENT24:b===mi?G=i.DEPTH_COMPONENT32F:b===ro&&(G=i.DEPTH_COMPONENT16),G}function R(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Hn&&C.minFilter!==Yn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){let b=C.target;b.removeEventListener("dispose",T),I(b),b.isVideoTexture&&h.delete(b)}function A(C){let b=C.target;b.removeEventListener("dispose",A),M(b)}function I(C){let b=n.get(C);if(b.__webglInit===void 0)return;let G=C.source,K=u.get(G);if(K){let et=K[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(C),Object.keys(K).length===0&&u.delete(G)}n.remove(C)}function E(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let G=C.source,K=u.get(G);delete K[b.__cacheKey],o.memory.textures--}function M(C){let b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let et=0;et<b.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(b.__webglFramebuffer[K][et]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=C.textures;for(let K=0,et=G.length;K<et;K++){let Z=n.get(G[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(G[K])}n.remove(C)}let P=0;function k(){P=0}function N(){let C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function B(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function z(C,b){let G=n.get(C);if(C.isVideoTexture&&Lt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){let K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,C,b);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function L(C,b){let G=n.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function j(C,b){let G=n.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function V(C,b){let G=n.get(C);if(C.version>0&&G.__version!==C.version){it(G,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}let J={[pr]:i.REPEAT,[Ms]:i.CLAMP_TO_EDGE,[Yc]:i.MIRRORED_REPEAT},lt={[Hn]:i.NEAREST,[c0]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[Yn]:i.LINEAR,[ic]:i.LINEAR_MIPMAP_NEAREST,[ws]:i.LINEAR_MIPMAP_LINEAR},mt={[f0]:i.NEVER,[v0]:i.ALWAYS,[p0]:i.LESS,[qf]:i.LEQUAL,[m0]:i.EQUAL,[x0]:i.GEQUAL,[g0]:i.GREATER,[y0]:i.NOTEQUAL};function ot(C,b){if(b.type===mi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Yn||b.magFilter===ic||b.magFilter===aa||b.magFilter===ws||b.minFilter===Yn||b.minFilter===ic||b.minFilter===aa||b.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,J[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,J[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,J[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,lt[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,lt[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,mt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Hn||b.minFilter!==aa&&b.minFilter!==ws||b.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Jt(C,b){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));let K=b.source,et=u.get(K);et===void 0&&(et={},u.set(K,et));let Z=B(b);if(Z!==C.__cacheKey){et[Z]===void 0&&(et[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),et[Z].usedTimes++;let Ct=et[C.__cacheKey];Ct!==void 0&&(et[C.__cacheKey].usedTimes--,Ct.usedTimes===0&&E(b)),C.__cacheKey=Z,C.__webglTexture=et[Z].texture}return G}function Y(C,b,G){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);let et=Jt(C,b),Z=b.source;e.bindTexture(K,C.__webglTexture,i.TEXTURE0+G);let Ct=n.get(Z);if(Z.version!==Ct.__version||et===!0){e.activeTexture(i.TEXTURE0+G);let pt=se.getPrimaries(se.workingColorSpace),Mt=b.colorSpace===dn?null:se.getPrimaries(b.colorSpace),ie=b.colorSpace===dn||pt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let st=y(b.image,!1,s.maxTextureSize);st=ye(b,st);let wt=r.convert(b.format,b.colorSpace),Dt=r.convert(b.type),Ut=w(b.internalFormat,wt,Dt,b.colorSpace,b.isVideoTexture);ot(K,b);let bt,te=b.mipmaps,Gt=b.isVideoTexture!==!0,me=Ct.__version===void 0||et===!0,F=Z.dataReady,ft=R(b,st);if(b.isDepthTexture)Ut=v(b.format===gr,b.type),me&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,Ut,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Ut,st.width,st.height,0,wt,Dt,null));else if(b.isDataTexture)if(te.length>0){Gt&&me&&e.texStorage2D(i.TEXTURE_2D,ft,Ut,te[0].width,te[0].height);for(let X=0,Q=te.length;X<Q;X++)bt=te[X],Gt?F&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,bt.width,bt.height,wt,Dt,bt.data):e.texImage2D(i.TEXTURE_2D,X,Ut,bt.width,bt.height,0,wt,Dt,bt.data);b.generateMipmaps=!1}else Gt?(me&&e.texStorage2D(i.TEXTURE_2D,ft,Ut,st.width,st.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,wt,Dt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,st.width,st.height,0,wt,Dt,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Gt&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ut,te[0].width,te[0].height,st.depth);for(let X=0,Q=te.length;X<Q;X++)if(bt=te[X],b.format!==zn)if(wt!==null)if(Gt){if(F)if(b.layerUpdates.size>0){let xt=bf(bt.width,bt.height,b.format,b.type);for(let gt of b.layerUpdates){let Ht=bt.data.subarray(gt*xt/bt.data.BYTES_PER_ELEMENT,(gt+1)*xt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,gt,bt.width,bt.height,1,wt,Ht)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,bt.width,bt.height,st.depth,wt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ut,bt.width,bt.height,st.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,bt.width,bt.height,st.depth,wt,Dt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Ut,bt.width,bt.height,st.depth,0,wt,Dt,bt.data)}else{Gt&&me&&e.texStorage2D(i.TEXTURE_2D,ft,Ut,te[0].width,te[0].height);for(let X=0,Q=te.length;X<Q;X++)bt=te[X],b.format!==zn?wt!==null?Gt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Ut,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?F&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,bt.width,bt.height,wt,Dt,bt.data):e.texImage2D(i.TEXTURE_2D,X,Ut,bt.width,bt.height,0,wt,Dt,bt.data)}else if(b.isDataArrayTexture)if(Gt){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ut,st.width,st.height,st.depth),F)if(b.layerUpdates.size>0){let X=bf(st.width,st.height,b.format,b.type);for(let Q of b.layerUpdates){let xt=st.data.subarray(Q*X/st.data.BYTES_PER_ELEMENT,(Q+1)*X/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,wt,Dt,xt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,wt,Dt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,st.width,st.height,st.depth,0,wt,Dt,st.data);else if(b.isData3DTexture)Gt?(me&&e.texStorage3D(i.TEXTURE_3D,ft,Ut,st.width,st.height,st.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,wt,Dt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,st.width,st.height,st.depth,0,wt,Dt,st.data);else if(b.isFramebufferTexture){if(me)if(Gt)e.texStorage2D(i.TEXTURE_2D,ft,Ut,st.width,st.height);else{let X=st.width,Q=st.height;for(let xt=0;xt<ft;xt++)e.texImage2D(i.TEXTURE_2D,xt,Ut,X,Q,0,wt,Dt,null),X>>=1,Q>>=1}}else if(te.length>0){if(Gt&&me){let X=Nt(te[0]);e.texStorage2D(i.TEXTURE_2D,ft,Ut,X.width,X.height)}for(let X=0,Q=te.length;X<Q;X++)bt=te[X],Gt?F&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,wt,Dt,bt):e.texImage2D(i.TEXTURE_2D,X,Ut,wt,Dt,bt);b.generateMipmaps=!1}else if(Gt){if(me){let X=Nt(st);e.texStorage2D(i.TEXTURE_2D,ft,Ut,X.width,X.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Dt,st)}else e.texImage2D(i.TEXTURE_2D,0,Ut,wt,Dt,st);m(b)&&p(K),Ct.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function it(C,b,G){if(b.image.length!==6)return;let K=Jt(C,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);let Z=n.get(et);if(et.version!==Z.__version||K===!0){e.activeTexture(i.TEXTURE0+G);let Ct=se.getPrimaries(se.workingColorSpace),pt=b.colorSpace===dn?null:se.getPrimaries(b.colorSpace),Mt=b.colorSpace===dn||Ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let ie=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let Q=0;Q<6;Q++)!ie&&!st?wt[Q]=y(b.image[Q],!0,s.maxCubemapSize):wt[Q]=st?b.image[Q].image:b.image[Q],wt[Q]=ye(b,wt[Q]);let Dt=wt[0],Ut=r.convert(b.format,b.colorSpace),bt=r.convert(b.type),te=w(b.internalFormat,Ut,bt,b.colorSpace),Gt=b.isVideoTexture!==!0,me=Z.__version===void 0||K===!0,F=et.dataReady,ft=R(b,Dt);ot(i.TEXTURE_CUBE_MAP,b);let X;if(ie){Gt&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,te,Dt.width,Dt.height);for(let Q=0;Q<6;Q++){X=wt[Q].mipmaps;for(let xt=0;xt<X.length;xt++){let gt=X[xt];b.format!==zn?Ut!==null?Gt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,gt.width,gt.height,Ut,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,te,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,gt.width,gt.height,Ut,bt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,te,gt.width,gt.height,0,Ut,bt,gt.data)}}}else{if(X=b.mipmaps,Gt&&me){X.length>0&&ft++;let Q=Nt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,te,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Gt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,wt[Q].width,wt[Q].height,Ut,bt,wt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,te,wt[Q].width,wt[Q].height,0,Ut,bt,wt[Q].data);for(let xt=0;xt<X.length;xt++){let Ht=X[xt].image[Q].image;Gt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Ht.width,Ht.height,Ut,bt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,te,Ht.width,Ht.height,0,Ut,bt,Ht.data)}}else{Gt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ut,bt,wt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,te,Ut,bt,wt[Q]);for(let xt=0;xt<X.length;xt++){let gt=X[xt];Gt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Ut,bt,gt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,te,Ut,bt,gt.image[Q])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),Z.__version=et.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Et(C,b,G,K,et,Z){let Ct=r.convert(G.format,G.colorSpace),pt=r.convert(G.type),Mt=w(G.internalFormat,Ct,pt,G.colorSpace),ie=n.get(b),st=n.get(G);if(st.__renderTarget=b,!ie.__hasExternalTextures){let wt=Math.max(1,b.width>>Z),Dt=Math.max(1,b.height>>Z);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,Mt,wt,Dt,b.depth,0,Ct,pt,null):e.texImage2D(et,Z,Mt,wt,Dt,0,Ct,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Qt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,st.__webglTexture,0,Kt(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,st.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(C,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){let K=b.depthTexture,et=K&&K.isDepthTexture?K.type:null,Z=v(b.stencilBuffer,et),Ct=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=Kt(b);Qt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Z,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,C)}else{let K=b.textures;for(let et=0;et<K.length;et++){let Z=K[et],Ct=r.convert(Z.format,Z.colorSpace),pt=r.convert(Z.type),Mt=w(Z.internalFormat,Ct,pt,Z.colorSpace),ie=Kt(b);G&&Qt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Mt,b.width,b.height):Qt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,Mt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);let et=K.__webglTexture,Z=Kt(b);if(b.depthTexture.format===lr)Qt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(b.depthTexture.format===gr)Qt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function zt(C){let b=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){let et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=K}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ft(b.__webglFramebuffer,C)}else if(G){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),ut(b.__webglDepthbuffer[K],C,!1);else{let et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ut(b.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(C,b,G){let K=n.get(C);b!==void 0&&Et(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&zt(C)}function Te(C){let b=C.texture,G=n.get(C),K=n.get(b);C.addEventListener("dispose",A);let et=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Ct=et.length>1;if(Ct||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),Z){G.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[pt]=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)G.__webglFramebuffer[pt][Mt]=i.createFramebuffer()}else G.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)G.__webglFramebuffer[pt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let pt=0,Mt=et.length;pt<Mt;pt++){let ie=n.get(et[pt]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Qt(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pt=0;pt<et.length;pt++){let Mt=et[pt];G.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[pt]);let ie=r.convert(Mt.format,Mt.colorSpace),st=r.convert(Mt.type),wt=w(Mt.internalFormat,ie,st,Mt.colorSpace,C.isXRRenderTarget===!0),Dt=Kt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,wt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,G.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ot(i.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)Et(G.__webglFramebuffer[pt][Mt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt);else Et(G.__webglFramebuffer[pt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let pt=0,Mt=et.length;pt<Mt;pt++){let ie=et[pt],st=n.get(ie);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),ot(i.TEXTURE_2D,ie),Et(G.__webglFramebuffer,C,ie,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(ie)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,K.__webglTexture),ot(pt,b),b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)Et(G.__webglFramebuffer[Mt],C,b,i.COLOR_ATTACHMENT0,pt,Mt);else Et(G.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,pt,0);m(b)&&p(pt),e.unbindTexture()}C.depthBuffer&&zt(C)}function ne(C){let b=C.textures;for(let G=0,K=b.length;G<K;G++){let et=b[G];if(m(et)){let Z=x(C),Ct=n.get(et).__webglTexture;e.bindTexture(Z,Ct),p(Z),e.unbindTexture()}}}let Ce=[],H=[];function Mn(C){if(C.samples>0){if(Qt(C)===!1){let b=C.textures,G=C.width,K=C.height,et=i.COLOR_BUFFER_BIT,Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(C),pt=b.length>1;if(pt)for(let Mt=0;Mt<b.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);let ie=n.get(b[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,G,K,0,0,G,K,et,i.NEAREST),l===!0&&(Ce.length=0,H.length=0,Ce.push(i.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ce.push(Z),H.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Mt=0;Mt<b.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);let ie=n.get(b[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Kt(C){return Math.min(s.maxSamples,C.samples)}function Qt(C){let b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Lt(C){let b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function ye(C,b){let G=C.colorSpace,K=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==br&&G!==dn&&(se.getTransfer(G)===de?(K!==zn||et!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Nt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=z,this.setTexture2DArray=L,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=Xt,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Qt}function T_(i,t){function e(n,s=dn){let r,o=se.getTransfer(s);if(n===xi)return i.UNSIGNED_BYTE;if(n===au)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ff)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Df)return i.BYTE;if(n===Bf)return i.SHORT;if(n===ro)return i.UNSIGNED_SHORT;if(n===ou)return i.INT;if(n===bs)return i.UNSIGNED_INT;if(n===mi)return i.FLOAT;if(n===_o)return i.HALF_FLOAT;if(n===Uf)return i.ALPHA;if(n===Of)return i.RGB;if(n===zn)return i.RGBA;if(n===zf)return i.LUMINANCE;if(n===Hf)return i.LUMINANCE_ALPHA;if(n===lr)return i.DEPTH_COMPONENT;if(n===gr)return i.DEPTH_STENCIL;if(n===kf)return i.RED;if(n===cu)return i.RED_INTEGER;if(n===Vf)return i.RG;if(n===hu)return i.RG_INTEGER;if(n===uu)return i.RGBA_INTEGER;if(n===Ia||n===Pa||n===Na||n===La)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$c||n===Zc||n===jc||n===Jc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kc||n===Qc||n===th)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kc||n===Qc)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===th)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eh||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch||n===hh||n===uh||n===dh||n===fh||n===ph)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ih)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ch)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ph)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Da||n===mh||n===gh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Da)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gf||n===yh||n===xh||n===vh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Dh=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jt=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},A_={type:"move"},no=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},R_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C_=`
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

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new fn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $n({vertexShader:R_,fragmentShader:C_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fh=class extends Wi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=new Bh,m=e.getContextAttributes(),p=null,x=null,w=[],v=[],R=new at,T=null,A=new He;A.viewport=new fe;let I=new He;I.viewport=new fe;let E=[A,I],M=new Dh,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=w[Y];return it===void 0&&(it=new no,w[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=w[Y];return it===void 0&&(it=new no,w[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=w[Y];return it===void 0&&(it=new no,w[Y]=it),it.getHandSpace()};function N(Y){let it=v.indexOf(Y.inputSource);if(it===-1)return;let Et=w[it];Et!==void 0&&(Et.update(Y.inputSource,Y.frame,c||o),Et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",z);for(let Y=0;Y<w.length;Y++){let it=v[Y];it!==null&&(v[Y]=null,w[Y].disconnect(it))}P=null,k=null,y.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,x=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new vi(f.framebufferWidth,f.framebufferHeight,{format:zn,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,Et=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?gr:lr,Et=m.stencil?mr:bs);let Ft={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new vi(u.textureWidth,u.textureHeight,{format:zn,type:xi,depthTexture:new $a(u.textureWidth,u.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z(Y){for(let it=0;it<Y.removed.length;it++){let Et=Y.removed[it],ut=v.indexOf(Et);ut>=0&&(v[ut]=null,w[ut].disconnect(Et))}for(let it=0;it<Y.added.length;it++){let Et=Y.added[it],ut=v.indexOf(Et);if(ut===-1){for(let zt=0;zt<w.length;zt++)if(zt>=v.length){v.push(Et),ut=zt;break}else if(v[zt]===null){v[zt]=Et,ut=zt;break}if(ut===-1)break}let Ft=w[ut];Ft&&Ft.connect(Et)}}let L=new D,j=new D;function V(Y,it,Et){L.setFromMatrixPosition(it.matrixWorld),j.setFromMatrixPosition(Et.matrixWorld);let ut=L.distanceTo(j),Ft=it.projectionMatrix.elements,zt=Et.projectionMatrix.elements,Xt=Ft[14]/(Ft[10]-1),Te=Ft[14]/(Ft[10]+1),ne=(Ft[9]+1)/Ft[5],Ce=(Ft[9]-1)/Ft[5],H=(Ft[8]-1)/Ft[0],Mn=(zt[8]+1)/zt[0],Kt=Xt*H,Qt=Xt*Mn,Lt=ut/(-H+Mn),ye=Lt*-H;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ye),Y.translateZ(Lt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ft[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Nt=Xt+Lt,C=Te+Lt,b=Kt-ye,G=Qt+(ut-ye),K=ne*Te/C*Nt,et=Ce*Te/C*Nt;Y.projectionMatrix.makePerspective(b,G,K,et,Nt,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function J(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let it=Y.near,Et=Y.far;y.texture!==null&&(y.depthNear>0&&(it=y.depthNear),y.depthFar>0&&(Et=y.depthFar)),M.near=I.near=A.near=it,M.far=I.far=A.far=Et,(P!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,k=M.far),A.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,M.layers.mask=A.layers.mask|I.layers.mask;let ut=Y.parent,Ft=M.cameras;J(M,ut);for(let zt=0;zt<Ft.length;zt++)J(Ft[zt],ut);Ft.length===2?V(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),lt(Y,M,ut)};function lt(Y,it,Et){Et===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(Et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=yr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let mt=null;function ot(Y,it){if(h=it.getViewerPose(c||o),g=it,h!==null){let Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ut=!1;Et.length!==M.cameras.length&&(M.cameras.length=0,ut=!0);for(let zt=0;zt<Et.length;zt++){let Xt=Et[zt],Te=null;if(f!==null)Te=f.getViewport(Xt);else{let Ce=d.getViewSubImage(u,Xt);Te=Ce.viewport,zt===0&&(t.setRenderTargetTextures(x,Ce.colorTexture,u.ignoreDepthValues?void 0:Ce.depthStencilTexture),t.setRenderTarget(x))}let ne=E[zt];ne===void 0&&(ne=new He,ne.layers.enable(zt),ne.viewport=new fe,E[zt]=ne),ne.matrix.fromArray(Xt.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Xt.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Te.x,Te.y,Te.width,Te.height),zt===0&&(M.matrix.copy(ne.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ut===!0&&M.cameras.push(ne)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){let zt=d.getDepthInformation(Et[0]);zt&&zt.isValid&&zt.texture&&y.init(t,zt,s.renderState)}}for(let Et=0;Et<w.length;Et++){let ut=v[Et],Ft=w[Et];ut!==null&&Ft!==void 0&&Ft.update(ut,it,c||o)}mt&&mt(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let Jt=new Zf;Jt.setAnimationLoop(ot),this.setAnimationLoop=function(Y){mt=Y},this.dispose=function(){}}},gs=new pn,I_=new be;function P_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$f(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,w,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p),w=x.envMap,v=x.envMapRotation;w&&(m.envMap.value=w,gs.copy(v),gs.x*=-1,gs.y*=-1,gs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(gs)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function N_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){let v=w.program;n.uniformBlockBinding(x,v)}function c(x,w){let v=s[x.id];v===void 0&&(g(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));let R=w.program;n.updateUBOMapping(x,R);let T=t.render.frame;r[x.id]!==T&&(u(x),r[x.id]=T)}function h(x){let w=d();x.__bindingPointIndex=w;let v=i.createBuffer(),R=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,v),v}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let w=s[x.id],v=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,A=v.length;T<A;T++){let I=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,M=I.length;E<M;E++){let P=I[E];if(f(P,T,E,R)===!0){let k=P.__offset,N=Array.isArray(P.value)?P.value:[P.value],B=0;for(let z=0;z<N.length;z++){let L=N[z],j=y(L);typeof L=="number"||typeof L=="boolean"?(P.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,k+B,P.__data)):L.isMatrix3?(P.__data[0]=L.elements[0],P.__data[1]=L.elements[1],P.__data[2]=L.elements[2],P.__data[3]=0,P.__data[4]=L.elements[3],P.__data[5]=L.elements[4],P.__data[6]=L.elements[5],P.__data[7]=0,P.__data[8]=L.elements[6],P.__data[9]=L.elements[7],P.__data[10]=L.elements[8],P.__data[11]=0):(L.toArray(P.__data,B),B+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,w,v,R){let T=x.value,A=w+"_"+v;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let I=R[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(x){let w=x.uniforms,v=0,R=16;for(let A=0,I=w.length;A<I;A++){let E=Array.isArray(w[A])?w[A]:[w[A]];for(let M=0,P=E.length;M<P;M++){let k=E[M],N=Array.isArray(k.value)?k.value:[k.value];for(let B=0,z=N.length;B<z;B++){let L=N[B],j=y(L),V=v%R,J=V%j.boundary,lt=V+J;v+=J,lt!==0&&R-lt<j.storage&&(v+=R-lt),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=j.storage}}}let T=v%R;return T>0&&(v+=R-T),x.__size=v,x.__cache={},this}function y(x){let w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),w}function m(x){let w=x.target;w.removeEventListener("dispose",m);let v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var co=class{constructor(t={}){let{canvas:e=F0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,x=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Vi,this.toneMappingExposure=1;let v=this,R=!1,T=0,A=0,I=null,E=-1,M=null,P=new fe,k=new fe,N=null,B=new Yt(0),z=0,L=e.width,j=e.height,V=1,J=null,lt=null,mt=new fe(0,0,L,j),ot=new fe(0,0,L,j),Jt=!1,Y=new lo,it=!1,Et=!1,ut=new be,Ft=new be,zt=new D,Xt=new fe,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function Ce(){return I===null?V:1}let H=n;function Mn(S,U){return e.getContext(S,U)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${su}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),H===null){let U="webgl2";if(H=Mn(U,S),H===null)throw Mn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Kt,Qt,Lt,ye,Nt,C,b,G,K,et,Z,Ct,pt,Mt,ie,st,wt,Dt,Ut,bt,te,Gt,me,F;function ft(){Kt=new $x(H),Kt.init(),Gt=new T_(H,Kt),Qt=new Vx(H,Kt,t,Gt),Lt=new b_(H,Kt),Qt.reverseDepthBuffer&&u&&Lt.buffers.depth.setReversed(!0),ye=new Jx(H),Nt=new h_,C=new S_(H,Kt,Lt,Nt,Qt,Gt,ye),b=new Wx(v),G=new Yx(v),K=new sg(H),me=new Hx(H,K),et=new Zx(H,K,ye,me),Z=new Qx(H,et,K,ye),Ut=new Kx(H,Qt,C),st=new Gx(Nt),Ct=new c_(v,b,G,Kt,Qt,me,st),pt=new P_(v,Nt),Mt=new d_,ie=new x_(Kt),Dt=new zx(v,b,G,Lt,Z,f,l),wt=new M_(v,Z,Qt),F=new N_(H,ye,Qt,Lt),bt=new kx(H,Kt,ye),te=new jx(H,Kt,ye),ye.programs=Ct.programs,v.capabilities=Qt,v.extensions=Kt,v.properties=Nt,v.renderLists=Mt,v.shadowMap=wt,v.state=Lt,v.info=ye}ft();let X=new Fh(v,H);this.xr=X,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let S=Kt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Kt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(L,j,!1))},this.getSize=function(S){return S.set(L,j)},this.setSize=function(S,U,W=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=S,j=U,e.width=Math.floor(S*V),e.height=Math.floor(U*V),W===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(L*V,j*V).floor()},this.setDrawingBufferSize=function(S,U,W){L=S,j=U,V=W,e.width=Math.floor(S*W),e.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(mt)},this.setViewport=function(S,U,W,q){S.isVector4?mt.set(S.x,S.y,S.z,S.w):mt.set(S,U,W,q),Lt.viewport(P.copy(mt).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(ot)},this.setScissor=function(S,U,W,q){S.isVector4?ot.set(S.x,S.y,S.z,S.w):ot.set(S,U,W,q),Lt.scissor(k.copy(ot).multiplyScalar(V).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(S){Lt.setScissorTest(Jt=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){lt=S},this.getClearColor=function(S){return S.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(S=!0,U=!0,W=!0){let q=0;if(S){let O=!1;if(I!==null){let rt=I.texture.format;O=rt===uu||rt===hu||rt===cu}if(O){let rt=I.texture.type,yt=rt===xi||rt===bs||rt===ro||rt===mr||rt===au||rt===lu,Tt=Dt.getClearColor(),At=Dt.getClearAlpha(),Ot=Tt.r,kt=Tt.g,Rt=Tt.b;yt?(g[0]=Ot,g[1]=kt,g[2]=Rt,g[3]=At,H.clearBufferuiv(H.COLOR,0,g)):(y[0]=Ot,y[1]=kt,y[2]=Rt,y[3]=At,H.clearBufferiv(H.COLOR,0,y))}else q|=H.COLOR_BUFFER_BIT}U&&(q|=H.DEPTH_BUFFER_BIT),W&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Mt.dispose(),ie.dispose(),Nt.dispose(),b.dispose(),G.dispose(),Z.dispose(),me.dispose(),F.dispose(),Ct.dispose(),X.dispose(),X.removeEventListener("sessionstart",md),X.removeEventListener("sessionend",gd),hs.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let S=ye.autoReset,U=wt.enabled,W=wt.autoUpdate,q=wt.needsUpdate,O=wt.type;ft(),ye.autoReset=S,wt.enabled=U,wt.autoUpdate=W,wt.needsUpdate=q,wt.type=O}function gt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ht(S){let U=S.target;U.removeEventListener("dispose",Ht),Ae(U)}function Ae(S){qe(S),Nt.remove(S)}function qe(S){let U=Nt.get(S).programs;U!==void 0&&(U.forEach(function(W){Ct.releaseProgram(W)}),S.isShaderMaterial&&Ct.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,q,O,rt){U===null&&(U=Te);let yt=O.isMesh&&O.matrixWorld.determinant()<0,Tt=Nm(S,U,W,q,O);Lt.setMaterial(q,yt);let At=W.index,Ot=1;if(q.wireframe===!0){if(At=et.getWireframeAttribute(W),At===void 0)return;Ot=2}let kt=W.drawRange,Rt=W.attributes.position,re=kt.start*Ot,ge=(kt.start+kt.count)*Ot;rt!==null&&(re=Math.max(re,rt.start*Ot),ge=Math.min(ge,(rt.start+rt.count)*Ot)),At!==null?(re=Math.max(re,0),ge=Math.min(ge,At.count)):Rt!=null&&(re=Math.max(re,0),ge=Math.min(ge,Rt.count));let xe=ge-re;if(xe<0||xe===1/0)return;me.setup(O,q,Tt,W,At);let tn,oe=bt;if(At!==null&&(tn=K.get(At),oe=te,oe.setIndex(tn)),O.isMesh)q.wireframe===!0?(Lt.setLineWidth(q.wireframeLinewidth*Ce()),oe.setMode(H.LINES)):oe.setMode(H.TRIANGLES);else if(O.isLine){let It=q.linewidth;It===void 0&&(It=1),Lt.setLineWidth(It*Ce()),O.isLineSegments?oe.setMode(H.LINES):O.isLineLoop?oe.setMode(H.LINE_LOOP):oe.setMode(H.LINE_STRIP)}else O.isPoints?oe.setMode(H.POINTS):O.isSprite&&oe.setMode(H.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)oe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))oe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let It=O._multiDrawStarts,ai=O._multiDrawCounts,ae=O._multiDrawCount,Bn=At?K.get(At).bytesPerElement:1,Ws=Nt.get(q).currentProgram.getUniforms();for(let ln=0;ln<ae;ln++)Ws.setValue(H,"_gl_DrawID",ln),oe.render(It[ln]/Bn,ai[ln])}else if(O.isInstancedMesh)oe.renderInstances(re,xe,O.count);else if(W.isInstancedBufferGeometry){let It=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ai=Math.min(W.instanceCount,It);oe.renderInstances(re,xe,ai)}else oe.render(re,xe)};function he(S,U,W){S.transparent===!0&&S.side===un&&S.forceSinglePass===!1?(S.side=en,S.needsUpdate=!0,oa(S,U,W),S.side=Gi,S.needsUpdate=!0,oa(S,U,W),S.side=un):oa(S,U,W)}this.compile=function(S,U,W=null){W===null&&(W=S),p=ie.get(W),p.init(U),w.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==W&&S.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let q=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let rt=O.material;if(rt)if(Array.isArray(rt))for(let yt=0;yt<rt.length;yt++){let Tt=rt[yt];he(Tt,W,O),q.add(Tt)}else he(rt,W,O),q.add(rt)}),w.pop(),p=null,q},this.compileAsync=function(S,U,W=null){let q=this.compile(S,U,W);return new Promise(O=>{function rt(){if(q.forEach(function(yt){Nt.get(yt).currentProgram.isReady()&&q.delete(yt)}),q.size===0){O(S);return}setTimeout(rt,10)}Kt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Dn=null;function oi(S){Dn&&Dn(S)}function md(){hs.stop()}function gd(){hs.start()}let hs=new Zf;hs.setAnimationLoop(oi),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(S){Dn=S,X.setAnimationLoop(S),S===null?hs.stop():hs.start()},X.addEventListener("sessionstart",md),X.addEventListener("sessionend",gd),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,I),p=ie.get(S,w.length),p.init(U),w.push(p),Ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Ft),Et=this.localClippingEnabled,it=st.init(this.clippingPlanes,Et),m=Mt.get(S,x.length),m.init(),x.push(m),X.enabled===!0&&X.isPresenting===!0){let rt=v.xr.getDepthSensingMesh();rt!==null&&nc(rt,U,-1/0,v.sortObjects)}nc(S,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(J,lt),ne=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ne&&Dt.addToRenderList(m,S),this.info.render.frame++,it===!0&&st.beginShadows();let W=p.state.shadowsArray;wt.render(W,S,U),it===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,O=m.transmissive;if(p.setupLights(),U.isArrayCamera){let rt=U.cameras;if(O.length>0)for(let yt=0,Tt=rt.length;yt<Tt;yt++){let At=rt[yt];xd(q,O,S,At)}ne&&Dt.render(S);for(let yt=0,Tt=rt.length;yt<Tt;yt++){let At=rt[yt];yd(m,S,At,At.viewport)}}else O.length>0&&xd(q,O,S,U),ne&&Dt.render(S),yd(m,S,U);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(v,S,U),me.resetDefaultState(),E=-1,M=null,w.pop(),w.length>0?(p=w[w.length-1],it===!0&&st.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function nc(S,U,W,q){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){q&&Xt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ft);let yt=Z.update(S),Tt=S.material;Tt.visible&&m.push(S,yt,Tt,W,Xt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){let yt=Z.update(S),Tt=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Xt.copy(S.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Xt.copy(yt.boundingSphere.center)),Xt.applyMatrix4(S.matrixWorld).applyMatrix4(Ft)),Array.isArray(Tt)){let At=yt.groups;for(let Ot=0,kt=At.length;Ot<kt;Ot++){let Rt=At[Ot],re=Tt[Rt.materialIndex];re&&re.visible&&m.push(S,yt,re,W,Xt.z,Rt)}}else Tt.visible&&m.push(S,yt,Tt,W,Xt.z,null)}}let rt=S.children;for(let yt=0,Tt=rt.length;yt<Tt;yt++)nc(rt[yt],U,W,q)}function yd(S,U,W,q){let O=S.opaque,rt=S.transmissive,yt=S.transparent;p.setupLightsView(W),it===!0&&st.setGlobalState(v.clippingPlanes,W),q&&Lt.viewport(P.copy(q)),O.length>0&&ra(O,U,W),rt.length>0&&ra(rt,U,W),yt.length>0&&ra(yt,U,W),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function xd(S,U,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new vi(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?_o:xi,minFilter:ws,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let rt=p.state.transmissionRenderTarget[q.id],yt=q.viewport||P;rt.setSize(yt.z,yt.w);let Tt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(B),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),ne&&Dt.render(W);let At=v.toneMapping;v.toneMapping=Vi;let Ot=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),it===!0&&st.setGlobalState(v.clippingPlanes,q),ra(S,W,q),C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Rt=0,re=U.length;Rt<re;Rt++){let ge=U[Rt],xe=ge.object,tn=ge.geometry,oe=ge.material,It=ge.group;if(oe.side===un&&xe.layers.test(q.layers)){let ai=oe.side;oe.side=en,oe.needsUpdate=!0,vd(xe,W,q,tn,oe,It),oe.side=ai,oe.needsUpdate=!0,kt=!0}}kt===!0&&(C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt))}v.setRenderTarget(Tt),v.setClearColor(B,z),Ot!==void 0&&(q.viewport=Ot),v.toneMapping=At}function ra(S,U,W){let q=U.isScene===!0?U.overrideMaterial:null;for(let O=0,rt=S.length;O<rt;O++){let yt=S[O],Tt=yt.object,At=yt.geometry,Ot=q===null?yt.material:q,kt=yt.group;Tt.layers.test(W.layers)&&vd(Tt,U,W,At,Ot,kt)}}function vd(S,U,W,q,O,rt){S.onBeforeRender(v,U,W,q,O,rt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(v,U,W,q,S,rt),O.transparent===!0&&O.side===un&&O.forceSinglePass===!1?(O.side=en,O.needsUpdate=!0,v.renderBufferDirect(W,U,q,O,S,rt),O.side=Gi,O.needsUpdate=!0,v.renderBufferDirect(W,U,q,O,S,rt),O.side=un):v.renderBufferDirect(W,U,q,O,S,rt),S.onAfterRender(v,U,W,q,O,rt)}function oa(S,U,W){U.isScene!==!0&&(U=Te);let q=Nt.get(S),O=p.state.lights,rt=p.state.shadowsArray,yt=O.state.version,Tt=Ct.getParameters(S,O.state,rt,U,W),At=Ct.getProgramCacheKey(Tt),Ot=q.programs;q.environment=S.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(S.isMeshStandardMaterial?G:b).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ot===void 0&&(S.addEventListener("dispose",Ht),Ot=new Map,q.programs=Ot);let kt=Ot.get(At);if(kt!==void 0){if(q.currentProgram===kt&&q.lightsStateVersion===yt)return Md(S,Tt),kt}else Tt.uniforms=Ct.getUniforms(S),S.onBeforeCompile(Tt,v),kt=Ct.acquireProgram(Tt,At),Ot.set(At,kt),q.uniforms=Tt.uniforms;let Rt=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=st.uniform),Md(S,Tt),q.needsLights=Dm(S),q.lightsStateVersion=yt,q.needsLights&&(Rt.ambientLightColor.value=O.state.ambient,Rt.lightProbe.value=O.state.probe,Rt.directionalLights.value=O.state.directional,Rt.directionalLightShadows.value=O.state.directionalShadow,Rt.spotLights.value=O.state.spot,Rt.spotLightShadows.value=O.state.spotShadow,Rt.rectAreaLights.value=O.state.rectArea,Rt.ltc_1.value=O.state.rectAreaLTC1,Rt.ltc_2.value=O.state.rectAreaLTC2,Rt.pointLights.value=O.state.point,Rt.pointLightShadows.value=O.state.pointShadow,Rt.hemisphereLights.value=O.state.hemi,Rt.directionalShadowMap.value=O.state.directionalShadowMap,Rt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Rt.spotShadowMap.value=O.state.spotShadowMap,Rt.spotLightMatrix.value=O.state.spotLightMatrix,Rt.spotLightMap.value=O.state.spotLightMap,Rt.pointShadowMap.value=O.state.pointShadowMap,Rt.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=kt,q.uniformsList=null,kt}function _d(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=hr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Md(S,U){let W=Nt.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Nm(S,U,W,q,O){U.isScene!==!0&&(U=Te),C.resetTextureUnits();let rt=U.fog,yt=q.isMeshStandardMaterial?U.environment:null,Tt=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:br,At=(q.isMeshStandardMaterial?G:b).get(q.envMap||yt),Ot=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,kt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Rt=!!W.morphAttributes.position,re=!!W.morphAttributes.normal,ge=!!W.morphAttributes.color,xe=Vi;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xe=v.toneMapping);let tn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,oe=tn!==void 0?tn.length:0,It=Nt.get(q),ai=p.state.lights;if(it===!0&&(Et===!0||S!==M)){let wn=S===M&&q.id===E;st.setState(q,S,wn)}let ae=!1;q.version===It.__version?(It.needsLights&&It.lightsStateVersion!==ai.state.version||It.outputColorSpace!==Tt||O.isBatchedMesh&&It.batching===!1||!O.isBatchedMesh&&It.batching===!0||O.isBatchedMesh&&It.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&It.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&It.instancing===!1||!O.isInstancedMesh&&It.instancing===!0||O.isSkinnedMesh&&It.skinning===!1||!O.isSkinnedMesh&&It.skinning===!0||O.isInstancedMesh&&It.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&It.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&It.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&It.instancingMorph===!1&&O.morphTexture!==null||It.envMap!==At||q.fog===!0&&It.fog!==rt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==st.numPlanes||It.numIntersection!==st.numIntersection)||It.vertexAlphas!==Ot||It.vertexTangents!==kt||It.morphTargets!==Rt||It.morphNormals!==re||It.morphColors!==ge||It.toneMapping!==xe||It.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,It.__version=q.version);let Bn=It.currentProgram;ae===!0&&(Bn=oa(q,U,O));let Ws=!1,ln=!1,qr=!1,ve=Bn.getUniforms(),qn=It.uniforms;if(Lt.useProgram(Bn.program)&&(Ws=!0,ln=!0,qr=!0),q.id!==E&&(E=q.id,ln=!0),Ws||M!==S){Lt.buffers.depth.getReversed()?(ut.copy(S.projectionMatrix),O0(ut),z0(ut),ve.setValue(H,"projectionMatrix",ut)):ve.setValue(H,"projectionMatrix",S.projectionMatrix),ve.setValue(H,"viewMatrix",S.matrixWorldInverse);let Li=ve.map.cameraPosition;Li!==void 0&&Li.setValue(H,zt.setFromMatrixPosition(S.matrixWorld)),Qt.logarithmicDepthBuffer&&ve.setValue(H,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ve.setValue(H,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,ln=!0,qr=!0)}if(O.isSkinnedMesh){ve.setOptional(H,O,"bindMatrix"),ve.setOptional(H,O,"bindMatrixInverse");let wn=O.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),ve.setValue(H,"boneTexture",wn.boneTexture,C))}O.isBatchedMesh&&(ve.setOptional(H,O,"batchingTexture"),ve.setValue(H,"batchingTexture",O._matricesTexture,C),ve.setOptional(H,O,"batchingIdTexture"),ve.setValue(H,"batchingIdTexture",O._indirectTexture,C),ve.setOptional(H,O,"batchingColorTexture"),O._colorsTexture!==null&&ve.setValue(H,"batchingColorTexture",O._colorsTexture,C));let Xr=W.morphAttributes;if((Xr.position!==void 0||Xr.normal!==void 0||Xr.color!==void 0)&&Ut.update(O,W,Bn),(ln||It.receiveShadow!==O.receiveShadow)&&(It.receiveShadow=O.receiveShadow,ve.setValue(H,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(qn.envMap.value=At,qn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&U.environment!==null&&(qn.envMapIntensity.value=U.environmentIntensity),ln&&(ve.setValue(H,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&Lm(qn,qr),rt&&q.fog===!0&&pt.refreshFogUniforms(qn,rt),pt.refreshMaterialUniforms(qn,q,V,j,p.state.transmissionRenderTarget[S.id]),hr.upload(H,_d(It),qn,C)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(hr.upload(H,_d(It),qn,C),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ve.setValue(H,"center",O.center),ve.setValue(H,"modelViewMatrix",O.modelViewMatrix),ve.setValue(H,"normalMatrix",O.normalMatrix),ve.setValue(H,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let wn=q.uniformsGroups;for(let Li=0,Di=wn.length;Li<Di;Li++){let wd=wn[Li];F.update(wd,Bn),F.bind(wd,Bn)}}return Bn}function Lm(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Dm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,U,W){Nt.get(S.texture).__webglTexture=U,Nt.get(S.depthTexture).__webglTexture=W;let q=Nt.get(S);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){let W=Nt.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){I=S,T=U,A=W;let q=!0,O=null,rt=!1,yt=!1;if(S){let At=Nt.get(S);if(At.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(H.FRAMEBUFFER,null),q=!1;else if(At.__webglFramebuffer===void 0)C.setupRenderTarget(S);else if(At.__hasExternalTextures)C.rebindTextures(S,Nt.get(S.texture).__webglTexture,Nt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Rt=S.depthTexture;if(At.__boundDepthTexture!==Rt){if(Rt!==null&&Nt.has(Rt)&&(S.width!==Rt.image.width||S.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(S)}}let Ot=S.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(yt=!0);let kt=Nt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(kt[U])?O=kt[U][W]:O=kt[U],rt=!0):S.samples>0&&C.useMultisampledRTT(S)===!1?O=Nt.get(S).__webglMultisampledFramebuffer:Array.isArray(kt)?O=kt[W]:O=kt,P.copy(S.viewport),k.copy(S.scissor),N=S.scissorTest}else P.copy(mt).multiplyScalar(V).floor(),k.copy(ot).multiplyScalar(V).floor(),N=Jt;if(Lt.bindFramebuffer(H.FRAMEBUFFER,O)&&q&&Lt.drawBuffers(S,O),Lt.viewport(P),Lt.scissor(k),Lt.setScissorTest(N),rt){let At=Nt.get(S.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+U,At.__webglTexture,W)}else if(yt){let At=Nt.get(S.texture),Ot=U||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,At.__webglTexture,W||0,Ot)}E=-1},this.readRenderTargetPixels=function(S,U,W,q,O,rt,yt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Nt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(Tt=Tt[yt]),Tt){Lt.bindFramebuffer(H.FRAMEBUFFER,Tt);try{let At=S.texture,Ot=At.format,kt=At.type;if(!Qt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-q&&W>=0&&W<=S.height-O&&H.readPixels(U,W,q,O,Gt.convert(Ot),Gt.convert(kt),rt)}finally{let At=I!==null?Nt.get(I).__webglFramebuffer:null;Lt.bindFramebuffer(H.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(S,U,W,q,O,rt,yt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Nt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(Tt=Tt[yt]),Tt){let At=S.texture,Ot=At.format,kt=At.type;if(!Qt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-q&&W>=0&&W<=S.height-O){Lt.bindFramebuffer(H.FRAMEBUFFER,Tt);let Rt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Rt),H.bufferData(H.PIXEL_PACK_BUFFER,rt.byteLength,H.STREAM_READ),H.readPixels(U,W,q,O,Gt.convert(Ot),Gt.convert(kt),0);let re=I!==null?Nt.get(I).__webglFramebuffer:null;Lt.bindFramebuffer(H.FRAMEBUFFER,re);let ge=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await U0(H,ge,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Rt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,rt),H.deleteBuffer(Rt),H.deleteSync(ge),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,W=0){S.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);let q=Math.pow(2,-W),O=Math.floor(S.image.width*q),rt=Math.floor(S.image.height*q),yt=U!==null?U.x:0,Tt=U!==null?U.y:0;C.setTexture2D(S,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,yt,Tt,O,rt),Lt.unbindTexture()},this.copyTextureToTexture=function(S,U,W=null,q=null,O=0){S.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,S=arguments[1],U=arguments[2],O=arguments[3]||0,W=null);let rt,yt,Tt,At,Ot,kt,Rt,re,ge,xe=S.isCompressedTexture?S.mipmaps[O]:S.image;W!==null?(rt=W.max.x-W.min.x,yt=W.max.y-W.min.y,Tt=W.isBox3?W.max.z-W.min.z:1,At=W.min.x,Ot=W.min.y,kt=W.isBox3?W.min.z:0):(rt=xe.width,yt=xe.height,Tt=xe.depth||1,At=0,Ot=0,kt=0),q!==null?(Rt=q.x,re=q.y,ge=q.z):(Rt=0,re=0,ge=0);let tn=Gt.convert(U.format),oe=Gt.convert(U.type),It;U.isData3DTexture?(C.setTexture3D(U,0),It=H.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),It=H.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),It=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,U.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,U.unpackAlignment);let ai=H.getParameter(H.UNPACK_ROW_LENGTH),ae=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Bn=H.getParameter(H.UNPACK_SKIP_PIXELS),Ws=H.getParameter(H.UNPACK_SKIP_ROWS),ln=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,xe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,At),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ot),H.pixelStorei(H.UNPACK_SKIP_IMAGES,kt);let qr=S.isDataArrayTexture||S.isData3DTexture,ve=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let qn=Nt.get(S),Xr=Nt.get(U),wn=Nt.get(qn.__renderTarget),Li=Nt.get(Xr.__renderTarget);Lt.bindFramebuffer(H.READ_FRAMEBUFFER,wn.__webglFramebuffer),Lt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Di=0;Di<Tt;Di++)qr&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.get(S).__webglTexture,O,kt+Di),S.isDepthTexture?(ve&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.get(U).__webglTexture,O,ge+Di),H.blitFramebuffer(At,Ot,rt,yt,Rt,re,rt,yt,H.DEPTH_BUFFER_BIT,H.NEAREST)):ve?H.copyTexSubImage3D(It,O,Rt,re,ge+Di,At,Ot,rt,yt):H.copyTexSubImage2D(It,O,Rt,re,ge+Di,At,Ot,rt,yt);Lt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ve?S.isDataTexture||S.isData3DTexture?H.texSubImage3D(It,O,Rt,re,ge,rt,yt,Tt,tn,oe,xe.data):U.isCompressedArrayTexture?H.compressedTexSubImage3D(It,O,Rt,re,ge,rt,yt,Tt,tn,xe.data):H.texSubImage3D(It,O,Rt,re,ge,rt,yt,Tt,tn,oe,xe):S.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,O,Rt,re,rt,yt,tn,oe,xe.data):S.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,O,Rt,re,xe.width,xe.height,tn,xe.data):H.texSubImage2D(H.TEXTURE_2D,O,Rt,re,rt,yt,tn,oe,xe);H.pixelStorei(H.UNPACK_ROW_LENGTH,ai),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ae),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Bn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ws),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ln),O===0&&U.generateMipmaps&&H.generateMipmap(It),Lt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,W=null,q=null,O=0){return S.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,S=arguments[2],U=arguments[3],O=arguments[4]||0),Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,W,q,O)},this.initRenderTarget=function(S){Nt.get(S).__webglFramebuffer===void 0&&C.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?C.setTextureCube(S,0):S.isData3DTexture?C.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?C.setTexture2DArray(S,0):C.setTexture2D(S,0),Lt.unbindTexture()},this.resetState=function(){T=0,A=0,I=null,Lt.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}},Za=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Yt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ho=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var vr=class extends fn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new at:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],o=[],a=new D,l=new be;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ze(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},uo=class extends Tn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Uh=class extends uo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function pu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ra=new D,Pc=new pu,Nc=new pu,Lc=new pu,Oh=class extends Tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ra.subVectors(s[0],s[1]).add(s[0]),c=Ra);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ra.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ra),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Pc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),Nc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),Lc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Pc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Nc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Lc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Pc.calc(l),Nc.calc(l),Lc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ef(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function L_(i,t){let e=1-i;return e*e*t}function D_(i,t){return 2*(1-i)*i*t}function B_(i,t){return i*i*t}function io(i,t,e,n){return L_(i,t)+D_(i,e)+B_(i,n)}function F_(i,t){let e=1-i;return e*e*e*t}function U_(i,t){let e=1-i;return 3*e*e*i*t}function O_(i,t){return 3*(1-i)*i*i*t}function z_(i,t){return i*i*i*t}function so(i,t,e,n,s){return F_(i,t)+U_(i,e)+O_(i,n)+z_(i,s)}var ja=class extends Tn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(so(t,s.x,r.x,o.x,a.x),so(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zh=class extends Tn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(so(t,s.x,r.x,o.x,a.x),so(t,s.y,r.y,o.y,a.y),so(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ja=class extends Tn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hh=class extends Tn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends Tn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(io(t,s.x,r.x,o.x),io(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kh=class extends Tn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(io(t,s.x,r.x,o.x),io(t,s.y,r.y,o.y),io(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Ef(a,l.x,c.x,h.x,d.x),Ef(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},Sf=Object.freeze({__proto__:null,ArcCurve:Uh,CatmullRomCurve3:Oh,CubicBezierCurve:ja,CubicBezierCurve3:zh,EllipseCurve:uo,LineCurve:Ja,LineCurve3:Hh,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:kh,SplineCurve:Qa}),Vh=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sf[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Sf[s.type]().fromJSON(s))}return this}},Gh=class extends Vh{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ja(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ka(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ja(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Qa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new uo(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},fo=class i extends nn{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new D,u=new at,f=new D,g=new D,y=new D,m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let x=0;x<=e;x++){let w=n+x*h*s,v=Math.sin(w),R=Math.cos(w);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*v,d.y=t[T].y,d.z=t[T].x*R,o.push(d.x,d.y,d.z),u.x=x/e,u.y=T/(t.length-1),a.push(u.x,u.y);let A=l[3*T+0]*v,I=l[3*T+1],E=l[3*T+0]*R;c.push(A,I,E)}}for(let x=0;x<e;x++)for(let w=0;w<t.length-1;w++){let v=w+x*t.length,R=v,T=v+t.length,A=v+t.length+1,I=v+1;r.push(R,T,I),r.push(A,I,T)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},tl=class i extends fo{constructor(t=1,e=1,n=4,s=8){let r=new Gh;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Xi=class i extends nn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new D,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},sn=class i extends nn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=n/2,p=0;x(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function x(){let v=new D,R=new D,T=0,A=(e-t)/n;for(let I=0;I<=r;I++){let E=[],M=I/r,P=M*(e-t)+t;for(let k=0;k<=s;k++){let N=k/s,B=N*l+a,z=Math.sin(B),L=Math.cos(B);R.x=P*z,R.y=-M*n+m,R.z=P*L,d.push(R.x,R.y,R.z),v.set(z,A,L).normalize(),u.push(v.x,v.y,v.z),f.push(N,1-M),E.push(g++)}y.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){let M=y[E][I],P=y[E+1][I],k=y[E+1][I+1],N=y[E][I+1];(t>0||E!==0)&&(h.push(M,P,N),T+=3),(e>0||E!==r-1)&&(h.push(P,k,N),T+=3)}c.addGroup(p,T,0),p+=T}function w(v){let R=g,T=new at,A=new D,I=0,E=v===!0?t:e,M=v===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;let P=g;for(let k=0;k<=s;k++){let B=k/s*l+a,z=Math.cos(B),L=Math.sin(B);A.x=E*L,A.y=m*M,A.z=E*z,d.push(A.x,A.y,A.z),u.push(0,M,0),T.x=z*.5+.5,T.y=L*.5*M+.5,f.push(T.x,T.y),g++}for(let k=0;k<s;k++){let N=R+k,B=P+k;v===!0?h.push(B,B+1,N):h.push(B+1,B,N),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},po=class i extends sn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mo=class i extends nn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let w=new D,v=new D,R=new D;for(let T=0;T<e.length;T+=3)f(e[T+0],w),f(e[T+1],v),f(e[T+2],R),l(w,v,R,x)}function l(x,w,v,R){let T=R+1,A=[];for(let I=0;I<=T;I++){A[I]=[];let E=x.clone().lerp(v,I/T),M=w.clone().lerp(v,I/T),P=T-I;for(let k=0;k<=P;k++)k===0&&I===T?A[I][k]=E:A[I][k]=E.clone().lerp(M,k/P)}for(let I=0;I<T;I++)for(let E=0;E<2*(T-I)-1;E++){let M=Math.floor(E/2);E%2===0?(u(A[I][M+1]),u(A[I+1][M]),u(A[I][M])):(u(A[I][M+1]),u(A[I+1][M+1]),u(A[I+1][M]))}}function c(x){let w=new D;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(x),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let x=new D;for(let w=0;w<r.length;w+=3){x.x=r[w+0],x.y=r[w+1],x.z=r[w+2];let v=m(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;o.push(v,1-R)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){let w=o[x+0],v=o[x+2],R=o[x+4],T=Math.max(w,v,R),A=Math.min(w,v,R);T>.9&&A<.1&&(w<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,w){let v=x*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function g(){let x=new D,w=new D,v=new D,R=new D,T=new at,A=new at,I=new at;for(let E=0,M=0;E<r.length;E+=9,M+=6){x.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),T.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),R.copy(x).add(w).add(v).divideScalar(3);let P=m(R);y(T,M+0,x,P),y(A,M+2,w,P),y(I,M+4,v,P)}}function y(x,w,v,R){R<0&&x.x===1&&(o[w]=x.x-1),v.x===0&&v.z===0&&(o[w]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var _r=class i extends mo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},el=class i extends mo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},nl=class i extends nn{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new D,g=new at;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let x=p+m,w=x,v=x+n+1,R=x+n+2,T=x+1;a.push(w,v,T),a.push(v,R,T)}}this.setIndex(a),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var il=class i extends nn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new D,u=new D,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let x=[],w=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let T=R/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+w*a),d.y=t*Math.cos(o+w*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+w*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+v,1-w),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let w=h[p][x+1],v=h[p][x],R=h[p+1][x],T=h[p+1][x+1];(p!==0||o>0)&&f.push(w,v,T),(p!==n-1||l<Math.PI)&&f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(y,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},sl=class i extends mo{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Yi=class i extends nn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;o.push(y,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var dt=class extends Ss{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ca(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function H_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Mr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wh=class extends Mr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Td,endingEnd:Td}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ad:r=t,a=2*e-n;break;case Rd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ad:o=t,l=2*n-e;break;case Rd:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,x=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+x*o[c+R]+w*o[l+R]+v*o[d+R];return r}},qh=class extends Mr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Xh=class extends Mr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ca(e,this.TimeBufferType),this.values=Ca(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ca(t.times,Array),values:Ca(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fa:e=this.InterpolantFactoryMethodDiscrete;break;case _h:e=this.InterpolantFactoryMethodLinear;break;case sc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fa;case this.InterpolantFactoryMethodLinear:return _h;case this.InterpolantFactoryMethodSmooth:return sc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&H_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=_h;var Ts=class extends kn{constructor(t,e,n){super(t,e,n)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Fa;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Yh=class extends kn{};Yh.prototype.ValueTypeName="color";var $h=class extends kn{};$h.prototype.ValueTypeName="number";var Zh=class extends Mr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)qi.slerpFlat(r,0,o,c-a,o,c,l);return r}},rl=class extends kn{InterpolantFactoryMethodLinear(t){return new Zh(this.times,this.values,this.getValueSize(),t)}};rl.prototype.ValueTypeName="quaternion";rl.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends kn{constructor(t,e,n){super(t,e,n)}};As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Fa;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var jh=class extends kn{};jh.prototype.ValueTypeName="vector";var Jh=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},k_=new Jh,Kh=class{constructor(t){this.manager=t!==void 0?t:k_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Kh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},go=class extends Rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Dc=new be,Tf=new D,Af=new D,yo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Tf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tf),Af.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Af),e.updateMatrixWorld(),Dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Qh=class extends yo{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=yr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ol=class extends Rs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Qh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Rf=new be,Jr=new D,Bc=new D,tu=class extends yo{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Jr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Jr),Bc.copy(n.position),Bc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Bc),n.updateMatrixWorld(),s.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Rf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rf)}},wr=class extends Rs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},eu=class extends yo{constructor(){super(new Xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xo=class extends Rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new eu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},al=class extends Rs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var mu="\\[\\]\\.:\\/",V_=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",G_="[^"+mu.replace("\\.","")+"]",W_=/((?:WC+[\/:])*)/.source.replace("WC",gu),q_=/(WCOD+)?/.source.replace("WCOD",G_),X_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),Y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),$_=new RegExp("^"+W_+q_+X_+Y_+"$"),Z_=["material","materials","bones","map"],nu=class{constructor(t,e,n){let s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(V_,"")}static parseTrackName(t){let e=$_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Z_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=nu;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yb=new Float32Array(1);var Cf=new be,vo=class{constructor(t,e,n=0,s=1/0){this.ray=new ka(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cf),this}intersectObject(t,e=!0,n=[]){return iu(t,this,n,e),n.sort(If),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)iu(t[s],this,n,e);return n.sort(If),n}};function If(i,t){return i.distance-t.distance}function iu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)iu(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:su}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=su);var Zi=class i{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new _);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new _);let n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new i);let n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],y=s[0],m=s[1],p=s[2],x=s[3],w=s[4],v=s[5],R=s[6],T=s[7],A=s[8];return r[0]=o*y+a*x+l*R,r[1]=o*m+a*w+l*T,r[2]=o*p+a*v+l*A,r[3]=c*y+h*x+d*R,r[4]=c*m+h*w+d*T,r[5]=c*p+h*v+d*A,r[6]=u*y+f*x+g*R,r[7]=u*m+f*w+g*T,r[8]=u*p+f*v+g*A,e}scale(t,e){e===void 0&&(e=new i);let n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new _);let n=3,s=4,r=[],o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3,c=l,h,d=4,u;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){h=d;do u=d-h,r[u+s*o]+=r[u+s*a];while(--h);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){let f=r[o+s*a]/r[o+s*o];h=d;do u=d-h,r[u+s*a]=u<=o?0:r[u+s*a]-r[u+s*o]*f;while(--h)}}while(--l);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="",e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new i);let e=3,n=6,s=J_,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3,l=a,c,h=n,d;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=h;do d=h-c,s[d+n*r]+=s[d+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){let u=s[r+n*o]/s[r+n*r];c=h;do d=h-c,s[d+n*o]=d<=r?0:s[d+n*o]-s[d+n*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{let u=s[r+n*o]/s[r+n*r];c=n;do d=n-c,s[d+n*o]=s[d+n*o]-s[d+n*r]*u;while(--c)}while(o--)}while(--r);r=2;do{let u=1/s[r+n*r];c=n;do d=n-c,s[d+n*r]=s[d+n*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(d=s[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,l=s+s,c=e*o,h=e*a,d=e*l,u=n*a,f=n*l,g=s*l,y=r*o,m=r*a,p=r*l,x=this.elements;return x[3*0+0]=1-(u+g),x[3*0+1]=h-p,x[3*0+2]=d+m,x[3*1+0]=h+p,x[3*1+1]=1-(c+g),x[3*1+2]=f-y,x[3*2+0]=d-m,x[3*2+1]=f+y,x[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new i);let e=this.elements,n=t.elements,s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}},J_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],_=class i{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new i);let n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*s,e.y=l*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new i(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new i(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Zi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){let r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new i),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new i),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let s=K_,r=1/n;s.set(this.x*r,this.y*r,this.z*r);let o=Q_;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(tp),tp.almostEquals(t,e)}clone(){return new i(this.x,this.y,this.z)}};_.ZERO=new _(0,0,0);_.UNIT_X=new _(1,0,0);_.UNIT_Y=new _(0,1,0);_.UNIT_Z=new _(0,0,1);var K_=new _,Q_=new _,tp=new _,mn=class i{constructor(t){t===void 0&&(t={}),this.lowerBound=new _,this.upperBound=new _,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,ep),c=ep),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new i().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,l){let c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),s.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){let n=np,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(s,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=np,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(s,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||f>g)}},ep=new _,np=[new _,new _,new _,new _,new _,new _,new _,new _],yl=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){let r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){let o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},xl=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}},De=class i{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new _),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=tM,s=eM;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+s*c-r*l,e.y=s*h+o*l+r*a-n*c,e.z=r*h+o*c+n*l-s*a,e.w=o*h-n*a-s*l-r*c,e}inverse(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);let o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new _);let n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*s,d=c*s+l*n-o*r,u=c*r+o*s-a*n,f=-o*n-a*s-l*r;return e.x=h*c+f*-o+d*-l-u*-a,e.y=d*c+f*-a+u*-o-h*-l,e.z=u*c+f*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r,o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":let h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){let d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),s=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");let r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):s==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):s==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):s==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):s==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):s==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new i(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new i);let s=this.x,r=this.y,o=this.z,a=this.w,l=t.x,c=t.y,h=t.z,d=t.w,u,f,g,y,m;return f=s*l+r*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),y=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(y=1-e,m=e),n.x=y*s+m*l,n.y=y*r+m*c,n.z=y*o+m*h,n.w=y*a+m*d,n}integrate(t,e,n,s){s===void 0&&(s=new i);let r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return s.x+=u*(r*d+o*h-a*c),s.y+=u*(o*d+a*l-r*h),s.z+=u*(a*d+r*c-o*l),s.w+=u*(-r*l-o*c-a*h),s}},tM=new _,eM=new _,nM={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},_t=class i{constructor(t){t===void 0&&(t={}),this.id=i.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};_t.idCounter=0;_t.types=nM;var ce=class i{constructor(t){t===void 0&&(t={}),this.position=new _,this.quaternion=new De,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return i.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return i.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new _),n.vsub(t,s),e.conjugate(ip),ip.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new _),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new _),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new _),e.w*=-1,e.vmult(n,s),e.w*=-1,s}},ip=new De,vl=class i extends _t{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:_t.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let s=new _;for(let r=0;r!==t.length;r++){let o=t[r],a=o.length;for(let l=0;l!==a;l++){let c=(l+1)%a;e[o[l]].vsub(e[o[c]],s),s.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(s)||n[d].almostEquals(s)){h=!0;break}h||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);let e=this.faceNormals[t]||new _;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];i.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){let r=new _,o=new _;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,l,c){let h=new _,d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),r.vmult(h,h);let y=h.dot(o);y>u&&(u=y,d=g)}let f=[];for(let g=0;g<n.faces[d].length;g++){let y=n.vertices[n.faces[d][g]],m=new _;m.copy(y),r.vmult(m,m),s.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,s,r,o,a,l){let c=new _,h=new _,d=new _,u=new _,f=new _,g=new _,y=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);let x=m.testSepAxis(c,t,e,n,s,r);if(x===!1)return!1;x<y&&(y=x,o.copy(c))}else{let p=a?a.length:m.faces.length;for(let x=0;x<p;x++){let w=a?a[x]:x;c.copy(m.faceNormals[w]),n.vmult(c,c);let v=m.testSepAxis(c,t,e,n,s,r);if(v===!1)return!1;v<y&&(y=v,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],h);let x=m.testSepAxis(h,t,e,n,s,r);if(x===!1)return!1;x<y&&(y=x,o.copy(h))}else{let p=l?l.length:t.faces.length;for(let x=0;x<p;x++){let w=l?l[x]:x;h.copy(t.faceNormals[w]),r.vmult(h,h);let v=m.testSepAxis(h,t,e,n,s,r);if(v===!1)return!1;v<y&&(y=v,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let x=0;x!==t.uniqueEdges.length;x++)if(r.vmult(t.uniqueEdges[x],f),u.cross(f,g),!g.almostZero()){g.normalize();let w=m.testSepAxis(g,t,e,n,s,r);if(w===!1)return!1;w<y&&(y=w,o.copy(g))}}return s.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){let a=this;i.project(a,t,n,s,yu),i.project(e,t,r,o,xu);let l=yu[0],c=yu[1],h=xu[0],d=xu[1];if(l<d||h<c)return!1;let u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){let n=new _,s=new _;this.computeLocalAABB(s,n);let r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){let l=new _,c=new _,h=new _,d=new _,u=new _,f=new _,g=new _,y=new _,m=this,p=[],x=s,w=p,v=-1,R=Number.MAX_VALUE;for(let M=0;M<m.faces.length;M++){l.copy(m.faceNormals[M]),n.vmult(l,l);let P=l.dot(t);P<R&&(R=P,v=M)}if(v<0)return;let T=m.faces[v];T.connectedFaces=[];for(let M=0;M<m.faces.length;M++)for(let P=0;P<m.faces[M].length;P++)T.indexOf(m.faces[M][P])!==-1&&M!==v&&T.connectedFaces.indexOf(M)===-1&&T.connectedFaces.push(M);let A=T.length;for(let M=0;M<A;M++){let P=m.vertices[T[M]],k=m.vertices[T[(M+1)%A]];P.vsub(k,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[v]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(P),n.vmult(f,f),e.vadd(f,f);let N=T.connectedFaces[M];g.copy(this.faceNormals[N]);let B=this.getPlaneConstantOfFace(N);y.copy(g),n.vmult(y,y);let z=B-y.dot(e);for(this.clipFaceAgainstPlane(x,w,y,z);x.length;)x.shift();for(;w.length;)x.push(w.shift())}g.copy(this.faceNormals[v]);let I=this.getPlaneConstantOfFace(v);y.copy(g),n.vmult(y,y);let E=I-y.dot(e);for(let M=0;M<x.length;M++){let P=y.dot(x[M])+E;if(P<=r&&(console.log(`clamped: depth=${P} to minDist=${r}`),P=r),P<=o){let k=x[M];if(P<=1e-6){let N={point:k,normal:y,depth:P};a.push(N)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o,a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+s;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+s,r<0)if(o<0){let d=new _;d.copy(c),e.push(d)}else{let d=new _;l.lerp(c,r/(r-o),d),e.push(d)}else if(o<0){let d=new _;l.lerp(c,r/(r-o),d),e.push(d),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new _);let n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){let r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new _);let n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){let r=this.vertices,o,a,l,c,h,d,u=new _;for(let f=0;f<r.length;f++){u.copy(r[f]),e.vmult(u,u),t.vadd(u,u);let g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,l),s.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new _);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){let o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){let o=s[r];o.vadd(t,o)}}pointIsInside(t){let e=this.vertices,n=this.faces,s=this.faceNormals,r=null,o=new _;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=s[a],c=e[n[a][0]],h=new _;t.vsub(c,h);let d=l.dot(h),u=new _;o.vsub(c,u);let f=l.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(t,e,n,s,r){let o=t.vertices.length,a=sM,l=0,c=0,h=rM,d=t.vertices;h.setZero(),ce.vectorToLocalFrame(n,s,e,a),ce.pointToLocalFrame(n,s,h,h);let u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){let g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){let f=c;c=l,l=f}r[0]=l,r[1]=c}},yu=[],xu=[],iM=new _,sM=new _,rM=new _,Qn=class i extends _t{constructor(t){super({type:_t.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=_,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new vl({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new _),i.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){let n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)$i.set(r[o][0],r[o][1],r[o][2]),e.vmult($i,$i),t.vadd($i,$i),n($i.x,$i.y,$i.z)}calculateWorldAABB(t,e,n,s){let r=this.halfExtents;jn[0].set(r.x,r.y,r.z),jn[1].set(-r.x,r.y,r.z),jn[2].set(-r.x,-r.y,r.z),jn[3].set(-r.x,-r.y,-r.z),jn[4].set(r.x,-r.y,-r.z),jn[5].set(r.x,r.y,-r.z),jn[6].set(-r.x,r.y,-r.z),jn[7].set(r.x,-r.y,r.z);let o=jn[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){let l=jn[a];e.vmult(l,l),t.vadd(l,l);let c=l.x,h=l.y,d=l.z;c>s.x&&(s.x=c),h>s.y&&(s.y=h),d>s.z&&(s.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},$i=new _,jn=[new _,new _,new _,new _,new _,new _,new _,new _],Nu={DYNAMIC:1,STATIC:2,KINEMATIC:4},Lu={AWAKE:0,SLEEPY:1,SLEEPING:2},Pt=class i extends xl{constructor(t){t===void 0&&(t={}),super(),this.id=i.idCounter++,this.index=-1,this.world=null,this.vlambda=new _,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new _,this.previousPosition=new _,this.interpolatedPosition=new _,this.initPosition=new _,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new _,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new _,this.force=new _;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?i.STATIC:i.DYNAMIC,typeof t.type==typeof i.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=i.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new _,this.quaternion=new De,this.initQuaternion=new De,this.previousQuaternion=new De,this.interpolatedQuaternion=new De,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new _,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new _,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new _,this.invInertia=new _,this.invInertiaWorld=new Zi,this.invMassSolve=0,this.invInertiaSolve=new _,this.invInertiaWorldSolve=new Zi,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new _(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new _(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new mn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new _,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=i.AWAKE,this.wakeUpAfterNarrowphase=!1,t===i.SLEEPING&&this.dispatchEvent(i.wakeupEvent)}sleep(){this.sleepState=i.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===i.AWAKE&&n<s?(this.sleepState=i.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(i.sleepyEvent)):e===i.SLEEPY&&n>s?this.wakeUp():e===i.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(i.sleepEvent))}}updateSolveMassProperties(){this.sleepState===i.SLEEPING||this.type===i.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new _),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new _),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e}addShape(t,e,n){let s=new _,r=new De;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,s=0;for(let r=0;r!==n;r++){let o=t[r];o.updateBoundingSphereRadius();let a=e[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=oM,o=aM,a=this.quaternion,l=this.aabb,c=lM;for(let h=0;h!==s;h++){let d=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=cM,s=hM;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new _),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=dM;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new _),this.type!==i.DYNAMIC)return;let n=fM,s=pM;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===i.DYNAMIC&&(this.sleepState===i.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new _),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=e,s=mM;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);let r=gM;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new _),this.type!==i.DYNAMIC)return;let n=yM,s=xM;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){let t=vM;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Qn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new _;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===i.DYNAMIC||this.type===i.KINEMATIC)||this.sleepState===i.SLEEPING)return;let s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;s.x+=a.x*f*u.x,s.y+=a.y*f*u.y,s.z+=a.z*f*u.z;let g=d.elements,y=this.angularFactor,m=l.x*y.x,p=l.y*y.y,x=l.z*y.z;r.x+=t*(g[0]*m+g[1]*p+g[2]*x),r.y+=t*(g[3]*m+g[4]*p+g[5]*x),r.z+=t*(g[6]*m+g[7]*p+g[8]*x),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};Pt.idCounter=0;Pt.COLLIDE_EVENT_NAME="collide";Pt.DYNAMIC=Nu.DYNAMIC;Pt.STATIC=Nu.STATIC;Pt.KINEMATIC=Nu.KINEMATIC;Pt.AWAKE=Lu.AWAKE;Pt.SLEEPY=Lu.SLEEPY;Pt.SLEEPING=Lu.SLEEPING;Pt.wakeupEvent={type:"wakeup"};Pt.sleepyEvent={type:"sleepy"};Pt.sleepEvent={type:"sleep"};var oM=new _,aM=new De,lM=new mn,cM=new Zi,hM=new Zi,uM=new Zi,dM=new _,fM=new _,pM=new _,mM=new _,gM=new _,yM=new _,xM=new _,vM=new _,_l=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Pt.STATIC||t.sleepState===Pt.SLEEPING)&&(e.type&Pt.STATIC||e.sleepState===Pt.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){let r=_M;e.position.vsub(t.position,r);let o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){let n=MM,s=wM,r=bM,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let l=s[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let l=n.keys.pop(),c=n[l];t.push(s[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new _;t.position.vsub(e.position,n);let s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},_M=new _;new _;new De;new _;var MM={keys:[]},wM=[],bM=[];new _;var $b=new _;new _;var bu=class extends _l{constructor(){super()}collisionPairs(t,e,n){let s=t.bodies,r=s.length,o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){let r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}},Cr=class{constructor(){this.rayFromWorld=new _,this.rayToWorld=new _,this.hitNormalWorld=new _,this.hitPointWorld=new _,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}},mp,gp,yp,xp,vp,_p,Mp,Du={CLOSEST:1,ANY:2,ALL:4};mp=_t.types.SPHERE;gp=_t.types.PLANE;yp=_t.types.BOX;xp=_t.types.CYLINDER;vp=_t.types.CONVEXPOLYHEDRON;_p=_t.types.HEIGHTFIELD;Mp=_t.types.TRIMESH;var An=class i{get[mp](){return this._intersectSphere}get[gp](){return this._intersectPlane}get[yp](){return this._intersectBox}get[xp](){return this._intersectConvex}get[vp](){return this._intersectConvex}get[_p](){return this._intersectHeightfield}get[Mp](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new _),e===void 0&&(e=new _),this.from=t.clone(),this.to=e.clone(),this.direction=new _,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=i.ANY,this.result=new Cr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||i.ANY,this.result=e.result||new Cr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(sp),vu.length=0,t.broadphase.aabbQuery(t,sp,vu),this.intersectBodies(vu),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;let s=EM,r=SM;for(let o=0,a=t.shapes.length;o<a;o++){let l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(l,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){let r=this.from;if(kM(r,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){let o=this.from,a=this.to,l=this.direction,c=new _(0,0,1);e.vmult(c,c);let h=new _;o.vsub(n,h);let d=h.dot(c);a.vsub(n,h);let u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;let f=c.dot(l);if(Math.abs(f)<this.precision)return;let g=new _,y=new _,m=new _;o.vsub(n,g);let p=-c.dot(g)/f;l.scale(p,y),o.vadd(y,m),this.reportIntersection(c,m,r,s,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;let o=TM;o.from.copy(this.from),o.to.copy(this.to),ce.pointToLocalFrame(n,e,o.from,o.from),ce.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();let a=AM,l,c,h,d;l=c=0,h=d=t.data.length-1;let u=new mn;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),ce.pointToWorldFrame(n,e,t.pillarOffset,dl),this._intersectConvex(t.pillarConvex,e,dl,s,r,rp),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),ce.pointToWorldFrame(n,e,t.pillarOffset,dl),this._intersectConvex(t.pillarConvex,e,dl,s,r,rp)}}}_intersectSphere(t,e,n,s,r){let o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=RM,g=CM;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1);else{let y=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(y>=0&&y<=1&&(o.lerp(a,y,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){let a=IM,l=op,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,g=this.from,y=this.to,m=g.distanceTo(y),p=c?c.length:h.length,x=this.result;for(let w=0;!x.shouldStop&&w<p;w++){let v=c?c[w]:w,R=h[v],T=u[v],A=e,I=n;l.copy(d[R[0]]),A.vmult(l,l),l.vadd(I,l),l.vsub(g,l),A.vmult(T,a);let E=f.dot(a);if(Math.abs(E)<this.precision)continue;let M=a.dot(l)/E;if(!(M<0)){f.scale(M,rn),rn.vadd(g,rn),Vn.copy(d[R[0]]),A.vmult(Vn,Vn),I.vadd(Vn,Vn);for(let P=1;!x.shouldStop&&P<R.length-1;P++){Jn.copy(d[R[P]]),Kn.copy(d[R[P+1]]),A.vmult(Jn,Jn),A.vmult(Kn,Kn),I.vadd(Jn,Jn),I.vadd(Kn,Kn);let k=rn.distanceTo(g);!(i.pointInTriangle(rn,Vn,Jn,Kn)||i.pointInTriangle(rn,Jn,Vn,Kn))||k>m||this.reportIntersection(a,rn,r,s,v)}}}}_intersectTrimesh(t,e,n,s,r,o){let a=LM,l=zM,c=HM,h=op,d=DM,u=BM,f=FM,g=OM,y=UM,m=t.indices;t.vertices;let p=this.from,x=this.to,w=this.direction;c.position.copy(n),c.quaternion.copy(e),ce.vectorToLocalFrame(n,e,w,d),ce.pointToLocalFrame(n,e,p,u),ce.pointToLocalFrame(n,e,x,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();let v=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let R=0,T=l.length;!this.result.shouldStop&&R!==T;R++){let A=l[R];t.getNormal(A,a),t.getVertex(m[A*3],Vn),Vn.vsub(u,h);let I=d.dot(a),E=a.dot(h)/I;if(E<0)continue;d.scale(E,rn),rn.vadd(u,rn),t.getVertex(m[A*3+1],Jn),t.getVertex(m[A*3+2],Kn);let M=rn.distanceSquared(u);!(i.pointInTriangle(rn,Jn,Vn,Kn)||i.pointInTriangle(rn,Vn,Jn,Kn))||M>v||(ce.vectorToWorldFrame(e,a,y),ce.pointToWorldFrame(n,e,rn,g),this.reportIntersection(y,g,r,s,A))}l.length=0}reportIntersection(t,e,n,s,r){let o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case i.ALL:this.hasHit=!0,c.set(o,a,t,e,n,s,l),c.hasHit=!0,this.callback(c);break;case i.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l));break;case i.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,Is),n.vsub(e,Mo),t.vsub(e,_u);let r=Is.dot(Is),o=Is.dot(Mo),a=Is.dot(_u),l=Mo.dot(Mo),c=Mo.dot(_u),h,d;return(h=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&h+d<r*l-o*o}};An.CLOSEST=Du.CLOSEST;An.ANY=Du.ANY;An.ALL=Du.ALL;var sp=new mn,vu=[],Mo=new _,_u=new _,EM=new _,SM=new De,rn=new _,Vn=new _,Jn=new _,Kn=new _;new _;new Cr;var rp={faceList:[0]},dl=new _,TM=new An,AM=[],RM=new _,CM=new _,IM=new _,PM=new _,NM=new _,op=new _,LM=new _,DM=new _,BM=new _,FM=new _,UM=new _,OM=new _;new mn;var zM=[],HM=new ce,Is=new _,fl=new _;function kM(i,t,e){e.vsub(i,Is);let n=Is.dot(t);return t.scale(n,fl),fl.vadd(i,fl),e.distanceTo(fl)}var Ml=class i extends _l{static checkBounds(t,e,n){let s,r;n===0?(s=t.position.x,r=e.position.x):n===1?(s=t.position.y,r=e.position.y):n===2&&(s=t.position.z,r=e.position.z);let o=t.boundingRadius,a=e.boundingRadius,l=s+o;return r-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;let e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{let s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){let s=this.axisList,r=s.length,o=this.axisIndex,a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let c=s[a];for(l=a+1;l<r;l++){let h=s[l];if(this.needBroadphaseCollision(c,h)){if(!i.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,n)}}}}sortList(){let t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){let r=t[s];r.aabbNeedsUpdate&&r.updateAABB()}e===0?i.insertionSortX(t):e===1?i.insertionSortY(t):e===2&&i.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,r=0,o=0,a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){let g=a[f],y=g.position.x;t+=y,e+=y*y;let m=g.position.y;n+=m,s+=m*m;let p=g.position.z;r+=p,o+=p*p}let h=e-t*t*c,d=s-n*n*c,u=o-r*r*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let s=this.axisIndex,r="x";s===1&&(r="y"),s===2&&(r="z");let o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){let l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}},wl=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},bl=class i{constructor(t,e,n){n===void 0&&(n={}),n=wl.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=i.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};bl.idCounter=0;var El=class{constructor(){this.spatial=new _,this.rotational=new _}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},Ps=class i{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=i.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new El,this.jacobianElementB=new El,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){let s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,h=s.invMassSolve;return r.scale(c,ap),a.scale(h,lp),n.invInertiaWorldSolve.vmult(o,cp),s.invInertiaWorldSolve.vmult(l,hp),t.multiplyVectors(ap,cp)+e.multiplyVectors(lp,hp)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve,c=r+o;return a.vmult(t.rotational,pl),c+=pl.dot(t.rotational),l.vmult(e.rotational,pl),c+=pl.dot(e.rotational),c}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=VM;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Ps.idCounter=0;var ap=new _,lp=new _,cp=new _,hp=new _,pl=new _,VM=new _,Rr=class extends Ps{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new _,this.rj=new _,this.ni=new _}computeB(t){let e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=GM,c=WM,h=s.velocity,d=s.angularVelocity;s.force,s.torque;let u=r.velocity,f=r.angularVelocity;r.force,r.torque;let g=qM,y=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(y.spatial),l.negate(y.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(o,g);let x=p.dot(g),w=this.restitution+1,v=w*u.dot(p)-w*h.dot(p)+f.dot(c)-d.dot(l),R=this.computeGiMf();return-x*e-v*n-t*R}getImpactVelocityAlongNormal(){let t=XM,e=YM,n=$M,s=ZM,r=jM;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}},GM=new _,WM=new _,qM=new _,XM=new _,YM=new _,$M=new _,ZM=new _,jM=new _,Eu=class extends bl{constructor(t,e,n,s,r){e===void 0&&(e=new _),s===void 0&&(s=new _),r===void 0&&(r=1e6),super(t,n),this.pivotA=e.clone(),this.pivotB=s.clone();let o=this.equationX=new Rr(t,n),a=this.equationY=new Rr(t,n),l=this.equationZ=new Rr(t,n);this.equations.push(o,a,l),o.minForce=a.minForce=l.minForce=-r,o.maxForce=a.maxForce=l.maxForce=r,o.ni.set(1,0,0),a.ni.set(0,1,0),l.ni.set(0,0,1)}update(){let t=this.bodyA,e=this.bodyB,n=this.equationX,s=this.equationY,r=this.equationZ;t.quaternion.vmult(this.pivotA,n.ri),e.quaternion.vmult(this.pivotB,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),r.ri.copy(n.ri),r.rj.copy(n.rj)}},Su=class extends Ps{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-s,s),this.axisA=n.axisA?n.axisA.clone():new _(1,0,0),this.axisB=n.axisB?n.axisB.clone():new _(0,1,0),this.angle=typeof n.angle<"u"?n.angle:0}computeB(t){let e=this.a,n=this.b,s=this.axisA,r=this.axisB,o=JM,a=KM,l=this.jacobianElementA,c=this.jacobianElementB;s.cross(r,o),r.cross(s,a),l.rotational.copy(a),c.rotational.copy(o);let h=Math.cos(this.angle)-s.dot(r),d=this.computeGW(),u=this.computeGiMf();return-h*e-d*n-t*u}},JM=new _,KM=new _,Tu=class extends Ps{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-s,s),this.axisA=n.axisA?n.axisA.clone():new _(1,0,0),this.axisB=n.axisB?n.axisB.clone():new _(0,1,0),this.maxAngle=Math.PI/2}computeB(t){let e=this.a,n=this.b,s=this.axisA,r=this.axisB,o=QM,a=tw,l=this.jacobianElementA,c=this.jacobianElementB;s.cross(r,o),r.cross(s,a),l.rotational.copy(a),c.rotational.copy(o);let h=Math.cos(this.maxAngle)-s.dot(r),d=this.computeGW(),u=this.computeGiMf();return-h*e-d*n-t*u}},QM=new _,tw=new _,Sl=class extends Eu{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6,r=n.pivotA?n.pivotA.clone():new _,o=n.pivotB?n.pivotB.clone():new _;super(t,r,e,o,s),this.axisA=n.axisA?n.axisA.clone():new _,this.axisB=n.axisB?n.axisB.clone():new _,this.collideConnected=!!n.collideConnected,this.angle=typeof n.angle<"u"?n.angle:0;let a=this.coneEquation=new Su(t,e,n),l=this.twistEquation=new Tu(t,e,n);this.twistAngle=typeof n.twistAngle<"u"?n.twistAngle:0,a.maxForce=0,a.minForce=-s,l.maxForce=0,l.minForce=-s,this.equations.push(a,l)}update(){let t=this.bodyA,e=this.bodyB,n=this.coneEquation,s=this.twistEquation;super.update(),t.vectorToWorldFrame(this.axisA,n.axisA),e.vectorToWorldFrame(this.axisB,n.axisB),this.axisA.tangents(s.axisA,s.axisA),t.vectorToWorldFrame(s.axisA,s.axisA),this.axisB.tangents(s.axisB,s.axisB),e.vectorToWorldFrame(s.axisB,s.axisB),n.angle=this.angle,s.maxAngle=this.twistAngle}};new _;new _;var Zb=new _,jb=new _;var Jb=new _,Kb=new _,Tl=class extends Ps{constructor(t,e,n){super(t,e,-n,n),this.ri=new _,this.rj=new _,this.t=new _}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,s=this.rj,r=ew,o=nw,a=this.t;n.cross(a,r),s.cross(a,o);let l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);let h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}},ew=new _,nw=new _,ti=class i{constructor(t,e,n){n=wl.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=i.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};ti.idCounter=0;var Ei=class i{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=i.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};Ei.idCounter=0;var Qb=new _,tE=new _,eE=new _,nE=new _,iE=new _,sE=new _,rE=new _,oE=new _,aE=new _,lE=new _,cE=new _;var hE=new _,uE=new _;new _;new _;new _;var dE=new _,fE=new _,pE=new _;new An;new _;var mE=new _,gE=new _,yE=[new _(1,0,0),new _(0,1,0),new _(0,0,1)],xE=new _;var vE=new _,_E=new _,ME=new _;var wE=new _,bE=new _,EE=new _,SE=new _;var TE=new _,AE=new _,RE=new _;var So=class extends _t{constructor(t){if(super({type:_t.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new _);let n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,s){let r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){let l=o[a];n[l]=t[l]-r,s[l]=t[l]+r}}};var CE=new _,IE=new _;var PE=new _,NE=new _,LE=new _,DE=new _,BE=new _,FE=new _,UE=new _,Ns=class extends vl{constructor(t,e,n,s){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),s===void 0&&(s=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");let r=s,o=[],a=[],l=[],c=[],h=[],d=Math.cos,u=Math.sin;o.push(new _(-e*u(0),-n*.5,e*d(0))),c.push(0),o.push(new _(-t*u(0),n*.5,t*d(0))),h.push(1);for(let g=0;g<r;g++){let y=2*Math.PI/r*(g+1),m=2*Math.PI/r*(g+.5);g<r-1?(o.push(new _(-e*u(y),-n*.5,e*d(y))),c.push(2*g+2),o.push(new _(-t*u(y),n*.5,t*d(y))),h.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(r%2===1||g<r/2)&&a.push(new _(-u(m),0,d(m)))}l.push(c),a.push(new _(0,1,0));let f=[];for(let g=0;g<h.length;g++)f.push(h[h.length-g-1]);l.push(f),super({vertices:o,faces:l,axes:a}),this.type=_t.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=s}};var OE=new _;var zE=new _,HE=new _,kE=new _,VE=new _,GE=new _,WE=new _,qE=new _,XE=new _,YE=new _;var $E=new _,ZE=new mn;var jE=new _,JE=new mn,KE=new _,QE=new _,tS=new _,eS=new _,nS=new _,iS=new _,sS=new _,rS=new mn,oS=new _,aS=new ce,lS=new mn,Au=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},To=class extends Au{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t,d,u,f,g,y,m;if(a!==0)for(let v=0;v!==c;v++)l[v].updateSolveMassProperties();let p=sw,x=rw,w=iw;p.length=a,x.length=a,w.length=a;for(let v=0;v!==a;v++){let R=o[v];w[v]=0,x[v]=R.computeB(h),p[v]=1/R.computeC()}if(a!==0){for(let T=0;T!==c;T++){let A=l[T],I=A.vlambda,E=A.wlambda;I.set(0,0,0),E.set(0,0,0)}for(n=0;n!==s;n++){g=0;for(let T=0;T!==a;T++){let A=o[T];d=x[T],u=p[T],m=w[T],y=A.computeGWlambda(),f=u*(d-y-A.eps*m),m+f<A.minForce?f=A.minForce-m:m+f>A.maxForce&&(f=A.maxForce-m),w[T]+=f,g+=f>0?f:-f,A.addToWlambda(f)}if(g*g<r)break}for(let T=0;T!==c;T++){let A=l[T],I=A.velocity,E=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),I.vadd(A.vlambda,I),A.wlambda.vmul(A.angularFactor,A.wlambda),E.vadd(A.wlambda,E)}let v=o.length,R=1/h;for(;v--;)o[v].multiplier=w[v]*R}return n}},iw=[],sw=[],rw=[];var cS=Pt.STATIC;var Ru=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},Cu=class extends Ru{constructor(){super(...arguments),this.type=_}constructObject(){return new _}},_e={sphereSphere:_t.types.SPHERE,spherePlane:_t.types.SPHERE|_t.types.PLANE,boxBox:_t.types.BOX|_t.types.BOX,sphereBox:_t.types.SPHERE|_t.types.BOX,planeBox:_t.types.PLANE|_t.types.BOX,convexConvex:_t.types.CONVEXPOLYHEDRON,sphereConvex:_t.types.SPHERE|_t.types.CONVEXPOLYHEDRON,planeConvex:_t.types.PLANE|_t.types.CONVEXPOLYHEDRON,boxConvex:_t.types.BOX|_t.types.CONVEXPOLYHEDRON,sphereHeightfield:_t.types.SPHERE|_t.types.HEIGHTFIELD,boxHeightfield:_t.types.BOX|_t.types.HEIGHTFIELD,convexHeightfield:_t.types.CONVEXPOLYHEDRON|_t.types.HEIGHTFIELD,sphereParticle:_t.types.PARTICLE|_t.types.SPHERE,planeParticle:_t.types.PLANE|_t.types.PARTICLE,boxParticle:_t.types.BOX|_t.types.PARTICLE,convexParticle:_t.types.PARTICLE|_t.types.CONVEXPOLYHEDRON,cylinderCylinder:_t.types.CYLINDER,sphereCylinder:_t.types.SPHERE|_t.types.CYLINDER,planeCylinder:_t.types.PLANE|_t.types.CYLINDER,boxCylinder:_t.types.BOX|_t.types.CYLINDER,convexCylinder:_t.types.CONVEXPOLYHEDRON|_t.types.CYLINDER,heightfieldCylinder:_t.types.HEIGHTFIELD|_t.types.CYLINDER,particleCylinder:_t.types.PARTICLE|_t.types.CYLINDER,sphereTrimesh:_t.types.SPHERE|_t.types.TRIMESH,planeTrimesh:_t.types.PLANE|_t.types.TRIMESH},Iu=class{get[_e.sphereSphere](){return this.sphereSphere}get[_e.spherePlane](){return this.spherePlane}get[_e.boxBox](){return this.boxBox}get[_e.sphereBox](){return this.sphereBox}get[_e.planeBox](){return this.planeBox}get[_e.convexConvex](){return this.convexConvex}get[_e.sphereConvex](){return this.sphereConvex}get[_e.planeConvex](){return this.planeConvex}get[_e.boxConvex](){return this.boxConvex}get[_e.sphereHeightfield](){return this.sphereHeightfield}get[_e.boxHeightfield](){return this.boxHeightfield}get[_e.convexHeightfield](){return this.convexHeightfield}get[_e.sphereParticle](){return this.sphereParticle}get[_e.planeParticle](){return this.planeParticle}get[_e.boxParticle](){return this.boxParticle}get[_e.convexParticle](){return this.convexParticle}get[_e.cylinderCylinder](){return this.convexConvex}get[_e.sphereCylinder](){return this.sphereConvex}get[_e.planeCylinder](){return this.planeConvex}get[_e.boxCylinder](){return this.boxConvex}get[_e.convexCylinder](){return this.convexConvex}get[_e.heightfieldCylinder](){return this.heightfieldCylinder}get[_e.particleCylinder](){return this.particleCylinder}get[_e.sphereTrimesh](){return this.sphereTrimesh}get[_e.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Cu,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Rr(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;let l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let c=n.material||t.material,h=s.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){let n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial,c=l.friction,h=r.material||n.material,d=o.material||s.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){let u=c*(a.frictionGravity||a.gravity).length(),f=n.invMass+s.invMass;f>0&&(f=1/f);let g=this.frictionEquationPool,y=g.length?g.pop():new Tl(n,s,u*f),m=g.length?g.pop():new Tl(n,s,u*f);return y.bi=m.bi=n,y.bj=m.bj=s,y.minForce=m.minForce=-u*f,y.maxForce=m.maxForce=u*f,y.ri.copy(t.ri),y.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(y.t,m.t),y.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),y.enabled=m.enabled=t.enabled,e.push(y,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Cs.setZero(),Tr.setZero(),Ar.setZero();let r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Cs.vadd(e.ni,Cs),Tr.vadd(e.ri,Tr),Ar.vadd(e.rj,Ar)):(Cs.vsub(e.ni,Cs),Tr.vadd(e.rj,Tr),Ar.vadd(e.ri,Ar));let o=1/t;Tr.scale(o,n.ri),Ar.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Cs.normalize(),Cs.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;let l=lw,c=cw,h=ow,d=aw;for(let u=0,f=t.length;u!==f;u++){let g=t[u],y=e[u],m=null;g.material&&y.material&&(m=n.getContactMaterial(g.material,y.material)||null);let p=g.type&Pt.KINEMATIC&&y.type&Pt.STATIC||g.type&Pt.STATIC&&y.type&Pt.KINEMATIC||g.type&Pt.KINEMATIC&&y.type&Pt.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],l),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);let w=g.shapes[x];for(let v=0;v<y.shapes.length;v++){y.quaternion.mult(y.shapeOrientations[v],c),y.quaternion.vmult(y.shapeOffsets[v],d),d.vadd(y.position,d);let R=y.shapes[v];if(!(w.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&w.collisionFilterGroup)||h.distanceTo(d)>w.boundingSphereRadius+R.boundingSphereRadius)continue;let T=null;w.material&&R.material&&(T=n.getContactMaterial(w.material,R.material)||null),this.currentContactMaterial=T||m||n.defaultContactMaterial;let A=w.type|R.type,I=this[A];if(I){let E=!1;w.type<R.type?E=I.call(this,w,R,h,d,l,c,g,y,w,R,p):E=I.call(this,R,w,d,h,c,l,y,g,w,R,p),E&&p&&(n.shapeOverlapKeeper.set(w.id,R.id),n.bodyOverlapKeeper.set(g.id,y.id))}}}}}sphereSphere(t,e,n,s,r,o,a,l,c,h,d){if(d)return n.distanceSquared(s)<(t.radius+e.radius)**2;let u=this.createContactEquation(a,l,t,e,c,h);s.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(s,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,l,c,h,d){let u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(s,ml),u.ni.scale(u.ni.dot(ml),up),ml.vsub(up,u.rj),-ml.dot(u.ni)<=t.radius){if(d)return!0;let f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(s,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,d)}sphereBox(t,e,n,s,r,o,a,l,c,h,d){let u=this.v3pool,f=Bw;n.vsub(s,gl),e.getSideNormals(f,o);let g=t.radius,y=!1,m=Uw,p=Ow,x=zw,w=null,v=0,R=0,T=0,A=null;for(let L=0,j=f.length;L!==j&&y===!1;L++){let V=Nw;V.copy(f[L]);let J=V.length();V.normalize();let lt=gl.dot(V);if(lt<J+g&&lt>0){let mt=Lw,ot=Dw;mt.copy(f[(L+1)%3]),ot.copy(f[(L+2)%3]);let Jt=mt.length(),Y=ot.length();mt.normalize(),ot.normalize();let it=gl.dot(mt),Et=gl.dot(ot);if(it<Jt&&it>-Jt&&Et<Y&&Et>-Y){let ut=Math.abs(lt-J-g);if((A===null||ut<A)&&(A=ut,R=it,T=Et,w=J,m.copy(V),p.copy(mt),x.copy(ot),v++,d))return!0}}}if(v){y=!0;let L=this.createContactEquation(a,l,t,e,c,h);m.scale(-g,L.ri),L.ni.copy(m),L.ni.negate(L.ni),m.scale(w,m),p.scale(R,p),m.vadd(p,m),x.scale(T,x),m.vadd(x,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),L.rj.vadd(s,L.rj),L.rj.vsub(l.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}let I=u.get(),E=Fw;for(let L=0;L!==2&&!y;L++)for(let j=0;j!==2&&!y;j++)for(let V=0;V!==2&&!y;V++)if(I.set(0,0,0),L?I.vadd(f[0],I):I.vsub(f[0],I),j?I.vadd(f[1],I):I.vsub(f[1],I),V?I.vadd(f[2],I):I.vsub(f[2],I),s.vadd(I,E),E.vsub(n,E),E.lengthSquared()<g*g){if(d)return!0;y=!0;let J=this.createContactEquation(a,l,t,e,c,h);J.ri.copy(E),J.ri.normalize(),J.ni.copy(J.ri),J.ri.scale(g,J.ri),J.rj.copy(I),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),J.rj.vadd(s,J.rj),J.rj.vsub(l.position,J.rj),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}u.release(I),I=null;let M=u.get(),P=u.get(),k=u.get(),N=u.get(),B=u.get(),z=f.length;for(let L=0;L!==z&&!y;L++)for(let j=0;j!==z&&!y;j++)if(L%3!==j%3){f[j].cross(f[L],M),M.normalize(),f[L].vadd(f[j],P),k.copy(n),k.vsub(P,k),k.vsub(s,k);let V=k.dot(M);M.scale(V,N);let J=0;for(;J===L%3||J===j%3;)J++;B.copy(n),B.vsub(N,B),B.vsub(P,B),B.vsub(s,B);let lt=Math.abs(V),mt=B.length();if(lt<f[J].length()&&mt<g){if(d)return!0;y=!0;let ot=this.createContactEquation(a,l,t,e,c,h);P.vadd(N,ot.rj),ot.rj.copy(ot.rj),B.negate(ot.ni),ot.ni.normalize(),ot.ri.copy(ot.rj),ot.ri.vadd(s,ot.ri),ot.ri.vsub(n,ot.ri),ot.ri.normalize(),ot.ri.scale(g,ot.ri),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),ot.rj.vadd(s,ot.rj),ot.rj.vsub(l.position,ot.rj),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult)}}u.release(M,P,k,N,B)}planeBox(t,e,n,s,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,d)}convexConvex(t,e,n,s,r,o,a,l,c,h,d,u,f){let g=t1;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,g,u,f)){let y=[],m=e1;t.clipAgainstHull(n,r,e,s,o,g,-100,100,y);let p=0;for(let x=0;x!==y.length;x++){if(d)return!0;let w=this.createContactEquation(a,l,t,e,c,h),v=w.ri,R=w.rj;g.negate(w.ni),y[x].normal.negate(m),m.scale(y[x].depth,m),y[x].point.vadd(m,v),R.copy(y[x].point),v.vsub(n,v),R.vsub(s,R),v.vadd(n,v),v.vsub(a.position,v),R.vadd(s,R),R.vsub(l.position,R),this.result.push(w),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,s,r,o,a,l,c,h,d){let u=this.v3pool;n.vsub(s,Hw);let f=e.faceNormals,g=e.faces,y=e.vertices,m=t.radius,p=!1;for(let x=0;x!==y.length;x++){let w=y[x],v=Ww;o.vmult(w,v),s.vadd(v,v);let R=Gw;if(v.vsub(n,R),R.lengthSquared()<m*m){if(d)return!0;p=!0;let T=this.createContactEquation(a,l,t,e,c,h);T.ri.copy(R),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(m,T.ri),v.vsub(s,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(s,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let x=0,w=g.length;x!==w&&p===!1;x++){let v=f[x],R=g[x],T=qw;o.vmult(v,T);let A=Xw;o.vmult(y[R[0]],A),A.vadd(s,A);let I=Yw;T.scale(-m,I),n.vadd(I,I);let E=$w;I.vsub(A,E);let M=E.dot(T),P=Zw;if(n.vsub(A,P),M<0&&P.dot(T)>0){let k=[];for(let N=0,B=R.length;N!==B;N++){let z=u.get();o.vmult(y[R[N]],z),s.vadd(z,z),k.push(z)}if(Pw(k,T,n)){if(d)return!0;p=!0;let N=this.createContactEquation(a,l,t,e,c,h);T.scale(-m,N.ri),T.negate(N.ni);let B=u.get();T.scale(-M,B);let z=u.get();T.scale(-m,z),n.vsub(s,N.rj),N.rj.vadd(z,N.rj),N.rj.vadd(B,N.rj),N.rj.vadd(s,N.rj),N.rj.vsub(l.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),u.release(B),u.release(z),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let L=0,j=k.length;L!==j;L++)u.release(k[L]);return}else for(let N=0;N!==R.length;N++){let B=u.get(),z=u.get();o.vmult(y[R[(N+1)%R.length]],B),o.vmult(y[R[(N+2)%R.length]],z),s.vadd(B,B),s.vadd(z,z);let L=kw;z.vsub(B,L);let j=Vw;L.unit(j);let V=u.get(),J=u.get();n.vsub(B,J);let lt=J.dot(j);j.scale(lt,V),V.vadd(B,V);let mt=u.get();if(V.vsub(n,mt),lt>0&&lt*lt<L.lengthSquared()&&mt.lengthSquared()<m*m){if(d)return!0;let ot=this.createContactEquation(a,l,t,e,c,h);V.vsub(s,ot.rj),V.vsub(n,ot.ni),ot.ni.normalize(),ot.ni.scale(m,ot.ri),ot.rj.vadd(s,ot.rj),ot.rj.vsub(l.position,ot.rj),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult);for(let Jt=0,Y=k.length;Jt!==Y;Jt++)u.release(k[Jt]);u.release(B),u.release(z),u.release(V),u.release(mt),u.release(J);return}u.release(B),u.release(z),u.release(V),u.release(mt),u.release(J)}for(let N=0,B=k.length;N!==B;N++)u.release(k[N])}}}planeConvex(t,e,n,s,r,o,a,l,c,h,d){let u=jw,f=Jw;f.set(0,0,1),r.vmult(f,f);let g=0,y=Kw;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),s.vadd(u,u),u.vsub(n,y),f.dot(y)<=0){if(d)return!0;let x=this.createContactEquation(a,l,t,e,c,h),w=Qw;f.scale(f.dot(y),w),u.vsub(w,w),w.vsub(n,x.ri),x.ni.copy(f),u.vsub(s,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(s,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,d)}sphereHeightfield(t,e,n,s,r,o,a,l,c,h,d){let u=e.data,f=t.radius,g=e.elementSize,y=f1,m=d1;ce.pointToLocalFrame(s,o,n,m);let p=Math.floor((m.x-f)/g)-1,x=Math.ceil((m.x+f)/g)+1,w=Math.floor((m.y-f)/g)-1,v=Math.ceil((m.y+f)/g)+1;if(x<0||v<0||p>u.length||w>u[0].length)return;p<0&&(p=0),x<0&&(x=0),w<0&&(w=0),v<0&&(v=0),p>=u.length&&(p=u.length-1),x>=u.length&&(x=u.length-1),v>=u[0].length&&(v=u[0].length-1),w>=u[0].length&&(w=u[0].length-1);let R=[];e.getRectMinMax(p,w,x,v,R);let T=R[0],A=R[1];if(m.z-f>A||m.z+f<T)return;let I=this.result;for(let E=p;E<x;E++)for(let M=w;M<v;M++){let P=I.length,k=!1;if(e.getConvexTrianglePillar(E,M,!1),ce.pointToWorldFrame(s,o,e.pillarOffset,y),n.distanceTo(y)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,y,r,o,a,l,t,e,d)),d&&k||(e.getConvexTrianglePillar(E,M,!0),ce.pointToWorldFrame(s,o,e.pillarOffset,y),n.distanceTo(y)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,y,r,o,a,l,t,e,d)),d&&k))return!0;if(I.length-P>2)return}}boxHeightfield(t,e,n,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,d)}convexHeightfield(t,e,n,s,r,o,a,l,c,h,d){let u=e.data,f=e.elementSize,g=t.boundingSphereRadius,y=h1,m=u1,p=c1;ce.pointToLocalFrame(s,o,n,p);let x=Math.floor((p.x-g)/f)-1,w=Math.ceil((p.x+g)/f)+1,v=Math.floor((p.y-g)/f)-1,R=Math.ceil((p.y+g)/f)+1;if(w<0||R<0||x>u.length||v>u[0].length)return;x<0&&(x=0),w<0&&(w=0),v<0&&(v=0),R<0&&(R=0),x>=u.length&&(x=u.length-1),w>=u.length&&(w=u.length-1),R>=u[0].length&&(R=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);let T=[];e.getRectMinMax(x,v,w,R,T);let A=T[0],I=T[1];if(!(p.z-g>I||p.z+g<A))for(let E=x;E<w;E++)for(let M=v;M<R;M++){let P=!1;if(e.getConvexTrianglePillar(E,M,!1),ce.pointToWorldFrame(s,o,e.pillarOffset,y),n.distanceTo(y)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,y,r,o,a,l,null,null,d,m,null)),d&&P||(e.getConvexTrianglePillar(E,M,!0),ce.pointToWorldFrame(s,o,e.pillarOffset,y),n.distanceTo(y)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,y,r,o,a,l,null,null,d,m,null)),d&&P))return!0}}sphereParticle(t,e,n,s,r,o,a,l,c,h,d){let u=r1;if(u.set(0,0,1),s.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;let g=this.createContactEquation(l,a,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,l,c,h,d){let u=n1;u.set(0,0,1),a.quaternion.vmult(u,u);let f=i1;if(s.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let y=this.createContactEquation(l,a,e,t,c,h);y.ni.copy(u),y.ni.negate(y.ni),y.ri.set(0,0,0);let m=s1;u.scale(u.dot(s),m),s.vsub(m,m),y.rj.copy(m),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,d)}convexParticle(t,e,n,s,r,o,a,l,c,h,d){let u=-1,f=a1,g=l1,y=null,m=o1;if(m.copy(s),m.vsub(n,m),r.conjugate(dp),dp.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,x=t.faces.length;p!==x;p++){let w=[t.worldVertices[t.faces[p][0]]],v=t.worldFaceNormals[p];s.vsub(w[0],fp);let R=-v.dot(fp);if(y===null||Math.abs(R)<Math.abs(y)){if(d)return!0;y=R,u=p,f.copy(v)}}if(u!==-1){let p=this.createContactEquation(l,a,e,t,c,h);f.scale(y,g),g.vadd(s,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);let x=p.ri,w=p.rj;x.vadd(s,x),x.vsub(l.position,x),w.vadd(n,w),w.vsub(a.position,w),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,l,c,h,d){return this.convexHeightfield(e,t,s,n,o,r,l,a,c,h,d)}particleCylinder(t,e,n,s,r,o,a,l,c,h,d){return this.convexParticle(e,t,s,n,o,r,l,a,c,h,d)}sphereTrimesh(t,e,n,s,r,o,a,l,c,h,d){let u=yw,f=xw,g=vw,y=_w,m=Mw,p=ww,x=Tw,w=gw,v=pw,R=Aw;ce.pointToLocalFrame(s,o,n,m);let T=t.radius;x.lowerBound.set(m.x-T,m.y-T,m.z-T),x.upperBound.set(m.x+T,m.y+T,m.z+T),e.getTrianglesInAABB(x,R);let A=mw,I=t.radius*t.radius;for(let N=0;N<R.length;N++)for(let B=0;B<3;B++)if(e.getVertex(e.indices[R[N]*3+B],A),A.vsub(m,v),v.lengthSquared()<=I){if(w.copy(A),ce.pointToWorldFrame(s,o,w,A),A.vsub(n,v),d)return!0;let z=this.createContactEquation(a,l,t,e,c,h);z.ni.copy(v),z.ni.normalize(),z.ri.copy(z.ni),z.ri.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),z.rj.copy(A),z.rj.vsub(l.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}for(let N=0;N<R.length;N++)for(let B=0;B<3;B++){e.getVertex(e.indices[R[N]*3+B],u),e.getVertex(e.indices[R[N]*3+(B+1)%3],f),f.vsub(u,g),m.vsub(f,p);let z=p.dot(g);m.vsub(u,p);let L=p.dot(g);if(L>0&&z<0&&(m.vsub(u,p),y.copy(g),y.normalize(),L=p.dot(y),y.scale(L,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;let V=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),ce.pointToWorldFrame(s,o,p,p),p.vsub(l.position,V.rj),ce.vectorToWorldFrame(o,V.ni,V.ni),ce.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}let E=bw,M=Ew,P=Sw,k=fw;for(let N=0,B=R.length;N!==B;N++){e.getTriangleVertices(R[N],E,M,P),e.getNormal(R[N],k),m.vsub(E,p);let z=p.dot(k);if(k.scale(z,p),m.vsub(p,p),z=p.distanceTo(m),An.pointInTriangle(p,E,M,P)&&z<t.radius){if(d)return!0;let L=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,L.ni),L.ni.normalize(),L.ni.scale(t.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),ce.pointToWorldFrame(s,o,p,p),p.vsub(l.position,L.rj),ce.vectorToWorldFrame(o,L.ni,L.ni),ce.vectorToWorldFrame(o,L.ri,L.ri),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}}R.length=0}planeTrimesh(t,e,n,s,r,o,a,l,c,h,d){let u=new _,f=hw;f.set(0,0,1),r.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);let y=new _;y.copy(u),ce.pointToWorldFrame(s,o,y,u);let m=uw;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;let x=this.createContactEquation(a,l,t,e,c,h);x.ni.copy(f);let w=dw;f.scale(m.dot(f),w),u.vsub(w,w),x.ri.copy(w),x.ri.vsub(a.position,x.ri),x.rj.copy(u),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}},Cs=new _,Tr=new _,Ar=new _,ow=new _,aw=new _,lw=new De,cw=new De,hw=new _,uw=new _,dw=new _,fw=new _,pw=new _;new _;var mw=new _,gw=new _,yw=new _,xw=new _,vw=new _,_w=new _,Mw=new _,ww=new _,bw=new _,Ew=new _,Sw=new _,Tw=new mn,Aw=[],ml=new _,up=new _,Rw=new _,Cw=new _,Iw=new _;function Pw(i,t,e){let n=null,s=i.length;for(let r=0;r!==s;r++){let o=i[r],a=Rw;i[(r+1)%s].vsub(o,a);let l=Cw;a.cross(t,l);let c=Iw;e.vsub(o,c);let h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var gl=new _,Nw=new _,Lw=new _,Dw=new _,Bw=[new _,new _,new _,new _,new _,new _],Fw=new _,Uw=new _,Ow=new _,zw=new _,Hw=new _,kw=new _,Vw=new _,Gw=new _,Ww=new _,qw=new _,Xw=new _,Yw=new _,$w=new _,Zw=new _;new _;new _;var jw=new _,Jw=new _,Kw=new _,Qw=new _,t1=new _,e1=new _,n1=new _,i1=new _,s1=new _,r1=new _,dp=new De,o1=new _;new _;var a1=new _,fp=new _,l1=new _,c1=new _,h1=new _,u1=[0],d1=new _,f1=new _,Al=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),s=this.current,r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,s=this.previous,r=n.length,o=s.length,a=0;for(let l=0;l<r;l++){let c=!1,h=n[l];for(;h>s[a];)a++;c=h===s[a],c||pp(t,h)}a=0;for(let l=0;l<o;l++){let c=!1,h=s[l];for(;h>n[a];)a++;c=n[a]===h,c||pp(e,h)}}};function pp(i,t){i.push((t&4294901760)>>16,t&65535)}var Mu=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`,Pu=class{constructor(){this.data={keys:[]}}get(t,e){let n=Mu(t,e);return this.data[n]}set(t,e,n){let s=Mu(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){let n=Mu(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},Rl=class extends xl{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new _,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new _,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new bu,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new To,this.constraints=[],this.narrowphase=new Iu(this),this.collisionMatrix=new yl,this.collisionMatrixPrevious=new yl,this.bodyOverlapKeeper=new Al,this.shapeOverlapKeeper=new Al,this.contactmaterials=[],this.contactMaterialTable=new Pu,this.defaultMaterial=new Ei("default"),this.defaultContactMaterial=new ti(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Cr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=An.ALL,n.from=t,n.to=e,n.callback=s,wu.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=An.ANY,n.from=t,n.to=e,n.result=s,wu.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=An.CLOSEST,n.from=t,n.to=e,n.result=s,wu.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Pt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let s=e[n].shapes;for(let r=0;r<s.length;r++){let o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=Le.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let s=Le.now(),r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Le.now()-s>t*1e3)););this.accumulator=this.accumulator%t;let o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=x1,s=v1,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=Pt.DYNAMIC,u=-1/0,f=this.constraints,g=y1;l.length();let y=l.x,m=l.y,p=l.z,x=0;for(c&&(u=Le.now()),x=0;x!==r;x++){let N=o[x];if(N.type===d){let B=N.force,z=N.mass;B.x+=z*y,B.y+=z*m,B.z+=z*p}}for(let N=0,B=this.subsystems.length;N!==B;N++)this.subsystems[N].update();c&&(u=Le.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(h.broadphase=Le.now()-u);let w=f.length;for(x=0;x!==w;x++){let N=f[x];if(!N.collideConnected)for(let B=n.length-1;B>=0;B-=1)(N.bodyA===n[B]&&N.bodyB===s[B]||N.bodyB===n[B]&&N.bodyA===s[B])&&(n.splice(B,1),s.splice(B,1))}this.collisionMatrixTick(),c&&(u=Le.now());let v=g1,R=e.length;for(x=0;x!==R;x++)v.push(e[x]);e.length=0;let T=this.frictionEquations.length;for(x=0;x!==T;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,v,this.frictionEquations,g),c&&(h.narrowphase=Le.now()-u),c&&(u=Le.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);let A=e.length;for(let N=0;N!==A;N++){let B=e[N],z=B.bi,L=B.bj,j=B.si,V=B.sj,J;if(z.material&&L.material?J=this.getContactMaterial(z.material,L.material)||this.defaultContactMaterial:J=this.defaultContactMaterial,J.friction,z.material&&L.material&&(z.material.friction>=0&&L.material.friction>=0&&z.material.friction*L.material.friction,z.material.restitution>=0&&L.material.restitution>=0&&(B.restitution=z.material.restitution*L.material.restitution)),a.addEquation(B),z.allowSleep&&z.type===Pt.DYNAMIC&&z.sleepState===Pt.SLEEPING&&L.sleepState===Pt.AWAKE&&L.type!==Pt.STATIC){let lt=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),mt=L.sleepSpeedLimit**2;lt>=mt*2&&(z.wakeUpAfterNarrowphase=!0)}if(L.allowSleep&&L.type===Pt.DYNAMIC&&L.sleepState===Pt.SLEEPING&&z.sleepState===Pt.AWAKE&&z.type!==Pt.STATIC){let lt=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),mt=z.sleepSpeedLimit**2;lt>=mt*2&&(L.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(z,L,!0),this.collisionMatrixPrevious.get(z,L)||(wo.body=L,wo.contact=B,z.dispatchEvent(wo),wo.body=z,L.dispatchEvent(wo)),this.bodyOverlapKeeper.set(z.id,L.id),this.shapeOverlapKeeper.set(j.id,V.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Le.now()-u,u=Le.now()),x=0;x!==r;x++){let N=o[x];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(w=f.length,x=0;x!==w;x++){let N=f[x];N.update();for(let B=0,z=N.equations.length;B!==z;B++){let L=N.equations[B];a.addEquation(L)}}a.solve(t,this),c&&(h.solve=Le.now()-u),a.removeAllEquations();let I=Math.pow;for(x=0;x!==r;x++){let N=o[x];if(N.type&d){let B=I(1-N.linearDamping,t),z=N.velocity;z.scale(B,z);let L=N.angularVelocity;if(L){let j=I(1-N.angularDamping,t);L.scale(j,L)}}}this.dispatchEvent(m1),c&&(u=Le.now());let M=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(x=0;x!==r;x++)o[x].integrate(t,M,P);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Le.now()-u),this.stepnumber+=1,this.dispatchEvent(p1);let k=!0;if(this.allowSleep)for(k=!1,x=0;x!==r;x++){let N=o[x];N.sleepTick(this.time),N.sleepState!==Pt.SLEEPING&&(k=!0)}this.hasActiveBodies=k}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(_i,Mi),t){for(let r=0,o=_i.length;r<o;r+=2)bo.bodyA=this.getBodyById(_i[r]),bo.bodyB=this.getBodyById(_i[r+1]),this.dispatchEvent(bo);bo.bodyA=bo.bodyB=null}if(e){for(let r=0,o=Mi.length;r<o;r+=2)Eo.bodyA=this.getBodyById(Mi[r]),Eo.bodyB=this.getBodyById(Mi[r+1]),this.dispatchEvent(Eo);Eo.bodyA=Eo.bodyB=null}_i.length=Mi.length=0;let n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(_i,Mi),n){for(let r=0,o=_i.length;r<o;r+=2){let a=this.getShapeById(_i[r]),l=this.getShapeById(_i[r+1]);wi.shapeA=a,wi.shapeB=l,a&&(wi.bodyA=a.body),l&&(wi.bodyB=l.body),this.dispatchEvent(wi)}wi.bodyA=wi.bodyB=wi.shapeA=wi.shapeB=null}if(s){for(let r=0,o=Mi.length;r<o;r+=2){let a=this.getShapeById(Mi[r]),l=this.getShapeById(Mi[r+1]);bi.shapeA=a,bi.shapeB=l,a&&(bi.bodyA=a.body),l&&(bi.bodyB=l.body),this.dispatchEvent(bi)}bi.bodyA=bi.bodyB=bi.shapeA=bi.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}};new mn;var wu=new An,Le=globalThis.performance||{};if(!Le.now){let i=Date.now();Le.timing&&Le.timing.navigationStart&&(i=Le.timing.navigationStart),Le.now=()=>Date.now()-i}new _;var p1={type:"postStep"},m1={type:"preStep"},wo={type:Pt.COLLIDE_EVENT_NAME,body:null,contact:null},g1=[],y1=[],x1=[],v1=[],_i=[],Mi=[],bo={type:"beginContact",bodyA:null,bodyB:null},Eo={type:"endContact",bodyA:null,bodyB:null},wi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},bi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var Cl=Object.freeze([{id:"cleaver",name:"\u0422\u0435\u0441\u0430\u043A",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"cleaver",damage:42,range:1.75,cooldown:.62,swingDuration:.46,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:1.15,description:"\u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0442\u0435\u0441\u0430\u043A \u0441 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u043C \u0448\u0438\u0440\u043E\u043A\u0438\u043C \u043B\u0435\u0437\u0432\u0438\u0435\u043C. \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0440\u0443\u0431\u044F\u0449\u0438\u0439 \u0437\u0430\u043C\u0430\u0445.",sound:{frequency:350,filter:760,duration:.18,noise:.14,bass:.025,swing:360,impact:115}},{id:"sledgehammer",name:"\u041A\u0443\u0432\u0430\u043B\u0434\u0430",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"sledgehammer",damage:68,range:1.95,cooldown:.9,swingDuration:.72,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:4.6,description:"\u0414\u0432\u0443\u0440\u0443\u0447\u043D\u0430\u044F \u043A\u0443\u0432\u0430\u043B\u0434\u0430: \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0439, \u043D\u043E \u043C\u043E\u0449\u043D\u044B\u0439 \u0443\u0434\u0430\u0440 \u0438 \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u0438\u043C\u043F\u0443\u043B\u044C\u0441 ragdoll.",sound:{frequency:105,filter:390,duration:.28,noise:.24,bass:.11,swing:145,impact:72}},{id:"nail-bat",name:"\u0411\u0438\u0442\u0430 \u0441 \u0433\u0432\u043E\u0437\u0434\u044F\u043C\u0438",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"nailBat",damage:50,range:1.9,cooldown:.74,swingDuration:.56,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:2.1,description:"\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u0431\u0438\u0442\u0430 \u0441 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0433\u0432\u043E\u0437\u0434\u044F\u043C\u0438 \u0438 \u0440\u0430\u0437\u043C\u0430\u0448\u0438\u0441\u0442\u043E\u0439 \u0430\u0442\u0430\u043A\u043E\u0439.",sound:{frequency:185,filter:520,duration:.22,noise:.2,bass:.055,swing:205,impact:96}},{id:"pm",name:"\u041F\u041C (\u041C\u0430\u043A\u0430\u0440\u043E\u0432)",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"pm",damage:24,range:38,cooldown:.29,magazineSize:8,reserve:40,reloadDuration:1.1,automatic:!1,weight:.81,description:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:108,filter:1450,duration:.16,noise:.82,bass:.12,waveform:"triangle"}},{id:"tt",name:"\u0422\u0422",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"tt",damage:31,range:48,cooldown:.31,magazineSize:8,reserve:40,reloadDuration:1.25,automatic:!1,weight:.85,description:"\u0422\u0443\u043B\u044C\u0441\u043A\u0438\u0439 \u0422\u043E\u043A\u0430\u0440\u0435\u0432 \u0441 \u0434\u043B\u0438\u043D\u043D\u044B\u043C \u0441\u0442\u0432\u043E\u043B\u043E\u043C. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:142,filter:1840,duration:.2,noise:.91,bass:.16,waveform:"sawtooth"}},{id:"glock-17",name:"Glock 17",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"glock",damage:22,range:42,cooldown:.17,magazineSize:17,reserve:68,reloadDuration:1,automatic:!1,weight:.71,description:"\u041B\u0451\u0433\u043A\u0438\u0439 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043D\u044B\u0439 \u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442. \u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 17 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:122,filter:2200,duration:.135,noise:.74,bass:.09,waveform:"square"}},{id:"ak-47",name:"\u0410\u041A-47",category:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u044B",type:"rifle",model:"ak",damage:34,range:58,cooldown:.105,magazineSize:30,reserve:90,reloadDuration:1.35,automatic:!0,weight:3.8,description:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442 \u0441 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C \u0446\u0435\u0432\u044C\u0451\u043C. \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0433\u043E\u043D\u044C, \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 30 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:86,filter:980,duration:.22,noise:1,bass:.22,waveform:"sawtooth"}},{id:"m4a1",name:"M4A1",category:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u044B",type:"rifle",model:"m4",damage:29,range:62,cooldown:.092,magazineSize:30,reserve:120,reloadDuration:1.25,automatic:!0,weight:3.4,description:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442 \u0441 \u043F\u043B\u0430\u043D\u043A\u0430\u043C\u0438 \u0438 \u0441\u043A\u043B\u0430\u0434\u043D\u044B\u043C \u043F\u0440\u0438\u043A\u043B\u0430\u0434\u043E\u043C. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 30 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:98,filter:1320,duration:.175,noise:.9,bass:.18,waveform:"triangle"}},{id:"pump-shotgun",name:"\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A (\u043F\u043E\u043C\u043F\u043E\u0432\u044B\u0439)",category:"\u0422\u044F\u0436\u0451\u043B\u043E\u0435",type:"shotgun",model:"shotgun",damage:11,pellets:8,spread:.018,range:34,cooldown:.72,magazineSize:8,reserve:32,reloadDuration:1.65,automatic:!1,weight:3.5,description:"\u041F\u043E\u043C\u043F\u043E\u0432\u044B\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A: 8 \u0434\u0440\u043E\u0431\u0438\u043D \u0437\u0430 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u0442\u0440\u0443\u0431\u0447\u0430\u0442\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:70,filter:720,duration:.31,noise:1.05,bass:.28,waveform:"sawtooth"}},{id:"shovel",name:"\u041B\u043E\u043F\u0430\u0442\u0430",category:"\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",type:"tool",model:"shovel",damage:24,range:1.8,cooldown:.82,swingDuration:.64,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:3.6,description:"\u0421\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0448\u0442\u044B\u043A\u043E\u0432\u0430\u044F \u043B\u043E\u043F\u0430\u0442\u0430 \u0441 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C \u0447\u0435\u0440\u0435\u043D\u043A\u043E\u043C. \u0415\u044E \u043C\u043E\u0436\u043D\u043E \u0447\u0435\u0440\u043F\u0430\u0442\u044C \u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u044C \u0441\u043D\u0435\u0433.",sound:{frequency:125,filter:620,duration:.24,noise:.23,bass:.065,swing:230,impact:92}}]),Ls=new Map(Cl.map(i=>[i.id,i]));function wp(i){return{magazine:i.magazineSize===null?null:i.magazineSize,reserve:i.magazineSize===null?0:i.reserve}}function bp(i,t){return i.magazineSize===null?!0:!t||t.magazine<=0?!1:(t.magazine--,!0)}function Ep(i,t){if(i.magazineSize===null||!t||t.reserve<=0||t.magazine>=i.magazineSize)return 0;let e=Math.min(i.magazineSize-t.magazine,t.reserve);return t.magazine+=e,t.reserve-=e,e}function Sp(i,t,e="torso",n=1){if(!i||!t)return{damage:0,health:i?.health??0,lethal:!1};let s=e==="head"?1.65:["handL","handR","footL","footR"].includes(e)?.7:1,r=Math.max(1,Math.round(t.damage*s*n));return i.health=Math.max(0,(Number.isFinite(i.health)?i.health:100)-r),i.health===0&&(i.dead=!0),{damage:r,health:i.health,lethal:i.dead===!0}}function Tp(i,t){return i.intersectObjects(t,!0)}function Ap(i,t=0,e=.28){if(t>0)return{ok:!1,reason:"already-carrying",amount:0};if(!i||!Number.isFinite(i.amount)||i.amount<=0)return{ok:!1,reason:"empty",amount:0};let n=Math.min(Math.max(0,e),i.amount);return i.amount=Math.max(0,i.amount-n),{ok:n>0,reason:n>0?null:"empty",amount:n}}function Rp(i,t){return!Number.isFinite(i)||i<=0||!t||!Number.isFinite(t.x)||!Number.isFinite(t.z)?{ok:!1,pile:null,remaining:Math.max(0,Number(i)||0)}:{ok:!0,pile:{x:t.x,z:t.z,amount:i},remaining:0}}function Cp(i,t){return i*(t>0?.72:1)}function Ip(i,t,e){let n=e?5.5:-.36;return Math.max(0,Math.min(100,i+Math.max(0,t)*n))}var Ci=i=>i?.type==="melee"||i?.type==="tool",tt=i=>document.getElementById(i),Po=tt("game"),Vp=matchMedia("(pointer: coarse)").matches,Qe;try{Qe=new co({canvas:Po,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(i){throw document.body.innerHTML='<div style="padding:24px;color:#e4eee9;font:16px Arial">\u0414\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043F\u043E\u043B\u0438\u0433\u043E\u043D\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u044B\u0439 WebGL. \u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u0447\u0442\u043E WebView \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435.</div>',i}Qe.setPixelRatio(Math.min(window.devicePixelRatio||1,Vp?1.35:1.7));Qe.setSize(window.innerWidth,window.innerHeight,!1);Qe.outputColorSpace=Oe;Qe.toneMapping=ll;Qe.toneMappingExposure=1.16;Qe.shadowMap.enabled=!0;Qe.shadowMap.type=ru;var Me=new ho;Me.background=new Yt(8886171);Me.fog=new Za(8886171,.018);var Ve=new He(74,window.innerWidth/window.innerHeight,.06,70);Ve.rotation.order="YXZ";Me.add(Ve);var Zt=new Rl({gravity:new _(0,-9.82,0),allowSleep:!0});Zt.broadphase=new Ml(Zt);Zt.solver=new To;Zt.solver.iterations=12;Zt.solver.tolerance=.001;Zt.defaultContactMaterial.friction=.62;Zt.defaultContactMaterial.restitution=.08;Zt.defaultContactMaterial.contactEquationStiffness=1e7;Zt.defaultContactMaterial.contactEquationRelaxation=3;var ju=new Ei("concrete"),ko=new Ei("test-props"),Wl=new Ei("operator"),Gp=new Ei("mannequin"),Wp=1,Vo=2,qp=4,Xp=8,ql=Wp|Vo|qp|Xp;Zt.addContactMaterial(new ti(ju,ko,{friction:.75,restitution:.06,contactEquationStiffness:1e7,contactEquationRelaxation:3}));Zt.addContactMaterial(new ti(ko,ko,{friction:.55,restitution:.09}));Zt.addContactMaterial(new ti(Wl,ju,{friction:0,restitution:0}));Zt.addContactMaterial(new ti(Wl,ko,{friction:.18,restitution:0}));Zt.addContactMaterial(new ti(Wl,Gp,{friction:.35,restitution:.02}));var Ni=[],Br=[],Yp=[],Fr=[],$p=[],M1=[],Hu=null;function Zp(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function w1(i,t,e,n){let r=document.createElement("canvas");r.width=r.height=512;let o=r.getContext("2d",{willReadFrequently:!0}),a=[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],l=Zp(t),c=o.createImageData(512,512);for(let d=0;d<c.data.length;d+=4){let u=(l()-.5)*20;c.data[d]=Math.max(0,Math.min(255,a[0]+u-2)),c.data[d+1]=Math.max(0,Math.min(255,a[1]+u)),c.data[d+2]=Math.max(0,Math.min(255,a[2]+u+4)),c.data[d+3]=255}o.putImageData(c,0,0);for(let d=0;d<95;d++){let u=l()*512,f=l()*512,g=8+l()*48;o.fillStyle=l()>.55?"rgba(126,157,166,.075)":"rgba(255,255,255,.11)",o.beginPath(),o.ellipse(u,f,g*(.8+l()*.8),g*(.25+l()*.48),l()*Math.PI,0,Math.PI*2),o.fill()}for(let d=0;d<520;d++){let u=l()*512,f=l()*512;o.fillStyle=l()>.58?"rgba(102,136,148,.22)":"rgba(255,255,255,.68)",o.fillRect(u,f,1+l()*2.2,1+l()*1.4)}let h=new vr(r);return h.colorSpace=Oe,h.wrapS=h.wrapT=pr,h.repeat.set(e,n),h.anisotropy=Math.min(Qe.capabilities.getMaxAnisotropy(),8),h}function No(i,t){let s=document.createElement("canvas");s.width=512,s.height=256;let r=s.getContext("2d",{willReadFrequently:!0}),o=[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],a=Zp(t),l=r.createImageData(512,256);for(let h=0;h<256;h++){let d=Math.sin(h*.14)*4+Math.sin(h*.037)*7;for(let u=0;u<512;u++){let f=d+(a()-.5)*18,g=(h*512+u)*4;l.data[g]=Math.max(0,Math.min(255,o[0]+f)),l.data[g+1]=Math.max(0,Math.min(255,o[1]+f*.82)),l.data[g+2]=Math.max(0,Math.min(255,o[2]+f*.62)),l.data[g+3]=255}}r.putImageData(l,0,0);for(let h=0;h<175;h++){let d=a()*256;r.strokeStyle=a()>.5?"rgba(39,25,13,.19)":"rgba(255,226,171,.12)",r.lineWidth=a()*1.4+.25,r.beginPath(),r.moveTo(0,d),r.bezierCurveTo(512*.33,d+(a()-.5)*12,512*.67,d+(a()-.5)*9,512,d+(a()-.5)*6),r.stroke()}let c=new vr(s);return c.colorSpace=Oe,c.wrapS=c.wrapT=pr,c.repeat.set(1.5,1),c.anisotropy=Math.min(Qe.capabilities.getMaxAnisotropy(),8),c}function Go(i,t,e="#9bdac1"){let n=document.createElement("canvas");n.width=512,n.height=192;let s=n.getContext("2d");s.fillStyle="#182427",s.fillRect(0,0,512,192),s.fillStyle="#26393b",s.fillRect(10,10,492,172),s.strokeStyle=e,s.lineWidth=3,s.strokeRect(12,12,488,168),s.fillStyle=e,s.fillRect(28,28,6,136),s.fillStyle="#e3eee5",s.font="700 35px Arial",s.fillText(i,55,83),s.fillStyle="#8ba49c",s.font="20px Arial",s.fillText(t,57,128),s.fillStyle=e,s.fillRect(440,40,38,38),s.fillStyle="#13201e",s.font="700 20px Arial",s.fillText("01",448,66);let r=new vr(n);return r.colorSpace=Oe,r}var Ju=No("#775a3d",319);Ju.repeat.set(5.4,1.8);var jp=w1("#e2e9e9",81,4.6,3.5),Ku=No("#51402d",441);Ku.repeat.set(4.2,1.8);var Jp=Ju.clone();Jp.colorSpace=dn;var Qu=jp.clone();Qu.colorSpace=dn;var Kp=Ku.clone();Kp.colorSpace=dn;var Pp=new dt({map:Ju,bumpMap:Jp,bumpScale:.045,color:16777215,roughness:.94,metalness:.01}),b1=new dt({map:jp,bumpMap:Qu,bumpScale:.025,color:15857140,roughness:.98,metalness:0}),E1=new dt({map:Ku,bumpMap:Kp,bumpScale:.035,color:12956050,roughness:.96}),pS=new dt({color:3160636,roughness:.9}),Qp=new dt({color:3419429,roughness:.72,metalness:.18}),mS=new dt({color:14002773,roughness:.8,metalness:.06}),gS=new dt({color:12700869,roughness:.9,emissive:1581084,emissiveIntensity:.15}),Il=new dt({color:4929576,roughness:.9}),ku=new dt({color:16054263,roughness:.96,metalness:0,bumpMap:Qu,bumpScale:.018});Me.add(new go(12440016,2630947,1.1));Me.add(new al(8229521,.48));var _n=new xo(16771015,2.15);_n.position.set(-3.8,8.5,4.5);_n.castShadow=!0;_n.shadow.mapSize.set(1536,1536);_n.shadow.camera.left=-11;_n.shadow.camera.right=11;_n.shadow.camera.top=9;_n.shadow.camera.bottom=-9;_n.shadow.camera.near=.5;_n.shadow.camera.far=25;_n.shadow.bias=-18e-5;_n.shadow.normalBias=.025;_n.shadow.radius=4;Me.add(_n);function Xl(i,t,e=12774368,n=!1){let s=new ct(new St(1.05,.1,.25),Qp);s.position.set(i,5.66,t),s.castShadow=!1,s.receiveShadow=!0,Me.add(s);let r=new ct(new St(.78,.035,.13),new dt({color:e,emissive:e,emissiveIntensity:1.35,roughness:.3}));if(r.position.set(i,5.585,t),Me.add(r),n){let o=new ol(e,42,12,Math.PI/3,.58,1.6);o.position.set(i,5.35,t),o.target.position.set(i,.15,t),o.castShadow=!0,o.shadow.mapSize.set(512,512),o.shadow.camera.near=.2,o.shadow.camera.far=13,o.shadow.bias=-35e-5,o.shadow.normalBias=.035,o.shadow.radius=4,Me.add(o,o.target)}else{let o=new wr(e,8.5,8.4,2);o.position.set(i,5.35,t),Me.add(o)}}Xl(-4.3,-2.8,11787478,!0);Xl(.4,-2.7,13886159,!1);Xl(4.4,-2.5,11063509,!0);Xl(0,4.25,10141120,!1);function ji(i,t,e,n={}){let s=new ct(i,t);return s.position.set(e[0],e[1],e[2]),s.castShadow=n.castShadow??!0,s.receiveShadow=n.receiveShadow??!0,n.rotation&&s.rotation.set(n.rotation[0],n.rotation[1],n.rotation[2]),n.bulletSurface&&(s.userData.bulletSurface=!0,Yp.push(s)),Me.add(s),s}function Ir(i,t,e=ju){let n=new Pt({mass:0,material:e,collisionFilterGroup:Wp,collisionFilterMask:ql});return n.addShape(new Qn(new _(t[0],t[1],t[2]))),n.position.set(i[0],i[1],i[2]),Zt.addBody(n),n}function S1(){let i=ji(new St(18,.5,14),b1,[0,-.25,0],{bulletSurface:!0});Hu=i,i.userData.groundSurface=!0,i.receiveShadow=!0,Ir([0,-.25,0],[9,.25,7]),ji(new St(18.4,.42,14.4),E1,[0,6.08,0],{bulletSurface:!0}),Ir([0,6.08,0],[9.2,.21,7.2]);for(let n of[-1,1])ji(new St(.4,6,14),Pp,[n*9,3,0],{bulletSurface:!0}),Ir([n*9,3,0],[.2,3,7]),ji(new St(18,6,.4),Pp,[0,3,n*7],{castShadow:!1,bulletSurface:!0}),Ir([0,3,n*7],[9,3,.2]);for(let n of[-1,1]){for(let s of[-6.65,-3.3,0,3.3,6.65])ji(new St(.24,6.05,.25),Il,[n*8.76,3,s]);for(let s of[.18,1.86,3.54,5.82])ji(new St(.2,.17,13.7),Il,[n*8.76,s,0])}for(let n of[-1,1]){for(let s of[-8.65,0,8.65])ji(new St(.25,6.05,.24),Il,[s,3,n*6.76]);for(let s of[.18,1.86,3.54,5.82])ji(new St(17.35,.17,.2),Il,[0,s,n*6.76])}let t=new ct(new Zn(3.1,1.16),new dt({map:Go("\u0421\u041D\u0415\u0416\u041D\u042B\u0419 \u0414\u0412\u041E\u0420","\u041F\u041E\u041B\u0418\u0413\u041E\u041D \u0412\u042B\u0416\u0418\u0412\u0410\u041D\u0418\u042F","#c8dfd8"),roughness:.84,metalness:.04,emissive:1581085,emissiveIntensity:.18}));t.position.set(0,4.4,-6.785),Me.add(t);let e=new ct(new Zn(1.55,.52),new dt({map:Go("\u0417\u0418\u041C\u041D\u0418\u0419 \u0421\u0410\u0420\u0410\u0419","OFFLINE / 01","#d9b46d"),roughness:.84,emissive:1512462,emissiveIntensity:.2}));e.position.set(8.785,3.9,-1.4),e.rotation.y=-Math.PI/2,Me.add(e)}S1();var as=[No("#846744",213),No("#725a40",932),No("#9a7950",612)],Ur=as.map(i=>{let t=i.clone();return t.colorSpace=dn,t}),T1=[new dt({map:as[0],bumpMap:Ur[0],bumpScale:.035,color:8808262,roughness:.88}),new dt({map:as[1],bumpMap:Ur[1],bumpScale:.035,color:7296829,roughness:.91}),new dt({map:as[2],bumpMap:Ur[2],bumpScale:.035,color:10123343,roughness:.83})],A1=new dt({color:3156772,roughness:.75,metalness:.15}),R1=[new dt({color:7383713,roughness:.23,metalness:.05}),new dt({color:9940578,roughness:.27,metalness:.04}),new dt({color:8951472,roughness:.25,metalness:.08})],C1=[new dt({color:4545884,roughness:.65,metalness:.38}),new dt({color:7296321,roughness:.7,metalness:.35})],Ul=new dt({color:10660256,roughness:.44,metalness:.64}),I1=new dt({color:9139286,roughness:.91});function Yl(i,t){i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.userData.gameMeta=t)}),i.userData.gameMeta=t,Br.push(i)}function tm(i){let t=Math.max(0,i.amount),e=Math.cbrt(t);i.meta.isEmpty=t<=.012,i.group.visible=!i.meta.isEmpty,i.group.scale.setScalar(e),i.group.position.y=.02+.07*e}function Qo(i,t,e=1){let n=new jt,s=new ct(new _r(1,1),ku);s.scale.set(.88,.38,.76),s.position.set(0,.31,0),n.add(s);for(let[a,l,c,h,d,u]of[[-.37,.18,.08,.45,.25,.48],[.34,.17,-.1,.48,.23,.44],[.04,.24,.35,.43,.27,.38]]){let f=new ct(new _r(.68,1),ku);f.position.set(a,l,c),f.scale.set(h,d,u),n.add(f)}n.position.set(i,0,t);let r={kind:"snowdrift",name:"\u0421\u0423\u0413\u0420\u041E\u0411",range:4.5,isEmpty:!1},o={group:n,amount:Math.max(0,e),meta:r};return r.drift=o,Yl(n,r),M1.push(o),tm(o),o}function Gr(i,t,e,n,s,r=0,o={}){let a=new Pt({mass:e,material:ko,position:new _(n[0],n[1],n[2]),collisionFilterGroup:qp,collisionFilterMask:ql,linearDamping:o.linearDamping??.08,angularDamping:o.angularDamping??.18,allowSleep:!0,sleepSpeedLimit:.07,sleepTimeLimit:.55});if(Array.isArray(t))for(let l of t)a.addShape(l.shape,l.offset||new _);else a.addShape(t);return a.quaternion.setFromEuler(0,r,0,"YZX"),a.gameMeta={...i,body:a,initialMass:e,isHeld:!1,isStored:!1,originalCollisionFilterMask:a.collisionFilterMask,originalLinearDamping:a.linearDamping,originalAngularDamping:a.angularDamping,lastVelocity:{x:0,y:0,z:0}},Zt.addBody(a),s.position.copy(a.position),s.quaternion.copy(a.quaternion),s.userData.gameMeta=a.gameMeta,Me.add(s),Yl(s,a.gameMeta),Ni.push({body:a,visual:s}),a}function P1(i,t,e,n,s){let r=new jt,o=Math.abs(Math.floor(n))%as.length,a=new dt({map:as[o],bumpMap:Ur[o],bumpScale:.04,color:n,roughness:.9,metalness:.03}),l=new ct(new St(i,t,e),a);r.add(l);let c=Math.max(.045,i*.075),h=Math.max(.045,t*.075);for(let u of[-1,1])for(let f of[-1,1]){let g=new ct(new St(c,t+.015,c),A1);g.position.set(u*(i/2-c/2),0,f*(e/2-c/2)),r.add(g)}for(let u of[-1,1]){let f=new ct(new St(i*.88,h,e+.012),T1[2]);f.position.y=u*(t/2-h/2),r.add(f)}let d=new ct(new Zn(i*.42,t*.22),new dt({map:Go(s,"LOAD TEST / SEALED"),roughness:.76,metalness:.1}));return d.position.set(0,0,e/2+.008),r.add(d),r}function N1(i,t,e,n){let s=new jt,r=new ct(new sn(i*.9,i,t,20,1),C1[e]);s.add(r);let o=new ct(new Yi(i*.92,.025,6,24),Ul);o.rotation.x=Math.PI/2,o.position.y=t*.31,s.add(o);let a=o.clone();a.position.y=-t*.31,s.add(a);let l=new ct(new Yi(i*.96,.018,5,24),Ul);l.rotation.x=Math.PI/2,l.position.y=-t*.09,s.add(l);let c=new ct(new sn(i*.85,i*.85,.035,20),Qp);c.position.y=t/2-.015,s.add(c);let h=new ct(new Zn(i*1.15,t*.23),new dt({map:Go(n,"TARE / STEEL DRUM"),roughness:.78}));return h.position.set(0,.04,i*.89+.008),s.add(h),s}function L1(i,t){let e=new jt,n=[new at(0,-.22),new at(.073,-.22),new at(.103,-.19),new at(.108,-.12),new at(.103,-.015),new at(.096,.055),new at(.071,.105),new at(.048,.125),new at(.041,.15),new at(.041,.218),new at(.05,.228),new at(.05,.246),new at(0,.246)],s=new ct(new fo(n,16),R1[i]);e.add(s);let r=new ct(new sn(.049,.047,.027,16),Ul);r.position.y=.215,e.add(r);let o=new ct(new sn(.044,.044,.038,12),new dt({color:2504244,roughness:.45}));o.position.y=.257,e.add(o);let a=new ct(new sn(.105,.105,.055,16),new dt({color:14145468,roughness:.6}));a.position.y=-.045,e.add(a);let l=new ct(new Zn(.12,.038),new Sn({map:Go(t,"LAB SAMPLE"),toneMapped:!1}));return l.position.set(0,-.045,.104),e.add(l),e}function D1(i,t,e,n){let s=new jt,r=new ct(new St(i,e,t),I1);s.add(r);let o=new dt({color:n?5655353:5326645,roughness:.9});for(let a of[-t*.28,t*.28]){let l=new ct(new St(i*.84,.003,.009),o);l.position.set(0,e/2+.002,a),s.add(l)}for(let a of[-i*.39,i*.39])for(let l of[-t*.29,t*.29]){let c=new ct(new sn(.012,.012,.006,8),Ul);c.rotation.x=Math.PI/2,c.position.set(a,0,l),s.add(c)}return s}function B1(){let i=new jt,t=new dt({map:as[2],bumpMap:Ur[2],bumpScale:.025,color:9204045,roughness:.86}),e=new dt({color:7898497,roughness:.42,metalness:.68}),n=new ct(new sn(.022,.029,.96,10),t);n.rotation.z=Math.PI/2,n.position.set(-.09,.005,0),i.add(n);let s=new ct(new Yi(.052,.012,6,14),t);s.position.set(-.55,.01,0),s.rotation.x=Math.PI/2,i.add(s);let r=new ct(new St(.11,.065,.075),e);r.position.set(.35,-.005,0),i.add(r);let o=new ct(new St(.35,.045,.36),e);o.position.set(.49,-.008,0),i.add(o);let a=new ct(new St(.28,.012,.035),new dt({color:10332835,roughness:.38,metalness:.75}));return a.position.set(.48,.018,0),i.add(a),i}function ta(i,t,e,n,s,r=0){let[o,a,l]=e,c=P1(o,a,l,s,i);return Gr({kind:"prop",type:"\u042F\u0429\u0418\u041A",name:i,mass:n,detail:`${n.toFixed(1)} \u041A\u0413 \xB7 \u0414\u0415\u0420\u0415\u0412\u041E`,description:"\u0423\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0439 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0439 \u0438\u0441\u043F\u044B\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u044F\u0449\u0438\u043A \u0441 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u043D\u0430\u043A\u043B\u0430\u0434\u043A\u0430\u043C\u0438.",range:4.5,inventoryWidth:o>.88?3:2,inventoryHeight:a>.88?3:2,inventoryIcon:"\u25A3"},new Qn(new _(o/2,a/2,l/2)),n,t,c,r)}function td(i,t,e,n,s,r,o=0){let a=N1(e,n,r,i),l=new Ns(e*.9,e,n,12);return Gr({kind:"prop",type:"\u0411\u041E\u0427\u041A\u0410",name:i,mass:s,detail:`${s.toFixed(0)} \u041A\u0413 \xB7 \u0422\u042F\u0416\u0401\u041B\u0410\u042F \u0421\u0422\u0410\u041B\u042C`,description:"\u0422\u044F\u0436\u0451\u043B\u0430\u044F \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0442\u0430\u0440\u0430; \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u043A\u0440\u0443\u043F\u043D\u044B\u0439 \u043E\u0431\u044A\u0451\u043C \u0438 \u0440\u0435\u0437\u043A\u043E \u043D\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u043C\u044B\u0439 \u0432\u0435\u0441.",range:4.4,inventoryWidth:2,inventoryHeight:3,inventoryIcon:"\u25C9"},l,s,t,a,o,{angularDamping:.23})}function ea(i,t,e,n=0){let s=L1(e,i),r=[{shape:new Ns(.103,.103,.33,10),offset:new _(0,-.055,0)},{shape:new Ns(.043,.043,.19,9),offset:new _(0,.165,0)}];return Gr({kind:"prop",type:"\u0411\u0423\u0422\u042B\u041B\u041A\u0410",name:i,mass:.38,detail:"0.38 \u041A\u0413 \xB7 \u041B\u0401\u0413\u041A\u041E\u0415 \u0421\u0422\u0415\u041A\u041B\u041E",description:"\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0442\u0435\u043A\u043B\u044F\u043D\u043D\u044B\u0439 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0439 \u0444\u043B\u0430\u043A\u043E\u043D. \u041F\u043E\u0447\u0442\u0438 \u043D\u0435 \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u043E\u0431\u0449\u0438\u0439 \u0432\u0435\u0441.",range:3.8,inventoryWidth:1,inventoryHeight:1,inventoryIcon:"\u25C9"},r,.38,t,s,n,{linearDamping:.035,angularDamping:.12})}function $l(i,t,e,n,s,r,o=0){let a=D1(e,n,s,Math.abs(o)>.1?1:0);return Gr({kind:"prop",type:"\u0414\u041E\u0421\u041A\u0410",name:i,mass:r,detail:`${r.toFixed(1)} \u041A\u0413 \xB7 \u0421\u041E\u0421\u041D\u0410`,description:"\u0414\u043B\u0438\u043D\u043D\u0430\u044F \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u0434\u043E\u0441\u043A\u0430; \u0432 \u0440\u044E\u043A\u0437\u0430\u043A\u0435 \u0443\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E.",range:4.3,inventoryWidth:1,inventoryHeight:4,inventoryIcon:"\u25AC"},new Qn(new _(e/2,s/2,n/2)),r,t,a,o,{angularDamping:.21})}function F1(i,t,e=0){let n=B1();return Gr({kind:"prop",type:"\u041B\u041E\u041F\u0410\u0422\u0410",name:i,mass:3.6,detail:"3.6 \u041A\u0413 \xB7 \u0421\u0422\u0410\u041B\u042C / \u0414\u0415\u0420\u0415\u0412\u041E",description:"\u041F\u043E\u043B\u0435\u0432\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0441\u043E \u0441\u0442\u0430\u043B\u044C\u043D\u044B\u043C \u0448\u0442\u044B\u043A\u043E\u043C \u0438 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u043E\u0439 \u0440\u0443\u043A\u043E\u044F\u0442\u044C\u044E. \u0420\u0430\u0437\u043C\u0435\u0440 2 \xD7 3 \u044F\u0447\u0435\u0439\u043A\u0438.",range:4.5,inventoryWidth:2,inventoryHeight:3,inventoryIcon:"\u2692"},new Qn(new _(.64,.07,.2)),3.6,t,n,e,{angularDamping:.3})}function U1(){let i=new jt,t=new dt({map:as[1],bumpMap:Ur[1],bumpScale:.025,color:7493434,roughness:.96}),e=new dt({color:12624250,roughness:.96}),n=new ct(new sn(.083,.09,.66,10),t);n.rotation.z=Math.PI/2,i.add(n);for(let s of[-1,1]){let r=new ct(new Xi(.082,10),e);r.position.x=s*.331,r.rotation.y=s*Math.PI/2,i.add(r)}return i}function Zl(i,t,e=0){let s=U1();return Gr({kind:"firewood",type:"\u0414\u0420\u041E\u0412\u0410",name:i,mass:1.35,detail:`${1.35.toFixed(1)} \u041A\u0413 \xB7 \u0421\u0423\u0425\u041E\u0415 \u041F\u041E\u041B\u0415\u041D\u041E`,description:"\u041F\u043E\u043B\u0435\u043D\u043E \u0434\u043B\u044F \u0440\u0430\u0441\u0442\u043E\u043F\u043A\u0438 \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0447\u0438. \u0412\u043E\u0437\u044C\u043C\u0438\u0442\u0435 \u0435\u0433\u043E \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0440\u044F\u0434\u043E\u043C \u0441 \u043F\u0435\u0447\u044C\u044E.",range:4.5,inventoryWidth:1,inventoryHeight:2,inventoryIcon:"\u25A4"},new Qn(new _(.34,.09,.09)),1.35,t,s,e,{angularDamping:.28})}ta("\u042F\u0429\u0418\u041A A-01",[-3.55,.42,-1],[.86,.84,.78],7.5,7692356,-.08);ta("\u042F\u0429\u0418\u041A A-02",[-2.73,.38,-1.27],[.72,.76,.68],5.2,9137480,.14);ta("\u042F\u0429\u0418\u041A A-03",[-3.1,1.23,-1.12],[.68,.76,.64],5.8,6903359,.06);ta("\u042F\u0429\u0418\u041A B-01",[4.95,.48,.1],[.95,.96,.86],11,7428673,.24);ta("\u042F\u0429\u0418\u041A B-02",[5.8,.38,-.25],[.72,.76,.72],5.4,9137480,-.17);td("\u0411\u041E\u0427\u041A\u0410 M-01",[2.75,.54,-1.9],.38,1.08,18,0);td("\u0411\u041E\u0427\u041A\u0410 M-02",[3.75,.5,-2.75],.35,1,15,1,.18);td("\u0411\u041E\u0427\u041A\u0410 M-03",[1.93,.47,-3.25],.33,.94,14,0,-.12);ea("\u0424\u041B\u0410\u041A\u041E\u041D G-01",[-.62,.22,-2.35],0);ea("\u0424\u041B\u0410\u041A\u041E\u041D G-02",[.05,.22,-2.55],1,.5);ea("\u0424\u041B\u0410\u041A\u041E\u041D G-03",[.62,.22,-2.38],2,-.3);ea("\u0424\u041B\u0410\u041A\u041E\u041D G-04",[-4.72,.22,1],1,.4);ea("\u0424\u041B\u0410\u041A\u041E\u041D G-05",[4.2,.22,1.6],0,-.6);$l("\u0414\u041E\u0421\u041A\u0410 P-01",[-1.45,.085,-4.1],2.35,.36,.15,3.4,.06);$l("\u0414\u041E\u0421\u041A\u0410 P-02",[-.2,.09,-4.35],2,.32,.16,3.1,-.33);$l("\u0414\u041E\u0421\u041A\u0410 P-03",[.85,.075,1.05],2.7,.4,.13,4.2,.52);$l("\u0414\u041E\u0421\u041A\u0410 P-04",[6.15,.08,2.2],2.15,.3,.14,3,-.13);F1("\u041B\u041E\u041F\u0410\u0422\u0410 S-01",[-5.55,.07,2.7],-.25);Zl("\u0414\u0420\u041E\u0412\u0410 F-01",[6.15,.1,-4.1],.18);Zl("\u0414\u0420\u041E\u0412\u0410 F-02",[6.78,.1,-4.22],-.36);Zl("\u0414\u0420\u041E\u0412\u0410 F-03",[5.82,.1,-4.52],.46);Zl("\u0414\u0420\u041E\u0412\u0410 F-04",[6.22,.1,-3.72],-.2);Qo(-5.05,1.55,1);Qo(.15,2.7,.92);Qo(-6.35,-3.85,1);Qo(5.6,3.75,.88);var gn=new D(7.15,0,-5.35),em=[],Bs=null,O1=null,ns=null,Lo=null,ei=!1,Do=0,Ll=0,ii=0,Ri=0,nm=.82,Ol=null,Ke=null;function z1(){let i=[new dt({color:8009768,roughness:.95}),new dt({color:9126960,roughness:.94}),new dt({color:6500646,roughness:.96})],t=new dt({color:2501417,roughness:.62,metalness:.62}),e=new jt;e.position.copy(gn);let n=new ct(new St(1.28,1,1.06),i[0]);n.position.y=.5,e.add(n);for(let d=0;d<5;d++)for(let u=0;u<4;u++){let f=d%2?.14:0,g=new ct(new St(.27,.16,.045),i[(d*3+u)%i.length]);g.position.set(-.47+u*.29+f,.13+d*.18,.54),e.add(g)}let s=new ct(new St(.58,.39,.035),t);s.position.set(0,.48,.591),e.add(s);let r=new ct(new St(.43,.25,.014),new dt({color:1117707,roughness:1,emissive:788227}));r.position.set(0,.48,.616),e.add(r),ns=new ct(new St(.39,.22,.008),new Sn({color:16743212,transparent:!0,opacity:.86})),ns.position.set(0,.48,.628),ns.visible=!1,e.add(ns);for(let d of[-.34,.34]){let u=new ct(new St(.065,.5,.075),t);u.position.set(d,.48,.64),e.add(u)}for(let d of[.24,.72]){let u=new ct(new St(.72,.06,.075),t);u.position.set(0,d,.64),e.add(u)}let o=new ct(new St(.035,.16,.045),t);o.position.set(.25,.48,.69),e.add(o);let a=new ct(new St(.42,1.62,.44),i[2]);a.position.set(.32,1.78,-.24),e.add(a);let l=new ct(new St(.55,.1,.57),t);l.position.set(.32,2.64,-.24),e.add(l),Me.add(e),Yl(e,{kind:"stove",name:"\u041A\u0418\u0420\u041F\u0418\u0427\u041D\u0410\u042F \u041F\u0415\u0427\u042C",range:4.7}),O1=e,Ir([gn.x,.5,gn.z],[.66,.5,.55]),Ir([gn.x+.32,1.78,gn.z-.24],[.21,.81,.22]),Bs=new jt,Bs.position.set(gn.x,0,gn.z+.66),Bs.visible=!1,Me.add(Bs);let h=[16733986,16747303,16761678,16769162];for(let d=0;d<13;d++){let u=new Sn({color:h[d%h.length],transparent:!0,opacity:0,depthWrite:!1,side:un,blending:Ba}),f=new ct(new sl(.1+d%3*.025,0),u);f.visible=!1,Bs.add(f),em.push({mesh:f,phase:Math.random()*Math.PI*2,rate:1.35+Math.random()*1.45,spread:.03+Math.random()*.11})}Lo=new wr(16746296,0,5.3,2),Lo.position.set(gn.x,.92,gn.z+.92),Me.add(Lo)}z1();var H1=[new dt({color:10926262,roughness:.73,metalness:.14}),new dt({color:12753512,roughness:.76,metalness:.1})],Dl=new dt({color:5399911,roughness:.63,metalness:.22}),k1=[new dt({color:7916220,roughness:.45,metalness:.12,emissive:1194549,emissiveIntensity:.25}),new dt({color:15044177,roughness:.5,metalness:.12,emissive:3743763,emissiveIntensity:.2})];function V1(i,t){if(i==="head")return new il(t[0]/2,14,10);if(i.includes("hand"))return new St(t[0],t[1],t[2]);if(i.includes("foot"))return new St(t[0],t[1],t[2]);if(i==="torso")return new St(t[0],t[1],t[2]);if(i==="pelvis")return new St(t[0],t[1],t[2]);let e=Math.min(t[0],t[2])*.48,n=Math.max(.03,t[1]-2*e);return new tl(e,n,3,9)}function Si(i,t,e,n,s,r=i.skin,o=null){let a=new Pt({mass:n,type:Pt.KINEMATIC,material:Gp,position:new _(s[0],s[1],s[2]),collisionFilterGroup:Xp,collisionFilterMask:ql,angularDamping:.2,linearDamping:.08,allowSleep:!0,sleepSpeedLimit:.08,sleepTimeLimit:.65});a.addShape(new Qn(new _(e[0]/2,e[1]/2,e[2]/2))),a.gameMeta={kind:"mannequin",human:i,key:t,body:a},Zt.addBody(a);let l=new jt,c=new ct(o||V1(t,e),r);if(l.add(c),t==="torso"){let d=new ct(new St(e[0]*.42,e[1]*.24,.018),k1[i.colorIndex]);d.position.set(0,.04,e[2]/2+.009),l.add(d);let u=new ct(new St(e[0]*.26,.022,.02),Dl);u.position.set(0,-.06,e[2]/2+.012),l.add(u)}if(t==="head"){let d=new ct(new St(e[0]*.44,.026,.012),Dl);d.position.set(0,.005,e[2]/2-.008),l.add(d)}if(t.startsWith("hand")){let d=new ct(new St(.038,.09,.045),r);d.position.set(t.endsWith("L")?.062:-.062,.003,.002),l.add(d)}if(t.startsWith("foot")){let d=new ct(new St(e[0]*.78,e[1]*.45,.022),Dl);d.position.set(0,-.01,e[2]/2-.012),l.add(d)}l.position.copy(a.position),l.quaternion.copy(a.quaternion),Me.add(l),Yl(l,a.gameMeta);let h={key:t,body:a,visual:l,mass:n,size:e};return i.parts.push(h),i.partMap[t]=h,Ni.push({body:a,visual:l}),h}function Ji(i,t,e,n,s,r,o=.35,a=[0,1,0]){let l=i.partMap[t].body,c=i.partMap[e].body,h=new Sl(l,c,{pivotA:new _(...n),pivotB:new _(...s),axisA:new _(...a),axisB:new _(...a),angle:r,twistAngle:o,maxForce:2e5,collideConnected:!1});return Zt.addConstraint(h),i.constraints.push(h),h}function im(i,t,e){let n={id:i,origin:t,colorIndex:e,skin:H1[e],parts:[],partMap:{},constraints:[],active:!1,dead:!1,health:100,hitFlash:0,behavior:i==="D-01"?"peaceful":"aggressive",state:"idle",rootX:t[0],rootZ:t[2],yaw:0,stateTime:0,quietTime:0,attackCooldown:0,punchSide:1,walkPhase:0,wanderTarget:null,navDirection:null},s=t[0],r=t[2],o=(a,l,c)=>[s+a,l,r+c];Si(n,"pelvis",[.39,.28,.25],5.2,o(0,.97,0),Dl),Si(n,"torso",[.44,.58,.28],9.4,o(0,1.39,0)),Si(n,"head",[.32,.32,.32],3.1,o(0,1.84,0));for(let a of[-1,1]){let l=a<0?"L":"R";Si(n,`upperArm${l}`,[.16,.39,.16],2.15,o(a*.32,1.365,0),n.skin),Si(n,`lowerArm${l}`,[.135,.34,.135],1.45,o(a*.35,1,.015),n.skin),Si(n,`hand${l}`,[.135,.13,.095],.55,o(a*.36,.765,.025),n.skin),Si(n,`thigh${l}`,[.21,.45,.21],4.15,o(a*.125,.735,0)),Si(n,`shin${l}`,[.16,.41,.17],2.55,o(a*.13,.305,.005)),Si(n,`foot${l}`,[.17,.12,.31],.9,o(a*.13,.06,.075))}Ji(n,"pelvis","torso",[0,.14,0],[0,-.29,0],.34,.28),Ji(n,"torso","head",[0,.285,0],[0,-.15,0],.5,.38);for(let a of[-1,1]){let l=a<0?"L":"R";Ji(n,"torso",`upperArm${l}`,[a*.215,.17,0],[-a*.105,.19,0],1.36,.88,[1,0,0]),Ji(n,`upperArm${l}`,`lowerArm${l}`,[a*.015,-.195,0],[-a*.015,.17,-.015],.16,2.15,[1,0,0]),Ji(n,`lowerArm${l}`,`hand${l}`,[a*.005,-.17,0],[-a*.005,.06,-.01],.42,.46,[1,0,0]),Ji(n,"pelvis",`thigh${l}`,[a*.125,-.02,0],[0,.22,0],1.08,.55,[1,0,0]),Ji(n,`thigh${l}`,`shin${l}`,[0,-.22,0],[0,.205,-.005],.14,2.05,[1,0,0]),Ji(n,`shin${l}`,`foot${l}`,[0,-.205,0],[0,.035,-.075],.34,.42,[1,0,0])}for(let a of n.parts)a.restLocal={x:a.body.position.x-s,y:a.body.position.y,z:a.body.position.z-r},a.restQuaternion=a.body.quaternion.clone();for(let a of n.parts)a.body.addEventListener("collide",l=>{if(n.active)return;let c=l.body,h=c?.gameMeta?.lastVelocity,d=h?Math.hypot(h.x,h.y,h.z):0,u=l.contact?Math.abs(l.contact.getImpactVelocityAlongNormal()):0,f=Math.max(u,d);if(f>1.15&&c&&c.type===Pt.DYNAMIC&&c.gameMeta?.kind!=="mannequin"){let g=h?new _(h.x,h.y,h.z):c.velocity;hd(n,a,f,g)}});return $p.push(n),n}im("D-01",[-3.6,0,-4.55],0);im("D-02",[3.7,0,-4.5],1);var G1={pelvis:[0,.84,0,.08,0,0],torso:[0,1.28,.025,.08,0,0],head:[0,1.69,.025,0,0,0],upperArmL:[-.31,1.18,.045,-.12,0,-.04],lowerArmL:[-.34,.94,.16,-.72,0,0],handL:[-.35,.77,.29,-.55,0,0],upperArmR:[.31,1.18,.045,-.12,0,.04],lowerArmR:[.34,.94,.16,-.72,0,0],handR:[.35,.77,.29,-.55,0,0],thighL:[-.125,.49,.055,0,0,0],shinL:[-.13,.14,-.115,-Math.PI/2,0,0],footL:[-.13,.065,-.3,0,0,0],thighR:[.125,.49,.055,0,0,0],shinR:[.13,.14,-.115,-Math.PI/2,0,0],footR:[.13,.065,-.3,0,0,0]};function W1(i,t="idle"){let e={},n=i.walkPhase,s=t==="walk"||t==="attack",r=t==="attack"?Math.sin($t.clamp(i.stateTime/.74,0,1)*Math.PI):0;for(let o of i.parts){let a=o.restLocal,l=[a.x,a.y,a.z,0,0,0];if(o.key==="pelvis"&&s&&(l[1]+=Math.sin(n*2)*.014),o.key==="torso"&&s&&(l[1]+=Math.sin(n*2+.4)*.018),o.key==="head"&&s&&(l[1]+=Math.sin(n*2+.7)*.012),s&&/^(thigh|shin|foot)[LR]$/.test(o.key)){let c=o.key.endsWith("L")?-1:1,h=Math.sin(n+(c>0?Math.PI:0));o.key.startsWith("thigh")?(l[2]+=h*.105,l[3]=-h*.3):o.key.startsWith("shin")?(l[2]-=h*.045,l[3]=Math.max(0,h)*.3):(l[2]+=h*.05,l[3]=-h*.12)}if(s&&/^(upperArm|lowerArm|hand)[LR]$/.test(o.key)){let c=o.key.endsWith("L")?-1:1,h=Math.sin(n+(c>0?Math.PI:0));l[2]-=h*(o.key.startsWith("upperArm")?.085:.045),l[3]=-h*(o.key.startsWith("upperArm")?.4:.18)}if(t==="attack"&&/^(upperArm|lowerArm|hand)[LR]$/.test(o.key)){let c=o.key.endsWith("L")?-1:1;c===i.punchSide?o.key.startsWith("upperArm")?(l[0]=c*.31,l[1]=1.43,l[2]=.12+r*.11,l[3]=-.92*r):o.key.startsWith("lowerArm")?(l[0]=c*.33,l[1]=1.22,l[2]=.27+r*.2,l[3]=-1.12*r):(l[0]=c*.35,l[1]=1.08,l[2]=.44+r*.26,l[3]=-.75*r):o.key.startsWith("upperArm")?(l[1]=1.37,l[2]=.06,l[3]=-.26):o.key.startsWith("lowerArm")?(l[1]=1.18,l[2]=.14,l[3]=-.48):(l[1]=1.02,l[2]=.2,l[3]=-.38)}e[o.key]=l}return e}function sm(i,t){let e={},n=Math.cos(i.yaw),s=Math.sin(i.yaw),r=new De;r.setFromAxisAngle(new _(0,1,0),i.yaw);for(let o of i.parts){let a=t[o.key]||[o.restLocal.x,o.restLocal.y,o.restLocal.z,0,0,0],l=new De;l.setFromEuler(a[3]||0,a[4]||0,a[5]||0,"XYZ");let c=new De;r.mult(l,c),e[o.key]={position:new _(i.rootX+a[0]*n+a[2]*s,a[1],i.rootZ-a[0]*s+a[2]*n),quaternion:c}}return e}function ts(i,t="idle"){return sm(i,W1(i,t))}function q1(i){return sm(i,G1)}function X1(i){let t={};for(let e of i.parts)t[e.key]={position:e.body.position.clone(),quaternion:e.body.quaternion.clone()};return t}function Y1(i,t){for(let e of i.parts){let n=e.body;n.type=t,n.mass=e.mass,n.updateMassProperties(),n.force.set(0,0,0),n.torque.set(0,0,0),n.velocity.set(0,0,0),n.angularVelocity.set(0,0,0),n.wakeUp()}Zt.broadphase.dirty=!0}function Ki(i,t,e){let n=Math.max(.001,e);for(let s of i.parts){let r=s.body,o=t[s.key];r.velocity.set($t.clamp((o.position.x-r.position.x)/n,-9,9),$t.clamp((o.position.y-r.position.y)/n,-9,9),$t.clamp((o.position.z-r.position.z)/n,-9,9)),r.quaternion.copy(o.quaternion),r.angularVelocity.set(0,0,0),r.force.set(0,0,0),r.torque.set(0,0,0),r.aabbNeedsUpdate=!0,r.wakeUp()}Zt.broadphase.dirty=!0}function Np(i,t,e,n,s){let r=$t.smoothstep(n,0,1),o=Math.max(.001,s);for(let a of i.parts){let l=a.body,c=t[a.key],h=e[a.key],d=$t.lerp(c.position.x,h.position.x,r),u=$t.lerp(c.position.y,h.position.y,r),f=$t.lerp(c.position.z,h.position.z,r);l.velocity.set($t.clamp((d-l.position.x)/o,-9,9),$t.clamp((u-l.position.y)/o,-9,9),$t.clamp((f-l.position.z)/o,-9,9)),c.quaternion.slerp(h.quaternion,r,l.quaternion),l.angularVelocity.set(0,0,0),l.force.set(0,0,0),l.torque.set(0,0,0),l.aabbNeedsUpdate=!0,l.wakeUp()}Zt.broadphase.dirty=!0}function $1(i){let t=i.partMap.pelvis.body.position;i.rootX=$t.clamp(t.x,-8,8),i.rootZ=$t.clamp(t.z,-6,6);let e=i.behavior==="peaceful"?$t.clamp(i.rootX+(i.rootX<0?-2.6:2.6),-7.4,7.4):vt.position.x,n=i.behavior==="peaceful"?i.rootZ+.05:vt.position.z;i.yaw=Math.atan2(e-i.rootX,n-i.rootZ),i.recoveryFrom=X1(i),i.kneelingPose=q1(i),i.standingPose=ts(i,"idle"),i.state="recovering-to-knees",i.stateTime=0,Y1(i,Pt.KINEMATIC)}function Z1(i){if(i.stateTime=0,i.walkPhase=0,i.navDirection=null,i.behavior==="peaceful"){let t=i.rootX<0?-1:1;i.wanderTarget={x:$t.clamp(i.rootX+t*2.6,-7.4,7.4),z:$t.clamp(i.rootZ+.12,-5.9,5.9)},i.state="walking-away"}else i.state="chasing"}function j1(i,t,e){let n=Math.hypot(t,e);if(n<1e-4)return{x:0,z:0};t/=n,e/=n;let s=[0,.38,-.38,.76,-.76,1.18,-1.18,1.62,-1.62],r={x:t,z:e,score:-1/0};for(let o of s){let a=Math.cos(o),l=Math.sin(o),c=t*a-e*l,h=t*l+e*a,d=(c*t+h*e)*2.1;i.navDirection&&(d+=(c*i.navDirection.x+h*i.navDirection.z)*.24);for(let u of Ni){let f=u.body,g=f.gameMeta;if(g?.kind!=="prop"||g.isStored||g.isHeld)continue;let y=f.position.x-i.rootX,m=f.position.z-i.rootZ,p=y*c+m*h;if(p<-.15||p>2.1)continue;let x=Math.abs(y*h-m*c),w=Math.min(1.35,Math.max(.36,f.boundingRadius||.55))+.38;if(x<w){let v=$t.clamp((2.1-Math.max(0,p))/1.75,.35,1.45);d-=(w-x)*2.2*v}}d>r.score&&(r={x:c,z:h,score:d})}return i.navDirection={x:r.x,z:r.z},r}function Bl(i,t,e,n){if(Math.hypot(t,e)<1e-4)return;let r=Math.atan2(t,e)-i.yaw;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;i.yaw+=$t.clamp(r,-n*5.5,n*5.5)}function Lp(i,t,e,n,s){let r=t-i.rootX,o=e-i.rootZ,a=Math.hypot(r,o);if(a<.025)return a;let l=j1(i,r,o);Bl(i,l.x,l.z,s);let c=Math.min(a,n*s);return i.rootX=$t.clamp(i.rootX+l.x*c,-8,8),i.rootZ=$t.clamp(i.rootZ+l.z*c,-6,6),i.walkPhase+=s*(n+1.8),a}function J1(i){let t=0,e=0;for(let n of i.parts)t=Math.max(t,n.body.velocity.length()),e=Math.max(e,n.body.angularVelocity.length());return t<.58&&e<1.15}function K1(i){for(let t of $p){if(t.hitFlash=Math.max(0,t.hitFlash-i),t.dead||!t.active)continue;if(t.attackCooldown=Math.max(0,t.attackCooldown-i),t.state==="falling"){t.stateTime+=i,t.quietTime=J1(t)?t.quietTime+i:0,t.stateTime>=1.15&&(t.quietTime>=.58||t.stateTime>=3.85)&&$1(t);continue}if(t.state==="recovering-to-knees"){t.stateTime+=i,Np(t,t.recoveryFrom,t.kneelingPose,t.stateTime/1.2,i),t.stateTime>=1.2&&(t.state="kneeling-hold",t.stateTime=0);continue}if(t.state==="kneeling-hold"){t.stateTime+=i,Ki(t,t.kneelingPose,i),t.stateTime>=.48&&(t.state="recovering-to-feet",t.stateTime=0);continue}if(t.state==="recovering-to-feet"){t.stateTime+=i,Np(t,t.kneelingPose,t.standingPose,t.stateTime/1.08,i),t.stateTime>=1.08&&Z1(t);continue}if(t.state==="walking-away"){let r=Lp(t,t.wanderTarget.x,t.wanderTarget.z,1.35,i);r<.24&&(t.state="idle-after",t.stateTime=0),Ki(t,ts(t,r>.24?"walk":"idle"),i);continue}if(t.state==="idle-after"){t.stateTime+=i,Ki(t,ts(t,"idle"),i);continue}if(t.behavior!=="aggressive")continue;let e=vt.position.x-t.rootX,n=vt.position.z-t.rootZ,s=Math.hypot(e,n);if(t.state==="attacking"){if(t.stateTime+=i,Bl(t,e,n,i),s>1.95&&t.stateTime<.28){t.state="chasing",t.stateTime=0,Ki(t,ts(t,"walk"),i);continue}Ki(t,ts(t,"attack"),i),!t.attackHitDone&&t.stateTime>=.27&&(t.attackHitDone=!0,s<=1.55&&vm(8,"torso")),t.stateTime>=.74&&(t.state="chasing",t.stateTime=0);continue}if(s<=1.35&&t.attackCooldown<=0){t.state="attacking",t.stateTime=0,t.attackHitDone=!1,t.attackCooldown=1.35,t.punchSide*=-1,Bl(t,e,n,i),Ki(t,ts(t,"attack"),i);continue}s>1.05?(Lp(t,vt.position.x,vt.position.z,2.9,i),Ki(t,ts(t,"walk"),i)):(Bl(t,e,n,i),Ki(t,ts(t,"idle"),i))}}var ls=new _(0,.87,5.25),vt=new Pt({mass:72,material:Wl,position:ls.clone(),collisionFilterGroup:Vo,collisionFilterMask:ql&~Vo,fixedRotation:!0,linearDamping:.02,angularDamping:1,allowSleep:!1});vt.addShape(new Ns(.31,.31,1.08,12));vt.addShape(new So(.31),new _(0,.53,0));vt.addShape(new So(.31),new _(0,-.53,0));vt.gameMeta={kind:"player"};Zt.addBody(vt);var zl=!1,Hl=ls.y,kl=0,Dp=0,Os=new jt;Ve.add(Os);var Q1=new dt({color:5858394,roughness:.86,metalness:.02}),tb=new dt({color:2436649,roughness:.78,metalness:.08}),Ro=new dt({color:3753018,roughness:.91,metalness:.01}),Bu=new dt({color:2107681,roughness:.84,metalness:.03}),Ao=new dt({color:5661262,roughness:.88,metalness:.02}),ee=new dt({color:2699832,roughness:.46,metalness:.68}),Bt=new dt({color:1514784,roughness:.62,metalness:.42}),Ii=new dt({color:3357239,roughness:.82,metalness:.08}),Wo=new dt({color:7491637,roughness:.84,metalness:.02}),jl=new dt({color:4994854,roughness:.9,metalness:.01}),Vu=new dt({color:5342898,roughness:.23,metalness:.26,emissive:1057594,emissiveIntensity:.2}),We=new jt;Os.add(We);var $=new jt;We.add($);var Rn=new D(.28,-.33,-.78),Cn=new pn(.25,.25,.015,"XYZ");We.position.copy(Rn);We.rotation.copy(Cn);var Fs={},Fe=null,Or=new D(0,-.145,.035),yn=null,Us=new D(0,-.045,-.44),xn=new jt;We.add(xn);var Pr=0,es=0,In=0,qo=0,Hs=0,$e=!1,zs=0,Vl=!1,Nr=0,vn=null,ed=new Map(Cl.map(i=>[i.id,wp(i)])),Ds=null,Xo=null,Gu=[],Ti=0,nd=0;function Vs(i){nd=qt?i:.78}function on(i,t,e,n=0){let s=new ct(i,t);return s.position.set(e[0],e[1],e[2]),s.rotation.z=n,s.castShadow=!1,s.receiveShadow=!1,s}function nt(i,t,e,n,s=[0,0,0]){let r=new ct(new St(t[0],t[1],t[2]),n);return r.position.set(e[0],e[1],e[2]),r.rotation.set(s[0],s[1],s[2]),r.castShadow=!1,r.receiveShadow=!1,i.add(r),r}function Be(i,t,e,n,s,r=12){let o=new ct(new sn(t,t,e,r,1),s);return o.position.set(n[0],n[1],n[2]),o.rotation.x=Math.PI/2,o.castShadow=!1,o.receiveShadow=!1,i.add(o),o}var id=new dt({color:7957330,roughness:.79,metalness:.08}),is=new dt({color:5660773,roughness:.4,metalness:.74}),Bp=new dt({color:9016474,roughness:.31,metalness:.82}),Co=new dt({color:2435625,roughness:.92,metalness:.02}),eb=new dt({color:9080717,roughness:.38,metalness:.83});function nb(){let i=new ct(new po(.06,.19,6),new Sn({color:16760168,transparent:!0,opacity:.92}));i.rotation.x=-Math.PI/2,i.position.z=-.075,xn.add(i),xn.add(new ct(new el(.055,0),new Sn({color:16773296})));let t=new wr(16754499,0,2.2,2);xn.add(t),xn.userData.light=t,xn.visible=!1}nb();function ib(){$.traverse(i=>{i.geometry&&i.geometry.dispose()}),$.clear(),Fe=null,yn=null,Ke=null}function sb(){nt($,[.205,.145,.46],[0,.005,.035],ee),nt($,[.184,.036,.43],[0,.095,.025],Bt),nt($,[.045,.025,.47],[0,.132,-.02],ee),nt($,[.11,.02,.11],[0,.158,-.15],Bt),nt($,[.018,.026,.16],[.112,.025,.035],Bt),nt($,[.055,.036,.13],[.112,.026,-.03],ee),nt($,[.065,.025,.1],[-.113,.025,.105],Bt),nt($,[.06,.025,.1],[-.12,-.005,.16],ee),Be($,.033,.76,[0,.025,-.575],ee,10),Be($,.046,.13,[0,.025,-1.015],Bt,10),nt($,[.085,.065,.08],[0,.115,-.88],ee),nt($,[.018,.075,.025],[0,.18,-.91],Bt),nt($,[.13,.025,.045],[0,.153,-.9],ee);for(let s of[-1,1])nt($,[.012,.028,.045],[s*.043,.026,-1.015],ee);nt($,[.17,.095,.36],[0,-.045,-.39],Wo),nt($,[.178,.016,.31],[0,.014,-.39],jl);for(let s of[-1,1]){nt($,[.014,.022,.31],[s*.09,-.045,-.39],ee);for(let r=0;r<7;r++)nt($,[.009,.013,.018],[s*.101,-.045,-.52+r*.043],Bt)}nt($,[.055,.035,.44],[0,.118,-.39],Bt),nt($,[.11,.06,.08],[0,.16,-.105],ee),nt($,[.045,.047,.028],[0,.195,-.115],Bt);let i=new jt;i.position.set(0,.226,-.17),$.add(i),Be(i,.063,.28,[0,0,-.015],Bt,8),Be(i,.073,.055,[0,0,.105],ee,8),Be(i,.073,.04,[0,0,-.155],ee,8);let t=new ct(new Xi(.053,8),Vu);t.position.z=.135,i.add(t);let e=new ct(new Xi(.047,8),Vu);e.position.z=-.177,e.rotation.y=Math.PI,i.add(e),nt($,[.11,.025,.22],[0,.178,-.17],ee),nt($,[.088,.22,.115],[.012,-.17,.165],Ii,[-.18,0,-.04]);let n=new ct(new Yi(.061,.009,5,12),ee);n.position.set(0,-.105,.075),$.add(n),nt($,[.018,.09,.022],[.015,-.1,.045],Bt,[.22,0,0]),Fe=new jt,Or.set(0,-.145,.035),$.add(Fe),nt(Fe,[.11,.26,.17],[0,-.13,0],Ii,[-.12,0,0]),nt(Fe,[.116,.035,.175],[0,-.252,-.01],Bt,[-.12,0,0]);for(let s=0;s<4;s++)nt(Fe,[.115,.012,.18],[0,-.06-s*.045,0],ee,[-.12,0,0]);nt($,[.105,.105,.44],[0,.015,.445],Ii),nt($,[.13,.12,.045],[0,.005,.67],Bt),nt($,[.09,.045,.24],[0,.078,.42],ee),nt($,[.18,.012,.12],[0,-.048,.57],Bt)}function rb(){nt($,[.2,.15,.43],[0,.005,.035],ee),nt($,[.19,.045,.39],[0,.097,.025],Bt),nt($,[.05,.025,.55],[0,.134,-.09],ee),nt($,[.17,.105,.4],[0,-.025,-.39],Ii),nt($,[.19,.02,.42],[0,.045,-.38],Bt);for(let e of[-1,1]){nt($,[.015,.025,.35],[e*.095,-.025,-.4],ee);for(let n=0;n<6;n++)nt($,[.012,.012,.025],[e*.105,-.025,-.55+n*.06],Bt)}Be($,.029,.88,[0,.02,-.75],ee,10),Be($,.043,.11,[0,.02,-1.245],Bt,10),nt($,[.045,.12,.04],[0,.17,-1.11],ee),nt($,[.09,.04,.08],[0,.125,-1.08],Bt),nt($,[.17,.024,.48],[0,.16,-.17],Bt),nt($,[.12,.075,.11],[0,.205,-.12],ee);let i=new jt;i.position.set(0,.25,-.19),$.add(i),Be(i,.055,.25,[0,0,0],Bt,8),Be(i,.064,.035,[0,0,.12],ee,8);let t=new ct(new Xi(.044,8),Vu);t.position.z=.14,i.add(t),nt($,[.09,.035,.09],[0,.19,.03],Bt),nt($,[.09,.19,.12],[.012,-.15,.16],Ii,[-.17,0,0]),nt($,[.11,.04,.4],[0,-.008,.44],Bt),nt($,[.08,.11,.08],[0,.005,.64],Ii),nt($,[.07,.095,.06],[0,.015,.72],Bt),Fe=new jt,Or.set(0,-.145,.035),$.add(Fe),nt(Fe,[.11,.26,.16],[0,-.13,0],Bt,[-.06,0,0]),nt(Fe,[.12,.028,.17],[0,-.255,-.01],ee);for(let e=0;e<4;e++)nt(Fe,[.115,.012,.17],[0,-.07-e*.045,0],id);nt($,[.18,.012,.13],[0,-.045,.56],Bt)}function ob(i){let t=i.id==="tt",e=i.id==="glock-17",n=t?.39:e?.34:.32,s=-.055,r=e?Ii:ee;nt($,[.14,.095,.31],[0,-.035,.055],Bt),nt($,[.13,.105,n],[0,.035,s],r),nt($,[.12,.018,n*.78],[0,.092,s-.015],is),Be($,t?.025:.022,t?.35:.28,[0,.025,-.27],Bt,9),nt($,[.09,.19,.12],[.008,-.15,.155],e?Ii:Co,[-.19,0,0]),nt($,[.095,.035,.13],[.008,-.235,.16],Bt,[-.19,0,0]),nt($,[.013,.075,.015],[.02,-.1,.08],ee,[.22,0,0]),nt($,[.035,.038,.035],[0,.105,.075],Bt),nt($,[.035,.04,.03],[0,.105,s-n*.46],Bt),e?(nt($,[.17,.035,.18],[0,-.068,-.11],Bt),nt($,[.105,.018,.08],[0,.1,-.17],id)):(nt($,[.018,.075,.19],[.076,.035,.035],Bt),nt($,[.02,.07,.16],[-.078,.035,.035],is),t&&nt($,[.012,.085,.17],[.075,.035,-.12],is),nt($,[.09,.14,.018],[0,-.16,.22],jl,[-.19,0,0])),Fe=new jt,Or.set(0,-.17,.15),$.add(Fe),nt(Fe,[.09,.18,.105],[0,-.08,0],Bt,[-.17,0,0]),nt(Fe,[.095,.018,.11],[0,-.17,-.005],is,[-.17,0,0])}function ab(){nt($,[.2,.17,.39],[0,.005,.02],ee),nt($,[.14,.055,.31],[0,.11,.01],Bt),Be($,.038,.98,[0,.052,-.77],is,10),Be($,.046,.12,[0,.052,-1.32],Bt,10),Be($,.027,.84,[0,-.055,-.63],Bt,10),nt($,[.045,.1,.08],[0,.135,-1.17],ee),nt($,[.11,.035,.17],[0,.13,-.12],Bt),nt($,[.11,.21,.13],[0,-.16,.16],Ii,[-.14,0,0]),nt($,[.14,.12,.43],[0,0,.48],Wo),nt($,[.16,.13,.05],[0,-.005,.69],Bt),nt($,[.19,.012,.1],[0,-.06,.57],Bt),yn=new jt,Us.set(0,-.035,-.48),yn.position.copy(Us),$.add(yn),nt(yn,[.16,.11,.26],[0,0,0],Wo),nt(yn,[.17,.018,.23],[0,.052,0],jl);for(let t=0;t<5;t++)nt(yn,[.17,.014,.018],[0,-.045+t*.021,-.105],Bt);let i=new ct(new Yi(.065,.009,5,12),ee);i.position.set(0,-.095,.11),$.add(i),nt($,[.018,.08,.02],[.01,-.095,.08],Bt),Fe=null}function lb(i){if(i.model==="cleaver")nt($,[.075,.24,.085],[0,-.1,.2],Co,[-.12,0,0]),nt($,[.09,.055,.095],[0,-.205,.2],ee),nt($,[.31,.24,.065],[-.02,.075,-.17],Bp,[0,0,-.08]),nt($,[.26,.025,.072],[-.035,-.048,-.18],is,[0,0,-.08]),nt($,[.075,.22,.06],[.1,.08,-.19],ee,[0,0,-.1]),nt($,[.025,.025,.02],[0,-.07,.2],id);else if(i.model==="sledgehammer"){Be($,.033,.98,[0,-.02,-.08],jl,8),Be($,.043,.34,[0,-.02,.24],Co,8);for(let t=0;t<4;t++)nt($,[.09,.012,.018],[0,-.02,.12+t*.055],ee);nt($,[.42,.2,.22],[0,.02,-.64],ee),nt($,[.11,.23,.24],[-.18,.02,-.64],Bt),nt($,[.11,.23,.24],[.18,.02,-.64],Bt),nt($,[.26,.035,.235],[0,.135,-.64],is)}else if(i.model==="shovel")Be($,.029,.98,[0,-.005,-.12],Wo,10),Be($,.04,.25,[0,0,.28],Co,9),nt($,[.11,.07,.075],[0,-.005,-.36],ee),nt($,[.31,.045,.32],[0,-.035,-.59],is,[.08,0,0]),nt($,[.29,.018,.075],[0,-.006,-.69],Bp,[.08,0,0]),nt($,[.035,.024,.035],[0,.015,-.43],Bt),Ke=new ct(new _r(.12,1),ku),Ke.scale.set(1.15,.62,1.45),Ke.position.set(0,.006,-.57),Ke.rotation.set(.18,.2,-.12),Ke.visible=ii>0,$.add(Ke);else{Be($,.058,.88,[0,-.005,-.17],Wo,9),Be($,.045,.28,[0,-.01,.33],Co,8),nt($,[.12,.1,.04],[0,-.005,.17],Bt);for(let t=0;t<7;t++){let e=-.52+t*.105,n=t%2===0?1:-1,s=new ct(new po(.021,.13,4),eb);s.position.set(n*.062,.018,e),s.rotation.z=n*Math.PI/2,$.add(s),nt($,[.025,.025,.025],[n*.035,.018,e+.035],Bt)}}}function Wu(i,t){let e=Fs[i];if(!e)return;let n=i==="left"?-1:1,s=new D(t[0]-n*.15,t[1]-.285,t[2]+.025);e.userData.gripPosition=s,e.userData.gripRotation=new pn(i==="left"?.08:-.06,0,i==="left"?.05:-.05),e.position.copy(s),e.rotation.copy(e.userData.gripRotation)}function cb(i){ib(),Ci(i)?lb(i):i.model==="ak"?sb():i.model==="m4"?rb():i.type==="pistol"?ob(i):i.type==="shotgun"&&ab();let t=Ci(i)?{position:[.29,-.34,-.82],rotation:[.2,.22,.04],left:[-.08,-.1,-.055],right:[.07,-.105,.18]}:i.type==="pistol"?{position:[.3,-.39,-.69],rotation:[.18,.22,.02],left:[-.045,-.14,.17],right:[.035,-.105,.15]}:i.type==="shotgun"?{position:[.28,-.34,-.82],rotation:[.23,.24,.015],left:[-.09,-.015,-.46],right:[.07,-.105,.17]}:{position:[.28,-.33,-.78],rotation:[.25,.25,.015],left:[-.09,-.015,-.39],right:[.07,-.105,.17]};Rn.set(...t.position),Cn.set(...t.rotation,"XYZ"),We.position.copy(Rn),We.rotation.copy(Cn),Wu("left",t.left),Wu("right",t.right);let e=i.type==="pistol"?-.43:i.type==="shotgun"?-1.38:Ci(i)?0:-1.09;xn.position.set(0,i.type==="shotgun"?.052:.025,e),xn.visible=!1,Ke&&(Ke.visible=ii>0),$.visible=!0}function na(){return Ls.get(vn)||null}function Jl(){return vn&&ed.get(vn)||null}function hb(i,t=!0){let e=Ls.get(i);return e?(vn=i,$e=!1,Hs=0,In=0,qo=0,zs=0,Vl=!1,Ri=0,Ol=null,Nr=0,es=0,Pr=0,cb(e),Kl(),t&&ue(`${e.name.toUpperCase()} \xB7 \u0413\u041E\u0422\u041E\u0412\u041E`,.9),!0):!1}function rm(i){let t=new jt,e=i<0?-1:1,n=on(new St(.145,.33,.17),Q1,[-e*.045,-.065,0],e*.37);t.add(n);let s=on(new St(.152,.018,.176),Bu,[-e*.018,.058,-.002],e*.37);t.add(s);let r=on(new St(.18,.075,.19),tb,[e*.082,.19,-.006],e*.37);t.add(r),t.add(on(new St(.145,.018,.194),Ao,[e*.082,.166,-.006],e*.37));let o=new jt;o.position.set(e*.15,.285,-.025),o.rotation.z=-e*.06,t.add(o),o.add(on(new St(.225,.165,.112),Ro,[0,0,0])),o.add(on(new St(.135,.074,.012),Ao,[0,.005,-.062])),o.add(on(new St(.084,.018,.018),Bu,[0,-.071,-.052])),o.add(on(new St(.196,.025,.018),Bu,[0,.067,-.057]));let a=[.081,.094,.087,.071];for(let u=0;u<4;u++){let f=new jt,g=a[u]*.59,y=a[u]*.41;f.position.set((u-1.5)*.052,.078,-.018),o.add(f),f.add(on(new St(.041,g,.076),Ro,[0,g*.5,0])),f.add(on(new St(.044,.022,.078),Ao,[0,g-.008,-.004]));let m=new jt;m.position.y=g-.004,f.add(m),m.add(on(new St(.037,y,.071),Ro,[0,y*.48,0])),m.add(on(new St(.038,.015,.073),Ao,[0,y-.007,-.002])),Gu.push({base:f,distal:m,fan:(u-1.5)*.055,side:e})}let l=new jt;l.position.set(e*.104,-.008,-.025),l.rotation.z=e*.54,o.add(l),l.add(on(new St(.057,.085,.078),Ro,[0,.041,0]));let c=new jt;c.position.y=.075,l.add(c),c.add(on(new St(.052,.067,.072),Ao,[0,.031,-.002])),Gu.push({base:l,distal:c,fan:.54,side:e,thumb:!0});let h=i<0?[-.09,-.015,-.39]:[.07,-.105,.17];We.add(t);let d=i<0?"left":"right";Fs[d]=t,Wu(d,h)}rm(-1);rm(1);Ti=nd=.78;Os.visible=!1;We.visible=!1;$.visible=!1;function ub(i){Ti=$t.damp(Ti,nd,13,i);for(let t of Gu)t.thumb?(t.base.rotation.x=-Ti*.6,t.base.rotation.z=t.side*(.54+Ti*.62),t.distal.rotation.x=-Ti*.9):(t.base.rotation.x=-Ti*.58,t.base.rotation.z=t.fan*(.25+Ti*.25),t.distal.rotation.x=-Ti*1.28)}function Kl(){let i=na(),t=Jl(),e=document.querySelector(".weapon-controls");e&&(e.style.display=i?"block":"none");let n=tt("ammo-count"),s=tt("fire-label"),r=tt("fire-button"),o=tt("reload-button");if(!i){n&&(n.textContent=""),s&&(s.textContent=""),r&&(r.disabled=!0,r.setAttribute("aria-label","\u041D\u0435\u0442 \u044D\u043A\u0438\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430"),r.classList.remove("melee-mode")),o&&(o.style.display="none");return}n&&(n.textContent=i.magazineSize===null?"":`${t.magazine} / ${t.reserve}`),s&&(s.textContent=Ci(i)?"\u0423\u0414\u0410\u0420":"\u041E\u0413\u041E\u041D\u042C"),r&&(r.disabled=i.magazineSize!==null&&t.magazine<=0&&t.reserve<=0,r.setAttribute("aria-label",`${i.name}: ${Ci(i)?"\u0443\u0434\u0430\u0440":"\u043E\u0433\u043E\u043D\u044C"}`),r.classList.toggle("melee-mode",Ci(i))),o&&(o.style.display=i.magazineSize===null?"none":"grid")}function om(){if(Ds)return Ds;let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;Ds=new i;let t=Math.floor(Ds.sampleRate*.65);Xo=Ds.createBuffer(1,t,Ds.sampleRate);let e=Xo.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1;return Ds}function am(){try{let i=om();if(!i||!Xo)return;i.state==="suspended"&&i.resume();let t=i.currentTime,e=.035+Math.random()*.055,n=i.createBufferSource();n.buffer=Xo;let s=i.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(850+Math.random()*1800,t),s.Q.value=1.6+Math.random()*1.4;let r=i.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.035+Math.random()*.025,t+.006),r.gain.exponentialRampToValueAtTime(1e-4,t+e),n.connect(s),s.connect(r),r.connect(i.destination),n.start(t,Math.random()*.45,e),n.stop(t+e+.01)}catch{}}function db(i){ei&&(Do=Math.max(0,Do-i),Do<=0&&(ei=!1,ue("\u0414\u0420\u041E\u0412\u0410 \u041F\u0420\u041E\u0413\u041E\u0420\u0415\u041B\u0418",1))),Bs&&(Bs.visible=ei),ns&&(ns.visible=ei),Lo&&(Lo.intensity=ei?2.3+Math.sin(tc*17)*.28+Math.random()*.18:0);for(let t of em){if(!ei){t.mesh.visible=!1;continue}t.phase=(t.phase+i*t.rate)%(Math.PI*2);let e=t.phase/(Math.PI*2);t.mesh.position.set(Math.sin(t.phase*2.15)*t.spread,.11+e*.54,Math.cos(t.phase*1.55)*t.spread*.42),t.mesh.rotation.set(t.phase*.7,t.phase*.45,t.phase*1.1),t.mesh.scale.set(.65+e*.48,.72+e*.66,.62+e*.5),t.mesh.material.opacity=Math.sin(Math.PI*e)*.92,t.mesh.visible=e<.96}ei&&(Ll-=i,Ll<=0&&(am(),Ll=.55+Math.random()*1.15))}function Yo(i,t="fire"){try{let e=om();if(!e)return;e.state==="suspended"&&e.resume();let n=e.currentTime,s=i.sound,r=t==="fire"?s.duration:t==="swing"?.17:t==="impact"?.095:.075,o=t==="swing"?s.swing:t==="impact"?s.impact:s.frequency,a=t==="fire"?s.noise:t==="impact"?s.noise*.48:t==="swing"?.18:.08,l=e.createBiquadFilter();l.type=t==="swing"?"highpass":"lowpass",l.frequency.setValueAtTime(t==="fire"?s.filter:Math.max(240,s.filter*.72),n),l.Q.value=t==="swing"?.7:.5;let c=e.createGain();c.gain.setValueAtTime(Math.min(.34,a*.24),n),c.gain.exponentialRampToValueAtTime(1e-4,n+r);let h=e.createBufferSource();h.buffer=Xo,h.connect(l),l.connect(c),c.connect(e.destination),h.start(n),h.stop(n+r);let d=e.createOscillator();d.type=t==="fire"?s.waveform||"triangle":"sine",d.frequency.setValueAtTime(o,n),d.frequency.exponentialRampToValueAtTime(Math.max(32,o*(t==="swing"?.52:.36)),n+r);let u=e.createGain(),f=t==="fire"?s.bass:t==="impact"?s.bass*1.2:t==="swing"?.015:.022;u.gain.setValueAtTime(Math.max(1e-4,f),n),u.gain.exponentialRampToValueAtTime(1e-4,n+r),d.connect(u),u.connect(e.destination),d.start(n),d.stop(n+r)}catch{}}function sd(){let i=na(),t=Jl();if(!(pe||Ze||Se||qt||!i||!t||In>0||i.magazineSize===null)){if(t.magazine>=i.magazineSize){ue("\u041C\u0410\u0413\u0410\u0417\u0418\u041D \u041F\u041E\u041B\u041E\u041D",.85);return}if(t.reserve<=0){ue("\u041D\u0415\u0422 \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412",.9);return}$e=!1,In=i.reloadDuration,qo=0,es=0,Yo(i,"reload"),ue("\u041F\u0415\u0420\u0415\u0417\u0410\u0420\u042F\u0414\u041A\u0410",.8)}}function fb(){let i=na(),t=Jl();if(!i||!t||i.magazineSize===null)return;let e=Ep(i,t);qo=1,Kl(),e>0&&ue("\u0413\u041E\u0422\u041E\u0412\u041E",.65)}function pb(i){let t=new jt,e=i.face?.normal?.clone()||new D(0,0,1);i.object.updateWorldMatrix(!0,!1),e.transformDirection(i.object.matrixWorld).normalize();let n=new Sn({color:1119509,transparent:!0,opacity:.96,depthWrite:!1,side:un,polygonOffset:!0,polygonOffsetFactor:-2}),s=new Sn({color:7168592,transparent:!0,opacity:.76,depthWrite:!1,side:un,polygonOffset:!0,polygonOffsetFactor:-2}),r=new ct(new nl(.023,.035,8),s),o=new ct(new Xi(.024,8),n);if(t.add(r,o),t.position.copy(i.point).addScaledVector(e,.004),t.quaternion.setFromUnitVectors(new D(0,0,1),e),Me.add(t),Fr.push({object:t,life:22,maxLife:22}),Fr.length>72){let a=Fr.shift();lm(a)}}function lm(i){i?.object&&(Me.remove(i.object),i.object.traverse(t=>{t.geometry?.dispose(),t.material&&t.material!==Bt&&t.material.dispose?.()}))}function mb(i){for(let t=Fr.length-1;t>=0;t--){let e=Fr[t];e.life-=i;let n=$t.clamp(e.life/e.maxLife,0,1);e.object.traverse(s=>{s.material?.transparent&&(s.material.opacity=n*(s.geometry?.type==="RingGeometry"?.76:.96))}),e.life<=0&&(Fr.splice(t,1),lm(e))}}function gb(i,t,e,n=1){if(!(!i||i.isStored||i.isHeld)){if(i.kind==="mannequin"&&i.human){let s=i.human,r=s.partMap[i.key]||s.partMap.torso,o=Sp(s,e,i.key,n);s.hitFlash=.32;let a=new _(t.x,t.y,t.z);if(!s.active)hd(s,r,Math.max(6,o.damage*.18),a,!1);else if(s.state!=="falling"&&!s.dead){s.state="falling",s.stateTime=0,s.quietTime=0;for(let l of s.parts)l.body.type=Pt.DYNAMIC,l.body.mass=l.mass,l.body.updateMassProperties(),l.body.wakeUp();Zt.broadphase.dirty=!0}if(r.body.type===Pt.DYNAMIC){let l=Ci(e)?5+o.damage*.25:1.8+o.damage*.12;r.body.applyImpulse(new _(t.x*l,t.y*l,t.z*l),new _)}o.lethal&&(s.dead=!0,s.active=!0,s.state="dead"),e.pellets||Yo(e,"impact"),ue(`${s.id} \xB7 ${e.name.toUpperCase()} \u2212${o.damage} \u041E\u0417 \xB7 ${o.health} \u041E\u0417`,1.05);return}if(i.kind==="prop"&&i.body?.type===Pt.DYNAMIC){let s=Ci(e)?7:e.type==="shotgun"?3.5:2.4;i.body.applyImpulse(new _(t.x*s,t.y*s,t.z*s),new _),i.body.wakeUp()}}}var Pl=new vo;function qu(i,t=0,e=0,n=1){Ve.updateMatrixWorld(!0),Pl.far=i.range,Pl.setFromCamera(new at(t,e),Ve);let s=[...Br,...Yp],r=Tp(Pl,s)[0];if(!r)return null;let o=r.object.userData.gameMeta||r.object.parent?.userData?.gameMeta;return o?gb(o,Pl.ray.direction,i,n):r.object.userData.bulletSurface&&pb(r),r}function yb(i){ia(),qu(i)}function rd(){let i=na(),t=Jl();if(!(pe||Ze||Se||qt||!i||In>0||Hs>0||Ri>0)){if(Ci(i)){if(zs>0)return;zs=i.swingDuration,Vl=!1,Hs=i.cooldown,$e=!1,Yo(i,"swing");return}if(!bp(i,t)){sd();return}if(Kl(),Hs=i.cooldown,es=i.type==="shotgun"?1.25:i.type==="rifle"?.9:.7,ni=Math.min(.5,ni+(i.type==="shotgun"?.22:.1)),rs=$t.clamp(rs+(i.type==="shotgun"?.026:.009),-1.18,1.18),Yo(i,"fire"),Pr=i.type==="shotgun"?.11:.075,xn.visible=!0,xn.userData.light.intensity=i.type==="shotgun"?4.1:2.8,ia(),i.pellets){for(let e=0;e<i.pellets;e++){let n=e*2.399963229728653,s=e===0?0:i.spread*Math.sqrt(e/(i.pellets-1));qu(i,Math.cos(n)*s,Math.sin(n)*s,1)}Nr=.34}else qu(i);i.automatic||($e=!1)}}function xb(i){let t=na();if(Hs=Math.max(0,Hs-i),es=$t.damp(es,0,18,i),!t){$e=!1,xn.visible=!1,$.visible=!1,We.visible=!pe&&!!qt;return}$e&&Hs<=0&&In<=0&&rd(),In>0&&(In=Math.max(0,In-i),qo=1-In/t.reloadDuration,In===0&&fb()),Pr>0&&(Pr=Math.max(0,Pr-i),Pr===0&&(xn.visible=!1,xn.userData.light.intensity=0));let e=In>0?Math.sin(qo*Math.PI):0;if(Nr>0){Nr=Math.max(0,Nr-i);let n=1-Nr/.34;yn&&yn.position.set(Us.x,Us.y,Us.z+Math.sin(n*Math.PI)*.13)}else yn&&yn.position.copy(Us);if(Ri>0){let n=1-Ri/nm,s=Math.sin(n*Math.PI);Ri=Math.max(0,Ri-i),We.position.set(Rn.x,Rn.y-s*.17,Rn.z+s*.16),We.rotation.set(Cn.x+s*.52,Cn.y+s*.04,Cn.z-s*.12),Ri===0&&Sb()}else if(zs>0){zs=Math.max(0,zs-i);let n=1-zs/t.swingDuration,s=Math.sin(n*Math.PI);We.position.set(Rn.x,Rn.y-s*.12,Rn.z+s*.08),We.rotation.set(Cn.x+s*.36,Cn.y-s*.12,Cn.z-s*.92),!Vl&&n>=.43&&(Vl=!0,yb(t))}else We.position.set(Rn.x,Rn.y-es*.035-e*.07,Rn.z+es*.065),We.rotation.set(Cn.x+es*.11-e*.08,Cn.y,Cn.z+e*.07);if(Fe&&(Fe.position.set(Or.x,Or.y-e*.18,Or.z+e*.035),Fe.rotation.x=-e*.24),Fs.left){let n=Fs.left.userData.gripPosition,s=Fs.left.userData.gripRotation;n&&s&&(Fs.left.position.set(n.x,n.y-e*.11,n.z+e*.12),Fs.left.rotation.set(s.x-e*.22,s.y,s.z))}yn&&In>0&&(yn.position.z=Us.z+e*.08),Ke&&(Ke.visible=ii>0&&!qt),$.visible=!qt,We.visible=!pe&&!!(t||qt)}var Wr=new ho;Wr.background=null;var $o=new He(31,1,.1,20);$o.position.set(2.35,2.05,3.9);$o.lookAt(0,.98,0);var Ee=new jt;Wr.add(Ee);var cm=new dt({color:5858898,roughness:.88}),Fp=new dt({color:3423285,roughness:.92}),vb=new dt({color:2435621,roughness:.85}),Zo=new dt({color:3753277,roughness:.76,metalness:.08}),Ql=new dt({color:10718305,roughness:.92}),_b=new dt({color:6713939,roughness:.78}),od=new dt({color:2108202,roughness:.56,metalness:.18}),hm=new dt({color:10193778,roughness:.88}),Mb=new dt({color:11895373,roughness:.68,metalness:.12});function Re(i,t,e,n,s=[0,0,0]){let r=new ct(new St(t[0],t[1],t[2]),n);return r.position.set(e[0],e[1],e[2]),r.rotation.set(s[0],s[1],s[2]),i.add(r),r}var um=new ct(new sn(.67,.72,.055,28),new dt({color:2568492,roughness:.96,metalness:.04}));um.position.y=.015;Wr.add(um);Re(Ee,[.44,.24,.27],[0,.58,0],Zo);Re(Ee,[.5,.69,.3],[0,1.02,0],cm);Re(Ee,[.37,.56,.2],[0,1,-.22],Zo);Re(Ee,[.07,.52,.035],[-.13,1.03,.17],Ql,[0,0,-.1]);Re(Ee,[.07,.52,.035],[.13,1.03,.17],Ql,[0,0,.1]);Re(Ee,[.46,.07,.32],[0,.69,0],Ql);Re(Ee,[.13,.16,.06],[0,.94,.185],Mb);Re(Ee,[.12,.13,.035],[0,1.05,.19],Ql);Re(Ee,[.15,.14,.15],[0,1.45,0],hm);Re(Ee,[.32,.33,.28],[0,1.67,0],hm);Re(Ee,[.38,.2,.35],[0,1.83,-.005],_b);Re(Ee,[.4,.045,.38],[0,1.77,.005],Zo);Re(Ee,[.22,.105,.08],[0,1.59,.17],od);Re(Ee,[.075,.105,.085],[-.145,1.59,.16],od);Re(Ee,[.075,.105,.085],[.145,1.59,.16],od);for(let i of[-1,1])Re(Ee,[.18,.46,.2],[i*.35,1.05,0],cm,[0,0,i*-.06]),Re(Ee,[.15,.37,.17],[i*.39,.67,.025],Zo,[0,0,i*.025]),Re(Ee,[.15,.11,.15],[i*.39,.42,.035],Ro),Re(Ee,[.19,.43,.22],[i*.125,.36,0],Fp),Re(Ee,[.16,.34,.18],[i*.13,.17,.015],Fp),Re(Ee,[.2,.13,.3],[i*.13,.065,.07],vb),Re(Ee,[.23,.035,.31],[i*.13,.015,.075],Zo);Wr.add(new go(13885391,3883063,1.6));var dm=new xo(16769719,2.2);dm.position.set(-2.5,4.5,3.5);Wr.add(dm);var Gn=null,Xu=!1,Up=0,Fu=0,ss=0,rs=0,ri=!0,qt=null,Ai=null,an={x:0,y:0,pointerId:null},Pn=null,Io=0,ni=0,Gl=0,os=100,Bo=100,Fo=100,Lr=58,Uu=0,pe=!1,ad=0,Yu=!1,fm=null,Se=!1,zr="bag",Pi="shovel",Ze=!1,Ln=[],si=null,wb=0,pm=8,mm=5,Uo=30,Dr={head:0,neck:0,torso:0,"arm-left":0,"arm-right":0,"leg-left":0,"leg-right":0},ld=new Set,Oo=0,Ou=0,tc=0,zu=0,Nl=0,Op=60,$u=!1,ke=new Set,jo=new vo;jo.far=5;var Nn=new D,Qi=new D,zp=new D;function ue(i,t=1.45){let e=tt("toast");e&&(e.textContent=i,e.classList.add("visible"),Oo=t)}var zo={head:"injury-head",neck:"injury-neck",torso:"injury-torso","arm-left":"injury-arm-left","arm-right":"injury-arm-right","leg-left":"injury-leg-left","leg-right":"injury-leg-right"};function cd(){tt("health-value").textContent=String(os),tt("health-bar").style.width=`${os}%`,tt("health-bar").style.background=os<35?"#d95c50":os<70?"#c3a66d":"#9ab779"}function gm(){tt("hunger-value").textContent=String(Math.round(Bo)),tt("hunger-bar").style.width=`${Bo}%`,tt("hunger-bar").style.background=Bo<25?"#dc7950":"#c4a66e",tt("thirst-value").textContent=String(Math.round(Fo)),tt("thirst-bar").style.width=`${Fo}%`,tt("thirst-bar").style.background=Fo<25?"#5fa6c5":"#78aeb6",tt("heat-value").textContent=String(Math.round(Lr)),tt("heat-bar").style.width=`${Lr}%`,tt("heat-bar").style.background=Lr<25?"#69a9c2":Lr>78?"#edaf68":"#cf8756"}function Ho(i){return{head:"\u0413\u041E\u041B\u041E\u0412\u0410",neck:"\u0428\u0415\u042F",torso:"\u041A\u041E\u0420\u041F\u0423\u0421","arm-left":"\u041B\u0415\u0412\u0410\u042F \u0420\u0423\u041A\u0410","arm-right":"\u041F\u0420\u0410\u0412\u0410\u042F \u0420\u0423\u041A\u0410","leg-left":"\u041B\u0415\u0412\u0410\u042F \u041D\u041E\u0413\u0410","leg-right":"\u041F\u0420\u0410\u0412\u0410\u042F \u041D\u041E\u0413\u0410"}[i]||"\u041A\u041E\u0420\u041F\u0423\u0421"}function ym(i){let t=Dr[i]||0,e=ld.has(i);tt("injury-status").textContent=e?`\u041A\u0420\u041E\u0412\u041E\u0422\u0415\u0427\u0415\u041D\u0418\u0415 \xB7 ${Ho(i)}`:t>0?`\u0422\u0420\u0410\u0412\u041C\u0410 \xB7 ${Ho(i)}`:`\u0411\u0415\u0417 \u0422\u0420\u0410\u0412\u041C \xB7 ${Ho(i)}`,tt("injury-status").classList.toggle("alert",t>0||e)}function bb(i,t){let e=zo[i]?i:"torso",n=tt(zo[e]);Dr[e]=Math.min(1,(Dr[e]||0)+Math.max(.28,t/24)),n.classList.add("injured"),n.style.opacity=String(.55+Dr[e]*.45),Dr[e]>=.55&&(ld.add(e),tt(`bleed-${e}`).classList.add("active")),fm=e;for(let[s,r]of Object.entries(zo))tt(r).classList.toggle("selected",s===e);ym(e)}function xm(i){if(!zo[i])return;fm=i;for(let[n,s]of Object.entries(zo))tt(s).classList.toggle("selected",n===i);ym(i);let t=Dr[i]||0,e=ld.has(i)?" \xB7 \u041A\u0420\u041E\u0412\u041E\u0422\u0415\u0427\u0415\u041D\u0418\u0415":t>0?` \xB7 \u0422\u0420\u0410\u0412\u041C\u0410 ${Math.round(t*100)}%`:" \xB7 \u041F\u041E\u0412\u0420\u0415\u0416\u0414\u0415\u041D\u0418\u0419 \u041D\u0415\u0422";ue(`${Ho(i)}${e}`,1.2)}function Hp(i="\u041A\u0420\u0418\u0422\u0418\u0427\u0415\u0421\u041A\u041E\u0415 \u041F\u041E\u0412\u0420\u0415\u0416\u0414\u0415\u041D\u0418\u0415"){pe||(Se&&Wn(!1),Ze&&Hr(!1),$e=!1,Yu=!!qt,pe=!0,ad=0,os=0,cd(),tt("death-detail").textContent=i,tt("death-overlay").classList.add("visible"),tt("death-overlay").setAttribute("aria-hidden","false"),document.body.classList.add("dead"),ke.clear(),Gs(),Pn=null,vt.velocity.set(0,0,0),Vs(0),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock())}function vm(i,t="torso"){if(!ri||pe)return;let e=Math.max(1,Math.round(i)),n=t==="neck"&&e>=14;if(!(Gl>0&&!n)){if(Gl=.72,os=Math.max(0,os-e),ni=Math.min(1.4,ni+.85),cd(),bb(t,e),document.body.classList.add("damage-flash"),setTimeout(()=>document.body.classList.remove("damage-flash"),170),t==="neck"&&e>=14){Hp("\u0428\u0415\u0419\u041D\u0410\u042F \u0422\u0420\u0410\u0412\u041C\u0410 \xB7 \u041A\u0420\u0418\u0422\u0418\u0427\u0415\u0421\u041A\u0410\u042F \u041A\u0420\u041E\u0412\u041E\u041F\u041E\u0422\u0415\u0420\u042F");return}if(os===0){Hp(`\u0421\u041C\u0415\u0420\u0422\u0415\u041B\u042C\u041D\u041E\u0415 \u0420\u0410\u041D\u0415\u041D\u0418\u0415 \xB7 ${Ho(t)}`);return}ue(`\u0423\u0414\u0410\u0420 \xB7 \u2212${e}%`,.9)}}function Eb(i){if(!ri||Se||Ze||pe)return;Bo=Math.max(0,Bo-i*.045),Fo=Math.max(0,Fo-i*.065);let t=Math.hypot(vt.position.x-gn.x,vt.position.z-gn.z);Lr=Ip(Lr,i,ei&&t<=3.8),Uu+=i,Uu>=.35&&(Uu=0,gm())}function hd(i,t=i.partMap.torso,e=0,n=null,s=!1){if(i.active){if(s&&t?.body){let r=new _(Nn.x*8.5,Math.max(1,Nn.y*8.5),Nn.z*8.5);t.body.applyImpulse(r,new _),ue("\u0418\u041C\u041F\u0423\u041B\u042C\u0421 \u041F\u0415\u0420\u0415\u0414\u0410\u041D",.85)}return}i.active=!0,i.state="falling",i.stateTime=0,i.quietTime=0,i.hitFlash=.24;for(let r of i.parts)r.body.type=Pt.DYNAMIC,r.body.mass=r.mass,r.body.updateMassProperties(),r.body.wakeUp();if(Zt.broadphase.dirty=!0,t?.body){let r;if(s){r=new _(Nn.x,Math.max(.08,Nn.y),Nn.z),r.normalize();let o=r.scale(13.5);t.body.applyImpulse(o,new _)}else{r=n&&n.lengthSquared()>.08?n.clone():new _(0,0,1);let o=r.length();r.normalize();let a=Math.min(48,Math.max(6,e*t.mass*.78));t.body.applyImpulse(r.scale(a),t.body.position)}}ue(s?`${i.id} \xB7 \u0420\u0410\u0413\u0414\u041E\u041B\u041B \u0410\u041A\u0422\u0418\u0412\u0418\u0420\u041E\u0412\u0410\u041D`:`${i.id} \xB7 \u0423\u0414\u0410\u0420 / \u0420\u0410\u0413\u0414\u041E\u041B\u041B`,1.3)}function ia(){return Ve.getWorldDirection(Nn),Nn}function _m(){jo.setFromCamera(new at(0,0),Ve);let i=jo.intersectObjects(Br,!0);for(let t of i){let e=t.object.userData.gameMeta||t.object.parent?.userData?.gameMeta;if(!(!e||e.isStored||e.isEmpty||t.distance>(e.range||4.5)))return{meta:e,distance:t.distance,point:t.point}}return null}function Mm(){if(!Hu)return null;Ve.updateMatrixWorld(!0),jo.setFromCamera(new at(0,0),Ve);let i=jo.intersectObject(Hu,!1)[0];return i&&i.distance<=4.8?i:null}function wm(){return Math.hypot(vt.position.x-gn.x,vt.position.z-gn.z)<=2.85}function kp(i,t){return vn!=="shovel"?(ue("\u041D\u0423\u0416\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0410",1),!1):Ri>0?!1:(Ol=i==="scoop"?{kind:i,drift:t}:{kind:i,point:{x:t.x,z:t.z}},Ri=nm,$e=!1,Yo(Ls.get("shovel"),"swing"),!0)}function Sb(){let i=Ol;if(Ol=null,!i)return;if(i.kind==="scoop"){let e=Ap(i.drift,ii);if(!e.ok){ue(e.reason==="already-carrying"?"\u0421\u041D\u0415\u0413 \u0423\u0416\u0415 \u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0415":"\u0421\u0423\u0413\u0420\u041E\u0411 \u0417\u0410\u041A\u041E\u041D\u0427\u0418\u041B\u0421\u042F",1);return}ii=e.amount,tm(i.drift),Ke&&(Ke.visible=!0),ue("\u0421\u041D\u0415\u0413 \u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0415 \xB7 \u041F\u0415\u0420\u0415\u041D\u041E\u0421 \u0417\u0410\u041C\u0415\u0414\u041B\u042F\u0415\u0422",1.35);return}let t=Rp(ii,i.point);if(!t.ok){ue("\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0415 \u041D\u0415\u0422 \u0421\u041D\u0415\u0413\u0410",.9);return}Qo(t.pile.x,t.pile.z,t.pile.amount),ii=t.remaining,Ke&&(Ke.visible=!1),ue("\u0421\u041D\u0415\u0413 \u0421\u0411\u0420\u041E\u0428\u0415\u041D \xB7 \u041D\u041E\u0412\u042B\u0419 \u0421\u0423\u0413\u0420\u041E\u0411",1.2)}function ud(){let i=tt("action-button");if(!i)return;let t=tt("action-label");if(t.textContent="\u0414\u0415\u0419\u0421\u0422\u0412\u0418\u0415",pe){Ai=null,i.classList.remove("is-holding","has-target");return}if(Ai=_m(),qt){let n=qt.gameMeta?.kind==="firewood"&&wm();t.textContent=n?ei?"\u041F\u041E\u0414\u0411\u0420\u041E\u0421\u0418\u0422\u042C \u0414\u0420\u041E\u0412\u0410":"\u0420\u0410\u0417\u0416\u0415\u0427\u042C \u041F\u0415\u0427\u042C":"\u041F\u041E\u041B\u041E\u0416\u0418\u0422\u042C \u041F\u0420\u0415\u0414\u041C\u0415\u0422",i.classList.add("is-holding"),i.classList.toggle("has-target",n);return}if(i.classList.remove("is-holding"),vn==="shovel"&&ii>0){t.textContent="\u0421\u0411\u0420\u041E\u0421\u0418\u0422\u042C \u0421\u041D\u0415\u0413",i.classList.toggle("has-target",!!(Ai||Mm()));return}Ai?.meta.kind==="snowdrift"?t.textContent=vn==="shovel"?"\u0427\u0415\u0420\u041F\u0410\u0422\u042C \u0421\u041D\u0415\u0413":"\u041D\u0423\u0416\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0410":Ai?.meta.kind==="stove"?t.textContent="\u041D\u0423\u0416\u041D\u042B \u0414\u0420\u041E\u0412\u0410":(Ai?.meta.kind==="firewood"||Ai?.meta.kind==="prop")&&(t.textContent="\u0412\u0417\u042F\u0422\u042C"),i.classList.toggle("has-target",!!Ai)}function dd(i){let t=i.body;t.collisionFilterMask=i.originalCollisionFilterMask&~Vo,i.playerCollisionSuspended=!0,i.playerCollisionReEnableAfter=tc+.35}function bm(i){let t=i.body;!t||t.gameMeta?.isHeld||i.isStored||(qt=t,t.gameMeta.isHeld=!0,t.type=Pt.DYNAMIC,t.mass=t.gameMeta.initialMass,t.gameMeta.playerCollisionSuspended=!1,t.collisionFilterMask=t.gameMeta.originalCollisionFilterMask&~Vo,t.linearDamping=.82,t.angularDamping=.92,t.updateMassProperties(),t.velocity.set(0,0,0),t.angularVelocity.set(0,0,0),t.force.set(0,0,0),t.wakeUp(),Zt.broadphase.dirty=!0,Vs(1),ue(`${i.name} \xB7 ${i.mass.toFixed(1)} \u041A\u0413`,1.15))}function Tb(){if(!qt)return;let i=qt,t=i.gameMeta;ia(),i.type=Pt.DYNAMIC,i.mass=t.initialMass,dd(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.updateMassProperties(),i.gameMeta.isHeld=!1,i.force.set(0,0,0),i.updateAABB();let e=Math.max(.08,(i.aabb.upperBound.y-i.aabb.lowerBound.y)*.5);i.position.y=Math.max(i.position.y,e+.025);let s=9.6*Math.max(.34,Math.min(1.15,Math.sqrt(2.8/t.initialMass)));i.velocity.set(Nn.x*s+vt.velocity.x,Nn.y*s+1.05+vt.velocity.y,Nn.z*s+vt.velocity.z),i.angularVelocity.set((Math.random()-.5)*3.4,(Math.random()-.5)*3.4,(Math.random()-.5)*3.4),i.wakeUp(),Zt.broadphase.dirty=!0,qt=null,Vs(0),ue(`\u0411\u0420\u041E\u0421\u041E\u041A \xB7 ${t.name}`,.95)}function Ab(){if(!qt)return;let i=qt,t=i.gameMeta;i.type=Pt.DYNAMIC,i.mass=t.initialMass,dd(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.gameMeta.isHeld=!1,i.updateMassProperties(),i.updateAABB();let e=Math.max(.08,(i.aabb.upperBound.y-i.aabb.lowerBound.y)*.5);i.position.y=Math.max(i.position.y,e+.025),i.velocity.set(vt.velocity.x*.45,-.18,vt.velocity.z*.45),i.angularVelocity.set(0,0,0),i.wakeUp(),Zt.broadphase.dirty=!0,qt=null,Vs(0),ue(`\u041F\u041E\u041B\u041E\u0416\u0415\u041D\u041E \xB7 ${t.name}`,.95)}function Rb(){if(!qt)return;let i=qt,t=i.gameMeta;t.isHeld=!1,dd(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.velocity.set(0,0,0),i.angularVelocity.set(0,0,0),i.wakeUp(),qt=null,Zt.broadphase.dirty=!0,Vs(0)}function Em(){return Ln.reduce((i,t)=>i+t.meta.mass,0)}function Cb(i,t){for(let e=0;e<=mm-t;e++)for(let n=0;n<=pm-i;n++)if(!Ln.some(r=>n<r.x+r.width&&n+i>r.x&&e<r.y+r.height&&e+t>r.y))return{x:n,y:e};return null}function Ib(i){let t=Ln.find(n=>n.id===i);if(!t)return;ec("bag"),si=i,tt("inventory-selected-name").textContent=t.meta.name,tt("inventory-selected-weight").textContent=`${t.meta.mass.toFixed(1)} \u043A\u0433`,tt("inventory-selected-description").textContent=t.meta.description||t.meta.detail||"\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439.";let e=tt("inventory-take");e.disabled=!!qt,e.textContent=qt?"\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422":"\u0414\u041E\u0421\u0422\u0410\u0422\u042C \u041F\u0420\u0415\u0414\u041C\u0415\u0422",tt("inventory-message").textContent=`${t.meta.type} \xB7 ${t.width} \xD7 ${t.height} \u042F\u0427\u0415\u0419\u041A\u0418`;for(let n of tt("inventory-grid").querySelectorAll(".inventory-item"))n.classList.toggle("selected",n.dataset.itemId===i),n.setAttribute("aria-pressed",String(n.dataset.itemId===i))}function Pb(i){let t=Ls.get(i);if(!t)return;zr="all",Pi=i,tt("inventory-tab-bag").classList.remove("active"),tt("inventory-tab-bag").setAttribute("aria-selected","false"),tt("inventory-tab-all").classList.add("active"),tt("inventory-tab-all").setAttribute("aria-selected","true"),tt("inventory-bag-view").hidden=!0,tt("inventory-all-view").hidden=!1,tt("inventory-selected-name").textContent=t.name,tt("inventory-selected-weight").textContent=`${t.weight.toFixed(1)} \u043A\u0433`;let e=t.magazineSize===null?t.type==="tool"?"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442":"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0431\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439":`\u041C\u0430\u0433\u0430\u0437\u0438\u043D ${t.magazineSize} \xB7 \u0437\u0430\u043F\u0430\u0441 ${t.reserve} \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432`,n=t.pellets?`${t.pellets} \u0434\u0440\u043E\u0431\u0438\u043D \xD7 ${t.damage} \u0443\u0440\u043E\u043D\u0430`:`${t.damage} \u0443\u0440\u043E\u043D\u0430 \u0437\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435`;tt("inventory-selected-description").textContent=`${t.description} ${n}. ${e}.`;let s=vn===i;tt("inventory-take").disabled=s,tt("inventory-take").textContent=s?"\u0423\u0416\u0415 \u0412 \u0420\u0423\u041A\u0410\u0425":"\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C";let r=ed.get(i);tt("inventory-message").textContent=`${t.category.toUpperCase()} \xB7 ${t.type==="tool"?"\u0418\u041D\u0421\u0422\u0420\u0423\u041C\u0415\u041D\u0422":t.magazineSize===null?"\u0411\u041B\u0418\u0416\u041D\u0418\u0419 \u0411\u041E\u0419":`${r.magazine} / ${r.reserve} \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412`}`;for(let o of tt("inventory-all-grid").querySelectorAll(".armory-item"))o.classList.toggle("selected",o.dataset.weaponId===i),o.setAttribute("aria-pressed",String(o.dataset.weaponId===i))}function ec(i){zr=i==="all"?"all":"bag";let t=zr==="all";tt("inventory-tab-bag").classList.toggle("active",!t),tt("inventory-tab-bag").setAttribute("aria-selected",String(!t)),tt("inventory-tab-all").classList.toggle("active",t),tt("inventory-tab-all").setAttribute("aria-selected",String(t)),tt("inventory-bag-view").hidden=t,tt("inventory-all-view").hidden=!t,Sm()}function Sm(){let i=tt("inventory-take");if(zr==="all"){Ls.has(Pi)||(Pi="shovel");let e=Ls.get(Pi),n=ed.get(e.id);tt("inventory-selected-name").textContent=e.name,tt("inventory-selected-weight").textContent=`${e.weight.toFixed(1)} \u043A\u0433`;let s=e.magazineSize===null?e.type==="tool"?"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442":"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0431\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439":`\u041C\u0430\u0433\u0430\u0437\u0438\u043D ${e.magazineSize} \xB7 \u0437\u0430\u043F\u0430\u0441 ${e.reserve} \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432`,r=e.pellets?`${e.pellets} \u0434\u0440\u043E\u0431\u0438\u043D \xD7 ${e.damage} \u0443\u0440\u043E\u043D\u0430`:`${e.damage} \u0443\u0440\u043E\u043D\u0430 \u0437\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435`;tt("inventory-selected-description").textContent=`${e.description} ${r}. ${s}.`;let o=vn===e.id;i.disabled=o,i.textContent=o?"\u0423\u0416\u0415 \u0412 \u0420\u0423\u041A\u0410\u0425":"\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C",tt("inventory-message").textContent=`${e.category.toUpperCase()} \xB7 ${e.type==="tool"?"\u0418\u041D\u0421\u0422\u0420\u0423\u041C\u0415\u041D\u0422":e.magazineSize===null?"\u0411\u041B\u0418\u0416\u041D\u0418\u0419 \u0411\u041E\u0419":`${n.magazine} / ${n.reserve} \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412`}`;return}let t=Ln.find(e=>e.id===si);if(!t){si=null,tt("inventory-selected-name").textContent="\u041F\u0420\u0415\u0414\u041C\u0415\u0422 \u041D\u0415 \u0412\u042B\u0411\u0420\u0410\u041D",tt("inventory-selected-weight").textContent="\u2014",tt("inventory-selected-description").textContent="\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0432 \u0441\u0435\u0442\u043A\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0435\u0433\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B.",i.disabled=!0,i.textContent="\u0412\u042B\u0411\u0415\u0420\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422",tt("inventory-message").textContent=Ln.length?"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0435\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430.":"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0443\u0431\u0440\u0430\u0442\u044C \u0441\u044E\u0434\u0430 \u0438\u0437 \u0440\u0443\u043A.";return}tt("inventory-selected-name").textContent=t.meta.name,tt("inventory-selected-weight").textContent=`${t.meta.mass.toFixed(1)} \u043A\u0433`,tt("inventory-selected-description").textContent=t.meta.description||t.meta.detail||"\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439.",i.disabled=!!qt,i.textContent=qt?"\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422":"\u0414\u041E\u0421\u0422\u0410\u0422\u042C \u041F\u0420\u0415\u0414\u041C\u0415\u0422"}function Nb(){let i=tt("inventory-all-grid");i.replaceChildren();for(let t of Cl){let e=document.createElement("button");e.type="button",e.className=`armory-item${t.id===Pi?" selected":""}`,e.dataset.weaponId=t.id,e.setAttribute("aria-pressed",String(t.id===Pi)),e.title=`${t.name} \xB7 ${t.description}`;let n=document.createElement("span");n.className=`armory-item-icon ${t.type}`,n.textContent=t.type==="tool"?"\u2692":t.type==="melee"?"\u2694":t.type==="pistol"?"\u25A3":t.type==="shotgun"?"\u25C6":"\u2301";let s=document.createElement("b");s.className="armory-item-name",s.textContent=t.name;let r=document.createElement("small");r.className="armory-item-category",r.textContent=t.category.toUpperCase();let o=document.createElement("small");o.className="armory-item-stats",o.textContent=t.magazineSize===null?`${t.damage} \u0423\u0420\u041E\u041D \xB7 ${t.range.toFixed(1)} \u041C`:`${t.magazineSize} \xB7 ${t.damage}${t.pellets?` \xD7 ${t.pellets}`:""}`,e.append(n,s,r,o),e.addEventListener("click",()=>Pb(t.id)),i.appendChild(e)}}function sa(){let i=tt("inventory-grid");Ln.some(e=>e.id===si)||(si=Ln[0]?.id||null),i.replaceChildren();for(let e=0;e<pm*mm;e++){let n=document.createElement("div");n.className="inventory-cell",n.setAttribute("aria-hidden","true"),i.appendChild(n)}for(let e of Ln){let n=document.createElement("button");n.type="button",n.className=`inventory-item${e.id===si?" selected":""}`,n.dataset.itemId=e.id,n.setAttribute("aria-pressed",String(e.id===si)),n.style.gridColumn=`${e.x+1} / span ${e.width}`,n.style.gridRow=`${e.y+1} / span ${e.height}`,n.title=`${e.meta.name} \xB7 ${e.meta.mass.toFixed(1)} \u043A\u0433 \xB7 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F`;let s=document.createElement("span");s.className="inventory-item-top";let r=document.createElement("b");r.className="inventory-item-icon",r.textContent=e.meta.inventoryIcon||"\u25A3";let o=document.createElement("small");o.className="inventory-item-weight",o.textContent=`${e.meta.mass.toFixed(1)} \u043A\u0433`,s.append(r,o);let a=document.createElement("span");a.className="inventory-item-name",a.textContent=e.meta.name,n.append(s,a),n.addEventListener("click",()=>Ib(e.id)),i.appendChild(n)}let t=Em();tt("inventory-weight").textContent=t.toFixed(1),tt("inventory-limit").textContent=Uo.toFixed(1),tt("inventory-weight-bar").style.width=`${Math.min(100,t/Uo*100)}%`,tt("inventory-weight-bar").style.background=t/Uo>.82?"#d08353":"#a4c17e",tt("inventory-empty").style.display=zr==="bag"&&Ln.length===0?"flex":"none",tt("inventory-drop").disabled=!qt,tt("inventory-stash").disabled=!qt,Nb(),Sm()}function fd(){if(Xu)return;let t=tt("inventory-preview-frame").getBoundingClientRect();if(!(t.width<8||t.height<8)){if(!Gn)try{Gn=new co({canvas:tt("inventory-preview-canvas"),alpha:!0,antialias:!0,powerPreference:"low-power"}),Gn.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),Gn.outputColorSpace=Oe,Gn.toneMapping=ll,Gn.toneMappingExposure=1.05,Gn.setClearColor(0,0),tt("inventory-preview-fallback").style.display="none"}catch{Xu=!0,tt("inventory-preview-fallback").classList.add("visible");return}Gn.setSize(t.width,t.height,!1),$o.aspect=t.width/t.height,$o.updateProjectionMatrix()}}function Lb(i){!Se||Xu||(Gn||fd(),Gn&&(Up+=i,Fu+=i,Ee.rotation.y=Math.sin(Up*.42)*.46,!(Fu<1/30)&&(Fu=0,Gn.render(Wr,$o))))}function Wn(i){if(i&&(!ri||pe||Ze))return;Se=i;let t=tt("inventory-overlay");t.classList.toggle("open",i),t.setAttribute("aria-hidden",String(!i)),i?($e=!1,cs=null,Gs(),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),sa(),fd()):ke.clear()}function Hr(i){if(i&&(!ri||pe))return;i&&Se&&Wn(!1),Ze=i;let t=tt("menu-overlay");t.classList.toggle("open",i),t.setAttribute("aria-hidden",String(!i)),i?($e=!1,cs=null,Gs(),ke.clear(),Oo=0,tt("toast").classList.remove("visible"),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock()):ke.clear()}function Db(){if(!qt)return;let i=qt,t=i.gameMeta,e=t.inventoryWidth||2,n=t.inventoryHeight||2;if(Em()+t.mass>Uo+1e-6){ue(`\u041F\u0420\u0415\u0412\u042B\u0428\u0415\u041D \u041B\u0418\u041C\u0418\u0422 \xB7 ${Uo} \u041A\u0413`,1.15),tt("inventory-message").textContent="\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0442\u044F\u0436\u0435\u043B\u043E: \u043E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u0435 \u043C\u0435\u0441\u0442\u043E \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u043B\u0435\u0433\u0447\u0435.";return}let r=Cb(e,n);if(!r){ue("\u041D\u0415\u0422 \u0421\u0412\u041E\u0411\u041E\u0414\u041D\u042B\u0425 \u042F\u0427\u0415\u0415\u041A",1);return}let o=Ni.find(l=>l.body===i);if(!o)return;i.gameMeta.isHeld=!1,i.gameMeta.isStored=!0,i.gameMeta.playerCollisionSuspended=!1,i.collisionFilterMask=t.originalCollisionFilterMask,i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.velocity.set(0,0,0),i.angularVelocity.set(0,0,0),Zt.removeBody(i),Me.remove(o.visual),qt=null,Vs(0);let a={id:`bag-${++wb}`,meta:t,body:i,visual:o.visual,x:r.x,y:r.y,width:e,height:n};Ln.push(a),si=a.id,sa(),ud(),ue(`\u0412 \u0420\u042E\u041A\u0417\u0410\u041A\u0415 \xB7 ${t.name}`,1),ec("bag"),Wn(!0)}function Bb(i){if(pe)return;if(qt){ue("\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u0423\u0414\u0415\u0420\u0416\u0418\u0412\u0410\u0415\u041C\u042B\u0419 \u041F\u0420\u0415\u0414\u041C\u0415\u0422",1);return}let t=Ln.findIndex(o=>o.id===i);if(t<0)return;let[e]=Ln.splice(t,1),{body:n,visual:s,meta:r}=e;r.isStored=!1,n.type=Pt.DYNAMIC,n.mass=r.initialMass,n.collisionFilterMask=r.originalCollisionFilterMask,n.linearDamping=r.originalLinearDamping,n.angularDamping=r.originalAngularDamping,n.force.set(0,0,0),n.velocity.set(0,0,0),n.angularVelocity.set(0,0,0),n.updateMassProperties(),Me.add(s),Zt.addBody(n),Zt.broadphase.dirty=!0,Wn(!1),bm(r),sa()}function Fb(){if(!qt||qt.gameMeta?.kind!=="firewood"||!wm())return!1;let i=qt,t=i.gameMeta,e=Ni.findIndex(s=>s.body===i);if(e<0)return!1;let[n]=Ni.splice(e,1);t.isHeld=!1,qt=null,Zt.removeBody(i),Me.remove(n.visual);for(let s=Br.length-1;s>=0;s--)Br[s].userData.gameMeta===t&&Br.splice(s,1);return Zt.broadphase.dirty=!0,Vs(0),Do+=52,ei=!0,ns&&(ns.visible=!0),Ll=.75+Math.random()*.55,am(),ue(Do>52?"\u0414\u0420\u041E\u0412\u0410 \u0414\u041E\u0411\u0410\u0412\u041B\u0415\u041D\u042B \xB7 \u041F\u0415\u0427\u042C \u0413\u041E\u0420\u0418\u0422":"\u041F\u0415\u0427\u042C \u0420\u0410\u0421\u0422\u041E\u041F\u041B\u0415\u041D\u0410",1.2),!0}function Tm(){if(pe||!ri||Se||Ze)return;if(qt){Fb()||Tb();return}if(vn==="shovel"&&ii>0){let t=Mm();t?kp("dump",t.point):ue("\u041D\u0410\u041F\u0420\u0410\u0412\u042C\u0422\u0415 \u041B\u041E\u041F\u0410\u0422\u0423 \u041D\u0410 \u041F\u041E\u041B",1);return}let i=Ai||_m();if(!i){ue("\u041D\u0415\u0422 \u0426\u0415\u041B\u0418 \u0412 \u0417\u041E\u041D\u0415 \u0414\u041E\u0421\u042F\u0413\u0410\u0415\u041C\u041E\u0421\u0422\u0418",.9);return}if(i.meta.kind==="snowdrift"){if(vn!=="shovel"){ue("\u041D\u0423\u0416\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0410",1);return}kp("scoop",i.meta.drift);return}if(i.meta.kind==="stove"){ue("\u0412\u041E\u0417\u042C\u041C\u0418\u0422\u0415 \u0414\u0420\u041E\u0412\u0410 \u0418 \u0418\u0421\u041F\u041E\u041B\u042C\u0417\u0423\u0419\u0422\u0415 \u0414\u0415\u0419\u0421\u0422\u0412\u0418\u0415",1.15);return}if(i.meta.kind==="firewood"||i.meta.kind==="prop"){bm(i.meta);return}i.meta.kind==="mannequin"&&(ia(),hd(i.meta.human,i.meta.human.partMap[i.meta.key]||i.meta.human.partMap.torso,0,null,!0))}function Ub(i){if(!qt||pe)return;ia();let t=Ve.getWorldPosition(Qi);zp.copy(Nn).multiplyScalar(1.62),Qi.add(zp),Qi.y-=.11;let e=qt;e.updateAABB();let n=Math.max(.08,(e.aabb.upperBound.y-e.aabb.lowerBound.y)*.5);Qi.y=$t.clamp(Qi.y,n+.025,5.4-n);let s=Math.sqrt(2.8/e.gameMeta.initialMass),r=$t.clamp(7.5*s,3,9),o=$t.clamp(13*s,5,18);e.velocity.set($t.clamp((Qi.x-e.position.x)*o,-r,r),$t.clamp((Qi.y-e.position.y)*o,-r,r),$t.clamp((Qi.z-e.position.z)*o,-r,r)),e.angularVelocity.set(0,0,0),e.force.set(0,e.mass*9.82,0),e.wakeUp(),e.aabbNeedsUpdate=!0}function Ob(){return!Se&&!Ze&&!pe&&(ke.has("KeyW")||ke.has("KeyA")||ke.has("KeyS")||ke.has("KeyD")||Math.abs(an.x)+Math.abs(an.y)>.12)}function zb(i){if(pe){vt.velocity.x=0,vt.velocity.z=0;return}let t=Se?0:an.x,e=Se?0:-an.y;Se||(ke.has("KeyA")&&(t-=1),ke.has("KeyD")&&(t+=1),ke.has("KeyW")&&(e+=1),ke.has("KeyS")&&(e-=1));let n=Math.hypot(t,e);n>1&&(t/=n,e/=n);let s=!Se&&(ke.has("ShiftLeft")||ke.has("ShiftRight")||Math.hypot(an.x,an.y)>.84),r=Cp(s?5.25:3.8,ii),o=-Math.sin(ss)*e+Math.cos(ss)*t,a=-Math.cos(ss)*e-Math.sin(ss)*t,l=Math.min(1,i*(n>.02?13:17));vt.velocity.x+=(o*r-vt.velocity.x)*l,vt.velocity.z+=(a*r-vt.velocity.z)*l,n>.02&&(Io+=i*(r+1.6))}function Hb(i){if(Gl=Math.max(0,Gl-i),ni=Math.max(0,ni-i*2.6),pe){let o=$t.smoothstep(ad,.05,1.25);Ve.position.set(vt.position.x,vt.position.y+.77-o*.68,vt.position.z),Ve.rotation.set(rs+o*.08,ss,-o*.62,"YXZ"),Os.visible=!1;return}Os.visible=!!(vn||qt);let t=Ob(),e=t?Math.sin(Io*2)*.026:0,n=t?Math.sin(Io)*.012:0,s=ni>0?(Math.random()-.5)*.045*ni:0,r=ni>0?(Math.random()-.5)*.036*ni:0;Ve.position.set(vt.position.x+n+s,vt.position.y+.77+e+r,vt.position.z),Ve.rotation.set(rs,ss,0,"YXZ"),Os.position.y=t?Math.sin(Io*2+.75)*.012:0,Os.position.x=t?Math.sin(Io)*.008:0}function Am(){zl=!1,Hl=ls.y,kl=0}function Rm(){if(!zl)return;let i=Hl-ls.y,t=kl;if(Am(),i<2.4||t<5.2)return;let e=Math.min(65,Math.round(10+(i-2.4)*14+(t-5.2)*3));vm(e,"leg-left")}function kb(){if(pe||Ze||Se)return;let i=vt.position.y,t=vt.velocity.y;t<-1.2&&i>ls.y+.4&&(zl=!0,Hl=Math.max(Hl,i),kl=Math.max(kl,-t)),zl&&Dp<-1.2&&t>-.45&&Rm(),Dp=t}function Vb(){if(pe)return;let i=8.45,t=6.45;if(![vt.position.x,vt.position.y,vt.position.z].every(Number.isFinite)||vt.position.y<.48){Rm(),vt.position.copy(ls),vt.previousPosition.copy(ls),vt.interpolatedPosition.copy(ls),vt.velocity.set(0,0,0),vt.force.set(0,0,0),vt.aabbNeedsUpdate=!0,Zt.broadphase.dirty=!0,vt.wakeUp(),Am(),ue("\u0412\u041E\u0417\u0412\u0420\u0410\u0422 \u0412 \u0421\u0415\u041A\u0422\u041E\u0420 \xB7 \u041F\u0410\u0414\u0415\u041D\u0418\u0415",1.4);return}(vt.position.x<-i||vt.position.x>i)&&(vt.position.x=$t.clamp(vt.position.x,-i,i),Math.sign(vt.velocity.x)===Math.sign(vt.position.x)&&(vt.velocity.x=0)),(vt.position.z<-t||vt.position.z>t)&&(vt.position.z=$t.clamp(vt.position.z,-t,t),Math.sign(vt.velocity.z)===Math.sign(vt.position.z)&&(vt.velocity.z=0)),vt.position.y>5.02&&(vt.position.y=5.02,vt.velocity.y>0&&(vt.velocity.y=0)),vt.aabbNeedsUpdate=!0}function Gb(){let i=!1;for(let t of Ni){let e=t.body.gameMeta;if(!e?.playerCollisionSuspended||e.isHeld||e.isStored||tc<(e.playerCollisionReEnableAfter||0))continue;let n=Math.max(.34,t.body.boundingRadius||.5),s=t.body.position.x-vt.position.x,r=t.body.position.z-vt.position.z,o=Math.abs(t.body.position.y-vt.position.y);(Math.hypot(s,r)>n+.36||o>n+.9)&&(t.body.collisionFilterMask=e.originalCollisionFilterMask,e.playerCollisionSuspended=!1,i=!0)}i&&(Zt.broadphase.dirty=!0)}function Wb(){for(let i of Ni)i.visual.position.copy(i.body.position),i.visual.quaternion.copy(i.body.quaternion)}function Fl(i){requestAnimationFrame(Fl);let t=Math.min(.05,Math.max(.001,(i-(Fl.lastTime||i))/1e3));if(Fl.lastTime=i,tc+=t,pe&&(ad+=t),zu++,Nl+=t,Nl>=1&&(Op=Math.round(zu/Nl),zu=0,Nl=0,Op<32&&!$u&&($u=!0,Qe.setPixelRatio(Math.min(window.devicePixelRatio||1,1)))),Oo>0&&(Oo-=t,Oo<=0&&tt("toast").classList.remove("visible")),Ze){Qe.render(Me,Ve);return}zb(t),Hb(t),ub(t),xb(t),mb(t),Ub(t);for(let e of Ni){let n=e.body.gameMeta?.lastVelocity;n&&(n.x=e.body.velocity.x,n.y=e.body.velocity.y,n.z=e.body.velocity.z)}K1(t),Zt.step(1/60,t,4),kb(),Yu&&(Rb(),Yu=!1),Vb(),Gb(),db(t),Eb(t),Wb(),Ou+=t,Ou>.09&&(ud(),Ou=0),Qe.render(Me,Ve),Lb(t)}requestAnimationFrame(Fl);function Cm(){let i=window.innerWidth,t=window.innerHeight;Ve.aspect=i/t,Ve.updateProjectionMatrix(),Qe.setSize(i,t,!1),Qe.setPixelRatio(Math.min(window.devicePixelRatio||1,$u?1:Vp?1.35:1.7)),Se&&fd()}window.addEventListener("resize",Cm,{passive:!0});window.addEventListener("orientationchange",()=>setTimeout(Cm,120),{passive:!0});var kr=tt("joystick"),Im=tt("joystick-knob");function Pm(i,t){let e=kr.getBoundingClientRect(),n=e.left+e.width/2,s=e.top+e.height/2,r=i-n,o=t-s,a=36,l=Math.hypot(r,o);l>a&&(r=r/l*a,o=o/l*a),an.x=r/a,an.y=o/a,Im.style.transform=`translate(${r}px, ${o}px)`}function Gs(){an.x=0,an.y=0,an.pointerId=null,Im.style.transform="translate(0px, 0px)"}kr.addEventListener("pointerdown",i=>{!ri||pe||Ze||Se||(i.preventDefault(),an.pointerId=i.pointerId,kr.setPointerCapture(i.pointerId),Pm(i.clientX,i.clientY))});kr.addEventListener("pointermove",i=>{i.pointerId===an.pointerId&&(i.preventDefault(),Pm(i.clientX,i.clientY))});kr.addEventListener("pointerup",i=>{i.pointerId===an.pointerId&&Gs()});kr.addEventListener("pointercancel",Gs);function qb(i){if(!(!ri||pe||Se||Ze||i.pointerType==="touch"&&i.clientX<window.innerWidth*.4)&&!i.target.closest("button, #joystick, .vitals-panel")){if(i.pointerType==="mouse"&&document.pointerLockElement!==Po&&Po.requestPointerLock)try{Po.requestPointerLock()}catch{}Pn={pointerId:i.pointerId,x:i.clientX,y:i.clientY,pointerType:i.pointerType}}}window.addEventListener("pointerdown",qb,{passive:!1});window.addEventListener("pointermove",i=>{if(document.pointerLockElement===Po){if(!ri||pe)return;ss-=(i.movementX||0)*.0027,rs=$t.clamp(rs-(i.movementY||0)*.0027,-1.18,1.18);return}if(!Pn||i.pointerId!==Pn.pointerId)return;let t=i.clientX-Pn.x,e=i.clientY-Pn.y;Pn.x=i.clientX,Pn.y=i.clientY;let n=i.pointerType==="touch"?.0043:.0034;ss-=t*n,rs=$t.clamp(rs-e*n,-1.18,1.18)},{passive:!0});window.addEventListener("pointerup",i=>{Pn?.pointerId===i.pointerId&&(Pn=null)},{passive:!0});window.addEventListener("pointercancel",()=>{Pn=null},{passive:!0});var Jo=tt("action-button"),Ko=null,ks=0,Zu=!1;function Xb(){ks&&clearTimeout(ks),ks=0,Ko=null}Jo.addEventListener("pointerdown",i=>{if(i.preventDefault(),i.stopPropagation(),!(pe||Se||Ze)){Ko=i.pointerId,Zu=!1;try{Jo.setPointerCapture(i.pointerId)}catch{}ks=setTimeout(()=>{Ko!==i.pointerId||pe||(Zu=!0,Wn(!0))},560)}});Jo.addEventListener("pointerup",i=>{if(i.preventDefault(),i.stopPropagation(),i.pointerId!==Ko)return;ks&&clearTimeout(ks),ks=0;let t=Zu;Ko=null,t||Tm()});Jo.addEventListener("pointercancel",Xb);Jo.addEventListener("contextmenu",i=>i.preventDefault());var Vr=tt("fire-button"),cs=null;function pd(i){cs!==null&&i.pointerId!==void 0&&i.pointerId!==cs||(cs=null,$e=!1)}Vr.addEventListener("pointerdown",i=>{if(i.preventDefault(),i.stopPropagation(),!(pe||Ze||Se)){cs=i.pointerId,$e=!0;try{Vr.setPointerCapture(i.pointerId)}catch{}rd()}});Vr.addEventListener("pointerup",pd);Vr.addEventListener("pointercancel",pd);Vr.addEventListener("lostpointercapture",pd);Vr.addEventListener("contextmenu",i=>i.preventDefault());tt("reload-button").addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),sd()});tt("menu-button").addEventListener("click",()=>Hr(!Ze));tt("inventory-button").addEventListener("click",()=>Wn(!Se));tt("menu-resume").addEventListener("click",()=>Hr(!1));tt("menu-restart").addEventListener("click",()=>window.location.reload());tt("menu-overlay").addEventListener("click",i=>{i.target===tt("menu-overlay")&&Hr(!1)});tt("inventory-close").addEventListener("click",()=>Wn(!1));tt("inventory-take").addEventListener("click",()=>{if(zr==="all"){Pi&&Pi!==vn&&(hb(Pi),Wn(!1));return}si&&Bb(si)});tt("inventory-tab-bag").addEventListener("click",()=>ec("bag"));tt("inventory-tab-all").addEventListener("click",()=>ec("all"));tt("inventory-drop").addEventListener("click",()=>{qt&&(Ab(),sa())});tt("inventory-stash").addEventListener("click",()=>Db());tt("inventory-overlay").addEventListener("click",i=>{i.target===tt("inventory-overlay")&&Wn(!1)});tt("death-restart").addEventListener("click",()=>window.location.reload());tt("injury-doll").addEventListener("pointerdown",i=>{let t=i.target.closest?.(".doll-part");t&&(i.preventDefault(),i.stopPropagation(),xm(t.id.replace("injury-","")))});tt("injury-doll").addEventListener("keydown",i=>{if(!["Enter"," "].includes(i.key))return;let t=i.target.closest?.(".doll-part");t&&(i.preventDefault(),xm(t.id.replace("injury-","")))});document.addEventListener("keydown",i=>{if(Ze){(i.code==="Escape"||i.code==="Enter")&&(i.preventDefault(),Hr(!1));return}if(pe){if(i.code==="KeyR"){i.preventDefault(),window.location.reload();return}i.target.closest?.("button")||i.preventDefault();return}if(i.code==="Tab"){i.preventDefault(),ri&&Wn(!Se);return}if(i.code==="Escape"){i.preventDefault(),Se?Wn(!1):ri&&Hr(!0);return}["KeyW","KeyA","KeyS","KeyD","ShiftLeft","ShiftRight","KeyE","KeyR","Space"].includes(i.code)&&i.preventDefault(),ke.add(i.code),i.code==="KeyE"&&!i.repeat&&!Se&&Tm(),i.code==="KeyR"&&!i.repeat&&sd(),i.code==="Space"&&!Se&&($e=!0,i.repeat||rd())});document.addEventListener("keyup",i=>{ke.delete(i.code),i.code==="Space"&&($e=!1)});document.addEventListener("visibilitychange",()=>{document.hidden&&(ke.clear(),Gs(),Pn=null,$e=!1,cs=null)});window.addEventListener("blur",()=>{ke.clear(),$e=!1,cs=null,Gs()},{passive:!0});Kl();cd();gm();sa();ud();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
