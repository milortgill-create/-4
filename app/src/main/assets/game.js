(()=>{var $u="170";var dg=0,Pf=1,fg=2;var kp=1,ju=2,Ci=3,cs=0,xn=1,Pe=2,os=0,br=1,fc=2,Nf=3,Lf=4,pg=5,Ls=100,mg=101,gg=102,xg=103,yg=104,vg=200,_g=201,Mg=202,wg=203,Eh=204,Sh=205,bg=206,Eg=207,Sg=208,Tg=209,Ag=210,Rg=211,Cg=212,Ig=213,Pg=214,Th=0,Ah=1,Rh=2,Ar=3,Ch=4,Ih=5,Ph=6,Nh=7,Vp=0,Ng=1,Lg=2,as=0,Dg=1,zg=2,Bg=3,kc=4,Fg=5,Ug=6,Og=7;var Gp=300,Rr=301,Cr=302,Lh=303,Dh=304,Vc=306,ls=1e3,Bs=1001,zh=1002,Tn=1003,Hg=1004;var Ba=1005;var ai=1006,ql=1007;var Fs=1008;var Li=1009,Wp=1010,qp=1011,Fo=1012,Zu=1013,Us=1014,ci=1015,Zo=1016,Ku=1017,Ju=1018,Ir=1020,Xp=35902,Yp=1021,$p=1022,jn=1023,jp=1024,Zp=1025,Er=1026,Pr=1027,Qu=1028,td=1029,Kp=1030,ed=1031;var nd=1033,cc=33776,lc=33777,hc=33778,uc=33779,Bh=35840,Fh=35841,Uh=35842,Oh=35843,Hh=36196,kh=37492,Vh=37496,Gh=37808,Wh=37809,qh=37810,Xh=37811,Yh=37812,$h=37813,jh=37814,Zh=37815,Kh=37816,Jh=37817,Qh=37818,tu=37819,eu=37820,nu=37821,dc=36492,iu=36494,su=36495,Jp=36283,ru=36284,ou=36285,au=36286;var pc=2300,cu=2301,Xl=2302,Df=2400,zf=2401,Bf=2402;var kg=3200,Vg=3201;var Qp=0,Gg=1,dn="",De="srgb",kr="srgb-linear",Gc="linear",ye="srgb";var or=7680;var Ff=519,Wg=512,qg=513,Xg=514,t0=515,Yg=516,$g=517,jg=518,Zg=519,Nr=35044;var Uf="300 es",Pi=2e3,mc=2001,hs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Of=1234567,No=Math.PI/180,Lr=180/Math.PI;function Vr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function je(i,t,e){return Math.max(t,Math.min(e,i))}function id(i,t){return(i%t+t)%t}function Kg(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jg(i,t,e){return i!==t?(e-i)/(t-i):0}function Lo(i,t,e){return(1-e)*i+e*t}function Qg(i,t,e,n){return Lo(i,t,1-Math.exp(-e*n))}function tx(i,t=1){return t-Math.abs(id(i,t*2)-t)}function ex(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nx(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ix(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sx(i,t){return i+Math.random()*(t-i)}function rx(i){return i*(.5-Math.random())}function ox(i){i!==void 0&&(Of=i);let t=Of+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ax(i){return i*No}function cx(i){return i*Lr}function lx(i){return(i&i-1)===0&&i!==0}function hx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ux(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dx(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Wt={DEG2RAD:No,RAD2DEG:Lr,generateUUID:Vr,clamp:je,euclideanModulo:id,mapLinear:Kg,inverseLerp:Jg,lerp:Lo,damp:Qg,pingpong:tx,smoothstep:ex,smootherstep:nx,randInt:ix,randFloat:sx,randFloatSpread:rx,seededRandom:ox,degToRad:ax,radToDeg:cx,isPowerOfTwo:lx,ceilPowerOfTwo:hx,floorPowerOfTwo:ux,setQuaternionFromProperEuler:dx,normalize:hn,denormalize:Mr},ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],_=s[4],v=s[7],R=s[2],S=s[5],A=s[8];return r[0]=o*x+a*y+c*R,r[3]=o*g+a*_+c*S,r[6]=o*p+a*v+c*A,r[1]=l*x+h*y+u*R,r[4]=l*g+h*_+u*S,r[7]=l*p+h*v+u*A,r[2]=d*x+f*y+m*R,r[5]=d*g+f*_+m*S,r[8]=d*p+f*v+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yl.makeScale(t,e)),this}rotate(t){return this.premultiply(Yl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yl=new $t;function e0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fx(){let i=gc("canvas");return i.style.display="block",i}var Hf={};function Io(i){i in Hf||(Hf[i]=!0,console.warn(i))}function px(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function mx(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gx(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ce={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ye&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ye&&(i.r=Sr(i.r),i.g=Sr(i.g),i.b=Sr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===dn?Gc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var kf=[.64,.33,.3,.6,.15,.06],Vf=[.2126,.7152,.0722],Gf=[.3127,.329],Wf=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qf=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[kr]:{primaries:kf,whitePoint:Gf,transfer:Gc,toXYZ:Wf,fromXYZ:qf,luminanceCoefficients:Vf,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:kf,whitePoint:Gf,transfer:ye,toXYZ:Wf,fromXYZ:qf,luminanceCoefficients:Vf,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});var ar,lu=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ar===void 0&&(ar=gc("canvas")),ar.width=t.width,ar.height=t.height;let n=ar.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ar}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=gc("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xx=0,xc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Vr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($l(s[o].image)):r.push($l(s[o]))}else r=$l(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function $l(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yx=0,yn=class i extends hs{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Bs,s=Bs,r=ai,o=Fs,a=jn,c=Li,l=i.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Vr(),this.name="",this.source=new xc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ls:t.x=t.x-Math.floor(t.x);break;case Bs:t.x=t.x<0?0:1;break;case zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ls:t.y=t.y-Math.floor(t.y);break;case Bs:t.y=t.y<0?0:1;break;case zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Gp;yn.DEFAULT_ANISOTROPY=1;var ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,v=(f+1)/2,R=(p+1)/2,S=(h+d)/4,A=(u+x)/4,C=(m+g)/4;return _>v&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=S/n,r=A/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hu=class extends hs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new yn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new xc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Di=class extends hu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},yc=class extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var uu=class extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),S=Math.atan2(R,p*y);g=Math.sin(g*S)/R,a=Math.sin(a*S)/R}let v=a*y;if(c=c*g+d*v,l=l*g+f*v,h=h*g+m*v,u=u*g+x*v,g===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jl.copy(this).projectOnVector(t),this.sub(jl)}reflect(t){return this.sub(jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jl=new L,Xf=new en,zi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fa.copy(n.boundingBox)),Fa.applyMatrix4(t.matrixWorld),this.union(Fa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bo),Ua.subVectors(this.max,bo),cr.subVectors(t.a,bo),lr.subVectors(t.b,bo),hr.subVectors(t.c,bo),ts.subVectors(lr,cr),es.subVectors(hr,lr),Ts.subVectors(cr,hr);let e=[0,-ts.z,ts.y,0,-es.z,es.y,0,-Ts.z,Ts.y,ts.z,0,-ts.x,es.z,0,-es.x,Ts.z,0,-Ts.x,-ts.y,ts.x,0,-es.y,es.x,0,-Ts.y,Ts.x,0];return!Zl(e,cr,lr,hr,Ua)||(e=[1,0,0,0,1,0,0,0,1],!Zl(e,cr,lr,hr,Ua))?!1:(Oa.crossVectors(ts,es),e=[Oa.x,Oa.y,Oa.z],Zl(e,cr,lr,hr,Ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ei=[new L,new L,new L,new L,new L,new L,new L,new L],Xn=new L,Fa=new zi,cr=new L,lr=new L,hr=new L,ts=new L,es=new L,Ts=new L,bo=new L,Ua=new L,Oa=new L,As=new L;function Zl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){As.fromArray(i,r);let a=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),c=t.dot(As),l=e.dot(As),h=n.dot(As);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var vx=new zi,Eo=new L,Kl=new L,us=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vx.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Eo.subVectors(t,this.center);let e=Eo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Eo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Eo.copy(t.center).add(Kl)),this.expandByPoint(Eo.copy(t.center).sub(Kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new L,Jl=new L,Ha=new L,ns=new L,Ql=new L,ka=new L,th=new L,Uo=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jl.copy(t).add(e).multiplyScalar(.5),Ha.copy(e).sub(t).normalize(),ns.copy(this.origin).sub(Jl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ha),a=ns.dot(this.direction),c=-ns.dot(Ha),l=ns.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jl).addScaledVector(Ha,d),f}intersectSphere(t,e){Si.subVectors(t.center,this.origin);let n=Si.dot(this.direction),s=Si.dot(Si)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,n,s,r){Ql.subVectors(e,t),ka.subVectors(n,t),th.crossVectors(Ql,ka);let o=this.direction.dot(th),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,t);let c=a*this.direction.dot(ka.crossVectors(ns,ka));if(c<0)return null;let l=a*this.direction.dot(Ql.cross(ns));if(l<0||c+l>o)return null;let h=-a*ns.dot(th);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ur.setFromMatrixColumn(t,0).length(),r=1/ur.setFromMatrixColumn(t,1).length(),o=1/ur.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_x,t,Mx)}lookAt(t,e,n){let s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),is.crossVectors(n,En),is.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),is.crossVectors(n,En)),is.normalize(),Va.crossVectors(En,is),s[0]=is.x,s[4]=Va.x,s[8]=En.x,s[1]=is.y,s[5]=Va.y,s[9]=En.y,s[2]=is.z,s[6]=Va.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],_=n[7],v=n[11],R=n[15],S=s[0],A=s[4],C=s[8],b=s[12],M=s[1],P=s[5],H=s[9],N=s[13],z=s[2],U=s[6],D=s[10],Q=s[14],V=s[3],J=s[7],ut=s[11],pt=s[15];return r[0]=o*S+a*M+c*z+l*V,r[4]=o*A+a*P+c*U+l*J,r[8]=o*C+a*H+c*D+l*ut,r[12]=o*b+a*N+c*Q+l*pt,r[1]=h*S+u*M+d*z+f*V,r[5]=h*A+u*P+d*U+f*J,r[9]=h*C+u*H+d*D+f*ut,r[13]=h*b+u*N+d*Q+f*pt,r[2]=m*S+x*M+g*z+p*V,r[6]=m*A+x*P+g*U+p*J,r[10]=m*C+x*H+g*D+p*ut,r[14]=m*b+x*N+g*Q+p*pt,r[3]=y*S+_*M+v*z+R*V,r[7]=y*A+_*P+v*U+R*J,r[11]=y*C+_*H+v*D+R*ut,r[15]=y*b+_*N+v*Q+R*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=u*g*l-x*d*l+x*c*f-a*g*f-u*c*p+a*d*p,_=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,v=h*x*l-m*u*l+m*a*f-o*x*f-h*a*p+o*u*p,R=m*u*c-h*x*c-m*a*d+o*x*d+h*a*g-o*u*g,S=e*y+n*_+s*v+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/S;return t[0]=y*A,t[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*A,t[2]=(a*g*r-x*c*r+x*s*l-n*g*l-a*s*p+n*c*p)*A,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*A,t[4]=_*A,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*A,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*A,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*A,t[8]=v*A,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*A,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*A,t[12]=R*A,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*A,t[14]=(m*a*s-o*x*s-m*n*c+e*x*c+o*n*g-e*a*g)*A,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,y=c*l,_=c*h,v=c*u,R=n.x,S=n.y,A=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+v)*R,s[2]=(m-_)*R,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(d+p))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(m+_)*A,s[9]=(g-y)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ur.set(s[0],s[1],s[2]).length(),o=ur.set(s[4],s[5],s[6]).length(),a=ur.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Yn.copy(this);let l=1/r,h=1/o,u=1/a;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,e.setFromRotationMatrix(Yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Pi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(a===Pi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===mc)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pi){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h,m,x;if(a===Pi)m=(o+r)*u,x=-2*u;else if(a===mc)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ur=new L,Yn=new he,_x=new L(0,0,0),Mx=new L(1,1,1),is=new L,Va=new L,En=new L,Yf=new he,$f=new en,vn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $f.setFromEuler(this),this.setFromQuaternion($f,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Oo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wx=0,jf=new L,dr=new en,Ti=new he,Ga=new L,So=new L,bx=new L,Ex=new en,Zf=new L(1,0,0),Kf=new L(0,1,0),Jf=new L(0,0,1),Qf={type:"added"},Sx={type:"removed"},fr={type:"childadded",child:null},eh={type:"childremoved",child:null},Ke=class i extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new vn,n=new en,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new $t}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(Zf,t)}rotateY(t){return this.rotateOnAxis(Kf,t)}rotateZ(t){return this.rotateOnAxis(Jf,t)}translateOnAxis(t,e){return jf.copy(t).applyQuaternion(this.quaternion),this.position.add(jf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zf,t)}translateY(t){return this.translateOnAxis(Kf,t)}translateZ(t){return this.translateOnAxis(Jf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ga.copy(t):Ga.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(So,Ga,this.up):Ti.lookAt(Ga,So,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(Ti),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qf),fr.child=t,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sx),eh.child=t,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qf),fr.child=t,this.dispatchEvent(fr),fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,t,bx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,Ex,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ke.DEFAULT_UP=new L(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new L,Ai=new L,nh=new L,Ri=new L,pr=new L,mr=new L,tp=new L,ih=new L,sh=new L,rh=new L,oh=new ve,ah=new ve,ch=new ve,Ds=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$n.subVectors(s,e),Ai.subVectors(n,e),nh.subVectors(t,e);let o=$n.dot($n),a=$n.dot(Ai),c=$n.dot(nh),l=Ai.dot(Ai),h=Ai.dot(nh),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ri.x),c.addScaledVector(o,Ri.y),c.addScaledVector(a,Ri.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return oh.setScalar(0),ah.setScalar(0),ch.setScalar(0),oh.fromBufferAttribute(t,e),ah.fromBufferAttribute(t,n),ch.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oh,r.x),o.addScaledVector(ah,r.y),o.addScaledVector(ch,r.z),o}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),Ai.subVectors(t,e),$n.cross(Ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),$n.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;pr.subVectors(s,n),mr.subVectors(r,n),ih.subVectors(t,n);let c=pr.dot(ih),l=mr.dot(ih);if(c<=0&&l<=0)return e.copy(n);sh.subVectors(t,s);let h=pr.dot(sh),u=mr.dot(sh);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(pr,o);rh.subVectors(t,r);let f=pr.dot(rh),m=mr.dot(rh);if(m>=0&&f<=m)return e.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(mr,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return tp.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(tp,a);let p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(pr,o).addScaledVector(mr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},n0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function lh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=id(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=lh(o,r,t+1/3),this.g=lh(o,r,t),this.b=lh(o,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=n0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ce.fromWorkingColorSpace(cn.copy(this),t),Math.round(je(cn.r*255,0,255))*65536+Math.round(je(cn.g*255,0,255))*256+Math.round(je(cn.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(cn.copy(this),e);let n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=De){ce.fromWorkingColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,s=cn.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+e,ss.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ss),t.getHSL(Wa);let n=Lo(ss.h,Wa.h,e),s=Lo(ss.s,Wa.s,e),r=Lo(ss.l,Wa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new jt;jt.NAMES=n0;var Tx=0,ds=class extends hs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Vr(),this.name="",this.blending=br,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Sh,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==cs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eh&&(n.blendSrc=this.blendSrc),this.blendDst!==Sh&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ff&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_n=class extends ds{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ue=new L,qa=new ht,fn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nr,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qa.fromBufferAttribute(this,e),qa.applyMatrix3(t),this.setXY(e,qa.x,qa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nr&&(t.usage=this.usage),t}};var vc=class extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _c=class extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ax=0,zn=new he,hh=new Ke,gr=new L,Sn=new zi,To=new zi,$e=new L,Ne=class i extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(e0(t)?_c:vc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return hh.lookAt(t),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];To.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(Sn.min,To.min),Sn.expandByPoint($e),$e.addVectors(Sn.max,To.max),Sn.expandByPoint($e)):(Sn.expandByPoint(To.min),Sn.expandByPoint(To.max))}Sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)$e.fromBufferAttribute(a,l),c&&(gr.fromBufferAttribute(t,l),$e.add(gr)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new L,c[C]=new L;let l=new L,h=new L,u=new L,d=new ht,f=new ht,m=new ht,x=new L,g=new L;function p(C,b,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[C].add(x),a[b].add(x),a[M].add(x),c[C].add(g),c[b].add(g),c[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,b=y.length;C<b;++C){let M=y[C],P=M.start,H=M.count;for(let N=P,z=P+H;N<z;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new L,v=new L,R=new L,S=new L;function A(C){R.fromBufferAttribute(s,C),S.copy(R);let b=a[C];_.copy(b),_.sub(R.multiplyScalar(R.dot(b))).normalize(),v.crossVectors(S,b);let P=v.dot(c[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,P)}for(let C=0,b=y.length;C<b;++C){let M=y[C],P=M.start,H=M.count;for(let N=P,z=P+H;N<z;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new fn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ep=new he,Rs=new Uo,Xa=new us,np=new L,Ya=new L,$a=new L,ja=new L,uh=new L,Za=new L,ip=new L,Ka=new L,lt=class extends Ke{constructor(t=new Ne,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Za.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(uh.fromBufferAttribute(u,t),o?Za.addScaledVector(uh,h):Za.addScaledVector(uh.sub(e),h))}e.add(Za)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(r),Rs.copy(t.ray).recast(t.near),!(Xa.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Xa,np)===null||Rs.origin.distanceToSquared(np)>(t.far-t.near)**2))&&(ep.copy(r).invert(),Rs.copy(t.ray).applyMatrix4(ep),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,R=_;v<R;v+=3){let S=a.getX(v),A=a.getX(v+1),C=a.getX(v+2);s=Ja(this,p,t,n,l,h,u,S,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);s=Ja(this,o,t,n,l,h,u,y,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,R=_;v<R;v+=3){let S=v,A=v+1,C=v+2;s=Ja(this,p,t,n,l,h,u,S,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=g,_=g+1,v=g+2;s=Ja(this,o,t,n,l,h,u,y,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Rx(i,t,e,n,s,r,o,a){let c;if(t.side===xn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===cs,a),c===null)return null;Ka.copy(a),Ka.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ka);return l<e.near||l>e.far?null:{distance:l,point:Ka.clone(),object:i}}function Ja(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ya),i.getVertexPosition(c,$a),i.getVertexPosition(l,ja);let h=Rx(i,t,e,n,Ya,$a,ja,ip);if(h){let u=new L;Ds.getBarycoord(ip,Ya,$a,ja,u),s&&(h.uv=Ds.getInterpolatedAttribute(s,a,c,l,u,new ht)),r&&(h.uv1=Ds.getInterpolatedAttribute(r,a,c,l,u,new ht)),o&&(h.normal=Ds.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};Ds.getNormal(Ya,$a,ja,d.normal),h.face=d,h.barycoord=u}return h}var It=class i extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function m(x,g,p,y,_,v,R,S,A,C,b){let M=v/A,P=R/C,H=v/2,N=R/2,z=S/2,U=A+1,D=C+1,Q=0,V=0,J=new L;for(let ut=0;ut<D;ut++){let pt=ut*P-N;for(let ot=0;ot<U;ot++){let Bt=ot*M-H;J[x]=Bt*y,J[g]=pt*_,J[p]=z,l.push(J.x,J.y,J.z),J[x]=0,J[g]=0,J[p]=S>0?1:-1,h.push(J.x,J.y,J.z),u.push(ot/A),u.push(1-ut/C),Q+=1}}for(let ut=0;ut<C;ut++)for(let pt=0;pt<A;pt++){let ot=d+pt+U*ut,Bt=d+pt+U*(ut+1),X=d+(pt+1)+U*(ut+1),rt=d+(pt+1)+U*ut;c.push(ot,Bt,rt),c.push(Bt,X,rt),V+=6}a.addGroup(f,V,b),f+=V,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Dr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=Dr(i[e]);for(let s in n)t[s]=n[s]}return t}function Cx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function i0(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var Ix={clone:Dr,merge:un},Px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends ds{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Px,this.fragmentShader=Nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=Cx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Mc=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rs=new L,sp=new ht,rp=new ht,Ze=class extends Mc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,sp,rp),e.subVectors(rp,sp)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(No*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xr=-90,yr=1,du=class extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(xr,yr,t,e);s.layers=this.layers,this.add(s);let r=new Ze(xr,yr,t,e);r.layers=this.layers,this.add(r);let o=new Ze(xr,yr,t,e);o.layers=this.layers,this.add(o);let a=new Ze(xr,yr,t,e);a.layers=this.layers,this.add(a);let c=new Ze(xr,yr,t,e);c.layers=this.layers,this.add(c);let l=new Ze(xr,yr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===mc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},wc=class extends yn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Rr,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fu=class extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new It(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:os});r.uniforms.tEquirect.value=e;let o=new lt(s,r),a=e.minFilter;return e.minFilter===Fs&&(e.minFilter=ai),new du(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},dh=new L,Lx=new L,Dx=new $t,Ii=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dh.subVectors(n,e).cross(Lx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(dh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Dx.getNormalMatrix(t),s=this.coplanarPoint(dh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cs=new us,Qa=new L,Ho=class{constructor(t=new Ii,e=new Ii,n=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],y=s[13],_=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,g-f,v-p).normalize(),n[1].setComponents(c+r,d+l,g+f,v+p).normalize(),n[2].setComponents(c+o,d+h,g+m,v+y).normalize(),n[3].setComponents(c-o,d-h,g-m,v-y).normalize(),n[4].setComponents(c-a,d-u,g-x,v-_).normalize(),e===Pi)n[5].setComponents(c+a,d+u,g+x,v+_).normalize();else if(e===mc)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Qa.x=s.normal.x>0?t.max.x:t.min.x,Qa.y=s.normal.y>0?t.max.y:t.min.y,Qa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function s0(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zx(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var hi=class i extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let y=p*d-o;for(let _=0;_<l;_++){let v=_*u-r;m.push(v,-y,0),x.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let _=y+l*p,v=y+l*(p+1),R=y+1+l*(p+1),S=y+1+l*p;f.push(_,v,S),f.push(v,R,S)}this.setIndex(f),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Bx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fx=`#ifdef USE_ALPHAHASH
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
#endif`,Ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vx=`#ifdef USE_AOMAP
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
#endif`,Gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wx=`#ifdef USE_BATCHING
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
#endif`,qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jx=`#ifdef USE_IRIDESCENCE
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
#endif`,Zx=`#ifdef USE_BUMPMAP
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
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ry=`#define PI 3.141592653589793
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
} // validated`,oy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ay=`vec3 transformedNormal = objectNormal;
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
#endif`,cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dy="gl_FragColor = linearToOutputTexel( gl_FragColor );",fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,py=`#ifdef USE_ENVMAP
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
#endif`,my=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gy=`#ifdef USE_ENVMAP
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
#endif`,xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yy=`#ifdef USE_ENVMAP
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
#endif`,vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_y=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,My=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,by=`#ifdef USE_GRADIENTMAP
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
}`,Ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ay=`uniform bool receiveShadow;
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
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ly=`PhysicalMaterial material;
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
#endif`,Dy=`struct PhysicalMaterial {
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
}`,zy=`
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
#endif`,By=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ky=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qy=`#if defined( USE_POINTS_UV )
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
#endif`,Xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$y=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`#ifdef USE_MORPHTARGETS
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
#endif`,Jy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sv=`#ifdef USE_NORMALMAP
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
#endif`,rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_v=`float getShadowMask() {
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
}`,Mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wv=`#ifdef USE_SKINNING
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
#endif`,bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ev=`#ifdef USE_SKINNING
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
#endif`,Sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cv=`#ifdef USE_TRANSMISSION
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
#endif`,Iv=`#ifdef USE_TRANSMISSION
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bv=`uniform sampler2D t2D;
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`#include <common>
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
}`,Vv=`#if DEPTH_PACKING == 3200
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
}`,Gv=`#define DISTANCE
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
}`,Wv=`#define DISTANCE
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
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`uniform float scale;
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
}`,$v=`uniform vec3 diffuse;
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
}`,jv=`#include <common>
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Kv=`#define LAMBERT
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
}`,Jv=`#define LAMBERT
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
}`,Qv=`#define MATCAP
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
}`,t_=`#define MATCAP
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
}`,e_=`#define NORMAL
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
}`,n_=`#define NORMAL
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
}`,i_=`#define PHONG
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
}`,s_=`#define PHONG
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
}`,r_=`#define STANDARD
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
}`,o_=`#define STANDARD
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
}`,a_=`#define TOON
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
}`,c_=`#define TOON
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
}`,l_=`uniform float size;
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,d_=`uniform vec3 color;
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
}`,f_=`uniform float rotation;
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
}`,p_=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Bx,alphahash_pars_fragment:Fx,alphamap_fragment:Ux,alphamap_pars_fragment:Ox,alphatest_fragment:Hx,alphatest_pars_fragment:kx,aomap_fragment:Vx,aomap_pars_fragment:Gx,batching_pars_vertex:Wx,batching_vertex:qx,begin_vertex:Xx,beginnormal_vertex:Yx,bsdfs:$x,iridescence_fragment:jx,bumpmap_pars_fragment:Zx,clipping_planes_fragment:Kx,clipping_planes_pars_fragment:Jx,clipping_planes_pars_vertex:Qx,clipping_planes_vertex:ty,color_fragment:ey,color_pars_fragment:ny,color_pars_vertex:iy,color_vertex:sy,common:ry,cube_uv_reflection_fragment:oy,defaultnormal_vertex:ay,displacementmap_pars_vertex:cy,displacementmap_vertex:ly,emissivemap_fragment:hy,emissivemap_pars_fragment:uy,colorspace_fragment:dy,colorspace_pars_fragment:fy,envmap_fragment:py,envmap_common_pars_fragment:my,envmap_pars_fragment:gy,envmap_pars_vertex:xy,envmap_physical_pars_fragment:Ry,envmap_vertex:yy,fog_vertex:vy,fog_pars_vertex:_y,fog_fragment:My,fog_pars_fragment:wy,gradientmap_pars_fragment:by,lightmap_pars_fragment:Ey,lights_lambert_fragment:Sy,lights_lambert_pars_fragment:Ty,lights_pars_begin:Ay,lights_toon_fragment:Cy,lights_toon_pars_fragment:Iy,lights_phong_fragment:Py,lights_phong_pars_fragment:Ny,lights_physical_fragment:Ly,lights_physical_pars_fragment:Dy,lights_fragment_begin:zy,lights_fragment_maps:By,lights_fragment_end:Fy,logdepthbuf_fragment:Uy,logdepthbuf_pars_fragment:Oy,logdepthbuf_pars_vertex:Hy,logdepthbuf_vertex:ky,map_fragment:Vy,map_pars_fragment:Gy,map_particle_fragment:Wy,map_particle_pars_fragment:qy,metalnessmap_fragment:Xy,metalnessmap_pars_fragment:Yy,morphinstance_vertex:$y,morphcolor_vertex:jy,morphnormal_vertex:Zy,morphtarget_pars_vertex:Ky,morphtarget_vertex:Jy,normal_fragment_begin:Qy,normal_fragment_maps:tv,normal_pars_fragment:ev,normal_pars_vertex:nv,normal_vertex:iv,normalmap_pars_fragment:sv,clearcoat_normal_fragment_begin:rv,clearcoat_normal_fragment_maps:ov,clearcoat_pars_fragment:av,iridescence_pars_fragment:cv,opaque_fragment:lv,packing:hv,premultiplied_alpha_fragment:uv,project_vertex:dv,dithering_fragment:fv,dithering_pars_fragment:pv,roughnessmap_fragment:mv,roughnessmap_pars_fragment:gv,shadowmap_pars_fragment:xv,shadowmap_pars_vertex:yv,shadowmap_vertex:vv,shadowmask_pars_fragment:_v,skinbase_vertex:Mv,skinning_pars_vertex:wv,skinning_vertex:bv,skinnormal_vertex:Ev,specularmap_fragment:Sv,specularmap_pars_fragment:Tv,tonemapping_fragment:Av,tonemapping_pars_fragment:Rv,transmission_fragment:Cv,transmission_pars_fragment:Iv,uv_pars_fragment:Pv,uv_pars_vertex:Nv,uv_vertex:Lv,worldpos_vertex:Dv,background_vert:zv,background_frag:Bv,backgroundCube_vert:Fv,backgroundCube_frag:Uv,cube_vert:Ov,cube_frag:Hv,depth_vert:kv,depth_frag:Vv,distanceRGBA_vert:Gv,distanceRGBA_frag:Wv,equirect_vert:qv,equirect_frag:Xv,linedashed_vert:Yv,linedashed_frag:$v,meshbasic_vert:jv,meshbasic_frag:Zv,meshlambert_vert:Kv,meshlambert_frag:Jv,meshmatcap_vert:Qv,meshmatcap_frag:t_,meshnormal_vert:e_,meshnormal_frag:n_,meshphong_vert:i_,meshphong_frag:s_,meshphysical_vert:r_,meshphysical_frag:o_,meshtoon_vert:a_,meshtoon_frag:c_,points_vert:l_,points_frag:h_,shadow_vert:u_,shadow_frag:d_,sprite_vert:f_,sprite_frag:p_},ft={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},oi={basic:{uniforms:un([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:un([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new jt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:un([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:un([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:un([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new jt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:un([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:un([ft.points,ft.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:un([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:un([ft.common,ft.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:un([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:un([ft.sprite,ft.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:un([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:un([ft.lights,ft.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};oi.physical={uniforms:un([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var tc={r:0,b:0,g:0},Is=new vn,m_=new he;function g_(i,t,e,n,s,r,o){let a=new jt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function x(y){let _=!1,v=m(y);v===null?p(a,c):v&&v.isColor&&(p(v,1),_=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,_){let v=m(_);v&&(v.isCubeTexture||v.mapping===Vc)?(h===void 0&&(h=new lt(new It(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Dr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Is.copy(_.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(m_.makeRotationFromEuler(Is)),h.material.toneMapped=ce.getTransfer(v.colorSpace)!==ye,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new lt(new hi(2,2),new li({name:"BackgroundMaterial",uniforms:Dr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ce.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(tc,i0(i)),n.buffers.color.setClear(tc.r,tc.g,tc.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:g}}function x_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,P,H,N,z){let U=!1,D=u(N,H,P);r!==D&&(r=D,l(r.object)),U=f(M,N,H,z),U&&m(M,N,H,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,v(M,P,H,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,H){let N=H.wireframe===!0,z=n[M.id];z===void 0&&(z={},n[M.id]=z);let U=z[P.id];U===void 0&&(U={},z[P.id]=U);let D=U[N];return D===void 0&&(D=d(c()),U[N]=D),D}function d(M){let P=[],H=[],N=[];for(let z=0;z<e;z++)P[z]=0,H[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,P,H,N){let z=r.attributes,U=P.attributes,D=0,Q=H.getAttributes();for(let V in Q)if(Q[V].location>=0){let ut=z[V],pt=U[V];if(pt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),ut===void 0||ut.attribute!==pt||pt&&ut.data!==pt.data)return!0;D++}return r.attributesNum!==D||r.index!==N}function m(M,P,H,N){let z={},U=P.attributes,D=0,Q=H.getAttributes();for(let V in Q)if(Q[V].location>=0){let ut=U[V];ut===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));let pt={};pt.attribute=ut,ut&&ut.data&&(pt.data=ut.data),z[V]=pt,D++}r.attributes=z,r.attributesNum=D,r.index=N}function x(){let M=r.newAttributes;for(let P=0,H=M.length;P<H;P++)M[P]=0}function g(M){p(M,0)}function p(M,P){let H=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;H[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),z[M]!==P&&(i.vertexAttribDivisor(M,P),z[M]=P)}function y(){let M=r.newAttributes,P=r.enabledAttributes;for(let H=0,N=P.length;H<N;H++)P[H]!==M[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function _(M,P,H,N,z,U,D){D===!0?i.vertexAttribIPointer(M,P,H,z,U):i.vertexAttribPointer(M,P,H,N,z,U)}function v(M,P,H,N){x();let z=N.attributes,U=H.getAttributes(),D=P.defaultAttributeValues;for(let Q in U){let V=U[Q];if(V.location>=0){let J=z[Q];if(J===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){let ut=J.normalized,pt=J.itemSize,ot=t.get(J);if(ot===void 0)continue;let Bt=ot.buffer,X=ot.type,rt=ot.bytesPerElement,wt=X===i.INT||X===i.UNSIGNED_INT||J.gpuType===Zu;if(J.isInterleavedBufferAttribute){let dt=J.data,Ft=dt.stride,Gt=J.offset;if(dt.isInstancedInterleavedBuffer){for(let te=0;te<V.locationSize;te++)p(V.location+te,dt.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let te=0;te<V.locationSize;te++)g(V.location+te);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let te=0;te<V.locationSize;te++)_(V.location+te,pt/V.locationSize,X,ut,Ft*rt,(Gt+pt/V.locationSize*te)*rt,wt)}else{if(J.isInstancedBufferAttribute){for(let dt=0;dt<V.locationSize;dt++)p(V.location+dt,J.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let dt=0;dt<V.locationSize;dt++)g(V.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let dt=0;dt<V.locationSize;dt++)_(V.location+dt,pt/V.locationSize,X,ut,pt*rt,pt/V.locationSize*dt*rt,wt)}}else if(D!==void 0){let ut=D[Q];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(V.location,ut);break;case 3:i.vertexAttrib3fv(V.location,ut);break;case 4:i.vertexAttrib4fv(V.location,ut);break;default:i.vertexAttrib1fv(V.location,ut)}}}}y()}function R(){C();for(let M in n){let P=n[M];for(let H in P){let N=P[H];for(let z in N)h(N[z].object),delete N[z];delete P[H]}delete n[M]}}function S(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let H in P){let N=P[H];for(let z in N)h(N[z].object),delete N[z];delete P[H]}delete n[M.id]}function A(M){for(let P in n){let H=n[P];if(H[M.id]===void 0)continue;let N=H[M.id];for(let z in N)h(N[z].object),delete N[z];delete H[M.id]}}function C(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function y_(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function v_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==jn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===Zo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Li&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ci&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:S}}function __(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ii,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let y=r?0:n,_=y*4,v=p.clippingState||null;c.value=v,v=h(m,d,_,f);for(let R=0;R!==_;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=f;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function M_(i){let t=new WeakMap;function e(o,a){return a===Lh?o.mapping=Rr:a===Dh&&(o.mapping=Cr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Lh||a===Dh)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new fu(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var bc=class extends Mc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wr=4,op=[.125,.215,.35,.446,.526,.582],zs=20,fh=new bc,ap=new jt,ph=null,mh=0,gh=0,xh=!1,Ns=(1+Math.sqrt(5))/2,vr=1/Ns,cp=[new L(-Ns,vr,0),new L(Ns,vr,0),new L(-vr,0,Ns),new L(vr,0,Ns),new L(0,Ns,-vr),new L(0,Ns,vr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Ec=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=xh,t.scissorTest=!1,ec(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rr||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Zo,format:jn,colorSpace:kr,depthBuffer:!1},s=lp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w_(r)),this._blurMaterial=b_(r,t,e)}return s}_compileMaterial(t){let e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,fh)}_sceneToCubeUV(t,e,n,s){let a=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ap),h.toneMapping=as,h.autoClear=!1;let f=new _n({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),m=new lt(new It,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(ap),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;ec(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Rr||t.mapping===Cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=up()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ec(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,fh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cp[(s-r-1)%cp.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new lt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zs-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):zs;g>zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zs}`);let p=[],y=0;for(let A=0;A<zs;++A){let C=A/x,b=Math.exp(-C*C/2);p.push(b),A===0?y+=b:A<g&&(y+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let v=this._sizeLods[s],R=3*v*(s>_-wr?s-_+wr:0),S=4*(this._cubeSize-v);ec(e,R,S,3*v,2*v),c.setRenderTarget(e),c.render(u,fh)}};function w_(i){let t=[],e=[],n=[],s=i,r=i-wr+1+op.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-wr?c=op[o-i+wr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,y=new Float32Array(x*m*f),_=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let S=0;S<f;S++){let A=S%3*2/3-1,C=S>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(b,x*m*S),_.set(d,g*m*S);let M=[S,S,S,S,S,S];v.set(M,p*m*S)}let R=new Ne;R.setAttribute("position",new fn(y,x)),R.setAttribute("uv",new fn(_,g)),R.setAttribute("faceIndex",new fn(v,p)),t.push(R),s>wr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lp(i,t,e){let n=new Di(i,t,e);return n.texture.mapping=Vc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ec(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function b_(i,t,e){let n=new Float32Array(zs),s=new L(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sd(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function hp(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sd(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function up(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function sd(){return`

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
	`}function E_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Lh||c===Dh,h=c===Rr||c===Cr;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ec(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ec(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function S_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Io("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function T_(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,v=y.length;_<v;_+=3){let R=y[_+0],S=y[_+1],A=y[_+2];d.push(R,S,S,A,A,R)}}else if(m!==void 0){let y=m.array;x=m.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let R=_+0,S=_+1,A=_+2;d.push(R,S,S,A,A,R)}}else return;let g=new(e0(d)?_c:vc)(d,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function A_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function R_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function C_(i,t,e){let n=new WeakMap,s=new ve;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*R*4*u),A=new yc(S,v,R,u);A.type=ci,A.needsUpdate=!0;let C=_*4;for(let M=0;M<u;M++){let P=g[M],H=p[M],N=y[M],z=v*R*4*M;for(let U=0;U<P.count;U++){let D=U*C;f===!0&&(s.fromBufferAttribute(P,U),S[z+D+0]=s.x,S[z+D+1]=s.y,S[z+D+2]=s.z,S[z+D+3]=0),m===!0&&(s.fromBufferAttribute(H,U),S[z+D+4]=s.x,S[z+D+5]=s.y,S[z+D+6]=s.z,S[z+D+7]=0),x===!0&&(s.fromBufferAttribute(N,U),S[z+D+8]=s.x,S[z+D+9]=s.y,S[z+D+10]=s.z,S[z+D+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new ht(v,R)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function I_(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Sc=class extends yn{constructor(t,e,n,s,r,o,a,c,l,h=Er){if(h!==Er&&h!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Er&&(n=Us),n===void 0&&h===Pr&&(n=Ir),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},r0=new yn,dp=new Sc(1,1),o0=new yc,a0=new uu,c0=new wc,fp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),xp=new Float32Array(4);function Gr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fp[s];if(r===void 0&&(r=new Float32Array(s),fp[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wc(i,t){let e=pp[t];e===void 0&&(e=new Int32Array(t),pp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function P_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function N_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function L_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function D_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function z_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;xp.set(n),i.uniformMatrix2fv(this.addr,!1,xp),Ge(e,n)}}function B_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;gp.set(n),i.uniformMatrix3fv(this.addr,!1,gp),Ge(e,n)}}function F_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;mp.set(n),i.uniformMatrix4fv(this.addr,!1,mp),Ge(e,n)}}function U_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function O_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function H_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function k_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function V_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function G_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function W_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function X_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dp.compareFunction=t0,r=dp):r=r0,e.setTexture2D(t||r,s)}function Y_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||a0,s)}function $_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||c0,s)}function j_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||o0,s)}function Z_(i){switch(i){case 5126:return P_;case 35664:return N_;case 35665:return L_;case 35666:return D_;case 35674:return z_;case 35675:return B_;case 35676:return F_;case 5124:case 35670:return U_;case 35667:case 35671:return O_;case 35668:case 35672:return H_;case 35669:case 35673:return k_;case 5125:return V_;case 36294:return G_;case 36295:return W_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return j_}}function K_(i,t){i.uniform1fv(this.addr,t)}function J_(i,t){let e=Gr(t,this.size,2);i.uniform2fv(this.addr,e)}function Q_(i,t){let e=Gr(t,this.size,3);i.uniform3fv(this.addr,e)}function t1(i,t){let e=Gr(t,this.size,4);i.uniform4fv(this.addr,e)}function e1(i,t){let e=Gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function n1(i,t){let e=Gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function i1(i,t){let e=Gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function s1(i,t){i.uniform1iv(this.addr,t)}function r1(i,t){i.uniform2iv(this.addr,t)}function o1(i,t){i.uniform3iv(this.addr,t)}function a1(i,t){i.uniform4iv(this.addr,t)}function c1(i,t){i.uniform1uiv(this.addr,t)}function l1(i,t){i.uniform2uiv(this.addr,t)}function h1(i,t){i.uniform3uiv(this.addr,t)}function u1(i,t){i.uniform4uiv(this.addr,t)}function d1(i,t,e){let n=this.cache,s=t.length,r=Wc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||r0,r[o])}function f1(i,t,e){let n=this.cache,s=t.length,r=Wc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||a0,r[o])}function p1(i,t,e){let n=this.cache,s=t.length,r=Wc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||c0,r[o])}function m1(i,t,e){let n=this.cache,s=t.length,r=Wc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||o0,r[o])}function g1(i){switch(i){case 5126:return K_;case 35664:return J_;case 35665:return Q_;case 35666:return t1;case 35674:return e1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return s1;case 35667:case 35671:return r1;case 35668:case 35672:return o1;case 35669:case 35673:return a1;case 5125:return c1;case 36294:return l1;case 36295:return h1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}var pu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Z_(e.type)}},mu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g1(e.type)}},gu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},yh=/(\w+)(\])?(\[|\.)?/g;function yp(i,t){i.seq.push(t),i.map[t.id]=t}function x1(i,t,e){let n=i.name,s=n.length;for(yh.lastIndex=0;;){let r=yh.exec(n),o=yh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){yp(e,l===void 0?new pu(a,i,t):new mu(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new gu(a),yp(e,u)),e=u}}}var Tr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);x1(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function vp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var y1=37297,v1=0;function _1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var _p=new $t;function M1(i){ce._getMatrix(_p,ce.workingColorSpace,i);let t=`mat3( ${_p.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case Gc:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_1(i.getShaderSource(t),o)}else return s}function w1(i,t){let e=M1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b1(i,t){let e;switch(t){case Dg:e="Linear";break;case zg:e="Reinhard";break;case Bg:e="Cineon";break;case kc:e="ACESFilmic";break;case Ug:e="AgX";break;case Og:e="Neutral";break;case Fg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nc=new L;function E1(){ce.getLuminanceCoefficients(nc);let i=nc.x.toFixed(4),t=nc.y.toFixed(4),e=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function T1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function A1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Po(i){return i!==""}function wp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var R1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(i){return i.replace(R1,I1)}var C1=new Map;function I1(i,t){let e=Jt[t];if(e===void 0){let n=C1.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xu(e)}var P1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ep(i){return i.replace(P1,N1)}function N1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function L1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ju?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ci&&(t="SHADOWMAP_TYPE_VSM"),t}function D1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rr:case Cr:t="ENVMAP_TYPE_CUBE";break;case Vc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function z1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cr:t="ENVMAP_MODE_REFRACTION";break}return t}function B1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vp:t="ENVMAP_BLENDING_MULTIPLY";break;case Ng:t="ENVMAP_BLENDING_MIX";break;case Lg:t="ENVMAP_BLENDING_ADD";break}return t}function F1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function U1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=L1(e),l=D1(e),h=z1(e),u=B1(e),d=F1(e),f=S1(e),m=T1(r),x=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Po).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Po).join(`
`),p.length>0&&(p+=`
`)):(g=[Sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),p=[Sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==as?"#define TONE_MAPPING":"",e.toneMapping!==as?Jt.tonemapping_pars_fragment:"",e.toneMapping!==as?b1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,w1("linearToOutputTexel",e.outputColorSpace),E1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Po).join(`
`)),o=xu(o),o=wp(o,e),o=bp(o,e),a=xu(a),a=wp(a,e),a=bp(a,e),o=Ep(o),a=Ep(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Uf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+g+o,v=y+p+a,R=vp(s,s.VERTEX_SHADER,_),S=vp(s,s.FRAGMENT_SHADER,v);s.attachShader(x,R),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(R).trim(),z=s.getShaderInfoLog(S).trim(),U=!0,D=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,S);else{let Q=Mp(s,R,"vertex"),V=Mp(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+Q+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||z==="")&&(D=!1);D&&(P.diagnostics={runnable:U,programLog:H,vertexShader:{log:N,prefix:g},fragmentShader:{log:z,prefix:p}})}s.deleteShader(R),s.deleteShader(S),C=new Tr(s,x),b=A1(s,x)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,y1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=v1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=S,this}var O1=0,yu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vu(t),e.set(t,n)),n}},vu=class{constructor(t){this.id=O1++,this.code=t,this.usedTimes=0}};function H1(i,t,e,n,s,r,o){let a=new Oo,c=new yu,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,M,P,H,N){let z=H.fog,U=N.geometry,D=b.isMeshStandardMaterial?H.environment:null,Q=(b.isMeshStandardMaterial?e:t).get(b.envMap||D),V=Q&&Q.mapping===Vc?Q.image.height:null,J=m[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let ut=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,pt=ut!==void 0?ut.length:0,ot=0;U.morphAttributes.position!==void 0&&(ot=1),U.morphAttributes.normal!==void 0&&(ot=2),U.morphAttributes.color!==void 0&&(ot=3);let Bt,X,rt,wt;if(J){let ge=oi[J];Bt=ge.vertexShader,X=ge.fragmentShader}else Bt=b.vertexShader,X=b.fragmentShader,c.update(b),rt=c.getVertexShaderID(b),wt=c.getFragmentShaderID(b);let dt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),Gt=N.isInstancedMesh===!0,te=N.isBatchedMesh===!0,Ie=!!b.map,oe=!!b.matcap,Be=!!Q,k=!!b.aoMap,Ln=!!b.lightMap,ne=!!b.bumpMap,ie=!!b.normalMap,Lt=!!b.displacementMap,Ee=!!b.emissiveMap,Nt=!!b.metalnessMap,I=!!b.roughnessMap,E=b.anisotropy>0,G=b.clearcoat>0,tt=b.dispersion>0,nt=b.iridescence>0,Z=b.sheen>0,Rt=b.transmission>0,gt=E&&!!b.anisotropyMap,Mt=G&&!!b.clearcoatMap,ae=G&&!!b.clearcoatNormalMap,at=G&&!!b.clearcoatRoughnessMap,bt=nt&&!!b.iridescenceMap,Dt=nt&&!!b.iridescenceThicknessMap,Ht=Z&&!!b.sheenColorMap,Et=Z&&!!b.sheenRoughnessMap,se=!!b.specularMap,Kt=!!b.specularColorMap,we=!!b.specularIntensityMap,B=Rt&&!!b.transmissionMap,mt=Rt&&!!b.thicknessMap,Y=!!b.gradientMap,et=!!b.alphaMap,vt=b.alphaTest>0,xt=!!b.alphaHash,Xt=!!b.extensions,Le=as;b.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Le=i.toneMapping);let on={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:Bt,fragmentShader:X,defines:b.defines,customVertexShaderID:rt,customFragmentShaderID:wt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:te,batchingColor:te&&N._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&N.instanceColor!==null,instancingMorph:Gt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:kr,alphaToCoverage:!!b.alphaToCoverage,map:Ie,matcap:oe,envMap:Be,envMapMode:Be&&Q.mapping,envMapCubeUVHeight:V,aoMap:k,lightMap:Ln,bumpMap:ne,normalMap:ie,displacementMap:d&&Lt,emissiveMap:Ee,normalMapObjectSpace:ie&&b.normalMapType===Gg,normalMapTangentSpace:ie&&b.normalMapType===Qp,metalnessMap:Nt,roughnessMap:I,anisotropy:E,anisotropyMap:gt,clearcoat:G,clearcoatMap:Mt,clearcoatNormalMap:ae,clearcoatRoughnessMap:at,dispersion:tt,iridescence:nt,iridescenceMap:bt,iridescenceThicknessMap:Dt,sheen:Z,sheenColorMap:Ht,sheenRoughnessMap:Et,specularMap:se,specularColorMap:Kt,specularIntensityMap:we,transmission:Rt,transmissionMap:B,thicknessMap:mt,gradientMap:Y,opaque:b.transparent===!1&&b.blending===br&&b.alphaToCoverage===!1,alphaMap:et,alphaTest:vt,alphaHash:xt,combine:b.combine,mapUv:Ie&&x(b.map.channel),aoMapUv:k&&x(b.aoMap.channel),lightMapUv:Ln&&x(b.lightMap.channel),bumpMapUv:ne&&x(b.bumpMap.channel),normalMapUv:ie&&x(b.normalMap.channel),displacementMapUv:Lt&&x(b.displacementMap.channel),emissiveMapUv:Ee&&x(b.emissiveMap.channel),metalnessMapUv:Nt&&x(b.metalnessMap.channel),roughnessMapUv:I&&x(b.roughnessMap.channel),anisotropyMapUv:gt&&x(b.anisotropyMap.channel),clearcoatMapUv:Mt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(b.sheenRoughnessMap.channel),specularMapUv:se&&x(b.specularMap.channel),specularColorMapUv:Kt&&x(b.specularColorMap.channel),specularIntensityMapUv:we&&x(b.specularIntensityMap.channel),transmissionMapUv:B&&x(b.transmissionMap.channel),thicknessMapUv:mt&&x(b.thicknessMap.channel),alphaMapUv:et&&x(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ie||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Ie||et),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ft,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ie&&b.map.isVideoTexture===!0&&ce.getTransfer(b.map.colorSpace)===ye,decodeVideoTextureEmissive:Ee&&b.emissiveMap.isVideoTexture===!0&&ce.getTransfer(b.emissiveMap.colorSpace)===ye,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pe,flipSided:b.side===xn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Xt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&b.extensions.multiDraw===!0||te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return on.vertexUv1s=l.has(1),on.vertexUv2s=l.has(2),on.vertexUv3s=l.has(3),l.clear(),on}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(M,b),_(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let M=m[b.type],P;if(M){let H=oi[M];P=Ix.clone(H.uniforms)}else P=b.uniforms;return P}function R(b,M){let P;for(let H=0,N=h.length;H<N;H++){let z=h[H];if(z.cacheKey===M){P=z,++P.usedTimes;break}}return P===void 0&&(P=new U1(i,M,b,r),h.push(P)),P}function S(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:C}}function k1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function V1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Tp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ap(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||V1),n.length>1&&n.sort(d||Tp),s.length>1&&s.sort(d||Tp)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function G1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ap,i.set(n,[o])):s>=r.length?(o=new Ap,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function W1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new jt};break;case"SpotLight":e={position:new L,direction:new L,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function q1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var X1=0;function Y1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $1(i){let t=new W1,e=q1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new he,o=new he;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,y=0,_=0,v=0,R=0,S=0,A=0;l.sort(Y1);for(let b=0,M=l.length;b<M;b++){let P=l[b],H=P.color,N=P.intensity,z=P.distance,U=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*N,u+=H.g*N,d+=H.b*N;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],N);A++}else if(P.isDirectionalLight){let D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,V=e.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=D,f++}else if(P.isSpotLight){let D=t.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(H).multiplyScalar(N),D.distance=z,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[x]=D;let Q=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,Q.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[x]=Q.matrix,P.castShadow){let V=e.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=U,v++}x++}else if(P.isRectAreaLight){let D=t.get(P);D.color.copy(H).multiplyScalar(N),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=D,g++}else if(P.isPointLight){let D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){let Q=P.shadow,V=e.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=P.shadow.matrix,_++}n.point[m]=D,m++}else if(P.isHemisphereLight){let D=t.get(P);D.skyColor.copy(P.color).multiplyScalar(N),D.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=D,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+R-S,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,C.directionalLength=f,C.pointLength=m,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=A,n.version=X1++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let _=l[p];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function Rp(i){let t=new $1(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function j1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Rp(i),t.set(s,[a])):r>=o.length?(a=new Rp(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var _u=class extends ds{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Mu=class extends ds{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K1=`uniform sampler2D shadow_pass;
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
}`;function J1(i,t,e){let n=new Ho,s=new ht,r=new ht,o=new ve,a=new _u({depthPacking:Vg}),c=new Mu,l={},h=e.maxTextureSize,u={[cs]:xn,[xn]:cs,[Pe]:Pe},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Z1,fragmentShader:K1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ne;m.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new lt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kp;let p=this.type;this.render=function(S,A,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(os),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let N=p!==Ci&&this.type===Ci,z=p===Ci&&this.type!==Ci;for(let U=0,D=S.length;U<D;U++){let Q=S[U],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let J=V.getFrameExtents();if(s.multiply(J),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,V.mapSize.y=r.y)),V.map===null||N===!0||z===!0){let pt=this.type!==Ci?{minFilter:Tn,magFilter:Tn}:{};V.map!==null&&V.map.dispose(),V.map=new Di(s.x,s.y,pt),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ut=V.getViewportCount();for(let pt=0;pt<ut;pt++){let ot=V.getViewport(pt);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),H.viewport(o),V.updateMatrices(Q,pt),n=V.getFrustum(),v(A,C,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===Ci&&y(V,C),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,M,P)};function y(S,A){let C=t.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Di(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,C,f,x,null)}function _(S,A,C,b){let M=null,P=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=M.uuid,N=A.uuid,z=l[H];z===void 0&&(z={},l[H]=z);let U=z[N];U===void 0&&(U=M.clone(),z[N]=U,A.addEventListener("dispose",R)),M=U}if(M.visible=A.visible,M.wireframe=A.wireframe,b===Ci?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=i.properties.get(M);H.light=C}return M}function v(S,A,C,b,M){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Ci)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let N=t.update(S),z=S.material;if(Array.isArray(z)){let U=N.groups;for(let D=0,Q=U.length;D<Q;D++){let V=U[D],J=z[V.materialIndex];if(J&&J.visible){let ut=_(S,J,b,M);S.onBeforeShadow(i,S,A,C,N,ut,V),i.renderBufferDirect(C,null,N,ut,S,V),S.onAfterShadow(i,S,A,C,N,ut,V)}}}else if(z.visible){let U=_(S,z,b,M);S.onBeforeShadow(i,S,A,C,N,U,null),i.renderBufferDirect(C,null,N,U,S,null),S.onAfterShadow(i,S,A,C,N,U,null)}}let H=S.children;for(let N=0,z=H.length;N<z;N++)v(H[N],A,C,b,M)}function R(S){S.target.removeEventListener("dispose",R);for(let C in l){let b=l[C],M=S.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var Q1={[Th]:Ah,[Rh]:Ph,[Ch]:Nh,[Ar]:Ih,[Ah]:Th,[Ph]:Rh,[Nh]:Ch,[Ih]:Ar};function tM(i,t){function e(){let B=!1,mt=new ve,Y=null,et=new ve(0,0,0,0);return{setMask:function(vt){Y!==vt&&!B&&(i.colorMask(vt,vt,vt,vt),Y=vt)},setLocked:function(vt){B=vt},setClear:function(vt,xt,Xt,Le,on){on===!0&&(vt*=Le,xt*=Le,Xt*=Le),mt.set(vt,xt,Xt,Le),et.equals(mt)===!1&&(i.clearColor(vt,xt,Xt,Le),et.copy(mt))},reset:function(){B=!1,Y=null,et.set(-1,0,0,0)}}}function n(){let B=!1,mt=!1,Y=null,et=null,vt=null;return{setReversed:function(xt){if(mt!==xt){let Xt=t.get("EXT_clip_control");mt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);let Le=vt;vt=null,this.setClear(Le)}mt=xt},getReversed:function(){return mt},setTest:function(xt){xt?dt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(xt){Y!==xt&&!B&&(i.depthMask(xt),Y=xt)},setFunc:function(xt){if(mt&&(xt=Q1[xt]),et!==xt){switch(xt){case Th:i.depthFunc(i.NEVER);break;case Ah:i.depthFunc(i.ALWAYS);break;case Rh:i.depthFunc(i.LESS);break;case Ar:i.depthFunc(i.LEQUAL);break;case Ch:i.depthFunc(i.EQUAL);break;case Ih:i.depthFunc(i.GEQUAL);break;case Ph:i.depthFunc(i.GREATER);break;case Nh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=xt}},setLocked:function(xt){B=xt},setClear:function(xt){vt!==xt&&(mt&&(xt=1-xt),i.clearDepth(xt),vt=xt)},reset:function(){B=!1,Y=null,et=null,vt=null,mt=!1}}}function s(){let B=!1,mt=null,Y=null,et=null,vt=null,xt=null,Xt=null,Le=null,on=null;return{setTest:function(ge){B||(ge?dt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(ge){mt!==ge&&!B&&(i.stencilMask(ge),mt=ge)},setFunc:function(ge,Wn,wi){(Y!==ge||et!==Wn||vt!==wi)&&(i.stencilFunc(ge,Wn,wi),Y=ge,et=Wn,vt=wi)},setOp:function(ge,Wn,wi){(xt!==ge||Xt!==Wn||Le!==wi)&&(i.stencilOp(ge,Wn,wi),xt=ge,Xt=Wn,Le=wi)},setLocked:function(ge){B=ge},setClear:function(ge){on!==ge&&(i.clearStencil(ge),on=ge)},reset:function(){B=!1,mt=null,Y=null,et=null,vt=null,xt=null,Xt=null,Le=null,on=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,y=null,_=null,v=null,R=null,S=null,A=new jt(0,0,0),C=0,b=!1,M=null,P=null,H=null,N=null,z=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,Q=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),D=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),D=Q>=2);let J=null,ut={},pt=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),Bt=new ve().fromArray(pt),X=new ve().fromArray(ot);function rt(B,mt,Y,et){let vt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(B,xt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<Y;Xt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(mt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return xt}let wt={};wt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),o.setFunc(Ar),ne(!1),ie(Pf),dt(i.CULL_FACE),k(os);function dt(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Ft(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Gt(B,mt){return u[B]!==mt?(i.bindFramebuffer(B,mt),u[B]=mt,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function te(B,mt){let Y=f,et=!1;if(B){Y=d.get(mt),Y===void 0&&(Y=[],d.set(mt,Y));let vt=B.textures;if(Y.length!==vt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Xt=vt.length;xt<Xt;xt++)Y[xt]=i.COLOR_ATTACHMENT0+xt;Y.length=vt.length,et=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,et=!0);et&&i.drawBuffers(Y)}function Ie(B){return m!==B?(i.useProgram(B),m=B,!0):!1}let oe={[Ls]:i.FUNC_ADD,[mg]:i.FUNC_SUBTRACT,[gg]:i.FUNC_REVERSE_SUBTRACT};oe[xg]=i.MIN,oe[yg]=i.MAX;let Be={[vg]:i.ZERO,[_g]:i.ONE,[Mg]:i.SRC_COLOR,[Eh]:i.SRC_ALPHA,[Ag]:i.SRC_ALPHA_SATURATE,[Sg]:i.DST_COLOR,[bg]:i.DST_ALPHA,[wg]:i.ONE_MINUS_SRC_COLOR,[Sh]:i.ONE_MINUS_SRC_ALPHA,[Tg]:i.ONE_MINUS_DST_COLOR,[Eg]:i.ONE_MINUS_DST_ALPHA,[Rg]:i.CONSTANT_COLOR,[Cg]:i.ONE_MINUS_CONSTANT_COLOR,[Ig]:i.CONSTANT_ALPHA,[Pg]:i.ONE_MINUS_CONSTANT_ALPHA};function k(B,mt,Y,et,vt,xt,Xt,Le,on,ge){if(B===os){x===!0&&(Ft(i.BLEND),x=!1);return}if(x===!1&&(dt(i.BLEND),x=!0),B!==pg){if(B!==g||ge!==b){if((p!==Ls||v!==Ls)&&(i.blendEquation(i.FUNC_ADD),p=Ls,v=Ls),ge)switch(B){case br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fc:i.blendFunc(i.ONE,i.ONE);break;case Nf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,_=null,R=null,S=null,A.set(0,0,0),C=0,g=B,b=ge}return}vt=vt||mt,xt=xt||Y,Xt=Xt||et,(mt!==p||vt!==v)&&(i.blendEquationSeparate(oe[mt],oe[vt]),p=mt,v=vt),(Y!==y||et!==_||xt!==R||Xt!==S)&&(i.blendFuncSeparate(Be[Y],Be[et],Be[xt],Be[Xt]),y=Y,_=et,R=xt,S=Xt),(Le.equals(A)===!1||on!==C)&&(i.blendColor(Le.r,Le.g,Le.b,on),A.copy(Le),C=on),g=B,b=!1}function Ln(B,mt){B.side===Pe?Ft(i.CULL_FACE):dt(i.CULL_FACE);let Y=B.side===xn;mt&&(Y=!Y),ne(Y),B.blending===br&&B.transparent===!1?k(os):k(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let et=B.stencilWrite;a.setTest(et),et&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ee(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function ie(B){B!==dg?(dt(i.CULL_FACE),B!==P&&(B===Pf?i.cullFace(i.BACK):B===fg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),P=B}function Lt(B){B!==H&&(D&&i.lineWidth(B),H=B)}function Ee(B,mt,Y){B?(dt(i.POLYGON_OFFSET_FILL),(N!==mt||z!==Y)&&(i.polygonOffset(mt,Y),N=mt,z=Y)):Ft(i.POLYGON_OFFSET_FILL)}function Nt(B){B?dt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function I(B){B===void 0&&(B=i.TEXTURE0+U-1),J!==B&&(i.activeTexture(B),J=B)}function E(B,mt,Y){Y===void 0&&(J===null?Y=i.TEXTURE0+U-1:Y=J);let et=ut[Y];et===void 0&&(et={type:void 0,texture:void 0},ut[Y]=et),(et.type!==B||et.texture!==mt)&&(J!==Y&&(i.activeTexture(Y),J=Y),i.bindTexture(B,mt||wt[B]),et.type=B,et.texture=mt)}function G(){let B=ut[J];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ht(B){Bt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Bt.copy(B))}function Et(B){X.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),X.copy(B))}function se(B,mt){let Y=l.get(mt);Y===void 0&&(Y=new WeakMap,l.set(mt,Y));let et=Y.get(B);et===void 0&&(et=i.getUniformBlockIndex(mt,B.name),Y.set(B,et))}function Kt(B,mt){let et=l.get(mt).get(B);c.get(mt)!==et&&(i.uniformBlockBinding(mt,et,B.__bindingPointIndex),c.set(mt,et))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,ut={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,y=null,_=null,v=null,R=null,S=null,A=new jt(0,0,0),C=0,b=!1,M=null,P=null,H=null,N=null,z=null,Bt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:Ft,bindFramebuffer:Gt,drawBuffers:te,useProgram:Ie,setBlending:k,setMaterial:Ln,setFlipSided:ne,setCullFace:ie,setLineWidth:Lt,setPolygonOffset:Ee,setScissorTest:Nt,activeTexture:I,bindTexture:E,unbindTexture:G,compressedTexImage2D:tt,compressedTexImage3D:nt,texImage2D:bt,texImage3D:Dt,updateUBOMapping:se,uniformBlockBinding:Kt,texStorage2D:ae,texStorage3D:at,texSubImage2D:Z,texSubImage3D:Rt,compressedTexSubImage2D:gt,compressedTexSubImage3D:Mt,scissor:Ht,viewport:Et,reset:we}}function Cp(i,t,e,n){let s=eM(n);switch(e){case Yp:return i*t;case jp:return i*t;case Zp:return i*t*2;case Qu:return i*t/s.components*s.byteLength;case td:return i*t/s.components*s.byteLength;case Kp:return i*t*2/s.components*s.byteLength;case ed:return i*t*2/s.components*s.byteLength;case $p:return i*t*3/s.components*s.byteLength;case jn:return i*t*4/s.components*s.byteLength;case nd:return i*t*4/s.components*s.byteLength;case cc:case lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hc:case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fh:case Oh:return Math.max(i,16)*Math.max(t,8)/4;case Bh:case Uh:return Math.max(i,8)*Math.max(t,8)/2;case Hh:case kh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $h:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case eu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dc:case iu:case su:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jp:case ru:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ou:case au:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function eM(i){switch(i){case Li:case Wp:return{byteLength:1,components:1};case Fo:case qp:case Zo:return{byteLength:2,components:1};case Ku:case Ju:return{byteLength:2,components:4};case Us:case Zu:case ci:return{byteLength:4,components:1};case Xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function nM(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,E){return f?new OffscreenCanvas(I,E):gc("canvas")}function x(I,E,G){let tt=1,nt=Nt(I);if((nt.width>G||nt.height>G)&&(tt=G/Math.max(nt.width,nt.height)),tt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Z=Math.floor(tt*nt.width),Rt=Math.floor(tt*nt.height);u===void 0&&(u=m(Z,Rt));let gt=E?m(Z,Rt):u;return gt.width=Z,gt.height=Rt,gt.getContext("2d").drawImage(I,0,0,Z,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Z+"x"+Rt+")."),gt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,E,G,tt,nt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Z=E;if(E===i.RED&&(G===i.FLOAT&&(Z=i.R32F),G===i.HALF_FLOAT&&(Z=i.R16F),G===i.UNSIGNED_BYTE&&(Z=i.R8)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.R8UI),G===i.UNSIGNED_SHORT&&(Z=i.R16UI),G===i.UNSIGNED_INT&&(Z=i.R32UI),G===i.BYTE&&(Z=i.R8I),G===i.SHORT&&(Z=i.R16I),G===i.INT&&(Z=i.R32I)),E===i.RG&&(G===i.FLOAT&&(Z=i.RG32F),G===i.HALF_FLOAT&&(Z=i.RG16F),G===i.UNSIGNED_BYTE&&(Z=i.RG8)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RG8UI),G===i.UNSIGNED_SHORT&&(Z=i.RG16UI),G===i.UNSIGNED_INT&&(Z=i.RG32UI),G===i.BYTE&&(Z=i.RG8I),G===i.SHORT&&(Z=i.RG16I),G===i.INT&&(Z=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),G===i.UNSIGNED_INT&&(Z=i.RGB32UI),G===i.BYTE&&(Z=i.RGB8I),G===i.SHORT&&(Z=i.RGB16I),G===i.INT&&(Z=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),G===i.UNSIGNED_INT&&(Z=i.RGBA32UI),G===i.BYTE&&(Z=i.RGBA8I),G===i.SHORT&&(Z=i.RGBA16I),G===i.INT&&(Z=i.RGBA32I)),E===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),E===i.RGBA){let Rt=nt?Gc:ce.getTransfer(tt);G===i.FLOAT&&(Z=i.RGBA32F),G===i.HALF_FLOAT&&(Z=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Z=Rt===ye?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(I,E){let G;return I?E===null||E===Us||E===Ir?G=i.DEPTH24_STENCIL8:E===ci?G=i.DEPTH32F_STENCIL8:E===Fo&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Us||E===Ir?G=i.DEPTH_COMPONENT24:E===ci?G=i.DEPTH_COMPONENT32F:E===Fo&&(G=i.DEPTH_COMPONENT16),G}function R(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Tn&&I.minFilter!==ai?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function S(I){let E=I.target;E.removeEventListener("dispose",S),C(E),E.isVideoTexture&&h.delete(E)}function A(I){let E=I.target;E.removeEventListener("dispose",A),M(E)}function C(I){let E=n.get(I);if(E.__webglInit===void 0)return;let G=I.source,tt=d.get(G);if(tt){let nt=tt[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(I),Object.keys(tt).length===0&&d.delete(G)}n.remove(I)}function b(I){let E=n.get(I);i.deleteTexture(E.__webglTexture);let G=I.source,tt=d.get(G);delete tt[E.__cacheKey],o.memory.textures--}function M(I){let E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(E.__webglFramebuffer[tt]))for(let nt=0;nt<E.__webglFramebuffer[tt].length;nt++)i.deleteFramebuffer(E.__webglFramebuffer[tt][nt]);else i.deleteFramebuffer(E.__webglFramebuffer[tt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[tt])}else{if(Array.isArray(E.__webglFramebuffer))for(let tt=0;tt<E.__webglFramebuffer.length;tt++)i.deleteFramebuffer(E.__webglFramebuffer[tt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let tt=0;tt<E.__webglColorRenderbuffer.length;tt++)E.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[tt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let G=I.textures;for(let tt=0,nt=G.length;tt<nt;tt++){let Z=n.get(G[tt]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(G[tt])}n.remove(I)}let P=0;function H(){P=0}function N(){let I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function z(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function U(I,E){let G=n.get(I);if(I.isVideoTexture&&Lt(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){let tt=I.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,I,E);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function D(I,E){let G=n.get(I);if(I.version>0&&G.__version!==I.version){X(G,I,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function Q(I,E){let G=n.get(I);if(I.version>0&&G.__version!==I.version){X(G,I,E);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function V(I,E){let G=n.get(I);if(I.version>0&&G.__version!==I.version){rt(G,I,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}let J={[ls]:i.REPEAT,[Bs]:i.CLAMP_TO_EDGE,[zh]:i.MIRRORED_REPEAT},ut={[Tn]:i.NEAREST,[Hg]:i.NEAREST_MIPMAP_NEAREST,[Ba]:i.NEAREST_MIPMAP_LINEAR,[ai]:i.LINEAR,[ql]:i.LINEAR_MIPMAP_NEAREST,[Fs]:i.LINEAR_MIPMAP_LINEAR},pt={[Wg]:i.NEVER,[Zg]:i.ALWAYS,[qg]:i.LESS,[t0]:i.LEQUAL,[Xg]:i.EQUAL,[jg]:i.GEQUAL,[Yg]:i.GREATER,[$g]:i.NOTEQUAL};function ot(I,E){if(E.type===ci&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ai||E.magFilter===ql||E.magFilter===Ba||E.magFilter===Fs||E.minFilter===ai||E.minFilter===ql||E.minFilter===Ba||E.minFilter===Fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,J[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,J[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,J[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ut[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ut[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,pt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Ba&&E.minFilter!==Fs||E.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Bt(I,E){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",S));let tt=E.source,nt=d.get(tt);nt===void 0&&(nt={},d.set(tt,nt));let Z=z(E);if(Z!==I.__cacheKey){nt[Z]===void 0&&(nt[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),nt[Z].usedTimes++;let Rt=nt[I.__cacheKey];Rt!==void 0&&(nt[I.__cacheKey].usedTimes--,Rt.usedTimes===0&&b(E)),I.__cacheKey=Z,I.__webglTexture=nt[Z].texture}return G}function X(I,E,G){let tt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(tt=i.TEXTURE_3D);let nt=Bt(I,E),Z=E.source;e.bindTexture(tt,I.__webglTexture,i.TEXTURE0+G);let Rt=n.get(Z);if(Z.version!==Rt.__version||nt===!0){e.activeTexture(i.TEXTURE0+G);let gt=ce.getPrimaries(ce.workingColorSpace),Mt=E.colorSpace===dn?null:ce.getPrimaries(E.colorSpace),ae=E.colorSpace===dn||gt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let at=x(E.image,!1,s.maxTextureSize);at=Ee(E,at);let bt=r.convert(E.format,E.colorSpace),Dt=r.convert(E.type),Ht=_(E.internalFormat,bt,Dt,E.colorSpace,E.isVideoTexture);ot(tt,E);let Et,se=E.mipmaps,Kt=E.isVideoTexture!==!0,we=Rt.__version===void 0||nt===!0,B=Z.dataReady,mt=R(E,at);if(E.isDepthTexture)Ht=v(E.format===Pr,E.type),we&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Ht,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Ht,at.width,at.height,0,bt,Dt,null));else if(E.isDataTexture)if(se.length>0){Kt&&we&&e.texStorage2D(i.TEXTURE_2D,mt,Ht,se[0].width,se[0].height);for(let Y=0,et=se.length;Y<et;Y++)Et=se[Y],Kt?B&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,bt,Dt,Et.data):e.texImage2D(i.TEXTURE_2D,Y,Ht,Et.width,Et.height,0,bt,Dt,Et.data);E.generateMipmaps=!1}else Kt?(we&&e.texStorage2D(i.TEXTURE_2D,mt,Ht,at.width,at.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,bt,Dt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,at.width,at.height,0,bt,Dt,at.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Kt&&we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ht,se[0].width,se[0].height,at.depth);for(let Y=0,et=se.length;Y<et;Y++)if(Et=se[Y],E.format!==jn)if(bt!==null)if(Kt){if(B)if(E.layerUpdates.size>0){let vt=Cp(Et.width,Et.height,E.format,E.type);for(let xt of E.layerUpdates){let Xt=Et.data.subarray(xt*vt/Et.data.BYTES_PER_ELEMENT,(xt+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,xt,Et.width,Et.height,1,bt,Xt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,at.depth,bt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ht,Et.width,Et.height,at.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,at.depth,bt,Dt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ht,Et.width,Et.height,at.depth,0,bt,Dt,Et.data)}else{Kt&&we&&e.texStorage2D(i.TEXTURE_2D,mt,Ht,se[0].width,se[0].height);for(let Y=0,et=se.length;Y<et;Y++)Et=se[Y],E.format!==jn?bt!==null?Kt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Ht,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?B&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,bt,Dt,Et.data):e.texImage2D(i.TEXTURE_2D,Y,Ht,Et.width,Et.height,0,bt,Dt,Et.data)}else if(E.isDataArrayTexture)if(Kt){if(we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ht,at.width,at.height,at.depth),B)if(E.layerUpdates.size>0){let Y=Cp(at.width,at.height,E.format,E.type);for(let et of E.layerUpdates){let vt=at.data.subarray(et*Y/at.data.BYTES_PER_ELEMENT,(et+1)*Y/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,bt,Dt,vt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,bt,Dt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,at.width,at.height,at.depth,0,bt,Dt,at.data);else if(E.isData3DTexture)Kt?(we&&e.texStorage3D(i.TEXTURE_3D,mt,Ht,at.width,at.height,at.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,bt,Dt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,at.width,at.height,at.depth,0,bt,Dt,at.data);else if(E.isFramebufferTexture){if(we)if(Kt)e.texStorage2D(i.TEXTURE_2D,mt,Ht,at.width,at.height);else{let Y=at.width,et=at.height;for(let vt=0;vt<mt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Ht,Y,et,0,bt,Dt,null),Y>>=1,et>>=1}}else if(se.length>0){if(Kt&&we){let Y=Nt(se[0]);e.texStorage2D(i.TEXTURE_2D,mt,Ht,Y.width,Y.height)}for(let Y=0,et=se.length;Y<et;Y++)Et=se[Y],Kt?B&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,bt,Dt,Et):e.texImage2D(i.TEXTURE_2D,Y,Ht,bt,Dt,Et);E.generateMipmaps=!1}else if(Kt){if(we){let Y=Nt(at);e.texStorage2D(i.TEXTURE_2D,mt,Ht,Y.width,Y.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Dt,at)}else e.texImage2D(i.TEXTURE_2D,0,Ht,bt,Dt,at);g(E)&&p(tt),Rt.__version=Z.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function rt(I,E,G){if(E.image.length!==6)return;let tt=Bt(I,E),nt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);let Z=n.get(nt);if(nt.version!==Z.__version||tt===!0){e.activeTexture(i.TEXTURE0+G);let Rt=ce.getPrimaries(ce.workingColorSpace),gt=E.colorSpace===dn?null:ce.getPrimaries(E.colorSpace),Mt=E.colorSpace===dn||Rt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let ae=E.isCompressedTexture||E.image[0].isCompressedTexture,at=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let et=0;et<6;et++)!ae&&!at?bt[et]=x(E.image[et],!0,s.maxCubemapSize):bt[et]=at?E.image[et].image:E.image[et],bt[et]=Ee(E,bt[et]);let Dt=bt[0],Ht=r.convert(E.format,E.colorSpace),Et=r.convert(E.type),se=_(E.internalFormat,Ht,Et,E.colorSpace),Kt=E.isVideoTexture!==!0,we=Z.__version===void 0||tt===!0,B=nt.dataReady,mt=R(E,Dt);ot(i.TEXTURE_CUBE_MAP,E);let Y;if(ae){Kt&&we&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,se,Dt.width,Dt.height);for(let et=0;et<6;et++){Y=bt[et].mipmaps;for(let vt=0;vt<Y.length;vt++){let xt=Y[vt];E.format!==jn?Ht!==null?Kt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,0,0,xt.width,xt.height,Ht,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,se,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,0,0,xt.width,xt.height,Ht,Et,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,se,xt.width,xt.height,0,Ht,Et,xt.data)}}}else{if(Y=E.mipmaps,Kt&&we){Y.length>0&&mt++;let et=Nt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,se,et.width,et.height)}for(let et=0;et<6;et++)if(at){Kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,bt[et].width,bt[et].height,Ht,Et,bt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,se,bt[et].width,bt[et].height,0,Ht,Et,bt[et].data);for(let vt=0;vt<Y.length;vt++){let Xt=Y[vt].image[et].image;Kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,0,0,Xt.width,Xt.height,Ht,Et,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,se,Xt.width,Xt.height,0,Ht,Et,Xt.data)}}else{Kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ht,Et,bt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,se,Ht,Et,bt[et]);for(let vt=0;vt<Y.length;vt++){let xt=Y[vt];Kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,0,0,Ht,Et,xt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,se,Ht,Et,xt.image[et])}}}g(E)&&p(i.TEXTURE_CUBE_MAP),Z.__version=nt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function wt(I,E,G,tt,nt,Z){let Rt=r.convert(G.format,G.colorSpace),gt=r.convert(G.type),Mt=_(G.internalFormat,Rt,gt,G.colorSpace),ae=n.get(E),at=n.get(G);if(at.__renderTarget=E,!ae.__hasExternalTextures){let bt=Math.max(1,E.width>>Z),Dt=Math.max(1,E.height>>Z);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Z,Mt,bt,Dt,E.depth,0,Rt,gt,null):e.texImage2D(nt,Z,Mt,bt,Dt,0,Rt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),ie(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,nt,at.__webglTexture,0,ne(E)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,nt,at.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(I,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){let tt=E.depthTexture,nt=tt&&tt.isDepthTexture?tt.type:null,Z=v(E.stencilBuffer,nt),Rt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=ne(E);ie(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,Z,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,Z,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Z,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,I)}else{let tt=E.textures;for(let nt=0;nt<tt.length;nt++){let Z=tt[nt],Rt=r.convert(Z.format,Z.colorSpace),gt=r.convert(Z.type),Mt=_(Z.internalFormat,Rt,gt,Z.colorSpace),ae=ne(E);G&&ie(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Mt,E.width,E.height):ie(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(E.depthTexture);tt.__renderTarget=E,(!tt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),U(E.depthTexture,0);let nt=tt.__webglTexture,Z=ne(E);if(E.depthTexture.format===Er)ie(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(E.depthTexture.format===Pr)ie(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Gt(I){let E=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let tt=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),tt){let nt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,tt.removeEventListener("dispose",nt)};tt.addEventListener("dispose",nt),E.__depthDisposeCallback=nt}E.__boundDepthTexture=tt}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ft(E.__webglFramebuffer,I)}else if(G){E.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[tt]),E.__webglDepthbuffer[tt]===void 0)E.__webglDepthbuffer[tt]=i.createRenderbuffer(),dt(E.__webglDepthbuffer[tt],I,!1);else{let nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),dt(E.__webglDepthbuffer,I,!1);else{let tt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(I,E,G){let tt=n.get(I);E!==void 0&&wt(tt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Gt(I)}function Ie(I){let E=I.texture,G=n.get(I),tt=n.get(E);I.addEventListener("dispose",A);let nt=I.textures,Z=I.isWebGLCubeRenderTarget===!0,Rt=nt.length>1;if(Rt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=E.version,o.memory.textures++),Z){G.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[gt]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)G.__webglFramebuffer[gt][Mt]=i.createFramebuffer()}else G.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)G.__webglFramebuffer[gt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let gt=0,Mt=nt.length;gt<Mt;gt++){let ae=n.get(nt[gt]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ie(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let gt=0;gt<nt.length;gt++){let Mt=nt[gt];G.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[gt]);let ae=r.convert(Mt.format,Mt.colorSpace),at=r.convert(Mt.type),bt=_(Mt.internalFormat,ae,at,Mt.colorSpace,I.isXRRenderTarget===!0),Dt=ne(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,bt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,G.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),ot(i.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)wt(G.__webglFramebuffer[gt][Mt],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Mt);else wt(G.__webglFramebuffer[gt],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let gt=0,Mt=nt.length;gt<Mt;gt++){let ae=nt[gt],at=n.get(ae);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),ot(i.TEXTURE_2D,ae),wt(G.__webglFramebuffer,I,ae,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),g(ae)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(gt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,tt.__webglTexture),ot(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)wt(G.__webglFramebuffer[Mt],I,E,i.COLOR_ATTACHMENT0,gt,Mt);else wt(G.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,gt,0);g(E)&&p(gt),e.unbindTexture()}I.depthBuffer&&Gt(I)}function oe(I){let E=I.textures;for(let G=0,tt=E.length;G<tt;G++){let nt=E[G];if(g(nt)){let Z=y(I),Rt=n.get(nt).__webglTexture;e.bindTexture(Z,Rt),p(Z),e.unbindTexture()}}}let Be=[],k=[];function Ln(I){if(I.samples>0){if(ie(I)===!1){let E=I.textures,G=I.width,tt=I.height,nt=i.COLOR_BUFFER_BIT,Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(I),gt=E.length>1;if(gt)for(let Mt=0;Mt<E.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Mt=0;Mt<E.length;Mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Mt]);let ae=n.get(E[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,G,tt,0,0,G,tt,nt,i.NEAREST),c===!0&&(Be.length=0,k.length=0,Be.push(i.COLOR_ATTACHMENT0+Mt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Be.push(Z),k.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Be))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Mt=0;Mt<E.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Mt]);let ae=n.get(E[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,ae,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ne(I){return Math.min(s.maxSamples,I.samples)}function ie(I){let E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Lt(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function Ee(I,E){let G=I.colorSpace,tt=I.format,nt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==kr&&G!==dn&&(ce.getTransfer(G)===ye?(tt!==jn||nt!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Nt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=U,this.setTexture2DArray=D,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=te,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=ie}function iM(i,t){function e(n,s=dn){let r,o=ce.getTransfer(s);if(n===Li)return i.UNSIGNED_BYTE;if(n===Ku)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ju)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wp)return i.BYTE;if(n===qp)return i.SHORT;if(n===Fo)return i.UNSIGNED_SHORT;if(n===Zu)return i.INT;if(n===Us)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===Zo)return i.HALF_FLOAT;if(n===Yp)return i.ALPHA;if(n===$p)return i.RGB;if(n===jn)return i.RGBA;if(n===jp)return i.LUMINANCE;if(n===Zp)return i.LUMINANCE_ALPHA;if(n===Er)return i.DEPTH_COMPONENT;if(n===Pr)return i.DEPTH_STENCIL;if(n===Qu)return i.RED;if(n===td)return i.RED_INTEGER;if(n===Kp)return i.RG;if(n===ed)return i.RG_INTEGER;if(n===nd)return i.RGBA_INTEGER;if(n===cc||n===lc||n===hc||n===uc)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bh||n===Fh||n===Uh||n===Oh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hh||n===kh||n===Vh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hh||n===kh)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vh)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gh||n===Wh||n===qh||n===Xh||n===Yh||n===$h||n===jh||n===Zh||n===Kh||n===Jh||n===Qh||n===tu||n===eu||n===nu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gh)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wh)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qh)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xh)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yh)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$h)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jh)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zh)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kh)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jh)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qh)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tu)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eu)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nu)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dc||n===iu||n===su)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dc)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===iu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===su)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jp||n===ru||n===ou||n===au)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ou)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===au)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var wu=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ee=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},sM={type:"move"},Do=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},rM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oM=`
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

}`,bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new yn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new li({vertexShader:rM,fragmentShader:oM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eu=class extends hs{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=new bu,g=e.getContextAttributes(),p=null,y=null,_=[],v=[],R=new ht,S=null,A=new Ze;A.viewport=new ve;let C=new Ze;C.viewport=new ve;let b=[A,C],M=new wu,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let rt=_[X];return rt===void 0&&(rt=new Do,_[X]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(X){let rt=_[X];return rt===void 0&&(rt=new Do,_[X]=rt),rt.getGripSpace()},this.getHand=function(X){let rt=_[X];return rt===void 0&&(rt=new Do,_[X]=rt),rt.getHandSpace()};function N(X){let rt=v.indexOf(X.inputSource);if(rt===-1)return;let wt=_[rt];wt!==void 0&&(wt.update(X.inputSource,X.frame,l||o),wt.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",U);for(let X=0;X<_.length;X++){let rt=v[X];rt!==null&&(v[X]=null,_[X].disconnect(rt))}P=null,H=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",z),s.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let rt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Di(f.framebufferWidth,f.framebufferHeight,{format:jn,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let rt=null,wt=null,dt=null;g.depth&&(dt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=g.stencil?Pr:Er,wt=g.stencil?Ir:Us);let Ft={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Di(d.textureWidth,d.textureHeight,{format:jn,type:Li,depthTexture:new Sc(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function U(X){for(let rt=0;rt<X.removed.length;rt++){let wt=X.removed[rt],dt=v.indexOf(wt);dt>=0&&(v[dt]=null,_[dt].disconnect(wt))}for(let rt=0;rt<X.added.length;rt++){let wt=X.added[rt],dt=v.indexOf(wt);if(dt===-1){for(let Gt=0;Gt<_.length;Gt++)if(Gt>=v.length){v.push(wt),dt=Gt;break}else if(v[Gt]===null){v[Gt]=wt,dt=Gt;break}if(dt===-1)break}let Ft=_[dt];Ft&&Ft.connect(wt)}}let D=new L,Q=new L;function V(X,rt,wt){D.setFromMatrixPosition(rt.matrixWorld),Q.setFromMatrixPosition(wt.matrixWorld);let dt=D.distanceTo(Q),Ft=rt.projectionMatrix.elements,Gt=wt.projectionMatrix.elements,te=Ft[14]/(Ft[10]-1),Ie=Ft[14]/(Ft[10]+1),oe=(Ft[9]+1)/Ft[5],Be=(Ft[9]-1)/Ft[5],k=(Ft[8]-1)/Ft[0],Ln=(Gt[8]+1)/Gt[0],ne=te*k,ie=te*Ln,Lt=dt/(-k+Ln),Ee=Lt*-k;if(rt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ee),X.translateZ(Lt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ft[10]===-1)X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Nt=te+Lt,I=Ie+Lt,E=ne-Ee,G=ie+(dt-Ee),tt=oe*Ie/I*Nt,nt=Be*Ie/I*Nt;X.projectionMatrix.makePerspective(E,G,tt,nt,Nt,I),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function J(X,rt){rt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(rt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let rt=X.near,wt=X.far;x.texture!==null&&(x.depthNear>0&&(rt=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),M.near=C.near=A.near=rt,M.far=C.far=A.far=wt,(P!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,H=M.far),A.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;let dt=X.parent,Ft=M.cameras;J(M,dt);for(let Gt=0;Gt<Ft.length;Gt++)J(Ft[Gt],dt);Ft.length===2?V(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),ut(X,M,dt)};function ut(X,rt,wt){wt===null?X.matrix.copy(rt.matrixWorld):(X.matrix.copy(wt.matrixWorld),X.matrix.invert(),X.matrix.multiply(rt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Lr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let pt=null;function ot(X,rt){if(h=rt.getViewerPose(l||o),m=rt,h!==null){let wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let dt=!1;wt.length!==M.cameras.length&&(M.cameras.length=0,dt=!0);for(let Gt=0;Gt<wt.length;Gt++){let te=wt[Gt],Ie=null;if(f!==null)Ie=f.getViewport(te);else{let Be=u.getViewSubImage(d,te);Ie=Be.viewport,Gt===0&&(t.setRenderTargetTextures(y,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),t.setRenderTarget(y))}let oe=b[Gt];oe===void 0&&(oe=new Ze,oe.layers.enable(Gt),oe.viewport=new ve,b[Gt]=oe),oe.matrix.fromArray(te.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(te.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Gt===0&&(M.matrix.copy(oe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),dt===!0&&M.cameras.push(oe)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){let Gt=u.getDepthInformation(wt[0]);Gt&&Gt.isValid&&Gt.texture&&x.init(t,Gt,s.renderState)}}for(let wt=0;wt<_.length;wt++){let dt=v[wt],Ft=_[wt];dt!==null&&Ft!==void 0&&Ft.update(dt,rt,l||o)}pt&&pt(X,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}let Bt=new s0;Bt.setAnimationLoop(ot),this.setAnimationLoop=function(X){pt=X},this.dispose=function(){}}},Ps=new vn,aM=new he;function cM(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,i0(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===xn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===xn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),_=y.envMap,v=y.envMapRotation;_&&(g.envMap.value=_,Ps.copy(v),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),g.envMapRotation.value.setFromMatrix4(aM.makeRotationFromEuler(Ps)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lM(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function l(y,_){let v=s[y.id];v===void 0&&(m(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",g));let R=_.program;n.updateUBOMapping(y,R);let S=t.render.frame;r[y.id]!==S&&(d(y),r[y.id]=S)}function h(y){let _=u();y.__bindingPointIndex=_;let v=i.createBuffer(),R=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],v=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,A=v.length;S<A;S++){let C=Array.isArray(v[S])?v[S]:[v[S]];for(let b=0,M=C.length;b<M;b++){let P=C[b];if(f(P,S,b,R)===!0){let H=P.__offset,N=Array.isArray(P.value)?P.value:[P.value],z=0;for(let U=0;U<N.length;U++){let D=N[U],Q=x(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,H+z,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,z),z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,v,R){let S=y.value,A=_+"_"+v;if(R[A]===void 0)return typeof S=="number"||typeof S=="boolean"?R[A]=S:R[A]=S.clone(),!0;{let C=R[A];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return R[A]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function m(y){let _=y.uniforms,v=0,R=16;for(let A=0,C=_.length;A<C;A++){let b=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,P=b.length;M<P;M++){let H=b[M],N=Array.isArray(H.value)?H.value:[H.value];for(let z=0,U=N.length;z<U;z++){let D=N[z],Q=x(D),V=v%R,J=V%Q.boundary,ut=V+J;v+=J,ut!==0&&R-ut<Q.storage&&(v+=R-ut),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=Q.storage}}}let S=v%R;return S>0&&(v+=R-S),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){let _=y.target;_.removeEventListener("dispose",g);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var ko=class{constructor(t={}){let{canvas:e=fx(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,y=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=as,this.toneMappingExposure=1;let v=this,R=!1,S=0,A=0,C=null,b=-1,M=null,P=new ve,H=new ve,N=null,z=new jt(0),U=0,D=e.width,Q=e.height,V=1,J=null,ut=null,pt=new ve(0,0,D,Q),ot=new ve(0,0,D,Q),Bt=!1,X=new Ho,rt=!1,wt=!1,dt=new he,Ft=new he,Gt=new L,te=new ve,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function Be(){return C===null?V:1}let k=n;function Ln(T,F){return e.getContext(T,F)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$u}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),k===null){let F="webgl2";if(k=Ln(F,T),k===null)throw Ln(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ne,ie,Lt,Ee,Nt,I,E,G,tt,nt,Z,Rt,gt,Mt,ae,at,bt,Dt,Ht,Et,se,Kt,we,B;function mt(){ne=new S_(k),ne.init(),Kt=new iM(k,ne),ie=new v_(k,ne,t,Kt),Lt=new tM(k,ne),ie.reverseDepthBuffer&&d&&Lt.buffers.depth.setReversed(!0),Ee=new R_(k),Nt=new k1,I=new nM(k,ne,Lt,Nt,ie,Kt,Ee),E=new M_(v),G=new E_(v),tt=new zx(k),we=new x_(k,tt),nt=new T_(k,tt,Ee,we),Z=new I_(k,nt,tt,Ee),Ht=new C_(k,ie,I),at=new __(Nt),Rt=new H1(v,E,G,ne,ie,we,at),gt=new cM(v,Nt),Mt=new G1,ae=new j1(ne),Dt=new g_(v,E,G,Lt,Z,f,c),bt=new J1(v,Z,ie),B=new lM(k,Ee,ie,Lt),Et=new y_(k,ne,Ee),se=new A_(k,ne,Ee),Ee.programs=Rt.programs,v.capabilities=ie,v.extensions=ne,v.properties=Nt,v.renderLists=Mt,v.shadowMap=bt,v.state=Lt,v.info=Ee}mt();let Y=new Eu(v,k);this.xr=Y,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(D,Q,!1))},this.getSize=function(T){return T.set(D,Q)},this.setSize=function(T,F,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=T,Q=F,e.width=Math.floor(T*V),e.height=Math.floor(F*V),W===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(D*V,Q*V).floor()},this.setDrawingBufferSize=function(T,F,W){D=T,Q=F,V=W,e.width=Math.floor(T*W),e.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(pt)},this.setViewport=function(T,F,W,q){T.isVector4?pt.set(T.x,T.y,T.z,T.w):pt.set(T,F,W,q),Lt.viewport(P.copy(pt).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(ot)},this.setScissor=function(T,F,W,q){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,F,W,q),Lt.scissor(H.copy(ot).multiplyScalar(V).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(T){Lt.setScissorTest(Bt=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){ut=T},this.getClearColor=function(T){return T.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(T=!0,F=!0,W=!0){let q=0;if(T){let O=!1;if(C!==null){let ct=C.texture.format;O=ct===nd||ct===ed||ct===td}if(O){let ct=C.texture.type,yt=ct===Li||ct===Us||ct===Fo||ct===Ir||ct===Ku||ct===Ju,St=Dt.getClearColor(),Tt=Dt.getClearAlpha(),Vt=St.r,Yt=St.g,At=St.b;yt?(m[0]=Vt,m[1]=Yt,m[2]=At,m[3]=Tt,k.clearBufferuiv(k.COLOR,0,m)):(x[0]=Vt,x[1]=Yt,x[2]=At,x[3]=Tt,k.clearBufferiv(k.COLOR,0,x))}else q|=k.COLOR_BUFFER_BIT}F&&(q|=k.DEPTH_BUFFER_BIT),W&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Mt.dispose(),ae.dispose(),Nt.dispose(),E.dispose(),G.dispose(),Z.dispose(),we.dispose(),B.dispose(),Rt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",bf),Y.removeEventListener("sessionend",Ef),Ss.stop()};function et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let T=Ee.autoReset,F=bt.enabled,W=bt.autoUpdate,q=bt.needsUpdate,O=bt.type;mt(),Ee.autoReset=T,bt.enabled=F,bt.autoUpdate=W,bt.needsUpdate=q,bt.type=O}function xt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Xt(T){let F=T.target;F.removeEventListener("dispose",Xt),Le(F)}function Le(T){on(T),Nt.remove(T)}function on(T){let F=Nt.get(T).programs;F!==void 0&&(F.forEach(function(W){Rt.releaseProgram(W)}),T.isShaderMaterial&&Rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,q,O,ct){F===null&&(F=Ie);let yt=O.isMesh&&O.matrixWorld.determinant()<0,St=lg(T,F,W,q,O);Lt.setMaterial(q,yt);let Tt=W.index,Vt=1;if(q.wireframe===!0){if(Tt=nt.getWireframeAttribute(W),Tt===void 0)return;Vt=2}let Yt=W.drawRange,At=W.attributes.position,le=Yt.start*Vt,be=(Yt.start+Yt.count)*Vt;ct!==null&&(le=Math.max(le,ct.start*Vt),be=Math.min(be,(ct.start+ct.count)*Vt)),Tt!==null?(le=Math.max(le,0),be=Math.min(be,Tt.count)):At!=null&&(le=Math.max(le,0),be=Math.min(be,At.count));let Se=be-le;if(Se<0||Se===1/0)return;we.setup(O,q,St,W,Tt);let gn,de=Et;if(Tt!==null&&(gn=tt.get(Tt),de=se,de.setIndex(gn)),O.isMesh)q.wireframe===!0?(Lt.setLineWidth(q.wireframeLinewidth*Be()),de.setMode(k.LINES)):de.setMode(k.TRIANGLES);else if(O.isLine){let Ct=q.linewidth;Ct===void 0&&(Ct=1),Lt.setLineWidth(Ct*Be()),O.isLineSegments?de.setMode(k.LINES):O.isLineLoop?de.setMode(k.LINE_LOOP):de.setMode(k.LINE_STRIP)}else O.isPoints?de.setMode(k.POINTS):O.isSprite&&de.setMode(k.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)de.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))de.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ct=O._multiDrawStarts,bi=O._multiDrawCounts,fe=O._multiDrawCount,qn=Tt?tt.get(Tt).bytesPerElement:1,rr=Nt.get(q).currentProgram.getUniforms();for(let bn=0;bn<fe;bn++)rr.setValue(k,"_gl_DrawID",bn),de.render(Ct[bn]/qn,bi[bn])}else if(O.isInstancedMesh)de.renderInstances(le,Se,O.count);else if(W.isInstancedBufferGeometry){let Ct=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,bi=Math.min(W.instanceCount,Ct);de.renderInstances(le,Se,bi)}else de.render(le,Se)};function ge(T,F,W){T.transparent===!0&&T.side===Pe&&T.forceSinglePass===!1?(T.side=xn,T.needsUpdate=!0,za(T,F,W),T.side=cs,T.needsUpdate=!0,za(T,F,W),T.side=Pe):za(T,F,W)}this.compile=function(T,F,W=null){W===null&&(W=T),p=ae.get(W),p.init(F),_.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==W&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let q=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ct=O.material;if(ct)if(Array.isArray(ct))for(let yt=0;yt<ct.length;yt++){let St=ct[yt];ge(St,W,O),q.add(St)}else ge(ct,W,O),q.add(ct)}),_.pop(),p=null,q},this.compileAsync=function(T,F,W=null){let q=this.compile(T,F,W);return new Promise(O=>{function ct(){if(q.forEach(function(yt){Nt.get(yt).currentProgram.isReady()&&q.delete(yt)}),q.size===0){O(T);return}setTimeout(ct,10)}ne.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Wn=null;function wi(T){Wn&&Wn(T)}function bf(){Ss.stop()}function Ef(){Ss.start()}let Ss=new s0;Ss.setAnimationLoop(wi),typeof self<"u"&&Ss.setContext(self),this.setAnimationLoop=function(T){Wn=T,Y.setAnimationLoop(T),T===null?Ss.stop():Ss.start()},Y.addEventListener("sessionstart",bf),Y.addEventListener("sessionend",Ef),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,C),p=ae.get(T,_.length),p.init(F),_.push(p),Ft.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(Ft),wt=this.localClippingEnabled,rt=at.init(this.clippingPlanes,wt),g=Mt.get(T,y.length),g.init(),y.push(g),Y.enabled===!0&&Y.isPresenting===!0){let ct=v.xr.getDepthSensingMesh();ct!==null&&Wl(ct,F,-1/0,v.sortObjects)}Wl(T,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(J,ut),oe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,oe&&Dt.addToRenderList(g,T),this.info.render.frame++,rt===!0&&at.beginShadows();let W=p.state.shadowsArray;bt.render(W,T,F),rt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,O=g.transmissive;if(p.setupLights(),F.isArrayCamera){let ct=F.cameras;if(O.length>0)for(let yt=0,St=ct.length;yt<St;yt++){let Tt=ct[yt];Tf(q,O,T,Tt)}oe&&Dt.render(T);for(let yt=0,St=ct.length;yt<St;yt++){let Tt=ct[yt];Sf(g,T,Tt,Tt.viewport)}}else O.length>0&&Tf(q,O,T,F),oe&&Dt.render(T),Sf(g,T,F);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,F),we.resetDefaultState(),b=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],rt===!0&&at.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Wl(T,F,W,q){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){q&&te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ft);let yt=Z.update(T),St=T.material;St.visible&&g.push(T,yt,St,W,te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){let yt=Z.update(T),St=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),te.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),te.copy(yt.boundingSphere.center)),te.applyMatrix4(T.matrixWorld).applyMatrix4(Ft)),Array.isArray(St)){let Tt=yt.groups;for(let Vt=0,Yt=Tt.length;Vt<Yt;Vt++){let At=Tt[Vt],le=St[At.materialIndex];le&&le.visible&&g.push(T,yt,le,W,te.z,At)}}else St.visible&&g.push(T,yt,St,W,te.z,null)}}let ct=T.children;for(let yt=0,St=ct.length;yt<St;yt++)Wl(ct[yt],F,W,q)}function Sf(T,F,W,q){let O=T.opaque,ct=T.transmissive,yt=T.transparent;p.setupLightsView(W),rt===!0&&at.setGlobalState(v.clippingPlanes,W),q&&Lt.viewport(P.copy(q)),O.length>0&&Da(O,F,W),ct.length>0&&Da(ct,F,W),yt.length>0&&Da(yt,F,W),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Tf(T,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Di(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Zo:Li,minFilter:Fs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let ct=p.state.transmissionRenderTarget[q.id],yt=q.viewport||P;ct.setSize(yt.z,yt.w);let St=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(z),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear(),oe&&Dt.render(W);let Tt=v.toneMapping;v.toneMapping=as;let Vt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),rt===!0&&at.setGlobalState(v.clippingPlanes,q),Da(T,W,q),I.updateMultisampleRenderTarget(ct),I.updateRenderTargetMipmap(ct),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let At=0,le=F.length;At<le;At++){let be=F[At],Se=be.object,gn=be.geometry,de=be.material,Ct=be.group;if(de.side===Pe&&Se.layers.test(q.layers)){let bi=de.side;de.side=xn,de.needsUpdate=!0,Af(Se,W,q,gn,de,Ct),de.side=bi,de.needsUpdate=!0,Yt=!0}}Yt===!0&&(I.updateMultisampleRenderTarget(ct),I.updateRenderTargetMipmap(ct))}v.setRenderTarget(St),v.setClearColor(z,U),Vt!==void 0&&(q.viewport=Vt),v.toneMapping=Tt}function Da(T,F,W){let q=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ct=T.length;O<ct;O++){let yt=T[O],St=yt.object,Tt=yt.geometry,Vt=q===null?yt.material:q,Yt=yt.group;St.layers.test(W.layers)&&Af(St,F,W,Tt,Vt,Yt)}}function Af(T,F,W,q,O,ct){T.onBeforeRender(v,F,W,q,O,ct),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,F,W,q,T,ct),O.transparent===!0&&O.side===Pe&&O.forceSinglePass===!1?(O.side=xn,O.needsUpdate=!0,v.renderBufferDirect(W,F,q,O,T,ct),O.side=cs,O.needsUpdate=!0,v.renderBufferDirect(W,F,q,O,T,ct),O.side=Pe):v.renderBufferDirect(W,F,q,O,T,ct),T.onAfterRender(v,F,W,q,O,ct)}function za(T,F,W){F.isScene!==!0&&(F=Ie);let q=Nt.get(T),O=p.state.lights,ct=p.state.shadowsArray,yt=O.state.version,St=Rt.getParameters(T,O.state,ct,F,W),Tt=Rt.getProgramCacheKey(St),Vt=q.programs;q.environment=T.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Vt===void 0&&(T.addEventListener("dispose",Xt),Vt=new Map,q.programs=Vt);let Yt=Vt.get(Tt);if(Yt!==void 0){if(q.currentProgram===Yt&&q.lightsStateVersion===yt)return Cf(T,St),Yt}else St.uniforms=Rt.getUniforms(T),T.onBeforeCompile(St,v),Yt=Rt.acquireProgram(St,Tt),Vt.set(Tt,Yt),q.uniforms=St.uniforms;let At=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(At.clippingPlanes=at.uniform),Cf(T,St),q.needsLights=ug(T),q.lightsStateVersion=yt,q.needsLights&&(At.ambientLightColor.value=O.state.ambient,At.lightProbe.value=O.state.probe,At.directionalLights.value=O.state.directional,At.directionalLightShadows.value=O.state.directionalShadow,At.spotLights.value=O.state.spot,At.spotLightShadows.value=O.state.spotShadow,At.rectAreaLights.value=O.state.rectArea,At.ltc_1.value=O.state.rectAreaLTC1,At.ltc_2.value=O.state.rectAreaLTC2,At.pointLights.value=O.state.point,At.pointLightShadows.value=O.state.pointShadow,At.hemisphereLights.value=O.state.hemi,At.directionalShadowMap.value=O.state.directionalShadowMap,At.directionalShadowMatrix.value=O.state.directionalShadowMatrix,At.spotShadowMap.value=O.state.spotShadowMap,At.spotLightMatrix.value=O.state.spotLightMatrix,At.spotLightMap.value=O.state.spotLightMap,At.pointShadowMap.value=O.state.pointShadowMap,At.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Yt,q.uniformsList=null,Yt}function Rf(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=Tr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Cf(T,F){let W=Nt.get(T);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function lg(T,F,W,q,O){F.isScene!==!0&&(F=Ie),I.resetTextureUnits();let ct=F.fog,yt=q.isMeshStandardMaterial?F.environment:null,St=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:kr,Tt=(q.isMeshStandardMaterial?G:E).get(q.envMap||yt),Vt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Yt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),At=!!W.morphAttributes.position,le=!!W.morphAttributes.normal,be=!!W.morphAttributes.color,Se=as;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Se=v.toneMapping);let gn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,de=gn!==void 0?gn.length:0,Ct=Nt.get(q),bi=p.state.lights;if(rt===!0&&(wt===!0||T!==M)){let Dn=T===M&&q.id===b;at.setState(q,T,Dn)}let fe=!1;q.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==bi.state.version||Ct.outputColorSpace!==St||O.isBatchedMesh&&Ct.batching===!1||!O.isBatchedMesh&&Ct.batching===!0||O.isBatchedMesh&&Ct.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ct.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ct.instancing===!1||!O.isInstancedMesh&&Ct.instancing===!0||O.isSkinnedMesh&&Ct.skinning===!1||!O.isSkinnedMesh&&Ct.skinning===!0||O.isInstancedMesh&&Ct.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ct.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ct.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ct.instancingMorph===!1&&O.morphTexture!==null||Ct.envMap!==Tt||q.fog===!0&&Ct.fog!==ct||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==at.numPlanes||Ct.numIntersection!==at.numIntersection)||Ct.vertexAlphas!==Vt||Ct.vertexTangents!==Yt||Ct.morphTargets!==At||Ct.morphNormals!==le||Ct.morphColors!==be||Ct.toneMapping!==Se||Ct.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Ct.__version=q.version);let qn=Ct.currentProgram;fe===!0&&(qn=za(q,F,O));let rr=!1,bn=!1,Mo=!1,Te=qn.getUniforms(),ri=Ct.uniforms;if(Lt.useProgram(qn.program)&&(rr=!0,bn=!0,Mo=!0),q.id!==b&&(b=q.id,bn=!0),rr||M!==T){Lt.buffers.depth.getReversed()?(dt.copy(T.projectionMatrix),mx(dt),gx(dt),Te.setValue(k,"projectionMatrix",dt)):Te.setValue(k,"projectionMatrix",T.projectionMatrix),Te.setValue(k,"viewMatrix",T.matrixWorldInverse);let Ji=Te.map.cameraPosition;Ji!==void 0&&Ji.setValue(k,Gt.setFromMatrixPosition(T.matrixWorld)),ie.logarithmicDepthBuffer&&Te.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Te.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,bn=!0,Mo=!0)}if(O.isSkinnedMesh){Te.setOptional(k,O,"bindMatrix"),Te.setOptional(k,O,"bindMatrixInverse");let Dn=O.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Te.setValue(k,"boneTexture",Dn.boneTexture,I))}O.isBatchedMesh&&(Te.setOptional(k,O,"batchingTexture"),Te.setValue(k,"batchingTexture",O._matricesTexture,I),Te.setOptional(k,O,"batchingIdTexture"),Te.setValue(k,"batchingIdTexture",O._indirectTexture,I),Te.setOptional(k,O,"batchingColorTexture"),O._colorsTexture!==null&&Te.setValue(k,"batchingColorTexture",O._colorsTexture,I));let wo=W.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0)&&Ht.update(O,W,qn),(bn||Ct.receiveShadow!==O.receiveShadow)&&(Ct.receiveShadow=O.receiveShadow,Te.setValue(k,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ri.envMap.value=Tt,ri.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(ri.envMapIntensity.value=F.environmentIntensity),bn&&(Te.setValue(k,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&hg(ri,Mo),ct&&q.fog===!0&&gt.refreshFogUniforms(ri,ct),gt.refreshMaterialUniforms(ri,q,V,Q,p.state.transmissionRenderTarget[T.id]),Tr.upload(k,Rf(Ct),ri,I)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Tr.upload(k,Rf(Ct),ri,I),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Te.setValue(k,"center",O.center),Te.setValue(k,"modelViewMatrix",O.modelViewMatrix),Te.setValue(k,"normalMatrix",O.normalMatrix),Te.setValue(k,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Dn=q.uniformsGroups;for(let Ji=0,Qi=Dn.length;Ji<Qi;Ji++){let If=Dn[Ji];B.update(If,qn),B.bind(If,qn)}}return qn}function hg(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function ug(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,F,W){Nt.get(T.texture).__webglTexture=F,Nt.get(T.depthTexture).__webglTexture=W;let q=Nt.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){let W=Nt.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,W=0){C=T,S=F,A=W;let q=!0,O=null,ct=!1,yt=!1;if(T){let Tt=Nt.get(T);if(Tt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(Tt.__webglFramebuffer===void 0)I.setupRenderTarget(T);else if(Tt.__hasExternalTextures)I.rebindTextures(T,Nt.get(T.texture).__webglTexture,Nt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let At=T.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&Nt.has(At)&&(T.width!==At.image.width||T.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(T)}}let Vt=T.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(yt=!0);let Yt=Nt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Yt[F])?O=Yt[F][W]:O=Yt[F],ct=!0):T.samples>0&&I.useMultisampledRTT(T)===!1?O=Nt.get(T).__webglMultisampledFramebuffer:Array.isArray(Yt)?O=Yt[W]:O=Yt,P.copy(T.viewport),H.copy(T.scissor),N=T.scissorTest}else P.copy(pt).multiplyScalar(V).floor(),H.copy(ot).multiplyScalar(V).floor(),N=Bt;if(Lt.bindFramebuffer(k.FRAMEBUFFER,O)&&q&&Lt.drawBuffers(T,O),Lt.viewport(P),Lt.scissor(H),Lt.setScissorTest(N),ct){let Tt=Nt.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Tt.__webglTexture,W)}else if(yt){let Tt=Nt.get(T.texture),Vt=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Tt.__webglTexture,W||0,Vt)}b=-1},this.readRenderTargetPixels=function(T,F,W,q,O,ct,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){Lt.bindFramebuffer(k.FRAMEBUFFER,St);try{let Tt=T.texture,Vt=Tt.format,Yt=Tt.type;if(!ie.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-q&&W>=0&&W<=T.height-O&&k.readPixels(F,W,q,O,Kt.convert(Vt),Kt.convert(Yt),ct)}finally{let Tt=C!==null?Nt.get(C).__webglFramebuffer:null;Lt.bindFramebuffer(k.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(T,F,W,q,O,ct,yt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){let Tt=T.texture,Vt=Tt.format,Yt=Tt.type;if(!ie.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-q&&W>=0&&W<=T.height-O){Lt.bindFramebuffer(k.FRAMEBUFFER,St);let At=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,At),k.bufferData(k.PIXEL_PACK_BUFFER,ct.byteLength,k.STREAM_READ),k.readPixels(F,W,q,O,Kt.convert(Vt),Kt.convert(Yt),0);let le=C!==null?Nt.get(C).__webglFramebuffer:null;Lt.bindFramebuffer(k.FRAMEBUFFER,le);let be=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await px(k,be,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,At),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ct),k.deleteBuffer(At),k.deleteSync(be),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,W=0){T.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);let q=Math.pow(2,-W),O=Math.floor(T.image.width*q),ct=Math.floor(T.image.height*q),yt=F!==null?F.x:0,St=F!==null?F.y:0;I.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,yt,St,O,ct),Lt.unbindTexture()},this.copyTextureToTexture=function(T,F,W=null,q=null,O=0){T.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,W=null);let ct,yt,St,Tt,Vt,Yt,At,le,be,Se=T.isCompressedTexture?T.mipmaps[O]:T.image;W!==null?(ct=W.max.x-W.min.x,yt=W.max.y-W.min.y,St=W.isBox3?W.max.z-W.min.z:1,Tt=W.min.x,Vt=W.min.y,Yt=W.isBox3?W.min.z:0):(ct=Se.width,yt=Se.height,St=Se.depth||1,Tt=0,Vt=0,Yt=0),q!==null?(At=q.x,le=q.y,be=q.z):(At=0,le=0,be=0);let gn=Kt.convert(F.format),de=Kt.convert(F.type),Ct;F.isData3DTexture?(I.setTexture3D(F,0),Ct=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(I.setTexture2DArray(F,0),Ct=k.TEXTURE_2D_ARRAY):(I.setTexture2D(F,0),Ct=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);let bi=k.getParameter(k.UNPACK_ROW_LENGTH),fe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),qn=k.getParameter(k.UNPACK_SKIP_PIXELS),rr=k.getParameter(k.UNPACK_SKIP_ROWS),bn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Se.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Se.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Tt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Vt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Yt);let Mo=T.isDataArrayTexture||T.isData3DTexture,Te=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let ri=Nt.get(T),wo=Nt.get(F),Dn=Nt.get(ri.__renderTarget),Ji=Nt.get(wo.__renderTarget);Lt.bindFramebuffer(k.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Lt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Qi=0;Qi<St;Qi++)Mo&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Nt.get(T).__webglTexture,O,Yt+Qi),T.isDepthTexture?(Te&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Nt.get(F).__webglTexture,O,be+Qi),k.blitFramebuffer(Tt,Vt,ct,yt,At,le,ct,yt,k.DEPTH_BUFFER_BIT,k.NEAREST)):Te?k.copyTexSubImage3D(Ct,O,At,le,be+Qi,Tt,Vt,ct,yt):k.copyTexSubImage2D(Ct,O,At,le,be+Qi,Tt,Vt,ct,yt);Lt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Te?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Ct,O,At,le,be,ct,yt,St,gn,de,Se.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(Ct,O,At,le,be,ct,yt,St,gn,Se.data):k.texSubImage3D(Ct,O,At,le,be,ct,yt,St,gn,de,Se):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,O,At,le,ct,yt,gn,de,Se.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,O,At,le,Se.width,Se.height,gn,Se.data):k.texSubImage2D(k.TEXTURE_2D,O,At,le,ct,yt,gn,de,Se);k.pixelStorei(k.UNPACK_ROW_LENGTH,bi),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,fe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,qn),k.pixelStorei(k.UNPACK_SKIP_ROWS,rr),k.pixelStorei(k.UNPACK_SKIP_IMAGES,bn),O===0&&F.generateMipmaps&&k.generateMipmap(Ct),Lt.unbindTexture()},this.copyTextureToTexture3D=function(T,F,W=null,q=null,O=0){return T.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0),Io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,W,q,O)},this.initRenderTarget=function(T){Nt.get(T).__webglFramebuffer===void 0&&I.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?I.setTextureCube(T,0):T.isData3DTexture?I.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?I.setTexture2DArray(T,0):I.setTexture2D(T,0),Lt.unbindTexture()},this.resetState=function(){S=0,A=0,C=null,Lt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}},Tc=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Vo=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Su=class extends yn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Tn,h=Tn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ac=class extends fn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_r=new he,Ip=new he,ic=[],Pp=new zi,hM=new he,Ao=new lt,Ro=new us,zr=class extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ac(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hM)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_r),Pp.copy(t.boundingBox).applyMatrix4(_r),this.boundingBox.union(Pp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_r),Ro.copy(t.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(Ro)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ao.geometry=this.geometry,Ao.material=this.material,Ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(n),t.ray.intersectsSphere(Ro)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_r),Ip.multiplyMatrices(n,_r),Ao.matrixWorld=Ip,Ao.raycast(t,ic);for(let o=0,a=ic.length;o<a;o++){let c=ic[o];c.instanceId=r,c.object=this,e.push(c)}ic.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ac(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Su(new Float32Array(s*this.count),s,this.count,Qu,ci));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Go=class extends ds{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Np=new he,Tu=new Uo,sc=new us,rc=new L,Rc=class extends Ke{constructor(t=new Ne,e=new Go){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(s),sc.radius+=r,t.ray.intersectsSphere(sc)===!1)return;Np.copy(s).invert(),Tu.copy(t.ray).applyMatrix4(Np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=l.getX(m);rc.fromBufferAttribute(u,g),Lp(rc,g,c,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)rc.fromBufferAttribute(u,m),Lp(rc,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lp(i,t,e,n,s,r,o){let a=Tu.distanceSqToPoint(i);if(a<e){let c=new L;Tu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ui=class extends yn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ht:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,c=new he;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(je(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Wo=class extends Bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ht){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Au=class extends Wo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function rd(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var oc=new L,vh=new rd,_h=new rd,Mh=new rd,Ru=class extends Bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(oc.subVectors(s[0],s[1]).add(s[0]),l=oc);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(oc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=oc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),vh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),_h.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),Mh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(vh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),_h.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Mh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(vh.calc(c),_h.calc(c),Mh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Dp(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function uM(i,t){let e=1-i;return e*e*t}function dM(i,t){return 2*(1-i)*i*t}function fM(i,t){return i*i*t}function zo(i,t,e,n){return uM(i,t)+dM(i,e)+fM(i,n)}function pM(i,t){let e=1-i;return e*e*e*t}function mM(i,t){let e=1-i;return 3*e*e*i*t}function gM(i,t){return 3*(1-i)*i*i*t}function xM(i,t){return i*i*i*t}function Bo(i,t,e,n,s){return pM(i,t)+mM(i,e)+gM(i,n)+xM(i,s)}var Cc=class extends Bn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bo(t,s.x,r.x,o.x,a.x),Bo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cu=class extends Bn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bo(t,s.x,r.x,o.x,a.x),Bo(t,s.y,r.y,o.y,a.y),Bo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ic=class extends Bn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Iu=class extends Bn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pc=class extends Bn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zo(t,s.x,r.x,o.x),zo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pu=class extends Bn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zo(t,s.x,r.x,o.x),zo(t,s.y,r.y,o.y),zo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nc=class extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Dp(a,c.x,l.x,h.x,u.x),Dp(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},zp=Object.freeze({__proto__:null,ArcCurve:Au,CatmullRomCurve3:Ru,CubicBezierCurve:Cc,CubicBezierCurve3:Cu,EllipseCurve:Wo,LineCurve:Ic,LineCurve3:Iu,QuadraticBezierCurve:Pc,QuadraticBezierCurve3:Pu,SplineCurve:Nc}),Nu=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zp[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new zp[s.type]().fromJSON(s))}return this}},Lu=class extends Nu{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ic(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Pc(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Cc(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Nc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Wo(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},qo=class i extends Ne{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=je(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new L,d=new ht,f=new L,m=new L,x=new L,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let y=0;y<=e;y++){let _=n+y*h*s,v=Math.sin(_),R=Math.cos(_);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*v,u.y=t[S].y,u.z=t[S].x*R,o.push(u.x,u.y,u.z),d.x=y/e,d.y=S/(t.length-1),a.push(d.x,d.y);let A=c[3*S+0]*v,C=c[3*S+1],b=c[3*S+0]*R;l.push(A,C,b)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let v=_+y*t.length,R=v,S=v+t.length,A=v+t.length+1,C=v+1;r.push(R,S,C),r.push(A,C,S)}this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(a,2)),this.setAttribute("normal",new Qt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Lc=class i extends qo{constructor(t=1,e=1,n=4,s=8){let r=new Lu;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Bi=class i extends Ne{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,h=new ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},nn=class i extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function y(){let v=new L,R=new L,S=0,A=(e-t)/n;for(let C=0;C<=r;C++){let b=[],M=C/r,P=M*(e-t)+t;for(let H=0;H<=s;H++){let N=H/s,z=N*c+a,U=Math.sin(z),D=Math.cos(z);R.x=P*U,R.y=-M*n+g,R.z=P*D,u.push(R.x,R.y,R.z),v.set(U,A,D).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-M),b.push(m++)}x.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){let M=x[b][C],P=x[b+1][C],H=x[b+1][C+1],N=x[b][C+1];(t>0||b!==0)&&(h.push(M,P,N),S+=3),(e>0||b!==r-1)&&(h.push(P,H,N),S+=3)}l.addGroup(p,S,0),p+=S}function _(v){let R=m,S=new ht,A=new L,C=0,b=v===!0?t:e,M=v===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;let P=m;for(let H=0;H<=s;H++){let z=H/s*c+a,U=Math.cos(z),D=Math.sin(z);A.x=b*D,A.y=g*M,A.z=b*U,u.push(A.x,A.y,A.z),d.push(0,M,0),S.x=U*.5+.5,S.y=D*.5*M+.5,f.push(S.x,S.y),m++}for(let H=0;H<s;H++){let N=R+H,z=P+H;v===!0?h.push(z,z+1,N):h.push(z+1,z,N),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Br=class i extends nn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fr=class i extends Ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new L,v=new L,R=new L;for(let S=0;S<e.length;S+=3)f(e[S+0],_),f(e[S+1],v),f(e[S+2],R),c(_,v,R,y)}function c(y,_,v,R){let S=R+1,A=[];for(let C=0;C<=S;C++){A[C]=[];let b=y.clone().lerp(v,C/S),M=_.clone().lerp(v,C/S),P=S-C;for(let H=0;H<=P;H++)H===0&&C===S?A[C][H]=b:A[C][H]=b.clone().lerp(M,H/P)}for(let C=0;C<S;C++)for(let b=0;b<2*(S-C)-1;b++){let M=Math.floor(b/2);b%2===0?(d(A[C][M+1]),d(A[C+1][M]),d(A[C][M])):(d(A[C][M+1]),d(A[C+1][M+1]),d(A[C+1][M]))}}function l(y){let _=new L;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(y),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let y=new L;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let v=g(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(v,1-R)}m(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],v=o[y+2],R=o[y+4],S=Math.max(_,v,R),A=Math.min(_,v,R);S>.9&&A<.1&&(_<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){let v=y*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function m(){let y=new L,_=new L,v=new L,R=new L,S=new ht,A=new ht,C=new ht;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),S.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),R.copy(y).add(_).add(v).divideScalar(3);let P=g(R);x(S,M+0,y,P),x(A,M+2,_,P),x(C,M+4,v,P)}}function x(y,_,v,R){R<0&&y.x===1&&(o[_]=y.x-1),v.x===0&&v.z===0&&(o[_]=R/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Dc=class i extends Fr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ur=class i extends Fr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},zc=class i extends Fr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Bc=class i extends Ne{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new L,m=new ht;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,_=y,v=y+n+1,R=y+n+2,S=y+1;a.push(_,v,S),a.push(v,R,S)}}this.setIndex(a),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var di=class i extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,d=new L,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],_=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let S=R/e;u.x=-t*Math.cos(s+S*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+S*r)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(S+v,1-_),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],v=h[p][y],R=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&f.push(_,v,S),(p!==n-1||c<Math.PI)&&f.push(v,R,S)}this.setIndex(f),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Fc=class i extends Fr{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Zn=class i extends Ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,y=(s+1)*f+m;o.push(x,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var $=class extends ds{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qp,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ac(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function yM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Or=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Du=class extends Or{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Df,endingEnd:Df}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zf:r=t,a=2*e-n;break;case Bf:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zf:o=t,c=2*n-e;break;case Bf:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[l+R]+_*o[c+R]+v*o[u+R];return r}},zu=class extends Or{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Bu=class extends Or{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ac(e,this.TimeBufferType),this.values=ac(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ac(t.times,Array),values:ac(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Bu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Du(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case pc:e=this.InterpolantFactoryMethodDiscrete;break;case cu:e=this.InterpolantFactoryMethodLinear;break;case Xl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pc;case this.InterpolantFactoryMethodLinear:return cu;case this.InterpolantFactoryMethodSmooth:return Xl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&yM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xl,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=cu;var Os=class extends Kn{constructor(t,e,n){super(t,e,n)}};Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=pc;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Fu=class extends Kn{};Fu.prototype.ValueTypeName="color";var Uu=class extends Kn{};Uu.prototype.ValueTypeName="number";var Ou=class extends Or{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)en.slerpFlat(r,0,o,l-a,o,l,c);return r}},Uc=class extends Kn{InterpolantFactoryMethodLinear(t){return new Ou(this.times,this.values,this.getValueSize(),t)}};Uc.prototype.ValueTypeName="quaternion";Uc.prototype.InterpolantFactoryMethodSmooth=void 0;var Hs=class extends Kn{constructor(t,e,n){super(t,e,n)}};Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=pc;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hu=class extends Kn{};Hu.prototype.ValueTypeName="vector";var ku=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},vM=new ku,Vu=class{constructor(t){this.manager=t!==void 0?t:vM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Vu.DEFAULT_MATERIAL_NAME="__DEFAULT";var ks=class extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Xo=class extends ks{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wh=new he,Bp=new L,Fp=new L,Yo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Bp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bp),Fp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fp),e.updateMatrixWorld(),wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Gu=class extends Yo{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Lr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Oc=class extends ks{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Gu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Up=new he,Co=new L,bh=new L,Wu=class extends Yo{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Co.setFromMatrixPosition(t.matrixWorld),n.position.copy(Co),bh.copy(n.position),bh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(bh),n.updateMatrixWorld(),s.makeTranslation(-Co.x,-Co.y,-Co.z),Up.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Up)}},Hr=class extends ks{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},qu=class extends Yo{constructor(){super(new bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$o=class extends ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new qu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Hc=class extends ks{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var od="\\[\\]\\.:\\/",_M=new RegExp("["+od+"]","g"),ad="[^"+od+"]",MM="[^"+od.replace("\\.","")+"]",wM=/((?:WC+[\/:])*)/.source.replace("WC",ad),bM=/(WCOD+)?/.source.replace("WCOD",MM),EM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ad),SM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ad),TM=new RegExp("^"+wM+bM+EM+SM+"$"),AM=["material","materials","bones","map"],Xu=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_M,"")}static parseTrackName(t){let e=TM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);AM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Xu;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bT=new Float32Array(1);var Op=new he,jo=class{constructor(t,e,n=0,s=1/0){this.ray=new Uo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Op.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Op),this}intersectObject(t,e=!0,n=[]){return Yu(t,this,n,e),n.sort(Hp),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Yu(t[s],this,n,e);return n.sort(Hp),n}};function Hp(i,t){return i.distance-t.distance}function Yu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Yu(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$u}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$u);var ps=class i{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new w);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new w);let n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new i);let n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],u=n[5],d=n[6],f=n[7],m=n[8],x=s[0],g=s[1],p=s[2],y=s[3],_=s[4],v=s[5],R=s[6],S=s[7],A=s[8];return r[0]=o*x+a*y+c*R,r[1]=o*g+a*_+c*S,r[2]=o*p+a*v+c*A,r[3]=l*x+h*y+u*R,r[4]=l*g+h*_+u*S,r[5]=l*p+h*v+u*A,r[6]=d*x+f*y+m*R,r[7]=d*g+f*_+m*S,r[8]=d*p+f*v+m*A,e}scale(t,e){e===void 0&&(e=new i);let n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new w);let n=3,s=4,r=[],o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let c=3,l=c,h,u=4,d;do{if(o=l-c,r[o+s*o]===0){for(a=o+1;a<l;a++)if(r[o+s*a]!==0){h=u;do d=u-h,r[d+s*o]+=r[d+s*a];while(--h);break}}if(r[o+s*o]!==0)for(a=o+1;a<l;a++){let f=r[o+s*a]/r[o+s*o];h=u;do d=u-h,r[d+s*a]=d<=o?0:r[d+s*a]-r[d+s*o]*f;while(--h)}}while(--c);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="",e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new i);let e=3,n=6,s=CM,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3,c=a,l,h=n,u;do{if(r=c-a,s[r+n*r]===0){for(o=r+1;o<c;o++)if(s[r+n*o]!==0){l=h;do u=h-l,s[u+n*r]+=s[u+n*o];while(--l);break}}if(s[r+n*r]!==0)for(o=r+1;o<c;o++){let d=s[r+n*o]/s[r+n*r];l=h;do u=h-l,s[u+n*o]=u<=r?0:s[u+n*o]-s[u+n*r]*d;while(--l)}}while(--a);r=2;do{o=r-1;do{let d=s[r+n*o]/s[r+n*r];l=n;do u=n-l,s[u+n*o]=s[u+n*o]-s[u+n*r]*d;while(--l)}while(o--)}while(--r);r=2;do{let d=1/s[r+n*r];l=n;do u=n-l,s[u+n*r]=s[u+n*r]*d;while(--l)}while(r--);r=2;do{o=2;do{if(u=s[e+o+n*r],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,u)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,c=s+s,l=e*o,h=e*a,u=e*c,d=n*a,f=n*c,m=s*c,x=r*o,g=r*a,p=r*c,y=this.elements;return y[3*0+0]=1-(d+m),y[3*0+1]=h-p,y[3*0+2]=u+g,y[3*1+0]=h+p,y[3*1+1]=1-(l+m),y[3*1+2]=f-x,y[3*2+0]=u-g,y[3*2+1]=f+x,y[3*2+2]=1-(l+d),this}transpose(t){t===void 0&&(t=new i);let e=this.elements,n=t.elements,s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}},CM=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],w=class i{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new i);let n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*r-c*s,e.y=c*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new i(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new i(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new ps([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){let r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new i),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new i),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let s=IM,r=1/n;s.set(this.x*r,this.y*r,this.z*r);let o=PM;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(l0),l0.almostEquals(t,e)}clone(){return new i(this.x,this.y,this.z)}};w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);var IM=new w,PM=new w,l0=new w,An=class i{constructor(t){t===void 0&&(t={}),this.lowerBound=new w,this.upperBound=new w,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,h0),l=h0),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new i().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,c=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,c){let l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),s.set(l.x,h.y,h.z),r.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){let n=u0,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(s,r,o,a,c,l,h,u);for(let d=0;d!==8;d++){let f=n[d];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=u0,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(s,r,o,a,c,l,h,u);for(let d=0;d!==8;d++){let f=n[d];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,c=(this.upperBound.x-n.x)*s,l=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,u=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(u,d)),m=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(u,d));return!(m<0||f>m)}},h0=new w,u0=[new w,new w,new w,new w,new w,new w,new w,new w],Zc=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){let r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){let o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},Kc=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}},Oe=class i{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new w),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=NM,s=LM;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+s*l-r*c,e.y=s*h+o*c+r*a-n*l,e.z=r*h+o*l+n*c-s*a,e.w=o*h-n*a-s*c-r*l,e}inverse(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);let o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new w);let n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*r-c*s,u=l*s+c*n-o*r,d=l*r+o*s-a*n,f=-o*n-a*s-c*r;return e.x=h*l+f*-o+u*-c-d*-a,e.y=u*l+f*-a+d*-o-h*-c,e.z=d*l+f*-c+h*-a-u*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r,o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":let h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),s=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,l),s=-Math.PI/2,r=0),n===void 0){let u=o*o,d=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*d-2*f),s=Math.asin(2*h),r=Math.atan2(2*o*l-2*a*c,1-2*u-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");let r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):s==="YXZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):s==="ZXY"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):s==="ZYX"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):s==="YZX"?(this.x=c*o*a+r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a-c*l*h):s==="XZY"&&(this.x=c*o*a-r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a+c*l*h),this}clone(){return new i(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new i);let s=this.x,r=this.y,o=this.z,a=this.w,c=t.x,l=t.y,h=t.z,u=t.w,d,f,m,x,g;return f=s*c+r*l+o*h+a*u,f<0&&(f=-f,c=-c,l=-l,h=-h,u=-u),1-f>1e-6?(d=Math.acos(f),m=Math.sin(d),x=Math.sin((1-e)*d)/m,g=Math.sin(e*d)/m):(x=1-e,g=e),n.x=x*s+g*c,n.y=x*r+g*l,n.z=x*o+g*h,n.w=x*a+g*u,n}integrate(t,e,n,s){s===void 0&&(s=new i);let r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,u=this.w,d=e*.5;return s.x+=d*(r*u+o*h-a*l),s.y+=d*(o*u+a*c-r*h),s.z+=d*(a*u+r*l-o*c),s.w+=d*(-r*c-o*l-a*h),s}},NM=new w,LM=new w,DM={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},_t=class i{constructor(t){t===void 0&&(t={}),this.id=i.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};_t.idCounter=0;_t.types=DM;var pe=class i{constructor(t){t===void 0&&(t={}),this.position=new w,this.quaternion=new Oe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return i.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return i.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new w),n.vsub(t,s),e.conjugate(d0),d0.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new w),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new w),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new w),e.w*=-1,e.vmult(n,s),e.w*=-1,s}},d0=new Oe,Jc=class i extends _t{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:_t.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let s=new w;for(let r=0;r!==t.length;r++){let o=t[r],a=o.length;for(let c=0;c!==a;c++){let l=(c+1)%a;e[o[c]].vsub(e[o[l]],s),s.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(s)||n[u].almostEquals(s)){h=!0;break}h||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);let e=this.faceNormals[t]||new w;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];i.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){let r=new w,o=new w;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,c,l){let h=new w,u=-1,d=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),r.vmult(h,h);let x=h.dot(o);x>d&&(d=x,u=m)}let f=[];for(let m=0;m<n.faces[u].length;m++){let x=n.vertices[n.faces[u][m]],g=new w;g.copy(x),r.vmult(g,g),s.vadd(g,g),f.push(g)}u>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,s,r,o,a,c){let l=new w,h=new w,u=new w,d=new w,f=new w,m=new w,x=Number.MAX_VALUE,g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){n.vmult(g.uniqueAxes[p],l);let y=g.testSepAxis(l,t,e,n,s,r);if(y===!1)return!1;y<x&&(x=y,o.copy(l))}else{let p=a?a.length:g.faces.length;for(let y=0;y<p;y++){let _=a?a[y]:y;l.copy(g.faceNormals[_]),n.vmult(l,l);let v=g.testSepAxis(l,t,e,n,s,r);if(v===!1)return!1;v<x&&(x=v,o.copy(l))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],h);let y=g.testSepAxis(h,t,e,n,s,r);if(y===!1)return!1;y<x&&(x=y,o.copy(h))}else{let p=c?c.length:t.faces.length;for(let y=0;y<p;y++){let _=c?c[y]:y;h.copy(t.faceNormals[_]),r.vmult(h,h);let v=g.testSepAxis(h,t,e,n,s,r);if(v===!1)return!1;v<x&&(x=v,o.copy(h))}}for(let p=0;p!==g.uniqueEdges.length;p++){n.vmult(g.uniqueEdges[p],d);for(let y=0;y!==t.uniqueEdges.length;y++)if(r.vmult(t.uniqueEdges[y],f),d.cross(f,m),!m.almostZero()){m.normalize();let _=g.testSepAxis(m,t,e,n,s,r);if(_===!1)return!1;_<x&&(x=_,o.copy(m))}}return s.vsub(e,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){let a=this;i.project(a,t,n,s,cd),i.project(e,t,r,o,ld);let c=cd[0],l=cd[1],h=ld[0],u=ld[1];if(c<u||h<l)return!1;let d=c-u,f=h-l;return d<f?d:f}calculateLocalInertia(t,e){let n=new w,s=new w;this.computeLocalAABB(s,n);let r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){let c=new w,l=new w,h=new w,u=new w,d=new w,f=new w,m=new w,x=new w,g=this,p=[],y=s,_=p,v=-1,R=Number.MAX_VALUE;for(let M=0;M<g.faces.length;M++){c.copy(g.faceNormals[M]),n.vmult(c,c);let P=c.dot(t);P<R&&(R=P,v=M)}if(v<0)return;let S=g.faces[v];S.connectedFaces=[];for(let M=0;M<g.faces.length;M++)for(let P=0;P<g.faces[M].length;P++)S.indexOf(g.faces[M][P])!==-1&&M!==v&&S.connectedFaces.indexOf(M)===-1&&S.connectedFaces.push(M);let A=S.length;for(let M=0;M<A;M++){let P=g.vertices[S[M]],H=g.vertices[S[(M+1)%A]];P.vsub(H,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),u.copy(this.faceNormals[v]),n.vmult(u,u),e.vadd(u,u),h.cross(u,d),d.negate(d),f.copy(P),n.vmult(f,f),e.vadd(f,f);let N=S.connectedFaces[M];m.copy(this.faceNormals[N]);let z=this.getPlaneConstantOfFace(N);x.copy(m),n.vmult(x,x);let U=z-x.dot(e);for(this.clipFaceAgainstPlane(y,_,x,U);y.length;)y.shift();for(;_.length;)y.push(_.shift())}m.copy(this.faceNormals[v]);let C=this.getPlaneConstantOfFace(v);x.copy(m),n.vmult(x,x);let b=C-x.dot(e);for(let M=0;M<y.length;M++){let P=x.dot(y[M])+b;if(P<=r&&(console.log(`clamped: depth=${P} to minDist=${r}`),P=r),P<=o){let H=y[M];if(P<=1e-6){let N={point:H,normal:x,depth:P};a.push(N)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o,a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];r=n.dot(c)+s;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+s,r<0)if(o<0){let u=new w;u.copy(l),e.push(u)}else{let u=new w;c.lerp(l,r/(r-o),u),e.push(u)}else if(o<0){let u=new w;c.lerp(l,r/(r-o),u),e.push(u),e.push(l)}c=l,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);let n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){let r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new w);let n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){let r=this.vertices,o,a,c,l,h,u,d=new w;for(let f=0;f<r.length;f++){d.copy(r[f]),e.vmult(d,d),t.vadd(d,d);let m=d;(o===void 0||m.x<o)&&(o=m.x),(l===void 0||m.x>l)&&(l=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(c===void 0||m.z<c)&&(c=m.z),(u===void 0||m.z>u)&&(u=m.z)}n.set(o,a,c),s.set(l,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new w);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){let o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){let o=s[r];o.vadd(t,o)}}pointIsInside(t){let e=this.vertices,n=this.faces,s=this.faceNormals,r=null,o=new w;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let c=s[a],l=e[n[a][0]],h=new w;t.vsub(l,h);let u=c.dot(h),d=new w;o.vsub(l,d);let f=c.dot(d);if(u<0&&f>0||u>0&&f<0)return!1}return r?1:-1}static project(t,e,n,s,r){let o=t.vertices.length,a=BM,c=0,l=0,h=FM,u=t.vertices;h.setZero(),pe.vectorToLocalFrame(n,s,e,a),pe.pointToLocalFrame(n,s,h,h);let d=h.dot(a);l=c=u[0].dot(a);for(let f=1;f<o;f++){let m=u[f].dot(a);m>c&&(c=m),m<l&&(l=m)}if(l-=d,c-=d,l>c){let f=l;l=c,c=f}r[0]=c,r[1]=l}},cd=[],ld=[],zM=new w,BM=new w,FM=new w,pn=class i extends _t{constructor(t){super({type:_t.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=w,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],c=new Jc({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new w),i.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){let n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)fs.set(r[o][0],r[o][1],r[o][2]),e.vmult(fs,fs),t.vadd(fs,fs),n(fs.x,fs.y,fs.z)}calculateWorldAABB(t,e,n,s){let r=this.halfExtents;fi[0].set(r.x,r.y,r.z),fi[1].set(-r.x,r.y,r.z),fi[2].set(-r.x,-r.y,r.z),fi[3].set(-r.x,-r.y,-r.z),fi[4].set(r.x,-r.y,-r.z),fi[5].set(r.x,r.y,-r.z),fi[6].set(-r.x,r.y,-r.z),fi[7].set(r.x,-r.y,r.z);let o=fi[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){let c=fi[a];e.vmult(c,c),t.vadd(c,c);let l=c.x,h=c.y,u=c.z;l>s.x&&(s.x=l),h>s.y&&(s.y=h),u>s.z&&(s.z=u),l<n.x&&(n.x=l),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}},fs=new w,fi=[new w,new w,new w,new w,new w,new w,new w,new w],wd={DYNAMIC:1,STATIC:2,KINEMATIC:4},bd={AWAKE:0,SLEEPY:1,SLEEPING:2},Pt=class i extends Kc{constructor(t){t===void 0&&(t={}),super(),this.id=i.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new w,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new w,this.force=new w;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?i.STATIC:i.DYNAMIC,typeof t.type==typeof i.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=i.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Oe,this.initQuaternion=new Oe,this.previousQuaternion=new Oe,this.interpolatedQuaternion=new Oe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new w,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new ps,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new ps,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new w(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new w(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new An,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=i.AWAKE,this.wakeUpAfterNarrowphase=!1,t===i.SLEEPING&&this.dispatchEvent(i.wakeupEvent)}sleep(){this.sleepState=i.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===i.AWAKE&&n<s?(this.sleepState=i.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(i.sleepyEvent)):e===i.SLEEPY&&n>s?this.wakeUp():e===i.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(i.sleepEvent))}}updateSolveMassProperties(){this.sleepState===i.SLEEPING||this.type===i.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new w),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new w),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}addShape(t,e,n){let s=new w,r=new Oe;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,s=0;for(let r=0;r!==n;r++){let o=t[r];o.updateBoundingSphereRadius();let a=e[r].length(),c=o.boundingSphereRadius;a+c>s&&(s=a+c)}this.boundingRadius=s}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=UM,o=OM,a=this.quaternion,c=this.aabb,l=HM;for(let h=0;h!==s;h++){let u=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),u.calculateWorldAABB(r,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=kM,s=VM;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new w),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=WM;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new w),this.type!==i.DYNAMIC)return;let n=qM,s=XM;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===i.DYNAMIC&&(this.sleepState===i.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new w),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=e,s=YM;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);let r=$M;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new w),this.type!==i.DYNAMIC)return;let n=jM,s=ZM;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){let t=KM;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),pn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new w;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===i.DYNAMIC||this.type===i.KINEMATIC)||this.sleepState===i.SLEEPING)return;let s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,f=h*t;s.x+=a.x*f*d.x,s.y+=a.y*f*d.y,s.z+=a.z*f*d.z;let m=u.elements,x=this.angularFactor,g=c.x*x.x,p=c.y*x.y,y=c.z*x.z;r.x+=t*(m[0]*g+m[1]*p+m[2]*y),r.y+=t*(m[3]*g+m[4]*p+m[5]*y),r.z+=t*(m[6]*g+m[7]*p+m[8]*y),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};Pt.idCounter=0;Pt.COLLIDE_EVENT_NAME="collide";Pt.DYNAMIC=wd.DYNAMIC;Pt.STATIC=wd.STATIC;Pt.KINEMATIC=wd.KINEMATIC;Pt.AWAKE=bd.AWAKE;Pt.SLEEPY=bd.SLEEPY;Pt.SLEEPING=bd.SLEEPING;Pt.wakeupEvent={type:"wakeup"};Pt.sleepyEvent={type:"sleepy"};Pt.sleepEvent={type:"sleep"};var UM=new w,OM=new Oe,HM=new An,kM=new ps,VM=new ps,GM=new ps,WM=new w,qM=new w,XM=new w,YM=new w,$M=new w,jM=new w,ZM=new w,KM=new w,Qc=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Pt.STATIC||t.sleepState===Pt.SLEEPING)&&(e.type&Pt.STATIC||e.sleepState===Pt.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){let r=JM;e.position.vsub(t.position,r);let o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){let n=QM,s=tw,r=ew,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let c=s[a].id,l=r[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];t.push(s[l]),e.push(r[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new w;t.position.vsub(e.position,n);let s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},JM=new w;new w;new Oe;new w;var QM={keys:[]},tw=[],ew=[];new w;var ET=new w;new w;var pd=class extends Qc{constructor(){super()}collisionPairs(t,e,n){let s=t.bodies,r=s.length,o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=s[c],a=s[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){let r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}},Xr=class{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}},E0,S0,T0,A0,R0,C0,I0,Ed={CLOSEST:1,ANY:2,ALL:4};E0=_t.types.SPHERE;S0=_t.types.PLANE;T0=_t.types.BOX;A0=_t.types.CYLINDER;R0=_t.types.CONVEXPOLYHEDRON;C0=_t.types.HEIGHTFIELD;I0=_t.types.TRIMESH;var Fn=class i{get[E0](){return this._intersectSphere}get[S0](){return this._intersectPlane}get[T0](){return this._intersectBox}get[A0](){return this._intersectConvex}get[R0](){return this._intersectConvex}get[C0](){return this._intersectHeightfield}get[I0](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new w),e===void 0&&(e=new w),this.from=t.clone(),this.to=e.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=i.ANY,this.result=new Xr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||i.ANY,this.result=e.result||new Xr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(f0),hd.length=0,t.broadphase.aabbQuery(t,f0,hd),this.intersectBodies(hd),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;let s=nw,r=iw;for(let o=0,a=t.shapes.length;o<a;o++){let c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(c,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){let r=this.from;if(vw(r,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){let o=this.from,a=this.to,c=this.direction,l=new w(0,0,1);e.vmult(l,l);let h=new w;o.vsub(n,h);let u=h.dot(l);a.vsub(n,h);let d=h.dot(l);if(u*d>0||o.distanceTo(a)<u)return;let f=l.dot(c);if(Math.abs(f)<this.precision)return;let m=new w,x=new w,g=new w;o.vsub(n,m);let p=-l.dot(m)/f;c.scale(p,x),o.vadd(x,g),this.reportIntersection(l,g,r,s,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;let o=sw;o.from.copy(this.from),o.to.copy(this.to),pe.pointToLocalFrame(n,e,o.from,o.from),pe.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();let a=rw,c,l,h,u;c=l=0,h=u=t.data.length-1;let d=new An;o.getAABB(d),t.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let f=c;f<h;f++)for(let m=l;m<u;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,d),!!d.overlapsRay(o)){if(t.getConvexTrianglePillar(f,m,!1),pe.pointToWorldFrame(n,e,t.pillarOffset,qc),this._intersectConvex(t.pillarConvex,e,qc,s,r,p0),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),pe.pointToWorldFrame(n,e,t.pillarOffset,qc),this._intersectConvex(t.pillarConvex,e,qc,s,r,p0)}}}_intersectSphere(t,e,n,s,r){let o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,d=h**2-4*l*u,f=ow,m=aw;if(!(d<0))if(d===0)o.lerp(a,d,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,s,-1);else{let x=(-h-Math.sqrt(d))/(2*l),g=(-h+Math.sqrt(d))/(2*l);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,s,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(o.lerp(a,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){let a=cw,c=m0,l=o&&o.faceList||null,h=t.faces,u=t.vertices,d=t.faceNormals,f=this.direction,m=this.from,x=this.to,g=m.distanceTo(x),p=l?l.length:h.length,y=this.result;for(let _=0;!y.shouldStop&&_<p;_++){let v=l?l[_]:_,R=h[v],S=d[v],A=e,C=n;c.copy(u[R[0]]),A.vmult(c,c),c.vadd(C,c),c.vsub(m,c),A.vmult(S,a);let b=f.dot(a);if(Math.abs(b)<this.precision)continue;let M=a.dot(c)/b;if(!(M<0)){f.scale(M,Mn),Mn.vadd(m,Mn),Jn.copy(u[R[0]]),A.vmult(Jn,Jn),C.vadd(Jn,Jn);for(let P=1;!y.shouldStop&&P<R.length-1;P++){pi.copy(u[R[P]]),mi.copy(u[R[P+1]]),A.vmult(pi,pi),A.vmult(mi,mi),C.vadd(pi,pi),C.vadd(mi,mi);let H=Mn.distanceTo(m);!(i.pointInTriangle(Mn,Jn,pi,mi)||i.pointInTriangle(Mn,pi,Jn,mi))||H>g||this.reportIntersection(a,Mn,r,s,v)}}}}_intersectTrimesh(t,e,n,s,r,o){let a=uw,c=xw,l=yw,h=m0,u=dw,d=fw,f=pw,m=gw,x=mw,g=t.indices;t.vertices;let p=this.from,y=this.to,_=this.direction;l.position.copy(n),l.quaternion.copy(e),pe.vectorToLocalFrame(n,e,_,u),pe.pointToLocalFrame(n,e,p,d),pe.pointToLocalFrame(n,e,y,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,f.vsub(d,u),u.normalize();let v=d.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let R=0,S=c.length;!this.result.shouldStop&&R!==S;R++){let A=c[R];t.getNormal(A,a),t.getVertex(g[A*3],Jn),Jn.vsub(d,h);let C=u.dot(a),b=a.dot(h)/C;if(b<0)continue;u.scale(b,Mn),Mn.vadd(d,Mn),t.getVertex(g[A*3+1],pi),t.getVertex(g[A*3+2],mi);let M=Mn.distanceSquared(d);!(i.pointInTriangle(Mn,pi,Jn,mi)||i.pointInTriangle(Mn,Jn,pi,mi))||M>v||(pe.vectorToWorldFrame(e,a,x),pe.pointToWorldFrame(n,e,Mn,m),this.reportIntersection(x,m,r,s,A))}c.length=0}reportIntersection(t,e,n,s,r){let o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case i.ALL:this.hasHit=!0,l.set(o,a,t,e,n,s,c),l.hasHit=!0,this.callback(l);break;case i.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,s,c));break;case i.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,s,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,Gs),n.vsub(e,Ko),t.vsub(e,ud);let r=Gs.dot(Gs),o=Gs.dot(Ko),a=Gs.dot(ud),c=Ko.dot(Ko),l=Ko.dot(ud),h,u;return(h=c*a-o*l)>=0&&(u=r*l-o*a)>=0&&h+u<r*c-o*o}};Fn.CLOSEST=Ed.CLOSEST;Fn.ANY=Ed.ANY;Fn.ALL=Ed.ALL;var f0=new An,hd=[],Ko=new w,ud=new w,nw=new w,iw=new Oe,Mn=new w,Jn=new w,pi=new w,mi=new w;new w;new Xr;var p0={faceList:[0]},qc=new w,sw=new Fn,rw=[],ow=new w,aw=new w,cw=new w,lw=new w,hw=new w,m0=new w,uw=new w,dw=new w,fw=new w,pw=new w,mw=new w,gw=new w;new An;var xw=[],yw=new pe,Gs=new w,Xc=new w;function vw(i,t,e){e.vsub(i,Gs);let n=Gs.dot(t);return t.scale(n,Xc),Xc.vadd(i,Xc),e.distanceTo(Xc)}var tl=class i extends Qc{static checkBounds(t,e,n){let s,r;n===0?(s=t.position.x,r=e.position.x):n===1?(s=t.position.y,r=e.position.y):n===2&&(s=t.position.z,r=e.position.z);let o=t.boundingRadius,a=e.boundingRadius,c=s+o;return r-a<c}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;let e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{let s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){let s=this.axisList,r=s.length,o=this.axisIndex,a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let l=s[a];for(c=a+1;c<r;c++){let h=s[c];if(this.needBroadphaseCollision(l,h)){if(!i.checkBounds(l,h,o))break;this.intersectionTest(l,h,e,n)}}}}sortList(){let t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){let r=t[s];r.aabbNeedsUpdate&&r.updateAABB()}e===0?i.insertionSortX(t):e===1?i.insertionSortY(t):e===2&&i.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,r=0,o=0,a=this.axisList,c=a.length,l=1/c;for(let f=0;f!==c;f++){let m=a[f],x=m.position.x;t+=x,e+=x*x;let g=m.position.y;n+=g,s+=g*g;let p=m.position.z;r+=p,o+=p*p}let h=e-t*t*l,u=s-n*n*l,d=o-r*r*l;h>u?h>d?this.axisIndex=0:this.axisIndex=2:u>d?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let s=this.axisIndex,r="x";s===1&&(r="y"),s===2&&(r="z");let o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){let c=o[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(e)&&n.push(c)}return n}},el=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},md=class i{constructor(t,e,n){n===void 0&&(n={}),n=el.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=i.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};md.idCounter=0;var nl=class{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},ea=class i{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=i.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new nl,this.jacobianElementB=new nl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){let s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,c=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,c=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,c=s.torque,l=n.invMassSolve,h=s.invMassSolve;return r.scale(l,g0),a.scale(h,x0),n.invInertiaWorldSolve.vmult(o,y0),s.invInertiaWorldSolve.vmult(c,v0),t.multiplyVectors(g0,y0)+e.multiplyVectors(x0,v0)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,c=s.invInertiaWorldSolve,l=r+o;return a.vmult(t.rotational,Yc),l+=Yc.dot(t.rotational),c.vmult(e.rotational,Yc),l+=Yc.dot(e.rotational),l}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=_w;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};ea.idCounter=0;var g0=new w,x0=new w,y0=new w,v0=new w,Yc=new w,_w=new w,gd=class extends ea{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(t){let e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,c=Mw,l=ww,h=s.velocity,u=s.angularVelocity;s.force,s.torque;let d=r.velocity,f=r.angularVelocity;r.force,r.torque;let m=bw,x=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(x.spatial),c.negate(x.rotational),g.spatial.copy(p),g.rotational.copy(l),m.copy(r.position),m.vadd(a,m),m.vsub(s.position,m),m.vsub(o,m);let y=p.dot(m),_=this.restitution+1,v=_*d.dot(p)-_*h.dot(p)+f.dot(l)-u.dot(c),R=this.computeGiMf();return-y*e-v*n-t*R}getImpactVelocityAlongNormal(){let t=Ew,e=Sw,n=Tw,s=Aw,r=Rw;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}},Mw=new w,ww=new w,bw=new w,Ew=new w,Sw=new w,Tw=new w,Aw=new w,Rw=new w;var ST=new w,TT=new w;var AT=new w,RT=new w;new w;new w;var CT=new w,IT=new w;var PT=new w,NT=new w,il=class extends ea{constructor(t,e,n){super(t,e,-n,n),this.ri=new w,this.rj=new w,this.t=new w}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,s=this.rj,r=Cw,o=Iw,a=this.t;n.cross(a,r),s.cross(a,o);let c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),r.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);let h=this.computeGW(),u=this.computeGiMf();return-h*e-t*u}},Cw=new w,Iw=new w,gi=class i{constructor(t,e,n){n=el.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=i.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};gi.idCounter=0;var ki=class i{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=i.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};ki.idCounter=0;var LT=new w,DT=new w,zT=new w,BT=new w,FT=new w,UT=new w,OT=new w,HT=new w,kT=new w,VT=new w,GT=new w;var WT=new w,qT=new w;new w;new w;new w;var XT=new w,YT=new w,$T=new w;new Fn;new w;var jT=new w,ZT=new w,KT=[new w(1,0,0),new w(0,1,0),new w(0,0,1)],JT=new w;var QT=new w,t2=new w,e2=new w;var n2=new w,i2=new w,s2=new w,r2=new w;var o2=new w,a2=new w,c2=new w;var Yr=class extends _t{constructor(t){if(super({type:_t.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new w);let n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,s){let r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){let c=o[a];n[c]=t[c]-r,s[c]=t[c]+r}}};var l2=new w,h2=new w;var u2=new w,d2=new w,f2=new w,p2=new w,m2=new w,g2=new w,x2=new w,Ws=class extends Jc{constructor(t,e,n,s){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),s===void 0&&(s=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");let r=s,o=[],a=[],c=[],l=[],h=[],u=Math.cos,d=Math.sin;o.push(new w(-e*d(0),-n*.5,e*u(0))),l.push(0),o.push(new w(-t*d(0),n*.5,t*u(0))),h.push(1);for(let m=0;m<r;m++){let x=2*Math.PI/r*(m+1),g=2*Math.PI/r*(m+.5);m<r-1?(o.push(new w(-e*d(x),-n*.5,e*u(x))),l.push(2*m+2),o.push(new w(-t*d(x),n*.5,t*u(x))),h.push(2*m+3),c.push([2*m,2*m+1,2*m+3,2*m+2])):c.push([2*m,2*m+1,1,0]),(r%2===1||m<r/2)&&a.push(new w(-d(g),0,u(g)))}c.push(l),a.push(new w(0,1,0));let f=[];for(let m=0;m<h.length;m++)f.push(h[h.length-m-1]);c.push(f),super({vertices:o,faces:c,axes:a}),this.type=_t.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=s}};var y2=new w;var v2=new w,_2=new w,M2=new w,w2=new w,b2=new w,E2=new w,S2=new w,T2=new w,A2=new w;var R2=new w,C2=new An;var I2=new w,P2=new An,N2=new w,L2=new w,D2=new w,z2=new w,B2=new w,F2=new w,U2=new w,O2=new An,H2=new w,k2=new pe,V2=new An,xd=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},na=class extends xd{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t,u,d,f,m,x,g;if(a!==0)for(let v=0;v!==l;v++)c[v].updateSolveMassProperties();let p=Nw,y=Lw,_=Pw;p.length=a,y.length=a,_.length=a;for(let v=0;v!==a;v++){let R=o[v];_[v]=0,y[v]=R.computeB(h),p[v]=1/R.computeC()}if(a!==0){for(let S=0;S!==l;S++){let A=c[S],C=A.vlambda,b=A.wlambda;C.set(0,0,0),b.set(0,0,0)}for(n=0;n!==s;n++){m=0;for(let S=0;S!==a;S++){let A=o[S];u=y[S],d=p[S],g=_[S],x=A.computeGWlambda(),f=d*(u-x-A.eps*g),g+f<A.minForce?f=A.minForce-g:g+f>A.maxForce&&(f=A.maxForce-g),_[S]+=f,m+=f>0?f:-f,A.addToWlambda(f)}if(m*m<r)break}for(let S=0;S!==l;S++){let A=c[S],C=A.velocity,b=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),C.vadd(A.vlambda,C),A.wlambda.vmul(A.angularFactor,A.wlambda),b.vadd(A.wlambda,b)}let v=o.length,R=1/h;for(;v--;)o[v].multiplier=_[v]*R}return n}},Pw=[],Nw=[],Lw=[];var G2=Pt.STATIC;var yd=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},vd=class extends yd{constructor(){super(...arguments),this.type=w}constructObject(){return new w}},Ae={sphereSphere:_t.types.SPHERE,spherePlane:_t.types.SPHERE|_t.types.PLANE,boxBox:_t.types.BOX|_t.types.BOX,sphereBox:_t.types.SPHERE|_t.types.BOX,planeBox:_t.types.PLANE|_t.types.BOX,convexConvex:_t.types.CONVEXPOLYHEDRON,sphereConvex:_t.types.SPHERE|_t.types.CONVEXPOLYHEDRON,planeConvex:_t.types.PLANE|_t.types.CONVEXPOLYHEDRON,boxConvex:_t.types.BOX|_t.types.CONVEXPOLYHEDRON,sphereHeightfield:_t.types.SPHERE|_t.types.HEIGHTFIELD,boxHeightfield:_t.types.BOX|_t.types.HEIGHTFIELD,convexHeightfield:_t.types.CONVEXPOLYHEDRON|_t.types.HEIGHTFIELD,sphereParticle:_t.types.PARTICLE|_t.types.SPHERE,planeParticle:_t.types.PLANE|_t.types.PARTICLE,boxParticle:_t.types.BOX|_t.types.PARTICLE,convexParticle:_t.types.PARTICLE|_t.types.CONVEXPOLYHEDRON,cylinderCylinder:_t.types.CYLINDER,sphereCylinder:_t.types.SPHERE|_t.types.CYLINDER,planeCylinder:_t.types.PLANE|_t.types.CYLINDER,boxCylinder:_t.types.BOX|_t.types.CYLINDER,convexCylinder:_t.types.CONVEXPOLYHEDRON|_t.types.CYLINDER,heightfieldCylinder:_t.types.HEIGHTFIELD|_t.types.CYLINDER,particleCylinder:_t.types.PARTICLE|_t.types.CYLINDER,sphereTrimesh:_t.types.SPHERE|_t.types.TRIMESH,planeTrimesh:_t.types.PLANE|_t.types.TRIMESH},_d=class{get[Ae.sphereSphere](){return this.sphereSphere}get[Ae.spherePlane](){return this.spherePlane}get[Ae.boxBox](){return this.boxBox}get[Ae.sphereBox](){return this.sphereBox}get[Ae.planeBox](){return this.planeBox}get[Ae.convexConvex](){return this.convexConvex}get[Ae.sphereConvex](){return this.sphereConvex}get[Ae.planeConvex](){return this.planeConvex}get[Ae.boxConvex](){return this.boxConvex}get[Ae.sphereHeightfield](){return this.sphereHeightfield}get[Ae.boxHeightfield](){return this.boxHeightfield}get[Ae.convexHeightfield](){return this.convexHeightfield}get[Ae.sphereParticle](){return this.sphereParticle}get[Ae.planeParticle](){return this.planeParticle}get[Ae.boxParticle](){return this.boxParticle}get[Ae.convexParticle](){return this.convexParticle}get[Ae.cylinderCylinder](){return this.convexConvex}get[Ae.sphereCylinder](){return this.sphereConvex}get[Ae.planeCylinder](){return this.planeConvex}get[Ae.boxCylinder](){return this.boxConvex}get[Ae.convexCylinder](){return this.convexConvex}get[Ae.heightfieldCylinder](){return this.heightfieldCylinder}get[Ae.particleCylinder](){return this.particleCylinder}get[Ae.sphereTrimesh](){return this.sphereTrimesh}get[Ae.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new vd,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new gd(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||t.material,h=s.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){let n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,h=r.material||n.material,u=o.material||s.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(l=h.friction*u.friction),l>0){let d=l*(a.frictionGravity||a.gravity).length(),f=n.invMass+s.invMass;f>0&&(f=1/f);let m=this.frictionEquationPool,x=m.length?m.pop():new il(n,s,d*f),g=m.length?m.pop():new il(n,s,d*f);return x.bi=g.bi=n,x.bj=g.bj=s,x.minForce=g.minForce=-d*f,x.maxForce=g.maxForce=d*f,x.ri.copy(t.ri),x.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(x.t,g.t),x.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),g.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),x.enabled=g.enabled=t.enabled,e.push(x,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Vs.setZero(),Wr.setZero(),qr.setZero();let r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Vs.vadd(e.ni,Vs),Wr.vadd(e.ri,Wr),qr.vadd(e.rj,qr)):(Vs.vsub(e.ni,Vs),Wr.vadd(e.rj,Wr),qr.vadd(e.ri,qr));let o=1/t;Wr.scale(o,n.ri),qr.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Vs.normalize(),Vs.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;let c=Bw,l=Fw,h=Dw,u=zw;for(let d=0,f=t.length;d!==f;d++){let m=t[d],x=e[d],g=null;m.material&&x.material&&(g=n.getContactMaterial(m.material,x.material)||null);let p=m.type&Pt.KINEMATIC&&x.type&Pt.STATIC||m.type&Pt.STATIC&&x.type&Pt.KINEMATIC||m.type&Pt.KINEMATIC&&x.type&Pt.KINEMATIC;for(let y=0;y<m.shapes.length;y++){m.quaternion.mult(m.shapeOrientations[y],c),m.quaternion.vmult(m.shapeOffsets[y],h),h.vadd(m.position,h);let _=m.shapes[y];for(let v=0;v<x.shapes.length;v++){x.quaternion.mult(x.shapeOrientations[v],l),x.quaternion.vmult(x.shapeOffsets[v],u),u.vadd(x.position,u);let R=x.shapes[v];if(!(_.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(u)>_.boundingSphereRadius+R.boundingSphereRadius)continue;let S=null;_.material&&R.material&&(S=n.getContactMaterial(_.material,R.material)||null),this.currentContactMaterial=S||g||n.defaultContactMaterial;let A=_.type|R.type,C=this[A];if(C){let b=!1;_.type<R.type?b=C.call(this,_,R,h,u,c,l,m,x,_,R,p):b=C.call(this,R,_,u,h,l,c,x,m,_,R,p),b&&p&&(n.shapeOverlapKeeper.set(_.id,R.id),n.bodyOverlapKeeper.set(m.id,x.id))}}}}}sphereSphere(t,e,n,s,r,o,a,c,l,h,u){if(u)return n.distanceSquared(s)<(t.radius+e.radius)**2;let d=this.createContactEquation(a,c,t,e,l,h);s.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(t.radius,d.ri),d.rj.scale(-e.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(s,d.rj),d.rj.vsub(c.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,c,l,h,u){let d=this.createContactEquation(a,c,t,e,l,h);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(t.radius,d.ri),n.vsub(s,$c),d.ni.scale(d.ni.dot($c),_0),$c.vsub(_0,d.rj),-$c.dot(d.ni)<=t.radius){if(u)return!0;let f=d.ri,m=d.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(s,m),m.vsub(c.position,m),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,c,t,e,u)}sphereBox(t,e,n,s,r,o,a,c,l,h,u){let d=this.v3pool,f=lb;n.vsub(s,jc),e.getSideNormals(f,o);let m=t.radius,x=!1,g=ub,p=db,y=fb,_=null,v=0,R=0,S=0,A=null;for(let D=0,Q=f.length;D!==Q&&x===!1;D++){let V=ob;V.copy(f[D]);let J=V.length();V.normalize();let ut=jc.dot(V);if(ut<J+m&&ut>0){let pt=ab,ot=cb;pt.copy(f[(D+1)%3]),ot.copy(f[(D+2)%3]);let Bt=pt.length(),X=ot.length();pt.normalize(),ot.normalize();let rt=jc.dot(pt),wt=jc.dot(ot);if(rt<Bt&&rt>-Bt&&wt<X&&wt>-X){let dt=Math.abs(ut-J-m);if((A===null||dt<A)&&(A=dt,R=rt,S=wt,_=J,g.copy(V),p.copy(pt),y.copy(ot),v++,u))return!0}}}if(v){x=!0;let D=this.createContactEquation(a,c,t,e,l,h);g.scale(-m,D.ri),D.ni.copy(g),D.ni.negate(D.ni),g.scale(_,g),p.scale(R,p),g.vadd(p,g),y.scale(S,y),g.vadd(y,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.vadd(s,D.rj),D.rj.vsub(c.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let C=d.get(),b=hb;for(let D=0;D!==2&&!x;D++)for(let Q=0;Q!==2&&!x;Q++)for(let V=0;V!==2&&!x;V++)if(C.set(0,0,0),D?C.vadd(f[0],C):C.vsub(f[0],C),Q?C.vadd(f[1],C):C.vsub(f[1],C),V?C.vadd(f[2],C):C.vsub(f[2],C),s.vadd(C,b),b.vsub(n,b),b.lengthSquared()<m*m){if(u)return!0;x=!0;let J=this.createContactEquation(a,c,t,e,l,h);J.ri.copy(b),J.ri.normalize(),J.ni.copy(J.ri),J.ri.scale(m,J.ri),J.rj.copy(C),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),J.rj.vadd(s,J.rj),J.rj.vsub(c.position,J.rj),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}d.release(C),C=null;let M=d.get(),P=d.get(),H=d.get(),N=d.get(),z=d.get(),U=f.length;for(let D=0;D!==U&&!x;D++)for(let Q=0;Q!==U&&!x;Q++)if(D%3!==Q%3){f[Q].cross(f[D],M),M.normalize(),f[D].vadd(f[Q],P),H.copy(n),H.vsub(P,H),H.vsub(s,H);let V=H.dot(M);M.scale(V,N);let J=0;for(;J===D%3||J===Q%3;)J++;z.copy(n),z.vsub(N,z),z.vsub(P,z),z.vsub(s,z);let ut=Math.abs(V),pt=z.length();if(ut<f[J].length()&&pt<m){if(u)return!0;x=!0;let ot=this.createContactEquation(a,c,t,e,l,h);P.vadd(N,ot.rj),ot.rj.copy(ot.rj),z.negate(ot.ni),ot.ni.normalize(),ot.ri.copy(ot.rj),ot.ri.vadd(s,ot.ri),ot.ri.vsub(n,ot.ri),ot.ri.normalize(),ot.ri.scale(m,ot.ri),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),ot.rj.vadd(s,ot.rj),ot.rj.vsub(c.position,ot.rj),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult)}}d.release(M,P,H,N,z)}planeBox(t,e,n,s,r,o,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,c,t,e,u)}convexConvex(t,e,n,s,r,o,a,c,l,h,u,d,f){let m=Rb;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,m,d,f)){let x=[],g=Cb;t.clipAgainstHull(n,r,e,s,o,m,-100,100,x);let p=0;for(let y=0;y!==x.length;y++){if(u)return!0;let _=this.createContactEquation(a,c,t,e,l,h),v=_.ri,R=_.rj;m.negate(_.ni),x[y].normal.negate(g),g.scale(x[y].depth,g),x[y].point.vadd(g,v),R.copy(x[y].point),v.vsub(n,v),R.vsub(s,R),v.vadd(n,v),v.vsub(a.position,v),R.vadd(s,R),R.vsub(c.position,R),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,s,r,o,a,c,l,h,u){let d=this.v3pool;n.vsub(s,pb);let f=e.faceNormals,m=e.faces,x=e.vertices,g=t.radius,p=!1;for(let y=0;y!==x.length;y++){let _=x[y],v=yb;o.vmult(_,v),s.vadd(v,v);let R=xb;if(v.vsub(n,R),R.lengthSquared()<g*g){if(u)return!0;p=!0;let S=this.createContactEquation(a,c,t,e,l,h);S.ri.copy(R),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(g,S.ri),v.vsub(s,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(s,S.rj),S.rj.vsub(c.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let y=0,_=m.length;y!==_&&p===!1;y++){let v=f[y],R=m[y],S=vb;o.vmult(v,S);let A=_b;o.vmult(x[R[0]],A),A.vadd(s,A);let C=Mb;S.scale(-g,C),n.vadd(C,C);let b=wb;C.vsub(A,b);let M=b.dot(S),P=bb;if(n.vsub(A,P),M<0&&P.dot(S)>0){let H=[];for(let N=0,z=R.length;N!==z;N++){let U=d.get();o.vmult(x[R[N]],U),s.vadd(U,U),H.push(U)}if(rb(H,S,n)){if(u)return!0;p=!0;let N=this.createContactEquation(a,c,t,e,l,h);S.scale(-g,N.ri),S.negate(N.ni);let z=d.get();S.scale(-M,z);let U=d.get();S.scale(-g,U),n.vsub(s,N.rj),N.rj.vadd(U,N.rj),N.rj.vadd(z,N.rj),N.rj.vadd(s,N.rj),N.rj.vsub(c.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),d.release(z),d.release(U),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let D=0,Q=H.length;D!==Q;D++)d.release(H[D]);return}else for(let N=0;N!==R.length;N++){let z=d.get(),U=d.get();o.vmult(x[R[(N+1)%R.length]],z),o.vmult(x[R[(N+2)%R.length]],U),s.vadd(z,z),s.vadd(U,U);let D=mb;U.vsub(z,D);let Q=gb;D.unit(Q);let V=d.get(),J=d.get();n.vsub(z,J);let ut=J.dot(Q);Q.scale(ut,V),V.vadd(z,V);let pt=d.get();if(V.vsub(n,pt),ut>0&&ut*ut<D.lengthSquared()&&pt.lengthSquared()<g*g){if(u)return!0;let ot=this.createContactEquation(a,c,t,e,l,h);V.vsub(s,ot.rj),V.vsub(n,ot.ni),ot.ni.normalize(),ot.ni.scale(g,ot.ri),ot.rj.vadd(s,ot.rj),ot.rj.vsub(c.position,ot.rj),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult);for(let Bt=0,X=H.length;Bt!==X;Bt++)d.release(H[Bt]);d.release(z),d.release(U),d.release(V),d.release(pt),d.release(J);return}d.release(z),d.release(U),d.release(V),d.release(pt),d.release(J)}for(let N=0,z=H.length;N!==z;N++)d.release(H[N])}}}planeConvex(t,e,n,s,r,o,a,c,l,h,u){let d=Eb,f=Sb;f.set(0,0,1),r.vmult(f,f);let m=0,x=Tb;for(let g=0;g!==e.vertices.length;g++)if(d.copy(e.vertices[g]),o.vmult(d,d),s.vadd(d,d),d.vsub(n,x),f.dot(x)<=0){if(u)return!0;let y=this.createContactEquation(a,c,t,e,l,h),_=Ab;f.scale(f.dot(x),_),d.vsub(_,_),_.vsub(n,y.ri),y.ni.copy(f),d.vsub(s,y.rj),y.ri.vadd(n,y.ri),y.ri.vsub(a.position,y.ri),y.rj.vadd(s,y.rj),y.rj.vsub(c.position,y.rj),this.result.push(y),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,s,r,o,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,c,t,e,u)}sphereHeightfield(t,e,n,s,r,o,a,c,l,h,u){let d=e.data,f=t.radius,m=e.elementSize,x=kb,g=Hb;pe.pointToLocalFrame(s,o,n,g);let p=Math.floor((g.x-f)/m)-1,y=Math.ceil((g.x+f)/m)+1,_=Math.floor((g.y-f)/m)-1,v=Math.ceil((g.y+f)/m)+1;if(y<0||v<0||p>d.length||_>d[0].length)return;p<0&&(p=0),y<0&&(y=0),_<0&&(_=0),v<0&&(v=0),p>=d.length&&(p=d.length-1),y>=d.length&&(y=d.length-1),v>=d[0].length&&(v=d[0].length-1),_>=d[0].length&&(_=d[0].length-1);let R=[];e.getRectMinMax(p,_,y,v,R);let S=R[0],A=R[1];if(g.z-f>A||g.z+f<S)return;let C=this.result;for(let b=p;b<y;b++)for(let M=_;M<v;M++){let P=C.length,H=!1;if(e.getConvexTrianglePillar(b,M,!1),pe.pointToWorldFrame(s,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,x,r,o,a,c,t,e,u)),u&&H||(e.getConvexTrianglePillar(b,M,!0),pe.pointToWorldFrame(s,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,x,r,o,a,c,t,e,u)),u&&H))return!0;if(C.length-P>2)return}}boxHeightfield(t,e,n,s,r,o,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,c,t,e,u)}convexHeightfield(t,e,n,s,r,o,a,c,l,h,u){let d=e.data,f=e.elementSize,m=t.boundingSphereRadius,x=Ub,g=Ob,p=Fb;pe.pointToLocalFrame(s,o,n,p);let y=Math.floor((p.x-m)/f)-1,_=Math.ceil((p.x+m)/f)+1,v=Math.floor((p.y-m)/f)-1,R=Math.ceil((p.y+m)/f)+1;if(_<0||R<0||y>d.length||v>d[0].length)return;y<0&&(y=0),_<0&&(_=0),v<0&&(v=0),R<0&&(R=0),y>=d.length&&(y=d.length-1),_>=d.length&&(_=d.length-1),R>=d[0].length&&(R=d[0].length-1),v>=d[0].length&&(v=d[0].length-1);let S=[];e.getRectMinMax(y,v,_,R,S);let A=S[0],C=S[1];if(!(p.z-m>C||p.z+m<A))for(let b=y;b<_;b++)for(let M=v;M<R;M++){let P=!1;if(e.getConvexTrianglePillar(b,M,!1),pe.pointToWorldFrame(s,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,x,r,o,a,c,null,null,u,g,null)),u&&P||(e.getConvexTrianglePillar(b,M,!0),pe.pointToWorldFrame(s,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,x,r,o,a,c,null,null,u,g,null)),u&&P))return!0}}sphereParticle(t,e,n,s,r,o,a,c,l,h,u){let d=Lb;if(d.set(0,0,1),s.vsub(n,d),d.lengthSquared()<=t.radius*t.radius){if(u)return!0;let m=this.createContactEquation(c,a,e,t,l,h);d.normalize(),m.rj.copy(d),m.rj.scale(t.radius,m.rj),m.ni.copy(d),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,c,l,h,u){let d=Ib;d.set(0,0,1),a.quaternion.vmult(d,d);let f=Pb;if(s.vsub(a.position,f),d.dot(f)<=0){if(u)return!0;let x=this.createContactEquation(c,a,e,t,l,h);x.ni.copy(d),x.ni.negate(x.ni),x.ri.set(0,0,0);let g=Nb;d.scale(d.dot(s),g),s.vsub(g,g),x.rj.copy(g),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,c,t,e,u)}convexParticle(t,e,n,s,r,o,a,c,l,h,u){let d=-1,f=zb,m=Bb,x=null,g=Db;if(g.copy(s),g.vsub(n,g),r.conjugate(M0),M0.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,y=t.faces.length;p!==y;p++){let _=[t.worldVertices[t.faces[p][0]]],v=t.worldFaceNormals[p];s.vsub(_[0],w0);let R=-v.dot(w0);if(x===null||Math.abs(R)<Math.abs(x)){if(u)return!0;x=R,d=p,f.copy(v)}}if(d!==-1){let p=this.createContactEquation(c,a,e,t,l,h);f.scale(x,m),m.vadd(s,m),m.vsub(n,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);let y=p.ri,_=p.rj;y.vadd(s,y),y.vsub(c.position,y),_.vadd(n,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,c,l,h,u){return this.convexHeightfield(e,t,s,n,o,r,c,a,l,h,u)}particleCylinder(t,e,n,s,r,o,a,c,l,h,u){return this.convexParticle(e,t,s,n,o,r,c,a,l,h,u)}sphereTrimesh(t,e,n,s,r,o,a,c,l,h,u){let d=qw,f=Xw,m=Yw,x=$w,g=jw,p=Zw,y=tb,_=Ww,v=Vw,R=eb;pe.pointToLocalFrame(s,o,n,g);let S=t.radius;y.lowerBound.set(g.x-S,g.y-S,g.z-S),y.upperBound.set(g.x+S,g.y+S,g.z+S),e.getTrianglesInAABB(y,R);let A=Gw,C=t.radius*t.radius;for(let N=0;N<R.length;N++)for(let z=0;z<3;z++)if(e.getVertex(e.indices[R[N]*3+z],A),A.vsub(g,v),v.lengthSquared()<=C){if(_.copy(A),pe.pointToWorldFrame(s,o,_,A),A.vsub(n,v),u)return!0;let U=this.createContactEquation(a,c,t,e,l,h);U.ni.copy(v),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(A),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let N=0;N<R.length;N++)for(let z=0;z<3;z++){e.getVertex(e.indices[R[N]*3+z],d),e.getVertex(e.indices[R[N]*3+(z+1)%3],f),f.vsub(d,m),g.vsub(f,p);let U=p.dot(m);g.vsub(d,p);let D=p.dot(m);if(D>0&&U<0&&(g.vsub(d,p),x.copy(m),x.normalize(),D=p.dot(x),x.scale(D,p),p.vadd(d,p),p.distanceTo(g)<t.radius)){if(u)return!0;let V=this.createContactEquation(a,c,t,e,l,h);p.vsub(g,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),pe.pointToWorldFrame(s,o,p,p),p.vsub(c.position,V.rj),pe.vectorToWorldFrame(o,V.ni,V.ni),pe.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}let b=Kw,M=Jw,P=Qw,H=kw;for(let N=0,z=R.length;N!==z;N++){e.getTriangleVertices(R[N],b,M,P),e.getNormal(R[N],H),g.vsub(b,p);let U=p.dot(H);if(H.scale(U,p),g.vsub(p,p),U=p.distanceTo(g),Fn.pointInTriangle(p,b,M,P)&&U<t.radius){if(u)return!0;let D=this.createContactEquation(a,c,t,e,l,h);p.vsub(g,D.ni),D.ni.normalize(),D.ni.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),pe.pointToWorldFrame(s,o,p,p),p.vsub(c.position,D.rj),pe.vectorToWorldFrame(o,D.ni,D.ni),pe.vectorToWorldFrame(o,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}R.length=0}planeTrimesh(t,e,n,s,r,o,a,c,l,h,u){let d=new w,f=Uw;f.set(0,0,1),r.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,d);let x=new w;x.copy(d),pe.pointToWorldFrame(s,o,x,d);let g=Ow;if(d.vsub(n,g),f.dot(g)<=0){if(u)return!0;let y=this.createContactEquation(a,c,t,e,l,h);y.ni.copy(f);let _=Hw;f.scale(g.dot(f),_),d.vsub(_,_),y.ri.copy(_),y.ri.vsub(a.position,y.ri),y.rj.copy(d),y.rj.vsub(c.position,y.rj),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}}},Vs=new w,Wr=new w,qr=new w,Dw=new w,zw=new w,Bw=new Oe,Fw=new Oe,Uw=new w,Ow=new w,Hw=new w,kw=new w,Vw=new w;new w;var Gw=new w,Ww=new w,qw=new w,Xw=new w,Yw=new w,$w=new w,jw=new w,Zw=new w,Kw=new w,Jw=new w,Qw=new w,tb=new An,eb=[],$c=new w,_0=new w,nb=new w,ib=new w,sb=new w;function rb(i,t,e){let n=null,s=i.length;for(let r=0;r!==s;r++){let o=i[r],a=nb;i[(r+1)%s].vsub(o,a);let c=ib;a.cross(t,c);let l=sb;e.vsub(o,l);let h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var jc=new w,ob=new w,ab=new w,cb=new w,lb=[new w,new w,new w,new w,new w,new w],hb=new w,ub=new w,db=new w,fb=new w,pb=new w,mb=new w,gb=new w,xb=new w,yb=new w,vb=new w,_b=new w,Mb=new w,wb=new w,bb=new w;new w;new w;var Eb=new w,Sb=new w,Tb=new w,Ab=new w,Rb=new w,Cb=new w,Ib=new w,Pb=new w,Nb=new w,Lb=new w,M0=new Oe,Db=new w;new w;var zb=new w,w0=new w,Bb=new w,Fb=new w,Ub=new w,Ob=[0],Hb=new w,kb=new w,sl=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),s=this.current,r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,s=this.previous,r=n.length,o=s.length,a=0;for(let c=0;c<r;c++){let l=!1,h=n[c];for(;h>s[a];)a++;l=h===s[a],l||b0(t,h)}a=0;for(let c=0;c<o;c++){let l=!1,h=s[c];for(;h>n[a];)a++;l=n[a]===h,l||b0(e,h)}}};function b0(i,t){i.push((t&4294901760)>>16,t&65535)}var dd=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`,Md=class{constructor(){this.data={keys:[]}}get(t,e){let n=dd(t,e);return this.data[n]}set(t,e,n){let s=dd(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){let n=dd(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},rl=class extends Kc{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new pd,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new na,this.constraints=[],this.narrowphase=new _d(this),this.collisionMatrix=new Zc,this.collisionMatrixPrevious=new Zc,this.bodyOverlapKeeper=new sl,this.shapeOverlapKeeper=new sl,this.contactmaterials=[],this.contactMaterialTable=new Md,this.defaultMaterial=new ki("default"),this.defaultContactMaterial=new gi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Xr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=Fn.ALL,n.from=t,n.to=e,n.callback=s,fd.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=Fn.ANY,n.from=t,n.to=e,n.result=s,fd.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=Fn.CLOSEST,n.from=t,n.to=e,n.result=s,fd.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Pt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let s=e[n].shapes;for(let r=0;r<s.length;r++){let o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=We.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let s=We.now(),r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(We.now()-s>t*1e3)););this.accumulator=this.accumulator%t;let o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=Xb,s=Yb,r=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,u=Pt.DYNAMIC,d=-1/0,f=this.constraints,m=qb;c.length();let x=c.x,g=c.y,p=c.z,y=0;for(l&&(d=We.now()),y=0;y!==r;y++){let N=o[y];if(N.type===u){let z=N.force,U=N.mass;z.x+=U*x,z.y+=U*g,z.z+=U*p}}for(let N=0,z=this.subsystems.length;N!==z;N++)this.subsystems[N].update();l&&(d=We.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),l&&(h.broadphase=We.now()-d);let _=f.length;for(y=0;y!==_;y++){let N=f[y];if(!N.collideConnected)for(let z=n.length-1;z>=0;z-=1)(N.bodyA===n[z]&&N.bodyB===s[z]||N.bodyB===n[z]&&N.bodyA===s[z])&&(n.splice(z,1),s.splice(z,1))}this.collisionMatrixTick(),l&&(d=We.now());let v=Wb,R=e.length;for(y=0;y!==R;y++)v.push(e[y]);e.length=0;let S=this.frictionEquations.length;for(y=0;y!==S;y++)m.push(this.frictionEquations[y]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,v,this.frictionEquations,m),l&&(h.narrowphase=We.now()-d),l&&(d=We.now()),y=0;y<this.frictionEquations.length;y++)a.addEquation(this.frictionEquations[y]);let A=e.length;for(let N=0;N!==A;N++){let z=e[N],U=z.bi,D=z.bj,Q=z.si,V=z.sj,J;if(U.material&&D.material?J=this.getContactMaterial(U.material,D.material)||this.defaultContactMaterial:J=this.defaultContactMaterial,J.friction,U.material&&D.material&&(U.material.friction>=0&&D.material.friction>=0&&U.material.friction*D.material.friction,U.material.restitution>=0&&D.material.restitution>=0&&(z.restitution=U.material.restitution*D.material.restitution)),a.addEquation(z),U.allowSleep&&U.type===Pt.DYNAMIC&&U.sleepState===Pt.SLEEPING&&D.sleepState===Pt.AWAKE&&D.type!==Pt.STATIC){let ut=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),pt=D.sleepSpeedLimit**2;ut>=pt*2&&(U.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===Pt.DYNAMIC&&D.sleepState===Pt.SLEEPING&&U.sleepState===Pt.AWAKE&&U.type!==Pt.STATIC){let ut=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),pt=U.sleepSpeedLimit**2;ut>=pt*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,D,!0),this.collisionMatrixPrevious.get(U,D)||(Jo.body=D,Jo.contact=z,U.dispatchEvent(Jo),Jo.body=U,D.dispatchEvent(Jo)),this.bodyOverlapKeeper.set(U.id,D.id),this.shapeOverlapKeeper.set(Q.id,V.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=We.now()-d,d=We.now()),y=0;y!==r;y++){let N=o[y];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(_=f.length,y=0;y!==_;y++){let N=f[y];N.update();for(let z=0,U=N.equations.length;z!==U;z++){let D=N.equations[z];a.addEquation(D)}}a.solve(t,this),l&&(h.solve=We.now()-d),a.removeAllEquations();let C=Math.pow;for(y=0;y!==r;y++){let N=o[y];if(N.type&u){let z=C(1-N.linearDamping,t),U=N.velocity;U.scale(z,U);let D=N.angularVelocity;if(D){let Q=C(1-N.angularDamping,t);D.scale(Q,D)}}}this.dispatchEvent(Gb),l&&(d=We.now());let M=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(y=0;y!==r;y++)o[y].integrate(t,M,P);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=We.now()-d),this.stepnumber+=1,this.dispatchEvent(Vb);let H=!0;if(this.allowSleep)for(H=!1,y=0;y!==r;y++){let N=o[y];N.sleepTick(this.time),N.sleepState!==Pt.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Fi,Ui),t){for(let r=0,o=Fi.length;r<o;r+=2)Qo.bodyA=this.getBodyById(Fi[r]),Qo.bodyB=this.getBodyById(Fi[r+1]),this.dispatchEvent(Qo);Qo.bodyA=Qo.bodyB=null}if(e){for(let r=0,o=Ui.length;r<o;r+=2)ta.bodyA=this.getBodyById(Ui[r]),ta.bodyB=this.getBodyById(Ui[r+1]),this.dispatchEvent(ta);ta.bodyA=ta.bodyB=null}Fi.length=Ui.length=0;let n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(Fi,Ui),n){for(let r=0,o=Fi.length;r<o;r+=2){let a=this.getShapeById(Fi[r]),c=this.getShapeById(Fi[r+1]);Oi.shapeA=a,Oi.shapeB=c,a&&(Oi.bodyA=a.body),c&&(Oi.bodyB=c.body),this.dispatchEvent(Oi)}Oi.bodyA=Oi.bodyB=Oi.shapeA=Oi.shapeB=null}if(s){for(let r=0,o=Ui.length;r<o;r+=2){let a=this.getShapeById(Ui[r]),c=this.getShapeById(Ui[r+1]);Hi.shapeA=a,Hi.shapeB=c,a&&(Hi.bodyA=a.body),c&&(Hi.bodyB=c.body),this.dispatchEvent(Hi)}Hi.bodyA=Hi.bodyB=Hi.shapeA=Hi.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}};new An;var fd=new Fn,We=globalThis.performance||{};if(!We.now){let i=Date.now();We.timing&&We.timing.navigationStart&&(i=We.timing.navigationStart),We.now=()=>Date.now()-i}new w;var Vb={type:"postStep"},Gb={type:"preStep"},Jo={type:Pt.COLLIDE_EVENT_NAME,body:null,contact:null},Wb=[],qb=[],Xb=[],Yb=[],Fi=[],Ui=[],Qo={type:"beginContact",bodyA:null,bodyB:null},ta={type:"endContact",bodyA:null,bodyB:null},Oi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Hi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var ol=Object.freeze([{id:"cleaver",name:"\u0422\u0435\u0441\u0430\u043A",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"cleaver",damage:42,range:1.75,cooldown:.62,swingDuration:.46,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:1.15,description:"\u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0442\u0435\u0441\u0430\u043A \u0441 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u043C \u0448\u0438\u0440\u043E\u043A\u0438\u043C \u043B\u0435\u0437\u0432\u0438\u0435\u043C. \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0440\u0443\u0431\u044F\u0449\u0438\u0439 \u0437\u0430\u043C\u0430\u0445.",sound:{frequency:350,filter:760,duration:.18,noise:.14,bass:.025,swing:360,impact:115}},{id:"sledgehammer",name:"\u041A\u0443\u0432\u0430\u043B\u0434\u0430",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"sledgehammer",damage:68,range:1.95,cooldown:.9,swingDuration:.72,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:4.6,description:"\u0414\u0432\u0443\u0440\u0443\u0447\u043D\u0430\u044F \u043A\u0443\u0432\u0430\u043B\u0434\u0430: \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0439, \u043D\u043E \u043C\u043E\u0449\u043D\u044B\u0439 \u0443\u0434\u0430\u0440 \u0438 \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u0438\u043C\u043F\u0443\u043B\u044C\u0441 ragdoll.",sound:{frequency:105,filter:390,duration:.28,noise:.24,bass:.11,swing:145,impact:72}},{id:"nail-bat",name:"\u0411\u0438\u0442\u0430 \u0441 \u0433\u0432\u043E\u0437\u0434\u044F\u043C\u0438",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"nailBat",damage:50,range:1.9,cooldown:.74,swingDuration:.56,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:2.1,description:"\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u0431\u0438\u0442\u0430 \u0441 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0433\u0432\u043E\u0437\u0434\u044F\u043C\u0438 \u0438 \u0440\u0430\u0437\u043C\u0430\u0448\u0438\u0441\u0442\u043E\u0439 \u0430\u0442\u0430\u043A\u043E\u0439.",sound:{frequency:185,filter:520,duration:.22,noise:.2,bass:.055,swing:205,impact:96}},{id:"pm",name:"\u041F\u041C (\u041C\u0430\u043A\u0430\u0440\u043E\u0432)",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"pm",damage:24,range:38,cooldown:.29,magazineSize:8,reserve:40,reloadDuration:1.1,automatic:!1,weight:.81,description:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:108,filter:1450,duration:.16,noise:.82,bass:.12,waveform:"triangle"}},{id:"tt",name:"\u0422\u0422",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"tt",damage:31,range:48,cooldown:.31,magazineSize:8,reserve:40,reloadDuration:1.25,automatic:!1,weight:.85,description:"\u0422\u0443\u043B\u044C\u0441\u043A\u0438\u0439 \u0422\u043E\u043A\u0430\u0440\u0435\u0432 \u0441 \u0434\u043B\u0438\u043D\u043D\u044B\u043C \u0441\u0442\u0432\u043E\u043B\u043E\u043C. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:142,filter:1840,duration:.2,noise:.91,bass:.16,waveform:"sawtooth"}},{id:"glock-17",name:"Glock 17",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"glock",damage:22,range:42,cooldown:.17,magazineSize:17,reserve:68,reloadDuration:1,automatic:!1,weight:.71,description:"\u041B\u0451\u0433\u043A\u0438\u0439 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043D\u044B\u0439 \u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442. \u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 17 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:122,filter:2200,duration:.135,noise:.74,bass:.09,waveform:"square"}},{id:"ak-47",name:"\u0410\u041A-47",category:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u044B",type:"rifle",model:"ak",damage:34,range:58,cooldown:.105,magazineSize:30,reserve:90,reloadDuration:1.35,automatic:!0,weight:3.8,description:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442 \u0441 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C \u0446\u0435\u0432\u044C\u0451\u043C. \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0433\u043E\u043D\u044C, \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 30 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:86,filter:980,duration:.22,noise:1,bass:.22,waveform:"sawtooth"}},{id:"m4a1",name:"M4A1",category:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u044B",type:"rifle",model:"m4",damage:29,range:62,cooldown:.092,magazineSize:30,reserve:120,reloadDuration:1.25,automatic:!0,weight:3.4,description:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442 \u0441 \u043F\u043B\u0430\u043D\u043A\u0430\u043C\u0438 \u0438 \u0441\u043A\u043B\u0430\u0434\u043D\u044B\u043C \u043F\u0440\u0438\u043A\u043B\u0430\u0434\u043E\u043C. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 30 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:98,filter:1320,duration:.175,noise:.9,bass:.18,waveform:"triangle"}},{id:"pump-shotgun",name:"\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A (\u043F\u043E\u043C\u043F\u043E\u0432\u044B\u0439)",category:"\u0422\u044F\u0436\u0451\u043B\u043E\u0435",type:"shotgun",model:"shotgun",damage:11,pellets:8,spread:.018,range:34,cooldown:.72,magazineSize:8,reserve:32,reloadDuration:1.65,automatic:!1,weight:3.5,description:"\u041F\u043E\u043C\u043F\u043E\u0432\u044B\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A: 8 \u0434\u0440\u043E\u0431\u0438\u043D \u0437\u0430 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u0442\u0440\u0443\u0431\u0447\u0430\u0442\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:70,filter:720,duration:.31,noise:1.05,bass:.28,waveform:"sawtooth"}},{id:"shovel",name:"\u041B\u043E\u043F\u0430\u0442\u0430",category:"\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",type:"tool",model:"shovel",damage:24,range:1.8,cooldown:.82,swingDuration:.64,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:3.6,description:"\u0421\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0448\u0442\u044B\u043A\u043E\u0432\u0430\u044F \u043B\u043E\u043F\u0430\u0442\u0430 \u0441 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C \u0447\u0435\u0440\u0435\u043D\u043A\u043E\u043C. \u0415\u044E \u043C\u043E\u0436\u043D\u043E \u0447\u0435\u0440\u043F\u0430\u0442\u044C \u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u044C \u0441\u043D\u0435\u0433.",sound:{frequency:125,filter:620,duration:.24,noise:.23,bass:.065,swing:230,impact:92}}]),Vi=new Map(ol.map(i=>[i.id,i]));function P0(i){return{magazine:i.magazineSize===null?null:i.magazineSize,reserve:i.magazineSize===null?0:i.reserve}}function N0(i,t){return i.magazineSize===null?!0:!t||t.magazine<=0?!1:(t.magazine--,!0)}function L0(i,t){if(i.magazineSize===null||!t||t.reserve<=0||t.magazine>=i.magazineSize)return 0;let e=Math.min(i.magazineSize-t.magazine,t.reserve);return t.magazine+=e,t.reserve-=e,e}function D0(i,t,e="torso",n=1){if(!i||!t)return{damage:0,health:i?.health??0,lethal:!1};let s=e==="head"?1.65:["handL","handR","footL","footR"].includes(e)?.7:1,r=Math.max(1,Math.round(t.damage*s*n));return i.health=Math.max(0,(Number.isFinite(i.health)?i.health:100)-r),i.health===0&&(i.dead=!0),{damage:r,health:i.health,lethal:i.dead===!0}}function z0(i,t){return i.intersectObjects(t,!0)}function B0(i,t=0,e=.28){if(t>0)return{ok:!1,reason:"already-carrying",amount:0};if(!i||!Number.isFinite(i.amount)||i.amount<=0)return{ok:!1,reason:"empty",amount:0};let n=Math.min(Math.max(0,e),i.amount);return i.amount=Math.max(0,i.amount-n),{ok:n>0,reason:n>0?null:"empty",amount:n}}function F0(i,t){return!Number.isFinite(i)||i<=0||!t||!Number.isFinite(t.x)||!Number.isFinite(t.z)?{ok:!1,pile:null,remaining:Math.max(0,Number(i)||0)}:{ok:!0,pile:{x:t.x,z:t.z,amount:i},remaining:0}}function U0(i,t){return i*(t>0?.72:1)}function O0(i,t,e){let n=e?5.5:-.36;return Math.max(0,Math.min(100,i+Math.max(0,t)*n))}var _e=Object.freeze({minX:-310,maxX:310,minZ:-450,maxZ:450});function H0(i){let t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function Zt(i){return i<=-230?0:i<30?2*H0((i+230)/260):i<230?2+2*H0((i-30)/200):4}function jb(i){if(i<=-230||i>=230)return 0;if(i<30){let e=(i+230)/260;return 12*e*(1-e)/260}let t=(i-30)/200;return 12*t*(1-t)/200}var Zb=10;function k0(i=Zb){let t=Math.ceil((_e.maxX-_e.minX)/i),e=(_e.maxX-_e.minX)/t;return Array.from({length:t},(n,s)=>{let r=_e.minX+(s+.5)*e;return Object.freeze({centerX:r,width:e,height:Zt(r),slope:jb(r)})})}var xe=Object.freeze({pond:Object.freeze({x:-232,z:-356,radiusX:34,radiusZ:23}),stop:Object.freeze({x:232,z:164}),auntZina:Object.freeze({x:28,z:169.5,yaw:0}),school:Object.freeze({x:-164,z:236,width:32,depth:21}),shop:Object.freeze({x:42,z:178,width:22,depth:14,height:4.2}),garages:Object.freeze([Object.freeze({x:68,z:178,width:10,depth:7,height:3}),Object.freeze({x:80,z:178,width:10,depth:7,height:3}),Object.freeze({x:92,z:178,width:10,depth:7,height:3})]),ruins:Object.freeze([Object.freeze({id:"old-brick-farm",type:"brick-farm",x:-251,z:246,width:26,depth:13,height:3.3,yaw:.08}),Object.freeze({id:"raised-timber-barn",type:"timber-tower",x:-271,z:309,width:13,depth:12,height:4.8,yaw:-.12}),Object.freeze({id:"collapsed-brick-house",type:"brick-shell",x:-232,z:346,width:24,depth:12,height:2.8,yaw:-.04})]),hangars:Object.freeze([Object.freeze({x:145,z:-338,width:72,depth:27,height:7}),Object.freeze({x:150,z:-276,width:28,depth:76,height:6}),Object.freeze({x:207,z:-274,width:30,depth:78,height:6}),Object.freeze({x:268,z:-220,width:32,depth:50,height:5})]),scrapYards:Object.freeze([Object.freeze({x:240,z:-342,width:58,depth:44,gate:"south"}),Object.freeze({x:255,z:-150,width:62,depth:54,gate:"west"}),Object.freeze({x:187,z:-82,width:42,depth:34,gate:"south"})]),roads:Object.freeze([Object.freeze({width:9,points:Object.freeze([[-159,-420],[-151,-320],[-153,-220],[-150,-126],[-155,-16],[-156,92],[-160,176],[-151,286],[-142,414]])}),Object.freeze({width:8,points:Object.freeze([[-91,-143],[-84,-70],[-81,4],[-78,87],[-70,162],[-70,235]])}),Object.freeze({width:9,points:Object.freeze([[-14,106],[-13,188],[-17,276],[-22,383]])}),Object.freeze({width:11,points:Object.freeze([[-214,-108],[-157,-104],[-103,-98],[-42,-94],[27,-86],[99,-63],[166,-33],[220,16]])}),Object.freeze({width:11,points:Object.freeze([[-130,153],[-85,151],[-35,149],[24,151],[91,155],[157,160],[232,164]])}),Object.freeze({width:8,points:Object.freeze([[-156,225],[-117,223],[-75,221],[-35,216],[10,211],[55,208]])}),Object.freeze({width:8,points:Object.freeze([[-81,283],[-42,286],[3,290],[44,294]])}),Object.freeze({width:7,points:Object.freeze([[91,155],[87,128],[121,117],[154,101],[176,66],[183,22],[200,20],[220,16]])}),Object.freeze({width:6,points:Object.freeze([[42,151],[42,158],[42,164],[42,169.2]])}),Object.freeze({width:7,points:Object.freeze([[183,22],[185,-18],[186,-48],[187,-60]])}),Object.freeze({width:7,points:Object.freeze([[187,-60],[208,-60],[218,-72],[218,-112],[218,-148]])}),Object.freeze({width:8,points:Object.freeze([[218,-148],[218,-180],[230,-210],[237,-245],[238,-280],[238,-310]])}),Object.freeze({width:5.2,points:Object.freeze([[-207,-150],[-207,-108],[-207,-66],[-207,-6],[-207,54],[-207,114],[-198,137],[-176,150],[-130,153]])}),Object.freeze({width:4.8,points:Object.freeze([[-14,106],[8,106],[20,96],[20,54],[20,0],[20,-45],[20,-77],[27,-86]])}),Object.freeze({width:4.5,points:Object.freeze([[-44,240],[-44,283],[-44,325],[-44,393],[-44,421]])}),Object.freeze({width:4.5,points:Object.freeze([[5,240],[5,283],[5,325],[5,393],[5,421]])}),Object.freeze({width:4.8,points:Object.freeze([[-22,383],[-12,389],[0,393],[5,393]])}),Object.freeze({width:5.8,points:Object.freeze([[-151,286],[-182,286],[-213,278],[-236,267],[-250,258]])}),Object.freeze({width:5,points:Object.freeze([[-213,278],[-231,290],[-251,302],[-257,309]])}),Object.freeze({width:5,points:Object.freeze([[-231,290],[-237,317],[-237,334]])}),Object.freeze({width:6,points:Object.freeze([[238,-310],[218,-313],[195,-316],[173,-319],[150,-321],[145,-319.5]])})]),lots:Object.freeze([Object.freeze({id:"L-01",x:-226,z:-126,width:36,depth:52,gate:"east",houseWidth:11,houseDepth:8,roof:0}),Object.freeze({id:"L-02",x:-226,z:-66,width:36,depth:52,gate:"east",houseWidth:10,houseDepth:8,roof:1}),Object.freeze({id:"L-03",x:-226,z:-6,width:36,depth:52,gate:"east",houseWidth:12,houseDepth:9,roof:2}),Object.freeze({id:"L-04",x:-226,z:54,width:36,depth:52,gate:"east",houseWidth:10,houseDepth:8,roof:3}),Object.freeze({id:"L-05",x:-226,z:114,width:36,depth:52,gate:"east",houseWidth:12,houseDepth:9,roof:0}),Object.freeze({id:"L-06",x:-124,z:-103,width:38,depth:52,gate:"west",houseWidth:12,houseDepth:9,roof:1}),Object.freeze({id:"L-07",x:-124,z:-43,width:38,depth:52,gate:"west",houseWidth:10,houseDepth:8,roof:2}),Object.freeze({id:"L-08",x:-124,z:17,width:38,depth:52,gate:"west",houseWidth:12,houseDepth:9,roof:3}),Object.freeze({id:"L-09",x:-124,z:77,width:38,depth:52,gate:"west",houseWidth:11,houseDepth:8,roof:0}),Object.freeze({id:"M-01",x:-51,z:-91,width:38,depth:47,gate:"south",houseWidth:11,houseDepth:8,roof:2}),Object.freeze({id:"M-02",x:-4,z:-87,width:38,depth:47,gate:"south",houseWidth:12,houseDepth:9,roof:3}),Object.freeze({id:"M-03",x:-51,z:-34,width:38,depth:47,gate:"south",houseWidth:10,houseDepth:8,roof:0}),Object.freeze({id:"M-04",x:-4,z:-30,width:38,depth:47,gate:"south",houseWidth:11,houseDepth:8,roof:1}),Object.freeze({id:"M-05",x:-51,z:24,width:38,depth:47,gate:"south",houseWidth:12,houseDepth:9,roof:3}),Object.freeze({id:"M-06",x:-4,z:29,width:38,depth:47,gate:"south",houseWidth:10,houseDepth:8,roof:2}),Object.freeze({id:"S-01",x:-73,z:257,width:48,depth:52,gate:"east",houseWidth:13,houseDepth:10,roof:1}),Object.freeze({id:"S-02",x:34,z:257,width:48,depth:52,gate:"west",houseWidth:12,houseDepth:9,roof:2}),Object.freeze({id:"S-03",x:-73,z:325,width:48,depth:52,gate:"east",houseWidth:11,houseDepth:8,roof:3}),Object.freeze({id:"S-04",x:34,z:325,width:48,depth:52,gate:"west",houseWidth:12,houseDepth:9,roof:0}),Object.freeze({id:"S-05",x:-73,z:393,width:48,depth:52,gate:"east",houseWidth:12,houseDepth:9,roof:2}),Object.freeze({id:"S-06",x:34,z:393,width:48,depth:52,gate:"west",houseWidth:13,houseDepth:10,roof:1})]),snowDrifts:Object.freeze([Object.freeze({x:-281,z:-278,amount:1.1}),Object.freeze({x:-196,z:-274,amount:.92}),Object.freeze({x:-270,z:-187,amount:1.18}),Object.freeze({x:-203,z:-151,amount:.88}),Object.freeze({x:-285,z:-69,amount:1.16}),Object.freeze({x:-178,z:-5,amount:1.08}),Object.freeze({x:-281,z:42,amount:1.2}),Object.freeze({x:-184,z:164,amount:.95}),Object.freeze({x:-108,z:-295,amount:1.06}),Object.freeze({x:-106,z:184,amount:.9}),Object.freeze({x:95,z:236,amount:.94}),Object.freeze({x:110,z:315,amount:1.12}),Object.freeze({x:208,z:-22,amount:1.04}),Object.freeze({x:275,z:54,amount:.92})])});function V0(i=xe.stop){let t=Zt(i.x),e=[{kind:"platform",position:[i.x,t+.11,i.z],halfExtents:[3.2,.11,2.1]},{kind:"roof",position:[i.x,t+2.66,i.z],halfExtents:[3.3,.12,2.15]},{kind:"bench-seat",position:[i.x,t+.72,i.z+1.1],halfExtents:[2.25,.06,.27]},{kind:"bench-back",position:[i.x,t+1.12,i.z+1.27],halfExtents:[2.25,.06,.07]}];for(let n of[-2.8,2.8])for(let s of[-1.65,1.65])e.push({kind:"support",position:[i.x+n,t+1.3,i.z+s],halfExtents:[.08,1.3,.08]});return Object.freeze(e.map(n=>Object.freeze({kind:n.kind,position:Object.freeze(n.position),halfExtents:Object.freeze(n.halfExtents)})))}function Kb(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s||1,o=Math.max(0,Math.min(1,((i.x-t[0])*n+(i.z-t[1])*s)/r));return{x:t[0]+n*o,z:t[1]+s*o}}function Jb(i,t=1.4,e=0){return i.gate==="east"?{x:i.x+i.width/2+t,z:i.z+e}:i.gate==="west"?{x:i.x-i.width/2-t,z:i.z+e}:i.gate==="south"?{x:i.x+e,z:i.z+i.depth/2+t}:{x:i.x+e,z:i.z-i.depth/2-t}}function Sd(i){let t=i.x,e=i.z;return i.gate==="east"?t-=6:i.gate==="west"?t+=6:i.gate==="north"?e+=5:e-=5,{x:t,z:e}}function Td(i,t=.9){let e=Sd(i);return{x:e.x,z:e.z+(i.houseDepth||8)/2+t}}function Qb(i=xe){let t=[];for(let l of i.roads)for(let h=1;h<l.points.length;h++)t.push([l.points[h-1],l.points[h]]);let e=i.lots.map(l=>{let h=Td(l),u=Jb(l),d=null,f=1/0;for(let[m,x]of t){let g=Kb(u,m,x),p=Math.hypot(u.x-g.x,u.z-g.z);p<f&&(f=p,d=g)}return Object.freeze({id:`house-walk-${l.id}`,lotId:l.id,width:2.2,points:Object.freeze([[h.x,h.z],[u.x,u.z],[d.x,d.z]].map(m=>Object.freeze(m)))})}),n=i.shop,s=n.z-n.depth/2-1.8,r=n.z-n.depth/2-.72,o=i.hangars[0],a=o.z+o.depth/2+6.2,c=o.z+o.depth/2+5;return Object.freeze([...e,Object.freeze({id:"shop-front-walk",width:4.8,points:Object.freeze([[n.x-n.width/2-2,s],[n.x,s],[n.x+n.width/2+2,s]].map(l=>Object.freeze(l)))}),Object.freeze({id:"shop-entry-walk",width:2.4,points:Object.freeze([[n.x,s],[n.x,r]].map(l=>Object.freeze(l)))}),Object.freeze({id:"mikhtok-front-walk",width:5.2,points:Object.freeze([[o.x-o.width/2-1,a],[o.x,a],[o.x+o.width/2+1,a]].map(l=>Object.freeze(l)))}),Object.freeze({id:"mikhtok-entry-walk",width:3.2,points:Object.freeze([[o.x,c],[o.x,a]].map(l=>Object.freeze(l)))})])}var ia=Qb();function G0({layout:i,terrainHeightAt:t,addBuildingPart:e,addStaticCollider:n,materials:s}){function r(l,h,u,d,f,m,x=[0,0,0],g=!0){let p=l.yaw||0,y=Math.cos(p),_=Math.sin(p),v=l.x+h*y+u*_,R=l.z-h*_+u*y,S=t(v),A=[v,S+d+f[1]/2,R],C=[x[0],p+x[1],x[2]];e(f,A,m,!1,C),g&&n(A,f.map(b=>b/2),void 0,C)}function o(l){let h=l.width/2,u=l.depth/2;r(l,0,0,0,[l.width-1,.16,l.depth-1],s.stone),r(l,-8.6,-u+.25,0,[8,3,.5],s.brick),r(l,6.4,-u+.25,0,[11.4,2.55,.5],s.brick),r(l,-11.8,u-.25,0,[2.4,3.1,.5],s.brick),r(l,-7.7,u-.25,0,[1.5,2.6,.5],s.brick),r(l,-4.2,u-.25,0,[1.4,3,.5],s.brick),r(l,.5,u-.25,0,[1.6,2.8,.5],s.brick),r(l,4.3,u-.25,0,[1.5,2.35,.5],s.brick),r(l,9.7,u-.25,0,[4.6,3.05,.5],s.brick),r(l,-5.95,u-.23,2.35,[2.1,.42,.58],s.brick),r(l,2.35,u-.23,2.1,[2.4,.38,.58],s.brick),r(l,h-.25,-3.8,0,[.5,2.7,5],s.brick),r(l,-h+.25,3.5,0,[.5,1.8,5.8],s.brick),r(l,-4.8,-1.2,2.85,[13.5,.16,6.4],s.corrugated,[0,0,.09]),r(l,7.7,2.1,1.95,[6,.18,4.8],s.corrugated,[0,0,-.24]),r(l,-1.5,-2,2.55,[.2,.22,11.8],s.timber,[0,.12,.04]),r(l,6.6,1.3,1.45,[.22,.2,7.4],s.timberLight,[0,-.18,-.22]),r(l,-8.3,u+1.1,.05,[3.8,.28,.5],s.timber,[0,0,.16]),r(l,8,u+1.8,.04,[4.6,.24,.42],s.brick,[0,0,-.1])}function a(l){let h=l.width/2,u=l.depth/2;for(let m of[-h+1.1,h-1.1])for(let x of[-u+1,u-1])r(l,m,x,0,[.42,2.55,.42],s.timber);r(l,0,-u+.9,2.28,[l.width,.28,.4],s.timberLight),r(l,0,u-.9,2.28,[l.width,.28,.4],s.timberLight),r(l,-h+.9,0,2.28,[.4,.28,l.depth],s.timberLight),r(l,h-.9,0,2.28,[.4,.28,l.depth],s.timber),r(l,0,1.8,2.38,[l.width-1,.16,5.2],s.timberLight),r(l,-3.9,-3,.25,[.24,2.85,.24],s.timberLight,[0,.58,.12]),r(l,3.9,3,.12,[.24,2.9,.24],s.timber,[0,-.56,-.08]);let d=2.55,f=2;for(let m=0;m<16;m++){let x=-h+.75+m*.78;if(m===6||m===7||m===11)continue;let g=m%5===0?1.25:f;r(l,x,-u+.35,d,[.68,g,.18],m%3?s.timber:s.timberLight)}for(let m=0;m<15;m++){let x=-h+.7+m*.78;if(m>=6&&m<=9)continue;let g=m%4===0?1.35:1.85;r(l,x,u-.32,d,[.62,g,.16],m%2?s.timberLight:s.timber)}for(let m of[-1,1])for(let x=0;x<10;x++){if(x===4||m>0&&x===7)continue;let g=-u+.55+x*1.05;r(l,m*(h-.3),g,d,[.16,x%3===0?1.35:f,.92],s.timber)}r(l,0,-u+.1,4.48,[l.width+.8,.18,5.6],s.corrugated,[0,0,.07]),r(l,3.5,1.3,4,[5.3,.16,4.8],s.corrugated,[0,0,-.28]),r(l,-4.8,0,4.34,[.2,.2,10],s.timberLight,[0,.16,.03]),r(l,-7.4,u+1.7,.02,[4.8,.22,.4],s.timber,[0,.08,.18]),r(l,6.5,u+2,.03,[5.6,.2,.36],s.timberLight,[0,-.12,-.12])}function c(l){let h=l.width/2,u=l.depth/2;r(l,0,0,0,[l.width-.6,.14,l.depth-.5],s.stone),r(l,-9.4,u-.22,0,[4,2.55,.44],s.brick),r(l,-5.9,u-.22,0,[1,2.8,.44],s.brick),r(l,-3.8,u-.22,0,[1,2.25,.44],s.brick),r(l,0,u-.22,0,[1,2.7,.44],s.brick),r(l,4.3,u-.22,0,[1,2.6,.44],s.brick),r(l,7.1,u-.22,0,[1.5,2.2,.44],s.brick),r(l,10.5,u-.22,0,[2.6,2.95,.44],s.brick),r(l,-4.85,u-.18,2.12,[2.4,.35,.5],s.brick),r(l,2.2,u-.18,2.15,[3.2,.4,.5],s.brick),r(l,-9,-u+.22,0,[6.2,2.8,.44],s.brick),r(l,0,-u+.22,0,[3.4,2.1,.44],s.brick),r(l,8.2,-u+.22,0,[7.8,2.6,.44],s.brick),r(l,-h+.22,-2.4,0,[.44,2.4,6.4],s.brick),r(l,h-.22,1.7,0,[.44,1.75,8.5],s.brick),r(l,4.4,-1.2,2.45,[13.4,.16,5.9],s.corrugated,[0,0,-.18]),r(l,-7.6,2.3,1.95,[4.8,.18,4.1],s.corrugated,[0,0,.22]);for(let d=0;d<10;d++){if(d===2||d===7)continue;let f=-8.4+d*.88,m=d%3===0?1.05:1.5;r(l,f,-u+.38,2.45,[.76,m,.15],d%2?s.timber:s.timberLight)}r(l,-1.5,-.6,2.1,[.2,.22,10.3],s.timber,[0,.22,.05]),r(l,8.2,4.8,.02,[4,.2,.42],s.timber,[0,.16,-.12])}for(let l of i.ruins)l.type==="brick-farm"?o(l):l.type==="timber-tower"?a(l):c(l)}var Ad=200,ll=15,Rd=120,Cd=138;function tE(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function eE(i,t){let e=Td(i);return{x:e.x+(t()-.5)*.65,z:e.z+(t()-.5)*.22}}function nE(i,t,e){let n=s=>(e()-.5)*s;if(i<12){let s=i%4,r=Math.floor(i/4);return{zone:"stop",x:t.stop.x-34+s*7.5+n(1),z:t.stop.z-2+r*1.1+n(.5),targetIndex:1}}if(i<24){let s=i-12,r=s%4,o=Math.floor(s/4),a=t.shop.z-t.shop.depth/2-1.8;return{zone:"shop",x:t.shop.x-8+r*5.3+n(.65),z:a+(o-1)*1.1+n(.25),targetIndex:2}}if(i<36){let s=i-24,r=s%4,o=Math.floor(s/4),a=t.hangars[0],c=a.z+a.depth/2+6.2;return{zone:"mikhtok",x:a.x-25+r*(50/3)+n(1),z:c+(o-1)*1.1+n(.25),targetIndex:0}}if(i<48){let s=i-36,r=s%4,o=Math.floor(s/4),a=t.school;return{zone:"road",x:a.x+a.width/2+9+r*3.2+n(.55),z:224.5+o*.7+n(.3),targetIndex:1}}return null}var xi=1e-8;function al(i,t,e,n){return i*n-t*e}function cl(i,t){let e=Math.max(0,Math.min(1,t));i.splits.some(n=>Math.abs(n.t-e)<1e-7)||i.splits.push({t:e,x:i.a.x+(i.b.x-i.a.x)*e,z:i.a.z+(i.b.z-i.a.z)*e})}function iE(i,t){let e=i.b.x-i.a.x,n=i.b.z-i.a.z,s=t.b.x-t.a.x,r=t.b.z-t.a.z,o=t.a.x-i.a.x,a=t.a.z-i.a.z,c=al(e,n,s,r);if(Math.abs(c)>xi){let u=al(o,a,s,r)/c,d=al(o,a,e,n)/c;u>=-xi&&u<=1+xi&&d>=-xi&&d<=1+xi&&(cl(i,u),cl(t,d));return}if(Math.abs(al(o,a,e,n))>xi)return;let l=e*e+n*n||1,h=s*s+r*r||1;for(let u of[t.a,t.b]){let d=((u.x-i.a.x)*e+(u.z-i.a.z)*n)/l;d>=-xi&&d<=1+xi&&cl(i,d)}for(let u of[i.a,i.b]){let d=((u.x-t.a.x)*s+(u.z-t.a.z)*r)/h;d>=-xi&&d<=1+xi&&cl(t,d)}}function q0(i=xe,t=ia){let e=[],n=[...i.roads.map(h=>h.points),...t.map(h=>h.points)];for(let h of n)for(let u=1;u<h.length;u++){let d={x:h[u-1][0],z:h[u-1][1]},f={x:h[u][0],z:h[u][1]};Math.hypot(f.x-d.x,f.z-d.z)<.01||e.push({a:d,b:f,splits:[{t:0,...d},{t:1,...f}]})}for(let h=0;h<e.length;h++){let u=e[h],d=Math.min(u.a.x,u.b.x)-.001,f=Math.max(u.a.x,u.b.x)+.001,m=Math.min(u.a.z,u.b.z)-.001,x=Math.max(u.a.z,u.b.z)+.001;for(let g=h+1;g<e.length;g++){let p=e[g];Math.max(p.a.x,p.b.x)<d||Math.min(p.a.x,p.b.x)>f||Math.max(p.a.z,p.b.z)<m||Math.min(p.a.z,p.b.z)>x||iE(u,p)}}let s=[],r=[],o=new Map,a=new Set,c=[],l=h=>{let u=`${Math.round(h.x*1e4)},${Math.round(h.z*1e4)}`;if(o.has(u))return o.get(u);let d=s.length;return s.push({x:h.x,z:h.z}),r.push([]),o.set(u,d),d};for(let h of e){h.splits.sort((d,f)=>d.t-f.t);let u=h.splits.filter((d,f,m)=>f===0||Math.abs(d.t-m[f-1].t)>1e-7);for(let d=1;d<u.length;d++){let f=l(u[d-1]),m=l(u[d]);if(f===m)continue;let x=f<m?`${f}:${m}`:`${m}:${f}`;if(a.has(x))continue;a.add(x);let g=Math.hypot(s[f].x-s[m].x,s[f].z-s[m].z);c.push({a:f,b:m,length:g}),r[f].push({to:m,length:g}),r[m].push({to:f,length:g})}}return{nodes:s,adjacency:r,edges:c}}function W0(i,t){let e=null,n=1/0;for(let s=0;s<t.edges.length;s++){let r=t.edges[s],o=t.nodes[r.a],a=t.nodes[r.b],c=a.x-o.x,l=a.z-o.z,h=c*c+l*l||1,u=Math.max(0,Math.min(1,((i.x-o.x)*c+(i.z-o.z)*l)/h)),d=o.x+c*u,f=o.z+l*u,m=(i.x-d)**2+(i.z-f)**2;m<n&&(n=m,e={edgeIndex:s,edge:r,t:u,x:d,z:f,distance:Math.sqrt(m)})}return e}function Id(i,t,e,n=7.5){if(!t||!e||!Number.isFinite(t.x)||!Number.isFinite(t.z)||!Number.isFinite(e.x)||!Number.isFinite(e.z)||i.edges.length===0)return[t];let s=W0(t,i),r=W0(e,i);if(!s||!r||s.distance>n||r.distance>n)return[t];let o=i.nodes.length,a=o+1,c=[...i.adjacency.map(g=>g.slice()),[],[]],l=(g,p,y)=>{c[g].push({to:p,length:y}),c[p].push({to:g,length:y})};l(o,s.edge.a,s.t*s.edge.length),l(o,s.edge.b,(1-s.t)*s.edge.length),l(a,r.edge.a,r.t*r.edge.length),l(a,r.edge.b,(1-r.t)*r.edge.length),s.edgeIndex===r.edgeIndex&&l(o,a,Math.abs(s.t-r.t)*s.edge.length);let h=new Array(c.length).fill(1/0),u=new Array(c.length).fill(-1),d=new Uint8Array(c.length);h[o]=0;for(let g=0;g<c.length;g++){let p=-1,y=1/0;for(let _=0;_<c.length;_++)!d[_]&&h[_]<y&&(p=_,y=h[_]);if(p<0||p===a)break;d[p]=1;for(let _ of c[p]){let v=y+_.length;v<h[_.to]&&(h[_.to]=v,u[_.to]=p)}}if(!Number.isFinite(h[a]))return[t];let f=[];for(let g=a;g>=0&&(f.push(g),g!==o);g=u[g]);if(f.at(-1)!==o)return[t];f.reverse();let m=[],x=g=>{let p=m.at(-1);(!p||Math.hypot(p.x-g.x,p.z-g.z)>.025)&&m.push({x:g.x,z:g.z})};x(t),x(s);for(let g of f)g<i.nodes.length&&x(i.nodes[g]);return x(r),x(e),m}function X0(i=xe,t=Ad,e=1347374169){let n=tE(e),s=i.lots,r=[];for(let o=0;o<t;o++){let a=s[o%s.length],c=eE(a,n),l=nE(o,i,n),h=l?.zone||"home",u=l||{x:c.x+(n()-.5)*1.8,z:c.z+(n()-.5)*1.8,targetIndex:1};r.push({id:`resident-${String(o+1).padStart(3,"0")}`,index:o,home:c,homeLotId:a.id,x:u.x,z:u.z,initialZone:h,currentLocation:h==="home"?0:h==="shop"?1:h==="mikhtok"?2:-1,targetIndex:u.targetIndex,moveSpeed:1.05+n()*.55,walkPhase:n()*Math.PI*2,yaw:0,dwellTimer:.5+n()*3.5,path:[],pathIndex:0,fleeing:!1,fleeTimer:0,fleeTarget:null,fleePath:null,fleePathIndex:0,active:!1,visual:null,styleIndex:Math.floor(n()*6)})}return r}function Y0(i,t,e,n=ll,s=Rd){let r=s*s;return i.map(o=>{let a=o.x-t,c=o.z-e;return{resident:o,distanceSquared:a*a+c*c}}).filter(o=>o.distanceSquared<=r).sort((o,a)=>o.distanceSquared-a.distanceSquared||o.resident.index-a.resident.index).slice(0,n).map(o=>o.resident)}var Yi=i=>i?.type==="melee"||i?.type==="tool",K=i=>document.getElementById(i),la=K("game"),fm=matchMedia("(pointer: coarse)").matches,bl=new URLSearchParams(window.location?.search||"").get("sandbox")==="test",Qe;try{Qe=new ko({canvas:la,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(i){throw document.body.innerHTML='<div style="padding:24px;color:#e4eee9;font:16px Arial">\u0414\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043F\u043E\u043B\u0438\u0433\u043E\u043D\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u044B\u0439 WebGL. \u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u0447\u0442\u043E WebView \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435.</div>',i}Qe.setPixelRatio(Math.min(window.devicePixelRatio||1,fm?1.35:1.7));Qe.setSize(window.innerWidth,window.innerHeight,!1);Qe.outputColorSpace=De;Qe.toneMapping=kc;Qe.toneMappingExposure=1.16;Qe.shadowMap.enabled=!0;Qe.shadowMap.type=ju;var Ot=new Vo;Ot.background=new jt(11451837);Ot.fog=new Tc(13358548,.00145);var ke=new Ze(74,window.innerWidth/window.innerHeight,.08,1200);ke.rotation.order="YXZ";Ot.add(ke);var kt=new rl({gravity:new w(0,-9.82,0),allowSleep:!0});kt.broadphase=new tl(kt);kt.solver=new na;kt.solver.iterations=12;kt.solver.tolerance=.001;kt.defaultContactMaterial.friction=.62;kt.defaultContactMaterial.restitution=.08;kt.defaultContactMaterial.contactEquationStiffness=1e7;kt.defaultContactMaterial.contactEquationRelaxation=3;var po=new ki("concrete"),ba=new ki("test-props"),Dl=new ki("operator"),oE=new ki("mannequin"),Na=1,oo=2,pm=4,aE=8,mo=Na|oo|pm|aE;kt.addContactMaterial(new gi(po,ba,{friction:.75,restitution:.06,contactEquationStiffness:1e7,contactEquationRelaxation:3}));kt.addContactMaterial(new gi(ba,ba,{friction:.55,restitution:.09}));kt.addContactMaterial(new gi(Dl,po,{friction:.03,restitution:0}));kt.addContactMaterial(new gi(Dl,ba,{friction:.18,restitution:0}));kt.addContactMaterial(new gi(Dl,oE,{friction:.35,restitution:.02}));var ni=[],$i=[],mm=[],Qr=[],cE=[],lE=[],kd=null;function go(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function gm(i,t,e,n){let r=document.createElement("canvas");r.width=r.height=512;let o=r.getContext("2d",{willReadFrequently:!0}),a=[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],c=go(t),l=o.createImageData(512,512);for(let u=0;u<l.data.length;u+=4){let d=(c()-.5)*20;l.data[u]=Math.max(0,Math.min(255,a[0]+d-2)),l.data[u+1]=Math.max(0,Math.min(255,a[1]+d)),l.data[u+2]=Math.max(0,Math.min(255,a[2]+d+4)),l.data[u+3]=255}o.putImageData(l,0,0);for(let u=0;u<95;u++){let d=c()*512,f=c()*512,m=8+c()*48;o.fillStyle=c()>.55?"rgba(126,157,166,.075)":"rgba(255,255,255,.11)",o.beginPath(),o.ellipse(d,f,m*(.8+c()*.8),m*(.25+c()*.48),c()*Math.PI,0,Math.PI*2),o.fill()}for(let u=0;u<520;u++){let d=c()*512,f=c()*512;o.fillStyle=c()>.58?"rgba(102,136,148,.22)":"rgba(255,255,255,.68)",o.fillRect(d,f,1+c()*2.2,1+c()*1.4)}let h=new ui(r);return h.colorSpace=De,h.wrapS=h.wrapT=ls,h.repeat.set(e,n),h.anisotropy=Math.min(Qe.capabilities.getMaxAnisotropy(),8),h}function hE(i){let n=document.createElement("canvas");n.width=512,n.height=256;let s=n.getContext("2d",{willReadFrequently:!0}),r=go(i),o=s.createImageData(512,256);for(let c=0;c<256;c++){let l=c/256,h=Math.min(Math.abs(l-.3),Math.abs(l-.7)),u=h<.075?-30*(1-h/.075):0;for(let d=0;d<512;d++){let f=(r()-.5)*30+u,m=(c*512+d)*4;o.data[m]=Math.max(0,Math.min(255,122+f)),o.data[m+1]=Math.max(0,Math.min(255,105+f*.9)),o.data[m+2]=Math.max(0,Math.min(255,82+f*.72)),o.data[m+3]=255}}s.putImageData(o,0,0);for(let c=0;c<700;c++){s.fillStyle=r()>.55?"rgba(239,242,235,.34)":"rgba(49,44,37,.22)";let l=r()*512,h=r()*256;s.fillRect(l,h,1+r()*4,1+r()*2)}for(let c of[75,179])s.strokeStyle="rgba(54,48,40,.34)",s.lineWidth=9,s.beginPath(),s.moveTo(0,c),s.bezierCurveTo(150,c-7,340,c+7,512,c),s.stroke();let a=new ui(n);return a.colorSpace=De,a.wrapS=a.wrapT=ls,a.anisotropy=Math.min(Qe.capabilities.getMaxAnisotropy(),8),a}function uE(){let i=document.createElement("canvas");i.width=128,i.height=96;let t=i.getContext("2d");t.fillStyle="#352d25",t.fillRect(0,0,128,96),t.fillStyle="#8aa9aa",t.fillRect(9,8,110,80),t.fillStyle="rgba(232,243,239,.35)",t.fillRect(14,12,46,70),t.fillStyle="#4b4032",t.fillRect(61,8,6,80),t.fillRect(9,45,110,6);let e=new ui(i);return e.colorSpace=De,e}function dE(){let i=document.createElement("canvas");i.width=1024,i.height=256;let t=i.getContext("2d");t.translate(i.width,0),t.scale(-1,1),t.fillStyle="#f2f1e8",t.fillRect(0,0,i.width,i.height),t.fillStyle="#c9343d",t.fillRect(0,0,216,i.height),t.fillStyle="#1d7145",t.fillRect(216,0,i.width-216,i.height),t.fillStyle="#e9f0e6",t.font="bold 198px Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("5",108,128),t.font="bold 94px Arial, sans-serif",t.fillText("\u041F\u042F\u0422\u0401\u0420\u041E\u0427\u041A\u0410",620,130),t.fillStyle="#c9343d",t.fillRect(216,224,i.width-216,18);let e=new ui(i);return e.colorSpace=De,e.anisotropy=Math.min(Qe.capabilities.getMaxAnisotropy(),8),e}function fE(i){let t=document.createElement("canvas");t.width=512,t.height=256;let e=t.getContext("2d");e.fillStyle="#c0b3a0",e.fillRect(0,0,t.width,t.height);let n=go(i),s=64,r=26,o=5;for(let c=0;c<10;c++){let l=c%2?-s/2:0;for(let h=-1;h<10;h++){let u=Math.floor(105+n()*42);e.fillStyle=`rgb(${u},${Math.max(0,u-25)},${Math.max(0,u-38)})`;let d=l+h*s+o/2,f=c*r+o/2;e.fillRect(d,f,s-o,r-o),e.fillStyle="rgba(255,235,213,.15)",e.fillRect(d+3,f+3,s-o-6,2)}}let a=new ui(t);return a.colorSpace=De,a.wrapS=a.wrapT=ls,a.anisotropy=Math.min(Qe.capabilities.getMaxAnisotropy(),8),a}function pE(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(227,235,234,.55)"),e.addColorStop(.45,"rgba(227,235,234,.28)"),e.addColorStop(1,"rgba(227,235,234,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new ui(i)}function ha(i,t){let s=document.createElement("canvas");s.width=512,s.height=256;let r=s.getContext("2d",{willReadFrequently:!0}),o=[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],a=go(t),c=r.createImageData(512,256);for(let h=0;h<256;h++){let u=Math.sin(h*.14)*4+Math.sin(h*.037)*7;for(let d=0;d<512;d++){let f=u+(a()-.5)*18,m=(h*512+d)*4;c.data[m]=Math.max(0,Math.min(255,o[0]+f)),c.data[m+1]=Math.max(0,Math.min(255,o[1]+f*.82)),c.data[m+2]=Math.max(0,Math.min(255,o[2]+f*.62)),c.data[m+3]=255}}r.putImageData(c,0,0);for(let h=0;h<175;h++){let u=a()*256;r.strokeStyle=a()>.5?"rgba(39,25,13,.19)":"rgba(255,226,171,.12)",r.lineWidth=a()*1.4+.25,r.beginPath(),r.moveTo(0,u),r.bezierCurveTo(512*.33,u+(a()-.5)*12,512*.67,u+(a()-.5)*9,512,u+(a()-.5)*6),r.stroke()}let l=new ui(s);return l.colorSpace=De,l.wrapS=l.wrapT=ls,l.repeat.set(1.5,1),l.anisotropy=Math.min(Qe.capabilities.getMaxAnisotropy(),8),l}var Jd=ha("#775a3d",319);Jd.repeat.set(5.4,1.8);var xm=gm("#e2e9e9",81,4.6,3.5),Qd=ha("#51402d",441);Qd.repeat.set(4.2,1.8);var ym=Jd.clone();ym.colorSpace=dn;var tf=xm.clone();tf.colorSpace=dn;var vm=Qd.clone();vm.colorSpace=dn;var iA=new $({map:Jd,bumpMap:ym,bumpScale:.045,color:16777215,roughness:.94,metalness:.01}),sA=new $({map:xm,bumpMap:tf,bumpScale:.025,color:15857140,roughness:.98,metalness:0}),rA=new $({map:Qd,bumpMap:vm,bumpScale:.035,color:12956050,roughness:.96}),oA=new $({color:3160636,roughness:.9}),zl=new $({color:3419429,roughness:.72,metalness:.18}),aA=new $({color:14002773,roughness:.8,metalness:.06}),cA=new $({color:12700869,roughness:.9,emissive:1581084,emissiveIntensity:.15}),lA=new $({color:4929576,roughness:.9}),El=new $({color:16054263,roughness:.96,metalness:0,bumpMap:tf,bumpScale:.018}),ef=gm("#e2e7df",512,1,1);ef.repeat.set(28,42);var _m=ef.clone();_m.colorSpace=dn;var mE=new $({map:ef,bumpMap:_m,bumpScale:.028,color:16777215,vertexColors:!0,roughness:.98}),Mm=hE(2048);Mm.repeat.set(1,1);var gE=new $({map:Mm,color:14801095,roughness:.98,side:Pe,polygonOffset:!0,polygonOffsetFactor:-1}),$0=new $({color:10061939,roughness:1,side:Pe}),xE=new $({color:12172213,roughness:.98,side:Pe,polygonOffset:!0,polygonOffsetFactor:-2}),xl=new $({color:7898461,roughness:1,side:Pe}),Pd=new $({color:10193247,roughness:1,side:Pe}),hA=new $({color:7364682,roughness:1}),yE=new $({color:2847111,roughness:.24,metalness:.08,transparent:!0,opacity:.92}),er=new $({color:9409165,roughness:.96}),wm=pE();wm.colorSpace=De;Ot.add(new Xo(15201011,5592133,1.55));Ot.add(new Hc(12832975,.55));var Nn=new $o(16773336,2.3);Nn.position.set(-280,420,180);Nn.castShadow=!0;Nn.shadow.mapSize.set(1536,1536);Nn.shadow.camera.left=-360;Nn.shadow.camera.right=360;Nn.shadow.camera.top=470;Nn.shadow.camera.bottom=-470;Nn.shadow.camera.near=5;Nn.shadow.camera.far=1200;Nn.shadow.bias=-18e-5;Nn.shadow.normalBias=.03;Nn.shadow.radius=5;Ot.add(Nn);var Bl=1320,Sl=new Ne,yl=new Float32Array(Bl*3),Tl=new Float32Array(Bl*2),sa=go(240126);for(let i=0;i<Bl;i++)yl[i*3]=(sa()-.5)*72,yl[i*3+1]=(sa()-.5)*44,yl[i*3+2]=-2.5-sa()*48,Tl[i*2]=-3.8-sa()*6.6,Tl[i*2+1]=5+sa()*8.5;Sl.setAttribute("position",new fn(yl,3));var vE=new Go({color:16054519,size:.12,transparent:!0,opacity:.74,depthWrite:!1,sizeAttenuation:!0}),nf=new Rc(Sl,vE);nf.frustumCulled=!1;nf.renderOrder=5;ke.add(nf);function _E(i){let t=Sl.attributes.position.array;for(let e=0;e<Bl;e++){let n=e*3;t[n]+=Tl[e*2]*i,t[n+1]-=Tl[e*2+1]*i,t[n]<-38&&(t[n]=38),t[n+1]<-24&&(t[n+1]=24)}Sl.attributes.position.needsUpdate=!0}function Fl(i,t,e=12774368,n=!1){let s=new lt(new It(1.05,.1,.25),zl);s.position.set(i,5.66,t),s.castShadow=!1,s.receiveShadow=!0,Ot.add(s);let r=new lt(new It(.78,.035,.13),new $({color:e,emissive:e,emissiveIntensity:1.35,roughness:.3}));if(r.position.set(i,5.585,t),Ot.add(r),n){let o=new Oc(e,42,12,Math.PI/3,.58,1.6);o.position.set(i,5.35,t),o.target.position.set(i,.15,t),o.castShadow=!0,o.shadow.mapSize.set(512,512),o.shadow.camera.near=.2,o.shadow.camera.far=13,o.shadow.bias=-35e-5,o.shadow.normalBias=.035,o.shadow.radius=4,Ot.add(o,o.target)}else{let o=new Hr(e,8.5,8.4,2);o.position.set(i,5.35,t),Ot.add(o)}}Fl(-4.3,-2.8,11787478,!0);Fl(.4,-2.7,13886159,!1);Fl(4.4,-2.5,11063509,!0);Fl(0,4.25,10141120,!1);function Mi(i,t,e=po,n=[0,0,0]){let s=new Pt({mass:0,material:e,collisionFilterGroup:Na,collisionFilterMask:mo});return s.addShape(new pn(new w(t[0],t[1],t[2]))),s.position.set(i[0],i[1],i[2]),n.some(r=>r!==0)&&s.quaternion.setFromEuler(n[0],n[1],n[2],"XYZ"),kt.addBody(s),s}function ME(){let e=_e.minX,n=_e.maxX,s=_e.minZ,r=_e.maxZ,o=[],a=[],c=[],l=[],h=new jt("#c6d0c4"),u=new jt("#d0d1c8"),d=new jt("#c8c9bf");for(let x=0;x<=144;x++){let g=s+(r-s)*x/144;for(let p=0;p<=124;p++){let y=e+(n-e)*p/124,_=Zt(y);o.push(y,_-.012,g);let v;if(_<=2?v=h.clone().lerp(u,_/2):v=u.clone().lerp(d,(_-2)/2),a.push(v.r,v.g,v.b),c.push((y-e)/(n-e),(g-s)/(r-s)),p<124&&x<144){let R=x*125+p,S=R+1,A=R+124+1,C=A+1;l.push(R,A,S,S,A,C)}}}let f=new Ne;f.setAttribute("position",new Qt(o,3)),f.setAttribute("color",new Qt(a,3)),f.setAttribute("uv",new Qt(c,2)),f.setIndex(l),f.computeVertexNormals();let m=new lt(f,mE);m.receiveShadow=!0,m.userData.groundSurface=!0,kd=m,Ot.add(m);for(let x of k0()){let g=new Pt({mass:0,material:po,collisionFilterGroup:Na,collisionFilterMask:mo});g.addShape(new pn(new w(x.width/2+.14,.5,(r-s)/2))),g.position.set(x.centerX,x.height-.5,0),g.quaternion.setFromEuler(0,0,Math.atan(x.slope),"XYZ"),kt.addBody(g)}kt.broadphase.dirty=!0}ME();var bs=[ha("#846744",213),ha("#725a40",932),ha("#9a7950",612)],to=bs.map(i=>{let t=i.clone();return t.colorSpace=dn,t}),Vd=[new $({map:bs[0],bumpMap:to[0],bumpScale:.035,color:8808262,roughness:.88}),new $({map:bs[1],bumpMap:to[1],bumpScale:.035,color:7296829,roughness:.91}),new $({map:bs[2],bumpMap:to[2],bumpScale:.035,color:10123343,roughness:.83})],Ul=fE(483);Ul.repeat.set(2.6,1.45);var sf=Ul.clone();sf.colorSpace=dn;var Nd=new $({map:Ul,bumpMap:sf,bumpScale:.035,color:15852498,roughness:.94}),wE=new $({map:Ul,bumpMap:sf,bumpScale:.06,color:10982784,roughness:.98}),eo=[new $({color:3686975,roughness:.82,metalness:.16}),new $({color:6705469,roughness:.94,metalness:.02}),new $({color:5717041,roughness:.88,metalness:.04}),new $({color:5858410,roughness:.48,metalness:.38})],uA=[new $({color:3234639,roughness:.82}),new $({color:14207401,roughness:.9})],qs=new $({color:15131868,roughness:.88}),bE=new $({color:2060359,roughness:.72}),dA=new $({color:13186621,roughness:.68}),Gi=new $({color:3753545,roughness:.65,metalness:.28}),j0=new $({color:8890797,roughness:.2,metalness:.06,transparent:!0,opacity:.58,depthWrite:!1,side:Pe}),EE=new $({color:5529180,roughness:.76,metalness:.22}),Xs=new $({color:6845296,roughness:.7,metalness:.48}),SE=new $({color:5332573,roughness:.64,metalness:.5}),Gd=new $({color:3160892,roughness:.62,metalness:.54}),TE=new $({color:5326136,roughness:.96}),AE=new $({color:7430219,roughness:.94}),RE=new $({color:3490375,roughness:.8,metalness:.42,side:Pe}),no=new $({color:6705209,roughness:.93}),CE=new $({color:4799021,roughness:.9}),IE=new $({map:uE(),roughness:.54,metalness:.05,side:Pe}),rf=new $({color:5661021,roughness:.7,metalness:.42}),bm=new $({color:7685940,roughness:.86,metalness:.18}),PE=new $({color:4611146,roughness:.96}),NE=new $({color:13358802,roughness:.94}),LE=new $({color:5850418,roughness:.96}),DE=new $({color:3156772,roughness:.75,metalness:.15}),zE=[new $({color:7383713,roughness:.23,metalness:.05}),new $({color:9940578,roughness:.27,metalness:.04}),new $({color:8951472,roughness:.25,metalness:.08})],BE=[new $({color:4545884,roughness:.65,metalness:.38}),new $({color:7296321,roughness:.7,metalness:.35})],Al=new $({color:10660256,roughness:.44,metalness:.64}),FE=new $({color:9139286,roughness:.91});function of(i,t){i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.userData.gameMeta=t)}),i.userData.gameMeta=t,$i.push(i)}function UE(i,t){i.body&&(kt.removeBody(i.body),i.body=null);let e=Math.max(1.5,.9*t);for(let r of kt.bodies){if(r.mass<=0)continue;let o=r.position.x-i.x,a=r.position.z-i.z;o*o+a*a<=e*e&&r.position.y<i.baseY+2.2&&r.wakeUp()}if(i.meta.isEmpty){kt.broadphase.dirty=!0;return}let n=.48*t,s=new Pt({mass:0,material:po,collisionFilterGroup:Na,collisionFilterMask:mo});s.addShape(new Yr(n)),s.position.set(i.x,i.baseY+n,i.z),s.gameMeta={kind:"snowdrift",name:"\u0421\u0423\u0413\u0420\u041E\u0411",drift:i},kt.addBody(s),i.body=s,kt.broadphase.dirty=!0}function Em(i){let t=Math.max(0,i.amount),e=Math.cbrt(t);i.meta.isEmpty=t<=.012,i.group.visible=!i.meta.isEmpty,i.group.scale.setScalar(e),i.group.position.y=i.baseY+.02+.07*e,UE(i,e)}function jr(i,t,e=1){let n=new ee,s=new lt(new Ur(1,1),El);s.scale.set(.88,.38,.76),s.position.set(0,.31,0),n.add(s);for(let[a,c,l,h,u,d]of[[-.37,.18,.08,.45,.25,.48],[.34,.17,-.1,.48,.23,.44],[.04,.24,.35,.43,.27,.38]]){let f=new lt(new Ur(.68,1),El);f.position.set(a,c,l),f.scale.set(h,u,d),n.add(f)}n.position.set(i,Zt(i),t),Ot.add(n);let r={kind:"snowdrift",name:"\u0421\u0423\u0413\u0420\u041E\u0411",range:4.5,isEmpty:!1},o={group:n,amount:Math.max(0,e),meta:r,x:i,z:t,baseY:Zt(i),body:null};return r.drift=o,of(n,r),lE.push(o),Em(o),o}function nr(i,t,e,n,s,r=0,o={}){let a=new Pt({mass:e,material:ba,position:new w(n[0],n[1],n[2]),collisionFilterGroup:pm,collisionFilterMask:mo,linearDamping:o.linearDamping??.08,angularDamping:o.angularDamping??.18,allowSleep:!0,sleepSpeedLimit:.07,sleepTimeLimit:.55});if(Array.isArray(t))for(let c of t)a.addShape(c.shape,c.offset||new w);else a.addShape(t);return a.quaternion.setFromEuler(0,r,0,"YZX"),a.gameMeta={...i,body:a,initialMass:e,isHeld:!1,isStored:!1,originalCollisionFilterMask:a.collisionFilterMask,originalLinearDamping:a.linearDamping,originalAngularDamping:a.angularDamping,lastVelocity:{x:0,y:0,z:0}},kt.addBody(a),s.position.copy(a.position),s.quaternion.copy(a.quaternion),s.userData.gameMeta=a.gameMeta,Ot.add(s),of(s,a.gameMeta),ni.push({body:a,visual:s}),a}function OE(i,t,e,n){let s=new ee,r=Math.abs(Math.floor(n))%bs.length,o=new $({map:bs[r],bumpMap:to[r],bumpScale:.04,color:n,roughness:.9,metalness:.03}),a=new lt(new It(i,t,e),o);s.add(a);let c=Math.max(.045,i*.075),l=Math.max(.045,t*.075);for(let h of[-1,1])for(let u of[-1,1]){let d=new lt(new It(c,t+.015,c),DE);d.position.set(h*(i/2-c/2),0,u*(e/2-c/2)),s.add(d)}for(let h of[-1,1]){let u=new lt(new It(i*.88,l,e+.012),Vd[2]);u.position.y=h*(t/2-l/2),s.add(u)}return s}function HE(i,t,e){let n=new ee,s=new lt(new nn(i*.9,i,t,20,1),BE[e]);n.add(s);let r=new lt(new Zn(i*.92,.025,6,24),Al);r.rotation.x=Math.PI/2,r.position.y=t*.31,n.add(r);let o=r.clone();o.position.y=-t*.31,n.add(o);let a=new lt(new Zn(i*.96,.018,5,24),Al);a.rotation.x=Math.PI/2,a.position.y=-t*.09,n.add(a);let c=new lt(new nn(i*.85,i*.85,.035,20),zl);return c.position.y=t/2-.015,n.add(c),n}function kE(i){let t=new ee,e=[new ht(0,-.22),new ht(.073,-.22),new ht(.103,-.19),new ht(.108,-.12),new ht(.103,-.015),new ht(.096,.055),new ht(.071,.105),new ht(.048,.125),new ht(.041,.15),new ht(.041,.218),new ht(.05,.228),new ht(.05,.246),new ht(0,.246)],n=new lt(new qo(e,16),zE[i]);t.add(n);let s=new lt(new nn(.049,.047,.027,16),Al);s.position.y=.215,t.add(s);let r=new lt(new nn(.044,.044,.038,12),new $({color:2504244,roughness:.45}));r.position.y=.257,t.add(r);let o=new lt(new nn(.105,.105,.055,16),new $({color:14145468,roughness:.6}));return o.position.y=-.045,t.add(o),t}function VE(i,t,e,n){let s=new ee,r=new lt(new It(i,e,t),FE);s.add(r);let o=new $({color:n?5655353:5326645,roughness:.9});for(let a of[-t*.28,t*.28]){let c=new lt(new It(i*.84,.003,.009),o);c.position.set(0,e/2+.002,a),s.add(c)}for(let a of[-i*.39,i*.39])for(let c of[-t*.29,t*.29]){let l=new lt(new nn(.012,.012,.006,8),Al);l.rotation.x=Math.PI/2,l.position.set(a,0,c),s.add(l)}return s}function GE(){let i=new ee,t=new $({map:bs[2],bumpMap:to[2],bumpScale:.025,color:9204045,roughness:.86}),e=new $({color:7898497,roughness:.42,metalness:.68}),n=new lt(new nn(.022,.029,.96,10),t);n.rotation.z=Math.PI/2,n.position.set(-.09,.005,0),i.add(n);let s=new lt(new Zn(.052,.012,6,14),t);s.position.set(-.55,.01,0),s.rotation.x=Math.PI/2,i.add(s);let r=new lt(new It(.11,.065,.075),e);r.position.set(.35,-.005,0),i.add(r);let o=new lt(new It(.35,.045,.36),e);o.position.set(.49,-.008,0),i.add(o);let a=new lt(new It(.28,.012,.035),new $({color:10332835,roughness:.38,metalness:.75}));return a.position.set(.48,.018,0),i.add(a),i}function hl(i,t,e,n,s,r=0){let[o,a,c]=e,l=OE(o,a,c,s);return nr({kind:"prop",type:"\u042F\u0429\u0418\u041A",name:i,mass:n,detail:`${n.toFixed(1)} \u041A\u0413 \xB7 \u0414\u0415\u0420\u0415\u0412\u041E`,description:"\u0423\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0439 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0439 \u0438\u0441\u043F\u044B\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u044F\u0449\u0438\u043A \u0441 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u043D\u0430\u043A\u043B\u0430\u0434\u043A\u0430\u043C\u0438.",range:4.5,inventoryWidth:o>.88?3:2,inventoryHeight:a>.88?3:2,inventoryIcon:"\u25A3"},new pn(new w(o/2,a/2,c/2)),n,t,l,r)}function Ld(i,t,e,n,s,r,o=0){let a=HE(e,n,r),c=new Ws(e*.9,e,n,12);return nr({kind:"prop",type:"\u0411\u041E\u0427\u041A\u0410",name:i,mass:s,detail:`${s.toFixed(0)} \u041A\u0413 \xB7 \u0422\u042F\u0416\u0401\u041B\u0410\u042F \u0421\u0422\u0410\u041B\u042C`,description:"\u0422\u044F\u0436\u0451\u043B\u0430\u044F \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0442\u0430\u0440\u0430; \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u043A\u0440\u0443\u043F\u043D\u044B\u0439 \u043E\u0431\u044A\u0451\u043C \u0438 \u0440\u0435\u0437\u043A\u043E \u043D\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u043C\u044B\u0439 \u0432\u0435\u0441.",range:4.4,inventoryWidth:2,inventoryHeight:3,inventoryIcon:"\u25C9"},c,s,t,a,o,{angularDamping:.23})}function ul(i,t,e,n=0){let s=kE(e),r=[{shape:new Ws(.103,.103,.33,10),offset:new w(0,-.055,0)},{shape:new Ws(.043,.043,.19,9),offset:new w(0,.165,0)}];return nr({kind:"prop",type:"\u0411\u0423\u0422\u042B\u041B\u041A\u0410",name:i,mass:.38,detail:"0.38 \u041A\u0413 \xB7 \u041B\u0401\u0413\u041A\u041E\u0415 \u0421\u0422\u0415\u041A\u041B\u041E",description:"\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0442\u0435\u043A\u043B\u044F\u043D\u043D\u044B\u0439 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0439 \u0444\u043B\u0430\u043A\u043E\u043D. \u041F\u043E\u0447\u0442\u0438 \u043D\u0435 \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u043E\u0431\u0449\u0438\u0439 \u0432\u0435\u0441.",range:3.8,inventoryWidth:1,inventoryHeight:1,inventoryIcon:"\u25C9"},r,.38,t,s,n,{linearDamping:.035,angularDamping:.12})}function Z0(i,t,e,n,s,r,o=0){let a=VE(e,n,s,Math.abs(o)>.1?1:0);return nr({kind:"prop",type:"\u0414\u041E\u0421\u041A\u0410",name:i,mass:r,detail:`${r.toFixed(1)} \u041A\u0413 \xB7 \u0421\u041E\u0421\u041D\u0410`,description:"\u0414\u043B\u0438\u043D\u043D\u0430\u044F \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u0434\u043E\u0441\u043A\u0430; \u0432 \u0440\u044E\u043A\u0437\u0430\u043A\u0435 \u0443\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E.",range:4.3,inventoryWidth:1,inventoryHeight:4,inventoryIcon:"\u25AC"},new pn(new w(e/2,s/2,n/2)),r,t,a,o,{angularDamping:.21})}function WE(i,t,e=0){let n=GE();return nr({kind:"prop",type:"\u041B\u041E\u041F\u0410\u0422\u0410",name:i,mass:3.6,detail:"3.6 \u041A\u0413 \xB7 \u0421\u0422\u0410\u041B\u042C / \u0414\u0415\u0420\u0415\u0412\u041E",description:"\u041F\u043E\u043B\u0435\u0432\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0441\u043E \u0441\u0442\u0430\u043B\u044C\u043D\u044B\u043C \u0448\u0442\u044B\u043A\u043E\u043C \u0438 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u043E\u0439 \u0440\u0443\u043A\u043E\u044F\u0442\u044C\u044E. \u0420\u0430\u0437\u043C\u0435\u0440 2 \xD7 3 \u044F\u0447\u0435\u0439\u043A\u0438.",range:4.5,inventoryWidth:2,inventoryHeight:3,inventoryIcon:"\u2692"},new pn(new w(.64,.07,.2)),3.6,t,n,e,{angularDamping:.3})}function qE(){let i=new ee,t=new $({map:bs[1],bumpMap:to[1],bumpScale:.025,color:7493434,roughness:.96}),e=new $({color:12624250,roughness:.96}),n=new lt(new nn(.083,.09,.66,10),t);n.rotation.z=Math.PI/2,i.add(n);for(let s of[-1,1]){let r=new lt(new Bi(.082,10),e);r.position.x=s*.331,r.rotation.y=s*Math.PI/2,i.add(r)}return i}function dl(i,t,e=0){let s=qE();return nr({kind:"firewood",type:"\u0414\u0420\u041E\u0412\u0410",name:i,mass:1.35,detail:`${1.35.toFixed(1)} \u041A\u0413 \xB7 \u0421\u0423\u0425\u041E\u0415 \u041F\u041E\u041B\u0415\u041D\u041E`,description:"\u041F\u043E\u043B\u0435\u043D\u043E \u0434\u043B\u044F \u0440\u0430\u0441\u0442\u043E\u043F\u043A\u0438 \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0447\u0438. \u0412\u043E\u0437\u044C\u043C\u0438\u0442\u0435 \u0435\u0433\u043E \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0440\u044F\u0434\u043E\u043C \u0441 \u043F\u0435\u0447\u044C\u044E.",range:4.5,inventoryWidth:1,inventoryHeight:2,inventoryIcon:"\u25A4"},new pn(new w(.34,.09,.09)),1.35,t,s,e,{angularDamping:.28})}var Je=new L(-18,Zt(-18),108),Sm=[],Tm=[],Am=[],Rm=[],Cm=[[],[],[]],Im=[[],[]],Wd=new Map,oa=[];function io(i,t,e,n){i.push({position:t.clone(),quaternion:e.clone(),scale:n.clone()})}function so(i,t,e,n=!0){if(!e.length)return null;let s=new zr(i,t,e.length);s.castShadow=n,s.receiveShadow=!0,s.instanceMatrix.setUsage(Nr);let r=new he;for(let o=0;o<e.length;o++){let a=e[o];r.compose(a.position,a.quaternion,a.scale),s.setMatrixAt(o,r)}return s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere(),Ot.add(s),s}function ra(i,t,e,n,s="south",r=2.8){let o=e/2,a=n/2,c=[{name:"north",a:[-o,-a],b:[o,-a],axis:"x"},{name:"south",a:[-o,a],b:[o,a],axis:"x"},{name:"west",a:[-o,-a],b:[-o,a],axis:"z"},{name:"east",a:[o,-a],b:[o,a],axis:"z"}],l=new Pt({mass:0,material:po,collisionFilterGroup:Na,collisionFilterMask:mo});for(let h of c){let u=i+h.a[0],d=t+h.a[1],f=i+h.b[0],m=t+h.b[1],x=f-u,g=m-d,p=Math.hypot(x,g),y=h.name===s,_=y?(p-r)/2:p,v=y?(p+r)/2:p,R=y?[[0,_],[v,p]]:[[0,p]],S=A=>{let C=A/p;return{x:u+x*C,z:d+g*C}};for(let[A,C]of R){if(C-A<.3)continue;let b=S(A),M=S(C),P=S((A+C)/2),H=Zt(P.x),N=C-A,z=new L(M.x-b.x,Zt(M.x)-Zt(b.x),M.z-b.z).normalize(),U=new en().setFromUnitVectors(new L(1,0,0),z);for(let Bt of[.28,.68,1.08]){let X=new L(b.x,Zt(b.x)+Bt,b.z),rt=new L(M.x,Zt(M.x)+Bt,M.z),wt=X.clone().add(rt).multiplyScalar(.5),dt=new L(N,1,1);io(Am,wt,U,dt)}let D=S(A),Q=S(C),V=[A,C];for(let Bt=A+4;Bt<C-.25;Bt+=4)V.push(Bt);for(let Bt of V){let X=S(Bt),rt=Zt(X.x);io(Sm,new L(X.x,rt+.67,X.z),new en,new L(1,1,1))}for(let Bt=A+1.8;Bt<C-.7;Bt+=1.8){let X=S(Bt),rt=Zt(X.x);io(Tm,new L(X.x,rt+.53,X.z),new en,new L(1,1,1))}let J=h.axis==="x"?new w(N/2,.62,.085):new w(.085,.62,N/2),ut=new pn(J),pt=new w(P.x,H+.62,P.z),ot=new Oe;h.axis==="x"&&ot.setFromEuler(0,0,Math.atan2(Zt(M.x)-Zt(b.x),M.x-b.x),"XYZ"),l.addShape(ut,pt,ot)}}l.shapes.length&&kt.addBody(l)}function XE(){so(new It(.16,1.34,.16),no,Sm),so(new It(.075,1,.12),no,Tm),so(new It(1,.13,.12),no,Am)}function Ut(i,t,e,n=!1,s=[0,0,0]){let r=Wd.get(e);r||(r=[],Wd.set(e,r));let o={position:new L(t[0],t[1],t[2]),scale:new L(i[0],i[1],i[2]),rotation:[...s],bulletSurface:n};return r.push(o),{userData:{},instance:o}}function YE(i,t,e,n=1.12,s=.86){oa.push({position:new L(i,t,e),scale:new L(n,s,1),quaternion:new en})}function $E(){let i=new It(1,1,1);for(let[t,e]of Wd){let n=new zr(i,t,e.length),s=new he;for(let r=0;r<e.length;r++){let o=e[r],a=new en().setFromEuler(new vn(...o.rotation));s.compose(o.position,a,o.scale),n.setMatrixAt(r,s)}n.castShadow=!0,n.receiveShadow=!0,n.instanceMatrix.setUsage(Nr),n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),Ot.add(n),e.some(r=>r.bulletSurface)&&(n.userData.bulletSurface=!0,mm.push(n))}if(oa.length){let t=new zr(new hi(1,1),IE,oa.length),e=new he;for(let n=0;n<oa.length;n++){let s=oa[n];e.compose(s.position,s.quaternion,s.scale),t.setMatrixAt(n,e)}t.castShadow=!1,t.receiveShadow=!0,t.instanceMatrix.setUsage(Nr),t.instanceMatrix.needsUpdate=!0,t.computeBoundingSphere(),Ot.add(t)}}function Pm(i,t,e){let n=i/2,s=t/2,r=[-n,0,-s,0,e,-s,n,0,-s,-n,0,s,0,e,s,n,0,s],o=new Ne;return o.setAttribute("position",new Qt(r,3)),o.setIndex([0,1,4,0,4,3,1,2,5,1,5,4,0,2,1,3,4,5]),o.computeVertexNormals(),o}function jE(i,t,e){let n=i/2,s=t/2,r=[[-n,0],[-n*.32,e*.42],[0,e],[n*.32,e*.42],[n,0]],o=[];for(let[l,h]of r)o.push(l,h,-s);for(let[l,h]of r)o.push(l,h,s);let a=[];for(let l=0;l<4;l++)a.push(l,l+1,6+l,l,6+l,5+l);a.push(0,4,2,5,7,9);let c=new Ne;return c.setAttribute("position",new Qt(o,3)),c.setIndex(a),c.computeVertexNormals(),c}function ZE(i,t,e){let n=i/2,s=t/2,r=[-n,0,-s,n,0,-s,n,0,s,-n,0,s,0,e,0],o=new Ne;return o.setAttribute("position",new Qt(r,3)),o.setIndex([0,1,4,1,2,4,2,3,4,3,0,4]),o.computeVertexNormals(),o}function K0({x:i,z:t,width:e,depth:n,height:s,wallMaterial:r,roofType:o=0,roofMaterial:a=eo[0],brick:c=!1,windows:l=2,chimney:h=!0}){let u=Zt(i),d=.28;Ut([e+.45,d,n+.45],[i,u+d/2,t],er);let f=u+d+s/2;Ut([e,s,n],[i,f,t],r,!0),Mi([i,f,t],[e/2,s/2,n/2]);let m=t+n/2+.065,x=Math.min(1.15,e*.16);Ut([x+.18,2.05,.13],[i,u+d+1.03,m],no),Ut([x,1.85,.055],[i,u+d+.96,m+.08],CE);for(let y=0;y<l;y++){let _=i+(y-(l-1)/2)*Math.min(3.2,e/(l+.5)),v=u+d+s*.59;YE(_,v,m+.105)}let g=u+d+s,p;if(o===1)p=ZE(e+.55,n+.55,Math.min(e,n)*.34);else if(o===2)p=jE(e+.5,n+.5,e*.31);else if(o===3){let y=new lt(new It(e+.7,.22,n+.7),a);y.position.set(i,g+.42,t),y.rotation.z=e>9?-.18:.13,y.castShadow=!0,y.receiveShadow=!0,Ot.add(y),p=null}else p=Pm(e+.55,n+.55,e*.29);if(p){let y=new lt(p,a);y.position.set(i,g,t),y.castShadow=!0,y.receiveShadow=!0,Ot.add(y)}h&&e<24&&(Ut([.42,1.05,.42],[i+e*.29,g+.5,t-n*.15],bm),Ut([.56,.11,.56],[i+e*.29,g+1.07,t-n*.15],rf))}function KE(i){let{x:t,z:e,width:n,depth:s,height:r}=i,o=Zt(t),a=new $({color:7502710,roughness:.76,metalness:.34});Ut([n+.8,.35,s+.8],[t,o+.175,e],er);let c=o+.35+r/2;Ut([n,r,s],[t,c,e],a,!0),Mi([t,c,e],[n/2,r/2,s/2]);let l=Math.min(13,n*.24),h=r*.72;Ut([l,h,.16],[t,o+.35+h/2,e+s/2+.09],rf);let u=new lt(Pm(n+1,s+.8,Math.min(n*.09,3.2)),eo[3]);u.position.set(t,o+.35+r,e),u.castShadow=!0,u.receiveShadow=!0,Ot.add(u);let d=Math.min(10,Math.max(3,Math.floor(n/8)));for(let f=0;f<=d;f++){let m=t-n/2+n*f/d;Ut([.07,r-.25,.08],[m,o+.35+r/2,e+s/2+.1],zl)}}function fl(i,t,e,n=!1){let s=t/2,r=[],o=[],a=[],c=0;for(let u=0;u<i.length;u++){let d=i[Math.max(0,u-1)],f=i[Math.min(i.length-1,u+1)],m=f[0]-d[0],x=f[1]-d[1],g=Math.hypot(m,x)||1,p=-x/g,y=m/g;u>0&&(c+=Math.hypot(i[u][0]-i[u-1][0],i[u][1]-i[u-1][1]));for(let _ of[-1,1]){let v=i[u][0]+p*s*_,R=i[u][1]+y*s*_;r.push(v,Zt(v)+(n?.016:.034),R),o.push(c/9,_<0?0:1)}if(u<i.length-1){let _=u*2,v=_+1,R=_+2,S=_+3;a.push(_,R,v,v,R,S)}}let l=new Ne;l.setAttribute("position",new Qt(r,3)),l.setAttribute("uv",new Qt(o,2)),l.setIndex(a),l.computeVertexNormals();let h=new lt(l,e);return h.receiveShadow=!0,Ot.add(h),h}function $r(i,t,e,n,s,r=xl,o=1){let a=go(o),c=[];for(let u=0;u<s;u++){let d=i+(a()-.5)*e,f=t+(a()-.5)*n,m=Zt(d)+.015,x=.62+a()*.78,g=.035+a()*.055,p=a()*Math.PI,y=Math.cos(p)*g,_=Math.sin(p)*g,v=(a()-.5)*.12,R=(a()-.5)*.12;c.push(d-y,m,f-_,d+y,m,f+_,d+v,m+x,f+R)}let l=new Ne;l.setAttribute("position",new Qt(c,3)),l.computeVertexNormals();let h=new lt(l,r);h.frustumCulled=!0,h.castShadow=!1,Ot.add(h)}function Dd(i,t,e,n=.7){let s=new _n({map:wm,color:14476514,transparent:!0,opacity:.42,depthWrite:!1,side:Pe}),r=new lt(new hi(e,e*.72),s);r.rotation.x=-Math.PI/2,r.position.set(i,Zt(i)+n,t),r.renderOrder=2,Ot.add(r)}function JE(){let i=xe.pond,t=Zt(i.x),e=new lt(new Bi(1,80),yE);e.scale.set(i.radiusX,i.radiusZ,1),e.rotation.x=-Math.PI/2,e.position.set(i.x,t+.04,i.z),e.receiveShadow=!0,Ot.add(e);let n=new lt(new Zn(1,.045,7,80),El);n.scale.set(i.radiusX+1.3,i.radiusZ+1.3,1),n.rotation.x=Math.PI/2,n.position.set(i.x,t+.055,i.z),Ot.add(n);for(let s of[-.25,.3]){let r=new lt(new Zn(1,.012,4,72),new _n({color:12374480,transparent:!0,opacity:.38}));r.scale.set(i.radiusX*(.58+s),i.radiusZ*(.58+s),1),r.rotation.x=Math.PI/2,r.position.set(i.x,t+.052,i.z),Ot.add(r)}for(let s=0;s<5;s++){let r=s*1.21,o=i.x+Math.cos(r)*(i.radiusX+2+s%2),a=i.z+Math.sin(r)*(i.radiusZ+2),c=new lt(new Dc(.6+s%3*.12,0),er);c.position.set(o,t+.15,a),c.scale.set(1.2,.48,.9),c.castShadow=!0,Ot.add(c)}Dd(i.x-10,i.z+4,80,.7),Dd(i.x+15,i.z-9,72,.95),Dd(i.x+2,i.z+22,65,.72)}function QE(i,t,e=1){let n=Zt(i);io(Rm,new L(i,n+1.05*e,t),new en,new L(e,e,e));for(let s=0;s<3;s++){let r=(2.1-s*.42)*e,o=(1.05-s*.15)*e;if(io(Cm[s],new L(i,n+(1.45+s*.82)*e,t),new en,new L(o,r,o)),s<2){let a=(.79-s*.12)*e,c=new en().setFromEuler(new vn(0,0,-.08));io(Im[s],new L(i+.06*e,n+(1.49+s*.82)*e,t+.04*e),c,new L(a,r*.82,a))}}Mi([i,n+1*e,t],[.19*e,1*e,.19*e])}function tS(){so(new nn(.13,.23,2.1,7),LE,Rm);let i=new Br(1,1,7);for(let t of Cm)so(i,PE,t);for(let t of Im)so(i,NE,t)}function eS(){let i=xe.stop,t=Zt(i.x),e=new $({color:5982519,roughness:.9});Ut([6.4,.22,4.2],[i.x,t+.11,i.z],er);for(let n of[-2.8,2.8])for(let s of[-1.65,1.65])Ut([.16,2.6,.16],[i.x+n,t+1.3,i.z+s],e);Ut([6.6,.22,4.3],[i.x,t+2.66,i.z],eo[3],!1,[0,0,-.015]),Ut([4.5,.12,.54],[i.x,t+.72,i.z+1.1],no),Ut([4.5,.12,.14],[i.x,t+1.12,i.z+1.27],no);for(let n of V0(i))Mi(n.position,n.halfExtents)}function nS(i){let t=Zt(i.x),e=t+.28,n=e+i.height,s=(e+n)/2,r=i.z-i.depth/2+.21,o=r-.21,a=t+.46,c=t+2.96,l=c-a,h=(a+c)/2;Ut([i.width+.5,.28,i.depth+.5],[i.x,t+.14,i.z],er),Ut([.42,i.height,i.depth],[i.x-i.width/2+.21,s,i.z],qs),Ut([.42,i.height,i.depth],[i.x+i.width/2-.21,s,i.z],qs),Ut([i.width,i.height,.42],[i.x,s,i.z+i.depth/2-.21],qs),Ut([i.width+.7,.22,i.depth+.7],[i.x,n+.11,i.z],EE),Mi([i.x,s,i.z],[i.width/2,i.height/2,i.depth/2]),Ut([i.width,a-e,.42],[i.x,(a+e)/2,r],qs),Ut([i.width,n-c,.42],[i.x,(n+c)/2,r],qs);for(let _ of[-1,1])Ut([1.6,l,.42],[i.x+_*10,h,r],qs),Ut([.6,l,.42],[i.x+_*1.7,h,r],qs);let u=o-.035;for(let _ of[i.x-5.6,i.x+5.6]){let v=new lt(new hi(7.2,l),j0);v.position.set(_,h,u),v.rotation.y=Math.PI,v.castShadow=!1,v.receiveShadow=!0,Ot.add(v),Ut([.09,l,.12],[_,h,u-.035],Gi),Ut([7.2,.09,.12],[_,a,u-.035],Gi),Ut([7.2,.09,.12],[_,c,u-.035],Gi),Ut([.08,l,.12],[_-3.6,h,u-.035],Gi),Ut([.08,l,.12],[_+3.6,h,u-.035],Gi)}let d=2.4,f=c-e,m=e+f/2,x=new lt(new hi(d,f),j0);x.position.set(i.x,m,u-.018),x.rotation.y=Math.PI,Ot.add(x);for(let _ of[-1,1])Ut([.1,f,.13],[i.x+_*d/2,m,u-.06],Gi);Ut([d,.11,.13],[i.x,e,u-.06],Gi),Ut([d,.11,.13],[i.x,c,u-.06],Gi);for(let _ of[-1,1])Ut([.045,.42,.055],[i.x+_*.18,m,u-.12],Gd);Ut([i.width-2.2,.18,.32],[i.x,t+3.08,o-.48],bE);let g=t+3.75,p=o-.25;Ut([14.2,.96,.18],[i.x,g,p],Gi);let y=new lt(new hi(13.9,.78),new _n({map:dE(),side:Pe,toneMapped:!1}));y.position.set(i.x,g,p-.105),y.rotation.y=Math.PI,y.castShadow=!1,Ot.add(y)}function iS(i){let{x:t,z:e,width:n,depth:s,height:r}=i,o=Zt(t),a=r-.3,c=o+.18,l=c+a,h=(c+l)/2,u=e-s/2+.12,d=u-.1,f=n-1.5,m=a-.42,x=c+m/2;Ut([n+.4,.18,s+.4],[t,o+.09,e],er),Ut([.18,a,s],[t-n/2+.09,h,e],Xs),Ut([.18,a,s],[t+n/2-.09,h,e],Xs),Ut([n,a,.18],[t,h,e+s/2-.09],Xs),Ut([.78,a,.2],[t-n/2+.39,h,u],Xs),Ut([.78,a,.2],[t+n/2-.39,h,u],Xs),Ut([n-1.3,.38,.2],[t,l-.19,u],Xs);let g=new lt(new It(f,m,.12),SE);g.position.set(t,x,d),Ot.add(g);for(let p=0;p<13;p++){let y=c+.14+p*(m-.2)/12;Ut([f-.06,.045,.035],[t,y,d-.08],Gd)}for(let p of[-1,1])Ut([.1,m+.12,.14],[t+p*(f/2+.07),x,d-.02],Gd);Ut([n+.35,.2,s+.35],[t,l+.1,e],Xs),Mi([t,h,e],[n/2,a/2,s/2])}function sS(){JE();for(let s of xe.roads)fl(s.points,s.width+.9,$0,!0),fl(s.points,s.width,gE,!1);for(let s of ia)fl(s.points,s.width+.26,$0,!0),fl(s.points,s.width,xE,!1);$r(-274,-342,35,88,340,Pd,67),$r(-283,-216,34,72,320,xl,119),$r(-280,-45,35,82,360,Pd,283),$r(-265,114,34,76,300,xl,617),$r(-204,-325,28,58,230,xl,342),$r(-205,172,26,40,180,Pd,721);let i=[[-298,-414,1.15],[-285,-390,.9],[-304,-300,1],[-292,-232,1.22],[-300,-178,.88],[-292,-110,1.12],[-300,-38,.95],[-290,38,1.16],[-302,124,1],[-286,186,1.18],[-300,262,.92],[-286,336,1.08],[-300,407,1.24],[294,-405,1],[301,-315,1.15],[293,-248,.92],[299,-174,1.05],[292,-102,.88],[300,-28,1.12],[292,44,1],[300,238,1.15],[294,316,.96],[301,404,1.18]];for(let[s,r,o]of i)QE(s,r,o);tS();for(let s of xe.lots){ra(s.x,s.z,s.width,s.depth,s.gate);let r=Sd(s),o=s.id.startsWith("S-")||Number(s.id.split("-")[1])%3===0?Nd:Vd[Number(s.id.split("-")[1])%Vd.length];K0({x:r.x,z:r.z,width:s.houseWidth,depth:s.houseDepth,height:s.id.startsWith("S-")?3.1:2.85,wallMaterial:o,roofType:s.roof,roofMaterial:eo[(s.roof+Number(s.id.split("-")[1]))%eo.length],brick:o===Nd,windows:s.houseWidth>11?2:1,chimney:!0})}let t=xe.school;ra(t.x,t.z,t.width+12,t.depth+14,"east",3.2),K0({x:t.x,z:t.z,width:t.width,depth:t.depth,height:4.8,wallMaterial:Nd,roofType:1,roofMaterial:eo[2],windows:7,chimney:!0});let e=xe.shop;ra(e.x,e.z,24,19,"north",3.2),nS(e);for(let s of xe.garages)iS(s);G0({layout:xe,terrainHeightAt:Zt,addBuildingPart:Ut,addStaticCollider:Mi,materials:{stone:er,brick:wE,corrugated:RE,timber:TE,timberLight:AE}}),eS();for(let s of xe.hangars)ra(s.x,s.z,s.width+9,s.depth+10,"south",5),KE(s);for(let s of xe.scrapYards){ra(s.x,s.z,s.width,s.depth,s.gate,5.5);let r=Zt(s.x),o=[[-s.width*.29,-s.depth*.18,2.4,1,1.6],[s.width*.26,-s.depth*.22,1.8,1.25,1],[-s.width*.1,s.depth*.26,3.1,.75,1.25],[s.width*.26,s.depth*.2,1.7,.8,1.8]];for(let a=0;a<o.length;a++){let[c,l,h,u,d]=o[a],f=new lt(new It(h,u,d),a%2?bm:rf);f.position.set(s.x+c,r+u/2+.08,s.z+l),f.rotation.y=(a-1)*.23,f.rotation.z=a%2?.08:-.06,f.castShadow=!0,f.receiveShadow=!0,Ot.add(f),Mi([s.x+c,r+u/2+.08,s.z+l],[h/2,u/2,d/2])}for(let a=0;a<3;a++){let c=new lt(new Zn(.72+a*.04,.19,8,18),zl);c.rotation.x=Math.PI/2,c.position.set(s.x-s.width*.12+a*1.9,r+.19,s.z+s.depth*.02),c.castShadow=!0,Ot.add(c)}}XE();for(let s of xe.snowDrifts)jr(s.x,s.z,s.amount);jr(-248,-390,.86),jr(255,178,.9),jr(126,91,.82),jr(-149,304,.82);let n=Zt(Je.x)+.105;dl("\u0414\u0420\u041E\u0412\u0410 F-01",[-15.4,n,108.7],.18),dl("\u0414\u0420\u041E\u0412\u0410 F-02",[-14.6,n,108.5],-.36),dl("\u0414\u0420\u041E\u0412\u0410 F-03",[-15.7,n,109.4],.46),dl("\u0414\u0420\u041E\u0412\u0410 F-04",[-14.9,n+.17,109.1],-.2),WE("\u041B\u041E\u041F\u0410\u0422\u0410 S-01",[-36.5,Zt(-36.5)+.08,117],-.25),hl("\u042F\u0429\u0418\u041A M-01",[230,Rn(230)+.42,-336],[.86,.84,.78],7.5,7692356,-.08),hl("\u042F\u0429\u0418\u041A M-02",[251,Rn(251)+.38,-351],[.72,.76,.68],5.2,9137480,.14),Ld("\u0411\u041E\u0427\u041A\u0410 M-01",[241,Rn(241)+.54,-354],.38,1.08,18,0),Z0("\u0414\u041E\u0421\u041A\u0410 P-01",[235,Rn(235)+.09,-326],2.35,.36,.15,3.4,.06),hl("\u042F\u0429\u0418\u041A M-03",[248,Rn(248)+.48,-159],[.95,.96,.86],11,7428673,.24),Ld("\u0411\u041E\u0427\u041A\u0410 M-02",[260,Rn(260)+.5,-138],.35,1,15,1,.18),ul("\u0424\u041B\u0410\u041A\u041E\u041D G-01",[240,Rn(240)+.22,-142],0),ul("\u0424\u041B\u0410\u041A\u041E\u041D G-02",[242,Rn(242)+.22,-142.3],1,.5),hl("\u042F\u0429\u0418\u041A M-04",[181,Rn(181)+.44,-81],[.72,.76,.72],5.4,9137480,-.17),Ld("\u0411\u041E\u0427\u041A\u0410 M-03",[194,Rn(194)+.47,-90],.33,.94,14,0,-.12),Z0("\u0414\u041E\u0421\u041A\u0410 P-02",[186,Rn(186)+.085,-70],2,.32,.16,3.1,-.33),ul("\u0424\u041B\u0410\u041A\u041E\u041D G-03",[47,Rn(47)+.22,166],2,-.3),ul("\u0424\u041B\u0410\u041A\u041E\u041D G-04",[49,Rn(49)+.22,166.3],1,.4),$E()}function Rn(i){return Zt(i)}sS();var Nm=[],$s=null,rS=null,vs=null,ua=null,yi=!1,da=0,vl=0,_i=0,qi=0,Lm=.82,Rl=null,mn=null;function oS(){let i=[new $({color:8009768,roughness:.95}),new $({color:9126960,roughness:.94}),new $({color:6500646,roughness:.96})],t=new $({color:2501417,roughness:.62,metalness:.62}),e=new ee;e.position.copy(Je);let n=new lt(new It(1.28,1,1.06),i[0]);n.position.y=.5,e.add(n);for(let u=0;u<5;u++)for(let d=0;d<4;d++){let f=u%2?.14:0,m=new lt(new It(.27,.16,.045),i[(u*3+d)%i.length]);m.position.set(-.47+d*.29+f,.13+u*.18,.54),e.add(m)}let s=new lt(new It(.58,.39,.035),t);s.position.set(0,.48,.591),e.add(s);let r=new lt(new It(.43,.25,.014),new $({color:1117707,roughness:1,emissive:788227}));r.position.set(0,.48,.616),e.add(r),vs=new lt(new It(.39,.22,.008),new _n({color:16743212,transparent:!0,opacity:.86})),vs.position.set(0,.48,.628),vs.visible=!1,e.add(vs);for(let u of[-.34,.34]){let d=new lt(new It(.065,.5,.075),t);d.position.set(u,.48,.64),e.add(d)}for(let u of[.24,.72]){let d=new lt(new It(.72,.06,.075),t);d.position.set(0,u,.64),e.add(d)}let o=new lt(new It(.035,.16,.045),t);o.position.set(.25,.48,.69),e.add(o);let a=new lt(new It(.42,1.62,.44),i[2]);a.position.set(.32,1.78,-.24),e.add(a);let c=new lt(new It(.55,.1,.57),t);c.position.set(.32,2.64,-.24),e.add(c),Ot.add(e),of(e,{kind:"stove",name:"\u041A\u0418\u0420\u041F\u0418\u0427\u041D\u0410\u042F \u041F\u0415\u0427\u042C",range:4.7}),rS=e,Mi([Je.x,Je.y+.5,Je.z],[.66,.5,.55]),Mi([Je.x+.32,Je.y+1.78,Je.z-.24],[.21,.81,.22]),$s=new ee,$s.position.set(Je.x,Je.y,Je.z+.66),$s.visible=!1,Ot.add($s);let h=[16733986,16747303,16761678,16769162];for(let u=0;u<13;u++){let d=new _n({color:h[u%h.length],transparent:!0,opacity:0,depthWrite:!1,side:Pe,blending:fc}),f=new lt(new Fc(.1+u%3*.025,0),d);f.visible=!1,$s.add(f),Nm.push({mesh:f,phase:Math.random()*Math.PI*2,rate:1.35+Math.random()*1.45,spread:.03+Math.random()*.11})}ua=new Hr(16746296,0,5.3,2),ua.position.set(Je.x,Je.y+.92,Je.z+.92),Ot.add(ua)}oS();var fA=[new $({color:10926262,roughness:.73,metalness:.14}),new $({color:12753512,roughness:.76,metalness:.1})],pA=new $({color:5399911,roughness:.63,metalness:.22}),mA=[new $({color:7916220,roughness:.45,metalness:.12,emissive:1194549,emissiveIntensity:.25}),new $({color:15044177,roughness:.5,metalness:.12,emissive:3743763,emissiveIntensity:.2})];function aS(){let i=xe.auntZina,t=new ee;t.name="npc-aunt-zina",t.userData.npcId="aunt-zina",t.position.set(i.x,Zt(i.x),i.z),t.rotation.y=i.yaw,Ot.add(t);let e=new $({color:4543816,roughness:.94}),n=new $({color:3160625,roughness:.9}),s=new $({color:10180411,roughness:.88}),r=new $({color:6911343,roughness:.96}),o=new $({color:9869453,roughness:.95}),a=new $({color:13938065,roughness:.92}),c=new $({color:2698280,roughness:.83}),l=new $({color:3748654,roughness:.8}),h=new $({color:13939832,roughness:.68,metalness:.16}),u=(x,g,p,y=t)=>{let _=new lt(x,g);return _.position.set(...p),_.castShadow=!0,_.receiveShadow=!0,y.add(_),_};u(new nn(.19,.31,.62,9),e,[0,.51,0]),u(new It(.52,.57,.34),e,[0,1.055,0]),u(new It(.5,.035,.36),n,[0,.84,0]);for(let x of[-1,1]){let g=u(new Lc(.078,.35,4,8),e,[x*.29,1,.015]);g.rotation.z=x*-.11,u(new di(.078,10,8),s,[x*.32,.7,.035]);let p=u(new It(.16,.2,.32),c,[x*.13,.11,.035]);p.rotation.y=-.05}for(let x of[1.12,.94,.76])u(new di(.024,8,6),h,[0,x,.176]);u(new nn(.115,.13,.14,9),s,[0,1.39,0]);let d=new ee;d.name="aunt-zina-head",d.userData.npcPart="head",d.position.set(0,1.59,.005),t.add(d),u(new di(.18,14,10),a,[0,0,0],d).scale.set(.86,1,.83),u(new di(.205,12,8,0,Math.PI*2,0,Math.PI*.62),r,[0,.055,-.012],d);for(let x of[-1,1]){u(new di(.061,9,7),o,[x*.145,-.035,-.015],d),u(new di(.018,8,6),l,[x*.052,.02,.137],d);let g=u(new It(.045,.008,.008),o,[x*.052,.051,.139],d);g.rotation.z=x*-.08}u(new di(.026,8,6),a,[0,-.005,.155],d),u(new It(.052,.009,.01),l,[0,-.072,.136],d);let m=u(new It(.16,.2,.035),s,[.12,1.3,-.12]);return m.rotation.z=-.12,{root:t,head:d,homeX:t.position.x,homeY:t.position.y,homeZ:t.position.z,bodyYaw:i.yaw}}function cS(i){let t=it.position.x-Wi.root.position.x,e=it.position.z-Wi.root.position.z,n=Math.hypot(t,e),s=Math.sin(vo*.32)*.18,r=0;if(n<42){let c=Math.atan2(t,e)-Wi.bodyYaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;s=Wt.clamp(c,-1,1);let l=it.position.y+.62;r=Wt.clamp(-Math.atan2(l-(Wi.root.position.y+Wi.head.position.y),Math.max(.1,n)),-.22,.22)}let o=s-Wi.head.rotation.y;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;let a=Math.min(1,Math.max(0,i)*4.2);Wi.head.rotation.y+=o*a,Wi.head.rotation.x+=(r-Wi.head.rotation.x)*a}var lS={pelvis:[0,.84,0,.08,0,0],torso:[0,1.28,.025,.08,0,0],head:[0,1.69,.025,0,0,0],upperArmL:[-.31,1.18,.045,-.12,0,-.04],lowerArmL:[-.34,.94,.16,-.72,0,0],handL:[-.35,.77,.29,-.55,0,0],upperArmR:[.31,1.18,.045,-.12,0,.04],lowerArmR:[.34,.94,.16,-.72,0,0],handR:[.35,.77,.29,-.55,0,0],thighL:[-.125,.49,.055,0,0,0],shinL:[-.13,.14,-.115,-Math.PI/2,0,0],footL:[-.13,.065,-.3,0,0,0],thighR:[.125,.49,.055,0,0,0],shinR:[.13,.14,-.115,-Math.PI/2,0,0],footR:[.13,.065,-.3,0,0,0]};function hS(i,t="idle"){let e={},n=i.walkPhase,s=t==="walk"||t==="attack",r=t==="attack"?Math.sin(Wt.clamp(i.stateTime/.74,0,1)*Math.PI):0;for(let o of i.parts){let a=o.restLocal,c=[a.x,a.y,a.z,0,0,0];if(o.key==="pelvis"&&s&&(c[1]+=Math.sin(n*2)*.014),o.key==="torso"&&s&&(c[1]+=Math.sin(n*2+.4)*.018),o.key==="head"&&s&&(c[1]+=Math.sin(n*2+.7)*.012),s&&/^(thigh|shin|foot)[LR]$/.test(o.key)){let l=o.key.endsWith("L")?-1:1,h=Math.sin(n+(l>0?Math.PI:0));o.key.startsWith("thigh")?(c[2]+=h*.105,c[3]=-h*.3):o.key.startsWith("shin")?(c[2]-=h*.045,c[3]=Math.max(0,h)*.3):(c[2]+=h*.05,c[3]=-h*.12)}if(s&&/^(upperArm|lowerArm|hand)[LR]$/.test(o.key)){let l=o.key.endsWith("L")?-1:1,h=Math.sin(n+(l>0?Math.PI:0));c[2]-=h*(o.key.startsWith("upperArm")?.085:.045),c[3]=-h*(o.key.startsWith("upperArm")?.4:.18)}if(t==="attack"&&/^(upperArm|lowerArm|hand)[LR]$/.test(o.key)){let l=o.key.endsWith("L")?-1:1;l===i.punchSide?o.key.startsWith("upperArm")?(c[0]=l*.31,c[1]=1.43,c[2]=.12+r*.11,c[3]=-.92*r):o.key.startsWith("lowerArm")?(c[0]=l*.33,c[1]=1.22,c[2]=.27+r*.2,c[3]=-1.12*r):(c[0]=l*.35,c[1]=1.08,c[2]=.44+r*.26,c[3]=-.75*r):o.key.startsWith("upperArm")?(c[1]=1.37,c[2]=.06,c[3]=-.26):o.key.startsWith("lowerArm")?(c[1]=1.18,c[2]=.14,c[3]=-.48):(c[1]=1.02,c[2]=.2,c[3]=-.38)}e[o.key]=c}return e}function Dm(i,t){let e={},n=Math.cos(i.yaw),s=Math.sin(i.yaw),r=new Oe;r.setFromAxisAngle(new w(0,1,0),i.yaw);for(let o of i.parts){let a=t[o.key]||[o.restLocal.x,o.restLocal.y,o.restLocal.z,0,0,0],c=new Oe;c.setFromEuler(a[3]||0,a[4]||0,a[5]||0,"XYZ");let l=new Oe;r.mult(c,l),e[o.key]={position:new w(i.rootX+a[0]*n+a[2]*s,Zt(i.rootX)+a[1],i.rootZ-a[0]*s+a[2]*n),quaternion:l}}return e}function xs(i,t="idle"){return Dm(i,hS(i,t))}function uS(i){return Dm(i,lS)}function dS(i){let t={};for(let e of i.parts)t[e.key]={position:e.body.position.clone(),quaternion:e.body.quaternion.clone()};return t}function fS(i,t){for(let e of i.parts){let n=e.body;n.type=t,n.mass=e.mass,n.updateMassProperties(),n.force.set(0,0,0),n.torque.set(0,0,0),n.velocity.set(0,0,0),n.angularVelocity.set(0,0,0),n.wakeUp()}kt.broadphase.dirty=!0}function ms(i,t,e){let n=Math.max(.001,e);for(let s of i.parts){let r=s.body,o=t[s.key];r.velocity.set(Wt.clamp((o.position.x-r.position.x)/n,-9,9),Wt.clamp((o.position.y-r.position.y)/n,-9,9),Wt.clamp((o.position.z-r.position.z)/n,-9,9)),r.quaternion.copy(o.quaternion),r.angularVelocity.set(0,0,0),r.force.set(0,0,0),r.torque.set(0,0,0),r.aabbNeedsUpdate=!0,r.wakeUp()}kt.broadphase.dirty=!0}function J0(i,t,e,n,s){let r=Wt.smoothstep(n,0,1),o=Math.max(.001,s);for(let a of i.parts){let c=a.body,l=t[a.key],h=e[a.key],u=Wt.lerp(l.position.x,h.position.x,r),d=Wt.lerp(l.position.y,h.position.y,r),f=Wt.lerp(l.position.z,h.position.z,r);c.velocity.set(Wt.clamp((u-c.position.x)/o,-9,9),Wt.clamp((d-c.position.y)/o,-9,9),Wt.clamp((f-c.position.z)/o,-9,9)),l.quaternion.slerp(h.quaternion,r,c.quaternion),c.angularVelocity.set(0,0,0),c.force.set(0,0,0),c.torque.set(0,0,0),c.aabbNeedsUpdate=!0,c.wakeUp()}kt.broadphase.dirty=!0}function pS(i){let t=i.partMap.pelvis.body.position;i.rootX=Wt.clamp(t.x,_e.minX+2,_e.maxX-2),i.rootZ=Wt.clamp(t.z,_e.minZ+2,_e.maxZ-2);let e=i.behavior==="peaceful"?Wt.clamp(i.rootX+(i.rootX<0?-2.6:2.6),_e.minX+3,_e.maxX-3):it.position.x,n=i.behavior==="peaceful"?i.rootZ+.05:it.position.z;i.yaw=Math.atan2(e-i.rootX,n-i.rootZ),i.recoveryFrom=dS(i),i.kneelingPose=uS(i),i.standingPose=xs(i,"idle"),i.state="recovering-to-knees",i.stateTime=0,fS(i,Pt.KINEMATIC)}function mS(i){if(i.stateTime=0,i.walkPhase=0,i.navDirection=null,i.behavior==="peaceful"){let t=i.rootX<0?-1:1;i.wanderTarget={x:Wt.clamp(i.rootX+t*2.6,_e.minX+3,_e.maxX-3),z:Wt.clamp(i.rootZ+.12,_e.minZ+3,_e.maxZ-3)},i.state="walking-away"}else i.state="chasing"}function gS(i,t,e){let n=Math.hypot(t,e);if(n<1e-4)return{x:0,z:0};t/=n,e/=n;let s=[0,.38,-.38,.76,-.76,1.18,-1.18,1.62,-1.62],r={x:t,z:e,score:-1/0};for(let o of s){let a=Math.cos(o),c=Math.sin(o),l=t*a-e*c,h=t*c+e*a,u=(l*t+h*e)*2.1;i.navDirection&&(u+=(l*i.navDirection.x+h*i.navDirection.z)*.24);for(let d of ni){let f=d.body,m=f.gameMeta;if(m?.kind!=="prop"||m.isStored||m.isHeld)continue;let x=f.position.x-i.rootX,g=f.position.z-i.rootZ,p=x*l+g*h;if(p<-.15||p>2.1)continue;let y=Math.abs(x*h-g*l),_=Math.min(1.35,Math.max(.36,f.boundingRadius||.55))+.38;if(y<_){let v=Wt.clamp((2.1-Math.max(0,p))/1.75,.35,1.45);u-=(_-y)*2.2*v}}u>r.score&&(r={x:l,z:h,score:u})}return i.navDirection={x:r.x,z:r.z},r}function _l(i,t,e,n){if(Math.hypot(t,e)<1e-4)return;let r=Math.atan2(t,e)-i.yaw;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;i.yaw+=Wt.clamp(r,-n*5.5,n*5.5)}function Q0(i,t,e,n,s){let r=t-i.rootX,o=e-i.rootZ,a=Math.hypot(r,o);if(a<.025)return a;let c=gS(i,r,o);_l(i,c.x,c.z,s);let l=Math.min(a,n*s);return i.rootX=Wt.clamp(i.rootX+c.x*l,_e.minX+2,_e.maxX-2),i.rootZ=Wt.clamp(i.rootZ+c.z*l,_e.minZ+2,_e.maxZ-2),i.walkPhase+=s*(n+1.8),a}function xS(i){let t=0,e=0;for(let n of i.parts)t=Math.max(t,n.body.velocity.length()),e=Math.max(e,n.body.angularVelocity.length());return t<.58&&e<1.15}function yS(i){for(let t of cE){if(t.hitFlash=Math.max(0,t.hitFlash-i),t.dead||!t.active)continue;if(t.attackCooldown=Math.max(0,t.attackCooldown-i),t.state==="falling"){t.stateTime+=i,t.quietTime=xS(t)?t.quietTime+i:0,t.stateTime>=1.15&&(t.quietTime>=.58||t.stateTime>=3.85)&&pS(t);continue}if(t.state==="recovering-to-knees"){t.stateTime+=i,J0(t,t.recoveryFrom,t.kneelingPose,t.stateTime/1.2,i),t.stateTime>=1.2&&(t.state="kneeling-hold",t.stateTime=0);continue}if(t.state==="kneeling-hold"){t.stateTime+=i,ms(t,t.kneelingPose,i),t.stateTime>=.48&&(t.state="recovering-to-feet",t.stateTime=0);continue}if(t.state==="recovering-to-feet"){t.stateTime+=i,J0(t,t.kneelingPose,t.standingPose,t.stateTime/1.08,i),t.stateTime>=1.08&&mS(t);continue}if(t.state==="walking-away"){let r=Q0(t,t.wanderTarget.x,t.wanderTarget.z,1.35,i);r<.24&&(t.state="idle-after",t.stateTime=0),ms(t,xs(t,r>.24?"walk":"idle"),i);continue}if(t.state==="idle-after"){t.stateTime+=i,ms(t,xs(t,"idle"),i);continue}if(t.behavior!=="aggressive")continue;let e=it.position.x-t.rootX,n=it.position.z-t.rootZ,s=Math.hypot(e,n);if(t.state==="attacking"){if(t.stateTime+=i,_l(t,e,n,i),s>1.95&&t.stateTime<.28){t.state="chasing",t.stateTime=0,ms(t,xs(t,"walk"),i);continue}ms(t,xs(t,"attack"),i),!t.attackHitDone&&t.stateTime>=.27&&(t.attackHitDone=!0,s<=1.55&&Ym(8,"torso")),t.stateTime>=.74&&(t.state="chasing",t.stateTime=0);continue}if(s<=1.35&&t.attackCooldown<=0){t.state="attacking",t.stateTime=0,t.attackHitDone=!1,t.attackCooldown=1.35,t.punchSide*=-1,_l(t,e,n,i),ms(t,xs(t,"attack"),i);continue}s>1.05?(Q0(t,it.position.x,it.position.z,2.9,i),ms(t,xs(t,"walk"),i)):(_l(t,e,n,i),ms(t,xs(t,"idle"),i))}}var fa=new w(xe.stop.x,Zt(xe.stop.x)+.87,xe.stop.z+4),it=new Pt({mass:72,material:Dl,position:fa.clone(),collisionFilterGroup:oo,collisionFilterMask:mo&~oo,fixedRotation:!0,linearDamping:.02,angularDamping:1,allowSleep:!1});it.addShape(new Ws(.31,.31,1.08,12));it.addShape(new Yr(.31),new w(0,.53,0));it.addShape(new Yr(.31),new w(0,-.53,0));it.gameMeta={kind:"player"};kt.addBody(it);var Wi=aS(),Ol=!1,qd=q0(xe,ia),vS={x:xe.shop.x,z:xe.shop.z-xe.shop.depth/2-.72},_S={x:xe.hangars[0].x,z:xe.hangars[0].z+xe.hangars[0].depth/2+6.2},af=X0(xe,Ad),pa=new Set,zd=0,pl=0,tm=[{coat:5068120,trousers:3423038},{coat:5857636,trousers:3883846},{coat:4278861,trousers:3159609},{coat:6449514,trousers:4344139},{coat:4870483,trousers:3685952},{coat:5593947,trousers:3883330}].map(i=>({coat:new $({color:i.coat,roughness:.9}),trousers:new $({color:i.trousers,roughness:.93})})),em=new $({color:12296586,roughness:.94}),MS=new $({color:3159608,roughness:.92}),wS=new $({color:3158836,roughness:.92}),nm=[6444874,7828843,4868677].map(i=>new $({color:i,roughness:.95})),Un={torso:new It(.54,.68,.36),pelvis:new It(.44,.26,.32),collar:new It(.32,.14,.36),neck:new It(.16,.12,.16),head:new It(.4,.42,.38),hair:new It(.41,.1,.39),upperArm:new It(.2,.4,.2),lowerArm:new It(.18,.37,.18),hand:new It(.16,.14,.16),thigh:new It(.23,.44,.24),shin:new It(.19,.4,.2),boot:new It(.24,.14,.32)};function bS(i,t){return i===0?t.home:i===1?vS:_S}function Ml(i,t){i.targetIndex=(t%3+3)%3;let e=bS(i.targetIndex,i);i.path=Id(qd,{x:i.x,z:i.z},e),i.pathIndex=i.path.length>1?1:0,i.state="walking",i.fleeing=!1,i.fleeTimer=0,i.fleeTarget=null,i.fleePath=null,i.fleePathIndex=0}for(let i of af)Ml(i,i.targetIndex);function On(i,t,e,n){let s=new lt(t,e);return s.position.set(n[0],n[1],n[2]),s.castShadow=!1,s.receiveShadow=!1,i.add(s),s}function ES(i){let t=tm[i.styleIndex%tm.length],e=new ee;e.name=`village-${i.id}`,e.userData.residentId=i.id;let n=new ee;e.add(n),On(n,Un.pelvis,t.trousers,[0,.76,0]),On(n,Un.torso,t.coat,[0,1.12,0]),On(n,Un.collar,t.coat,[0,1.43,0]),On(n,Un.neck,em,[0,1.48,0]);let s=new ee;s.position.set(0,1.54,0),n.add(s),On(s,Un.head,em,[0,.2,0]),On(s,Un.hair,nm[i.styleIndex%nm.length],[0,.4,-.005]);let r=[];for(let a of[-1,1]){let c=new ee;c.position.set(a*.29,1.39,0),n.add(c),On(c,Un.upperArm,t.coat,[0,-.18,0]);let l=new ee;l.position.y=-.35,c.add(l),On(l,Un.lowerArm,t.coat,[0,-.17,0]),On(l,Un.hand,MS,[0,-.39,0]),r.push(c)}let o=[];for(let a of[-1,1]){let c=new ee;c.position.set(a*.115,.82,0),n.add(c),On(c,Un.thigh,t.trousers,[0,-.21,0]);let l=new ee;l.position.y=-.41,c.add(l),On(l,Un.shin,t.trousers,[0,-.18,0]),On(l,Un.boot,wS,[0,-.39,.06]),o.push(c)}return e.position.set(i.x,Zt(i.x),i.z),e.rotation.y=i.yaw,Ot.add(e),{root:e,head:s,arms:r,legs:o}}function SS(){let i=it.position.x,t=it.position.z,e=Y0(af,i,t,ll,Rd),n=new Set(e),s=Cd*Cd;for(let a of pa){let c=a.x-i,l=a.z-t;c*c+l*l<=s&&n.add(a)}let r=[...n].sort((a,c)=>{let l=a.x-i,h=a.z-t,u=c.x-i,d=c.z-t;return l*l+h*h-(u*u+d*d)||a.index-c.index}).slice(0,ll),o=new Set(r);for(let a of pa)o.has(a)||(a.visual?.root&&Ot.remove(a.visual.root),a.visual=null,a.active=!1);for(let a of r)a.visual||(a.visual=ES(a)),a.active=!0;pa=o}function TS(){let i=!!Fe||!!qt?.gameMeta?.weaponId,t=Ol||He.has("ShiftLeft")||He.has("ShiftRight")||Math.hypot(ln.x,ln.y)>.84;return i&&(t||Math.hypot(it.velocity.x,it.velocity.z)>5.2)}function im(i,t,e,n){let s=t.x-i.x,r=t.z-i.z,o=Math.hypot(s,r);if(o<.035)return!0;i.yaw=Math.atan2(s,r);let a=Math.min(o,e*n);return i.x+=s/o*a,i.z+=r/o*a,o<=a+.035}function AS(i){let t=i.x-it.position.x,e=i.z-it.position.z,n=Math.hypot(t,e),s=n>.1?n:1,r=n>.1?{x:t/s,z:e/s}:{x:Math.sin(i.index*2.399963229728653),z:Math.cos(i.index*2.399963229728653)},o=qd.nodes.map(a=>{let c=a.x-i.x,l=a.z-i.z,h=Math.hypot(a.x-it.position.x,a.z-it.position.z),u=Math.hypot(c,l),d=c*r.x+l*r.z;return{node:a,playerDistance:h,routeDistance:u,outwardProgress:d,score:h+d*.32-u*.08}}).filter(a=>a.routeDistance>=7&&a.routeDistance<=38&&a.playerDistance>=n+5&&a.outwardProgress>=2).sort((a,c)=>c.score-a.score||a.routeDistance-c.routeDistance);for(let a of o.slice(0,16)){let c=Id(qd,{x:i.x,z:i.z},a.node);if(!(c.length<2))return i.fleePath=c,i.fleePathIndex=1,i.fleeTarget=c.at(-1),i.fleeing=!0,i.fleeTimer=Wt.clamp(c.length*.42,3.5,7),i.dwellTimer=0,!0}return!1}function sm(i,t,e=!1){if(e&&Math.hypot(i.x-it.position.x,i.z-it.position.z)<28&&(!i.fleeing||i.fleeTimer<.75)&&AS(i),i.fleeing&&i.fleePath){i.state="fleeing",i.fleeTimer=Math.max(0,i.fleeTimer-t);let s=i.fleePath[i.fleePathIndex];!s||i.fleeTimer<=0?Ml(i,i.targetIndex):im(i,s,i.moveSpeed*3.05,t)&&(i.fleePathIndex++,i.fleePathIndex>=i.fleePath.length&&Ml(i,i.targetIndex)),i.walkPhase+=t*i.moveSpeed*10;return}if(i.dwellTimer>0){i.dwellTimer=Math.max(0,i.dwellTimer-t),i.state="idle",i.dwellTimer===0&&i.pathIndex>=i.path.length&&Ml(i,(i.targetIndex+1)%3);return}if(i.pathIndex>=i.path.length){i.currentLocation=i.targetIndex,i.dwellTimer=2.5+i.index%6*.55,i.state="idle";return}let n=i.path[i.pathIndex];if(im(i,n,i.moveSpeed,t)&&i.pathIndex++,i.walkPhase+=t*i.moveSpeed*3.5,i.state="walking",i.pathIndex>=i.path.length){i.currentLocation=i.targetIndex,i.dwellTimer=2.5+i.index%6*.55,i.state="idle";return}}function RS(i,t){let e=i.visual;if(!e)return;let{root:n,head:s,arms:r,legs:o}=e,a=i.state==="walking"||i.state==="fleeing",c=a?i.state==="fleeing"?.9:.48:.025,l=i.walkPhase;r[0].rotation.x=Math.sin(l)*c,r[1].rotation.x=-Math.sin(l)*c,o[0].rotation.x=-Math.sin(l)*c,o[1].rotation.x=Math.sin(l)*c;let h=a?Math.abs(Math.sin(l*2))*(i.state==="fleeing"?.055:.022):0;n.position.set(i.x,Zt(i.x)+h,i.z),n.rotation.y=i.yaw;let u=it.position.x-i.x,d=it.position.z-i.z;if(Math.hypot(u,d)<34){let f=Math.atan2(u,d)-i.yaw;f=Wt.euclideanModulo(f+Math.PI,Math.PI*2)-Math.PI,s.rotation.y=Wt.damp(s.rotation.y,Wt.clamp(f,-.85,.85),4.5,t)}else s.rotation.y=Wt.damp(s.rotation.y,0,2.5,t)}function CS(i){if(pl+=i,pl>=.5){let e=Math.min(1.25,pl);pl=0;for(let n of af)n.active||sm(n,e,!1)}zd+=i,(pa.size===0||zd>=.4)&&(SS(),zd=0);let t=TS();for(let e of pa)sm(e,i,t),RS(e,i)}var Cl=!1,Il=fa.y,Pl=0,rm=0,re=new $({color:2699832,roughness:.46,metalness:.68}),zt=new $({color:1514784,roughness:.62,metalness:.42}),ji=new $({color:3357239,roughness:.82,metalness:.08}),Ea=new $({color:7491637,roughness:.84,metalness:.02}),Hl=new $({color:4994854,roughness:.9,metalness:.01}),Xd=new $({color:5342898,roughness:.23,metalness:.26,emissive:1057594,emissiveIntensity:.2}),qe=new ee;ke.add(qe);var j=new ee;qe.add(j);var Hn=new L(.28,-.33,-.78),kn=new vn(.25,.25,.015,"XYZ");qe.position.copy(Hn);qe.rotation.copy(kn);var ma=0,ga=0,Ye=null,ro=new L(0,-.145,.035),In=null,js=new L(0,-.045,-.44),wn=new ee;qe.add(wn);var Zs=0,ys=0,Cn=0,ao=0,Js=0,rn=!1,Ks=0,Nl=!1,Zr=0,Fe=null,cf=new Map(ol.map(i=>[i.id,P0(i)])),Ys=null,Sa=null;function st(i,t,e,n,s=[0,0,0]){let r=new lt(new It(t[0],t[1],t[2]),n);return r.position.set(e[0],e[1],e[2]),r.rotation.set(s[0],s[1],s[2]),r.castShadow=!1,r.receiveShadow=!1,i.add(r),r}function Xe(i,t,e,n,s,r=12){let o=new lt(new nn(t,t,e,r,1),s);return o.position.set(n[0],n[1],n[2]),o.rotation.x=Math.PI/2,o.castShadow=!1,o.receiveShadow=!1,i.add(o),o}var lf=new $({color:7957330,roughness:.79,metalness:.08}),_s=new $({color:5660773,roughness:.4,metalness:.74}),om=new $({color:9016474,roughness:.31,metalness:.82}),aa=new $({color:2435625,roughness:.92,metalness:.02}),IS=new $({color:9080717,roughness:.38,metalness:.83});function PS(){let i=new lt(new Br(.06,.19,6),new _n({color:16760168,transparent:!0,opacity:.92}));i.rotation.x=-Math.PI/2,i.position.z=-.075,wn.add(i),wn.add(new lt(new zc(.055,0),new _n({color:16773296})));let t=new Hr(16754499,0,2.2,2);wn.add(t),wn.userData.light=t,wn.visible=!1}PS();function NS(){j.traverse(i=>{i.geometry&&i.geometry.dispose()}),j.clear(),Ye=null,In=null,mn=null}function LS(){st(j,[.205,.145,.46],[0,.005,.035],re),st(j,[.184,.036,.43],[0,.095,.025],zt),st(j,[.045,.025,.47],[0,.132,-.02],re),st(j,[.11,.02,.11],[0,.158,-.15],zt),st(j,[.018,.026,.16],[.112,.025,.035],zt),st(j,[.055,.036,.13],[.112,.026,-.03],re),st(j,[.065,.025,.1],[-.113,.025,.105],zt),st(j,[.06,.025,.1],[-.12,-.005,.16],re),Xe(j,.033,.76,[0,.025,-.575],re,10),Xe(j,.046,.13,[0,.025,-1.015],zt,10),st(j,[.085,.065,.08],[0,.115,-.88],re),st(j,[.018,.075,.025],[0,.18,-.91],zt),st(j,[.13,.025,.045],[0,.153,-.9],re);for(let s of[-1,1])st(j,[.012,.028,.045],[s*.043,.026,-1.015],re);st(j,[.17,.095,.36],[0,-.045,-.39],Ea),st(j,[.178,.016,.31],[0,.014,-.39],Hl);for(let s of[-1,1]){st(j,[.014,.022,.31],[s*.09,-.045,-.39],re);for(let r=0;r<7;r++)st(j,[.009,.013,.018],[s*.101,-.045,-.52+r*.043],zt)}st(j,[.055,.035,.44],[0,.118,-.39],zt),st(j,[.11,.06,.08],[0,.16,-.105],re),st(j,[.045,.047,.028],[0,.195,-.115],zt);let i=new ee;i.position.set(0,.226,-.17),j.add(i),Xe(i,.063,.28,[0,0,-.015],zt,8),Xe(i,.073,.055,[0,0,.105],re,8),Xe(i,.073,.04,[0,0,-.155],re,8);let t=new lt(new Bi(.053,8),Xd);t.position.z=.135,i.add(t);let e=new lt(new Bi(.047,8),Xd);e.position.z=-.177,e.rotation.y=Math.PI,i.add(e),st(j,[.11,.025,.22],[0,.178,-.17],re),st(j,[.088,.22,.115],[.012,-.17,.165],ji,[-.18,0,-.04]);let n=new lt(new Zn(.061,.009,5,12),re);n.position.set(0,-.105,.075),j.add(n),st(j,[.018,.09,.022],[.015,-.1,.045],zt,[.22,0,0]),Ye=new ee,ro.set(0,-.145,.035),j.add(Ye),st(Ye,[.11,.26,.17],[0,-.13,0],ji,[-.12,0,0]),st(Ye,[.116,.035,.175],[0,-.252,-.01],zt,[-.12,0,0]);for(let s=0;s<4;s++)st(Ye,[.115,.012,.18],[0,-.06-s*.045,0],re,[-.12,0,0]);st(j,[.105,.105,.44],[0,.015,.445],ji),st(j,[.13,.12,.045],[0,.005,.67],zt),st(j,[.09,.045,.24],[0,.078,.42],re),st(j,[.18,.012,.12],[0,-.048,.57],zt)}function DS(){st(j,[.2,.15,.43],[0,.005,.035],re),st(j,[.19,.045,.39],[0,.097,.025],zt),st(j,[.05,.025,.55],[0,.134,-.09],re),st(j,[.17,.105,.4],[0,-.025,-.39],ji),st(j,[.19,.02,.42],[0,.045,-.38],zt);for(let e of[-1,1]){st(j,[.015,.025,.35],[e*.095,-.025,-.4],re);for(let n=0;n<6;n++)st(j,[.012,.012,.025],[e*.105,-.025,-.55+n*.06],zt)}Xe(j,.029,.88,[0,.02,-.75],re,10),Xe(j,.043,.11,[0,.02,-1.245],zt,10),st(j,[.045,.12,.04],[0,.17,-1.11],re),st(j,[.09,.04,.08],[0,.125,-1.08],zt),st(j,[.17,.024,.48],[0,.16,-.17],zt),st(j,[.12,.075,.11],[0,.205,-.12],re);let i=new ee;i.position.set(0,.25,-.19),j.add(i),Xe(i,.055,.25,[0,0,0],zt,8),Xe(i,.064,.035,[0,0,.12],re,8);let t=new lt(new Bi(.044,8),Xd);t.position.z=.14,i.add(t),st(j,[.09,.035,.09],[0,.19,.03],zt),st(j,[.09,.19,.12],[.012,-.15,.16],ji,[-.17,0,0]),st(j,[.11,.04,.4],[0,-.008,.44],zt),st(j,[.08,.11,.08],[0,.005,.64],ji),st(j,[.07,.095,.06],[0,.015,.72],zt),Ye=new ee,ro.set(0,-.145,.035),j.add(Ye),st(Ye,[.11,.26,.16],[0,-.13,0],zt,[-.06,0,0]),st(Ye,[.12,.028,.17],[0,-.255,-.01],re);for(let e=0;e<4;e++)st(Ye,[.115,.012,.17],[0,-.07-e*.045,0],lf);st(j,[.18,.012,.13],[0,-.045,.56],zt)}function zS(i){let t=i.id==="tt",e=i.id==="glock-17",n=t?.39:e?.34:.32,s=-.055,r=e?ji:re;st(j,[.14,.095,.31],[0,-.035,.055],zt),st(j,[.13,.105,n],[0,.035,s],r),st(j,[.12,.018,n*.78],[0,.092,s-.015],_s),Xe(j,t?.025:.022,t?.35:.28,[0,.025,-.27],zt,9),st(j,[.09,.19,.12],[.008,-.15,.155],e?ji:aa,[-.19,0,0]),st(j,[.095,.035,.13],[.008,-.235,.16],zt,[-.19,0,0]),st(j,[.013,.075,.015],[.02,-.1,.08],re,[.22,0,0]),st(j,[.035,.038,.035],[0,.105,.075],zt),st(j,[.035,.04,.03],[0,.105,s-n*.46],zt),e?(st(j,[.17,.035,.18],[0,-.068,-.11],zt),st(j,[.105,.018,.08],[0,.1,-.17],lf)):(st(j,[.018,.075,.19],[.076,.035,.035],zt),st(j,[.02,.07,.16],[-.078,.035,.035],_s),t&&st(j,[.012,.085,.17],[.075,.035,-.12],_s),st(j,[.09,.14,.018],[0,-.16,.22],Hl,[-.19,0,0])),Ye=new ee,ro.set(0,-.17,.15),j.add(Ye),st(Ye,[.09,.18,.105],[0,-.08,0],zt,[-.17,0,0]),st(Ye,[.095,.018,.11],[0,-.17,-.005],_s,[-.17,0,0])}function BS(){st(j,[.2,.17,.39],[0,.005,.02],re),st(j,[.14,.055,.31],[0,.11,.01],zt),Xe(j,.038,.98,[0,.052,-.77],_s,10),Xe(j,.046,.12,[0,.052,-1.32],zt,10),Xe(j,.027,.84,[0,-.055,-.63],zt,10),st(j,[.045,.1,.08],[0,.135,-1.17],re),st(j,[.11,.035,.17],[0,.13,-.12],zt),st(j,[.11,.21,.13],[0,-.16,.16],ji,[-.14,0,0]),st(j,[.14,.12,.43],[0,0,.48],Ea),st(j,[.16,.13,.05],[0,-.005,.69],zt),st(j,[.19,.012,.1],[0,-.06,.57],zt),In=new ee,js.set(0,-.035,-.48),In.position.copy(js),j.add(In),st(In,[.16,.11,.26],[0,0,0],Ea),st(In,[.17,.018,.23],[0,.052,0],Hl);for(let t=0;t<5;t++)st(In,[.17,.014,.018],[0,-.045+t*.021,-.105],zt);let i=new lt(new Zn(.065,.009,5,12),re);i.position.set(0,-.095,.11),j.add(i),st(j,[.018,.08,.02],[.01,-.095,.08],zt),Ye=null}function FS(i){if(i.model==="cleaver")st(j,[.075,.24,.085],[0,-.1,.2],aa,[-.12,0,0]),st(j,[.09,.055,.095],[0,-.205,.2],re),st(j,[.31,.24,.065],[-.02,.075,-.17],om,[0,0,-.08]),st(j,[.26,.025,.072],[-.035,-.048,-.18],_s,[0,0,-.08]),st(j,[.075,.22,.06],[.1,.08,-.19],re,[0,0,-.1]),st(j,[.025,.025,.02],[0,-.07,.2],lf);else if(i.model==="sledgehammer"){Xe(j,.033,.98,[0,-.02,-.08],Hl,8),Xe(j,.043,.34,[0,-.02,.24],aa,8);for(let t=0;t<4;t++)st(j,[.09,.012,.018],[0,-.02,.12+t*.055],re);st(j,[.42,.2,.22],[0,.02,-.64],re),st(j,[.11,.23,.24],[-.18,.02,-.64],zt),st(j,[.11,.23,.24],[.18,.02,-.64],zt),st(j,[.26,.035,.235],[0,.135,-.64],_s)}else if(i.model==="shovel")Xe(j,.029,.98,[0,-.005,-.12],Ea,10),Xe(j,.04,.25,[0,0,.28],aa,9),st(j,[.11,.07,.075],[0,-.005,-.36],re),st(j,[.31,.045,.32],[0,-.035,-.59],_s,[.08,0,0]),st(j,[.29,.018,.075],[0,-.006,-.69],om,[.08,0,0]),st(j,[.035,.024,.035],[0,.015,-.43],zt),mn=new lt(new Ur(.12,1),El),mn.scale.set(1.15,.62,1.45),mn.position.set(0,.006,-.57),mn.rotation.set(.18,.2,-.12),mn.visible=_i>0,j.add(mn);else{Xe(j,.058,.88,[0,-.005,-.17],Ea,9),Xe(j,.045,.28,[0,-.01,.33],aa,8),st(j,[.12,.1,.04],[0,-.005,.17],zt);for(let t=0;t<7;t++){let e=-.52+t*.105,n=t%2===0?1:-1,s=new lt(new Br(.021,.13,4),IS);s.position.set(n*.062,.018,e),s.rotation.z=n*Math.PI/2,j.add(s),st(j,[.025,.025,.025],[n*.035,.018,e+.035],zt)}}}function US(i){NS(),Yi(i)?FS(i):i.model==="ak"?LS():i.model==="m4"?DS():i.type==="pistol"?zS(i):i.type==="shotgun"&&BS();let t=Yi(i)?{position:[.29,-.34,-.82],rotation:[.2,.22,.04]}:i.type==="pistol"?{position:[.3,-.39,-.69],rotation:[.18,.22,.02]}:i.type==="shotgun"?{position:[.28,-.34,-.82],rotation:[.23,.24,.015]}:{position:[.28,-.33,-.78],rotation:[.25,.25,.015]};Hn.set(...t.position),kn.set(...t.rotation,"XYZ"),qe.position.copy(Hn),qe.rotation.copy(kn);let e=i.type==="pistol"?-.43:i.type==="shotgun"?-1.38:Yi(i)?0:-1.09;wn.position.set(0,i.type==="shotgun"?.052:.025,e),wn.visible=!1,mn&&(mn.visible=_i>0),j.visible=!0}function xo(){return Vi.get(Fe)||null}function kl(){return Fe&&cf.get(Fe)||null}function hf(i,t=!0){let e=Vi.get(i);return e?(Fe&&Fe!==i&&uf(!1,!1),Fe=i,rn=!1,Js=0,Cn=0,ao=0,Ks=0,Nl=!1,qi=0,Rl=null,Zr=0,ys=0,Zs=0,US(e),qe.visible=!me&&!qt,La(),si(),t&&ue(`${e.name.toUpperCase()} \xB7 \u0413\u041E\u0422\u041E\u0412\u041E`,.9),!0):!1}function OS(){let i=j.clone(!0);return i.traverse(t=>{t.isMesh&&(t.geometry=t.geometry.clone(),Array.isArray(t.material)?t.material=t.material.map(e=>e.clone()):t.material=t.material.clone(),t.castShadow=!0,t.receiveShadow=!0)}),i.scale.setScalar(.72),i}function HS(i){return i.type==="pistol"?new pn(new w(.085,.055,.22)):i.id==="shovel"?new pn(new w(.14,.065,.52)):i.type==="melee"?new pn(new w(.19,.085,i.id==="sledgehammer"?.62:.48)):new pn(new w(.09,.065,i.type==="shotgun"?.72:.66))}function uf(i=!0,t=!0){let e=xo();if(!e)return null;_o();let n=it.position.x+sn.x*1,s=it.position.z+sn.z*1,r=Math.max(Zt(n)+.68,it.position.y-.08),o=OS(),a=e.type==="pistol"?1:(e.id==="shovel",2),c=e.type==="pistol"?2:e.id==="shovel"?3:2,l={kind:"weapon",weaponId:e.id,type:e.id==="shovel"?"\u041B\u041E\u041F\u0410\u0422\u0410":"\u041E\u0420\u0423\u0416\u0418\u0415",name:e.name,mass:e.weight,range:4.8,description:e.description,inventoryWidth:a,inventoryHeight:c,inventoryIcon:e.type==="tool"?"\u2692":"\u25A3"},h=nr(l,HS(e),e.weight,[n,r,s],o,Xi),u=Math.max(.45,Math.min(1.2,Math.sqrt(2.8/e.weight))),d=i?7.2*u:1.15;h.velocity.set(sn.x*d+it.velocity.x*.45,sn.y*d+(i?1.15:.08)+it.velocity.y*.2,sn.z*d+it.velocity.z*.45),h.angularVelocity.set(i?(Math.random()-.5)*3.2:0,i?(Math.random()-.5)*3.2:0,i?(Math.random()-.5)*2.4:0);let f=h.gameMeta;return h.collisionFilterMask=f.originalCollisionFilterMask&~oo,f.playerCollisionSuspended=!0,f.playerCollisionReEnableAfter=vo+.42,h.wakeUp(),kt.broadphase.dirty=!0,Fe=null,rn=!1,Cn=0,ao=0,wn.visible=!1,Zs=0,j.visible=!1,qe.visible=!1,La(),si(),t&&ue(`${i?"\u0411\u0420\u041E\u0421\u041E\u041A":"\u041F\u041E\u041B\u041E\u0416\u0415\u041D\u041E"} \xB7 ${e.name.toUpperCase()}`,1),h}function kS(i){let t=i?.weaponId||(i?.type==="\u041B\u041E\u041F\u0410\u0422\u0410"?"shovel":null),e=Vi.get(t);if(!e||i.isStored||i.isHeld)return!1;let n=ni.findIndex(r=>r.body===i.body);if(n<0)return!1;let[s]=ni.splice(n,1);kt.removeBody(s.body),Ot.remove(s.visual);for(let r=$i.length-1;r>=0;r--)$i[r]===s.visual&&$i.splice(r,1);return i.isHeld=!1,i.isStored=!1,kt.broadphase.dirty=!0,hf(e.id,!1)?(ue(`${e.name.toUpperCase()} \xB7 \u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u041D\u041E`,1),Ki(),!0):!1}qe.visible=!1;j.visible=!1;function si(){let i=K("drop-button");if(!i)return;let t=!!(Fe||qt)&&!me;i.hidden=!t,i.setAttribute("aria-label",qt?"\u0412\u044B\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442":"\u0412\u044B\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u044D\u043A\u0438\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442")}function La(){si();let i=xo(),t=kl(),e=document.querySelector(".weapon-controls");e&&(e.style.display=i?"block":"none");let n=K("ammo-count"),s=K("fire-label"),r=K("fire-button"),o=K("reload-button");if(!i){n&&(n.textContent=""),s&&(s.textContent=""),r&&(r.disabled=!0,r.setAttribute("aria-label","\u041D\u0435\u0442 \u044D\u043A\u0438\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430"),r.classList.remove("melee-mode")),o&&(o.style.display="none");return}n&&(n.textContent=i.magazineSize===null?"":`${t.magazine} / ${t.reserve}`),s&&(s.textContent=Yi(i)?"\u0423\u0414\u0410\u0420":"\u041E\u0413\u041E\u041D\u042C"),r&&(r.disabled=i.magazineSize!==null&&t.magazine<=0&&t.reserve<=0,r.setAttribute("aria-label",`${i.name}: ${Yi(i)?"\u0443\u0434\u0430\u0440":"\u043E\u0433\u043E\u043D\u044C"}`),r.classList.toggle("melee-mode",Yi(i))),o&&(o.style.display=i.magazineSize===null?"none":"grid")}function zm(){if(Ys)return Ys;let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;Ys=new i;let t=Math.floor(Ys.sampleRate*.65);Sa=Ys.createBuffer(1,t,Ys.sampleRate);let e=Sa.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1;return Ys}function Bm(){try{let i=zm();if(!i||!Sa)return;i.state==="suspended"&&i.resume();let t=i.currentTime,e=.035+Math.random()*.055,n=i.createBufferSource();n.buffer=Sa;let s=i.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(850+Math.random()*1800,t),s.Q.value=1.6+Math.random()*1.4;let r=i.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.035+Math.random()*.025,t+.006),r.gain.exponentialRampToValueAtTime(1e-4,t+e),n.connect(s),s.connect(r),r.connect(i.destination),n.start(t,Math.random()*.45,e),n.stop(t+e+.01)}catch{}}function VS(i){yi&&(da=Math.max(0,da-i),da<=0&&(yi=!1,ue("\u0414\u0420\u041E\u0412\u0410 \u041F\u0420\u041E\u0413\u041E\u0420\u0415\u041B\u0418",1))),$s&&($s.visible=yi),vs&&(vs.visible=yi),ua&&(ua.intensity=yi?2.3+Math.sin(vo*17)*.28+Math.random()*.18:0);for(let t of Nm){if(!yi){t.mesh.visible=!1;continue}t.phase=(t.phase+i*t.rate)%(Math.PI*2);let e=t.phase/(Math.PI*2);t.mesh.position.set(Math.sin(t.phase*2.15)*t.spread,.11+e*.54,Math.cos(t.phase*1.55)*t.spread*.42),t.mesh.rotation.set(t.phase*.7,t.phase*.45,t.phase*1.1),t.mesh.scale.set(.65+e*.48,.72+e*.66,.62+e*.5),t.mesh.material.opacity=Math.sin(Math.PI*e)*.92,t.mesh.visible=e<.96}yi&&(vl-=i,vl<=0&&(Bm(),vl=.55+Math.random()*1.15))}function Ta(i,t="fire"){try{let e=zm();if(!e)return;e.state==="suspended"&&e.resume();let n=e.currentTime,s=i.sound,r=t==="fire"?s.duration:t==="swing"?.17:t==="impact"?.095:.075,o=t==="swing"?s.swing:t==="impact"?s.impact:s.frequency,a=t==="fire"?s.noise:t==="impact"?s.noise*.48:t==="swing"?.18:.08,c=e.createBiquadFilter();c.type=t==="swing"?"highpass":"lowpass",c.frequency.setValueAtTime(t==="fire"?s.filter:Math.max(240,s.filter*.72),n),c.Q.value=t==="swing"?.7:.5;let l=e.createGain();l.gain.setValueAtTime(Math.min(.34,a*.24),n),l.gain.exponentialRampToValueAtTime(1e-4,n+r);let h=e.createBufferSource();h.buffer=Sa,h.connect(c),c.connect(l),l.connect(e.destination),h.start(n),h.stop(n+r);let u=e.createOscillator();u.type=t==="fire"?s.waveform||"triangle":"sine",u.frequency.setValueAtTime(o,n),u.frequency.exponentialRampToValueAtTime(Math.max(32,o*(t==="swing"?.52:.36)),n+r);let d=e.createGain(),f=t==="fire"?s.bass:t==="impact"?s.bass*1.2:t==="swing"?.015:.022;d.gain.setValueAtTime(Math.max(1e-4,f),n),d.gain.exponentialRampToValueAtTime(1e-4,n+r),u.connect(d),d.connect(e.destination),u.start(n),u.stop(n+r)}catch{}}function df(){let i=xo(),t=kl();if(!(me||tn||Me||qt||!i||!t||Cn>0||i.magazineSize===null)){if(t.magazine>=i.magazineSize){ue("\u041C\u0410\u0413\u0410\u0417\u0418\u041D \u041F\u041E\u041B\u041E\u041D",.85);return}if(t.reserve<=0){ue("\u041D\u0415\u0422 \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412",.9);return}rn=!1,Cn=i.reloadDuration,ao=0,ys=0,Ta(i,"reload"),ue("\u041F\u0415\u0420\u0415\u0417\u0410\u0420\u042F\u0414\u041A\u0410",.8)}}function GS(){let i=xo(),t=kl();if(!i||!t||i.magazineSize===null)return;let e=L0(i,t);ao=1,La(),e>0&&ue("\u0413\u041E\u0422\u041E\u0412\u041E",.65)}function WS(i){let t=new ee,e=i.face?.normal?.clone()||new L(0,0,1);i.object.updateWorldMatrix(!0,!1),e.transformDirection(i.object.matrixWorld).normalize();let n=new _n({color:1119509,transparent:!0,opacity:.96,depthWrite:!1,side:Pe,polygonOffset:!0,polygonOffsetFactor:-2}),s=new _n({color:7168592,transparent:!0,opacity:.76,depthWrite:!1,side:Pe,polygonOffset:!0,polygonOffsetFactor:-2}),r=new lt(new Bc(.023,.035,8),s),o=new lt(new Bi(.024,8),n);if(t.add(r,o),t.position.copy(i.point).addScaledVector(e,.004),t.quaternion.setFromUnitVectors(new L(0,0,1),e),Ot.add(t),Qr.push({object:t,life:22,maxLife:22}),Qr.length>72){let a=Qr.shift();Fm(a)}}function Fm(i){i?.object&&(Ot.remove(i.object),i.object.traverse(t=>{t.geometry?.dispose(),t.material&&t.material!==zt&&t.material.dispose?.()}))}function qS(i){for(let t=Qr.length-1;t>=0;t--){let e=Qr[t];e.life-=i;let n=Wt.clamp(e.life/e.maxLife,0,1);e.object.traverse(s=>{s.material?.transparent&&(s.material.opacity=n*(s.geometry?.type==="RingGeometry"?.76:.96))}),e.life<=0&&(Qr.splice(t,1),Fm(e))}}function XS(i,t,e,n=1){if(!(!i||i.isStored||i.isHeld)){if(i.kind==="mannequin"&&i.human){let s=i.human,r=s.partMap[i.key]||s.partMap.torso,o=D0(s,e,i.key,n);s.hitFlash=.32;let a=new w(t.x,t.y,t.z);if(!s.active)$m(s,r,Math.max(6,o.damage*.18),a,!1);else if(s.state!=="falling"&&!s.dead){s.state="falling",s.stateTime=0,s.quietTime=0;for(let c of s.parts)c.body.type=Pt.DYNAMIC,c.body.mass=c.mass,c.body.updateMassProperties(),c.body.wakeUp();kt.broadphase.dirty=!0}if(r.body.type===Pt.DYNAMIC){let c=Yi(e)?5+o.damage*.25:1.8+o.damage*.12;r.body.applyImpulse(new w(t.x*c,t.y*c,t.z*c),new w)}o.lethal&&(s.dead=!0,s.active=!0,s.state="dead"),e.pellets||Ta(e,"impact"),ue(`${s.id} \xB7 ${e.name.toUpperCase()} \u2212${o.damage} \u041E\u0417 \xB7 ${o.health} \u041E\u0417`,1.05);return}if(i.kind==="prop"&&i.body?.type===Pt.DYNAMIC){let s=Yi(e)?7:e.type==="shotgun"?3.5:2.4;i.body.applyImpulse(new w(t.x*s,t.y*s,t.z*s),new w),i.body.wakeUp()}}}var ml=new jo;function Yd(i,t=0,e=0,n=1){ke.updateMatrixWorld(!0),ml.far=i.range,ml.setFromCamera(new ht(t,e),ke);let s=[...$i,...mm],r=z0(ml,s)[0];if(!r)return null;let o=r.object.userData.gameMeta||r.object.parent?.userData?.gameMeta;return o?XS(o,ml.ray.direction,i,n):r.object.userData.bulletSurface&&WS(r),r}function YS(i){_o(),Yd(i)}function ff(){let i=xo(),t=kl();if(!(me||tn||Me||qt||!i||Cn>0||Js>0||qi>0)){if(Yi(i)){if(Ks>0)return;Ks=i.swingDuration,Nl=!1,Js=i.cooldown,rn=!1,Ta(i,"swing");return}if(!N0(i,t)){df();return}if(La(),Js=i.cooldown,ys=i.type==="shotgun"?1.25:i.type==="rifle"?.9:.7,vi=Math.min(.5,vi+(i.type==="shotgun"?.22:.1)),Ms=Wt.clamp(Ms+(i.type==="shotgun"?.026:.009),-1.18,1.18),Ta(i,"fire"),Zs=i.type==="shotgun"?.11:.075,wn.visible=!0,wn.userData.light.intensity=i.type==="shotgun"?4.1:2.8,_o(),i.pellets){for(let e=0;e<i.pellets;e++){let n=e*2.399963229728653,s=e===0?0:i.spread*Math.sqrt(e/(i.pellets-1));Yd(i,Math.cos(n)*s,Math.sin(n)*s,1)}Zr=.34}else Yd(i);i.automatic||(rn=!1)}}function $S(i){let t=xo();if(Js=Math.max(0,Js-i),ys=Wt.damp(ys,0,18,i),!t){rn=!1,wn.visible=!1,j.visible=!1,qe.visible=!1;return}rn&&Js<=0&&Cn<=0&&ff(),Cn>0&&(Cn=Math.max(0,Cn-i),ao=1-Cn/t.reloadDuration,Cn===0&&GS()),Zs>0&&(Zs=Math.max(0,Zs-i),Zs===0&&(wn.visible=!1,wn.userData.light.intensity=0));let e=Cn>0?Math.sin(ao*Math.PI):0;if(Zr>0){Zr=Math.max(0,Zr-i);let n=1-Zr/.34;In&&In.position.set(js.x,js.y,js.z+Math.sin(n*Math.PI)*.13)}else In&&In.position.copy(js);if(qi>0){let n=1-qi/Lm,s=Math.sin(n*Math.PI);qi=Math.max(0,qi-i),qe.position.set(Hn.x+ma,Hn.y+ga-s*.17,Hn.z+s*.16),qe.rotation.set(kn.x+s*.52,kn.y+s*.04,kn.z-s*.12),qi===0&&nT()}else if(Ks>0){Ks=Math.max(0,Ks-i);let n=1-Ks/t.swingDuration,s=Math.sin(n*Math.PI);qe.position.set(Hn.x+ma,Hn.y+ga-s*.12,Hn.z+s*.08),qe.rotation.set(kn.x+s*.36,kn.y-s*.12,kn.z-s*.92),!Nl&&n>=.43&&(Nl=!0,YS(t))}else qe.position.set(Hn.x+ma,Hn.y+ga-ys*.035-e*.07,Hn.z+ys*.065),qe.rotation.set(kn.x+ys*.11-e*.08,kn.y,kn.z+e*.07);Ye&&(Ye.position.set(ro.x,ro.y-e*.18,ro.z+e*.035),Ye.rotation.x=-e*.24),In&&Cn>0&&(In.position.z=js.z+e*.08),mn&&(mn.visible=_i>0&&!qt),j.visible=!qt,qe.visible=!me&&!!t&&!qt}var yo=new Vo;yo.background=null;var Aa=new Ze(31,1,.1,20);Aa.position.set(2.35,2.05,3.9);Aa.lookAt(0,.98,0);var Ce=new ee;yo.add(Ce);var Um=new $({color:5858898,roughness:.88}),am=new $({color:3423285,roughness:.92}),jS=new $({color:2435621,roughness:.85}),Ra=new $({color:3753277,roughness:.76,metalness:.08}),Vl=new $({color:10718305,roughness:.92}),ZS=new $({color:6713939,roughness:.78}),pf=new $({color:2108202,roughness:.56,metalness:.18}),mf=new $({color:10193778,roughness:.88}),KS=new $({color:11895373,roughness:.68,metalness:.12});function ze(i,t,e,n,s=[0,0,0]){let r=new lt(new It(t[0],t[1],t[2]),n);return r.position.set(e[0],e[1],e[2]),r.rotation.set(s[0],s[1],s[2]),i.add(r),r}var Om=new lt(new nn(.67,.72,.055,28),new $({color:2568492,roughness:.96,metalness:.04}));Om.position.y=.015;yo.add(Om);ze(Ce,[.44,.24,.27],[0,.58,0],Ra);ze(Ce,[.5,.69,.3],[0,1.02,0],Um);ze(Ce,[.37,.56,.2],[0,1,-.22],Ra);ze(Ce,[.07,.52,.035],[-.13,1.03,.17],Vl,[0,0,-.1]);ze(Ce,[.07,.52,.035],[.13,1.03,.17],Vl,[0,0,.1]);ze(Ce,[.46,.07,.32],[0,.69,0],Vl);ze(Ce,[.13,.16,.06],[0,.94,.185],KS);ze(Ce,[.12,.13,.035],[0,1.05,.19],Vl);ze(Ce,[.15,.14,.15],[0,1.45,0],mf);ze(Ce,[.32,.33,.28],[0,1.67,0],mf);ze(Ce,[.38,.2,.35],[0,1.83,-.005],ZS);ze(Ce,[.4,.045,.38],[0,1.77,.005],Ra);ze(Ce,[.22,.105,.08],[0,1.59,.17],pf);ze(Ce,[.075,.105,.085],[-.145,1.59,.16],pf);ze(Ce,[.075,.105,.085],[.145,1.59,.16],pf);for(let i of[-1,1])ze(Ce,[.18,.46,.2],[i*.35,1.05,0],Um,[0,0,i*-.06]),ze(Ce,[.15,.37,.17],[i*.39,.67,.025],Ra,[0,0,i*.025]),ze(Ce,[.15,.11,.15],[i*.39,.42,.035],mf),ze(Ce,[.19,.43,.22],[i*.125,.36,0],am),ze(Ce,[.16,.34,.18],[i*.13,.17,.015],am),ze(Ce,[.2,.13,.3],[i*.13,.065,.07],jS),ze(Ce,[.23,.035,.31],[i*.13,.015,.075],Ra);yo.add(new Xo(13885391,3883063,1.6));var Hm=new $o(16769719,2.2);Hm.position.set(-2.5,4.5,3.5);yo.add(Hm);var ti=null,$d=!1,cm=0,Bd=0,Xi=Math.PI/2,Ms=-.08,ii=!0,qt=null,Qn=null,ln={x:0,y:0,pointerId:null},Vn=null,ca=0,vi=0,Ll=0,ws=100,xa=100,ya=100,Kr=58,Fd=0,me=!1,gf=0,jd=!1,km=null,Me=!1,co="bag",Zi="shovel",tn=!1,Pn=[],ei=null,JS=0,Vm=8,Gm=5,va=30,Jr={head:0,neck:0,torso:0,"arm-left":0,"arm-right":0,"leg-left":0,"leg-right":0},xf=new Set,_a=0,Ud=0,vo=0,Od=0,gl=0,lm=60,Zd=!1,He=new Set,Ca=new jo;Ca.far=5;var sn=new L,gs=new L,hm=new L;function ue(i,t=1.45){let e=K("toast");e&&(e.textContent=i,e.classList.add("visible"),_a=t)}var Ma={head:"injury-head",neck:"injury-neck",torso:"injury-torso","arm-left":"injury-arm-left","arm-right":"injury-arm-right","leg-left":"injury-leg-left","leg-right":"injury-leg-right"};function yf(){K("health-value").textContent=String(ws),K("health-bar").style.width=`${ws}%`,K("health-bar").style.background=ws<35?"#d95c50":ws<70?"#c3a66d":"#9ab779"}function Wm(){K("hunger-value").textContent=String(Math.round(xa)),K("hunger-bar").style.width=`${xa}%`,K("hunger-bar").style.background=xa<25?"#dc7950":"#c4a66e",K("thirst-value").textContent=String(Math.round(ya)),K("thirst-bar").style.width=`${ya}%`,K("thirst-bar").style.background=ya<25?"#5fa6c5":"#78aeb6",K("heat-value").textContent=String(Math.round(Kr)),K("heat-bar").style.width=`${Kr}%`,K("heat-bar").style.background=Kr<25?"#69a9c2":Kr>78?"#edaf68":"#cf8756"}function wa(i){return{head:"\u0413\u041E\u041B\u041E\u0412\u0410",neck:"\u0428\u0415\u042F",torso:"\u041A\u041E\u0420\u041F\u0423\u0421","arm-left":"\u041B\u0415\u0412\u0410\u042F \u0420\u0423\u041A\u0410","arm-right":"\u041F\u0420\u0410\u0412\u0410\u042F \u0420\u0423\u041A\u0410","leg-left":"\u041B\u0415\u0412\u0410\u042F \u041D\u041E\u0413\u0410","leg-right":"\u041F\u0420\u0410\u0412\u0410\u042F \u041D\u041E\u0413\u0410"}[i]||"\u041A\u041E\u0420\u041F\u0423\u0421"}function qm(i){let t=Jr[i]||0,e=xf.has(i);K("injury-status").textContent=e?`\u041A\u0420\u041E\u0412\u041E\u0422\u0415\u0427\u0415\u041D\u0418\u0415 \xB7 ${wa(i)}`:t>0?`\u0422\u0420\u0410\u0412\u041C\u0410 \xB7 ${wa(i)}`:`\u0411\u0415\u0417 \u0422\u0420\u0410\u0412\u041C \xB7 ${wa(i)}`,K("injury-status").classList.toggle("alert",t>0||e)}function QS(i,t){let e=Ma[i]?i:"torso",n=K(Ma[e]);Jr[e]=Math.min(1,(Jr[e]||0)+Math.max(.28,t/24)),n.classList.add("injured"),n.style.opacity=String(.55+Jr[e]*.45),Jr[e]>=.55&&(xf.add(e),K(`bleed-${e}`).classList.add("active")),km=e;for(let[s,r]of Object.entries(Ma))K(r).classList.toggle("selected",s===e);qm(e)}function Xm(i){if(!Ma[i])return;km=i;for(let[n,s]of Object.entries(Ma))K(s).classList.toggle("selected",n===i);qm(i);let t=Jr[i]||0,e=xf.has(i)?" \xB7 \u041A\u0420\u041E\u0412\u041E\u0422\u0415\u0427\u0415\u041D\u0418\u0415":t>0?` \xB7 \u0422\u0420\u0410\u0412\u041C\u0410 ${Math.round(t*100)}%`:" \xB7 \u041F\u041E\u0412\u0420\u0415\u0416\u0414\u0415\u041D\u0418\u0419 \u041D\u0415\u0422";ue(`${wa(i)}${e}`,1.2)}function um(i="\u041A\u0420\u0418\u0422\u0418\u0427\u0415\u0421\u041A\u041E\u0415 \u041F\u041E\u0412\u0420\u0415\u0416\u0414\u0415\u041D\u0418\u0415"){me||(Me&&Gn(!1),tn&&ho(!1),rn=!1,jd=!!qt,me=!0,gf=0,ws=0,yf(),K("death-detail").textContent=i,K("death-overlay").classList.add("visible"),K("death-overlay").setAttribute("aria-hidden","false"),document.body.classList.add("dead"),He.clear(),sr(),Vn=null,it.velocity.set(0,0,0),si(),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock())}function Ym(i,t="torso"){if(!ii||me)return;let e=Math.max(1,Math.round(i)),n=t==="neck"&&e>=14;if(!(Ll>0&&!n)){if(Ll=.72,ws=Math.max(0,ws-e),vi=Math.min(1.4,vi+.85),yf(),QS(t,e),document.body.classList.add("damage-flash"),setTimeout(()=>document.body.classList.remove("damage-flash"),170),t==="neck"&&e>=14){um("\u0428\u0415\u0419\u041D\u0410\u042F \u0422\u0420\u0410\u0412\u041C\u0410 \xB7 \u041A\u0420\u0418\u0422\u0418\u0427\u0415\u0421\u041A\u0410\u042F \u041A\u0420\u041E\u0412\u041E\u041F\u041E\u0422\u0415\u0420\u042F");return}if(ws===0){um(`\u0421\u041C\u0415\u0420\u0422\u0415\u041B\u042C\u041D\u041E\u0415 \u0420\u0410\u041D\u0415\u041D\u0418\u0415 \xB7 ${wa(t)}`);return}ue(`\u0423\u0414\u0410\u0420 \xB7 \u2212${e}%`,.9)}}function tT(i){if(!ii||Me||tn||me)return;xa=Math.max(0,xa-i*.045),ya=Math.max(0,ya-i*.065);let t=Math.hypot(it.position.x-Je.x,it.position.z-Je.z);Kr=O0(Kr,i,yi&&t<=3.8),Fd+=i,Fd>=.35&&(Fd=0,Wm())}function $m(i,t=i.partMap.torso,e=0,n=null,s=!1){if(i.active){if(s&&t?.body){let r=new w(sn.x*8.5,Math.max(1,sn.y*8.5),sn.z*8.5);t.body.applyImpulse(r,new w),ue("\u0418\u041C\u041F\u0423\u041B\u042C\u0421 \u041F\u0415\u0420\u0415\u0414\u0410\u041D",.85)}return}i.active=!0,i.state="falling",i.stateTime=0,i.quietTime=0,i.hitFlash=.24;for(let r of i.parts)r.body.type=Pt.DYNAMIC,r.body.mass=r.mass,r.body.updateMassProperties(),r.body.wakeUp();if(kt.broadphase.dirty=!0,t?.body){let r;if(s){r=new w(sn.x,Math.max(.08,sn.y),sn.z),r.normalize();let o=r.scale(13.5);t.body.applyImpulse(o,new w)}else{r=n&&n.lengthSquared()>.08?n.clone():new w(0,0,1);let o=r.length();r.normalize();let a=Math.min(48,Math.max(6,e*t.mass*.78));t.body.applyImpulse(r.scale(a),t.body.position)}}ue(s?`${i.id} \xB7 \u0420\u0410\u0413\u0414\u041E\u041B\u041B \u0410\u041A\u0422\u0418\u0412\u0418\u0420\u041E\u0412\u0410\u041D`:`${i.id} \xB7 \u0423\u0414\u0410\u0420 / \u0420\u0410\u0413\u0414\u041E\u041B\u041B`,1.3)}function _o(){return ke.getWorldDirection(sn),sn}function eT(){let i=it.position.y-.87,t=null,e=1.6;for(let n of ni){let s=n.body,r=s.gameMeta;if(!r||r.isStored||r.isHeld||!["prop","firewood","weapon"].includes(r.kind))continue;let o=s.position.x-it.position.x,a=s.position.z-it.position.z,c=Math.hypot(o,a);c>e||Math.abs(s.position.y-i)>1.65||(t={meta:r,distance:c,point:new L(s.position.x,s.position.y,s.position.z),steppedOn:!0},e=c)}return t}function jm(){ke.updateMatrixWorld(!0),Ca.setFromCamera(new ht(0,0),ke);let i=Ca.intersectObjects($i,!0);for(let t of i){let e=t.object.userData.gameMeta||t.object.parent?.userData?.gameMeta;if(!(!e||e.isStored||e.isEmpty||e.isHeld||t.distance>(e.range||4.5)))return{meta:e,distance:t.distance,point:t.point,aimed:!0}}return eT()}function Zm(){if(!kd)return null;ke.updateMatrixWorld(!0),Ca.setFromCamera(new ht(0,0),ke);let i=Ca.intersectObject(kd,!1)[0];return i&&i.distance<=4.8?i:null}function Km(){return Math.hypot(it.position.x-Je.x,it.position.z-Je.z)<=2.85}function dm(i,t){return Fe!=="shovel"?(ue("\u041D\u0423\u0416\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0410",1),!1):qi>0?!1:(Rl=i==="scoop"?{kind:i,drift:t}:{kind:i,point:{x:t.x,z:t.z}},qi=Lm,rn=!1,Ta(Vi.get("shovel"),"swing"),!0)}function nT(){let i=Rl;if(Rl=null,!i)return;if(i.kind==="scoop"){let e=B0(i.drift,_i);if(!e.ok){ue(e.reason==="already-carrying"?"\u0421\u041D\u0415\u0413 \u0423\u0416\u0415 \u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0415":"\u0421\u0423\u0413\u0420\u041E\u0411 \u0417\u0410\u041A\u041E\u041D\u0427\u0418\u041B\u0421\u042F",1);return}_i=e.amount,Em(i.drift),mn&&(mn.visible=!0),ue("\u0421\u041D\u0415\u0413 \u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0415 \xB7 \u041F\u0415\u0420\u0415\u041D\u041E\u0421 \u0417\u0410\u041C\u0415\u0414\u041B\u042F\u0415\u0422",1.35);return}let t=F0(_i,i.point);if(!t.ok){ue("\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0415 \u041D\u0415\u0422 \u0421\u041D\u0415\u0413\u0410",.9);return}jr(t.pile.x,t.pile.z,t.pile.amount),_i=t.remaining,mn&&(mn.visible=!1),ue("\u0421\u041D\u0415\u0413 \u0421\u0411\u0420\u041E\u0428\u0415\u041D \xB7 \u041D\u041E\u0412\u042B\u0419 \u0421\u0423\u0413\u0420\u041E\u0411",1.2)}function Ki(){si();let i=K("action-button");if(!i)return;let t=K("action-label");if(t.textContent="\u0414\u0415\u0419\u0421\u0422\u0412\u0418\u0415",me){Qn=null,i.classList.remove("is-holding","has-target");return}if(Qn=jm(),qt){let n=qt.gameMeta?.kind==="firewood"&&Km();t.textContent=n?yi?"\u041F\u041E\u0414\u0411\u0420\u041E\u0421\u0418\u0422\u042C \u0414\u0420\u041E\u0412\u0410":"\u0420\u0410\u0417\u0416\u0415\u0427\u042C \u041F\u0415\u0427\u042C":"\u041F\u041E\u041B\u041E\u0416\u0418\u0422\u042C \u041F\u0420\u0415\u0414\u041C\u0415\u0422",i.classList.add("is-holding"),i.classList.toggle("has-target",n);return}if(i.classList.remove("is-holding"),Fe==="shovel"&&_i>0){t.textContent="\u0421\u0411\u0420\u041E\u0421\u0418\u0422\u042C \u0421\u041D\u0415\u0413",i.classList.toggle("has-target",!!(Qn||Zm()));return}Qn?.meta.kind==="snowdrift"?t.textContent=Fe==="shovel"?"\u0427\u0415\u0420\u041F\u0410\u0422\u042C \u0421\u041D\u0415\u0413":"\u041D\u0423\u0416\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0410":Qn?.meta.kind==="stove"?t.textContent="\u041D\u0423\u0416\u041D\u042B \u0414\u0420\u041E\u0412\u0410":Qn?.meta.kind==="weapon"||Qn?.meta.type==="\u041B\u041E\u041F\u0410\u0422\u0410"?t.textContent="\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C":(Qn?.meta.kind==="firewood"||Qn?.meta.kind==="prop")&&(t.textContent="\u0412\u0417\u042F\u0422\u042C"),i.classList.toggle("has-target",!!Qn)}function vf(i){let t=i.body;t.collisionFilterMask=i.originalCollisionFilterMask&~oo,i.playerCollisionSuspended=!0,i.playerCollisionReEnableAfter=vo+.35}function Jm(i){let t=i.body;!t||t.gameMeta?.isHeld||i.isStored||(qt=t,t.gameMeta.isHeld=!0,t.type=Pt.DYNAMIC,t.mass=t.gameMeta.initialMass,t.gameMeta.playerCollisionSuspended=!1,t.collisionFilterMask=t.gameMeta.originalCollisionFilterMask&~oo,t.linearDamping=.82,t.angularDamping=.92,t.updateMassProperties(),t.velocity.set(0,0,0),t.angularVelocity.set(0,0,0),t.force.set(0,0,0),t.wakeUp(),kt.broadphase.dirty=!0,j.visible=!1,qe.visible=!1,si(),ue(`${i.name} \xB7 ${i.mass.toFixed(1)} \u041A\u0413`,1.15))}function Qm(){if(!qt)return;let i=qt,t=i.gameMeta;_o(),i.type=Pt.DYNAMIC,i.mass=t.initialMass,vf(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.updateMassProperties(),i.gameMeta.isHeld=!1,i.force.set(0,0,0),i.updateAABB();let e=Math.max(.08,(i.aabb.upperBound.y-i.aabb.lowerBound.y)*.5);i.position.y=Math.max(i.position.y,e+.025);let s=9.6*Math.max(.34,Math.min(1.15,Math.sqrt(2.8/t.initialMass)));i.velocity.set(sn.x*s+it.velocity.x,sn.y*s+1.05+it.velocity.y,sn.z*s+it.velocity.z),i.angularVelocity.set((Math.random()-.5)*3.4,(Math.random()-.5)*3.4,(Math.random()-.5)*3.4),i.wakeUp(),kt.broadphase.dirty=!0,qt=null,si(),ue(`\u0411\u0420\u041E\u0421\u041E\u041A \xB7 ${t.name}`,.95)}function tg(){if(!qt)return;let i=qt,t=i.gameMeta;i.type=Pt.DYNAMIC,i.mass=t.initialMass,vf(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.gameMeta.isHeld=!1,i.updateMassProperties(),i.updateAABB();let e=Math.max(.08,(i.aabb.upperBound.y-i.aabb.lowerBound.y)*.5);i.position.y=Math.max(i.position.y,e+.025),i.velocity.set(it.velocity.x*.45,-.18,it.velocity.z*.45),i.angularVelocity.set(0,0,0),i.wakeUp(),kt.broadphase.dirty=!0,qt=null,si(),ue(`\u041F\u041E\u041B\u041E\u0416\u0415\u041D\u041E \xB7 ${t.name}`,.95)}function iT(){if(!qt)return;let i=qt,t=i.gameMeta;t.isHeld=!1,vf(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.velocity.set(0,0,0),i.angularVelocity.set(0,0,0),i.wakeUp(),qt=null,kt.broadphase.dirty=!0,si()}function eg(){return Pn.reduce((i,t)=>i+t.meta.mass,0)}function sT(i,t){for(let e=0;e<=Gm-t;e++)for(let n=0;n<=Vm-i;n++)if(!Pn.some(r=>n<r.x+r.width&&n+i>r.x&&e<r.y+r.height&&e+t>r.y))return{x:n,y:e};return null}function rT(){if(!bl)return;let i=[{weaponId:"shovel",x:0,y:0,width:2,height:3},{weaponId:"glock-17",x:2,y:0,width:1,height:2},{weaponId:"ak-47",x:3,y:0,width:2,height:3}];for(let t of i){let e=Vi.get(t.weaponId);Pn.push({id:`sandbox-${e.id}`,meta:{kind:"gear",weaponId:e.id,type:e.type==="tool"?"\u041B\u041E\u041F\u0410\u0422\u0410":e.type==="rifle"?"\u0410\u0412\u0422\u041E\u041C\u0410\u0422":"\u041F\u0418\u0421\u0422\u041E\u041B\u0415\u0422",name:e.name,mass:e.weight,description:e.description,inventoryIcon:e.type==="tool"?"\u2692":e.type==="rifle"?"\u2301":"\u25A3"},x:t.x,y:t.y,width:t.width,height:t.height})}ei="sandbox-shovel"}function oT(i){let t=Pn.find(r=>r.id===i);if(!t)return;Gl("bag"),ei=i,K("inventory-selected-name").textContent=t.meta.name,K("inventory-selected-weight").textContent=`${t.meta.mass.toFixed(1)} \u043A\u0433`,K("inventory-selected-description").textContent=t.meta.description||t.meta.detail||"\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439.";let e=K("inventory-take"),n=!!t.meta.weaponId,s=n&&Fe===t.meta.weaponId;e.disabled=!!qt||s,e.textContent=qt?"\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422":s?"\u0423\u0416\u0415 \u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u041D\u041E":n?"\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C":"\u0414\u041E\u0421\u0422\u0410\u0422\u042C \u041F\u0420\u0415\u0414\u041C\u0415\u0422",K("inventory-message").textContent=`${t.meta.type} \xB7 ${t.width} \xD7 ${t.height} \u042F\u0427\u0415\u0419\u041A\u0418`;for(let r of K("inventory-grid").querySelectorAll(".inventory-item"))r.classList.toggle("selected",r.dataset.itemId===i),r.setAttribute("aria-pressed",String(r.dataset.itemId===i))}function aT(i){let t=Vi.get(i);if(!t)return;co="all",Zi=i,K("inventory-tab-bag").classList.remove("active"),K("inventory-tab-bag").setAttribute("aria-selected","false"),K("inventory-tab-all").classList.add("active"),K("inventory-tab-all").setAttribute("aria-selected","true"),K("inventory-bag-view").hidden=!0,K("inventory-all-view").hidden=!1,K("inventory-selected-name").textContent=t.name,K("inventory-selected-weight").textContent=`${t.weight.toFixed(1)} \u043A\u0433`;let e=t.magazineSize===null?t.type==="tool"?"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442":"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0431\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439":`\u041C\u0430\u0433\u0430\u0437\u0438\u043D ${t.magazineSize} \xB7 \u0437\u0430\u043F\u0430\u0441 ${t.reserve} \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432`,n=t.pellets?`${t.pellets} \u0434\u0440\u043E\u0431\u0438\u043D \xD7 ${t.damage} \u0443\u0440\u043E\u043D\u0430`:`${t.damage} \u0443\u0440\u043E\u043D\u0430 \u0437\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435`;K("inventory-selected-description").textContent=`${t.description} ${n}. ${e}.`;let s=Fe===i;K("inventory-take").disabled=s,K("inventory-take").textContent=s?"\u0423\u0416\u0415 \u0412 \u0420\u0423\u041A\u0410\u0425":"\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C";let r=cf.get(i);K("inventory-message").textContent=`${t.category.toUpperCase()} \xB7 ${t.type==="tool"?"\u0418\u041D\u0421\u0422\u0420\u0423\u041C\u0415\u041D\u0422":t.magazineSize===null?"\u0411\u041B\u0418\u0416\u041D\u0418\u0419 \u0411\u041E\u0419":`${r.magazine} / ${r.reserve} \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412`}`;for(let o of K("inventory-all-grid").querySelectorAll(".armory-item"))o.classList.toggle("selected",o.dataset.weaponId===i),o.setAttribute("aria-pressed",String(o.dataset.weaponId===i))}function Gl(i){co=i==="all"?"all":"bag";let t=co==="all";K("inventory-tab-bag").classList.toggle("active",!t),K("inventory-tab-bag").setAttribute("aria-selected",String(!t)),K("inventory-tab-all").classList.toggle("active",t),K("inventory-tab-all").setAttribute("aria-selected",String(t)),K("inventory-bag-view").hidden=t,K("inventory-all-view").hidden=!t,ng()}function ng(){let i=K("inventory-take");if(co==="all"){Vi.has(Zi)||(Zi="shovel");let s=Vi.get(Zi),r=cf.get(s.id);K("inventory-selected-name").textContent=s.name,K("inventory-selected-weight").textContent=`${s.weight.toFixed(1)} \u043A\u0433`;let o=s.magazineSize===null?s.type==="tool"?"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442":"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0431\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439":`\u041C\u0430\u0433\u0430\u0437\u0438\u043D ${s.magazineSize} \xB7 \u0437\u0430\u043F\u0430\u0441 ${s.reserve} \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432`,a=s.pellets?`${s.pellets} \u0434\u0440\u043E\u0431\u0438\u043D \xD7 ${s.damage} \u0443\u0440\u043E\u043D\u0430`:`${s.damage} \u0443\u0440\u043E\u043D\u0430 \u0437\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435`;K("inventory-selected-description").textContent=`${s.description} ${a}. ${o}.`;let c=Fe===s.id;i.disabled=c,i.textContent=c?"\u0423\u0416\u0415 \u0412 \u0420\u0423\u041A\u0410\u0425":"\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C",K("inventory-message").textContent=`${s.category.toUpperCase()} \xB7 ${s.type==="tool"?"\u0418\u041D\u0421\u0422\u0420\u0423\u041C\u0415\u041D\u0422":s.magazineSize===null?"\u0411\u041B\u0418\u0416\u041D\u0418\u0419 \u0411\u041E\u0419":`${r.magazine} / ${r.reserve} \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412`}`;return}let t=Pn.find(s=>s.id===ei);if(!t){ei=null,K("inventory-selected-name").textContent="\u041F\u0420\u0415\u0414\u041C\u0415\u0422 \u041D\u0415 \u0412\u042B\u0411\u0420\u0410\u041D",K("inventory-selected-weight").textContent="\u2014",K("inventory-selected-description").textContent="\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0432 \u0441\u0435\u0442\u043A\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0435\u0433\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B.",i.disabled=!0,i.textContent="\u0412\u042B\u0411\u0415\u0420\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422",K("inventory-message").textContent=Pn.length?"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0435\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430.":"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0443\u0431\u0440\u0430\u0442\u044C \u0441\u044E\u0434\u0430 \u0438\u0437 \u0440\u0443\u043A.";return}K("inventory-selected-name").textContent=t.meta.name,K("inventory-selected-weight").textContent=`${t.meta.mass.toFixed(1)} \u043A\u0433`,K("inventory-selected-description").textContent=t.meta.description||t.meta.detail||"\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439.";let e=!!t.meta.weaponId,n=e&&Fe===t.meta.weaponId;i.disabled=!!qt||n,i.textContent=qt?"\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422":n?"\u0423\u0416\u0415 \u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u041D\u041E":e?"\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C":"\u0414\u041E\u0421\u0422\u0410\u0422\u042C \u041F\u0420\u0415\u0414\u041C\u0415\u0422"}function cT(){let i=K("inventory-all-grid");i.replaceChildren();for(let t of ol){let e=document.createElement("button");e.type="button",e.className=`armory-item${t.id===Zi?" selected":""}`,e.dataset.weaponId=t.id,e.setAttribute("aria-pressed",String(t.id===Zi)),e.title=`${t.name} \xB7 ${t.description}`;let n=document.createElement("span");n.className=`armory-item-icon ${t.type}`,n.textContent=t.type==="tool"?"\u2692":t.type==="melee"?"\u2694":t.type==="pistol"?"\u25A3":t.type==="shotgun"?"\u25C6":"\u2301";let s=document.createElement("b");s.className="armory-item-name",s.textContent=t.name;let r=document.createElement("small");r.className="armory-item-category",r.textContent=t.category.toUpperCase();let o=document.createElement("small");o.className="armory-item-stats",o.textContent=t.magazineSize===null?`${t.damage} \u0423\u0420\u041E\u041D \xB7 ${t.range.toFixed(1)} \u041C`:`${t.magazineSize} \xB7 ${t.damage}${t.pellets?` \xD7 ${t.pellets}`:""}`,e.append(n,s,r,o),e.addEventListener("click",()=>aT(t.id)),i.appendChild(e)}}function lo(){let i=K("inventory-grid");Pn.some(e=>e.id===ei)||(ei=Pn[0]?.id||null),i.replaceChildren();for(let e=0;e<Vm*Gm;e++){let n=document.createElement("div");n.className="inventory-cell",n.setAttribute("aria-hidden","true"),i.appendChild(n)}for(let e of Pn){let n=document.createElement("button");n.type="button",n.className=`inventory-item${e.id===ei?" selected":""}`,n.dataset.itemId=e.id,n.setAttribute("aria-pressed",String(e.id===ei)),n.style.gridColumn=`${e.x+1} / span ${e.width}`,n.style.gridRow=`${e.y+1} / span ${e.height}`,n.title=`${e.meta.name} \xB7 ${e.meta.mass.toFixed(1)} \u043A\u0433 \xB7 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F`;let s=document.createElement("span");s.className="inventory-item-top";let r=document.createElement("b");r.className="inventory-item-icon",r.textContent=e.meta.inventoryIcon||"\u25A3";let o=document.createElement("small");o.className="inventory-item-weight",o.textContent=`${e.meta.mass.toFixed(1)} \u043A\u0433`,s.append(r,o);let a=document.createElement("span");a.className="inventory-item-name",a.textContent=e.meta.name,n.append(s,a),n.addEventListener("click",()=>oT(e.id)),i.appendChild(n)}let t=eg();K("inventory-weight").textContent=t.toFixed(1),K("inventory-limit").textContent=va.toFixed(1),K("inventory-weight-bar").style.width=`${Math.min(100,t/va*100)}%`,K("inventory-weight-bar").style.background=t/va>.82?"#d08353":"#a4c17e",K("inventory-empty").style.display=co==="bag"&&Pn.length===0?"flex":"none",K("inventory-drop").disabled=!qt,K("inventory-stash").disabled=!qt,cT(),ng()}function _f(){if($d)return;let t=K("inventory-preview-frame").getBoundingClientRect();if(!(t.width<8||t.height<8)){if(!ti)try{ti=new ko({canvas:K("inventory-preview-canvas"),alpha:!0,antialias:!0,powerPreference:"low-power"}),ti.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),ti.outputColorSpace=De,ti.toneMapping=kc,ti.toneMappingExposure=1.05,ti.setClearColor(0,0),K("inventory-preview-fallback").style.display="none"}catch{$d=!0,K("inventory-preview-fallback").classList.add("visible");return}ti.setSize(t.width,t.height,!1),Aa.aspect=t.width/t.height,Aa.updateProjectionMatrix()}}function lT(i){!Me||$d||(ti||_f(),ti&&(cm+=i,Bd+=i,Ce.rotation.y=Math.sin(cm*.42)*.46,!(Bd<1/30)&&(Bd=0,ti.render(yo,Aa))))}function Gn(i){if(i&&(!ii||me||tn))return;Me=i;let t=K("inventory-overlay");t.classList.toggle("open",i),t.setAttribute("aria-hidden",String(!i)),i?(rn=!1,Es=null,sr(),ir(),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),lo(),_f()):He.clear()}function ho(i){if(i&&(!ii||me))return;i&&Me&&Gn(!1),tn=i;let t=K("menu-overlay");t.classList.toggle("open",i),t.setAttribute("aria-hidden",String(!i)),i?(rn=!1,Es=null,sr(),ir(),He.clear(),_a=0,K("toast").classList.remove("visible"),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock()):He.clear()}function hT(){if(!qt)return;let i=qt,t=i.gameMeta,e=t.inventoryWidth||2,n=t.inventoryHeight||2;if(eg()+t.mass>va+1e-6){ue(`\u041F\u0420\u0415\u0412\u042B\u0428\u0415\u041D \u041B\u0418\u041C\u0418\u0422 \xB7 ${va} \u041A\u0413`,1.15),K("inventory-message").textContent="\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0442\u044F\u0436\u0435\u043B\u043E: \u043E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u0435 \u043C\u0435\u0441\u0442\u043E \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u043B\u0435\u0433\u0447\u0435.";return}let r=sT(e,n);if(!r){ue("\u041D\u0415\u0422 \u0421\u0412\u041E\u0411\u041E\u0414\u041D\u042B\u0425 \u042F\u0427\u0415\u0415\u041A",1);return}let o=ni.find(c=>c.body===i);if(!o)return;i.gameMeta.isHeld=!1,i.gameMeta.isStored=!0,i.gameMeta.playerCollisionSuspended=!1,i.collisionFilterMask=t.originalCollisionFilterMask,i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.velocity.set(0,0,0),i.angularVelocity.set(0,0,0),kt.removeBody(i),Ot.remove(o.visual),qt=null,si();let a={id:`bag-${++JS}`,meta:t,body:i,visual:o.visual,x:r.x,y:r.y,width:e,height:n};Pn.push(a),ei=a.id,lo(),Ki(),ue(`\u0412 \u0420\u042E\u041A\u0417\u0410\u041A\u0415 \xB7 ${t.name}`,1),Gl("bag"),Gn(!0)}function uT(i){if(me)return;if(qt){ue("\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u0423\u0414\u0415\u0420\u0416\u0418\u0412\u0410\u0415\u041C\u042B\u0419 \u041F\u0420\u0415\u0414\u041C\u0415\u0422",1);return}let t=Pn.findIndex(o=>o.id===i);if(t<0)return;let[e]=Pn.splice(t,1);if(e.meta.weaponId){hf(e.meta.weaponId),Gn(!1),lo(),Ki();return}let{body:n,visual:s,meta:r}=e;r.isStored=!1,n.type=Pt.DYNAMIC,n.mass=r.initialMass,n.collisionFilterMask=r.originalCollisionFilterMask,n.linearDamping=r.originalLinearDamping,n.angularDamping=r.originalAngularDamping,n.force.set(0,0,0),n.velocity.set(0,0,0),n.angularVelocity.set(0,0,0),n.updateMassProperties(),Ot.add(s),kt.addBody(n),kt.broadphase.dirty=!0,Gn(!1),Jm(r),lo()}function dT(){if(!qt||qt.gameMeta?.kind!=="firewood"||!Km())return!1;let i=qt,t=i.gameMeta,e=ni.findIndex(s=>s.body===i);if(e<0)return!1;let[n]=ni.splice(e,1);t.isHeld=!1,qt=null,kt.removeBody(i),Ot.remove(n.visual);for(let s=$i.length-1;s>=0;s--)$i[s].userData.gameMeta===t&&$i.splice(s,1);return kt.broadphase.dirty=!0,si(),da+=52,yi=!0,vs&&(vs.visible=!0),vl=.75+Math.random()*.55,Bm(),ue(da>52?"\u0414\u0420\u041E\u0412\u0410 \u0414\u041E\u0411\u0410\u0412\u041B\u0415\u041D\u042B \xB7 \u041F\u0415\u0427\u042C \u0413\u041E\u0420\u0418\u0422":"\u041F\u0415\u0427\u042C \u0420\u0410\u0421\u0422\u041E\u041F\u041B\u0415\u041D\u0410",1.2),!0}function ig(){if(me||!ii||Me||tn)return;if(qt){dT()||tg(),Ki();return}let i=jm();if(Qn=i,i&&(i.meta.kind==="weapon"||i.meta.type==="\u041B\u041E\u041F\u0410\u0422\u0410")){kS(i.meta);return}if(Fe==="shovel"&&_i>0){let t=Zm();t?dm("dump",t.point):ue("\u041D\u0410\u041F\u0420\u0410\u0412\u042C\u0422\u0415 \u041B\u041E\u041F\u0410\u0422\u0423 \u041D\u0410 \u041F\u041E\u041B",1);return}if(!i){ue("\u041D\u0415\u0422 \u0426\u0415\u041B\u0418 \u0412 \u0417\u041E\u041D\u0415 \u0414\u041E\u0421\u042F\u0413\u0410\u0415\u041C\u041E\u0421\u0422\u0418",.9);return}if(i.meta.kind==="snowdrift"){if(Fe!=="shovel"){ue("\u041D\u0423\u0416\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0410",1);return}dm("scoop",i.meta.drift);return}if(i.meta.kind==="stove"){ue("\u0412\u041E\u0417\u042C\u041C\u0418\u0422\u0415 \u0414\u0420\u041E\u0412\u0410 \u0418 \u0418\u0421\u041F\u041E\u041B\u042C\u0417\u0423\u0419\u0422\u0415 \u0414\u0415\u0419\u0421\u0422\u0412\u0418\u0415",1.15);return}if(i.meta.kind==="firewood"||i.meta.kind==="prop"){Jm(i.meta),Ki();return}i.meta.kind==="mannequin"&&(_o(),$m(i.meta.human,i.meta.human.partMap[i.meta.key]||i.meta.human.partMap.torso,0,null,!0))}function fT(i){if(!qt||me)return;_o();let t=ke.getWorldPosition(gs);hm.copy(sn).multiplyScalar(1.62),gs.add(hm),gs.y-=.11;let e=qt;e.updateAABB();let n=Math.max(.08,(e.aabb.upperBound.y-e.aabb.lowerBound.y)*.5);gs.y=Wt.clamp(gs.y,n+.025,5.4-n);let s=Math.sqrt(2.8/e.gameMeta.initialMass),r=Wt.clamp(7.5*s,3,9),o=Wt.clamp(13*s,5,18);e.velocity.set(Wt.clamp((gs.x-e.position.x)*o,-r,r),Wt.clamp((gs.y-e.position.y)*o,-r,r),Wt.clamp((gs.z-e.position.z)*o,-r,r)),e.angularVelocity.set(0,0,0),e.force.set(0,e.mass*9.82,0),e.wakeUp(),e.aabbNeedsUpdate=!0}function pT(){return!Me&&!tn&&!me&&(He.has("KeyW")||He.has("KeyA")||He.has("KeyS")||He.has("KeyD")||Math.abs(ln.x)+Math.abs(ln.y)>.12)}function mT(i){if(me){it.velocity.x=0,it.velocity.z=0;return}let t=Me?0:ln.x,e=Me?0:-ln.y;Me||(He.has("KeyA")&&(t-=1),He.has("KeyD")&&(t+=1),He.has("KeyW")&&(e+=1),He.has("KeyS")&&(e-=1));let n=Math.hypot(t,e);n>1&&(t/=n,e/=n);let s=!Me&&(Ol||He.has("ShiftLeft")||He.has("ShiftRight")||Math.hypot(ln.x,ln.y)>.84),r=U0(s?8.5:5.5,_i),o=-Math.sin(Xi)*e+Math.cos(Xi)*t,a=-Math.cos(Xi)*e-Math.sin(Xi)*t,c=Math.min(1,i*(n>.02?13:17));it.velocity.x+=(o*r-it.velocity.x)*c,it.velocity.z+=(a*r-it.velocity.z)*c,n>.02&&(ca+=i*(r+1.6))}function gT(i){if(Ll=Math.max(0,Ll-i),vi=Math.max(0,vi-i*2.6),me){let o=Wt.smoothstep(gf,.05,1.25);ke.position.set(it.position.x,it.position.y+.77-o*.68,it.position.z),ke.rotation.set(Ms+o*.08,Xi,-o*.62,"YXZ"),ma=0,ga=0;return}let t=pT(),e=t?Math.sin(ca*2)*.026:0,n=t?Math.sin(ca)*.012:0,s=vi>0?(Math.random()-.5)*.045*vi:0,r=vi>0?(Math.random()-.5)*.036*vi:0;ke.position.set(it.position.x+n+s,it.position.y+.77+e+r,it.position.z),ke.rotation.set(Ms,Xi,0,"YXZ"),ga=t?Math.sin(ca*2+.75)*.012:0,ma=t?Math.sin(ca)*.008:0}function sg(){Cl=!1,Il=it.position.y,Pl=0}function rg(){if(!Cl)return;let i=Zt(it.position.x)+.87,t=Il-i,e=Pl;if(sg(),t<2.4||e<5.2)return;let n=Math.min(65,Math.round(10+(t-2.4)*14+(e-5.2)*3));Ym(n,"leg-left")}function xT(){if(me||tn||Me)return;let i=it.position.y,t=it.velocity.y,e=Zt(it.position.x);t<-1.2&&i>e+1.25&&(Cl=!0,Il=Math.max(Il,i),Pl=Math.max(Pl,-t)),Cl&&rm<-1.2&&t>-.45&&rg(),rm=t}function yT(){if(me)return;let i=_e.minX+.5,t=_e.maxX-.5,e=_e.minZ+.5,n=_e.maxZ-.5,s=Zt(it.position.x);if(![it.position.x,it.position.y,it.position.z].every(Number.isFinite)||it.position.y<s+.48){rg(),it.position.copy(fa),it.previousPosition.copy(fa),it.interpolatedPosition.copy(fa),it.velocity.set(0,0,0),it.force.set(0,0,0),it.aabbNeedsUpdate=!0,kt.broadphase.dirty=!0,it.wakeUp(),sg(),ue("\u0412\u041E\u0417\u0412\u0420\u0410\u0422 \u0412 \u0421\u0415\u041A\u0422\u041E\u0420 \xB7 \u041F\u0410\u0414\u0415\u041D\u0418\u0415",1.4);return}(it.position.x<i||it.position.x>t)&&(it.position.x=Wt.clamp(it.position.x,i,t),Math.sign(it.velocity.x)===Math.sign(it.position.x-(i+t)/2)&&(it.velocity.x=0)),(it.position.z<e||it.position.z>n)&&(it.position.z=Wt.clamp(it.position.z,e,n),Math.sign(it.velocity.z)===Math.sign(it.position.z)&&(it.velocity.z=0));let r=Zt(it.position.x)+5.02;it.position.y>r&&(it.position.y=r,it.velocity.y>0&&(it.velocity.y=0)),it.aabbNeedsUpdate=!0}function vT(){let i=!1;for(let t of ni){let e=t.body.gameMeta;if(!e?.playerCollisionSuspended||e.isHeld||e.isStored||vo<(e.playerCollisionReEnableAfter||0))continue;let n=Math.max(.34,t.body.boundingRadius||.5),s=t.body.position.x-it.position.x,r=t.body.position.z-it.position.z,o=Math.abs(t.body.position.y-it.position.y);(Math.hypot(s,r)>n+.36||o>n+.9)&&(t.body.collisionFilterMask=e.originalCollisionFilterMask,e.playerCollisionSuspended=!1,i=!0)}i&&(kt.broadphase.dirty=!0)}function _T(){for(let i of ni)i.visual.position.copy(i.body.position),i.visual.quaternion.copy(i.body.quaternion)}function wl(i){requestAnimationFrame(wl);let t=Math.min(.05,Math.max(.001,(i-(wl.lastTime||i))/1e3));if(wl.lastTime=i,vo+=t,_E(t),me&&(gf+=t),Od++,gl+=t,gl>=1&&(lm=Math.round(Od/gl),Od=0,gl=0,lm<32&&!Zd&&(Zd=!0,Qe.setPixelRatio(Math.min(window.devicePixelRatio||1,1)))),_a>0&&(_a-=t,_a<=0&&K("toast").classList.remove("visible")),tn){Qe.render(Ot,ke);return}mT(t),gT(t),$S(t),qS(t),fT(t);for(let e of ni){let n=e.body.gameMeta?.lastVelocity;n&&(n.x=e.body.velocity.x,n.y=e.body.velocity.y,n.z=e.body.velocity.z)}yS(t),CS(t),cS(t),kt.step(1/60,t,4),xT(),jd&&(iT(),jd=!1),yT(),vT(),VS(t),tT(t),_T(),Ud+=t,Ud>.09&&(Ki(),Ud=0),Qe.render(Ot,ke),lT(t)}requestAnimationFrame(wl);function og(){let i=window.innerWidth,t=window.innerHeight;ke.aspect=i/t,ke.updateProjectionMatrix(),Qe.setSize(i,t,!1),Qe.setPixelRatio(Math.min(window.devicePixelRatio||1,Zd?1:fm?1.35:1.7)),Me&&_f()}window.addEventListener("resize",og,{passive:!0});window.addEventListener("orientationchange",()=>setTimeout(og,120),{passive:!0});var uo=K("joystick"),ag=K("joystick-knob"),Qs=K("sprint-button"),Mf=null;function ir(){Ol=!1,Mf=null,Qs.setAttribute("aria-pressed","false")}Qs.addEventListener("pointerdown",i=>{if(!(!ii||me||tn||Me)){i.preventDefault(),i.stopPropagation(),Mf=i.pointerId,Ol=!0,Qs.setAttribute("aria-pressed","true");try{Qs.setPointerCapture(i.pointerId)}catch{}}});Qs.addEventListener("pointerup",i=>{i.pointerId===Mf&&ir()});Qs.addEventListener("pointercancel",ir);Qs.addEventListener("lostpointercapture",ir);function cg(i,t){let e=uo.getBoundingClientRect(),n=e.left+e.width/2,s=e.top+e.height/2,r=i-n,o=t-s,a=36,c=Math.hypot(r,o);c>a&&(r=r/c*a,o=o/c*a),ln.x=r/a,ln.y=o/a,ag.style.transform=`translate(${r}px, ${o}px)`}function sr(){ln.x=0,ln.y=0,ln.pointerId=null,ag.style.transform="translate(0px, 0px)"}uo.addEventListener("pointerdown",i=>{!ii||me||tn||Me||(i.preventDefault(),ln.pointerId=i.pointerId,uo.setPointerCapture(i.pointerId),cg(i.clientX,i.clientY))});uo.addEventListener("pointermove",i=>{i.pointerId===ln.pointerId&&(i.preventDefault(),cg(i.clientX,i.clientY))});uo.addEventListener("pointerup",i=>{i.pointerId===ln.pointerId&&sr()});uo.addEventListener("pointercancel",sr);function MT(i){if(!(!ii||me||Me||tn||i.pointerType==="touch"&&i.clientX<window.innerWidth*.4)&&!i.target.closest("button, #joystick, .vitals-panel")){if(i.pointerType==="mouse"&&document.pointerLockElement!==la&&la.requestPointerLock)try{la.requestPointerLock()}catch{}Vn={pointerId:i.pointerId,x:i.clientX,y:i.clientY,pointerType:i.pointerType}}}window.addEventListener("pointerdown",MT,{passive:!1});window.addEventListener("pointermove",i=>{if(document.pointerLockElement===la){if(!ii||me)return;Xi-=(i.movementX||0)*.0027,Ms=Wt.clamp(Ms-(i.movementY||0)*.0027,-1.18,1.18);return}if(!Vn||i.pointerId!==Vn.pointerId)return;let t=i.clientX-Vn.x,e=i.clientY-Vn.y;Vn.x=i.clientX,Vn.y=i.clientY;let n=i.pointerType==="touch"?.0043:.0034;Xi-=t*n,Ms=Wt.clamp(Ms-e*n,-1.18,1.18)},{passive:!0});window.addEventListener("pointerup",i=>{Vn?.pointerId===i.pointerId&&(Vn=null)},{passive:!0});window.addEventListener("pointercancel",()=>{Vn=null},{passive:!0});var Ia=K("action-button"),Pa=null,tr=0,Kd=!1;function wT(){tr&&clearTimeout(tr),tr=0,Pa=null}Ia.addEventListener("pointerdown",i=>{if(i.preventDefault(),i.stopPropagation(),!(me||Me||tn)){Pa=i.pointerId,Kd=!1;try{Ia.setPointerCapture(i.pointerId)}catch{}tr=setTimeout(()=>{Pa!==i.pointerId||me||(Kd=!0,Gn(!0))},560)}});Ia.addEventListener("pointerup",i=>{if(i.preventDefault(),i.stopPropagation(),i.pointerId!==Pa)return;tr&&clearTimeout(tr),tr=0;let t=Kd;Pa=null,t||ig()});Ia.addEventListener("pointercancel",wT);Ia.addEventListener("contextmenu",i=>i.preventDefault());var fo=K("fire-button"),Es=null;function wf(i){Es!==null&&i.pointerId!==void 0&&i.pointerId!==Es||(Es=null,rn=!1)}fo.addEventListener("pointerdown",i=>{if(i.preventDefault(),i.stopPropagation(),!(me||tn||Me)){Es=i.pointerId,rn=!0;try{fo.setPointerCapture(i.pointerId)}catch{}ff()}});fo.addEventListener("pointerup",wf);fo.addEventListener("pointercancel",wf);fo.addEventListener("lostpointercapture",wf);fo.addEventListener("contextmenu",i=>i.preventDefault());K("reload-button").addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),df()});K("drop-button").addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),!(me||Me||tn)&&(qt?Qm():Fe&&uf(!0,!0),Ki())});K("menu-button").addEventListener("click",()=>ho(!tn));K("inventory-button").addEventListener("click",()=>Gn(!Me));K("menu-resume").addEventListener("click",()=>ho(!1));var Hd=K("menu-sandbox");Hd&&(Hd.textContent=bl?"\u0412\u042B\u0419\u0422\u0418 \u0418\u0417 \u041F\u0415\u0421\u041E\u0427\u041D\u0418\u0426\u042B":"\u0422\u0415\u0421\u0422\u041E\u0412\u0410\u042F \u041F\u0415\u0421\u041E\u0427\u041D\u0418\u0426\u0410",Hd.addEventListener("click",()=>{let i=new URL(window.location.href);bl?i.searchParams.delete("sandbox"):i.searchParams.set("sandbox","test"),window.location.href=i.href}));K("menu-restart").addEventListener("click",()=>window.location.reload());K("menu-overlay").addEventListener("click",i=>{i.target===K("menu-overlay")&&ho(!1)});K("inventory-close").addEventListener("click",()=>Gn(!1));K("inventory-take").addEventListener("click",()=>{if(co==="all"){Zi&&Zi!==Fe&&(hf(Zi),Gn(!1));return}ei&&uT(ei)});K("inventory-tab-bag").addEventListener("click",()=>Gl("bag"));K("inventory-tab-all").addEventListener("click",()=>Gl("all"));K("inventory-drop").addEventListener("click",()=>{qt&&(tg(),lo())});K("inventory-stash").addEventListener("click",()=>hT());K("inventory-overlay").addEventListener("click",i=>{i.target===K("inventory-overlay")&&Gn(!1)});K("death-restart").addEventListener("click",()=>window.location.reload());K("injury-doll").addEventListener("pointerdown",i=>{let t=i.target.closest?.(".doll-part");t&&(i.preventDefault(),i.stopPropagation(),Xm(t.id.replace("injury-","")))});K("injury-doll").addEventListener("keydown",i=>{if(!["Enter"," "].includes(i.key))return;let t=i.target.closest?.(".doll-part");t&&(i.preventDefault(),Xm(t.id.replace("injury-","")))});document.addEventListener("keydown",i=>{if(tn){(i.code==="Escape"||i.code==="Enter")&&(i.preventDefault(),ho(!1));return}if(me){if(i.code==="KeyR"){i.preventDefault(),window.location.reload();return}i.target.closest?.("button")||i.preventDefault();return}if(i.code==="Tab"){i.preventDefault(),ii&&Gn(!Me);return}if(i.code==="Escape"){i.preventDefault(),Me?Gn(!1):ii&&ho(!0);return}["KeyW","KeyA","KeyS","KeyD","ShiftLeft","ShiftRight","KeyE","KeyG","KeyR","Space"].includes(i.code)&&i.preventDefault(),He.add(i.code),i.code==="KeyE"&&!i.repeat&&!Me&&ig(),i.code==="KeyG"&&!i.repeat&&!Me&&(qt?Qm():Fe&&uf(!0,!0),Ki()),i.code==="KeyR"&&!i.repeat&&df(),i.code==="Space"&&!Me&&(rn=!0,i.repeat||ff())});document.addEventListener("keyup",i=>{He.delete(i.code),i.code==="Space"&&(rn=!1)});document.addEventListener("visibilitychange",()=>{document.hidden&&(He.clear(),sr(),ir(),Vn=null,rn=!1,Es=null)});window.addEventListener("blur",()=>{He.clear(),rn=!1,Es=null,sr(),ir()},{passive:!0});bl&&rT();La();yf();Wm();lo();Ki();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
