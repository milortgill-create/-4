(()=>{var cd="170";var Ug=0,Jf=1,Og=2;var c0=1,ld=2,zi=3,hs=0,_n=1,Ce=2,cs=0,Ao=1,_c=2,Qf=3,tp=4,Hg=5,zs=100,kg=101,Vg=102,Gg=103,Wg=104,qg=200,Xg=201,Yg=202,$g=203,Uh=204,Oh=205,Zg=206,jg=207,Kg=208,Jg=209,Qg=210,tx=211,ex=212,nx=213,ix=214,Hh=0,kh=1,Vh=2,Po=3,Gh=4,Wh=5,qh=6,Xh=7,l0=0,sx=1,ox=2,ls=0,rx=1,ax=2,cx=3,Yc=4,lx=5,hx=6,ux=7;var h0=300,No=301,Lo=302,Yh=303,$h=304,$c=306,us=1e3,Fs=1001,Zh=1002,Cn=1003,dx=1004;var Ga=1005;var ui=1006,oh=1007;var Us=1008;var Ui=1009,u0=1010,d0=1011,qr=1012,hd=1013,Os=1014,di=1015,sa=1016,ud=1017,dd=1018,zo=1020,f0=35902,p0=1021,m0=1022,Qn=1023,g0=1024,x0=1025,Ro=1026,Do=1027,fd=1028,pd=1029,y0=1030,md=1031;var gd=1033,mc=33776,gc=33777,xc=33778,yc=33779,jh=35840,Kh=35841,Jh=35842,Qh=35843,tu=36196,eu=37492,nu=37496,iu=37808,su=37809,ou=37810,ru=37811,au=37812,cu=37813,lu=37814,hu=37815,uu=37816,du=37817,fu=37818,pu=37819,mu=37820,gu=37821,vc=36492,xu=36494,yu=36495,v0=36283,vu=36284,_u=36285,Mu=36286;var Mc=2300,wu=2301,rh=2302,ep=2400,np=2401,ip=2402;var fx=3200,px=3201;var _0=0,mx=1,mn="",ze="srgb",Xo="srgb-linear",Zc="linear",ve="srgb";var lo=7680;var sp=519,gx=512,xx=513,yx=514,M0=515,vx=516,_x=517,Mx=518,wx=519,Bo=35044;var op="300 es",Bi=2e3,wc=2001,ds=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rp=1234567,Hr=Math.PI/180,Fo=180/Math.PI;function Yo(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Ke(i,t,e){return Math.max(t,Math.min(e,i))}function xd(i,t){return(i%t+t)%t}function bx(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ex(i,t,e){return i!==t?(e-i)/(t-i):0}function kr(i,t,e){return(1-e)*i+e*t}function Sx(i,t,e,n){return kr(i,t,1-Math.exp(-e*n))}function Tx(i,t=1){return t-Math.abs(xd(i,t*2)-t)}function Ax(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rx(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cx(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ix(i,t){return i+Math.random()*(t-i)}function Px(i){return i*(.5-Math.random())}function Nx(i){i!==void 0&&(rp=i);let t=rp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lx(i){return i*Hr}function zx(i){return i*Fo}function Dx(i){return(i&i-1)===0&&i!==0}function Bx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ux(i,t,e,n,s){let o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),d=r((t-n)/2),f=o((n-t)/2),m=r((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function So(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Tt={DEG2RAD:Hr,RAD2DEG:Fo,generateUUID:Yo,clamp:Ke,euclideanModulo:xd,mapLinear:bx,inverseLerp:Ex,lerp:kr,damp:Sx,pingpong:Tx,smoothstep:Ax,smootherstep:Rx,randInt:Cx,randFloat:Ix,randFloatSpread:Px,seededRandom:Nx,degToRad:Lx,radToDeg:zx,isPowerOfTwo:Dx,ceilPowerOfTwo:Bx,floorPowerOfTwo:Fx,setQuaternionFromProperEuler:Ux,normalize:fn,denormalize:So},ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class i{constructor(t,e,n,s,o,r,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],_=s[4],v=s[7],R=s[2],S=s[5],A=s[8];return o[0]=r*x+a*y+c*R,o[3]=r*g+a*_+c*S,o[6]=r*p+a*v+c*A,o[1]=l*x+h*y+u*R,o[4]=l*g+h*_+u*S,o[7]=l*p+h*v+u*A,o[2]=d*x+f*y+m*R,o[5]=d*g+f*_+m*S,o[8]=d*p+f*v+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+s*o*l-s*r*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,f=l*o-r*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*r)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*o-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){let c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ah.makeScale(t,e)),this}rotate(t){return this.premultiply(ah.makeRotation(-t)),this}translate(t,e){return this.premultiply(ah.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ah=new jt;function w0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ox(){let i=bc("canvas");return i.style.display="block",i}var ap={};function Ur(i){i in ap||(ap[i]=!0,console.warn(i))}function Hx(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function kx(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vx(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var le={enabled:!0,workingColorSpace:Xo,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(i.r=Co(i.r),i.g=Co(i.g),i.b=Co(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mn?Zc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Co(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cp=[.64,.33,.3,.6,.15,.06],lp=[.2126,.7152,.0722],hp=[.3127,.329],up=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dp=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[Xo]:{primaries:cp,whitePoint:hp,transfer:Zc,toXYZ:up,fromXYZ:dp,luminanceCoefficients:lp,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:cp,whitePoint:hp,transfer:ve,toXYZ:up,fromXYZ:dp,luminanceCoefficients:lp,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});var ho,bu=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ho===void 0&&(ho=bc("canvas")),ho.width=t.width,ho.height=t.height;let n=ho.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ho}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=bc("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Fi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fi(e[n]/255)*255):e[n]=Fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gx=0,Ec=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Yo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(ch(s[r].image)):o.push(ch(s[r]))}else o=ch(s);n.url=o}return e||(t.images[this.uuid]=n),n}};function ch(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wx=0,Mn=class i extends ds{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Fs,s=Fs,o=ui,r=Us,a=Qn,c=Ui,l=i.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Yo(),this.name="",this.source=new Ec(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==h0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case us:t.x=t.x-Math.floor(t.x);break;case Fs:t.x=t.x<0?0:1;break;case Zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case us:t.y=t.y-Math.floor(t.y);break;case Fs:t.y=t.y<0?0:1;break;case Zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=h0;Mn.DEFAULT_ANISOTROPY=1;var _e=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,v=(f+1)/2,R=(p+1)/2,S=(h+d)/4,A=(u+x)/4,C=(m+g)/4;return _>v&&_>R?_<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(_),s=S/n,o=A/n):v>R?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=S/s,o=C/s):R<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(R),n=A/o,s=C/o),this.set(n,s,o,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eu=class extends ds{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let o=new Mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];let r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ec(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oi=class extends Eu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Sc=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Su=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=o[r+0],f=o[r+1],m=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),S=Math.atan2(R,p*y);g=Math.sin(g*S)/R,a=Math.sin(a*S)/R}let v=a*y;if(c=c*g+d*v,l=l*g+f*v,h=h*g+m*v,u=u*g+x*v,g===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=o[r],d=o[r+1],f=o[r+2],m=o[r+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(o/2),d=c(n/2),f=c(s/2),m=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-s*a,this._w=r*h-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,o=this._z,r=this._w,a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lh=new N,fp=new Ge,Hi=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,jn):jn.fromBufferAttribute(o,r),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(t.matrixWorld),this.union(Wa)}let s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pr),qa.subVectors(this.max,Pr),uo.subVectors(t.a,Pr),fo.subVectors(t.b,Pr),po.subVectors(t.c,Pr),ns.subVectors(fo,uo),is.subVectors(po,fo),As.subVectors(uo,po);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-As.z,As.y,ns.z,0,-ns.x,is.z,0,-is.x,As.z,0,-As.x,-ns.y,ns.x,0,-is.y,is.x,0,-As.y,As.x,0];return!hh(e,uo,fo,po,qa)||(e=[1,0,0,0,1,0,0,0,1],!hh(e,uo,fo,po,qa))?!1:(Xa.crossVectors(ns,is),e=[Xa.x,Xa.y,Xa.z],hh(e,uo,fo,po,qa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ci=[new N,new N,new N,new N,new N,new N,new N,new N],jn=new N,Wa=new Hi,uo=new N,fo=new N,po=new N,ns=new N,is=new N,As=new N,Pr=new N,qa=new N,Xa=new N,Rs=new N;function hh(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Rs.fromArray(i,o);let a=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),c=t.dot(Rs),l=e.dot(Rs),h=n.dot(Rs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var qx=new Hi,Nr=new N,uh=new N,fs=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):qx.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);let e=Nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(uh)),this.expandByPoint(Nr.copy(t.center).sub(uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ii=new N,dh=new N,Ya=new N,ss=new N,fh=new N,$a=new N,ph=new N,Xr=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){dh.copy(t).add(e).multiplyScalar(.5),Ya.copy(e).sub(t).normalize(),ss.copy(this.origin).sub(dh);let o=t.distanceTo(e)*.5,r=-this.direction.dot(Ya),a=ss.dot(this.direction),c=-ss.dot(Ya),l=ss.lengthSq(),h=Math.abs(1-r*r),u,d,f,m;if(h>0)if(u=r*c-a,d=r*a-c,m=o*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(dh).addScaledVector(Ya,d),f}intersectSphere(t,e){Ii.subVectors(t.center,this.origin);let n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,o=t.radius*t.radius;if(s>o)return null;let r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,n,s,o){fh.subVectors(e,t),$a.subVectors(n,t),ph.crossVectors(fh,$a);let r=this.direction.dot(ph),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ss.subVectors(this.origin,t);let c=a*this.direction.dot($a.crossVectors(ss,$a));if(c<0)return null;let l=a*this.direction.dot(fh.cross(ss));if(l<0||c+l>r)return null;let h=-a*ss.dot(ph);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,o,r,a,c,l,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,h,u,d,f,m,x,g)}set(t,e,n,s,o,r,a,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/mo.setFromMatrixColumn(t,0).length(),o=1/mo.setFromMatrixColumn(t,1).length(),r=1/mo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let d=r*h,f=r*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=r*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=r*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*a,e[4]=-r*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*h,e[9]=x-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){let d=r*h,f=r*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){let d=r*c,f=r*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=r*c,f=r*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=r*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xx,t,Yx)}lookAt(t,e,n){let s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),os.crossVectors(n,An),os.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),os.crossVectors(n,An)),os.normalize(),Za.crossVectors(An,os),s[0]=os.x,s[4]=Za.x,s[8]=An.x,s[1]=os.y,s[5]=Za.y,s[9]=An.y,s[2]=os.z,s[6]=Za.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],_=n[7],v=n[11],R=n[15],S=s[0],A=s[4],C=s[8],b=s[12],w=s[1],P=s[5],H=s[9],L=s[13],D=s[2],U=s[6],z=s[10],tt=s[14],V=s[3],Q=s[7],ut=s[11],pt=s[15];return o[0]=r*S+a*w+c*D+l*V,o[4]=r*A+a*P+c*U+l*Q,o[8]=r*C+a*H+c*z+l*ut,o[12]=r*b+a*L+c*tt+l*pt,o[1]=h*S+u*w+d*D+f*V,o[5]=h*A+u*P+d*U+f*Q,o[9]=h*C+u*H+d*z+f*ut,o[13]=h*b+u*L+d*tt+f*pt,o[2]=m*S+x*w+g*D+p*V,o[6]=m*A+x*P+g*U+p*Q,o[10]=m*C+x*H+g*z+p*ut,o[14]=m*b+x*L+g*tt+p*pt,o[3]=y*S+_*w+v*D+R*V,o[7]=y*A+_*P+v*U+R*Q,o[11]=y*C+_*H+v*z+R*ut,o[15]=y*b+_*L+v*tt+R*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+o*c*u-s*l*u-o*a*d+n*l*d+s*a*f-n*c*f)+x*(+e*c*f-e*l*d+o*r*d-s*r*f+s*l*h-o*c*h)+g*(+e*l*u-e*a*f-o*r*u+n*r*f+o*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*r*u-n*r*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=u*g*l-x*d*l+x*c*f-a*g*f-u*c*p+a*d*p,_=m*d*l-h*g*l-m*c*f+r*g*f+h*c*p-r*d*p,v=h*x*l-m*u*l+m*a*f-r*x*f-h*a*p+r*u*p,R=m*u*c-h*x*c-m*a*d+r*x*d+h*a*g-r*u*g,S=e*y+n*_+s*v+o*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/S;return t[0]=y*A,t[1]=(x*d*o-u*g*o-x*s*f+n*g*f+u*s*p-n*d*p)*A,t[2]=(a*g*o-x*c*o+x*s*l-n*g*l-a*s*p+n*c*p)*A,t[3]=(u*c*o-a*d*o-u*s*l+n*d*l+a*s*f-n*c*f)*A,t[4]=_*A,t[5]=(h*g*o-m*d*o+m*s*f-e*g*f-h*s*p+e*d*p)*A,t[6]=(m*c*o-r*g*o-m*s*l+e*g*l+r*s*p-e*c*p)*A,t[7]=(r*d*o-h*c*o+h*s*l-e*d*l-r*s*f+e*c*f)*A,t[8]=v*A,t[9]=(m*u*o-h*x*o-m*n*f+e*x*f+h*n*p-e*u*p)*A,t[10]=(r*x*o-m*a*o+m*n*l-e*x*l-r*n*p+e*a*p)*A,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*f-e*a*f)*A,t[12]=R*A,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*A,t[14]=(m*a*s-r*x*s-m*n*c+e*x*c+r*n*g-e*a*g)*A,t[15]=(r*u*s-h*a*s+h*n*c-e*u*c-r*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,f=o*h,m=o*u,x=r*h,g=r*u,p=a*u,y=c*l,_=c*h,v=c*u,R=n.x,S=n.y,A=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+v)*R,s[2]=(m-_)*R,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(d+p))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(m+_)*A,s[9]=(g-y)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,o=mo.set(s[0],s[1],s[2]).length(),r=mo.set(s[4],s[5],s[6]).length(),a=mo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Kn.copy(this);let l=1/o,h=1/r,u=1/a;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=u,Kn.elements[9]*=u,Kn.elements[10]*=u,e.setFromRotationMatrix(Kn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Bi){let c=this.elements,l=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(a===Bi)f=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===wc)f=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Bi){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(r-o),d=(e+t)*l,f=(n+s)*h,m,x;if(a===Bi)m=(r+o)*u,x=-2*u;else if(a===wc)m=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},mo=new N,Kn=new ue,Xx=new N(0,0,0),Yx=new N(1,1,1),os=new N,Za=new N,An=new N,pp=new ue,mp=new Ge,xn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mp.setFromEuler(this),this.setFromQuaternion(mp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var Yr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$x=0,gp=new N,go=new Ge,Pi=new ue,ja=new N,Lr=new N,Zx=new N,jx=new Ge,xp=new N(1,0,0),yp=new N(0,1,0),vp=new N(0,0,1),_p={type:"added"},Kx={type:"removed"},xo={type:"childadded",child:null},mh={type:"childremoved",child:null},Qe=class i extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new xn,n=new Ge,s=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new jt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return go.setFromAxisAngle(t,e),this.quaternion.multiply(go),this}rotateOnWorldAxis(t,e){return go.setFromAxisAngle(t,e),this.quaternion.premultiply(go),this}rotateX(t){return this.rotateOnAxis(xp,t)}rotateY(t){return this.rotateOnAxis(yp,t)}rotateZ(t){return this.rotateOnAxis(vp,t)}translateOnAxis(t,e){return gp.copy(t).applyQuaternion(this.quaternion),this.position.add(gp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xp,t)}translateY(t){return this.translateOnAxis(yp,t)}translateZ(t){return this.translateOnAxis(vp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ja.copy(t):ja.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Lr,ja,this.up):Pi.lookAt(ja,Lr,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),go.setFromRotationMatrix(Pi),this.quaternion.premultiply(go.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_p),xo.child=t,this.dispatchEvent(xo),xo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kx),mh.child=t,this.dispatchEvent(mh),mh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_p),xo.child=t,this.dispatchEvent(xo),xo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,Zx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,jx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){let a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Qe.DEFAULT_UP=new N(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new N,Ni=new N,gh=new N,Li=new N,yo=new N,vo=new N,Mp=new N,xh=new N,yh=new N,vh=new N,_h=new _e,Mh=new _e,wh=new _e,Ds=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Jn.subVectors(t,e),s.cross(Jn);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Jn.subVectors(s,e),Ni.subVectors(n,e),gh.subVectors(t,e);let r=Jn.dot(Jn),a=Jn.dot(Ni),c=Jn.dot(gh),l=Ni.dot(Ni),h=Ni.dot(gh),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(r*h-a*c)*d;return o.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Li.x),c.addScaledVector(r,Li.y),c.addScaledVector(a,Li.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return _h.setScalar(0),Mh.setScalar(0),wh.setScalar(0),_h.fromBufferAttribute(t,e),Mh.fromBufferAttribute(t,n),wh.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(_h,o.x),r.addScaledVector(Mh,o.y),r.addScaledVector(wh,o.z),r}static isFrontFacing(t,e,n,s){return Jn.subVectors(n,e),Ni.subVectors(t,e),Jn.cross(Ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),Jn.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,o=this.c,r,a;yo.subVectors(s,n),vo.subVectors(o,n),xh.subVectors(t,n);let c=yo.dot(xh),l=vo.dot(xh);if(c<=0&&l<=0)return e.copy(n);yh.subVectors(t,s);let h=yo.dot(yh),u=vo.dot(yh);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(yo,r);vh.subVectors(t,o);let f=yo.dot(vh),m=vo.dot(vh);if(m>=0&&f<=m)return e.copy(o);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(vo,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Mp.subVectors(o,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Mp,a);let p=1/(g+x+d);return r=x*p,a=d*p,e.copy(n).addScaledVector(yo,r).addScaledVector(vo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function bh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=xd(t,1),e=Ke(e,0,1),n=Ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=bh(r,o,t+1/3),this.g=bh(r,o,t),this.b=bh(r,o,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=b0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=Co(t.r),this.g=Co(t.g),this.b=Co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return le.fromWorkingColorSpace(ln.copy(this),t),Math.round(Ke(ln.r*255,0,255))*65536+Math.round(Ke(ln.g*255,0,255))*256+Math.round(Ke(ln.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(ln.copy(this),e);let n=ln.r,s=ln.g,o=ln.b,r=Math.max(n,s,o),a=Math.min(n,s,o),c,l,h=(a+r)/2;if(a===r)c=0,l=0;else{let u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-n)/u+2;break;case o:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=ze){le.fromWorkingColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,s=ln.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(rs),this.setHSL(rs.h+t,rs.s+e,rs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rs),t.getHSL(Ka);let n=kr(rs.h,Ka.h,e),s=kr(rs.s,Ka.s,e),o=kr(rs.l,Ka.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Kt;Kt.NAMES=b0;var Jx=0,ps=class extends ds{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Yo(),this.name="",this.blending=Ao,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Oh,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ao&&(n.blending=this.blending),this.side!==hs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uh&&(n.blendSrc=this.blendSrc),this.blendDst!==Oh&&(n.blendDst=this.blendDst),this.blendEquation!==zs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==lo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==lo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){let r=[];for(let a in o){let c=o[a];delete c.metadata,r.push(c)}return r}if(e){let o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},hn=class extends ps{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=l0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new N,Ja=new ht,gn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bo,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ja.fromBufferAttribute(this,e),Ja.applyMatrix3(t),this.setXY(e,Ja.x,Ja.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=So(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=So(e,this.array)),e}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=So(e,this.array)),e}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=So(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=So(e,this.array)),e}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),s=fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),s=fn(s,this.array),o=fn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bo&&(t.usage=this.usage),t}};var Tc=class extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ac=class extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qx=0,Un=new ue,Eh=new Qe,_o=new N,Rn=new Hi,zr=new Hi,je=new N,Ne=class i extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(w0(t)?Ac:Tc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new jt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return Eh.lookAt(t),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,o=t.length;s<o;s++){let r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){let o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let o=e[n];Rn.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Rn.min,zr.min),Rn.expandByPoint(je),je.addVectors(Rn.max,zr.max),Rn.expandByPoint(je)):(Rn.expandByPoint(zr.min),Rn.expandByPoint(zr.max))}Rn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)je.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(je));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)je.fromBufferAttribute(a,l),c&&(_o.fromBufferAttribute(t,l),je.add(_o)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new N,c[C]=new N;let l=new N,h=new N,u=new N,d=new ht,f=new ht,m=new ht,x=new N,g=new N;function p(C,b,w){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,w),d.fromBufferAttribute(o,C),f.fromBufferAttribute(o,b),m.fromBufferAttribute(o,w),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[C].add(x),a[b].add(x),a[w].add(x),c[C].add(g),c[b].add(g),c[w].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,b=y.length;C<b;++C){let w=y[C],P=w.start,H=w.count;for(let L=P,D=P+H;L<D;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let _=new N,v=new N,R=new N,S=new N;function A(C){R.fromBufferAttribute(s,C),S.copy(R);let b=a[C];_.copy(b),_.sub(R.multiplyScalar(R.dot(b))).normalize(),v.crossVectors(S,b);let P=v.dot(c[C])<0?-1:1;r.setXYZW(C,_.x,_.y,_.z,P)}for(let C=0,b=y.length;C<b;++C){let w=y[C],P=w.start,H=w.count;for(let L=P,D=P+H;L<D;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,o=new N,r=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new gn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,c=r.length;a<c;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let o=t.morphAttributes;for(let l in o){let h=[],u=o[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,h=r.length;l<h;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wp=new ue,Cs=new Xr,Qa=new fs,bp=new N,tc=new N,ec=new N,nc=new N,Sh=new N,ic=new N,Ep=new N,sc=new N,rt=class extends Qe{constructor(t=new Ne,e=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){ic.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let h=a[c],u=o[c];h!==0&&(Sh.fromBufferAttribute(u,t),r?ic.addScaledVector(Sh,h):ic.addScaledVector(Sh.sub(e),h))}e.add(ic)}return e}raycast(t,e){let n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(o),Cs.copy(t.ray).recast(t.near),!(Qa.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Qa,bp)===null||Cs.origin.distanceToSquared(bp)>(t.far-t.near)**2))&&(wp.copy(o).invert(),Cs.copy(t.ray).applyMatrix4(wp),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cs)))}_computeIntersections(t,e,n){let s,o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=r[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,R=_;v<R;v+=3){let S=a.getX(v),A=a.getX(v+1),C=a.getX(v+2);s=oc(this,p,t,n,l,h,u,S,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);s=oc(this,r,t,n,l,h,u,y,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=r[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,R=_;v<R;v+=3){let S=v,A=v+1,C=v+2;s=oc(this,p,t,n,l,h,u,S,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=g,_=g+1,v=g+2;s=oc(this,r,t,n,l,h,u,y,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function ty(i,t,e,n,s,o,r,a){let c;if(t.side===_n?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===hs,a),c===null)return null;sc.copy(a),sc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(sc);return l<e.near||l>e.far?null:{distance:l,point:sc.clone(),object:i}}function oc(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,tc),i.getVertexPosition(c,ec),i.getVertexPosition(l,nc);let h=ty(i,t,e,n,tc,ec,nc,Ep);if(h){let u=new N;Ds.getBarycoord(Ep,tc,ec,nc,u),s&&(h.uv=Ds.getInterpolatedAttribute(s,a,c,l,u,new ht)),o&&(h.uv1=Ds.getInterpolatedAttribute(o,a,c,l,u,new ht)),r&&(h.normal=Ds.getInterpolatedAttribute(r,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new N,materialIndex:0};Ds.getNormal(tc,ec,nc,d.normal),h.face=d,h.barycoord=u}return h}var St=class i extends Ne{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};let a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function m(x,g,p,y,_,v,R,S,A,C,b){let w=v/A,P=R/C,H=v/2,L=R/2,D=S/2,U=A+1,z=C+1,tt=0,V=0,Q=new N;for(let ut=0;ut<z;ut++){let pt=ut*P-L;for(let at=0;at<U;at++){let Ht=at*w-H;Q[x]=Ht*y,Q[g]=pt*_,Q[p]=D,l.push(Q.x,Q.y,Q.z),Q[x]=0,Q[g]=0,Q[p]=S>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(at/A),u.push(1-ut/C),tt+=1}}for(let ut=0;ut<C;ut++)for(let pt=0;pt<A;pt++){let at=d+pt+U*ut,Ht=d+pt+U*(ut+1),X=d+(pt+1)+U*(ut+1),ot=d+(pt+1)+U*ut;c.push(at,Ht,ot),c.push(Ht,X,ot),V+=6}a.addGroup(f,V,b),f+=V,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Uo(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function pn(i){let t={};for(let e=0;e<i.length;e++){let n=Uo(i[e]);for(let s in n)t[s]=n[s]}return t}function ey(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function E0(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var ny={clone:Uo,merge:pn},iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fi=class extends ps{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iy,this.fragmentShader=sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Uo(t.uniforms),this.uniformsGroups=ey(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Rc=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},as=new N,Sp=new ht,Tp=new ht,Je=class extends Rc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,e){return this.getViewBounds(t,Sp,Tp),e.subVectors(Tp,Sp)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Mo=-90,wo=1,Tu=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(Mo,wo,t,e);s.layers=this.layers,this.add(s);let o=new Je(Mo,wo,t,e);o.layers=this.layers,this.add(o);let r=new Je(Mo,wo,t,e);r.layers=this.layers,this.add(r);let a=new Je(Mo,wo,t,e);a.layers=this.layers,this.add(a);let c=new Je(Mo,wo,t,e);c.layers=this.layers,this.add(c);let l=new Je(Mo,wo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(let l of e)this.remove(l);if(t===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Cc=class extends Mn{constructor(t,e,n,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:No,super(t,e,n,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Au=class extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new St(5,5,5),o=new fi({name:"CubemapFromEquirect",uniforms:Uo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:cs});o.uniforms.tEquirect.value=e;let r=new rt(s,o),a=e.minFilter;return e.minFilter===Us&&(e.minFilter=ui),new Tu(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}},Th=new N,oy=new N,ry=new jt,Di=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Th.subVectors(n,e).cross(oy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Th),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ry.getNormalMatrix(t),s=this.coplanarPoint(Th).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Is=new fs,rc=new N,$r=class{constructor(t=new Di,e=new Di,n=new Di,s=new Di,o=new Di,r=new Di){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bi){let n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],y=s[13],_=s[14],v=s[15];if(n[0].setComponents(c-o,d-l,g-f,v-p).normalize(),n[1].setComponents(c+o,d+l,g+f,v+p).normalize(),n[2].setComponents(c+r,d+h,g+m,v+y).normalize(),n[3].setComponents(c-r,d-h,g-m,v-y).normalize(),n[4].setComponents(c-a,d-u,g-x,v-_).normalize(),e===Bi)n[5].setComponents(c+a,d+u,g+x,v+_).normalize();else if(e===wc)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(t){return Is.center.set(0,0,0),Is.radius=.7071067811865476,Is.applyMatrix4(t.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(rc.x=s.normal.x>0?t.max.x:t.min.x,rc.y=s.normal.y>0?t.max.y:t.min.y,rc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(rc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function S0(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function ay(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}var pi=class i extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let y=p*d-r;for(let _=0;_<l;_++){let v=_*u-o;m.push(v,-y,0),x.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let _=y+l*p,v=y+l*(p+1),R=y+1+l*(p+1),S=y+1+l*p;f.push(_,v,S),f.push(v,R,S)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},cy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ly=`#ifdef USE_ALPHAHASH
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
#endif`,hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,py=`#ifdef USE_AOMAP
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
#endif`,my=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gy=`#ifdef USE_BATCHING
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
#endif`,xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_y=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,My=`#ifdef USE_IRIDESCENCE
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
#endif`,wy=`#ifdef USE_BUMPMAP
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
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Py=`#define PI 3.141592653589793
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
} // validated`,Ny=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ly=`vec3 transformedNormal = objectNormal;
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
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,By=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hy=`#ifdef USE_ENVMAP
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
#endif`,ky=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,qy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zy=`#ifdef USE_GRADIENTMAP
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
}`,jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qy=`uniform bool receiveShadow;
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
#endif`,tv=`#ifdef USE_ENVMAP
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
#endif`,ev=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ov=`PhysicalMaterial material;
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
#endif`,rv=`struct PhysicalMaterial {
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
}`,av=`
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
#endif`,cv=`#if defined( RE_IndirectDiffuse )
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
#endif`,lv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xv=`#if defined( USE_POINTS_UV )
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
#endif`,yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_v=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bv=`#ifdef USE_MORPHTARGETS
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
#endif`,Ev=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iv=`#ifdef USE_NORMALMAP
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
#endif`,Pv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xv=`float getShadowMask() {
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
}`,Yv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$v=`#ifdef USE_SKINNING
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
#endif`,Zv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jv=`#ifdef USE_SKINNING
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
#endif`,Kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e_=`#ifdef USE_TRANSMISSION
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
#endif`,n_=`#ifdef USE_TRANSMISSION
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,a_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c_=`uniform sampler2D t2D;
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`#include <common>
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
}`,p_=`#if DEPTH_PACKING == 3200
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
}`,m_=`#define DISTANCE
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
}`,g_=`#define DISTANCE
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`uniform float scale;
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
}`,__=`uniform vec3 diffuse;
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
}`,M_=`#include <common>
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
}`,w_=`uniform vec3 diffuse;
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
}`,b_=`#define LAMBERT
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
}`,E_=`#define LAMBERT
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
}`,S_=`#define MATCAP
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
}`,T_=`#define MATCAP
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
}`,A_=`#define NORMAL
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
}`,R_=`#define NORMAL
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
}`,C_=`#define PHONG
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
}`,I_=`#define PHONG
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
}`,P_=`#define STANDARD
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
}`,N_=`#define STANDARD
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
}`,L_=`#define TOON
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
}`,z_=`#define TOON
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
}`,D_=`uniform float size;
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
}`,B_=`uniform vec3 diffuse;
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
}`,F_=`#include <common>
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
}`,U_=`uniform vec3 color;
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
}`,O_=`uniform float rotation;
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
}`,H_=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:cy,alphahash_pars_fragment:ly,alphamap_fragment:hy,alphamap_pars_fragment:uy,alphatest_fragment:dy,alphatest_pars_fragment:fy,aomap_fragment:py,aomap_pars_fragment:my,batching_pars_vertex:gy,batching_vertex:xy,begin_vertex:yy,beginnormal_vertex:vy,bsdfs:_y,iridescence_fragment:My,bumpmap_pars_fragment:wy,clipping_planes_fragment:by,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:Ty,color_fragment:Ay,color_pars_fragment:Ry,color_pars_vertex:Cy,color_vertex:Iy,common:Py,cube_uv_reflection_fragment:Ny,defaultnormal_vertex:Ly,displacementmap_pars_vertex:zy,displacementmap_vertex:Dy,emissivemap_fragment:By,emissivemap_pars_fragment:Fy,colorspace_fragment:Uy,colorspace_pars_fragment:Oy,envmap_fragment:Hy,envmap_common_pars_fragment:ky,envmap_pars_fragment:Vy,envmap_pars_vertex:Gy,envmap_physical_pars_fragment:tv,envmap_vertex:Wy,fog_vertex:qy,fog_pars_vertex:Xy,fog_fragment:Yy,fog_pars_fragment:$y,gradientmap_pars_fragment:Zy,lightmap_pars_fragment:jy,lights_lambert_fragment:Ky,lights_lambert_pars_fragment:Jy,lights_pars_begin:Qy,lights_toon_fragment:ev,lights_toon_pars_fragment:nv,lights_phong_fragment:iv,lights_phong_pars_fragment:sv,lights_physical_fragment:ov,lights_physical_pars_fragment:rv,lights_fragment_begin:av,lights_fragment_maps:cv,lights_fragment_end:lv,logdepthbuf_fragment:hv,logdepthbuf_pars_fragment:uv,logdepthbuf_pars_vertex:dv,logdepthbuf_vertex:fv,map_fragment:pv,map_pars_fragment:mv,map_particle_fragment:gv,map_particle_pars_fragment:xv,metalnessmap_fragment:yv,metalnessmap_pars_fragment:vv,morphinstance_vertex:_v,morphcolor_vertex:Mv,morphnormal_vertex:wv,morphtarget_pars_vertex:bv,morphtarget_vertex:Ev,normal_fragment_begin:Sv,normal_fragment_maps:Tv,normal_pars_fragment:Av,normal_pars_vertex:Rv,normal_vertex:Cv,normalmap_pars_fragment:Iv,clearcoat_normal_fragment_begin:Pv,clearcoat_normal_fragment_maps:Nv,clearcoat_pars_fragment:Lv,iridescence_pars_fragment:zv,opaque_fragment:Dv,packing:Bv,premultiplied_alpha_fragment:Fv,project_vertex:Uv,dithering_fragment:Ov,dithering_pars_fragment:Hv,roughnessmap_fragment:kv,roughnessmap_pars_fragment:Vv,shadowmap_pars_fragment:Gv,shadowmap_pars_vertex:Wv,shadowmap_vertex:qv,shadowmask_pars_fragment:Xv,skinbase_vertex:Yv,skinning_pars_vertex:$v,skinning_vertex:Zv,skinnormal_vertex:jv,specularmap_fragment:Kv,specularmap_pars_fragment:Jv,tonemapping_fragment:Qv,tonemapping_pars_fragment:t_,transmission_fragment:e_,transmission_pars_fragment:n_,uv_pars_fragment:i_,uv_pars_vertex:s_,uv_vertex:o_,worldpos_vertex:r_,background_vert:a_,background_frag:c_,backgroundCube_vert:l_,backgroundCube_frag:h_,cube_vert:u_,cube_frag:d_,depth_vert:f_,depth_frag:p_,distanceRGBA_vert:m_,distanceRGBA_frag:g_,equirect_vert:x_,equirect_frag:y_,linedashed_vert:v_,linedashed_frag:__,meshbasic_vert:M_,meshbasic_frag:w_,meshlambert_vert:b_,meshlambert_frag:E_,meshmatcap_vert:S_,meshmatcap_frag:T_,meshnormal_vert:A_,meshnormal_frag:R_,meshphong_vert:C_,meshphong_frag:I_,meshphysical_vert:P_,meshphysical_frag:N_,meshtoon_vert:L_,meshtoon_frag:z_,points_vert:D_,points_frag:B_,shadow_vert:F_,shadow_frag:U_,sprite_vert:O_,sprite_frag:H_},ft={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},hi={basic:{uniforms:pn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:pn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:pn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:pn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:pn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:pn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:pn([ft.points,ft.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:pn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:pn([ft.common,ft.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:pn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:pn([ft.sprite,ft.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:pn([ft.common,ft.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:pn([ft.lights,ft.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};hi.physical={uniforms:pn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var ac={r:0,b:0,g:0},Ps=new xn,k_=new ue;function V_(i,t,e,n,s,o,r){let a=new Kt(0),c=o===!0?0:1,l,h,u=null,d=0,f=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function x(y){let _=!1,v=m(y);v===null?p(a,c):v&&v.isColor&&(p(v,1),_=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,_){let v=m(_);v&&(v.isCubeTexture||v.mapping===$c)?(h===void 0&&(h=new rt(new St(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Uo(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ps.copy(_.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(k_.makeRotationFromEuler(Ps)),h.material.toneMapped=le.getTransfer(v.colorSpace)!==ve,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new rt(new pi(2,2),new fi({name:"BackgroundMaterial",uniforms:Uo(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=le.getTransfer(v.colorSpace)!==ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(ac,E0(i)),n.buffers.color.setClear(ac.r,ac.g,ac.b,_,r)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:g}}function G_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),o=s,r=!1;function a(w,P,H,L,D){let U=!1,z=u(L,H,P);o!==z&&(o=z,l(o.object)),U=f(w,L,H,D),U&&m(w,L,H,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,v(w,P,H,L),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,P,H){let L=H.wireframe===!0,D=n[w.id];D===void 0&&(D={},n[w.id]=D);let U=D[P.id];U===void 0&&(U={},D[P.id]=U);let z=U[L];return z===void 0&&(z=d(c()),U[L]=z),z}function d(w){let P=[],H=[],L=[];for(let D=0;D<e;D++)P[D]=0,H[D]=0,L[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:L,object:w,attributes:{},index:null}}function f(w,P,H,L){let D=o.attributes,U=P.attributes,z=0,tt=H.getAttributes();for(let V in tt)if(tt[V].location>=0){let ut=D[V],pt=U[V];if(pt===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(pt=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(pt=w.instanceColor)),ut===void 0||ut.attribute!==pt||pt&&ut.data!==pt.data)return!0;z++}return o.attributesNum!==z||o.index!==L}function m(w,P,H,L){let D={},U=P.attributes,z=0,tt=H.getAttributes();for(let V in tt)if(tt[V].location>=0){let ut=U[V];ut===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(ut=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(ut=w.instanceColor));let pt={};pt.attribute=ut,ut&&ut.data&&(pt.data=ut.data),D[V]=pt,z++}o.attributes=D,o.attributesNum=z,o.index=L}function x(){let w=o.newAttributes;for(let P=0,H=w.length;P<H;P++)w[P]=0}function g(w){p(w,0)}function p(w,P){let H=o.newAttributes,L=o.enabledAttributes,D=o.attributeDivisors;H[w]=1,L[w]===0&&(i.enableVertexAttribArray(w),L[w]=1),D[w]!==P&&(i.vertexAttribDivisor(w,P),D[w]=P)}function y(){let w=o.newAttributes,P=o.enabledAttributes;for(let H=0,L=P.length;H<L;H++)P[H]!==w[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function _(w,P,H,L,D,U,z){z===!0?i.vertexAttribIPointer(w,P,H,D,U):i.vertexAttribPointer(w,P,H,L,D,U)}function v(w,P,H,L){x();let D=L.attributes,U=H.getAttributes(),z=P.defaultAttributeValues;for(let tt in U){let V=U[tt];if(V.location>=0){let Q=D[tt];if(Q===void 0&&(tt==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),tt==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){let ut=Q.normalized,pt=Q.itemSize,at=t.get(Q);if(at===void 0)continue;let Ht=at.buffer,X=at.type,ot=at.bytesPerElement,wt=X===i.INT||X===i.UNSIGNED_INT||Q.gpuType===hd;if(Q.isInterleavedBufferAttribute){let dt=Q.data,kt=dt.stride,Xt=Q.offset;if(dt.isInstancedInterleavedBuffer){for(let ne=0;ne<V.locationSize;ne++)p(V.location+ne,dt.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ne=0;ne<V.locationSize;ne++)g(V.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let ne=0;ne<V.locationSize;ne++)_(V.location+ne,pt/V.locationSize,X,ut,kt*ot,(Xt+pt/V.locationSize*ne)*ot,wt)}else{if(Q.isInstancedBufferAttribute){for(let dt=0;dt<V.locationSize;dt++)p(V.location+dt,Q.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let dt=0;dt<V.locationSize;dt++)g(V.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let dt=0;dt<V.locationSize;dt++)_(V.location+dt,pt/V.locationSize,X,ut,pt*ot,pt/V.locationSize*dt*ot,wt)}}else if(z!==void 0){let ut=z[tt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(V.location,ut);break;case 3:i.vertexAttrib3fv(V.location,ut);break;case 4:i.vertexAttrib4fv(V.location,ut);break;default:i.vertexAttrib1fv(V.location,ut)}}}}y()}function R(){C();for(let w in n){let P=n[w];for(let H in P){let L=P[H];for(let D in L)h(L[D].object),delete L[D];delete P[H]}delete n[w]}}function S(w){if(n[w.id]===void 0)return;let P=n[w.id];for(let H in P){let L=P[H];for(let D in L)h(L[D].object),delete L[D];delete P[H]}delete n[w.id]}function A(w){for(let P in n){let H=n[P];if(H[w.id]===void 0)continue;let L=H[w.id];for(let D in L)h(L[D].object),delete L[D];delete H[w.id]}}function C(){b(),r=!0,o!==s&&(o=s,l(o.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function W_(i,t,e){let n;function s(l){n=l}function o(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)r(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function q_(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==Qn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ui&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==di&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:S}}function X_(i){let t=this,e=null,n=0,s=!1,o=!1,r=new Di,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||o&&!g)o?h(null):l();else{let y=o?0:n,_=y*4,v=p.clippingState||null;c.value=v,v=h(m,d,_,f);for(let R=0;R!==_;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=f;_!==x;++_,v+=4)r.copy(u[_]).applyMatrix4(y,a),r.normal.toArray(g,v),g[v+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Y_(i){let t=new WeakMap;function e(r,a){return a===Yh?r.mapping=No:a===$h&&(r.mapping=Lo),r}function n(r){if(r&&r.isTexture){let a=r.mapping;if(a===Yh||a===$h)if(t.has(r)){let c=t.get(r).texture;return e(c,r.mapping)}else{let c=r.image;if(c&&c.height>0){let l=new Au(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){let a=r.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}var Ic=class extends Rc{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},To=4,Ap=[.125,.215,.35,.446,.526,.582],Bs=20,Ah=new Ic,Rp=new Kt,Rh=null,Ch=0,Ih=0,Ph=!1,Ls=(1+Math.sqrt(5))/2,bo=1/Ls,Cp=[new N(-Ls,bo,0),new N(Ls,bo,0),new N(-bo,0,Ls),new N(bo,0,Ls),new N(0,Ls,-bo),new N(0,Ls,bo),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Pc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rh,Ch,Ih),this._renderer.xr.enabled=Ph,t.scissorTest=!1,cc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===No||t.mapping===Lo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:sa,format:Qn,colorSpace:Xo,depthBuffer:!1},s=Ip(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ip(t,e,n);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$_(o)),this._blurMaterial=Z_(o,t,e)}return s}_compileMaterial(t){let e=new rt(this._lodPlanes[0],t);this._renderer.compile(e,Ah)}_sceneToCubeUV(t,e,n,s){let a=new Je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Rp),h.toneMapping=ls,h.autoClear=!1;let f=new hn({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),m=new rt(new St,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(Rp),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;cc(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===No||t.mapping===Lo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Np()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pp());let o=s?this._cubemapMaterial:this._equirectMaterial,r=new rt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;let c=this._cubeSize;cc(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Ah)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let o=1;o<s;o++){let r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Cp[(s-o-1)%Cp.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){let c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new rt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Bs-1),x=o/m,g=isFinite(o)?1+Math.floor(h*x):Bs;g>Bs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bs}`);let p=[],y=0;for(let A=0;A<Bs;++A){let C=A/x,b=Math.exp(-C*C/2);p.push(b),A===0?y+=b:A<g&&(y+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let v=this._sizeLods[s],R=3*v*(s>_-To?s-_+To:0),S=4*(this._cubeSize-v);cc(e,R,S,3*v,2*v),c.setRenderTarget(e),c.render(u,Ah)}};function $_(i){let t=[],e=[],n=[],s=i,o=i-To+1+Ap.length;for(let r=0;r<o;r++){let a=Math.pow(2,s);e.push(a);let c=1/a;r>i-To?c=Ap[r-i+To-1]:r===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,y=new Float32Array(x*m*f),_=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let S=0;S<f;S++){let A=S%3*2/3-1,C=S>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(b,x*m*S),_.set(d,g*m*S);let w=[S,S,S,S,S,S];v.set(w,p*m*S)}let R=new Ne;R.setAttribute("position",new gn(y,x)),R.setAttribute("uv",new gn(_,g)),R.setAttribute("faceIndex",new gn(v,p)),t.push(R),s>To&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ip(i,t,e){let n=new Oi(i,t,e);return n.texture.mapping=$c,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Z_(i,t,e){let n=new Float32Array(Bs),s=new N(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yd(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function Pp(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yd(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function Np(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function yd(){return`

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
	`}function j_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Yh||c===$h,h=c===No||c===Lo;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Pc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Pc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){let c=a.target;c.removeEventListener("dispose",o);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function K_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ur("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function J_(i,t,e,n){let s={},o=new WeakMap;function r(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}d.removeEventListener("dispose",r),delete s[d.id];let f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,v=y.length;_<v;_+=3){let R=y[_+0],S=y[_+1],A=y[_+2];d.push(R,S,S,A,A,R)}}else if(m!==void 0){let y=m.array;x=m.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let R=_+0,S=_+1,A=_+2;d.push(R,S,S,A,A,R)}}else return;let g=new(w0(d)?Ac:Tc)(d,1);g.version=x;let p=o.get(u);p&&t.remove(p),o.set(u,g)}function h(u){let d=o.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Q_(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){i.drawElements(n,f,o,d*r),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,o,d*r,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/r,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,x,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function t1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function e1(i,t,e){let n=new WeakMap,s=new _e;function o(r,a,c){let l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*R*4*u),A=new Sc(S,v,R,u);A.type=di,A.needsUpdate=!0;let C=_*4;for(let w=0;w<u;w++){let P=g[w],H=p[w],L=y[w],D=v*R*4*w;for(let U=0;U<P.count;U++){let z=U*C;f===!0&&(s.fromBufferAttribute(P,U),S[D+z+0]=s.x,S[D+z+1]=s.y,S[D+z+2]=s.z,S[D+z+3]=0),m===!0&&(s.fromBufferAttribute(H,U),S[D+z+4]=s.x,S[D+z+5]=s.y,S[D+z+6]=s.z,S[D+z+7]=0),x===!0&&(s.fromBufferAttribute(L,U),S[D+z+8]=s.x,S[D+z+9]=s.y,S[D+z+10]=s.z,S[D+z+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new ht(v,R)},n.set(a,d),a.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function n1(i,t,e,n){let s=new WeakMap;function o(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}var Nc=class extends Mn{constructor(t,e,n,s,o,r,a,c,l,h=Ro){if(h!==Ro&&h!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ro&&(n=Os),n===void 0&&h===Do&&(n=zo),super(null,s,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Cn,this.minFilter=c!==void 0?c:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},T0=new Mn,Lp=new Nc(1,1),A0=new Sc,R0=new Su,C0=new Cc,zp=[],Dp=[],Bp=new Float32Array(16),Fp=new Float32Array(9),Up=new Float32Array(4);function $o(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,o=zp[s];if(o===void 0&&(o=new Float32Array(s),zp[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jc(i,t){let e=Dp[t];e===void 0&&(e=new Int32Array(t),Dp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function i1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function s1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function o1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function r1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function a1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(We(e,n))return;Up.set(n),i.uniformMatrix2fv(this.addr,!1,Up),qe(e,n)}}function c1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(We(e,n))return;Fp.set(n),i.uniformMatrix3fv(this.addr,!1,Fp),qe(e,n)}}function l1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(We(e,n))return;Bp.set(n),i.uniformMatrix4fv(this.addr,!1,Bp),qe(e,n)}}function h1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function u1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function d1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function f1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function p1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function m1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function g1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function x1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function y1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Lp.compareFunction=M0,o=Lp):o=T0,e.setTexture2D(t||o,s)}function v1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||R0,s)}function _1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||C0,s)}function M1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||A0,s)}function w1(i){switch(i){case 5126:return i1;case 35664:return s1;case 35665:return o1;case 35666:return r1;case 35674:return a1;case 35675:return c1;case 35676:return l1;case 5124:case 35670:return h1;case 35667:case 35671:return u1;case 35668:case 35672:return d1;case 35669:case 35673:return f1;case 5125:return p1;case 36294:return m1;case 36295:return g1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return M1}}function b1(i,t){i.uniform1fv(this.addr,t)}function E1(i,t){let e=$o(t,this.size,2);i.uniform2fv(this.addr,e)}function S1(i,t){let e=$o(t,this.size,3);i.uniform3fv(this.addr,e)}function T1(i,t){let e=$o(t,this.size,4);i.uniform4fv(this.addr,e)}function A1(i,t){let e=$o(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function R1(i,t){let e=$o(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function C1(i,t){let e=$o(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function I1(i,t){i.uniform1iv(this.addr,t)}function P1(i,t){i.uniform2iv(this.addr,t)}function N1(i,t){i.uniform3iv(this.addr,t)}function L1(i,t){i.uniform4iv(this.addr,t)}function z1(i,t){i.uniform1uiv(this.addr,t)}function D1(i,t){i.uniform2uiv(this.addr,t)}function B1(i,t){i.uniform3uiv(this.addr,t)}function F1(i,t){i.uniform4uiv(this.addr,t)}function U1(i,t,e){let n=this.cache,s=t.length,o=jc(e,s);We(n,o)||(i.uniform1iv(this.addr,o),qe(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||T0,o[r])}function O1(i,t,e){let n=this.cache,s=t.length,o=jc(e,s);We(n,o)||(i.uniform1iv(this.addr,o),qe(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||R0,o[r])}function H1(i,t,e){let n=this.cache,s=t.length,o=jc(e,s);We(n,o)||(i.uniform1iv(this.addr,o),qe(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||C0,o[r])}function k1(i,t,e){let n=this.cache,s=t.length,o=jc(e,s);We(n,o)||(i.uniform1iv(this.addr,o),qe(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||A0,o[r])}function V1(i){switch(i){case 5126:return b1;case 35664:return E1;case 35665:return S1;case 35666:return T1;case 35674:return A1;case 35675:return R1;case 35676:return C1;case 5124:case 35670:return I1;case 35667:case 35671:return P1;case 35668:case 35672:return N1;case 35669:case 35673:return L1;case 5125:return z1;case 36294:return D1;case 36295:return B1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return k1}}var Ru=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=w1(e.type)}},Cu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V1(e.type)}},Iu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let o=0,r=s.length;o!==r;++o){let a=s[o];a.setValue(t,e[a.id],n)}}},Nh=/(\w+)(\])?(\[|\.)?/g;function Op(i,t){i.seq.push(t),i.map[t.id]=t}function G1(i,t,e){let n=i.name,s=n.length;for(Nh.lastIndex=0;;){let o=Nh.exec(n),r=Nh.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Op(e,l===void 0?new Ru(a,i,t):new Cu(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Iu(a),Op(e,u)),e=u}}}var Io=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);G1(o,r,this)}}setValue(t,e,n,s){let o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){let a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,o=t.length;s!==o;++s){let r=t[s];r.id in e&&n.push(r)}return n}};function Hp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var W1=37297,q1=0;function X1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){let a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}var kp=new jt;function Y1(i){le._getMatrix(kp,le.workingColorSpace,i);let t=`mat3( ${kp.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case Zc:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+X1(i.getShaderSource(t),r)}else return s}function $1(i,t){let e=Y1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Z1(i,t){let e;switch(t){case rx:e="Linear";break;case ax:e="Reinhard";break;case cx:e="Cineon";break;case Yc:e="ACESFilmic";break;case hx:e="AgX";break;case ux:e="Neutral";break;case lx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var lc=new N;function j1(){le.getLuminanceCoefficients(lc);let i=lc.x.toFixed(4),t=lc.y.toFixed(4),e=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function J1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Q1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let o=i.getActiveAttrib(t,s),r=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Or(i){return i!==""}function Gp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var tM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pu(i){return i.replace(tM,nM)}var eM=new Map;function nM(i,t){let e=Qt[t];if(e===void 0){let n=eM.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pu(e)}var iM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qp(i){return i.replace(iM,sM)}function sM(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Xp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function oM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===c0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ld?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function rM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case No:case Lo:t="ENVMAP_TYPE_CUBE";break;case $c:t="ENVMAP_TYPE_CUBE_UV";break}return t}function aM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Lo:t="ENVMAP_MODE_REFRACTION";break}return t}function cM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case l0:t="ENVMAP_BLENDING_MULTIPLY";break;case sx:t="ENVMAP_BLENDING_MIX";break;case ox:t="ENVMAP_BLENDING_ADD";break}return t}function lM(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function hM(i,t,e,n){let s=i.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,c=oM(e),l=rM(e),h=aM(e),u=cM(e),d=lM(e),f=K1(e),m=J1(o),x=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Or).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(g=[Xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[Xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ls?"#define TONE_MAPPING":"",e.toneMapping!==ls?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ls?Z1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,$1("linearToOutputTexel",e.outputColorSpace),j1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),r=Pu(r),r=Gp(r,e),r=Wp(r,e),a=Pu(a),a=Gp(a,e),a=Wp(a,e),r=qp(r),a=qp(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===op?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+g+r,v=y+p+a,R=Hp(s,s.VERTEX_SHADER,_),S=Hp(s,s.FRAGMENT_SHADER,v);s.attachShader(x,R),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(x).trim(),L=s.getShaderInfoLog(R).trim(),D=s.getShaderInfoLog(S).trim(),U=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,S);else{let tt=Vp(s,R,"vertex"),V=Vp(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+tt+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(L===""||D==="")&&(z=!1);z&&(P.diagnostics={runnable:U,programLog:H,vertexShader:{log:L,prefix:g},fragmentShader:{log:D,prefix:p}})}s.deleteShader(R),s.deleteShader(S),C=new Io(s,x),b=Q1(s,x)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,W1)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=S,this}var uM=0,Nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lu(t),e.set(t,n)),n}},Lu=class{constructor(t){this.id=uM++,this.code=t,this.usedTimes=0}};function dM(i,t,e,n,s,o,r){let a=new Yr,c=new Nu,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,w,P,H,L){let D=H.fog,U=L.geometry,z=b.isMeshStandardMaterial?H.environment:null,tt=(b.isMeshStandardMaterial?e:t).get(b.envMap||z),V=tt&&tt.mapping===$c?tt.image.height:null,Q=m[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let ut=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,pt=ut!==void 0?ut.length:0,at=0;U.morphAttributes.position!==void 0&&(at=1),U.morphAttributes.normal!==void 0&&(at=2),U.morphAttributes.color!==void 0&&(at=3);let Ht,X,ot,wt;if(Q){let xe=hi[Q];Ht=xe.vertexShader,X=xe.fragmentShader}else Ht=b.vertexShader,X=b.fragmentShader,c.update(b),ot=c.getVertexShaderID(b),wt=c.getFragmentShaderID(b);let dt=i.getRenderTarget(),kt=i.state.buffers.depth.getReversed(),Xt=L.isInstancedMesh===!0,ne=L.isBatchedMesh===!0,Pe=!!b.map,ae=!!b.matcap,Fe=!!tt,k=!!b.aoMap,Bn=!!b.lightMap,ie=!!b.bumpMap,se=!!b.normalMap,Ft=!!b.displacementMap,Ee=!!b.emissiveMap,Bt=!!b.metalnessMap,I=!!b.roughnessMap,E=b.anisotropy>0,G=b.clearcoat>0,et=b.dispersion>0,it=b.iridescence>0,K=b.sheen>0,Pt=b.transmission>0,gt=E&&!!b.anisotropyMap,Mt=G&&!!b.clearcoatMap,ce=G&&!!b.clearcoatNormalMap,ct=G&&!!b.clearcoatRoughnessMap,bt=it&&!!b.iridescenceMap,Ut=it&&!!b.iridescenceThicknessMap,Gt=K&&!!b.sheenColorMap,Et=K&&!!b.sheenRoughnessMap,oe=!!b.specularMap,Jt=!!b.specularColorMap,we=!!b.specularIntensityMap,B=Pt&&!!b.transmissionMap,mt=Pt&&!!b.thicknessMap,Y=!!b.gradientMap,nt=!!b.alphaMap,vt=b.alphaTest>0,xt=!!b.alphaHash,$t=!!b.extensions,Le=ls;b.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Le=i.toneMapping);let an={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:Ht,fragmentShader:X,defines:b.defines,customVertexShaderID:ot,customFragmentShaderID:wt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ne,batchingColor:ne&&L._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&L.instanceColor!==null,instancingMorph:Xt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Xo,alphaToCoverage:!!b.alphaToCoverage,map:Pe,matcap:ae,envMap:Fe,envMapMode:Fe&&tt.mapping,envMapCubeUVHeight:V,aoMap:k,lightMap:Bn,bumpMap:ie,normalMap:se,displacementMap:d&&Ft,emissiveMap:Ee,normalMapObjectSpace:se&&b.normalMapType===mx,normalMapTangentSpace:se&&b.normalMapType===_0,metalnessMap:Bt,roughnessMap:I,anisotropy:E,anisotropyMap:gt,clearcoat:G,clearcoatMap:Mt,clearcoatNormalMap:ce,clearcoatRoughnessMap:ct,dispersion:et,iridescence:it,iridescenceMap:bt,iridescenceThicknessMap:Ut,sheen:K,sheenColorMap:Gt,sheenRoughnessMap:Et,specularMap:oe,specularColorMap:Jt,specularIntensityMap:we,transmission:Pt,transmissionMap:B,thicknessMap:mt,gradientMap:Y,opaque:b.transparent===!1&&b.blending===Ao&&b.alphaToCoverage===!1,alphaMap:nt,alphaTest:vt,alphaHash:xt,combine:b.combine,mapUv:Pe&&x(b.map.channel),aoMapUv:k&&x(b.aoMap.channel),lightMapUv:Bn&&x(b.lightMap.channel),bumpMapUv:ie&&x(b.bumpMap.channel),normalMapUv:se&&x(b.normalMap.channel),displacementMapUv:Ft&&x(b.displacementMap.channel),emissiveMapUv:Ee&&x(b.emissiveMap.channel),metalnessMapUv:Bt&&x(b.metalnessMap.channel),roughnessMapUv:I&&x(b.roughnessMap.channel),anisotropyMapUv:gt&&x(b.anisotropyMap.channel),clearcoatMapUv:Mt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(b.sheenRoughnessMap.channel),specularMapUv:oe&&x(b.specularMap.channel),specularColorMapUv:Jt&&x(b.specularColorMap.channel),specularIntensityMapUv:we&&x(b.specularIntensityMap.channel),transmissionMapUv:B&&x(b.transmissionMap.channel),thicknessMapUv:mt&&x(b.thicknessMap.channel),alphaMapUv:nt&&x(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(se||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Pe||nt),fog:!!D,useFog:b.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:kt,skinning:L.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:at,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&le.getTransfer(b.map.colorSpace)===ve,decodeVideoTextureEmissive:Ee&&b.emissiveMap.isVideoTexture===!0&&le.getTransfer(b.emissiveMap.colorSpace)===ve,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ce,flipSided:b.side===_n,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$t&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&b.extensions.multiDraw===!0||ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return an.vertexUv1s=l.has(1),an.vertexUv2s=l.has(2),an.vertexUv3s=l.has(3),l.clear(),an}function p(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)w.push(P),w.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(w,b),_(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function y(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let w=m[b.type],P;if(w){let H=hi[w];P=ny.clone(H.uniforms)}else P=b.uniforms;return P}function R(b,w){let P;for(let H=0,L=h.length;H<L;H++){let D=h[H];if(D.cacheKey===w){P=D,++P.usedTimes;break}}return P===void 0&&(P=new hM(i,w,b,o),h.push(P)),P}function S(b){if(--b.usedTimes===0){let w=h.indexOf(b);h[w]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:C}}function fM(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function pM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $p(){let i=[],t=0,e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,f,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){let p=r(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,x,g){let p=r(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||pM),n.length>1&&n.sort(d||Yp),s.length>1&&s.sort(d||Yp)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function mM(){let i=new WeakMap;function t(n,s){let o=i.get(n),r;return o===void 0?(r=new $p,i.set(n,[r])):s>=o.length?(r=new $p,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function gM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Kt};break;case"SpotLight":e={position:new N,direction:new N,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function xM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var yM=0;function vM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _M(i){let t=new gM,e=xM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,o=new ue,r=new ue;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,y=0,_=0,v=0,R=0,S=0,A=0;l.sort(vM);for(let b=0,w=l.length;b<w;b++){let P=l[b],H=P.color,L=P.intensity,D=P.distance,U=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*L,u+=H.g*L,d+=H.b*L;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],L);A++}else if(P.isDirectionalLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,V=e.get(P);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=z,f++}else if(P.isSpotLight){let z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(H).multiplyScalar(L),z.distance=D,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[x]=z;let tt=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,tt.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[x]=tt.matrix,P.castShadow){let V=e.get(P);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=U,v++}x++}else if(P.isRectAreaLight){let z=t.get(P);z.color.copy(H).multiplyScalar(L),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=z,g++}else if(P.isPointLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let tt=P.shadow,V=e.get(P);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,V.shadowCameraNear=tt.camera.near,V.shadowCameraFar=tt.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=P.shadow.matrix,_++}n.point[m]=z,m++}else if(P.isHemisphereLight){let z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(L),z.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[p]=z,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+R-S,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,C.directionalLength=f,C.pointLength=m,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=A,n.version=yM++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let _=l[p];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),r.identity(),o.copy(_.matrixWorld),o.premultiply(g),r.extractRotation(o),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),m++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function Zp(i){let t=new _M(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function MM(i){let t=new WeakMap;function e(s,o=0){let r=t.get(s),a;return r===void 0?(a=new Zp(i),t.set(s,[a])):o>=r.length?(a=new Zp(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var zu=class extends ps{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Du=class extends ps{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},wM=`void main() {
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
}`;function EM(i,t,e){let n=new $r,s=new ht,o=new ht,r=new _e,a=new zu({depthPacking:px}),c=new Du,l={},h=e.maxTextureSize,u={[hs]:_n,[_n]:hs,[Ce]:Ce},d=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:wM,fragmentShader:bM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ne;m.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new rt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c0;let p=this.type;this.render=function(S,A,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let b=i.getRenderTarget(),w=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(cs),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let L=p!==zi&&this.type===zi,D=p===zi&&this.type!==zi;for(let U=0,z=S.length;U<z;U++){let tt=S[U],V=tt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Q=V.getFrameExtents();if(s.multiply(Q),o.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/Q.x),s.x=o.x*Q.x,V.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/Q.y),s.y=o.y*Q.y,V.mapSize.y=o.y)),V.map===null||L===!0||D===!0){let pt=this.type!==zi?{minFilter:Cn,magFilter:Cn}:{};V.map!==null&&V.map.dispose(),V.map=new Oi(s.x,s.y,pt),V.map.texture.name=tt.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ut=V.getViewportCount();for(let pt=0;pt<ut;pt++){let at=V.getViewport(pt);r.set(o.x*at.x,o.y*at.y,o.x*at.z,o.y*at.w),H.viewport(r),V.updateMatrices(tt,pt),n=V.getFrustum(),v(A,C,V.camera,tt,this.type)}V.isPointLightShadow!==!0&&this.type===zi&&y(V,C),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,w,P)};function y(S,A){let C=t.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Oi(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,C,f,x,null)}function _(S,A,C,b){let w=null,P=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)w=P;else if(w=C.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=w.uuid,L=A.uuid,D=l[H];D===void 0&&(D={},l[H]=D);let U=D[L];U===void 0&&(U=w.clone(),D[L]=U,A.addEventListener("dispose",R)),w=U}if(w.visible=A.visible,w.wireframe=A.wireframe,b===zi?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let H=i.properties.get(w);H.light=C}return w}function v(S,A,C,b,w){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===zi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let L=t.update(S),D=S.material;if(Array.isArray(D)){let U=L.groups;for(let z=0,tt=U.length;z<tt;z++){let V=U[z],Q=D[V.materialIndex];if(Q&&Q.visible){let ut=_(S,Q,b,w);S.onBeforeShadow(i,S,A,C,L,ut,V),i.renderBufferDirect(C,null,L,ut,S,V),S.onAfterShadow(i,S,A,C,L,ut,V)}}}else if(D.visible){let U=_(S,D,b,w);S.onBeforeShadow(i,S,A,C,L,U,null),i.renderBufferDirect(C,null,L,U,S,null),S.onAfterShadow(i,S,A,C,L,U,null)}}let H=S.children;for(let L=0,D=H.length;L<D;L++)v(H[L],A,C,b,w)}function R(S){S.target.removeEventListener("dispose",R);for(let C in l){let b=l[C],w=S.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}var SM={[Hh]:kh,[Vh]:qh,[Gh]:Xh,[Po]:Wh,[kh]:Hh,[qh]:Vh,[Xh]:Gh,[Wh]:Po};function TM(i,t){function e(){let B=!1,mt=new _e,Y=null,nt=new _e(0,0,0,0);return{setMask:function(vt){Y!==vt&&!B&&(i.colorMask(vt,vt,vt,vt),Y=vt)},setLocked:function(vt){B=vt},setClear:function(vt,xt,$t,Le,an){an===!0&&(vt*=Le,xt*=Le,$t*=Le),mt.set(vt,xt,$t,Le),nt.equals(mt)===!1&&(i.clearColor(vt,xt,$t,Le),nt.copy(mt))},reset:function(){B=!1,Y=null,nt.set(-1,0,0,0)}}}function n(){let B=!1,mt=!1,Y=null,nt=null,vt=null;return{setReversed:function(xt){if(mt!==xt){let $t=t.get("EXT_clip_control");mt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);let Le=vt;vt=null,this.setClear(Le)}mt=xt},getReversed:function(){return mt},setTest:function(xt){xt?dt(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(xt){Y!==xt&&!B&&(i.depthMask(xt),Y=xt)},setFunc:function(xt){if(mt&&(xt=SM[xt]),nt!==xt){switch(xt){case Hh:i.depthFunc(i.NEVER);break;case kh:i.depthFunc(i.ALWAYS);break;case Vh:i.depthFunc(i.LESS);break;case Po:i.depthFunc(i.LEQUAL);break;case Gh:i.depthFunc(i.EQUAL);break;case Wh:i.depthFunc(i.GEQUAL);break;case qh:i.depthFunc(i.GREATER);break;case Xh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=xt}},setLocked:function(xt){B=xt},setClear:function(xt){vt!==xt&&(mt&&(xt=1-xt),i.clearDepth(xt),vt=xt)},reset:function(){B=!1,Y=null,nt=null,vt=null,mt=!1}}}function s(){let B=!1,mt=null,Y=null,nt=null,vt=null,xt=null,$t=null,Le=null,an=null;return{setTest:function(xe){B||(xe?dt(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(xe){mt!==xe&&!B&&(i.stencilMask(xe),mt=xe)},setFunc:function(xe,$n,Ai){(Y!==xe||nt!==$n||vt!==Ai)&&(i.stencilFunc(xe,$n,Ai),Y=xe,nt=$n,vt=Ai)},setOp:function(xe,$n,Ai){(xt!==xe||$t!==$n||Le!==Ai)&&(i.stencilOp(xe,$n,Ai),xt=xe,$t=$n,Le=Ai)},setLocked:function(xe){B=xe},setClear:function(xe){an!==xe&&(i.clearStencil(xe),an=xe)},reset:function(){B=!1,mt=null,Y=null,nt=null,vt=null,xt=null,$t=null,Le=null,an=null}}}let o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,y=null,_=null,v=null,R=null,S=null,A=new Kt(0,0,0),C=0,b=!1,w=null,P=null,H=null,L=null,D=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,tt=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=tt>=2);let Q=null,ut={},pt=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),Ht=new _e().fromArray(pt),X=new _e().fromArray(at);function ot(B,mt,Y,nt){let vt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(B,xt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<Y;$t++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(mt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return xt}let wt={};wt[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),r.setFunc(Po),ie(!1),se(Jf),dt(i.CULL_FACE),k(cs);function dt(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function kt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Xt(B,mt){return u[B]!==mt?(i.bindFramebuffer(B,mt),u[B]=mt,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function ne(B,mt){let Y=f,nt=!1;if(B){Y=d.get(mt),Y===void 0&&(Y=[],d.set(mt,Y));let vt=B.textures;if(Y.length!==vt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,$t=vt.length;xt<$t;xt++)Y[xt]=i.COLOR_ATTACHMENT0+xt;Y.length=vt.length,nt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,nt=!0);nt&&i.drawBuffers(Y)}function Pe(B){return m!==B?(i.useProgram(B),m=B,!0):!1}let ae={[zs]:i.FUNC_ADD,[kg]:i.FUNC_SUBTRACT,[Vg]:i.FUNC_REVERSE_SUBTRACT};ae[Gg]=i.MIN,ae[Wg]=i.MAX;let Fe={[qg]:i.ZERO,[Xg]:i.ONE,[Yg]:i.SRC_COLOR,[Uh]:i.SRC_ALPHA,[Qg]:i.SRC_ALPHA_SATURATE,[Kg]:i.DST_COLOR,[Zg]:i.DST_ALPHA,[$g]:i.ONE_MINUS_SRC_COLOR,[Oh]:i.ONE_MINUS_SRC_ALPHA,[Jg]:i.ONE_MINUS_DST_COLOR,[jg]:i.ONE_MINUS_DST_ALPHA,[tx]:i.CONSTANT_COLOR,[ex]:i.ONE_MINUS_CONSTANT_COLOR,[nx]:i.CONSTANT_ALPHA,[ix]:i.ONE_MINUS_CONSTANT_ALPHA};function k(B,mt,Y,nt,vt,xt,$t,Le,an,xe){if(B===cs){x===!0&&(kt(i.BLEND),x=!1);return}if(x===!1&&(dt(i.BLEND),x=!0),B!==Hg){if(B!==g||xe!==b){if((p!==zs||v!==zs)&&(i.blendEquation(i.FUNC_ADD),p=zs,v=zs),xe)switch(B){case Ao:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.ONE,i.ONE);break;case Qf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tp:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ao:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tp:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,_=null,R=null,S=null,A.set(0,0,0),C=0,g=B,b=xe}return}vt=vt||mt,xt=xt||Y,$t=$t||nt,(mt!==p||vt!==v)&&(i.blendEquationSeparate(ae[mt],ae[vt]),p=mt,v=vt),(Y!==y||nt!==_||xt!==R||$t!==S)&&(i.blendFuncSeparate(Fe[Y],Fe[nt],Fe[xt],Fe[$t]),y=Y,_=nt,R=xt,S=$t),(Le.equals(A)===!1||an!==C)&&(i.blendColor(Le.r,Le.g,Le.b,an),A.copy(Le),C=an),g=B,b=!1}function Bn(B,mt){B.side===Ce?kt(i.CULL_FACE):dt(i.CULL_FACE);let Y=B.side===_n;mt&&(Y=!Y),ie(Y),B.blending===Ao&&B.transparent===!1?k(cs):k(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),o.setMask(B.colorWrite);let nt=B.stencilWrite;a.setTest(nt),nt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ee(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(B){w!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),w=B)}function se(B){B!==Ug?(dt(i.CULL_FACE),B!==P&&(B===Jf?i.cullFace(i.BACK):B===Og?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),P=B}function Ft(B){B!==H&&(z&&i.lineWidth(B),H=B)}function Ee(B,mt,Y){B?(dt(i.POLYGON_OFFSET_FILL),(L!==mt||D!==Y)&&(i.polygonOffset(mt,Y),L=mt,D=Y)):kt(i.POLYGON_OFFSET_FILL)}function Bt(B){B?dt(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function I(B){B===void 0&&(B=i.TEXTURE0+U-1),Q!==B&&(i.activeTexture(B),Q=B)}function E(B,mt,Y){Y===void 0&&(Q===null?Y=i.TEXTURE0+U-1:Y=Q);let nt=ut[Y];nt===void 0&&(nt={type:void 0,texture:void 0},ut[Y]=nt),(nt.type!==B||nt.texture!==mt)&&(Q!==Y&&(i.activeTexture(Y),Q=Y),i.bindTexture(B,mt||wt[B]),nt.type=B,nt.texture=mt)}function G(){let B=ut[Q];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Gt(B){Ht.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ht.copy(B))}function Et(B){X.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),X.copy(B))}function oe(B,mt){let Y=l.get(mt);Y===void 0&&(Y=new WeakMap,l.set(mt,Y));let nt=Y.get(B);nt===void 0&&(nt=i.getUniformBlockIndex(mt,B.name),Y.set(B,nt))}function Jt(B,mt){let nt=l.get(mt).get(B);c.get(mt)!==nt&&(i.uniformBlockBinding(mt,nt,B.__bindingPointIndex),c.set(mt,nt))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,ut={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,y=null,_=null,v=null,R=null,S=null,A=new Kt(0,0,0),C=0,b=!1,w=null,P=null,H=null,L=null,D=null,Ht.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:dt,disable:kt,bindFramebuffer:Xt,drawBuffers:ne,useProgram:Pe,setBlending:k,setMaterial:Bn,setFlipSided:ie,setCullFace:se,setLineWidth:Ft,setPolygonOffset:Ee,setScissorTest:Bt,activeTexture:I,bindTexture:E,unbindTexture:G,compressedTexImage2D:et,compressedTexImage3D:it,texImage2D:bt,texImage3D:Ut,updateUBOMapping:oe,uniformBlockBinding:Jt,texStorage2D:ce,texStorage3D:ct,texSubImage2D:K,texSubImage3D:Pt,compressedTexSubImage2D:gt,compressedTexSubImage3D:Mt,scissor:Gt,viewport:Et,reset:we}}function jp(i,t,e,n){let s=AM(n);switch(e){case p0:return i*t;case g0:return i*t;case x0:return i*t*2;case fd:return i*t/s.components*s.byteLength;case pd:return i*t/s.components*s.byteLength;case y0:return i*t*2/s.components*s.byteLength;case md:return i*t*2/s.components*s.byteLength;case m0:return i*t*3/s.components*s.byteLength;case Qn:return i*t*4/s.components*s.byteLength;case gd:return i*t*4/s.components*s.byteLength;case mc:case gc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xc:case yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kh:case Qh:return Math.max(i,16)*Math.max(t,8)/4;case jh:case Jh:return Math.max(i,8)*Math.max(t,8)/2;case tu:case eu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case iu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case su:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ou:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ru:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case au:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case cu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case uu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case du:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vc:case xu:case yu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case v0:case vu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _u:case Mu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function AM(i){switch(i){case Ui:case u0:return{byteLength:1,components:1};case qr:case d0:case sa:return{byteLength:2,components:1};case ud:case dd:return{byteLength:2,components:4};case Os:case hd:case di:return{byteLength:4,components:1};case f0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function RM(i,t,e,n,s,o,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,E){return f?new OffscreenCanvas(I,E):bc("canvas")}function x(I,E,G){let et=1,it=Bt(I);if((it.width>G||it.height>G)&&(et=G/Math.max(it.width,it.height)),et<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let K=Math.floor(et*it.width),Pt=Math.floor(et*it.height);u===void 0&&(u=m(K,Pt));let gt=E?m(K,Pt):u;return gt.width=K,gt.height=Pt,gt.getContext("2d").drawImage(I,0,0,K,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+K+"x"+Pt+")."),gt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,E,G,et,it=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=E;if(E===i.RED&&(G===i.FLOAT&&(K=i.R32F),G===i.HALF_FLOAT&&(K=i.R16F),G===i.UNSIGNED_BYTE&&(K=i.R8)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.R8UI),G===i.UNSIGNED_SHORT&&(K=i.R16UI),G===i.UNSIGNED_INT&&(K=i.R32UI),G===i.BYTE&&(K=i.R8I),G===i.SHORT&&(K=i.R16I),G===i.INT&&(K=i.R32I)),E===i.RG&&(G===i.FLOAT&&(K=i.RG32F),G===i.HALF_FLOAT&&(K=i.RG16F),G===i.UNSIGNED_BYTE&&(K=i.RG8)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RG8UI),G===i.UNSIGNED_SHORT&&(K=i.RG16UI),G===i.UNSIGNED_INT&&(K=i.RG32UI),G===i.BYTE&&(K=i.RG8I),G===i.SHORT&&(K=i.RG16I),G===i.INT&&(K=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGB8UI),G===i.UNSIGNED_SHORT&&(K=i.RGB16UI),G===i.UNSIGNED_INT&&(K=i.RGB32UI),G===i.BYTE&&(K=i.RGB8I),G===i.SHORT&&(K=i.RGB16I),G===i.INT&&(K=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),G===i.UNSIGNED_INT&&(K=i.RGBA32UI),G===i.BYTE&&(K=i.RGBA8I),G===i.SHORT&&(K=i.RGBA16I),G===i.INT&&(K=i.RGBA32I)),E===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),E===i.RGBA){let Pt=it?Zc:le.getTransfer(et);G===i.FLOAT&&(K=i.RGBA32F),G===i.HALF_FLOAT&&(K=i.RGBA16F),G===i.UNSIGNED_BYTE&&(K=Pt===ve?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(I,E){let G;return I?E===null||E===Os||E===zo?G=i.DEPTH24_STENCIL8:E===di?G=i.DEPTH32F_STENCIL8:E===qr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Os||E===zo?G=i.DEPTH_COMPONENT24:E===di?G=i.DEPTH_COMPONENT32F:E===qr&&(G=i.DEPTH_COMPONENT16),G}function R(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Cn&&I.minFilter!==ui?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function S(I){let E=I.target;E.removeEventListener("dispose",S),C(E),E.isVideoTexture&&h.delete(E)}function A(I){let E=I.target;E.removeEventListener("dispose",A),w(E)}function C(I){let E=n.get(I);if(E.__webglInit===void 0)return;let G=I.source,et=d.get(G);if(et){let it=et[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(I),Object.keys(et).length===0&&d.delete(G)}n.remove(I)}function b(I){let E=n.get(I);i.deleteTexture(E.__webglTexture);let G=I.source,et=d.get(G);delete et[E.__cacheKey],r.memory.textures--}function w(I){let E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(E.__webglFramebuffer[et]))for(let it=0;it<E.__webglFramebuffer[et].length;it++)i.deleteFramebuffer(E.__webglFramebuffer[et][it]);else i.deleteFramebuffer(E.__webglFramebuffer[et]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[et])}else{if(Array.isArray(E.__webglFramebuffer))for(let et=0;et<E.__webglFramebuffer.length;et++)i.deleteFramebuffer(E.__webglFramebuffer[et]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let et=0;et<E.__webglColorRenderbuffer.length;et++)E.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[et]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let G=I.textures;for(let et=0,it=G.length;et<it;et++){let K=n.get(G[et]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),r.memory.textures--),n.remove(G[et])}n.remove(I)}let P=0;function H(){P=0}function L(){let I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function D(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function U(I,E){let G=n.get(I);if(I.isVideoTexture&&Ft(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){let et=I.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,I,E);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function z(I,E){let G=n.get(I);if(I.version>0&&G.__version!==I.version){X(G,I,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function tt(I,E){let G=n.get(I);if(I.version>0&&G.__version!==I.version){X(G,I,E);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function V(I,E){let G=n.get(I);if(I.version>0&&G.__version!==I.version){ot(G,I,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}let Q={[us]:i.REPEAT,[Fs]:i.CLAMP_TO_EDGE,[Zh]:i.MIRRORED_REPEAT},ut={[Cn]:i.NEAREST,[dx]:i.NEAREST_MIPMAP_NEAREST,[Ga]:i.NEAREST_MIPMAP_LINEAR,[ui]:i.LINEAR,[oh]:i.LINEAR_MIPMAP_NEAREST,[Us]:i.LINEAR_MIPMAP_LINEAR},pt={[gx]:i.NEVER,[wx]:i.ALWAYS,[xx]:i.LESS,[M0]:i.LEQUAL,[yx]:i.EQUAL,[Mx]:i.GEQUAL,[vx]:i.GREATER,[_x]:i.NOTEQUAL};function at(I,E){if(E.type===di&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ui||E.magFilter===oh||E.magFilter===Ga||E.magFilter===Us||E.minFilter===ui||E.minFilter===oh||E.minFilter===Ga||E.minFilter===Us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Q[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Q[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Q[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ut[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ut[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,pt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Cn||E.minFilter!==Ga&&E.minFilter!==Us||E.type===di&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ht(I,E){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",S));let et=E.source,it=d.get(et);it===void 0&&(it={},d.set(et,it));let K=D(E);if(K!==I.__cacheKey){it[K]===void 0&&(it[K]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,G=!0),it[K].usedTimes++;let Pt=it[I.__cacheKey];Pt!==void 0&&(it[I.__cacheKey].usedTimes--,Pt.usedTimes===0&&b(E)),I.__cacheKey=K,I.__webglTexture=it[K].texture}return G}function X(I,E,G){let et=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=i.TEXTURE_3D);let it=Ht(I,E),K=E.source;e.bindTexture(et,I.__webglTexture,i.TEXTURE0+G);let Pt=n.get(K);if(K.version!==Pt.__version||it===!0){e.activeTexture(i.TEXTURE0+G);let gt=le.getPrimaries(le.workingColorSpace),Mt=E.colorSpace===mn?null:le.getPrimaries(E.colorSpace),ce=E.colorSpace===mn||gt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let ct=x(E.image,!1,s.maxTextureSize);ct=Ee(E,ct);let bt=o.convert(E.format,E.colorSpace),Ut=o.convert(E.type),Gt=_(E.internalFormat,bt,Ut,E.colorSpace,E.isVideoTexture);at(et,E);let Et,oe=E.mipmaps,Jt=E.isVideoTexture!==!0,we=Pt.__version===void 0||it===!0,B=K.dataReady,mt=R(E,ct);if(E.isDepthTexture)Gt=v(E.format===Do,E.type),we&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,Gt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,bt,Ut,null));else if(E.isDataTexture)if(oe.length>0){Jt&&we&&e.texStorage2D(i.TEXTURE_2D,mt,Gt,oe[0].width,oe[0].height);for(let Y=0,nt=oe.length;Y<nt;Y++)Et=oe[Y],Jt?B&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,bt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,Y,Gt,Et.width,Et.height,0,bt,Ut,Et.data);E.generateMipmaps=!1}else Jt?(we&&e.texStorage2D(i.TEXTURE_2D,mt,Gt,ct.width,ct.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,bt,Ut,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,bt,Ut,ct.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Jt&&we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Gt,oe[0].width,oe[0].height,ct.depth);for(let Y=0,nt=oe.length;Y<nt;Y++)if(Et=oe[Y],E.format!==Qn)if(bt!==null)if(Jt){if(B)if(E.layerUpdates.size>0){let vt=jp(Et.width,Et.height,E.format,E.type);for(let xt of E.layerUpdates){let $t=Et.data.subarray(xt*vt/Et.data.BYTES_PER_ELEMENT,(xt+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,xt,Et.width,Et.height,1,bt,$t)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,ct.depth,bt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Gt,Et.width,Et.height,ct.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,ct.depth,bt,Ut,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Gt,Et.width,Et.height,ct.depth,0,bt,Ut,Et.data)}else{Jt&&we&&e.texStorage2D(i.TEXTURE_2D,mt,Gt,oe[0].width,oe[0].height);for(let Y=0,nt=oe.length;Y<nt;Y++)Et=oe[Y],E.format!==Qn?bt!==null?Jt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Gt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?B&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,bt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,Y,Gt,Et.width,Et.height,0,bt,Ut,Et.data)}else if(E.isDataArrayTexture)if(Jt){if(we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Gt,ct.width,ct.height,ct.depth),B)if(E.layerUpdates.size>0){let Y=jp(ct.width,ct.height,E.format,E.type);for(let nt of E.layerUpdates){let vt=ct.data.subarray(nt*Y/ct.data.BYTES_PER_ELEMENT,(nt+1)*Y/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ct.width,ct.height,1,bt,Ut,vt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,bt,Ut,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,ct.width,ct.height,ct.depth,0,bt,Ut,ct.data);else if(E.isData3DTexture)Jt?(we&&e.texStorage3D(i.TEXTURE_3D,mt,Gt,ct.width,ct.height,ct.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,bt,Ut,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,ct.width,ct.height,ct.depth,0,bt,Ut,ct.data);else if(E.isFramebufferTexture){if(we)if(Jt)e.texStorage2D(i.TEXTURE_2D,mt,Gt,ct.width,ct.height);else{let Y=ct.width,nt=ct.height;for(let vt=0;vt<mt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Gt,Y,nt,0,bt,Ut,null),Y>>=1,nt>>=1}}else if(oe.length>0){if(Jt&&we){let Y=Bt(oe[0]);e.texStorage2D(i.TEXTURE_2D,mt,Gt,Y.width,Y.height)}for(let Y=0,nt=oe.length;Y<nt;Y++)Et=oe[Y],Jt?B&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,bt,Ut,Et):e.texImage2D(i.TEXTURE_2D,Y,Gt,bt,Ut,Et);E.generateMipmaps=!1}else if(Jt){if(we){let Y=Bt(ct);e.texStorage2D(i.TEXTURE_2D,mt,Gt,Y.width,Y.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Ut,ct)}else e.texImage2D(i.TEXTURE_2D,0,Gt,bt,Ut,ct);g(E)&&p(et),Pt.__version=K.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ot(I,E,G){if(E.image.length!==6)return;let et=Ht(I,E),it=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);let K=n.get(it);if(it.version!==K.__version||et===!0){e.activeTexture(i.TEXTURE0+G);let Pt=le.getPrimaries(le.workingColorSpace),gt=E.colorSpace===mn?null:le.getPrimaries(E.colorSpace),Mt=E.colorSpace===mn||Pt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let ce=E.isCompressedTexture||E.image[0].isCompressedTexture,ct=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let nt=0;nt<6;nt++)!ce&&!ct?bt[nt]=x(E.image[nt],!0,s.maxCubemapSize):bt[nt]=ct?E.image[nt].image:E.image[nt],bt[nt]=Ee(E,bt[nt]);let Ut=bt[0],Gt=o.convert(E.format,E.colorSpace),Et=o.convert(E.type),oe=_(E.internalFormat,Gt,Et,E.colorSpace),Jt=E.isVideoTexture!==!0,we=K.__version===void 0||et===!0,B=it.dataReady,mt=R(E,Ut);at(i.TEXTURE_CUBE_MAP,E);let Y;if(ce){Jt&&we&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,oe,Ut.width,Ut.height);for(let nt=0;nt<6;nt++){Y=bt[nt].mipmaps;for(let vt=0;vt<Y.length;vt++){let xt=Y[vt];E.format!==Qn?Gt!==null?Jt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,xt.width,xt.height,Gt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,oe,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,xt.width,xt.height,Gt,Et,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,oe,xt.width,xt.height,0,Gt,Et,xt.data)}}}else{if(Y=E.mipmaps,Jt&&we){Y.length>0&&mt++;let nt=Bt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,oe,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ct){Jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,bt[nt].width,bt[nt].height,Gt,Et,bt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,oe,bt[nt].width,bt[nt].height,0,Gt,Et,bt[nt].data);for(let vt=0;vt<Y.length;vt++){let $t=Y[vt].image[nt].image;Jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,$t.width,$t.height,Gt,Et,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,oe,$t.width,$t.height,0,Gt,Et,$t.data)}}else{Jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Gt,Et,bt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,oe,Gt,Et,bt[nt]);for(let vt=0;vt<Y.length;vt++){let xt=Y[vt];Jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Gt,Et,xt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,oe,Gt,Et,xt.image[nt])}}}g(E)&&p(i.TEXTURE_CUBE_MAP),K.__version=it.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function wt(I,E,G,et,it,K){let Pt=o.convert(G.format,G.colorSpace),gt=o.convert(G.type),Mt=_(G.internalFormat,Pt,gt,G.colorSpace),ce=n.get(E),ct=n.get(G);if(ct.__renderTarget=E,!ce.__hasExternalTextures){let bt=Math.max(1,E.width>>K),Ut=Math.max(1,E.height>>K);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,K,Mt,bt,Ut,E.depth,0,Pt,gt,null):e.texImage2D(it,K,Mt,bt,Ut,0,Pt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,it,ct.__webglTexture,0,ie(E)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,it,ct.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(I,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){let et=E.depthTexture,it=et&&et.isDepthTexture?et.type:null,K=v(E.stencilBuffer,it),Pt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=ie(E);se(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,K,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,K,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,K,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,I)}else{let et=E.textures;for(let it=0;it<et.length;it++){let K=et[it],Pt=o.convert(K.format,K.colorSpace),gt=o.convert(K.type),Mt=_(K.internalFormat,Pt,gt,K.colorSpace),ce=ie(E);G&&se(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Mt,E.width,E.height):se(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=n.get(E.depthTexture);et.__renderTarget=E,(!et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),U(E.depthTexture,0);let it=et.__webglTexture,K=ie(E);if(E.depthTexture.format===Ro)se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(E.depthTexture.format===Do)se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Xt(I){let E=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let et=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),et){let it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,et.removeEventListener("dispose",it)};et.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=et}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");kt(E.__webglFramebuffer,I)}else if(G){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]===void 0)E.__webglDepthbuffer[et]=i.createRenderbuffer(),dt(E.__webglDepthbuffer[et],I,!1);else{let it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),dt(E.__webglDepthbuffer,I,!1);else{let et=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(I,E,G){let et=n.get(I);E!==void 0&&wt(et.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Xt(I)}function Pe(I){let E=I.texture,G=n.get(I),et=n.get(E);I.addEventListener("dispose",A);let it=I.textures,K=I.isWebGLCubeRenderTarget===!0,Pt=it.length>1;if(Pt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=E.version,r.memory.textures++),K){G.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[gt]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)G.__webglFramebuffer[gt][Mt]=i.createFramebuffer()}else G.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)G.__webglFramebuffer[gt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let gt=0,Mt=it.length;gt<Mt;gt++){let ce=n.get(it[gt]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),r.memory.textures++)}if(I.samples>0&&se(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let gt=0;gt<it.length;gt++){let Mt=it[gt];G.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[gt]);let ce=o.convert(Mt.format,Mt.colorSpace),ct=o.convert(Mt.type),bt=_(Mt.internalFormat,ce,ct,Mt.colorSpace,I.isXRRenderTarget===!0),Ut=ie(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,bt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,G.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),at(i.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)wt(G.__webglFramebuffer[gt][Mt],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Mt);else wt(G.__webglFramebuffer[gt],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let gt=0,Mt=it.length;gt<Mt;gt++){let ce=it[gt],ct=n.get(ce);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),at(i.TEXTURE_2D,ce),wt(G.__webglFramebuffer,I,ce,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),g(ce)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(gt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,et.__webglTexture),at(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)wt(G.__webglFramebuffer[Mt],I,E,i.COLOR_ATTACHMENT0,gt,Mt);else wt(G.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,gt,0);g(E)&&p(gt),e.unbindTexture()}I.depthBuffer&&Xt(I)}function ae(I){let E=I.textures;for(let G=0,et=E.length;G<et;G++){let it=E[G];if(g(it)){let K=y(I),Pt=n.get(it).__webglTexture;e.bindTexture(K,Pt),p(K),e.unbindTexture()}}}let Fe=[],k=[];function Bn(I){if(I.samples>0){if(se(I)===!1){let E=I.textures,G=I.width,et=I.height,it=i.COLOR_BUFFER_BIT,K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(I),gt=E.length>1;if(gt)for(let Mt=0;Mt<E.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Mt=0;Mt<E.length;Mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Mt]);let ce=n.get(E[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,G,et,0,0,G,et,it,i.NEAREST),c===!0&&(Fe.length=0,k.length=0,Fe.push(i.COLOR_ATTACHMENT0+Mt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Fe.push(K),k.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Mt=0;Mt<E.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Mt]);let ce=n.get(E[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ie(I){return Math.min(s.maxSamples,I.samples)}function se(I){let E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ft(I){let E=r.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function Ee(I,E){let G=I.colorSpace,et=I.format,it=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Xo&&G!==mn&&(le.getTransfer(G)===ve?(et!==Qn||it!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Bt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=H,this.setTexture2D=U,this.setTexture2DArray=z,this.setTexture3D=tt,this.setTextureCube=V,this.rebindTextures=ne,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Bn,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=se}function CM(i,t){function e(n,s=mn){let o,r=le.getTransfer(s);if(n===Ui)return i.UNSIGNED_BYTE;if(n===ud)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===f0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===u0)return i.BYTE;if(n===d0)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===hd)return i.INT;if(n===Os)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===sa)return i.HALF_FLOAT;if(n===p0)return i.ALPHA;if(n===m0)return i.RGB;if(n===Qn)return i.RGBA;if(n===g0)return i.LUMINANCE;if(n===x0)return i.LUMINANCE_ALPHA;if(n===Ro)return i.DEPTH_COMPONENT;if(n===Do)return i.DEPTH_STENCIL;if(n===fd)return i.RED;if(n===pd)return i.RED_INTEGER;if(n===y0)return i.RG;if(n===md)return i.RG_INTEGER;if(n===gd)return i.RGBA_INTEGER;if(n===mc||n===gc||n===xc||n===yc)if(r===ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===mc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===mc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jh||n===Kh||n===Jh||n===Qh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===jh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tu||n===eu||n===nu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===tu||n===eu)return r===ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===nu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===iu||n===su||n===ou||n===ru||n===au||n===cu||n===lu||n===hu||n===uu||n===du||n===fu||n===pu||n===mu||n===gu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===iu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===su)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ou)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ru)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===au)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===du)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vc||n===xu||n===yu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===vc)return r===ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===v0||n===vu||n===_u||n===Mu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===vc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===vu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_u)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Bu=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ee=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},IM={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},PM=`
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

}`,Fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Mn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fi({vertexShader:PM,fragmentShader:NM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new rt(new pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uu=class extends ds{constructor(t,e){super();let n=this,s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=new Fu,g=e.getContextAttributes(),p=null,y=null,_=[],v=[],R=new ht,S=null,A=new Je;A.viewport=new _e;let C=new Je;C.viewport=new _e;let b=[A,C],w=new Bu,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ot=_[X];return ot===void 0&&(ot=new Vr,_[X]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(X){let ot=_[X];return ot===void 0&&(ot=new Vr,_[X]=ot),ot.getGripSpace()},this.getHand=function(X){let ot=_[X];return ot===void 0&&(ot=new Vr,_[X]=ot),ot.getHandSpace()};function L(X){let ot=v.indexOf(X.inputSource);if(ot===-1)return;let wt=_[ot];wt!==void 0&&(wt.update(X.inputSource,X.frame,l||r),wt.dispatchEvent({type:X.type,data:X.inputSource}))}function D(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",U);for(let X=0;X<_.length;X++){let ot=v[X];ot!==null&&(v[X]=null,_[X].disconnect(ot))}P=null,H=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",D),s.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Oi(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,wt=null,dt=null;g.depth&&(dt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?Do:Ro,wt=g.stencil?zo:Os);let kt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Oi(d.textureWidth,d.textureHeight,{format:Qn,type:Ui,depthTexture:new Nc(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function U(X){for(let ot=0;ot<X.removed.length;ot++){let wt=X.removed[ot],dt=v.indexOf(wt);dt>=0&&(v[dt]=null,_[dt].disconnect(wt))}for(let ot=0;ot<X.added.length;ot++){let wt=X.added[ot],dt=v.indexOf(wt);if(dt===-1){for(let Xt=0;Xt<_.length;Xt++)if(Xt>=v.length){v.push(wt),dt=Xt;break}else if(v[Xt]===null){v[Xt]=wt,dt=Xt;break}if(dt===-1)break}let kt=_[dt];kt&&kt.connect(wt)}}let z=new N,tt=new N;function V(X,ot,wt){z.setFromMatrixPosition(ot.matrixWorld),tt.setFromMatrixPosition(wt.matrixWorld);let dt=z.distanceTo(tt),kt=ot.projectionMatrix.elements,Xt=wt.projectionMatrix.elements,ne=kt[14]/(kt[10]-1),Pe=kt[14]/(kt[10]+1),ae=(kt[9]+1)/kt[5],Fe=(kt[9]-1)/kt[5],k=(kt[8]-1)/kt[0],Bn=(Xt[8]+1)/Xt[0],ie=ne*k,se=ne*Bn,Ft=dt/(-k+Bn),Ee=Ft*-k;if(ot.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ee),X.translateZ(Ft),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),kt[10]===-1)X.projectionMatrix.copy(ot.projectionMatrix),X.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let Bt=ne+Ft,I=Pe+Ft,E=ie-Ee,G=se+(dt-Ee),et=ae*Pe/I*Bt,it=Fe*Pe/I*Bt;X.projectionMatrix.makePerspective(E,G,et,it,Bt,I),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Q(X,ot){ot===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ot.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let ot=X.near,wt=X.far;x.texture!==null&&(x.depthNear>0&&(ot=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),w.near=C.near=A.near=ot,w.far=C.far=A.far=wt,(P!==w.near||H!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,H=w.far),A.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,w.layers.mask=A.layers.mask|C.layers.mask;let dt=X.parent,kt=w.cameras;Q(w,dt);for(let Xt=0;Xt<kt.length;Xt++)Q(kt[Xt],dt);kt.length===2?V(w,A,C):w.projectionMatrix.copy(A.projectionMatrix),ut(X,w,dt)};function ut(X,ot,wt){wt===null?X.matrix.copy(ot.matrixWorld):(X.matrix.copy(wt.matrixWorld),X.matrix.invert(),X.matrix.multiply(ot.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ot.projectionMatrix),X.projectionMatrixInverse.copy(ot.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Fo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let pt=null;function at(X,ot){if(h=ot.getViewerPose(l||r),m=ot,h!==null){let wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let dt=!1;wt.length!==w.cameras.length&&(w.cameras.length=0,dt=!0);for(let Xt=0;Xt<wt.length;Xt++){let ne=wt[Xt],Pe=null;if(f!==null)Pe=f.getViewport(ne);else{let Fe=u.getViewSubImage(d,ne);Pe=Fe.viewport,Xt===0&&(t.setRenderTargetTextures(y,Fe.colorTexture,d.ignoreDepthValues?void 0:Fe.depthStencilTexture),t.setRenderTarget(y))}let ae=b[Xt];ae===void 0&&(ae=new Je,ae.layers.enable(Xt),ae.viewport=new _e,b[Xt]=ae),ae.matrix.fromArray(ne.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ne.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Xt===0&&(w.matrix.copy(ae.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),dt===!0&&w.cameras.push(ae)}let kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){let Xt=u.getDepthInformation(wt[0]);Xt&&Xt.isValid&&Xt.texture&&x.init(t,Xt,s.renderState)}}for(let wt=0;wt<_.length;wt++){let dt=v[wt],kt=_[wt];dt!==null&&kt!==void 0&&kt.update(dt,ot,l||r)}pt&&pt(X,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),m=null}let Ht=new S0;Ht.setAnimationLoop(at),this.setAnimationLoop=function(X){pt=X},this.dispose=function(){}}},Ns=new xn,LM=new ue;function zM(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,E0(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),u(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),x(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===_n&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===_n&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),_=y.envMap,v=y.envMapRotation;_&&(g.envMap.value=_,Ns.copy(v),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),g.envMapRotation.value.setFromMatrix4(LM.makeRotationFromEuler(Ns)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function DM(i,t,e,n){let s={},o={},r=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function l(y,_){let v=s[y.id];v===void 0&&(m(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",g));let R=_.program;n.updateUBOMapping(y,R);let S=t.render.frame;o[y.id]!==S&&(d(y),o[y.id]=S)}function h(y){let _=u();y.__bindingPointIndex=_;let v=i.createBuffer(),R=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],v=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,A=v.length;S<A;S++){let C=Array.isArray(v[S])?v[S]:[v[S]];for(let b=0,w=C.length;b<w;b++){let P=C[b];if(f(P,S,b,R)===!0){let H=P.__offset,L=Array.isArray(P.value)?P.value:[P.value],D=0;for(let U=0;U<L.length;U++){let z=L[U],tt=x(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,H+D,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,D),D+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,v,R){let S=y.value,A=_+"_"+v;if(R[A]===void 0)return typeof S=="number"||typeof S=="boolean"?R[A]=S:R[A]=S.clone(),!0;{let C=R[A];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return R[A]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function m(y){let _=y.uniforms,v=0,R=16;for(let A=0,C=_.length;A<C;A++){let b=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,P=b.length;w<P;w++){let H=b[w],L=Array.isArray(H.value)?H.value:[H.value];for(let D=0,U=L.length;D<U;D++){let z=L[D],tt=x(z),V=v%R,Q=V%tt.boundary,ut=V+Q;v+=Q,ut!==0&&R-ut<tt.storage&&(v+=R-ut),H.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=tt.storage}}}let S=v%R;return S>0&&(v+=R-S),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){let _=y.target;_.removeEventListener("dispose",g);let v=r.indexOf(_.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete o[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);r=[],s={},o={}}return{bind:c,update:l,dispose:p}}var Zr=class{constructor(t={}){let{canvas:e=Ox(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,y=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=ls,this.toneMappingExposure=1;let v=this,R=!1,S=0,A=0,C=null,b=-1,w=null,P=new _e,H=new _e,L=null,D=new Kt(0),U=0,z=e.width,tt=e.height,V=1,Q=null,ut=null,pt=new _e(0,0,z,tt),at=new _e(0,0,z,tt),Ht=!1,X=new $r,ot=!1,wt=!1,dt=new ue,kt=new ue,Xt=new N,ne=new _e,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function Fe(){return C===null?V:1}let k=n;function Bn(T,F){return e.getContext(T,F)}try{let T={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cd}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),k===null){let F="webgl2";if(k=Bn(F,T),k===null)throw Bn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ie,se,Ft,Ee,Bt,I,E,G,et,it,K,Pt,gt,Mt,ce,ct,bt,Ut,Gt,Et,oe,Jt,we,B;function mt(){ie=new K_(k),ie.init(),Jt=new CM(k,ie),se=new q_(k,ie,t,Jt),Ft=new TM(k,ie),se.reverseDepthBuffer&&d&&Ft.buffers.depth.setReversed(!0),Ee=new t1(k),Bt=new fM,I=new RM(k,ie,Ft,Bt,se,Jt,Ee),E=new Y_(v),G=new j_(v),et=new ay(k),we=new G_(k,et),it=new J_(k,et,Ee,we),K=new n1(k,it,et,Ee),Gt=new e1(k,se,I),ct=new X_(Bt),Pt=new dM(v,E,G,ie,se,we,ct),gt=new zM(v,Bt),Mt=new mM,ce=new MM(ie),Ut=new V_(v,E,G,Ft,K,f,c),bt=new EM(v,K,se),B=new DM(k,Ee,se,Ft),Et=new W_(k,ie,Ee),oe=new Q_(k,ie,Ee),Ee.programs=Pt.programs,v.capabilities=se,v.extensions=ie,v.properties=Bt,v.renderLists=Mt,v.shadowMap=bt,v.state=Ft,v.info=Ee}mt();let Y=new Uu(v,k);this.xr=Y,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(z,tt,!1))},this.getSize=function(T){return T.set(z,tt)},this.setSize=function(T,F,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,tt=F,e.width=Math.floor(T*V),e.height=Math.floor(F*V),W===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(z*V,tt*V).floor()},this.setDrawingBufferSize=function(T,F,W){z=T,tt=F,V=W,e.width=Math.floor(T*W),e.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(pt)},this.setViewport=function(T,F,W,q){T.isVector4?pt.set(T.x,T.y,T.z,T.w):pt.set(T,F,W,q),Ft.viewport(P.copy(pt).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(at)},this.setScissor=function(T,F,W,q){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,F,W,q),Ft.scissor(H.copy(at).multiplyScalar(V).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(T){Ft.setScissorTest(Ht=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){ut=T},this.getClearColor=function(T){return T.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(T=!0,F=!0,W=!0){let q=0;if(T){let O=!1;if(C!==null){let lt=C.texture.format;O=lt===gd||lt===md||lt===pd}if(O){let lt=C.texture.type,yt=lt===Ui||lt===Os||lt===qr||lt===zo||lt===ud||lt===dd,Rt=Ut.getClearColor(),Ct=Ut.getClearAlpha(),qt=Rt.r,Zt=Rt.g,It=Rt.b;yt?(m[0]=qt,m[1]=Zt,m[2]=It,m[3]=Ct,k.clearBufferuiv(k.COLOR,0,m)):(x[0]=qt,x[1]=Zt,x[2]=It,x[3]=Ct,k.clearBufferiv(k.COLOR,0,x))}else q|=k.COLOR_BUFFER_BIT}F&&(q|=k.DEPTH_BUFFER_BIT),W&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Mt.dispose(),ce.dispose(),Bt.dispose(),E.dispose(),G.dispose(),K.dispose(),we.dispose(),B.dispose(),Pt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Wf),Y.removeEventListener("sessionend",qf),Ts.stop()};function nt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let T=Ee.autoReset,F=bt.enabled,W=bt.autoUpdate,q=bt.needsUpdate,O=bt.type;mt(),Ee.autoReset=T,bt.enabled=F,bt.autoUpdate=W,bt.needsUpdate=q,bt.type=O}function xt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $t(T){let F=T.target;F.removeEventListener("dispose",$t),Le(F)}function Le(T){an(T),Bt.remove(T)}function an(T){let F=Bt.get(T).programs;F!==void 0&&(F.forEach(function(W){Pt.releaseProgram(W)}),T.isShaderMaterial&&Pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,q,O,lt){F===null&&(F=Pe);let yt=O.isMesh&&O.matrixWorld.determinant()<0,Rt=Dg(T,F,W,q,O);Ft.setMaterial(q,yt);let Ct=W.index,qt=1;if(q.wireframe===!0){if(Ct=it.getWireframeAttribute(W),Ct===void 0)return;qt=2}let Zt=W.drawRange,It=W.attributes.position,he=Zt.start*qt,be=(Zt.start+Zt.count)*qt;lt!==null&&(he=Math.max(he,lt.start*qt),be=Math.min(be,(lt.start+lt.count)*qt)),Ct!==null?(he=Math.max(he,0),be=Math.min(be,Ct.count)):It!=null&&(he=Math.max(he,0),be=Math.min(be,It.count));let Se=be-he;if(Se<0||Se===1/0)return;we.setup(O,q,Rt,W,Ct);let vn,fe=Et;if(Ct!==null&&(vn=et.get(Ct),fe=oe,fe.setIndex(vn)),O.isMesh)q.wireframe===!0?(Ft.setLineWidth(q.wireframeLinewidth*Fe()),fe.setMode(k.LINES)):fe.setMode(k.TRIANGLES);else if(O.isLine){let Nt=q.linewidth;Nt===void 0&&(Nt=1),Ft.setLineWidth(Nt*Fe()),O.isLineSegments?fe.setMode(k.LINES):O.isLineLoop?fe.setMode(k.LINE_LOOP):fe.setMode(k.LINE_STRIP)}else O.isPoints?fe.setMode(k.POINTS):O.isSprite&&fe.setMode(k.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)fe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))fe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Nt=O._multiDrawStarts,Ri=O._multiDrawCounts,pe=O._multiDrawCount,Zn=Ct?et.get(Ct).bytesPerElement:1,co=Bt.get(q).currentProgram.getUniforms();for(let Tn=0;Tn<pe;Tn++)co.setValue(k,"_gl_DrawID",Tn),fe.render(Nt[Tn]/Zn,Ri[Tn])}else if(O.isInstancedMesh)fe.renderInstances(he,Se,O.count);else if(W.isInstancedBufferGeometry){let Nt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ri=Math.min(W.instanceCount,Nt);fe.renderInstances(he,Se,Ri)}else fe.render(he,Se)};function xe(T,F,W){T.transparent===!0&&T.side===Ce&&T.forceSinglePass===!1?(T.side=_n,T.needsUpdate=!0,Va(T,F,W),T.side=hs,T.needsUpdate=!0,Va(T,F,W),T.side=Ce):Va(T,F,W)}this.compile=function(T,F,W=null){W===null&&(W=T),p=ce.get(W),p.init(F),_.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==W&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let q=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let lt=O.material;if(lt)if(Array.isArray(lt))for(let yt=0;yt<lt.length;yt++){let Rt=lt[yt];xe(Rt,W,O),q.add(Rt)}else xe(lt,W,O),q.add(lt)}),_.pop(),p=null,q},this.compileAsync=function(T,F,W=null){let q=this.compile(T,F,W);return new Promise(O=>{function lt(){if(q.forEach(function(yt){Bt.get(yt).currentProgram.isReady()&&q.delete(yt)}),q.size===0){O(T);return}setTimeout(lt,10)}ie.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let $n=null;function Ai(T){$n&&$n(T)}function Wf(){Ts.stop()}function qf(){Ts.start()}let Ts=new S0;Ts.setAnimationLoop(Ai),typeof self<"u"&&Ts.setContext(self),this.setAnimationLoop=function(T){$n=T,Y.setAnimationLoop(T),T===null?Ts.stop():Ts.start()},Y.addEventListener("sessionstart",Wf),Y.addEventListener("sessionend",qf),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,C),p=ce.get(T,_.length),p.init(F),_.push(p),kt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(kt),wt=this.localClippingEnabled,ot=ct.init(this.clippingPlanes,wt),g=Mt.get(T,y.length),g.init(),y.push(g),Y.enabled===!0&&Y.isPresenting===!0){let lt=v.xr.getDepthSensingMesh();lt!==null&&sh(lt,F,-1/0,v.sortObjects)}sh(T,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Q,ut),ae=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ae&&Ut.addToRenderList(g,T),this.info.render.frame++,ot===!0&&ct.beginShadows();let W=p.state.shadowsArray;bt.render(W,T,F),ot===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,O=g.transmissive;if(p.setupLights(),F.isArrayCamera){let lt=F.cameras;if(O.length>0)for(let yt=0,Rt=lt.length;yt<Rt;yt++){let Ct=lt[yt];Yf(q,O,T,Ct)}ae&&Ut.render(T);for(let yt=0,Rt=lt.length;yt<Rt;yt++){let Ct=lt[yt];Xf(g,T,Ct,Ct.viewport)}}else O.length>0&&Yf(q,O,T,F),ae&&Ut.render(T),Xf(g,T,F);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,F),we.resetDefaultState(),b=-1,w=null,_.pop(),_.length>0?(p=_[_.length-1],ot===!0&&ct.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function sh(T,F,W,q){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){q&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(kt);let yt=K.update(T),Rt=T.material;Rt.visible&&g.push(T,yt,Rt,W,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){let yt=K.update(T),Rt=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ne.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),ne.copy(yt.boundingSphere.center)),ne.applyMatrix4(T.matrixWorld).applyMatrix4(kt)),Array.isArray(Rt)){let Ct=yt.groups;for(let qt=0,Zt=Ct.length;qt<Zt;qt++){let It=Ct[qt],he=Rt[It.materialIndex];he&&he.visible&&g.push(T,yt,he,W,ne.z,It)}}else Rt.visible&&g.push(T,yt,Rt,W,ne.z,null)}}let lt=T.children;for(let yt=0,Rt=lt.length;yt<Rt;yt++)sh(lt[yt],F,W,q)}function Xf(T,F,W,q){let O=T.opaque,lt=T.transmissive,yt=T.transparent;p.setupLightsView(W),ot===!0&&ct.setGlobalState(v.clippingPlanes,W),q&&Ft.viewport(P.copy(q)),O.length>0&&ka(O,F,W),lt.length>0&&ka(lt,F,W),yt.length>0&&ka(yt,F,W),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Yf(T,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Oi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?sa:Ui,minFilter:Us,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let lt=p.state.transmissionRenderTarget[q.id],yt=q.viewport||P;lt.setSize(yt.z,yt.w);let Rt=v.getRenderTarget();v.setRenderTarget(lt),v.getClearColor(D),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear(),ae&&Ut.render(W);let Ct=v.toneMapping;v.toneMapping=ls;let qt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ot===!0&&ct.setGlobalState(v.clippingPlanes,q),ka(T,W,q),I.updateMultisampleRenderTarget(lt),I.updateRenderTargetMipmap(lt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let It=0,he=F.length;It<he;It++){let be=F[It],Se=be.object,vn=be.geometry,fe=be.material,Nt=be.group;if(fe.side===Ce&&Se.layers.test(q.layers)){let Ri=fe.side;fe.side=_n,fe.needsUpdate=!0,$f(Se,W,q,vn,fe,Nt),fe.side=Ri,fe.needsUpdate=!0,Zt=!0}}Zt===!0&&(I.updateMultisampleRenderTarget(lt),I.updateRenderTargetMipmap(lt))}v.setRenderTarget(Rt),v.setClearColor(D,U),qt!==void 0&&(q.viewport=qt),v.toneMapping=Ct}function ka(T,F,W){let q=F.isScene===!0?F.overrideMaterial:null;for(let O=0,lt=T.length;O<lt;O++){let yt=T[O],Rt=yt.object,Ct=yt.geometry,qt=q===null?yt.material:q,Zt=yt.group;Rt.layers.test(W.layers)&&$f(Rt,F,W,Ct,qt,Zt)}}function $f(T,F,W,q,O,lt){T.onBeforeRender(v,F,W,q,O,lt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,F,W,q,T,lt),O.transparent===!0&&O.side===Ce&&O.forceSinglePass===!1?(O.side=_n,O.needsUpdate=!0,v.renderBufferDirect(W,F,q,O,T,lt),O.side=hs,O.needsUpdate=!0,v.renderBufferDirect(W,F,q,O,T,lt),O.side=Ce):v.renderBufferDirect(W,F,q,O,T,lt),T.onAfterRender(v,F,W,q,O,lt)}function Va(T,F,W){F.isScene!==!0&&(F=Pe);let q=Bt.get(T),O=p.state.lights,lt=p.state.shadowsArray,yt=O.state.version,Rt=Pt.getParameters(T,O.state,lt,F,W),Ct=Pt.getProgramCacheKey(Rt),qt=q.programs;q.environment=T.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,qt===void 0&&(T.addEventListener("dispose",$t),qt=new Map,q.programs=qt);let Zt=qt.get(Ct);if(Zt!==void 0){if(q.currentProgram===Zt&&q.lightsStateVersion===yt)return jf(T,Rt),Zt}else Rt.uniforms=Pt.getUniforms(T),T.onBeforeCompile(Rt,v),Zt=Pt.acquireProgram(Rt,Ct),qt.set(Ct,Zt),q.uniforms=Rt.uniforms;let It=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=ct.uniform),jf(T,Rt),q.needsLights=Fg(T),q.lightsStateVersion=yt,q.needsLights&&(It.ambientLightColor.value=O.state.ambient,It.lightProbe.value=O.state.probe,It.directionalLights.value=O.state.directional,It.directionalLightShadows.value=O.state.directionalShadow,It.spotLights.value=O.state.spot,It.spotLightShadows.value=O.state.spotShadow,It.rectAreaLights.value=O.state.rectArea,It.ltc_1.value=O.state.rectAreaLTC1,It.ltc_2.value=O.state.rectAreaLTC2,It.pointLights.value=O.state.point,It.pointLightShadows.value=O.state.pointShadow,It.hemisphereLights.value=O.state.hemi,It.directionalShadowMap.value=O.state.directionalShadowMap,It.directionalShadowMatrix.value=O.state.directionalShadowMatrix,It.spotShadowMap.value=O.state.spotShadowMap,It.spotLightMatrix.value=O.state.spotLightMatrix,It.spotLightMap.value=O.state.spotLightMap,It.pointShadowMap.value=O.state.pointShadowMap,It.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Zt,q.uniformsList=null,Zt}function Zf(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=Io.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function jf(T,F){let W=Bt.get(T);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Dg(T,F,W,q,O){F.isScene!==!0&&(F=Pe),I.resetTextureUnits();let lt=F.fog,yt=q.isMeshStandardMaterial?F.environment:null,Rt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Xo,Ct=(q.isMeshStandardMaterial?G:E).get(q.envMap||yt),qt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Zt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),It=!!W.morphAttributes.position,he=!!W.morphAttributes.normal,be=!!W.morphAttributes.color,Se=ls;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Se=v.toneMapping);let vn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fe=vn!==void 0?vn.length:0,Nt=Bt.get(q),Ri=p.state.lights;if(ot===!0&&(wt===!0||T!==w)){let Fn=T===w&&q.id===b;ct.setState(q,T,Fn)}let pe=!1;q.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ri.state.version||Nt.outputColorSpace!==Rt||O.isBatchedMesh&&Nt.batching===!1||!O.isBatchedMesh&&Nt.batching===!0||O.isBatchedMesh&&Nt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Nt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Nt.instancing===!1||!O.isInstancedMesh&&Nt.instancing===!0||O.isSkinnedMesh&&Nt.skinning===!1||!O.isSkinnedMesh&&Nt.skinning===!0||O.isInstancedMesh&&Nt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Nt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Nt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Nt.instancingMorph===!1&&O.morphTexture!==null||Nt.envMap!==Ct||q.fog===!0&&Nt.fog!==lt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ct.numPlanes||Nt.numIntersection!==ct.numIntersection)||Nt.vertexAlphas!==qt||Nt.vertexTangents!==Zt||Nt.morphTargets!==It||Nt.morphNormals!==he||Nt.morphColors!==be||Nt.toneMapping!==Se||Nt.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,Nt.__version=q.version);let Zn=Nt.currentProgram;pe===!0&&(Zn=Va(q,F,O));let co=!1,Tn=!1,Cr=!1,Te=Zn.getUniforms(),li=Nt.uniforms;if(Ft.useProgram(Zn.program)&&(co=!0,Tn=!0,Cr=!0),q.id!==b&&(b=q.id,Tn=!0),co||w!==T){Ft.buffers.depth.getReversed()?(dt.copy(T.projectionMatrix),kx(dt),Vx(dt),Te.setValue(k,"projectionMatrix",dt)):Te.setValue(k,"projectionMatrix",T.projectionMatrix),Te.setValue(k,"viewMatrix",T.matrixWorldInverse);let ts=Te.map.cameraPosition;ts!==void 0&&ts.setValue(k,Xt.setFromMatrixPosition(T.matrixWorld)),se.logarithmicDepthBuffer&&Te.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Te.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,Tn=!0,Cr=!0)}if(O.isSkinnedMesh){Te.setOptional(k,O,"bindMatrix"),Te.setOptional(k,O,"bindMatrixInverse");let Fn=O.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Te.setValue(k,"boneTexture",Fn.boneTexture,I))}O.isBatchedMesh&&(Te.setOptional(k,O,"batchingTexture"),Te.setValue(k,"batchingTexture",O._matricesTexture,I),Te.setOptional(k,O,"batchingIdTexture"),Te.setValue(k,"batchingIdTexture",O._indirectTexture,I),Te.setOptional(k,O,"batchingColorTexture"),O._colorsTexture!==null&&Te.setValue(k,"batchingColorTexture",O._colorsTexture,I));let Ir=W.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0)&&Gt.update(O,W,Zn),(Tn||Nt.receiveShadow!==O.receiveShadow)&&(Nt.receiveShadow=O.receiveShadow,Te.setValue(k,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(li.envMap.value=Ct,li.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(li.envMapIntensity.value=F.environmentIntensity),Tn&&(Te.setValue(k,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&Bg(li,Cr),lt&&q.fog===!0&&gt.refreshFogUniforms(li,lt),gt.refreshMaterialUniforms(li,q,V,tt,p.state.transmissionRenderTarget[T.id]),Io.upload(k,Zf(Nt),li,I)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Io.upload(k,Zf(Nt),li,I),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Te.setValue(k,"center",O.center),Te.setValue(k,"modelViewMatrix",O.modelViewMatrix),Te.setValue(k,"normalMatrix",O.normalMatrix),Te.setValue(k,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Fn=q.uniformsGroups;for(let ts=0,es=Fn.length;ts<es;ts++){let Kf=Fn[ts];B.update(Kf,Zn),B.bind(Kf,Zn)}}return Zn}function Bg(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Fg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,F,W){Bt.get(T.texture).__webglTexture=F,Bt.get(T.depthTexture).__webglTexture=W;let q=Bt.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){let W=Bt.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,W=0){C=T,S=F,A=W;let q=!0,O=null,lt=!1,yt=!1;if(T){let Ct=Bt.get(T);if(Ct.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(Ct.__webglFramebuffer===void 0)I.setupRenderTarget(T);else if(Ct.__hasExternalTextures)I.rebindTextures(T,Bt.get(T.texture).__webglTexture,Bt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let It=T.depthTexture;if(Ct.__boundDepthTexture!==It){if(It!==null&&Bt.has(It)&&(T.width!==It.image.width||T.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(T)}}let qt=T.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(yt=!0);let Zt=Bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[F])?O=Zt[F][W]:O=Zt[F],lt=!0):T.samples>0&&I.useMultisampledRTT(T)===!1?O=Bt.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?O=Zt[W]:O=Zt,P.copy(T.viewport),H.copy(T.scissor),L=T.scissorTest}else P.copy(pt).multiplyScalar(V).floor(),H.copy(at).multiplyScalar(V).floor(),L=Ht;if(Ft.bindFramebuffer(k.FRAMEBUFFER,O)&&q&&Ft.drawBuffers(T,O),Ft.viewport(P),Ft.scissor(H),Ft.setScissorTest(L),lt){let Ct=Bt.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ct.__webglTexture,W)}else if(yt){let Ct=Bt.get(T.texture),qt=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ct.__webglTexture,W||0,qt)}b=-1},this.readRenderTargetPixels=function(T,F,W,q,O,lt,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){Ft.bindFramebuffer(k.FRAMEBUFFER,Rt);try{let Ct=T.texture,qt=Ct.format,Zt=Ct.type;if(!se.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-q&&W>=0&&W<=T.height-O&&k.readPixels(F,W,q,O,Jt.convert(qt),Jt.convert(Zt),lt)}finally{let Ct=C!==null?Bt.get(C).__webglFramebuffer:null;Ft.bindFramebuffer(k.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(T,F,W,q,O,lt,yt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){let Ct=T.texture,qt=Ct.format,Zt=Ct.type;if(!se.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-q&&W>=0&&W<=T.height-O){Ft.bindFramebuffer(k.FRAMEBUFFER,Rt);let It=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,It),k.bufferData(k.PIXEL_PACK_BUFFER,lt.byteLength,k.STREAM_READ),k.readPixels(F,W,q,O,Jt.convert(qt),Jt.convert(Zt),0);let he=C!==null?Bt.get(C).__webglFramebuffer:null;Ft.bindFramebuffer(k.FRAMEBUFFER,he);let be=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Hx(k,be,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,It),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,lt),k.deleteBuffer(It),k.deleteSync(be),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,W=0){T.isTexture!==!0&&(Ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);let q=Math.pow(2,-W),O=Math.floor(T.image.width*q),lt=Math.floor(T.image.height*q),yt=F!==null?F.x:0,Rt=F!==null?F.y:0;I.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,yt,Rt,O,lt),Ft.unbindTexture()},this.copyTextureToTexture=function(T,F,W=null,q=null,O=0){T.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,W=null);let lt,yt,Rt,Ct,qt,Zt,It,he,be,Se=T.isCompressedTexture?T.mipmaps[O]:T.image;W!==null?(lt=W.max.x-W.min.x,yt=W.max.y-W.min.y,Rt=W.isBox3?W.max.z-W.min.z:1,Ct=W.min.x,qt=W.min.y,Zt=W.isBox3?W.min.z:0):(lt=Se.width,yt=Se.height,Rt=Se.depth||1,Ct=0,qt=0,Zt=0),q!==null?(It=q.x,he=q.y,be=q.z):(It=0,he=0,be=0);let vn=Jt.convert(F.format),fe=Jt.convert(F.type),Nt;F.isData3DTexture?(I.setTexture3D(F,0),Nt=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(I.setTexture2DArray(F,0),Nt=k.TEXTURE_2D_ARRAY):(I.setTexture2D(F,0),Nt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);let Ri=k.getParameter(k.UNPACK_ROW_LENGTH),pe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Zn=k.getParameter(k.UNPACK_SKIP_PIXELS),co=k.getParameter(k.UNPACK_SKIP_ROWS),Tn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Se.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Se.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ct),k.pixelStorei(k.UNPACK_SKIP_ROWS,qt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Zt);let Cr=T.isDataArrayTexture||T.isData3DTexture,Te=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let li=Bt.get(T),Ir=Bt.get(F),Fn=Bt.get(li.__renderTarget),ts=Bt.get(Ir.__renderTarget);Ft.bindFramebuffer(k.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Ft.bindFramebuffer(k.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let es=0;es<Rt;es++)Cr&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Bt.get(T).__webglTexture,O,Zt+es),T.isDepthTexture?(Te&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Bt.get(F).__webglTexture,O,be+es),k.blitFramebuffer(Ct,qt,lt,yt,It,he,lt,yt,k.DEPTH_BUFFER_BIT,k.NEAREST)):Te?k.copyTexSubImage3D(Nt,O,It,he,be+es,Ct,qt,lt,yt):k.copyTexSubImage2D(Nt,O,It,he,be+es,Ct,qt,lt,yt);Ft.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Te?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Nt,O,It,he,be,lt,yt,Rt,vn,fe,Se.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(Nt,O,It,he,be,lt,yt,Rt,vn,Se.data):k.texSubImage3D(Nt,O,It,he,be,lt,yt,Rt,vn,fe,Se):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,O,It,he,lt,yt,vn,fe,Se.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,O,It,he,Se.width,Se.height,vn,Se.data):k.texSubImage2D(k.TEXTURE_2D,O,It,he,lt,yt,vn,fe,Se);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ri),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Zn),k.pixelStorei(k.UNPACK_SKIP_ROWS,co),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Tn),O===0&&F.generateMipmaps&&k.generateMipmap(Nt),Ft.unbindTexture()},this.copyTextureToTexture3D=function(T,F,W=null,q=null,O=0){return T.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0),Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,W,q,O)},this.initRenderTarget=function(T){Bt.get(T).__webglFramebuffer===void 0&&I.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?I.setTextureCube(T,0):T.isData3DTexture?I.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?I.setTexture2DArray(T,0):I.setTexture2D(T,0),Ft.unbindTexture()},this.resetState=function(){S=0,A=0,C=null,Ft.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}},Lc=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Kt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var jr=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ou=class extends Mn{constructor(t=null,e=1,n=1,s,o,r,a,c,l=Cn,h=Cn,u,d){super(null,r,a,c,l,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zc=class extends gn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Eo=new ue,Kp=new ue,hc=[],Jp=new Hi,BM=new ue,Dr=new rt,Br=new fs,Oo=class extends rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,BM)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Eo),Jp.copy(t.boundingBox).applyMatrix4(Eo),this.boundingBox.union(Jp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Eo),Br.copy(t.boundingSphere).applyMatrix4(Eo),this.boundingSphere.union(Br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),t.ray.intersectsSphere(Br)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Eo),Kp.multiplyMatrices(n,Eo),Dr.matrixWorld=Kp,Dr.raycast(t,hc);for(let r=0,a=hc.length;r<a;r++){let c=hc[r];c.instanceId=o,c.object=this,e.push(c)}hc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ou(new Float32Array(s*this.count),s,this.count,fd,di));let o=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Kr=class extends ps{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qp=new ue,Hu=new Xr,uc=new fs,dc=new N,Dc=class extends Qe{constructor(t=new Ne,e=new Kr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uc.copy(n.boundingSphere),uc.applyMatrix4(s),uc.radius+=o,t.ray.intersectsSphere(uc)===!1)return;Qp.copy(s).invert(),Hu.copy(t.ray).applyMatrix4(Qp);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let m=d,x=f;m<x;m++){let g=l.getX(m);dc.fromBufferAttribute(u,g),t0(dc,g,c,s,t,e,this)}}else{let d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,x=f;m<x;m++)dc.fromBufferAttribute(u,m),t0(dc,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function t0(i,t,e,n,s,o,r){let a=Hu.distanceSqToPoint(i);if(a<e){let c=new N;Hu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var mi=class extends Mn{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,o=n.length,r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);let h=n[s],d=n[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);let r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new ht:new N);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new N,s=[],o=[],r=[],a=new N,c=new ue;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new N)}o[0]=new N,r[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ke(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,m))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Ke(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let m=1;m<=t;m++)o[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Jr=class extends On{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ht){let n=e,s=Math.PI*2,o=this.aEndAngle-this.aStartAngle,r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);let a=this.aStartAngle+t*o,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ku=class extends Jr{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}};function vd(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){let r=o*o,a=r*o;return i+t*o+e*r+n*a}}}var fc=new N,Lh=new vd,zh=new vd,Dh=new vd,Vu=class extends On{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t,a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(fc.subVectors(s[0],s[1]).add(s[0]),l=fc);let u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(fc.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=fc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Lh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),zh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),Dh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Lh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),zh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Dh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Lh.calc(c),zh.calc(c),Dh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function e0(i,t,e,n,s){let o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function FM(i,t){let e=1-i;return e*e*t}function UM(i,t){return 2*(1-i)*i*t}function OM(i,t){return i*i*t}function Gr(i,t,e,n){return FM(i,t)+UM(i,e)+OM(i,n)}function HM(i,t){let e=1-i;return e*e*e*t}function kM(i,t){let e=1-i;return 3*e*e*i*t}function VM(i,t){return 3*(1-i)*i*i*t}function GM(i,t){return i*i*i*t}function Wr(i,t,e,n,s){return HM(i,t)+kM(i,e)+VM(i,n)+GM(i,s)}var Bc=class extends On{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Wr(t,s.x,o.x,r.x,a.x),Wr(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Gu=class extends On{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Wr(t,s.x,o.x,r.x,a.x),Wr(t,s.y,o.y,r.y,a.y),Wr(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fc=class extends On{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wu=class extends On{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uc=class extends On{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Gr(t,s.x,o.x,r.x),Gr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qu=class extends On{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Gr(t,s.x,o.x,r.x),Gr(t,s.y,o.y,r.y),Gr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oc=class extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(e0(a,c.x,l.x,h.x,u.x),e0(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},n0=Object.freeze({__proto__:null,ArcCurve:ku,CatmullRomCurve3:Vu,CubicBezierCurve:Bc,CubicBezierCurve3:Gu,EllipseCurve:Jr,LineCurve:Fc,LineCurve3:Wu,QuadraticBezierCurve:Uc,QuadraticBezierCurve3:qu,SplineCurve:Oc}),Xu=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new n0[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),o=0;for(;o<s.length;){if(s[o]>=n){let r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,o=this.curves;s<o.length;s++){let r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new n0[s.type]().fromJSON(s))}return this}},Yu=class extends Xu{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fc(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let o=new Uc(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){let a=new Bc(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Oc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){let l=new Jr(t,e,n,s,o,r,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Qr=class i extends Ne{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ke(s,0,Math.PI*2);let o=[],r=[],a=[],c=[],l=[],h=1/e,u=new N,d=new ht,f=new N,m=new N,x=new N,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let y=0;y<=e;y++){let _=n+y*h*s,v=Math.sin(_),R=Math.cos(_);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*v,u.y=t[S].y,u.z=t[S].x*R,r.push(u.x,u.y,u.z),d.x=y/e,d.y=S/(t.length-1),a.push(d.x,d.y);let A=c[3*S+0]*v,C=c[3*S+1],b=c[3*S+0]*R;l.push(A,C,b)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let v=_+y*t.length,R=v,S=v+t.length,A=v+t.length+1,C=v+1;o.push(R,S,C),o.push(A,C,S)}this.setIndex(o),this.setAttribute("position",new te(r,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ta=class i extends Qr{constructor(t=1,e=1,n=4,s=8){let o=new Yu;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},gi=class i extends Ne{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let o=[],r=[],a=[],c=[],l=new N,h=new ht;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},sn=class i extends Ne{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),o=Math.floor(o);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;y(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function y(){let v=new N,R=new N,S=0,A=(e-t)/n;for(let C=0;C<=o;C++){let b=[],w=C/o,P=w*(e-t)+t;for(let H=0;H<=s;H++){let L=H/s,D=L*c+a,U=Math.sin(D),z=Math.cos(D);R.x=P*U,R.y=-w*n+g,R.z=P*z,u.push(R.x,R.y,R.z),v.set(U,A,z).normalize(),d.push(v.x,v.y,v.z),f.push(L,1-w),b.push(m++)}x.push(b)}for(let C=0;C<s;C++)for(let b=0;b<o;b++){let w=x[b][C],P=x[b+1][C],H=x[b+1][C+1],L=x[b][C+1];(t>0||b!==0)&&(h.push(w,P,L),S+=3),(e>0||b!==o-1)&&(h.push(P,H,L),S+=3)}l.addGroup(p,S,0),p+=S}function _(v){let R=m,S=new ht,A=new N,C=0,b=v===!0?t:e,w=v===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;let P=m;for(let H=0;H<=s;H++){let D=H/s*c+a,U=Math.cos(D),z=Math.sin(D);A.x=b*z,A.y=g*w,A.z=b*U,u.push(A.x,A.y,A.z),d.push(0,w,0),S.x=U*.5+.5,S.y=z*.5*w+.5,f.push(S.x,S.y),m++}for(let H=0;H<s;H++){let L=R+H,D=P+H;v===!0?h.push(D,D+1,L):h.push(D+1,D,L),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ho=class i extends sn{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ko=class i extends Ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let o=[],r=[];a(s),l(n),h(),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(o.slice(),3)),this.setAttribute("uv",new te(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new N,v=new N,R=new N;for(let S=0;S<e.length;S+=3)f(e[S+0],_),f(e[S+1],v),f(e[S+2],R),c(_,v,R,y)}function c(y,_,v,R){let S=R+1,A=[];for(let C=0;C<=S;C++){A[C]=[];let b=y.clone().lerp(v,C/S),w=_.clone().lerp(v,C/S),P=S-C;for(let H=0;H<=P;H++)H===0&&C===S?A[C][H]=b:A[C][H]=b.clone().lerp(w,H/P)}for(let C=0;C<S;C++)for(let b=0;b<2*(S-C)-1;b++){let w=Math.floor(b/2);b%2===0?(d(A[C][w+1]),d(A[C+1][w]),d(A[C][w])):(d(A[C][w+1]),d(A[C+1][w+1]),d(A[C+1][w]))}}function l(y){let _=new N;for(let v=0;v<o.length;v+=3)_.x=o[v+0],_.y=o[v+1],_.z=o[v+2],_.normalize().multiplyScalar(y),o[v+0]=_.x,o[v+1]=_.y,o[v+2]=_.z}function h(){let y=new N;for(let _=0;_<o.length;_+=3){y.x=o[_+0],y.y=o[_+1],y.z=o[_+2];let v=g(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;r.push(v,1-R)}m(),u()}function u(){for(let y=0;y<r.length;y+=6){let _=r[y+0],v=r[y+2],R=r[y+4],S=Math.max(_,v,R),A=Math.min(_,v,R);S>.9&&A<.1&&(_<.2&&(r[y+0]+=1),v<.2&&(r[y+2]+=1),R<.2&&(r[y+4]+=1))}}function d(y){o.push(y.x,y.y,y.z)}function f(y,_){let v=y*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function m(){let y=new N,_=new N,v=new N,R=new N,S=new ht,A=new ht,C=new ht;for(let b=0,w=0;b<o.length;b+=9,w+=6){y.set(o[b+0],o[b+1],o[b+2]),_.set(o[b+3],o[b+4],o[b+5]),v.set(o[b+6],o[b+7],o[b+8]),S.set(r[w+0],r[w+1]),A.set(r[w+2],r[w+3]),C.set(r[w+4],r[w+5]),R.copy(y).add(_).add(v).divideScalar(3);let P=g(R);x(S,w+0,y,P),x(A,w+2,_,P),x(C,w+4,v,P)}}function x(y,_,v,R){R<0&&y.x===1&&(r[_]=y.x-1),v.x===0&&v.z===0&&(r[_]=R/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Hc=class i extends ko{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Vo=class i extends ko{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},kc=class i extends ko{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Vc=class i extends Ne{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new N,m=new ht;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=o+g/n*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,_=y,v=y+n+1,R=y+n+2,S=y+1;a.push(_,v,S),a.push(v,R,S)}}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Hn=class i extends Ne{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(r+a,Math.PI),l=0,h=[],u=new N,d=new N,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],_=p/n,v=0;p===0&&r===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let S=R/e;u.x=-t*Math.cos(s+S*o)*Math.sin(r+_*a),u.y=t*Math.cos(r+_*a),u.z=t*Math.sin(s+S*o)*Math.sin(r+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(S+v,1-_),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],v=h[p][y],R=h[p+1][y],S=h[p+1][y+1];(p!==0||r>0)&&f.push(_,v,S),(p!==n-1||c<Math.PI)&&f.push(v,R,S)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Gc=class i extends ko{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ti=class i extends Ne{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);let r=[],a=[],c=[],l=[],h=new N,u=new N,d=new N;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*o,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,y=(s+1)*f+m;r.push(x,g,y),r.push(g,p,y)}this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Z=class extends ps{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_0,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function pc(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function WM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Go=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],o=e[n-1];n:{t:{let r;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=s,s=e[++n],t<s)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let c=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=o,o=e[--n-1],t>=o)break t}r=n,n=0;break e}break n}for(;n<r;){let a=n+r>>>1;t<e[a]?r=a:n=a+1}if(s=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s;for(let r=0;r!==s;++r)e[r]=n[o+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$u=class extends Go{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ep,endingEnd:ep}}intervalChanged_(t,e,n){let s=this.parameterPositions,o=t-2,r=t+1,a=s[o],c=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case np:o=t,a=2*e-n;break;case ip:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case np:r=t,c=2*n-e;break;case ip:r=1,c=n+s[1]-s[0];break;default:r=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let R=0;R!==a;++R)o[R]=p*r[h+R]+y*r[l+R]+_*r[c+R]+v*r[u+R];return o}},Zu=class extends Go{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)o[d]=r[l+d]*u+r[c+d]*h;return o}},ju=class extends Go{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ei=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pc(e,this.TimeBufferType),this.values=pc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:pc(t.times,Array),values:pc(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ju(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $u(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mc:e=this.InterpolantFactoryMethodDiscrete;break;case wu:e=this.InterpolantFactoryMethodLinear;break;case rh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mc;case this.InterpolantFactoryMethodLinear:return wu;case this.InterpolantFactoryMethodSmooth:return rh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,o=0,r=s-1;for(;o!==s&&n[o]<t;)++o;for(;r!==-1&&n[r]>e;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,r),t=!1;break}r=c}if(s!==void 0&&WM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rh,o=t.length-1,r=1;for(let a=1;a<o;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){c=!0;break}}}if(c){if(a!==r){t[r]=t[a];let u=a*n,d=r*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++r}}if(o>0){t[r]=t[o];for(let a=o*n,c=r*n,l=0;l!==n;++l)e[c+l]=e[a+l];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=wu;var Hs=class extends ei{constructor(t,e,n){super(t,e,n)}};Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Mc;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ku=class extends ei{};Ku.prototype.ValueTypeName="color";var Ju=class extends ei{};Ju.prototype.ValueTypeName="number";var Qu=class extends Go{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ge.slerpFlat(o,0,r,l-a,r,l,c);return o}},Wc=class extends ei{InterpolantFactoryMethodLinear(t){return new Qu(this.times,this.values,this.getValueSize(),t)}};Wc.prototype.ValueTypeName="quaternion";Wc.prototype.InterpolantFactoryMethodSmooth=void 0;var ks=class extends ei{constructor(t,e,n){super(t,e,n)}};ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Mc;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var td=class extends ei{};td.prototype.ValueTypeName="vector";var ed=class{constructor(t,e,n){let s=this,o=!1,r=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},qM=new ed,nd=class{constructor(t){this.manager=t!==void 0?t:qM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};nd.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vs=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ea=class extends Vs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Bh=new ue,i0=new N,s0=new N,na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;i0.setFromMatrixPosition(t.matrixWorld),e.position.copy(i0),s0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(s0),e.updateMatrixWorld(),Bh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},id=class extends na{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Fo*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},qc=class extends Vs{constructor(t,e,n=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new id}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},o0=new ue,Fr=new N,Fh=new N,sd=class extends na{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Fr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fr),Fh.copy(n.position),Fh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Fh),n.updateMatrixWorld(),s.makeTranslation(-Fr.x,-Fr.y,-Fr.z),o0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o0)}},Wo=class extends Vs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},od=class extends na{constructor(){super(new Ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ia=class extends Vs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new od}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Xc=class extends Vs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var _d="\\[\\]\\.:\\/",XM=new RegExp("["+_d+"]","g"),Md="[^"+_d+"]",YM="[^"+_d.replace("\\.","")+"]",$M=/((?:WC+[\/:])*)/.source.replace("WC",Md),ZM=/(WCOD+)?/.source.replace("WCOD",YM),jM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Md),KM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Md),JM=new RegExp("^"+$M+ZM+jM+KM+"$"),QM=["material","materials","bones","map"],rd=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(XM,"")}static parseTrackName(t){let e=JM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=n.nodeName.substring(s+1);QM.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[s];if(r===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=rd;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var a2=new Float32Array(1);var r0=new ue,qo=class{constructor(t,e,n=0,s=1/0){this.ray=new Xr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return r0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(r0),this}intersectObject(t,e=!0,n=[]){return ad(t,this,n,e),n.sort(a0),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)ad(t[s],this,n,e);return n.sort(a0),n}};function a0(i,t){return i.distance-t.distance}function ad(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let o=i.children;for(let r=0,a=o.length;r<a;r++)ad(o[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);var gs=class i{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);let n=this.elements,s=t.x,o=t.y,r=t.z;return e.x=n[0]*s+n[1]*o+n[2]*r,e.y=n[3]*s+n[4]*o+n[5]*r,e.z=n[6]*s+n[7]*o+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new i);let n=this.elements,s=t.elements,o=e.elements,r=n[0],a=n[1],c=n[2],l=n[3],h=n[4],u=n[5],d=n[6],f=n[7],m=n[8],x=s[0],g=s[1],p=s[2],y=s[3],_=s[4],v=s[5],R=s[6],S=s[7],A=s[8];return o[0]=r*x+a*y+c*R,o[1]=r*g+a*_+c*S,o[2]=r*p+a*v+c*A,o[3]=l*x+h*y+u*R,o[4]=l*g+h*_+u*S,o[5]=l*p+h*v+u*A,o[6]=d*x+f*y+m*R,o[7]=d*g+f*_+m*S,o[8]=d*p+f*v+m*A,e}scale(t,e){e===void 0&&(e=new i);let n=this.elements,s=e.elements;for(let o=0;o!==3;o++)s[3*o+0]=t.x*n[3*o+0],s[3*o+1]=t.y*n[3*o+1],s[3*o+2]=t.z*n[3*o+2];return e}solve(t,e){e===void 0&&(e=new M);let n=3,s=4,o=[],r,a;for(r=0;r<n*s;r++)o.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)o[r+s*a]=this.elements[r+3*a];o[3+4*0]=t.x,o[3+4*1]=t.y,o[3+4*2]=t.z;let c=3,l=c,h,u=4,d;do{if(r=l-c,o[r+s*r]===0){for(a=r+1;a<l;a++)if(o[r+s*a]!==0){h=u;do d=u-h,o[d+s*r]+=o[d+s*a];while(--h);break}}if(o[r+s*r]!==0)for(a=r+1;a<l;a++){let f=o[r+s*a]/o[r+s*r];h=u;do d=u-h,o[d+s*a]=d<=r?0:o[d+s*a]-o[d+s*r]*f;while(--h)}}while(--c);if(e.z=o[2*s+3]/o[2*s+2],e.y=(o[1*s+3]-o[1*s+2]*e.z)/o[1*s+1],e.x=(o[0*s+3]-o[0*s+2]*e.z-o[0*s+1]*e.y)/o[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="",e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new i);let e=3,n=6,s=ew,o,r;for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+n*r]=this.elements[o+3*r];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3,c=a,l,h=n,u;do{if(o=c-a,s[o+n*o]===0){for(r=o+1;r<c;r++)if(s[o+n*r]!==0){l=h;do u=h-l,s[u+n*o]+=s[u+n*r];while(--l);break}}if(s[o+n*o]!==0)for(r=o+1;r<c;r++){let d=s[o+n*r]/s[o+n*o];l=h;do u=h-l,s[u+n*r]=u<=o?0:s[u+n*r]-s[u+n*o]*d;while(--l)}}while(--a);o=2;do{r=o-1;do{let d=s[o+n*r]/s[o+n*o];l=n;do u=n-l,s[u+n*r]=s[u+n*r]-s[u+n*o]*d;while(--l)}while(r--)}while(--o);o=2;do{let d=1/s[o+n*o];l=n;do u=n-l,s[u+n*o]=s[u+n*o]*d;while(--l)}while(o--);o=2;do{r=2;do{if(u=s[e+r+n*o],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(o,r,u)}while(r--)}while(o--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,s=t.z,o=t.w,r=e+e,a=n+n,c=s+s,l=e*r,h=e*a,u=e*c,d=n*a,f=n*c,m=s*c,x=o*r,g=o*a,p=o*c,y=this.elements;return y[3*0+0]=1-(d+m),y[3*0+1]=h-p,y[3*0+2]=u+g,y[3*1+0]=h+p,y[3*1+1]=1-(l+m),y[3*1+2]=f-x,y[3*2+0]=u-g,y[3*2+1]=f+x,y[3*2+2]=1-(l+d),this}transpose(t){t===void 0&&(t=new i);let e=this.elements,n=t.elements,s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}},ew=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],M=class i{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new i);let n=t.x,s=t.y,o=t.z,r=this.x,a=this.y,c=this.z;return e.x=a*o-c*s,e.y=c*n-r*o,e.z=r*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new i(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new i(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new gs([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){let o=1/s;this.x*=o,this.y*=o,this.z*=o}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,o=Math.sqrt(e*e+n*n+s*s);return o>0?(o=1/o,t.x=e*o,t.y=n*o,t.z=s*o):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z;return Math.sqrt((o-e)*(o-e)+(r-n)*(r-n)+(a-s)*(a-s))}distanceSquared(t){let e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z;return(o-e)*(o-e)+(r-n)*(r-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,o=this.z;return e.x=t*n,e.y=t*s,e.z=t*o,e}vmul(t,e){return e===void 0&&(e=new i),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new i),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let s=nw,o=1/n;s.set(this.x*o,this.y*o,this.z*o);let r=iw;Math.abs(s.x)<.9?(r.set(1,0,0),s.cross(r,t)):(r.set(0,1,0),s.cross(r,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let s=this.x,o=this.y,r=this.z;n.x=s+(t.x-s)*e,n.y=o+(t.y-o)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(I0),I0.almostEquals(t,e)}clone(){return new i(this.x,this.y,this.z)}};M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);var nw=new M,iw=new M,I0=new M,In=class i{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){let o=this.lowerBound,r=this.upperBound,a=n;o.copy(t[0]),a&&a.vmult(o,o),r.copy(o);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,P0),l=P0),l.x>r.x&&(r.x=l.x),l.x<o.x&&(o.x=l.x),l.y>r.y&&(r.y=l.y),l.y<o.y&&(o.y=l.y),l.z>r.z&&(r.z=l.z),l.z<o.z&&(o.z=l.z)}return e&&(e.vadd(o,o),e.vadd(r,r)),s&&(o.x-=s,o.y-=s,o.z-=s,r.x+=s,r.y+=s,r.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new i().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,o=t.upperBound,r=s.x<=n.x&&n.x<=o.x||e.x<=o.x&&o.x<=n.x,a=s.y<=n.y&&n.y<=o.y||e.y<=o.y&&o.y<=n.y,c=s.z<=n.z&&n.z<=o.z||e.z<=o.z&&o.z<=n.z;return r&&a&&c}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,o=t.upperBound;return e.x<=s.x&&n.x>=o.x&&e.y<=s.y&&n.y>=o.y&&e.z<=s.z&&n.z>=o.z}getCorners(t,e,n,s,o,r,a,c){let l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),s.set(l.x,h.y,h.z),o.set(h.x,l.y,h.z),r.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){let n=N0,s=n[0],o=n[1],r=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(s,o,r,a,c,l,h,u);for(let d=0;d!==8;d++){let f=n[d];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=N0,s=n[0],o=n[1],r=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(s,o,r,a,c,l,h,u);for(let d=0;d!==8;d++){let f=n[d];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,s=1/e.x,o=1/e.y,r=1/e.z,a=(this.lowerBound.x-n.x)*s,c=(this.upperBound.x-n.x)*s,l=(this.lowerBound.y-n.y)*o,h=(this.upperBound.y-n.y)*o,u=(this.lowerBound.z-n.z)*r,d=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(u,d)),m=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(u,d));return!(m<0||f>m)}},P0=new M,N0=[new M,new M,new M,new M,new M,new M,new M,new M],nl=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){let o=s;s=n,n=o}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:o}=e;if(o>s){let r=o;o=s,s=r}this.matrix[(s*(s+1)>>1)+o-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},il=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,o=n.length;s<o;s++)n[s].call(this,t)}return this}},De=class i{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=sw,s=ow;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,o=this.z,r=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+r*a+s*l-o*c,e.y=s*h+r*c+o*a-n*l,e.z=o*h+r*l+n*c-s*a,e.w=r*h-n*a-s*c-o*l,e}inverse(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,o=this.w;this.conjugate(t);let r=1/(e*e+n*n+s*s+o*o);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);let n=t.x,s=t.y,o=t.z,r=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*o-c*s,u=l*s+c*n-r*o,d=l*o+r*s-a*n,f=-r*n-a*s-c*o;return e.x=h*l+f*-r+u*-c-d*-a,e.y=u*l+f*-a+d*-r-h*-c,e.z=d*l+f*-c+h*-a-u*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,o,r=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":let h=r*a+c*l;if(h>.499&&(n=2*Math.atan2(r,l),s=Math.PI/2,o=0),h<-.499&&(n=-2*Math.atan2(r,l),s=-Math.PI/2,o=0),n===void 0){let u=r*r,d=a*a,f=c*c;n=Math.atan2(2*a*l-2*r*c,1-2*d-2*f),s=Math.asin(2*h),o=Math.atan2(2*r*l-2*a*c,1-2*u-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=o}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");let o=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=c*r*a+o*l*h,this.y=o*l*a-c*r*h,this.z=o*r*h+c*l*a,this.w=o*r*a-c*l*h):s==="YXZ"?(this.x=c*r*a+o*l*h,this.y=o*l*a-c*r*h,this.z=o*r*h-c*l*a,this.w=o*r*a+c*l*h):s==="ZXY"?(this.x=c*r*a-o*l*h,this.y=o*l*a+c*r*h,this.z=o*r*h+c*l*a,this.w=o*r*a-c*l*h):s==="ZYX"?(this.x=c*r*a-o*l*h,this.y=o*l*a+c*r*h,this.z=o*r*h-c*l*a,this.w=o*r*a+c*l*h):s==="YZX"?(this.x=c*r*a+o*l*h,this.y=o*l*a+c*r*h,this.z=o*r*h-c*l*a,this.w=o*r*a-c*l*h):s==="XZY"&&(this.x=c*r*a-o*l*h,this.y=o*l*a-c*r*h,this.z=o*r*h+c*l*a,this.w=o*r*a+c*l*h),this}clone(){return new i(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new i);let s=this.x,o=this.y,r=this.z,a=this.w,c=t.x,l=t.y,h=t.z,u=t.w,d,f,m,x,g;return f=s*c+o*l+r*h+a*u,f<0&&(f=-f,c=-c,l=-l,h=-h,u=-u),1-f>1e-6?(d=Math.acos(f),m=Math.sin(d),x=Math.sin((1-e)*d)/m,g=Math.sin(e*d)/m):(x=1-e,g=e),n.x=x*s+g*c,n.y=x*o+g*l,n.z=x*r+g*h,n.w=x*a+g*u,n}integrate(t,e,n,s){s===void 0&&(s=new i);let o=t.x*n.x,r=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,u=this.w,d=e*.5;return s.x+=d*(o*u+r*h-a*l),s.y+=d*(r*u+a*c-o*h),s.z+=d*(a*u+o*l-r*c),s.w+=d*(-o*c-r*l-a*h),s}},sw=new M,ow=new M,rw={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},_t=class i{constructor(t){t===void 0&&(t={}),this.id=i.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};_t.idCounter=0;_t.types=rw;var me=class i{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new De,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return i.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return i.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new M),n.vsub(t,s),e.conjugate(L0),L0.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new M),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new M),e.w*=-1,e.vmult(n,s),e.w*=-1,s}},L0=new De,sl=class i extends _t{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:s=[],axes:o,boundingSphereRadius:r}=t;super({type:_t.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let s=new M;for(let o=0;o!==t.length;o++){let r=t[o],a=r.length;for(let c=0;c!==a;c++){let l=(c+1)%a;e[r[c]].vsub(e[r[l]],s),s.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(s)||n[u].almostEquals(s)){h=!0;break}h||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);let e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],s=this.vertices[n[0]],o=this.vertices[n[1]],r=this.vertices[n[2]];i.computeNormal(s,o,r,e)}static computeNormal(t,e,n,s){let o=new M,r=new M;e.vsub(t,r),n.vsub(e,o),o.cross(r,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,o,r,a,c,l){let h=new M,u=-1,d=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),o.vmult(h,h);let x=h.dot(r);x>d&&(d=x,u=m)}let f=[];for(let m=0;m<n.faces[u].length;m++){let x=n.vertices[n.faces[u][m]],g=new M;g.copy(x),o.vmult(g,g),s.vadd(g,g),f.push(g)}u>=0&&this.clipFaceAgainstHull(r,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,s,o,r,a,c){let l=new M,h=new M,u=new M,d=new M,f=new M,m=new M,x=Number.MAX_VALUE,g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){n.vmult(g.uniqueAxes[p],l);let y=g.testSepAxis(l,t,e,n,s,o);if(y===!1)return!1;y<x&&(x=y,r.copy(l))}else{let p=a?a.length:g.faces.length;for(let y=0;y<p;y++){let _=a?a[y]:y;l.copy(g.faceNormals[_]),n.vmult(l,l);let v=g.testSepAxis(l,t,e,n,s,o);if(v===!1)return!1;v<x&&(x=v,r.copy(l))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){o.vmult(t.uniqueAxes[p],h);let y=g.testSepAxis(h,t,e,n,s,o);if(y===!1)return!1;y<x&&(x=y,r.copy(h))}else{let p=c?c.length:t.faces.length;for(let y=0;y<p;y++){let _=c?c[y]:y;h.copy(t.faceNormals[_]),o.vmult(h,h);let v=g.testSepAxis(h,t,e,n,s,o);if(v===!1)return!1;v<x&&(x=v,r.copy(h))}}for(let p=0;p!==g.uniqueEdges.length;p++){n.vmult(g.uniqueEdges[p],d);for(let y=0;y!==t.uniqueEdges.length;y++)if(o.vmult(t.uniqueEdges[y],f),d.cross(f,m),!m.almostZero()){m.normalize();let _=g.testSepAxis(m,t,e,n,s,o);if(_===!1)return!1;_<x&&(x=_,r.copy(m))}}return s.vsub(e,u),u.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,s,o,r){let a=this;i.project(a,t,n,s,wd),i.project(e,t,o,r,bd);let c=wd[0],l=wd[1],h=bd[0],u=bd[1];if(c<u||h<l)return!1;let d=c-u,f=h-l;return d<f?d:f}calculateLocalInertia(t,e){let n=new M,s=new M;this.computeLocalAABB(s,n);let o=n.x-s.x,r=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*r*2*r+2*a*2*a),e.y=1/12*t*(2*o*2*o+2*a*2*a),e.z=1/12*t*(2*r*2*r+2*o*2*o)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,o,r,a){let c=new M,l=new M,h=new M,u=new M,d=new M,f=new M,m=new M,x=new M,g=this,p=[],y=s,_=p,v=-1,R=Number.MAX_VALUE;for(let w=0;w<g.faces.length;w++){c.copy(g.faceNormals[w]),n.vmult(c,c);let P=c.dot(t);P<R&&(R=P,v=w)}if(v<0)return;let S=g.faces[v];S.connectedFaces=[];for(let w=0;w<g.faces.length;w++)for(let P=0;P<g.faces[w].length;P++)S.indexOf(g.faces[w][P])!==-1&&w!==v&&S.connectedFaces.indexOf(w)===-1&&S.connectedFaces.push(w);let A=S.length;for(let w=0;w<A;w++){let P=g.vertices[S[w]],H=g.vertices[S[(w+1)%A]];P.vsub(H,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),u.copy(this.faceNormals[v]),n.vmult(u,u),e.vadd(u,u),h.cross(u,d),d.negate(d),f.copy(P),n.vmult(f,f),e.vadd(f,f);let L=S.connectedFaces[w];m.copy(this.faceNormals[L]);let D=this.getPlaneConstantOfFace(L);x.copy(m),n.vmult(x,x);let U=D-x.dot(e);for(this.clipFaceAgainstPlane(y,_,x,U);y.length;)y.shift();for(;_.length;)y.push(_.shift())}m.copy(this.faceNormals[v]);let C=this.getPlaneConstantOfFace(v);x.copy(m),n.vmult(x,x);let b=C-x.dot(e);for(let w=0;w<y.length;w++){let P=x.dot(y[w])+b;if(P<=o&&(console.log(`clamped: depth=${P} to minDist=${o}`),P=o),P<=r){let H=y[w];if(P<=1e-6){let L={point:H,normal:x,depth:P};a.push(L)}}}}clipFaceAgainstPlane(t,e,n,s){let o,r,a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];o=n.dot(c)+s;for(let h=0;h<a;h++){if(l=t[h],r=n.dot(l)+s,o<0)if(r<0){let u=new M;u.copy(l),e.push(u)}else{let u=new M;c.lerp(l,o/(o-r),u),e.push(u)}else if(r<0){let u=new M;c.lerp(l,o/(o-r),u),e.push(u),e.push(l)}c=l,o=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);let n=this.vertices,s=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)e.vmult(n[o],s[o]),t.vadd(s[o],s[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){let o=n[s];o.x<t.x?t.x=o.x:o.x>e.x&&(e.x=o.x),o.y<t.y?t.y=o.y:o.y>e.y&&(e.y=o.y),o.z<t.z?t.z=o.z:o.z>e.z&&(e.z=o.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);let n=this.faceNormals,s=this.worldFaceNormals;for(let o=0;o!==e;o++)t.vmult(n[o],s[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){let o=this.vertices,r,a,c,l,h,u,d=new M;for(let f=0;f<o.length;f++){d.copy(o[f]),e.vmult(d,d),t.vadd(d,d);let m=d;(r===void 0||m.x<r)&&(r=m.x),(l===void 0||m.x>l)&&(l=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(c===void 0||m.z<c)&&(c=m.z),(u===void 0||m.z>u)&&(u=m.z)}n.set(r,a,c),s.set(l,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,s=this.vertices;if(e){for(let o=0;o<n;o++){let r=s[o];e.vmult(r,r)}for(let o=0;o<this.faceNormals.length;o++){let r=this.faceNormals[o];e.vmult(r,r)}}if(t)for(let o=0;o<n;o++){let r=s[o];r.vadd(t,r)}}pointIsInside(t){let e=this.vertices,n=this.faces,s=this.faceNormals,o=null,r=new M;this.getAveragePointLocal(r);for(let a=0;a<this.faces.length;a++){let c=s[a],l=e[n[a][0]],h=new M;t.vsub(l,h);let u=c.dot(h),d=new M;r.vsub(l,d);let f=c.dot(d);if(u<0&&f>0||u>0&&f<0)return!1}return o?1:-1}static project(t,e,n,s,o){let r=t.vertices.length,a=cw,c=0,l=0,h=lw,u=t.vertices;h.setZero(),me.vectorToLocalFrame(n,s,e,a),me.pointToLocalFrame(n,s,h,h);let d=h.dot(a);l=c=u[0].dot(a);for(let f=1;f<r;f++){let m=u[f].dot(a);m>c&&(c=m),m<l&&(l=m)}if(l-=d,c-=d,l>c){let f=l;l=c,c=f}o[0]=c,o[1]=l}},wd=[],bd=[],aw=new M,cw=new M,lw=new M,un=class i extends _t{constructor(t){super({type:_t.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=M,o=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],c=new sl({vertices:o,faces:r,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),i.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){let n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let o=0;o!==n.length;o++)e.vmult(n[o],n[o]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let s=this.halfExtents,o=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let r=0;r<o.length;r++)ms.set(o[r][0],o[r][1],o[r][2]),e.vmult(ms,ms),t.vadd(ms,ms),n(ms.x,ms.y,ms.z)}calculateWorldAABB(t,e,n,s){let o=this.halfExtents;xi[0].set(o.x,o.y,o.z),xi[1].set(-o.x,o.y,o.z),xi[2].set(-o.x,-o.y,o.z),xi[3].set(-o.x,-o.y,-o.z),xi[4].set(o.x,-o.y,-o.z),xi[5].set(o.x,o.y,-o.z),xi[6].set(-o.x,o.y,-o.z),xi[7].set(o.x,-o.y,o.z);let r=xi[0];e.vmult(r,r),t.vadd(r,r),s.copy(r),n.copy(r);for(let a=1;a<8;a++){let c=xi[a];e.vmult(c,c),t.vadd(c,c);let l=c.x,h=c.y,u=c.z;l>s.x&&(s.x=l),h>s.y&&(s.y=h),u>s.z&&(s.z=u),l<n.x&&(n.x=l),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}},ms=new M,xi=[new M,new M,new M,new M,new M,new M,new M,new M],Fd={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ud={AWAKE:0,SLEEPY:1,SLEEPING:2},At=class i extends il{constructor(t){t===void 0&&(t={}),super(),this.id=i.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?i.STATIC:i.DYNAMIC,typeof t.type==typeof i.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=i.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new De,this.initQuaternion=new De,this.previousQuaternion=new De,this.interpolatedQuaternion=new De,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new gs,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new gs,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new In,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=i.AWAKE,this.wakeUpAfterNarrowphase=!1,t===i.SLEEPING&&this.dispatchEvent(i.wakeupEvent)}sleep(){this.sleepState=i.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===i.AWAKE&&n<s?(this.sleepState=i.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(i.sleepyEvent)):e===i.SLEEPY&&n>s?this.wakeUp():e===i.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(i.sleepEvent))}}updateSolveMassProperties(){this.sleepState===i.SLEEPING||this.type===i.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){let s=new M,o=new De;return e&&s.copy(e),n&&o.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,s=0;for(let o=0;o!==n;o++){let r=t[o];r.updateBoundingSphereRadius();let a=e[o].length(),c=r.boundingSphereRadius;a+c>s&&(s=a+c)}this.boundingRadius=s}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,o=hw,r=uw,a=this.quaternion,c=this.aabb,l=dw;for(let h=0;h!==s;h++){let u=t[h];a.vmult(e[h],o),o.vadd(this.position,o),a.mult(n[h],r),u.calculateWorldAABB(o,r,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=fw,s=pw;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=gw;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==i.DYNAMIC)return;let n=xw,s=yw;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===i.DYNAMIC&&(this.sleepState===i.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=e,s=vw;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);let o=_w;n.cross(t,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==i.DYNAMIC)return;let n=Mw,s=ww;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){let t=bw;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),un.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===i.DYNAMIC||this.type===i.KINEMATIC)||this.sleepState===i.SLEEPING)return;let s=this.velocity,o=this.angularVelocity,r=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,f=h*t;s.x+=a.x*f*d.x,s.y+=a.y*f*d.y,s.z+=a.z*f*d.z;let m=u.elements,x=this.angularFactor,g=c.x*x.x,p=c.y*x.y,y=c.z*x.z;o.x+=t*(m[0]*g+m[1]*p+m[2]*y),o.y+=t*(m[3]*g+m[4]*p+m[5]*y),o.z+=t*(m[6]*g+m[7]*p+m[8]*y),r.x+=s.x*t,r.y+=s.y*t,r.z+=s.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};At.idCounter=0;At.COLLIDE_EVENT_NAME="collide";At.DYNAMIC=Fd.DYNAMIC;At.STATIC=Fd.STATIC;At.KINEMATIC=Fd.KINEMATIC;At.AWAKE=Ud.AWAKE;At.SLEEPY=Ud.SLEEPY;At.SLEEPING=Ud.SLEEPING;At.wakeupEvent={type:"wakeup"};At.sleepyEvent={type:"sleepy"};At.sleepEvent={type:"sleep"};var hw=new M,uw=new De,dw=new In,fw=new gs,pw=new gs,mw=new gs,gw=new M,xw=new M,yw=new M,vw=new M,_w=new M,Mw=new M,ww=new M,bw=new M,ol=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&At.STATIC||t.sleepState===At.SLEEPING)&&(e.type&At.STATIC||e.sleepState===At.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){let o=Ew;e.position.vsub(t.position,o);let r=(t.boundingRadius+e.boundingRadius)**2;o.lengthSquared()<r&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){let n=Sw,s=Tw,o=Aw,r=t.length;for(let a=0;a!==r;a++)s[a]=t[a],o[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==r;a++){let c=s[a].id,l=o[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];t.push(s[l]),e.push(o[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new M;t.position.vsub(e.position,n);let s=t.shapes[0],o=e.shapes[0];return Math.pow(s.boundingSphereRadius+o.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},Ew=new M;new M;new De;new M;var Sw={keys:[]},Tw=[],Aw=[];new M;var c2=new M;new M;var Rd=class extends ol{constructor(){super()}collisionPairs(t,e,n){let s=t.bodies,o=s.length,r,a;for(let c=0;c!==o;c++)for(let l=0;l!==c;l++)r=s[c],a=s[l],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){let o=t.bodies[s];o.aabbNeedsUpdate&&o.updateAABB(),o.aabb.overlaps(e)&&n.push(o)}return n}},Jo=class{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,o,r,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=o,this.body=r,this.distance=a}},q0,X0,Y0,$0,Z0,j0,K0,Od={CLOSEST:1,ANY:2,ALL:4};q0=_t.types.SPHERE;X0=_t.types.PLANE;Y0=_t.types.BOX;$0=_t.types.CYLINDER;Z0=_t.types.CONVEXPOLYHEDRON;j0=_t.types.HEIGHTFIELD;K0=_t.types.TRIMESH;var kn=class i{get[q0](){return this._intersectSphere}get[X0](){return this._intersectPlane}get[Y0](){return this._intersectBox}get[$0](){return this._intersectConvex}get[Z0](){return this._intersectConvex}get[j0](){return this._intersectHeightfield}get[K0](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=i.ANY,this.result=new Jo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||i.ANY,this.result=e.result||new Jo,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(z0),Ed.length=0,t.broadphase.aabbQuery(t,z0,Ed),this.intersectBodies(Ed),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;let s=Rw,o=Cw;for(let r=0,a=t.shapes.length;r<a;r++){let c=t.shapes[r];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],o),t.quaternion.vmult(t.shapeOffsets[r],s),s.vadd(t.position,s),this.intersectShape(c,o,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){let o=this.from;if(qw(o,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,o){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,o)}_intersectPlane(t,e,n,s,o){let r=this.from,a=this.to,c=this.direction,l=new M(0,0,1);e.vmult(l,l);let h=new M;r.vsub(n,h);let u=h.dot(l);a.vsub(n,h);let d=h.dot(l);if(u*d>0||r.distanceTo(a)<u)return;let f=l.dot(c);if(Math.abs(f)<this.precision)return;let m=new M,x=new M,g=new M;r.vsub(n,m);let p=-l.dot(m)/f;c.scale(p,x),r.vadd(x,g),this.reportIntersection(l,g,o,s,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,s=this.to,o=this.from;e.x=Math.min(s.x,o.x),e.y=Math.min(s.y,o.y),e.z=Math.min(s.z,o.z),n.x=Math.max(s.x,o.x),n.y=Math.max(s.y,o.y),n.z=Math.max(s.z,o.z)}_intersectHeightfield(t,e,n,s,o){t.data,t.elementSize;let r=Iw;r.from.copy(this.from),r.to.copy(this.to),me.pointToLocalFrame(n,e,r.from,r.from),me.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();let a=Pw,c,l,h,u;c=l=0,h=u=t.data.length-1;let d=new In;r.getAABB(d),t.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let f=c;f<h;f++)for(let m=l;m<u;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,d),!!d.overlapsRay(r)){if(t.getConvexTrianglePillar(f,m,!1),me.pointToWorldFrame(n,e,t.pillarOffset,Kc),this._intersectConvex(t.pillarConvex,e,Kc,s,o,D0),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),me.pointToWorldFrame(n,e,t.pillarOffset,Kc),this._intersectConvex(t.pillarConvex,e,Kc,s,o,D0)}}}_intersectSphere(t,e,n,s,o){let r=this.from,a=this.to,c=t.radius,l=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,h=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),u=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-c**2,d=h**2-4*l*u,f=Nw,m=Lw;if(!(d<0))if(d===0)r.lerp(a,d,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,o,s,-1);else{let x=(-h-Math.sqrt(d))/(2*l),g=(-h+Math.sqrt(d))/(2*l);if(x>=0&&x<=1&&(r.lerp(a,x,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,o,s,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(r.lerp(a,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,o,s,-1))}}_intersectConvex(t,e,n,s,o,r){let a=zw,c=B0,l=r&&r.faceList||null,h=t.faces,u=t.vertices,d=t.faceNormals,f=this.direction,m=this.from,x=this.to,g=m.distanceTo(x),p=l?l.length:h.length,y=this.result;for(let _=0;!y.shouldStop&&_<p;_++){let v=l?l[_]:_,R=h[v],S=d[v],A=e,C=n;c.copy(u[R[0]]),A.vmult(c,c),c.vadd(C,c),c.vsub(m,c),A.vmult(S,a);let b=f.dot(a);if(Math.abs(b)<this.precision)continue;let w=a.dot(c)/b;if(!(w<0)){f.scale(w,wn),wn.vadd(m,wn),ni.copy(u[R[0]]),A.vmult(ni,ni),C.vadd(ni,ni);for(let P=1;!y.shouldStop&&P<R.length-1;P++){yi.copy(u[R[P]]),vi.copy(u[R[P+1]]),A.vmult(yi,yi),A.vmult(vi,vi),C.vadd(yi,yi),C.vadd(vi,vi);let H=wn.distanceTo(m);!(i.pointInTriangle(wn,ni,yi,vi)||i.pointInTriangle(wn,yi,ni,vi))||H>g||this.reportIntersection(a,wn,o,s,v)}}}}_intersectTrimesh(t,e,n,s,o,r){let a=Fw,c=Gw,l=Ww,h=B0,u=Uw,d=Ow,f=Hw,m=Vw,x=kw,g=t.indices;t.vertices;let p=this.from,y=this.to,_=this.direction;l.position.copy(n),l.quaternion.copy(e),me.vectorToLocalFrame(n,e,_,u),me.pointToLocalFrame(n,e,p,d),me.pointToLocalFrame(n,e,y,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,f.vsub(d,u),u.normalize();let v=d.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let R=0,S=c.length;!this.result.shouldStop&&R!==S;R++){let A=c[R];t.getNormal(A,a),t.getVertex(g[A*3],ni),ni.vsub(d,h);let C=u.dot(a),b=a.dot(h)/C;if(b<0)continue;u.scale(b,wn),wn.vadd(d,wn),t.getVertex(g[A*3+1],yi),t.getVertex(g[A*3+2],vi);let w=wn.distanceSquared(d);!(i.pointInTriangle(wn,yi,ni,vi)||i.pointInTriangle(wn,ni,yi,vi))||w>v||(me.vectorToWorldFrame(e,a,x),me.pointToWorldFrame(n,e,wn,m),this.reportIntersection(x,m,o,s,A))}c.length=0}reportIntersection(t,e,n,s,o){let r=this.from,a=this.to,c=r.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof o<"u"?o:-1,this.mode){case i.ALL:this.hasHit=!0,l.set(r,a,t,e,n,s,c),l.hasHit=!0,this.callback(l);break;case i.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(r,a,t,e,n,s,c));break;case i.ANY:this.hasHit=!0,l.hasHit=!0,l.set(r,a,t,e,n,s,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,Ws),n.vsub(e,oa),t.vsub(e,Sd);let o=Ws.dot(Ws),r=Ws.dot(oa),a=Ws.dot(Sd),c=oa.dot(oa),l=oa.dot(Sd),h,u;return(h=c*a-r*l)>=0&&(u=o*l-r*a)>=0&&h+u<o*c-r*r}};kn.CLOSEST=Od.CLOSEST;kn.ANY=Od.ANY;kn.ALL=Od.ALL;var z0=new In,Ed=[],oa=new M,Sd=new M,Rw=new M,Cw=new De,wn=new M,ni=new M,yi=new M,vi=new M;new M;new Jo;var D0={faceList:[0]},Kc=new M,Iw=new kn,Pw=[],Nw=new M,Lw=new M,zw=new M,Dw=new M,Bw=new M,B0=new M,Fw=new M,Uw=new M,Ow=new M,Hw=new M,kw=new M,Vw=new M;new In;var Gw=[],Ww=new me,Ws=new M,Jc=new M;function qw(i,t,e){e.vsub(i,Ws);let n=Ws.dot(t);return t.scale(n,Jc),Jc.vadd(i,Jc),e.distanceTo(Jc)}var rl=class i extends ol{static checkBounds(t,e,n){let s,o;n===0?(s=t.position.x,o=e.position.x):n===1?(s=t.position.y,o=e.position.y):n===2&&(s=t.position.z,o=e.position.z);let r=t.boundingRadius,a=e.boundingRadius,c=s+r;return o-a<c}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.x<=s.aabb.lowerBound.x);o--)t[o+1]=t[o];t[o+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.y<=s.aabb.lowerBound.y);o--)t[o+1]=t[o];t[o+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.z<=s.aabb.lowerBound.z);o--)t[o+1]=t[o];t[o+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;let e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{let s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){let s=this.axisList,o=s.length,r=this.axisIndex,a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==o;a++){let l=s[a];for(c=a+1;c<o;c++){let h=s[c];if(this.needBroadphaseCollision(l,h)){if(!i.checkBounds(l,h,r))break;this.intersectionTest(l,h,e,n)}}}}sortList(){let t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){let o=t[s];o.aabbNeedsUpdate&&o.updateAABB()}e===0?i.insertionSortX(t):e===1?i.insertionSortY(t):e===2&&i.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,o=0,r=0,a=this.axisList,c=a.length,l=1/c;for(let f=0;f!==c;f++){let m=a[f],x=m.position.x;t+=x,e+=x*x;let g=m.position.y;n+=g,s+=g*g;let p=m.position.z;o+=p,r+=p*p}let h=e-t*t*l,u=s-n*n*l,d=r-o*o*l;h>u?h>d?this.axisIndex=0:this.axisIndex=2:u>d?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let s=this.axisIndex,o="x";s===1&&(o="y"),s===2&&(o="z");let r=this.axisList;e.lowerBound[o],e.upperBound[o];for(let a=0;a<r.length;a++){let c=r[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(e)&&n.push(c)}return n}},al=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},cl=class i{constructor(t,e,n){n===void 0&&(n={}),n=al.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=i.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};cl.idCounter=0;var ll=class{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},qs=class i{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=i.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new ll,this.jacobianElementB=new ll,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let s=e,o=t,r=n;this.a=4/(r*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(r*r*o*(1+4*s))}computeB(t,e,n){let s=this.computeGW(),o=this.computeGq(),r=this.computeGiMf();return-o*t-s*e-r*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.position,r=s.position;return t.spatial.dot(o)+e.spatial.dot(r)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.velocity,r=s.velocity,a=n.angularVelocity,c=s.angularVelocity;return t.multiplyVectors(o,a)+e.multiplyVectors(r,c)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.vlambda,r=s.vlambda,a=n.wlambda,c=s.wlambda;return t.multiplyVectors(o,a)+e.multiplyVectors(r,c)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.force,r=n.torque,a=s.force,c=s.torque,l=n.invMassSolve,h=s.invMassSolve;return o.scale(l,F0),a.scale(h,U0),n.invInertiaWorldSolve.vmult(r,O0),s.invInertiaWorldSolve.vmult(c,H0),t.multiplyVectors(F0,O0)+e.multiplyVectors(U0,H0)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.invMassSolve,r=s.invMassSolve,a=n.invInertiaWorldSolve,c=s.invInertiaWorldSolve,l=o+r;return a.vmult(t.rotational,Qc),l+=Qc.dot(t.rotational),c.vmult(e.rotational,Qc),l+=Qc.dot(e.rotational),l}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,o=this.bj,r=Xw;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),o.vlambda.addScaledVector(o.invMassSolve*t,n.spatial,o.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda),o.invInertiaWorldSolve.vmult(n.rotational,r),o.wlambda.addScaledVector(t,r,o.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};qs.idCounter=0;var F0=new M,U0=new M,O0=new M,H0=new M,Qc=new M,Xw=new M,Ko=class extends qs{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){let e=this.a,n=this.b,s=this.bi,o=this.bj,r=this.ri,a=this.rj,c=Yw,l=$w,h=s.velocity,u=s.angularVelocity;s.force,s.torque;let d=o.velocity,f=o.angularVelocity;o.force,o.torque;let m=Zw,x=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;r.cross(p,c),a.cross(p,l),p.negate(x.spatial),c.negate(x.rotational),g.spatial.copy(p),g.rotational.copy(l),m.copy(o.position),m.vadd(a,m),m.vsub(s.position,m),m.vsub(r,m);let y=p.dot(m),_=this.restitution+1,v=_*d.dot(p)-_*h.dot(p)+f.dot(l)-u.dot(c),R=this.computeGiMf();return-y*e-v*n-t*R}getImpactVelocityAlongNormal(){let t=jw,e=Kw,n=Jw,s=Qw,o=tb;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,o),this.ni.dot(o)}},Yw=new M,$w=new M,Zw=new M,jw=new M,Kw=new M,Jw=new M,Qw=new M,tb=new M,Cd=class extends cl{constructor(t,e,n,s,o){e===void 0&&(e=new M),s===void 0&&(s=new M),o===void 0&&(o=1e6),super(t,n),this.pivotA=e.clone(),this.pivotB=s.clone();let r=this.equationX=new Ko(t,n),a=this.equationY=new Ko(t,n),c=this.equationZ=new Ko(t,n);this.equations.push(r,a,c),r.minForce=a.minForce=c.minForce=-o,r.maxForce=a.maxForce=c.maxForce=o,r.ni.set(1,0,0),a.ni.set(0,1,0),c.ni.set(0,0,1)}update(){let t=this.bodyA,e=this.bodyB,n=this.equationX,s=this.equationY,o=this.equationZ;t.quaternion.vmult(this.pivotA,n.ri),e.quaternion.vmult(this.pivotB,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),o.ri.copy(n.ri),o.rj.copy(n.rj)}},Id=class extends qs{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-s,s),this.axisA=n.axisA?n.axisA.clone():new M(1,0,0),this.axisB=n.axisB?n.axisB.clone():new M(0,1,0),this.angle=typeof n.angle<"u"?n.angle:0}computeB(t){let e=this.a,n=this.b,s=this.axisA,o=this.axisB,r=eb,a=nb,c=this.jacobianElementA,l=this.jacobianElementB;s.cross(o,r),o.cross(s,a),c.rotational.copy(a),l.rotational.copy(r);let h=Math.cos(this.angle)-s.dot(o),u=this.computeGW(),d=this.computeGiMf();return-h*e-u*n-t*d}},eb=new M,nb=new M,Pd=class extends qs{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-s,s),this.axisA=n.axisA?n.axisA.clone():new M(1,0,0),this.axisB=n.axisB?n.axisB.clone():new M(0,1,0),this.maxAngle=Math.PI/2}computeB(t){let e=this.a,n=this.b,s=this.axisA,o=this.axisB,r=ib,a=sb,c=this.jacobianElementA,l=this.jacobianElementB;s.cross(o,r),o.cross(s,a),c.rotational.copy(a),l.rotational.copy(r);let h=Math.cos(this.maxAngle)-s.dot(o),u=this.computeGW(),d=this.computeGiMf();return-h*e-u*n-t*d}},ib=new M,sb=new M,hl=class extends Cd{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6,o=n.pivotA?n.pivotA.clone():new M,r=n.pivotB?n.pivotB.clone():new M;super(t,o,e,r,s),this.axisA=n.axisA?n.axisA.clone():new M,this.axisB=n.axisB?n.axisB.clone():new M,this.collideConnected=!!n.collideConnected,this.angle=typeof n.angle<"u"?n.angle:0;let a=this.coneEquation=new Id(t,e,n),c=this.twistEquation=new Pd(t,e,n);this.twistAngle=typeof n.twistAngle<"u"?n.twistAngle:0,a.maxForce=0,a.minForce=-s,c.maxForce=0,c.minForce=-s,this.equations.push(a,c)}update(){let t=this.bodyA,e=this.bodyB,n=this.coneEquation,s=this.twistEquation;super.update(),t.vectorToWorldFrame(this.axisA,n.axisA),e.vectorToWorldFrame(this.axisB,n.axisB),this.axisA.tangents(s.axisA,s.axisA),t.vectorToWorldFrame(s.axisA,s.axisA),this.axisB.tangents(s.axisB,s.axisB),e.vectorToWorldFrame(s.axisB,s.axisB),n.angle=this.angle,s.maxAngle=this.twistAngle}};new M;new M;var l2=new M,h2=new M;var u2=new M,d2=new M,ul=class extends qs{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,s=this.rj,o=ob,r=rb,a=this.t;n.cross(a,o),s.cross(a,r);let c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),o.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(r);let h=this.computeGW(),u=this.computeGiMf();return-h*e-t*u}},ob=new M,rb=new M,_i=class i{constructor(t,e,n){n=al.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=i.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};_i.idCounter=0;var qi=class i{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=i.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};qi.idCounter=0;var f2=new M,p2=new M,m2=new M,g2=new M,x2=new M,y2=new M,v2=new M,_2=new M,M2=new M,w2=new M,b2=new M;var E2=new M,S2=new M;new M;new M;new M;var T2=new M,A2=new M,R2=new M;new kn;new M;var C2=new M,I2=new M,P2=[new M(1,0,0),new M(0,1,0),new M(0,0,1)],N2=new M;var L2=new M,z2=new M,D2=new M;var B2=new M,F2=new M,U2=new M,O2=new M;var H2=new M,k2=new M,V2=new M;var Qo=class extends _t{constructor(t){if(super({type:_t.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new M);let n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,s){let o=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){let c=r[a];n[c]=t[c]-o,s[c]=t[c]+o}}};var G2=new M,W2=new M;var q2=new M,X2=new M,Y2=new M,$2=new M,Z2=new M,j2=new M,K2=new M,Xs=class extends sl{constructor(t,e,n,s){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),s===void 0&&(s=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");let o=s,r=[],a=[],c=[],l=[],h=[],u=Math.cos,d=Math.sin;r.push(new M(-e*d(0),-n*.5,e*u(0))),l.push(0),r.push(new M(-t*d(0),n*.5,t*u(0))),h.push(1);for(let m=0;m<o;m++){let x=2*Math.PI/o*(m+1),g=2*Math.PI/o*(m+.5);m<o-1?(r.push(new M(-e*d(x),-n*.5,e*u(x))),l.push(2*m+2),r.push(new M(-t*d(x),n*.5,t*u(x))),h.push(2*m+3),c.push([2*m,2*m+1,2*m+3,2*m+2])):c.push([2*m,2*m+1,1,0]),(o%2===1||m<o/2)&&a.push(new M(-d(g),0,u(g)))}c.push(l),a.push(new M(0,1,0));let f=[];for(let m=0;m<h.length;m++)f.push(h[h.length-m-1]);c.push(f),super({vertices:r,faces:c,axes:a}),this.type=_t.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=s}};var J2=new M;var Q2=new M,tA=new M,eA=new M,nA=new M,iA=new M,sA=new M,oA=new M,rA=new M,aA=new M;var cA=new M,lA=new In;var hA=new M,uA=new In,dA=new M,fA=new M,pA=new M,mA=new M,gA=new M,xA=new M,yA=new M,vA=new In,_A=new M,MA=new me,wA=new In,Nd=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},la=class extends Nd{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,s=this.iterations,o=this.tolerance*this.tolerance,r=this.equations,a=r.length,c=e.bodies,l=c.length,h=t,u,d,f,m,x,g;if(a!==0)for(let v=0;v!==l;v++)c[v].updateSolveMassProperties();let p=cb,y=lb,_=ab;p.length=a,y.length=a,_.length=a;for(let v=0;v!==a;v++){let R=r[v];_[v]=0,y[v]=R.computeB(h),p[v]=1/R.computeC()}if(a!==0){for(let S=0;S!==l;S++){let A=c[S],C=A.vlambda,b=A.wlambda;C.set(0,0,0),b.set(0,0,0)}for(n=0;n!==s;n++){m=0;for(let S=0;S!==a;S++){let A=r[S];u=y[S],d=p[S],g=_[S],x=A.computeGWlambda(),f=d*(u-x-A.eps*g),g+f<A.minForce?f=A.minForce-g:g+f>A.maxForce&&(f=A.maxForce-g),_[S]+=f,m+=f>0?f:-f,A.addToWlambda(f)}if(m*m<o)break}for(let S=0;S!==l;S++){let A=c[S],C=A.velocity,b=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),C.vadd(A.vlambda,C),A.wlambda.vmul(A.angularFactor,A.wlambda),b.vadd(A.wlambda,b)}let v=r.length,R=1/h;for(;v--;)r[v].multiplier=_[v]*R}return n}},ab=[],cb=[],lb=[];var bA=At.STATIC;var Ld=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},zd=class extends Ld{constructor(){super(...arguments),this.type=M}constructObject(){return new M}},Ae={sphereSphere:_t.types.SPHERE,spherePlane:_t.types.SPHERE|_t.types.PLANE,boxBox:_t.types.BOX|_t.types.BOX,sphereBox:_t.types.SPHERE|_t.types.BOX,planeBox:_t.types.PLANE|_t.types.BOX,convexConvex:_t.types.CONVEXPOLYHEDRON,sphereConvex:_t.types.SPHERE|_t.types.CONVEXPOLYHEDRON,planeConvex:_t.types.PLANE|_t.types.CONVEXPOLYHEDRON,boxConvex:_t.types.BOX|_t.types.CONVEXPOLYHEDRON,sphereHeightfield:_t.types.SPHERE|_t.types.HEIGHTFIELD,boxHeightfield:_t.types.BOX|_t.types.HEIGHTFIELD,convexHeightfield:_t.types.CONVEXPOLYHEDRON|_t.types.HEIGHTFIELD,sphereParticle:_t.types.PARTICLE|_t.types.SPHERE,planeParticle:_t.types.PLANE|_t.types.PARTICLE,boxParticle:_t.types.BOX|_t.types.PARTICLE,convexParticle:_t.types.PARTICLE|_t.types.CONVEXPOLYHEDRON,cylinderCylinder:_t.types.CYLINDER,sphereCylinder:_t.types.SPHERE|_t.types.CYLINDER,planeCylinder:_t.types.PLANE|_t.types.CYLINDER,boxCylinder:_t.types.BOX|_t.types.CYLINDER,convexCylinder:_t.types.CONVEXPOLYHEDRON|_t.types.CYLINDER,heightfieldCylinder:_t.types.HEIGHTFIELD|_t.types.CYLINDER,particleCylinder:_t.types.PARTICLE|_t.types.CYLINDER,sphereTrimesh:_t.types.SPHERE|_t.types.TRIMESH,planeTrimesh:_t.types.PLANE|_t.types.TRIMESH},Dd=class{get[Ae.sphereSphere](){return this.sphereSphere}get[Ae.spherePlane](){return this.spherePlane}get[Ae.boxBox](){return this.boxBox}get[Ae.sphereBox](){return this.sphereBox}get[Ae.planeBox](){return this.planeBox}get[Ae.convexConvex](){return this.convexConvex}get[Ae.sphereConvex](){return this.sphereConvex}get[Ae.planeConvex](){return this.planeConvex}get[Ae.boxConvex](){return this.boxConvex}get[Ae.sphereHeightfield](){return this.sphereHeightfield}get[Ae.boxHeightfield](){return this.boxHeightfield}get[Ae.convexHeightfield](){return this.convexHeightfield}get[Ae.sphereParticle](){return this.sphereParticle}get[Ae.planeParticle](){return this.planeParticle}get[Ae.boxParticle](){return this.boxParticle}get[Ae.convexParticle](){return this.convexParticle}get[Ae.cylinderCylinder](){return this.convexConvex}get[Ae.sphereCylinder](){return this.sphereConvex}get[Ae.planeCylinder](){return this.planeConvex}get[Ae.boxCylinder](){return this.boxConvex}get[Ae.convexCylinder](){return this.convexConvex}get[Ae.heightfieldCylinder](){return this.heightfieldCylinder}get[Ae.particleCylinder](){return this.particleCylinder}get[Ae.sphereTrimesh](){return this.sphereTrimesh}get[Ae.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new zd,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,o,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Ko(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||t.material,h=s.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=o||n,a.sj=r||s,a}createFrictionEquationsFromContact(t,e){let n=t.bi,s=t.bj,o=t.si,r=t.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,h=o.material||n.material,u=r.material||s.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(l=h.friction*u.friction),l>0){let d=l*(a.frictionGravity||a.gravity).length(),f=n.invMass+s.invMass;f>0&&(f=1/f);let m=this.frictionEquationPool,x=m.length?m.pop():new ul(n,s,d*f),g=m.length?m.pop():new ul(n,s,d*f);return x.bi=g.bi=n,x.bj=g.bj=s,x.minForce=g.minForce=-d*f,x.maxForce=g.maxForce=d*f,x.ri.copy(t.ri),x.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(x.t,g.t),x.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),g.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),x.enabled=g.enabled=t.enabled,e.push(x,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Gs.setZero(),Zo.setZero(),jo.setZero();let o=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==o?(Gs.vadd(e.ni,Gs),Zo.vadd(e.ri,Zo),jo.vadd(e.rj,jo)):(Gs.vsub(e.ni,Gs),Zo.vadd(e.rj,Zo),jo.vadd(e.ri,jo));let r=1/t;Zo.scale(r,n.ri),jo.scale(r,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Gs.normalize(),Gs.tangents(n.t,s.t)}getContacts(t,e,n,s,o,r,a){this.contactPointPool=o,this.frictionEquationPool=a,this.result=s,this.frictionResult=r;let c=db,l=fb,h=hb,u=ub;for(let d=0,f=t.length;d!==f;d++){let m=t[d],x=e[d],g=null;m.material&&x.material&&(g=n.getContactMaterial(m.material,x.material)||null);let p=m.type&At.KINEMATIC&&x.type&At.STATIC||m.type&At.STATIC&&x.type&At.KINEMATIC||m.type&At.KINEMATIC&&x.type&At.KINEMATIC;for(let y=0;y<m.shapes.length;y++){m.quaternion.mult(m.shapeOrientations[y],c),m.quaternion.vmult(m.shapeOffsets[y],h),h.vadd(m.position,h);let _=m.shapes[y];for(let v=0;v<x.shapes.length;v++){x.quaternion.mult(x.shapeOrientations[v],l),x.quaternion.vmult(x.shapeOffsets[v],u),u.vadd(x.position,u);let R=x.shapes[v];if(!(_.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(u)>_.boundingSphereRadius+R.boundingSphereRadius)continue;let S=null;_.material&&R.material&&(S=n.getContactMaterial(_.material,R.material)||null),this.currentContactMaterial=S||g||n.defaultContactMaterial;let A=_.type|R.type,C=this[A];if(C){let b=!1;_.type<R.type?b=C.call(this,_,R,h,u,c,l,m,x,_,R,p):b=C.call(this,R,_,u,h,l,c,x,m,_,R,p),b&&p&&(n.shapeOverlapKeeper.set(_.id,R.id),n.bodyOverlapKeeper.set(m.id,x.id))}}}}}sphereSphere(t,e,n,s,o,r,a,c,l,h,u){if(u)return n.distanceSquared(s)<(t.radius+e.radius)**2;let d=this.createContactEquation(a,c,t,e,l,h);s.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(t.radius,d.ri),d.rj.scale(-e.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(s,d.rj),d.rj.vsub(c.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(t,e,n,s,o,r,a,c,l,h,u){let d=this.createContactEquation(a,c,t,e,l,h);if(d.ni.set(0,0,1),r.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(t.radius,d.ri),n.vsub(s,tl),d.ni.scale(d.ni.dot(tl),k0),tl.vsub(k0,d.rj),-tl.dot(d.ni)<=t.radius){if(u)return!0;let f=d.ri,m=d.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(s,m),m.vsub(c.position,m),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(t,e,n,s,o,r,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,o,r,a,c,t,e,u)}sphereBox(t,e,n,s,o,r,a,c,l,h,u){let d=this.v3pool,f=Ob;n.vsub(s,el),e.getSideNormals(f,r);let m=t.radius,x=!1,g=kb,p=Vb,y=Gb,_=null,v=0,R=0,S=0,A=null;for(let z=0,tt=f.length;z!==tt&&x===!1;z++){let V=Bb;V.copy(f[z]);let Q=V.length();V.normalize();let ut=el.dot(V);if(ut<Q+m&&ut>0){let pt=Fb,at=Ub;pt.copy(f[(z+1)%3]),at.copy(f[(z+2)%3]);let Ht=pt.length(),X=at.length();pt.normalize(),at.normalize();let ot=el.dot(pt),wt=el.dot(at);if(ot<Ht&&ot>-Ht&&wt<X&&wt>-X){let dt=Math.abs(ut-Q-m);if((A===null||dt<A)&&(A=dt,R=ot,S=wt,_=Q,g.copy(V),p.copy(pt),y.copy(at),v++,u))return!0}}}if(v){x=!0;let z=this.createContactEquation(a,c,t,e,l,h);g.scale(-m,z.ri),z.ni.copy(g),z.ni.negate(z.ni),g.scale(_,g),p.scale(R,p),g.vadd(p,g),y.scale(S,y),g.vadd(y,z.rj),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),z.rj.vadd(s,z.rj),z.rj.vsub(c.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}let C=d.get(),b=Hb;for(let z=0;z!==2&&!x;z++)for(let tt=0;tt!==2&&!x;tt++)for(let V=0;V!==2&&!x;V++)if(C.set(0,0,0),z?C.vadd(f[0],C):C.vsub(f[0],C),tt?C.vadd(f[1],C):C.vsub(f[1],C),V?C.vadd(f[2],C):C.vsub(f[2],C),s.vadd(C,b),b.vsub(n,b),b.lengthSquared()<m*m){if(u)return!0;x=!0;let Q=this.createContactEquation(a,c,t,e,l,h);Q.ri.copy(b),Q.ri.normalize(),Q.ni.copy(Q.ri),Q.ri.scale(m,Q.ri),Q.rj.copy(C),Q.ri.vadd(n,Q.ri),Q.ri.vsub(a.position,Q.ri),Q.rj.vadd(s,Q.rj),Q.rj.vsub(c.position,Q.rj),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}d.release(C),C=null;let w=d.get(),P=d.get(),H=d.get(),L=d.get(),D=d.get(),U=f.length;for(let z=0;z!==U&&!x;z++)for(let tt=0;tt!==U&&!x;tt++)if(z%3!==tt%3){f[tt].cross(f[z],w),w.normalize(),f[z].vadd(f[tt],P),H.copy(n),H.vsub(P,H),H.vsub(s,H);let V=H.dot(w);w.scale(V,L);let Q=0;for(;Q===z%3||Q===tt%3;)Q++;D.copy(n),D.vsub(L,D),D.vsub(P,D),D.vsub(s,D);let ut=Math.abs(V),pt=D.length();if(ut<f[Q].length()&&pt<m){if(u)return!0;x=!0;let at=this.createContactEquation(a,c,t,e,l,h);P.vadd(L,at.rj),at.rj.copy(at.rj),D.negate(at.ni),at.ni.normalize(),at.ri.copy(at.rj),at.ri.vadd(s,at.ri),at.ri.vsub(n,at.ri),at.ri.normalize(),at.ri.scale(m,at.ri),at.ri.vadd(n,at.ri),at.ri.vsub(a.position,at.ri),at.rj.vadd(s,at.rj),at.rj.vsub(c.position,at.rj),this.result.push(at),this.createFrictionEquationsFromContact(at,this.frictionResult)}}d.release(w,P,H,L,D)}planeBox(t,e,n,s,o,r,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,o,r,a,c,t,e,u)}convexConvex(t,e,n,s,o,r,a,c,l,h,u,d,f){let m=sE;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,o,s,r,m,d,f)){let x=[],g=oE;t.clipAgainstHull(n,o,e,s,r,m,-100,100,x);let p=0;for(let y=0;y!==x.length;y++){if(u)return!0;let _=this.createContactEquation(a,c,t,e,l,h),v=_.ri,R=_.rj;m.negate(_.ni),x[y].normal.negate(g),g.scale(x[y].depth,g),x[y].point.vadd(g,v),R.copy(x[y].point),v.vsub(n,v),R.vsub(s,R),v.vadd(n,v),v.vsub(a.position,v),R.vadd(s,R),R.vsub(c.position,R),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,s,o,r,a,c,l,h,u){let d=this.v3pool;n.vsub(s,Wb);let f=e.faceNormals,m=e.faces,x=e.vertices,g=t.radius,p=!1;for(let y=0;y!==x.length;y++){let _=x[y],v=$b;r.vmult(_,v),s.vadd(v,v);let R=Yb;if(v.vsub(n,R),R.lengthSquared()<g*g){if(u)return!0;p=!0;let S=this.createContactEquation(a,c,t,e,l,h);S.ri.copy(R),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(g,S.ri),v.vsub(s,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(s,S.rj),S.rj.vsub(c.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let y=0,_=m.length;y!==_&&p===!1;y++){let v=f[y],R=m[y],S=Zb;r.vmult(v,S);let A=jb;r.vmult(x[R[0]],A),A.vadd(s,A);let C=Kb;S.scale(-g,C),n.vadd(C,C);let b=Jb;C.vsub(A,b);let w=b.dot(S),P=Qb;if(n.vsub(A,P),w<0&&P.dot(S)>0){let H=[];for(let L=0,D=R.length;L!==D;L++){let U=d.get();r.vmult(x[R[L]],U),s.vadd(U,U),H.push(U)}if(Db(H,S,n)){if(u)return!0;p=!0;let L=this.createContactEquation(a,c,t,e,l,h);S.scale(-g,L.ri),S.negate(L.ni);let D=d.get();S.scale(-w,D);let U=d.get();S.scale(-g,U),n.vsub(s,L.rj),L.rj.vadd(U,L.rj),L.rj.vadd(D,L.rj),L.rj.vadd(s,L.rj),L.rj.vsub(c.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),d.release(D),d.release(U),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let z=0,tt=H.length;z!==tt;z++)d.release(H[z]);return}else for(let L=0;L!==R.length;L++){let D=d.get(),U=d.get();r.vmult(x[R[(L+1)%R.length]],D),r.vmult(x[R[(L+2)%R.length]],U),s.vadd(D,D),s.vadd(U,U);let z=qb;U.vsub(D,z);let tt=Xb;z.unit(tt);let V=d.get(),Q=d.get();n.vsub(D,Q);let ut=Q.dot(tt);tt.scale(ut,V),V.vadd(D,V);let pt=d.get();if(V.vsub(n,pt),ut>0&&ut*ut<z.lengthSquared()&&pt.lengthSquared()<g*g){if(u)return!0;let at=this.createContactEquation(a,c,t,e,l,h);V.vsub(s,at.rj),V.vsub(n,at.ni),at.ni.normalize(),at.ni.scale(g,at.ri),at.rj.vadd(s,at.rj),at.rj.vsub(c.position,at.rj),at.ri.vadd(n,at.ri),at.ri.vsub(a.position,at.ri),this.result.push(at),this.createFrictionEquationsFromContact(at,this.frictionResult);for(let Ht=0,X=H.length;Ht!==X;Ht++)d.release(H[Ht]);d.release(D),d.release(U),d.release(V),d.release(pt),d.release(Q);return}d.release(D),d.release(U),d.release(V),d.release(pt),d.release(Q)}for(let L=0,D=H.length;L!==D;L++)d.release(H[L])}}}planeConvex(t,e,n,s,o,r,a,c,l,h,u){let d=tE,f=eE;f.set(0,0,1),o.vmult(f,f);let m=0,x=nE;for(let g=0;g!==e.vertices.length;g++)if(d.copy(e.vertices[g]),r.vmult(d,d),s.vadd(d,d),d.vsub(n,x),f.dot(x)<=0){if(u)return!0;let y=this.createContactEquation(a,c,t,e,l,h),_=iE;f.scale(f.dot(x),_),d.vsub(_,_),_.vsub(n,y.ri),y.ni.copy(f),d.vsub(s,y.rj),y.ri.vadd(n,y.ri),y.ri.vsub(a.position,y.ri),y.rj.vadd(s,y.rj),y.rj.vsub(c.position,y.rj),this.result.push(y),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,s,o,r,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,o,r,a,c,t,e,u)}sphereHeightfield(t,e,n,s,o,r,a,c,l,h,u){let d=e.data,f=t.radius,m=e.elementSize,x=xE,g=gE;me.pointToLocalFrame(s,r,n,g);let p=Math.floor((g.x-f)/m)-1,y=Math.ceil((g.x+f)/m)+1,_=Math.floor((g.y-f)/m)-1,v=Math.ceil((g.y+f)/m)+1;if(y<0||v<0||p>d.length||_>d[0].length)return;p<0&&(p=0),y<0&&(y=0),_<0&&(_=0),v<0&&(v=0),p>=d.length&&(p=d.length-1),y>=d.length&&(y=d.length-1),v>=d[0].length&&(v=d[0].length-1),_>=d[0].length&&(_=d[0].length-1);let R=[];e.getRectMinMax(p,_,y,v,R);let S=R[0],A=R[1];if(g.z-f>A||g.z+f<S)return;let C=this.result;for(let b=p;b<y;b++)for(let w=_;w<v;w++){let P=C.length,H=!1;if(e.getConvexTrianglePillar(b,w,!1),me.pointToWorldFrame(s,r,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,x,o,r,a,c,t,e,u)),u&&H||(e.getConvexTrianglePillar(b,w,!0),me.pointToWorldFrame(s,r,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,x,o,r,a,c,t,e,u)),u&&H))return!0;if(C.length-P>2)return}}boxHeightfield(t,e,n,s,o,r,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,o,r,a,c,t,e,u)}convexHeightfield(t,e,n,s,o,r,a,c,l,h,u){let d=e.data,f=e.elementSize,m=t.boundingSphereRadius,x=pE,g=mE,p=fE;me.pointToLocalFrame(s,r,n,p);let y=Math.floor((p.x-m)/f)-1,_=Math.ceil((p.x+m)/f)+1,v=Math.floor((p.y-m)/f)-1,R=Math.ceil((p.y+m)/f)+1;if(_<0||R<0||y>d.length||v>d[0].length)return;y<0&&(y=0),_<0&&(_=0),v<0&&(v=0),R<0&&(R=0),y>=d.length&&(y=d.length-1),_>=d.length&&(_=d.length-1),R>=d[0].length&&(R=d[0].length-1),v>=d[0].length&&(v=d[0].length-1);let S=[];e.getRectMinMax(y,v,_,R,S);let A=S[0],C=S[1];if(!(p.z-m>C||p.z+m<A))for(let b=y;b<_;b++)for(let w=v;w<R;w++){let P=!1;if(e.getConvexTrianglePillar(b,w,!1),me.pointToWorldFrame(s,r,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,x,o,r,a,c,null,null,u,g,null)),u&&P||(e.getConvexTrianglePillar(b,w,!0),me.pointToWorldFrame(s,r,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,x,o,r,a,c,null,null,u,g,null)),u&&P))return!0}}sphereParticle(t,e,n,s,o,r,a,c,l,h,u){let d=lE;if(d.set(0,0,1),s.vsub(n,d),d.lengthSquared()<=t.radius*t.radius){if(u)return!0;let m=this.createContactEquation(c,a,e,t,l,h);d.normalize(),m.rj.copy(d),m.rj.scale(t.radius,m.rj),m.ni.copy(d),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,s,o,r,a,c,l,h,u){let d=rE;d.set(0,0,1),a.quaternion.vmult(d,d);let f=aE;if(s.vsub(a.position,f),d.dot(f)<=0){if(u)return!0;let x=this.createContactEquation(c,a,e,t,l,h);x.ni.copy(d),x.ni.negate(x.ni),x.ri.set(0,0,0);let g=cE;d.scale(d.dot(s),g),s.vsub(g,g),x.rj.copy(g),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,s,o,r,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,o,r,a,c,t,e,u)}convexParticle(t,e,n,s,o,r,a,c,l,h,u){let d=-1,f=uE,m=dE,x=null,g=hE;if(g.copy(s),g.vsub(n,g),o.conjugate(V0),V0.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,o),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(o);for(let p=0,y=t.faces.length;p!==y;p++){let _=[t.worldVertices[t.faces[p][0]]],v=t.worldFaceNormals[p];s.vsub(_[0],G0);let R=-v.dot(G0);if(x===null||Math.abs(R)<Math.abs(x)){if(u)return!0;x=R,d=p,f.copy(v)}}if(d!==-1){let p=this.createContactEquation(c,a,e,t,l,h);f.scale(x,m),m.vadd(s,m),m.vsub(n,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);let y=p.ri,_=p.rj;y.vadd(s,y),y.vsub(c.position,y),_.vadd(n,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,o,r,a,c,l,h,u){return this.convexHeightfield(e,t,s,n,r,o,c,a,l,h,u)}particleCylinder(t,e,n,s,o,r,a,c,l,h,u){return this.convexParticle(e,t,s,n,r,o,c,a,l,h,u)}sphereTrimesh(t,e,n,s,o,r,a,c,l,h,u){let d=Mb,f=wb,m=bb,x=Eb,g=Sb,p=Tb,y=Ib,_=_b,v=yb,R=Pb;me.pointToLocalFrame(s,r,n,g);let S=t.radius;y.lowerBound.set(g.x-S,g.y-S,g.z-S),y.upperBound.set(g.x+S,g.y+S,g.z+S),e.getTrianglesInAABB(y,R);let A=vb,C=t.radius*t.radius;for(let L=0;L<R.length;L++)for(let D=0;D<3;D++)if(e.getVertex(e.indices[R[L]*3+D],A),A.vsub(g,v),v.lengthSquared()<=C){if(_.copy(A),me.pointToWorldFrame(s,r,_,A),A.vsub(n,v),u)return!0;let U=this.createContactEquation(a,c,t,e,l,h);U.ni.copy(v),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(A),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let L=0;L<R.length;L++)for(let D=0;D<3;D++){e.getVertex(e.indices[R[L]*3+D],d),e.getVertex(e.indices[R[L]*3+(D+1)%3],f),f.vsub(d,m),g.vsub(f,p);let U=p.dot(m);g.vsub(d,p);let z=p.dot(m);if(z>0&&U<0&&(g.vsub(d,p),x.copy(m),x.normalize(),z=p.dot(x),x.scale(z,p),p.vadd(d,p),p.distanceTo(g)<t.radius)){if(u)return!0;let V=this.createContactEquation(a,c,t,e,l,h);p.vsub(g,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),me.pointToWorldFrame(s,r,p,p),p.vsub(c.position,V.rj),me.vectorToWorldFrame(r,V.ni,V.ni),me.vectorToWorldFrame(r,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}let b=Ab,w=Rb,P=Cb,H=xb;for(let L=0,D=R.length;L!==D;L++){e.getTriangleVertices(R[L],b,w,P),e.getNormal(R[L],H),g.vsub(b,p);let U=p.dot(H);if(H.scale(U,p),g.vsub(p,p),U=p.distanceTo(g),kn.pointInTriangle(p,b,w,P)&&U<t.radius){if(u)return!0;let z=this.createContactEquation(a,c,t,e,l,h);p.vsub(g,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),me.pointToWorldFrame(s,r,p,p),p.vsub(c.position,z.rj),me.vectorToWorldFrame(r,z.ni,z.ni),me.vectorToWorldFrame(r,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}R.length=0}planeTrimesh(t,e,n,s,o,r,a,c,l,h,u){let d=new M,f=pb;f.set(0,0,1),o.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,d);let x=new M;x.copy(d),me.pointToWorldFrame(s,r,x,d);let g=mb;if(d.vsub(n,g),f.dot(g)<=0){if(u)return!0;let y=this.createContactEquation(a,c,t,e,l,h);y.ni.copy(f);let _=gb;f.scale(g.dot(f),_),d.vsub(_,_),y.ri.copy(_),y.ri.vsub(a.position,y.ri),y.rj.copy(d),y.rj.vsub(c.position,y.rj),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}}},Gs=new M,Zo=new M,jo=new M,hb=new M,ub=new M,db=new De,fb=new De,pb=new M,mb=new M,gb=new M,xb=new M,yb=new M;new M;var vb=new M,_b=new M,Mb=new M,wb=new M,bb=new M,Eb=new M,Sb=new M,Tb=new M,Ab=new M,Rb=new M,Cb=new M,Ib=new In,Pb=[],tl=new M,k0=new M,Nb=new M,Lb=new M,zb=new M;function Db(i,t,e){let n=null,s=i.length;for(let o=0;o!==s;o++){let r=i[o],a=Nb;i[(o+1)%s].vsub(r,a);let c=Lb;a.cross(t,c);let l=zb;e.vsub(r,l);let h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var el=new M,Bb=new M,Fb=new M,Ub=new M,Ob=[new M,new M,new M,new M,new M,new M],Hb=new M,kb=new M,Vb=new M,Gb=new M,Wb=new M,qb=new M,Xb=new M,Yb=new M,$b=new M,Zb=new M,jb=new M,Kb=new M,Jb=new M,Qb=new M;new M;new M;var tE=new M,eE=new M,nE=new M,iE=new M,sE=new M,oE=new M,rE=new M,aE=new M,cE=new M,lE=new M,V0=new De,hE=new M;new M;var uE=new M,G0=new M,dE=new M,fE=new M,pE=new M,mE=[0],gE=new M,xE=new M,dl=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),s=this.current,o=0;for(;n>s[o];)o++;if(n!==s[o]){for(let r=s.length-1;r>=o;r--)s[r+1]=s[r];s[o]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,s=this.previous,o=n.length,r=s.length,a=0;for(let c=0;c<o;c++){let l=!1,h=n[c];for(;h>s[a];)a++;l=h===s[a],l||W0(t,h)}a=0;for(let c=0;c<r;c++){let l=!1,h=s[c];for(;h>n[a];)a++;l=n[a]===h,l||W0(e,h)}}};function W0(i,t){i.push((t&4294901760)>>16,t&65535)}var Td=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`,Bd=class{constructor(){this.data={keys:[]}}get(t,e){let n=Td(t,e);return this.data[n]}set(t,e,n){let s=Td(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){let n=Td(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},fl=class extends il{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Rd,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new la,this.constraints=[],this.narrowphase=new Dd(this),this.collisionMatrix=new nl,this.collisionMatrixPrevious=new nl,this.bodyOverlapKeeper=new dl,this.shapeOverlapKeeper=new dl,this.contactmaterials=[],this.contactMaterialTable=new Bd,this.defaultMaterial=new qi("default"),this.defaultContactMaterial=new _i(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Jo?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=kn.ALL,n.from=t,n.to=e,n.callback=s,Ad.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=kn.ANY,n.from=t,n.to=e,n.result=s,Ad.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=kn.CLOSEST,n.from=t,n.to=e,n.result=s,Ad.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof At&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let o=0;o!==n.length;o++)n[o].index=o;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let s=e[n].shapes;for(let o=0;o<s.length;o++){let r=s[o];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=Xe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let s=Xe.now(),o=0;for(;this.accumulator>=t&&o<n&&(this.internalStep(t),this.accumulator-=t,o++,!(Xe.now()-s>t*1e3)););this.accumulator=this.accumulator%t;let r=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let c=this.bodies[a];c.previousPosition.lerp(c.position,r,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,r,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=wE,s=bE,o=this.bodies.length,r=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,u=At.DYNAMIC,d=-1/0,f=this.constraints,m=ME;c.length();let x=c.x,g=c.y,p=c.z,y=0;for(l&&(d=Xe.now()),y=0;y!==o;y++){let L=r[y];if(L.type===u){let D=L.force,U=L.mass;D.x+=U*x,D.y+=U*g,D.z+=U*p}}for(let L=0,D=this.subsystems.length;L!==D;L++)this.subsystems[L].update();l&&(d=Xe.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),l&&(h.broadphase=Xe.now()-d);let _=f.length;for(y=0;y!==_;y++){let L=f[y];if(!L.collideConnected)for(let D=n.length-1;D>=0;D-=1)(L.bodyA===n[D]&&L.bodyB===s[D]||L.bodyB===n[D]&&L.bodyA===s[D])&&(n.splice(D,1),s.splice(D,1))}this.collisionMatrixTick(),l&&(d=Xe.now());let v=_E,R=e.length;for(y=0;y!==R;y++)v.push(e[y]);e.length=0;let S=this.frictionEquations.length;for(y=0;y!==S;y++)m.push(this.frictionEquations[y]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,v,this.frictionEquations,m),l&&(h.narrowphase=Xe.now()-d),l&&(d=Xe.now()),y=0;y<this.frictionEquations.length;y++)a.addEquation(this.frictionEquations[y]);let A=e.length;for(let L=0;L!==A;L++){let D=e[L],U=D.bi,z=D.bj,tt=D.si,V=D.sj,Q;if(U.material&&z.material?Q=this.getContactMaterial(U.material,z.material)||this.defaultContactMaterial:Q=this.defaultContactMaterial,Q.friction,U.material&&z.material&&(U.material.friction>=0&&z.material.friction>=0&&U.material.friction*z.material.friction,U.material.restitution>=0&&z.material.restitution>=0&&(D.restitution=U.material.restitution*z.material.restitution)),a.addEquation(D),U.allowSleep&&U.type===At.DYNAMIC&&U.sleepState===At.SLEEPING&&z.sleepState===At.AWAKE&&z.type!==At.STATIC){let ut=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),pt=z.sleepSpeedLimit**2;ut>=pt*2&&(U.wakeUpAfterNarrowphase=!0)}if(z.allowSleep&&z.type===At.DYNAMIC&&z.sleepState===At.SLEEPING&&U.sleepState===At.AWAKE&&U.type!==At.STATIC){let ut=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),pt=U.sleepSpeedLimit**2;ut>=pt*2&&(z.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,z,!0),this.collisionMatrixPrevious.get(U,z)||(ra.body=z,ra.contact=D,U.dispatchEvent(ra),ra.body=U,z.dispatchEvent(ra)),this.bodyOverlapKeeper.set(U.id,z.id),this.shapeOverlapKeeper.set(tt.id,V.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Xe.now()-d,d=Xe.now()),y=0;y!==o;y++){let L=r[y];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(_=f.length,y=0;y!==_;y++){let L=f[y];L.update();for(let D=0,U=L.equations.length;D!==U;D++){let z=L.equations[D];a.addEquation(z)}}a.solve(t,this),l&&(h.solve=Xe.now()-d),a.removeAllEquations();let C=Math.pow;for(y=0;y!==o;y++){let L=r[y];if(L.type&u){let D=C(1-L.linearDamping,t),U=L.velocity;U.scale(D,U);let z=L.angularVelocity;if(z){let tt=C(1-L.angularDamping,t);z.scale(tt,z)}}}this.dispatchEvent(vE),l&&(d=Xe.now());let w=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(y=0;y!==o;y++)r[y].integrate(t,w,P);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Xe.now()-d),this.stepnumber+=1,this.dispatchEvent(yE);let H=!0;if(this.allowSleep)for(H=!1,y=0;y!==o;y++){let L=r[y];L.sleepTick(this.time),L.sleepState!==At.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ki,Vi),t){for(let o=0,r=ki.length;o<r;o+=2)aa.bodyA=this.getBodyById(ki[o]),aa.bodyB=this.getBodyById(ki[o+1]),this.dispatchEvent(aa);aa.bodyA=aa.bodyB=null}if(e){for(let o=0,r=Vi.length;o<r;o+=2)ca.bodyA=this.getBodyById(Vi[o]),ca.bodyB=this.getBodyById(Vi[o+1]),this.dispatchEvent(ca);ca.bodyA=ca.bodyB=null}ki.length=Vi.length=0;let n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(ki,Vi),n){for(let o=0,r=ki.length;o<r;o+=2){let a=this.getShapeById(ki[o]),c=this.getShapeById(ki[o+1]);Gi.shapeA=a,Gi.shapeB=c,a&&(Gi.bodyA=a.body),c&&(Gi.bodyB=c.body),this.dispatchEvent(Gi)}Gi.bodyA=Gi.bodyB=Gi.shapeA=Gi.shapeB=null}if(s){for(let o=0,r=Vi.length;o<r;o+=2){let a=this.getShapeById(Vi[o]),c=this.getShapeById(Vi[o+1]);Wi.shapeA=a,Wi.shapeB=c,a&&(Wi.bodyA=a.body),c&&(Wi.bodyB=c.body),this.dispatchEvent(Wi)}Wi.bodyA=Wi.bodyB=Wi.shapeA=Wi.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}};new In;var Ad=new kn,Xe=globalThis.performance||{};if(!Xe.now){let i=Date.now();Xe.timing&&Xe.timing.navigationStart&&(i=Xe.timing.navigationStart),Xe.now=()=>Date.now()-i}new M;var yE={type:"postStep"},vE={type:"preStep"},ra={type:At.COLLIDE_EVENT_NAME,body:null,contact:null},_E=[],ME=[],wE=[],bE=[],ki=[],Vi=[],aa={type:"beginContact",bodyA:null,bodyB:null},ca={type:"endContact",bodyA:null,bodyB:null},Gi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Wi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var pl=Object.freeze([{id:"cleaver",name:"\u0422\u0435\u0441\u0430\u043A",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"cleaver",damage:42,range:1.75,cooldown:.62,swingDuration:.46,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:1.15,description:"\u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0442\u0435\u0441\u0430\u043A \u0441 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u043C \u0448\u0438\u0440\u043E\u043A\u0438\u043C \u043B\u0435\u0437\u0432\u0438\u0435\u043C. \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0440\u0443\u0431\u044F\u0449\u0438\u0439 \u0437\u0430\u043C\u0430\u0445.",sound:{frequency:350,filter:760,duration:.18,noise:.14,bass:.025,swing:360,impact:115}},{id:"sledgehammer",name:"\u041A\u0443\u0432\u0430\u043B\u0434\u0430",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"sledgehammer",damage:68,range:1.95,cooldown:.9,swingDuration:.72,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:4.6,description:"\u0414\u0432\u0443\u0440\u0443\u0447\u043D\u0430\u044F \u043A\u0443\u0432\u0430\u043B\u0434\u0430: \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0439, \u043D\u043E \u043C\u043E\u0449\u043D\u044B\u0439 \u0443\u0434\u0430\u0440 \u0438 \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u0438\u043C\u043F\u0443\u043B\u044C\u0441 ragdoll.",sound:{frequency:105,filter:390,duration:.28,noise:.24,bass:.11,swing:145,impact:72}},{id:"nail-bat",name:"\u0411\u0438\u0442\u0430 \u0441 \u0433\u0432\u043E\u0437\u0434\u044F\u043C\u0438",category:"\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439",type:"melee",model:"nailBat",damage:50,range:1.9,cooldown:.74,swingDuration:.56,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:2.1,description:"\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u0431\u0438\u0442\u0430 \u0441 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0433\u0432\u043E\u0437\u0434\u044F\u043C\u0438 \u0438 \u0440\u0430\u0437\u043C\u0430\u0448\u0438\u0441\u0442\u043E\u0439 \u0430\u0442\u0430\u043A\u043E\u0439.",sound:{frequency:185,filter:520,duration:.22,noise:.2,bass:.055,swing:205,impact:96}},{id:"pm",name:"\u041F\u041C (\u041C\u0430\u043A\u0430\u0440\u043E\u0432)",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"pm",damage:24,range:38,cooldown:.29,magazineSize:8,reserve:40,reloadDuration:1.1,automatic:!1,weight:.81,description:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:108,filter:1450,duration:.16,noise:.82,bass:.12,waveform:"triangle"}},{id:"tt",name:"\u0422\u0422",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"tt",damage:31,range:48,cooldown:.31,magazineSize:8,reserve:40,reloadDuration:1.25,automatic:!1,weight:.85,description:"\u0422\u0443\u043B\u044C\u0441\u043A\u0438\u0439 \u0422\u043E\u043A\u0430\u0440\u0435\u0432 \u0441 \u0434\u043B\u0438\u043D\u043D\u044B\u043C \u0441\u0442\u0432\u043E\u043B\u043E\u043C. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:142,filter:1840,duration:.2,noise:.91,bass:.16,waveform:"sawtooth"}},{id:"glock-17",name:"Glock 17",category:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",type:"pistol",model:"glock",damage:22,range:42,cooldown:.17,magazineSize:17,reserve:68,reloadDuration:1,automatic:!1,weight:.71,description:"\u041B\u0451\u0433\u043A\u0438\u0439 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043D\u044B\u0439 \u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442. \u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 17 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:122,filter:2200,duration:.135,noise:.74,bass:.09,waveform:"square"}},{id:"ak-47",name:"\u0410\u041A-47",category:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u044B",type:"rifle",model:"ak",damage:34,range:58,cooldown:.105,magazineSize:30,reserve:90,reloadDuration:1.35,automatic:!0,weight:3.8,description:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442 \u0441 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C \u0446\u0435\u0432\u044C\u0451\u043C. \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0433\u043E\u043D\u044C, \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 30 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:86,filter:980,duration:.22,noise:1,bass:.22,waveform:"sawtooth"}},{id:"m4a1",name:"M4A1",category:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u044B",type:"rifle",model:"m4",damage:29,range:62,cooldown:.092,magazineSize:30,reserve:120,reloadDuration:1.25,automatic:!0,weight:3.4,description:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442 \u0441 \u043F\u043B\u0430\u043D\u043A\u0430\u043C\u0438 \u0438 \u0441\u043A\u043B\u0430\u0434\u043D\u044B\u043C \u043F\u0440\u0438\u043A\u043B\u0430\u0434\u043E\u043C. \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 30 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:98,filter:1320,duration:.175,noise:.9,bass:.18,waveform:"triangle"}},{id:"pump-shotgun",name:"\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A (\u043F\u043E\u043C\u043F\u043E\u0432\u044B\u0439)",category:"\u0422\u044F\u0436\u0451\u043B\u043E\u0435",type:"shotgun",model:"shotgun",damage:11,pellets:8,spread:.018,range:34,cooldown:.72,magazineSize:8,reserve:32,reloadDuration:1.65,automatic:!1,weight:3.5,description:"\u041F\u043E\u043C\u043F\u043E\u0432\u044B\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A: 8 \u0434\u0440\u043E\u0431\u0438\u043D \u0437\u0430 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u0442\u0440\u0443\u0431\u0447\u0430\u0442\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 8 \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432.",sound:{frequency:70,filter:720,duration:.31,noise:1.05,bass:.28,waveform:"sawtooth"}},{id:"shovel",name:"\u041B\u043E\u043F\u0430\u0442\u0430",category:"\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",type:"tool",model:"shovel",damage:24,range:1.8,cooldown:.82,swingDuration:.64,magazineSize:null,reserve:0,reloadDuration:0,automatic:!1,weight:3.6,description:"\u0421\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0448\u0442\u044B\u043A\u043E\u0432\u0430\u044F \u043B\u043E\u043F\u0430\u0442\u0430 \u0441 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C \u0447\u0435\u0440\u0435\u043D\u043A\u043E\u043C. \u0415\u044E \u043C\u043E\u0436\u043D\u043E \u0447\u0435\u0440\u043F\u0430\u0442\u044C \u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u044C \u0441\u043D\u0435\u0433.",sound:{frequency:125,filter:620,duration:.24,noise:.23,bass:.065,swing:230,impact:92}}]),Xi=new Map(pl.map(i=>[i.id,i]));function Q0(i){return{magazine:i.magazineSize===null?null:i.magazineSize,reserve:i.magazineSize===null?0:i.reserve}}function tm(i,t){return i.magazineSize===null?!0:!t||t.magazine<=0?!1:(t.magazine--,!0)}function em(i,t){if(i.magazineSize===null||!t||t.reserve<=0||t.magazine>=i.magazineSize)return 0;let e=Math.min(i.magazineSize-t.magazine,t.reserve);return t.magazine+=e,t.reserve-=e,e}function J0(i="torso"){let t=String(i).toLowerCase();return t==="head"||t==="neck"?"head":t==="torso"||t==="pelvis"||t==="chest"?"torso":/arm|hand|leg|thigh|shin|foot/.test(t)?"limb":"torso"}function Hd(i,t,e="torso",n=1){if(!i||!t)return{damage:0,health:i?.health??0,lethal:!1,zone:J0(e)};let s=J0(e),o=s==="head"?4.7:s==="torso"?2.75:.62,r=Math.max(1,Math.round(t.damage*o*n));return i.health=Math.max(0,(Number.isFinite(i.health)?i.health:100)-r),i.health===0&&(i.dead=!0),{damage:r,health:i.health,lethal:i.dead===!0,zone:s}}function nm(i,t){return i.intersectObjects(t,!0)}function im(i,t=0,e=.28){if(t>0)return{ok:!1,reason:"already-carrying",amount:0};if(!i||!Number.isFinite(i.amount)||i.amount<=0)return{ok:!1,reason:"empty",amount:0};let n=Math.min(Math.max(0,e),i.amount);return i.amount=Math.max(0,i.amount-n),{ok:n>0,reason:n>0?null:"empty",amount:n}}function sm(i,t){return!Number.isFinite(i)||i<=0||!t||!Number.isFinite(t.x)||!Number.isFinite(t.z)?{ok:!1,pile:null,remaining:Math.max(0,Number(i)||0)}:{ok:!0,pile:{x:t.x,z:t.z,amount:i},remaining:0}}function om(i,t){return i*(t>0?.72:1)}function rm(i,t,e){let n=e?5.5:-.36;return Math.max(0,Math.min(100,i+Math.max(0,t)*n))}var Lt=Object.freeze({minX:-310,maxX:310,minZ:-450,maxZ:450});function am(i){let t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function Wt(i){return i<=-230?0:i<30?2*am((i+230)/260):i<230?2+2*am((i-30)/200):4}function kd(i){if(i<=-230||i>=230)return 0;if(i<30){let e=(i+230)/260;return 12*e*(1-e)/260}let t=(i-30)/200;return 12*t*(1-t)/200}var SE=10;function cm(i=SE){let t=Math.ceil((Lt.maxX-Lt.minX)/i),e=(Lt.maxX-Lt.minX)/t;return Array.from({length:t},(n,s)=>{let o=Lt.minX+(s+.5)*e;return Object.freeze({centerX:o,width:e,height:Wt(o),slope:kd(o)})})}var ye=Object.freeze({pond:Object.freeze({x:-232,z:-356,radiusX:34,radiusZ:23}),stop:Object.freeze({x:232,z:164}),auntZina:Object.freeze({x:28,z:169.5,yaw:0}),school:Object.freeze({x:-164,z:236,width:32,depth:21}),shop:Object.freeze({x:42,z:178,width:22,depth:14,height:4.2}),garages:Object.freeze([Object.freeze({x:68,z:178,width:10,depth:7,height:3}),Object.freeze({x:80,z:178,width:10,depth:7,height:3}),Object.freeze({x:92,z:178,width:10,depth:7,height:3})]),ruins:Object.freeze([Object.freeze({id:"old-brick-farm",type:"brick-farm",x:-251,z:246,width:26,depth:13,height:3.3,yaw:.08}),Object.freeze({id:"raised-timber-barn",type:"timber-tower",x:-271,z:309,width:13,depth:12,height:4.8,yaw:-.12}),Object.freeze({id:"collapsed-brick-house",type:"brick-shell",x:-232,z:346,width:24,depth:12,height:2.8,yaw:-.04})]),hangars:Object.freeze([Object.freeze({x:145,z:-338,width:72,depth:27,height:7}),Object.freeze({x:150,z:-276,width:28,depth:76,height:6}),Object.freeze({x:207,z:-274,width:30,depth:78,height:6}),Object.freeze({x:268,z:-220,width:32,depth:50,height:5})]),scrapYards:Object.freeze([Object.freeze({x:240,z:-342,width:58,depth:44,gate:"south"}),Object.freeze({x:255,z:-150,width:62,depth:54,gate:"west"}),Object.freeze({x:187,z:-82,width:42,depth:34,gate:"south"})]),roads:Object.freeze([Object.freeze({width:9,points:Object.freeze([[-159,-420],[-151,-320],[-153,-220],[-150,-126],[-155,-16],[-156,92],[-160,176],[-151,286],[-142,414]])}),Object.freeze({width:8,points:Object.freeze([[-91,-143],[-84,-70],[-81,4],[-78,87],[-70,162],[-70,235]])}),Object.freeze({width:9,points:Object.freeze([[-14,106],[-13,188],[-17,276],[-22,383]])}),Object.freeze({width:11,points:Object.freeze([[-214,-108],[-157,-104],[-103,-98],[-42,-94],[27,-86],[99,-63],[166,-33],[220,16]])}),Object.freeze({width:11,points:Object.freeze([[-130,153],[-85,151],[-35,149],[24,151],[91,155],[157,160],[232,164]])}),Object.freeze({width:8,points:Object.freeze([[-156,225],[-117,223],[-75,221],[-35,216],[10,211],[55,208]])}),Object.freeze({width:8,points:Object.freeze([[-81,283],[-42,286],[3,290],[44,294]])}),Object.freeze({width:7,points:Object.freeze([[91,155],[87,128],[121,117],[154,101],[176,66],[183,22],[200,20],[220,16]])}),Object.freeze({width:6,points:Object.freeze([[42,151],[42,158],[42,164],[42,169.2]])}),Object.freeze({width:7,points:Object.freeze([[183,22],[185,-18],[186,-48],[187,-60]])}),Object.freeze({width:7,points:Object.freeze([[187,-60],[208,-60],[218,-72],[218,-112],[218,-148]])}),Object.freeze({width:8,points:Object.freeze([[218,-148],[218,-180],[230,-210],[237,-245],[238,-280],[238,-310]])}),Object.freeze({width:5.2,points:Object.freeze([[-207,-150],[-207,-108],[-207,-66],[-207,-6],[-207,54],[-207,114],[-198,137],[-176,150],[-130,153]])}),Object.freeze({width:4.8,points:Object.freeze([[-14,106],[8,106],[20,96],[20,54],[20,0],[20,-45],[20,-77],[27,-86]])}),Object.freeze({width:4.5,points:Object.freeze([[-44,240],[-44,283],[-44,325],[-44,393],[-44,421]])}),Object.freeze({width:4.5,points:Object.freeze([[5,240],[5,283],[5,325],[5,393],[5,421]])}),Object.freeze({width:4.8,points:Object.freeze([[-22,383],[-12,389],[0,393],[5,393]])}),Object.freeze({width:5.8,points:Object.freeze([[-151,286],[-182,286],[-213,278],[-236,267],[-250,258]])}),Object.freeze({width:5,points:Object.freeze([[-213,278],[-231,290],[-251,302],[-257,309]])}),Object.freeze({width:5,points:Object.freeze([[-231,290],[-237,317],[-237,334]])}),Object.freeze({width:6,points:Object.freeze([[238,-310],[218,-313],[195,-316],[173,-319],[150,-321],[145,-319.5]])})]),lots:Object.freeze([Object.freeze({id:"L-01",x:-226,z:-126,width:36,depth:52,gate:"east",houseWidth:11,houseDepth:8,roof:0}),Object.freeze({id:"L-02",x:-226,z:-66,width:36,depth:52,gate:"east",houseWidth:10,houseDepth:8,roof:1}),Object.freeze({id:"L-03",x:-226,z:-6,width:36,depth:52,gate:"east",houseWidth:12,houseDepth:9,roof:2}),Object.freeze({id:"L-04",x:-226,z:54,width:36,depth:52,gate:"east",houseWidth:10,houseDepth:8,roof:3}),Object.freeze({id:"L-05",x:-226,z:114,width:36,depth:52,gate:"east",houseWidth:12,houseDepth:9,roof:0}),Object.freeze({id:"L-06",x:-124,z:-103,width:38,depth:52,gate:"west",houseWidth:12,houseDepth:9,roof:1}),Object.freeze({id:"L-07",x:-124,z:-43,width:38,depth:52,gate:"west",houseWidth:10,houseDepth:8,roof:2}),Object.freeze({id:"L-08",x:-124,z:17,width:38,depth:52,gate:"west",houseWidth:12,houseDepth:9,roof:3}),Object.freeze({id:"L-09",x:-124,z:77,width:38,depth:52,gate:"west",houseWidth:11,houseDepth:8,roof:0}),Object.freeze({id:"M-01",x:-51,z:-91,width:38,depth:47,gate:"south",houseWidth:11,houseDepth:8,roof:2}),Object.freeze({id:"M-02",x:-4,z:-87,width:38,depth:47,gate:"south",houseWidth:12,houseDepth:9,roof:3}),Object.freeze({id:"M-03",x:-51,z:-34,width:38,depth:47,gate:"south",houseWidth:10,houseDepth:8,roof:0}),Object.freeze({id:"M-04",x:-4,z:-30,width:38,depth:47,gate:"south",houseWidth:11,houseDepth:8,roof:1}),Object.freeze({id:"M-05",x:-51,z:24,width:38,depth:47,gate:"south",houseWidth:12,houseDepth:9,roof:3}),Object.freeze({id:"M-06",x:-4,z:29,width:38,depth:47,gate:"south",houseWidth:10,houseDepth:8,roof:2}),Object.freeze({id:"S-01",x:-73,z:257,width:48,depth:52,gate:"east",houseWidth:13,houseDepth:10,roof:1}),Object.freeze({id:"S-02",x:34,z:257,width:48,depth:52,gate:"west",houseWidth:12,houseDepth:9,roof:2}),Object.freeze({id:"S-03",x:-73,z:325,width:48,depth:52,gate:"east",houseWidth:11,houseDepth:8,roof:3}),Object.freeze({id:"S-04",x:34,z:325,width:48,depth:52,gate:"west",houseWidth:12,houseDepth:9,roof:0}),Object.freeze({id:"S-05",x:-73,z:393,width:48,depth:52,gate:"east",houseWidth:12,houseDepth:9,roof:2}),Object.freeze({id:"S-06",x:34,z:393,width:48,depth:52,gate:"west",houseWidth:13,houseDepth:10,roof:1})]),snowDrifts:Object.freeze([Object.freeze({x:-281,z:-278,amount:1.1}),Object.freeze({x:-196,z:-274,amount:.92}),Object.freeze({x:-270,z:-187,amount:1.18}),Object.freeze({x:-203,z:-151,amount:.88}),Object.freeze({x:-285,z:-69,amount:1.16}),Object.freeze({x:-178,z:-5,amount:1.08}),Object.freeze({x:-281,z:42,amount:1.2}),Object.freeze({x:-184,z:164,amount:.95}),Object.freeze({x:-108,z:-295,amount:1.06}),Object.freeze({x:-106,z:184,amount:.9}),Object.freeze({x:95,z:236,amount:.94}),Object.freeze({x:110,z:315,amount:1.12}),Object.freeze({x:208,z:-22,amount:1.04}),Object.freeze({x:275,z:54,amount:.92})])});function lm(i=ye.stop){let t=Wt(i.x),e=[{kind:"platform",position:[i.x,t+.11,i.z],halfExtents:[3.2,.11,2.1]},{kind:"roof",position:[i.x,t+2.66,i.z],halfExtents:[3.3,.12,2.15]},{kind:"bench-seat",position:[i.x,t+.72,i.z+1.1],halfExtents:[2.25,.06,.27]},{kind:"bench-back",position:[i.x,t+1.12,i.z+1.27],halfExtents:[2.25,.06,.07]}];for(let n of[-2.8,2.8])for(let s of[-1.65,1.65])e.push({kind:"support",position:[i.x+n,t+1.3,i.z+s],halfExtents:[.08,1.3,.08]});return Object.freeze(e.map(n=>Object.freeze({kind:n.kind,position:Object.freeze(n.position),halfExtents:Object.freeze(n.halfExtents)})))}function TE(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],o=n*n+s*s||1,r=Math.max(0,Math.min(1,((i.x-t[0])*n+(i.z-t[1])*s)/o));return{x:t[0]+n*r,z:t[1]+s*r}}function AE(i,t=1.4,e=0){return i.gate==="east"?{x:i.x+i.width/2+t,z:i.z+e}:i.gate==="west"?{x:i.x-i.width/2-t,z:i.z+e}:i.gate==="south"?{x:i.x+e,z:i.z+i.depth/2+t}:{x:i.x+e,z:i.z-i.depth/2-t}}function Vd(i){let t=i.x,e=i.z;return i.gate==="east"?t-=6:i.gate==="west"?t+=6:i.gate==="north"?e+=5:e-=5,{x:t,z:e}}function Gd(i,t=.9){let e=Vd(i);return{x:e.x,z:e.z+(i.houseDepth||8)/2+t}}function RE(i=ye){let t=[];for(let l of i.roads)for(let h=1;h<l.points.length;h++)t.push([l.points[h-1],l.points[h]]);let e=i.lots.map(l=>{let h=Gd(l),u=AE(l),d=null,f=1/0;for(let[m,x]of t){let g=TE(u,m,x),p=Math.hypot(u.x-g.x,u.z-g.z);p<f&&(f=p,d=g)}return Object.freeze({id:`house-walk-${l.id}`,lotId:l.id,width:2.2,points:Object.freeze([[h.x,h.z],[u.x,u.z],[d.x,d.z]].map(m=>Object.freeze(m)))})}),n=i.shop,s=n.z-n.depth/2-1.8,o=n.z-n.depth/2-.72,r=i.hangars[0],a=r.z+r.depth/2+6.2,c=r.z+r.depth/2+5;return Object.freeze([...e,Object.freeze({id:"shop-front-walk",width:4.8,points:Object.freeze([[n.x-n.width/2-2,s],[n.x,s],[n.x+n.width/2+2,s]].map(l=>Object.freeze(l)))}),Object.freeze({id:"shop-entry-walk",width:2.4,points:Object.freeze([[n.x,s],[n.x,o]].map(l=>Object.freeze(l)))}),Object.freeze({id:"mikhtok-front-walk",width:5.2,points:Object.freeze([[r.x-r.width/2-1,a],[r.x,a],[r.x+r.width/2+1,a]].map(l=>Object.freeze(l)))}),Object.freeze({id:"mikhtok-entry-walk",width:3.2,points:Object.freeze([[r.x,c],[r.x,a]].map(l=>Object.freeze(l)))})])}var ha=RE();function hm({layout:i,terrainHeightAt:t,addBuildingPart:e,addStaticCollider:n,materials:s}){function o(l,h,u,d,f,m,x=[0,0,0],g=!0){let p=l.yaw||0,y=Math.cos(p),_=Math.sin(p),v=l.x+h*y+u*_,R=l.z-h*_+u*y,S=t(v),A=[v,S+d+f[1]/2,R],C=[x[0],p+x[1],x[2]];e(f,A,m,!1,C),g&&n(A,f.map(b=>b/2),void 0,C)}function r(l){let h=l.width/2,u=l.depth/2;o(l,0,0,0,[l.width-1,.16,l.depth-1],s.stone),o(l,-8.6,-u+.25,0,[8,3,.5],s.brick),o(l,6.4,-u+.25,0,[11.4,2.55,.5],s.brick),o(l,-11.8,u-.25,0,[2.4,3.1,.5],s.brick),o(l,-7.7,u-.25,0,[1.5,2.6,.5],s.brick),o(l,-4.2,u-.25,0,[1.4,3,.5],s.brick),o(l,.5,u-.25,0,[1.6,2.8,.5],s.brick),o(l,4.3,u-.25,0,[1.5,2.35,.5],s.brick),o(l,9.7,u-.25,0,[4.6,3.05,.5],s.brick),o(l,-5.95,u-.23,2.35,[2.1,.42,.58],s.brick),o(l,2.35,u-.23,2.1,[2.4,.38,.58],s.brick),o(l,h-.25,-3.8,0,[.5,2.7,5],s.brick),o(l,-h+.25,3.5,0,[.5,1.8,5.8],s.brick),o(l,-4.8,-1.2,2.85,[13.5,.16,6.4],s.corrugated,[0,0,.09]),o(l,7.7,2.1,1.95,[6,.18,4.8],s.corrugated,[0,0,-.24]),o(l,-1.5,-2,2.55,[.2,.22,11.8],s.timber,[0,.12,.04]),o(l,6.6,1.3,1.45,[.22,.2,7.4],s.timberLight,[0,-.18,-.22]),o(l,-8.3,u+1.1,.05,[3.8,.28,.5],s.timber,[0,0,.16]),o(l,8,u+1.8,.04,[4.6,.24,.42],s.brick,[0,0,-.1])}function a(l){let h=l.width/2,u=l.depth/2;for(let m of[-h+1.1,h-1.1])for(let x of[-u+1,u-1])o(l,m,x,0,[.42,2.55,.42],s.timber);o(l,0,-u+.9,2.28,[l.width,.28,.4],s.timberLight),o(l,0,u-.9,2.28,[l.width,.28,.4],s.timberLight),o(l,-h+.9,0,2.28,[.4,.28,l.depth],s.timberLight),o(l,h-.9,0,2.28,[.4,.28,l.depth],s.timber),o(l,0,1.8,2.38,[l.width-1,.16,5.2],s.timberLight),o(l,-3.9,-3,.25,[.24,2.85,.24],s.timberLight,[0,.58,.12]),o(l,3.9,3,.12,[.24,2.9,.24],s.timber,[0,-.56,-.08]);let d=2.55,f=2;for(let m=0;m<16;m++){let x=-h+.75+m*.78;if(m===6||m===7||m===11)continue;let g=m%5===0?1.25:f;o(l,x,-u+.35,d,[.68,g,.18],m%3?s.timber:s.timberLight)}for(let m=0;m<15;m++){let x=-h+.7+m*.78;if(m>=6&&m<=9)continue;let g=m%4===0?1.35:1.85;o(l,x,u-.32,d,[.62,g,.16],m%2?s.timberLight:s.timber)}for(let m of[-1,1])for(let x=0;x<10;x++){if(x===4||m>0&&x===7)continue;let g=-u+.55+x*1.05;o(l,m*(h-.3),g,d,[.16,x%3===0?1.35:f,.92],s.timber)}o(l,0,-u+.1,4.48,[l.width+.8,.18,5.6],s.corrugated,[0,0,.07]),o(l,3.5,1.3,4,[5.3,.16,4.8],s.corrugated,[0,0,-.28]),o(l,-4.8,0,4.34,[.2,.2,10],s.timberLight,[0,.16,.03]),o(l,-7.4,u+1.7,.02,[4.8,.22,.4],s.timber,[0,.08,.18]),o(l,6.5,u+2,.03,[5.6,.2,.36],s.timberLight,[0,-.12,-.12])}function c(l){let h=l.width/2,u=l.depth/2;o(l,0,0,0,[l.width-.6,.14,l.depth-.5],s.stone),o(l,-9.4,u-.22,0,[4,2.55,.44],s.brick),o(l,-5.9,u-.22,0,[1,2.8,.44],s.brick),o(l,-3.8,u-.22,0,[1,2.25,.44],s.brick),o(l,0,u-.22,0,[1,2.7,.44],s.brick),o(l,4.3,u-.22,0,[1,2.6,.44],s.brick),o(l,7.1,u-.22,0,[1.5,2.2,.44],s.brick),o(l,10.5,u-.22,0,[2.6,2.95,.44],s.brick),o(l,-4.85,u-.18,2.12,[2.4,.35,.5],s.brick),o(l,2.2,u-.18,2.15,[3.2,.4,.5],s.brick),o(l,-9,-u+.22,0,[6.2,2.8,.44],s.brick),o(l,0,-u+.22,0,[3.4,2.1,.44],s.brick),o(l,8.2,-u+.22,0,[7.8,2.6,.44],s.brick),o(l,-h+.22,-2.4,0,[.44,2.4,6.4],s.brick),o(l,h-.22,1.7,0,[.44,1.75,8.5],s.brick),o(l,4.4,-1.2,2.45,[13.4,.16,5.9],s.corrugated,[0,0,-.18]),o(l,-7.6,2.3,1.95,[4.8,.18,4.1],s.corrugated,[0,0,.22]);for(let d=0;d<10;d++){if(d===2||d===7)continue;let f=-8.4+d*.88,m=d%3===0?1.05:1.5;o(l,f,-u+.38,2.45,[.76,m,.15],d%2?s.timber:s.timberLight)}o(l,-1.5,-.6,2.1,[.2,.22,10.3],s.timber,[0,.22,.05]),o(l,8.2,4.8,.02,[4,.2,.42],s.timber,[0,.16,-.12])}for(let l of i.ruins)l.type==="brick-farm"?r(l):l.type==="timber-tower"?a(l):c(l)}var Wd=200,xl=15,qd=120,Xd=138;function CE(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function IE(i,t){let e=Gd(i);return{x:e.x+(t()-.5)*.65,z:e.z+(t()-.5)*.22}}function PE(i,t,e){let n=s=>(e()-.5)*s;if(i<12){let s=i%4,o=Math.floor(i/4);return{zone:"stop",x:t.stop.x-34+s*7.5+n(1),z:t.stop.z-2+o*1.1+n(.5),targetIndex:1}}if(i<24){let s=i-12,o=s%4,r=Math.floor(s/4),a=t.shop.z-t.shop.depth/2-1.8;return{zone:"shop",x:t.shop.x-8+o*5.3+n(.65),z:a+(r-1)*1.1+n(.25),targetIndex:2}}if(i<36){let s=i-24,o=s%4,r=Math.floor(s/4),a=t.hangars[0],c=a.z+a.depth/2+6.2;return{zone:"mikhtok",x:a.x-25+o*(50/3)+n(1),z:c+(r-1)*1.1+n(.25),targetIndex:0}}if(i<48){let s=i-36,o=s%4,r=Math.floor(s/4),a=t.school;return{zone:"road",x:a.x+a.width/2+9+o*3.2+n(.55),z:224.5+r*.7+n(.3),targetIndex:1}}return null}var Mi=1e-8;function ml(i,t,e,n){return i*n-t*e}function gl(i,t){let e=Math.max(0,Math.min(1,t));i.splits.some(n=>Math.abs(n.t-e)<1e-7)||i.splits.push({t:e,x:i.a.x+(i.b.x-i.a.x)*e,z:i.a.z+(i.b.z-i.a.z)*e})}function NE(i,t){let e=i.b.x-i.a.x,n=i.b.z-i.a.z,s=t.b.x-t.a.x,o=t.b.z-t.a.z,r=t.a.x-i.a.x,a=t.a.z-i.a.z,c=ml(e,n,s,o);if(Math.abs(c)>Mi){let u=ml(r,a,s,o)/c,d=ml(r,a,e,n)/c;u>=-Mi&&u<=1+Mi&&d>=-Mi&&d<=1+Mi&&(gl(i,u),gl(t,d));return}if(Math.abs(ml(r,a,e,n))>Mi)return;let l=e*e+n*n||1,h=s*s+o*o||1;for(let u of[t.a,t.b]){let d=((u.x-i.a.x)*e+(u.z-i.a.z)*n)/l;d>=-Mi&&d<=1+Mi&&gl(i,d)}for(let u of[i.a,i.b]){let d=((u.x-t.a.x)*s+(u.z-t.a.z)*o)/h;d>=-Mi&&d<=1+Mi&&gl(t,d)}}function dm(i=ye,t=ha){let e=[],n=[...i.roads.map(h=>h.points),...t.map(h=>h.points)];for(let h of n)for(let u=1;u<h.length;u++){let d={x:h[u-1][0],z:h[u-1][1]},f={x:h[u][0],z:h[u][1]};Math.hypot(f.x-d.x,f.z-d.z)<.01||e.push({a:d,b:f,splits:[{t:0,...d},{t:1,...f}]})}for(let h=0;h<e.length;h++){let u=e[h],d=Math.min(u.a.x,u.b.x)-.001,f=Math.max(u.a.x,u.b.x)+.001,m=Math.min(u.a.z,u.b.z)-.001,x=Math.max(u.a.z,u.b.z)+.001;for(let g=h+1;g<e.length;g++){let p=e[g];Math.max(p.a.x,p.b.x)<d||Math.min(p.a.x,p.b.x)>f||Math.max(p.a.z,p.b.z)<m||Math.min(p.a.z,p.b.z)>x||NE(u,p)}}let s=[],o=[],r=new Map,a=new Set,c=[],l=h=>{let u=`${Math.round(h.x*1e4)},${Math.round(h.z*1e4)}`;if(r.has(u))return r.get(u);let d=s.length;return s.push({x:h.x,z:h.z}),o.push([]),r.set(u,d),d};for(let h of e){h.splits.sort((d,f)=>d.t-f.t);let u=h.splits.filter((d,f,m)=>f===0||Math.abs(d.t-m[f-1].t)>1e-7);for(let d=1;d<u.length;d++){let f=l(u[d-1]),m=l(u[d]);if(f===m)continue;let x=f<m?`${f}:${m}`:`${m}:${f}`;if(a.has(x))continue;a.add(x);let g=Math.hypot(s[f].x-s[m].x,s[f].z-s[m].z);c.push({a:f,b:m,length:g}),o[f].push({to:m,length:g}),o[m].push({to:f,length:g})}}return{nodes:s,adjacency:o,edges:c}}function um(i,t){let e=null,n=1/0;for(let s=0;s<t.edges.length;s++){let o=t.edges[s],r=t.nodes[o.a],a=t.nodes[o.b],c=a.x-r.x,l=a.z-r.z,h=c*c+l*l||1,u=Math.max(0,Math.min(1,((i.x-r.x)*c+(i.z-r.z)*l)/h)),d=r.x+c*u,f=r.z+l*u,m=(i.x-d)**2+(i.z-f)**2;m<n&&(n=m,e={edgeIndex:s,edge:o,t:u,x:d,z:f,distance:Math.sqrt(m)})}return e}function Yd(i,t,e,n=7.5){if(!t||!e||!Number.isFinite(t.x)||!Number.isFinite(t.z)||!Number.isFinite(e.x)||!Number.isFinite(e.z)||i.edges.length===0)return[t];let s=um(t,i),o=um(e,i);if(!s||!o||s.distance>n||o.distance>n)return[t];let r=i.nodes.length,a=r+1,c=[...i.adjacency.map(g=>g.slice()),[],[]],l=(g,p,y)=>{c[g].push({to:p,length:y}),c[p].push({to:g,length:y})};l(r,s.edge.a,s.t*s.edge.length),l(r,s.edge.b,(1-s.t)*s.edge.length),l(a,o.edge.a,o.t*o.edge.length),l(a,o.edge.b,(1-o.t)*o.edge.length),s.edgeIndex===o.edgeIndex&&l(r,a,Math.abs(s.t-o.t)*s.edge.length);let h=new Array(c.length).fill(1/0),u=new Array(c.length).fill(-1),d=new Uint8Array(c.length);h[r]=0;for(let g=0;g<c.length;g++){let p=-1,y=1/0;for(let _=0;_<c.length;_++)!d[_]&&h[_]<y&&(p=_,y=h[_]);if(p<0||p===a)break;d[p]=1;for(let _ of c[p]){let v=y+_.length;v<h[_.to]&&(h[_.to]=v,u[_.to]=p)}}if(!Number.isFinite(h[a]))return[t];let f=[];for(let g=a;g>=0&&(f.push(g),g!==r);g=u[g]);if(f.at(-1)!==r)return[t];f.reverse();let m=[],x=g=>{let p=m.at(-1);(!p||Math.hypot(p.x-g.x,p.z-g.z)>.025)&&m.push({x:g.x,z:g.z})};x(t),x(s);for(let g of f)g<i.nodes.length&&x(i.nodes[g]);return x(o),x(e),m}function fm(i=ye,t=Wd,e=1347374169){let n=CE(e),s=i.lots,o=[];for(let r=0;r<t;r++){let a=s[r%s.length],c=IE(a,n),l=PE(r,i,n),h=l?.zone||"home",u=l||{x:c.x+(n()-.5)*1.8,z:c.z+(n()-.5)*1.8,targetIndex:1};o.push({id:`resident-${String(r+1).padStart(3,"0")}`,index:r,home:c,homeLotId:a.id,x:u.x,z:u.z,initialZone:h,currentLocation:h==="home"?0:h==="shop"?1:h==="mikhtok"?2:-1,targetIndex:u.targetIndex,moveSpeed:1.05+n()*.55,walkPhase:n()*Math.PI*2,yaw:0,dwellTimer:.5+n()*3.5,path:[],pathIndex:0,fleeing:!1,fleeTimer:0,fleeTarget:null,fleePath:null,fleePathIndex:0,active:!1,visual:null,styleIndex:Math.floor(n()*6)})}return o}function pm(i,t,e,n=xl,s=qd){let o=s*s;return i.map(r=>{let a=r.x-t,c=r.z-e;return{resident:r,distanceSquared:a*a+c*c}}).filter(r=>r.distanceSquared<=o).sort((r,a)=>r.distanceSquared-a.distanceSquared||r.resident.index-a.resident.index).slice(0,n).map(r=>r.resident)}var ji=i=>i?.type==="melee"||i?.type==="tool",J=i=>document.getElementById(i),ga=J("game"),Pm=matchMedia("(pointer: coarse)").matches,Pl=new URLSearchParams(window.location?.search||"").get("sandbox")==="test",en;try{en=new Zr({canvas:ga,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(i){throw document.body.innerHTML='<div style="padding:24px;color:#e4eee9;font:16px Arial">\u0414\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043F\u043E\u043B\u0438\u0433\u043E\u043D\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u044B\u0439 WebGL. \u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u0447\u0442\u043E WebView \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435.</div>',i}en.setPixelRatio(Math.min(window.devicePixelRatio||1,Pm?1.35:1.7));en.setSize(window.innerWidth,window.innerHeight,!1);en.outputColorSpace=ze;en.toneMapping=Yc;en.toneMappingExposure=1.16;en.shadowMap.enabled=!0;en.shadowMap.type=ld;var zt=new jr;zt.background=new Kt(11451837);zt.fog=new Lc(13358548,.00145);var Ve=new Je(74,window.innerWidth/window.innerHeight,.08,1200);Ve.rotation.order="YXZ";zt.add(Ve);var Dt=new fl({gravity:new M(0,-9.82,0),allowSleep:!0});Dt.broadphase=new rl(Dt);Dt.solver=new la;Dt.solver.iterations=14;Dt.solver.tolerance=.001;Dt.defaultContactMaterial.friction=.62;Dt.defaultContactMaterial.restitution=.08;Dt.defaultContactMaterial.contactEquationStiffness=1e7;Dt.defaultContactMaterial.contactEquationRelaxation=3;var br=new qi("concrete"),Ia=new qi("test-props"),Xl=new qi("operator"),Nm=new qi("mannequin"),Ua=1,mr=2,Lm=4,zm=8,io=Ua|mr|Lm|zm;Dt.addContactMaterial(new _i(br,Ia,{friction:.75,restitution:.06,contactEquationStiffness:1e7,contactEquationRelaxation:3}));Dt.addContactMaterial(new _i(Ia,Ia,{friction:.55,restitution:.09}));Dt.addContactMaterial(new _i(Xl,br,{friction:.03,restitution:0}));Dt.addContactMaterial(new _i(Xl,Ia,{friction:.18,restitution:0}));Dt.addContactMaterial(new _i(Xl,Nm,{friction:.35,restitution:.02}));var Sn=[],En=[],Nl=[],or=[],rr=[],ar=[],DE=[],BE=[],af=null;function Er(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Dm(i,t,e,n){let o=document.createElement("canvas");o.width=o.height=512;let r=o.getContext("2d",{willReadFrequently:!0}),a=[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],c=Er(t),l=r.createImageData(512,512);for(let u=0;u<l.data.length;u+=4){let d=(c()-.5)*20;l.data[u]=Math.max(0,Math.min(255,a[0]+d-2)),l.data[u+1]=Math.max(0,Math.min(255,a[1]+d)),l.data[u+2]=Math.max(0,Math.min(255,a[2]+d+4)),l.data[u+3]=255}r.putImageData(l,0,0);for(let u=0;u<95;u++){let d=c()*512,f=c()*512,m=8+c()*48;r.fillStyle=c()>.55?"rgba(126,157,166,.075)":"rgba(255,255,255,.11)",r.beginPath(),r.ellipse(d,f,m*(.8+c()*.8),m*(.25+c()*.48),c()*Math.PI,0,Math.PI*2),r.fill()}for(let u=0;u<520;u++){let d=c()*512,f=c()*512;r.fillStyle=c()>.58?"rgba(102,136,148,.22)":"rgba(255,255,255,.68)",r.fillRect(d,f,1+c()*2.2,1+c()*1.4)}let h=new mi(o);return h.colorSpace=ze,h.wrapS=h.wrapT=us,h.repeat.set(e,n),h.anisotropy=Math.min(en.capabilities.getMaxAnisotropy(),8),h}function FE(i){let n=document.createElement("canvas");n.width=512,n.height=256;let s=n.getContext("2d",{willReadFrequently:!0}),o=Er(i),r=s.createImageData(512,256);for(let c=0;c<256;c++){let l=c/256,h=Math.min(Math.abs(l-.3),Math.abs(l-.7)),u=h<.075?-30*(1-h/.075):0;for(let d=0;d<512;d++){let f=(o()-.5)*30+u,m=(c*512+d)*4;r.data[m]=Math.max(0,Math.min(255,122+f)),r.data[m+1]=Math.max(0,Math.min(255,105+f*.9)),r.data[m+2]=Math.max(0,Math.min(255,82+f*.72)),r.data[m+3]=255}}s.putImageData(r,0,0);for(let c=0;c<700;c++){s.fillStyle=o()>.55?"rgba(239,242,235,.34)":"rgba(49,44,37,.22)";let l=o()*512,h=o()*256;s.fillRect(l,h,1+o()*4,1+o()*2)}for(let c of[75,179])s.strokeStyle="rgba(54,48,40,.34)",s.lineWidth=9,s.beginPath(),s.moveTo(0,c),s.bezierCurveTo(150,c-7,340,c+7,512,c),s.stroke();let a=new mi(n);return a.colorSpace=ze,a.wrapS=a.wrapT=us,a.anisotropy=Math.min(en.capabilities.getMaxAnisotropy(),8),a}function UE(){let i=document.createElement("canvas");i.width=128,i.height=96;let t=i.getContext("2d");t.fillStyle="#352d25",t.fillRect(0,0,128,96),t.fillStyle="#8aa9aa",t.fillRect(9,8,110,80),t.fillStyle="rgba(232,243,239,.35)",t.fillRect(14,12,46,70),t.fillStyle="#4b4032",t.fillRect(61,8,6,80),t.fillRect(9,45,110,6);let e=new mi(i);return e.colorSpace=ze,e}function OE(){let i=document.createElement("canvas");i.width=1024,i.height=256;let t=i.getContext("2d");t.translate(i.width,0),t.scale(-1,1),t.fillStyle="#f2f1e8",t.fillRect(0,0,i.width,i.height),t.fillStyle="#c9343d",t.fillRect(0,0,216,i.height),t.fillStyle="#1d7145",t.fillRect(216,0,i.width-216,i.height),t.fillStyle="#e9f0e6",t.font="bold 198px Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("5",108,128),t.font="bold 94px Arial, sans-serif",t.fillText("\u041F\u042F\u0422\u0401\u0420\u041E\u0427\u041A\u0410",620,130),t.fillStyle="#c9343d",t.fillRect(216,224,i.width-216,18);let e=new mi(i);return e.colorSpace=ze,e.anisotropy=Math.min(en.capabilities.getMaxAnisotropy(),8),e}function HE(i){let t=document.createElement("canvas");t.width=512,t.height=256;let e=t.getContext("2d");e.fillStyle="#c0b3a0",e.fillRect(0,0,t.width,t.height);let n=Er(i),s=64,o=26,r=5;for(let c=0;c<10;c++){let l=c%2?-s/2:0;for(let h=-1;h<10;h++){let u=Math.floor(105+n()*42);e.fillStyle=`rgb(${u},${Math.max(0,u-25)},${Math.max(0,u-38)})`;let d=l+h*s+r/2,f=c*o+r/2;e.fillRect(d,f,s-r,o-r),e.fillStyle="rgba(255,235,213,.15)",e.fillRect(d+3,f+3,s-r-6,2)}}let a=new mi(t);return a.colorSpace=ze,a.wrapS=a.wrapT=us,a.anisotropy=Math.min(en.capabilities.getMaxAnisotropy(),8),a}function kE(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(227,235,234,.55)"),e.addColorStop(.45,"rgba(227,235,234,.28)"),e.addColorStop(1,"rgba(227,235,234,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new mi(i)}function xa(i,t){let s=document.createElement("canvas");s.width=512,s.height=256;let o=s.getContext("2d",{willReadFrequently:!0}),r=[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],a=Er(t),c=o.createImageData(512,256);for(let h=0;h<256;h++){let u=Math.sin(h*.14)*4+Math.sin(h*.037)*7;for(let d=0;d<512;d++){let f=u+(a()-.5)*18,m=(h*512+d)*4;c.data[m]=Math.max(0,Math.min(255,r[0]+f)),c.data[m+1]=Math.max(0,Math.min(255,r[1]+f*.82)),c.data[m+2]=Math.max(0,Math.min(255,r[2]+f*.62)),c.data[m+3]=255}}o.putImageData(c,0,0);for(let h=0;h<175;h++){let u=a()*256;o.strokeStyle=a()>.5?"rgba(39,25,13,.19)":"rgba(255,226,171,.12)",o.lineWidth=a()*1.4+.25,o.beginPath(),o.moveTo(0,u),o.bezierCurveTo(512*.33,u+(a()-.5)*12,512*.67,u+(a()-.5)*9,512,u+(a()-.5)*6),o.stroke()}let l=new mi(s);return l.colorSpace=ze,l.wrapS=l.wrapT=us,l.repeat.set(1.5,1),l.anisotropy=Math.min(en.capabilities.getMaxAnisotropy(),8),l}var vf=xa("#775a3d",319);vf.repeat.set(5.4,1.8);var Bm=Dm("#e2e9e9",81,4.6,3.5),_f=xa("#51402d",441);_f.repeat.set(4.2,1.8);var Fm=vf.clone();Fm.colorSpace=mn;var Mf=Bm.clone();Mf.colorSpace=mn;var Um=_f.clone();Um.colorSpace=mn;var DA=new Z({map:vf,bumpMap:Fm,bumpScale:.045,color:16777215,roughness:.94,metalness:.01}),BA=new Z({map:Bm,bumpMap:Mf,bumpScale:.025,color:15857140,roughness:.98,metalness:0}),FA=new Z({map:_f,bumpMap:Um,bumpScale:.035,color:12956050,roughness:.96}),UA=new Z({color:3160636,roughness:.9}),Yl=new Z({color:3419429,roughness:.72,metalness:.18}),OA=new Z({color:14002773,roughness:.8,metalness:.06}),HA=new Z({color:12700869,roughness:.9,emissive:1581084,emissiveIntensity:.15}),kA=new Z({color:4929576,roughness:.9}),Ll=new Z({color:16054263,roughness:.96,metalness:0,bumpMap:Mf,bumpScale:.018}),wf=Dm("#e2e7df",512,1,1);wf.repeat.set(28,42);var Om=wf.clone();Om.colorSpace=mn;var VE=new Z({map:wf,bumpMap:Om,bumpScale:.028,color:16777215,vertexColors:!0,roughness:.98}),Hm=FE(2048);Hm.repeat.set(1,1);var GE=new Z({map:Hm,color:14801095,roughness:.98,side:Ce,polygonOffset:!0,polygonOffsetFactor:-1}),mm=new Z({color:10061939,roughness:1,side:Ce}),WE=new Z({color:12172213,roughness:.98,side:Ce,polygonOffset:!0,polygonOffsetFactor:-2}),Sl=new Z({color:7898461,roughness:1,side:Ce}),$d=new Z({color:10193247,roughness:1,side:Ce}),VA=new Z({color:7364682,roughness:1}),qE=new Z({color:2847111,roughness:.24,metalness:.08,transparent:!0,opacity:.92}),so=new Z({color:9409165,roughness:.96}),km=kE();km.colorSpace=ze;zt.add(new ea(15201011,5592133,1.55));zt.add(new Xc(12832975,.55));var Dn=new ia(16773336,2.3);Dn.position.set(-280,420,180);Dn.castShadow=!0;Dn.shadow.mapSize.set(1536,1536);Dn.shadow.camera.left=-360;Dn.shadow.camera.right=360;Dn.shadow.camera.top=470;Dn.shadow.camera.bottom=-470;Dn.shadow.camera.near=5;Dn.shadow.camera.far=1200;Dn.shadow.bias=-18e-5;Dn.shadow.normalBias=.03;Dn.shadow.radius=5;zt.add(Dn);var $l=1320,zl=new Ne,Tl=new Float32Array($l*3),Dl=new Float32Array($l*2),ua=Er(240126);for(let i=0;i<$l;i++)Tl[i*3]=(ua()-.5)*72,Tl[i*3+1]=(ua()-.5)*44,Tl[i*3+2]=-2.5-ua()*48,Dl[i*2]=-3.8-ua()*6.6,Dl[i*2+1]=5+ua()*8.5;zl.setAttribute("position",new gn(Tl,3));var XE=new Kr({color:16054519,size:.12,transparent:!0,opacity:.74,depthWrite:!1,sizeAttenuation:!0}),bf=new Dc(zl,XE);bf.frustumCulled=!1;bf.renderOrder=5;Ve.add(bf);function YE(i){let t=zl.attributes.position.array;for(let e=0;e<$l;e++){let n=e*3;t[n]+=Dl[e*2]*i,t[n+1]-=Dl[e*2+1]*i,t[n]<-38&&(t[n]=38),t[n+1]<-24&&(t[n+1]=24)}zl.attributes.position.needsUpdate=!0}function Zl(i,t,e=12774368,n=!1){let s=new rt(new St(1.05,.1,.25),Yl);s.position.set(i,5.66,t),s.castShadow=!1,s.receiveShadow=!0,zt.add(s);let o=new rt(new St(.78,.035,.13),new Z({color:e,emissive:e,emissiveIntensity:1.35,roughness:.3}));if(o.position.set(i,5.585,t),zt.add(o),n){let r=new qc(e,42,12,Math.PI/3,.58,1.6);r.position.set(i,5.35,t),r.target.position.set(i,.15,t),r.castShadow=!0,r.shadow.mapSize.set(512,512),r.shadow.camera.near=.2,r.shadow.camera.far=13,r.shadow.bias=-35e-5,r.shadow.normalBias=.035,r.shadow.radius=4,zt.add(r,r.target)}else{let r=new Wo(e,8.5,8.4,2);r.position.set(i,5.35,t),zt.add(r)}}Zl(-4.3,-2.8,11787478,!0);Zl(.4,-2.7,13886159,!1);Zl(4.4,-2.5,11063509,!0);Zl(0,4.25,10141120,!1);function Ti(i,t,e=br,n=[0,0,0]){let s=new At({mass:0,material:e,collisionFilterGroup:Ua,collisionFilterMask:io});return s.addShape(new un(new M(t[0],t[1],t[2]))),s.position.set(i[0],i[1],i[2]),n.some(o=>o!==0)&&s.quaternion.setFromEuler(n[0],n[1],n[2],"XYZ"),Dt.addBody(s),s}function $E(){let e=Lt.minX,n=Lt.maxX,s=Lt.minZ,o=Lt.maxZ,r=[],a=[],c=[],l=[],h=new Kt("#c6d0c4"),u=new Kt("#d0d1c8"),d=new Kt("#c8c9bf");for(let x=0;x<=144;x++){let g=s+(o-s)*x/144;for(let p=0;p<=124;p++){let y=e+(n-e)*p/124,_=Wt(y);r.push(y,_-.012,g);let v;if(_<=2?v=h.clone().lerp(u,_/2):v=u.clone().lerp(d,(_-2)/2),a.push(v.r,v.g,v.b),c.push((y-e)/(n-e),(g-s)/(o-s)),p<124&&x<144){let R=x*125+p,S=R+1,A=R+124+1,C=A+1;l.push(R,A,S,S,A,C)}}}let f=new Ne;f.setAttribute("position",new te(r,3)),f.setAttribute("color",new te(a,3)),f.setAttribute("uv",new te(c,2)),f.setIndex(l),f.computeVertexNormals();let m=new rt(f,VE);m.receiveShadow=!0,m.userData.groundSurface=!0,af=m,zt.add(m);for(let x of cm()){let g=new At({mass:0,material:br,collisionFilterGroup:Ua,collisionFilterMask:io});g.addShape(new un(new M(x.width/2+.14,.5,(o-s)/2))),g.position.set(x.centerX,x.height-.5,0),g.quaternion.setFromEuler(0,0,Math.atan(x.slope),"XYZ"),Dt.addBody(g)}Dt.broadphase.dirty=!0}$E();var Es=[xa("#846744",213),xa("#725a40",932),xa("#9a7950",612)],cr=Es.map(i=>{let t=i.clone();return t.colorSpace=mn,t}),cf=[new Z({map:Es[0],bumpMap:cr[0],bumpScale:.035,color:8808262,roughness:.88}),new Z({map:Es[1],bumpMap:cr[1],bumpScale:.035,color:7296829,roughness:.91}),new Z({map:Es[2],bumpMap:cr[2],bumpScale:.035,color:10123343,roughness:.83})],jl=HE(483);jl.repeat.set(2.6,1.45);var Ef=jl.clone();Ef.colorSpace=mn;var Zd=new Z({map:jl,bumpMap:Ef,bumpScale:.035,color:15852498,roughness:.94}),ZE=new Z({map:jl,bumpMap:Ef,bumpScale:.06,color:10982784,roughness:.98}),lr=[new Z({color:3686975,roughness:.82,metalness:.16}),new Z({color:6705469,roughness:.94,metalness:.02}),new Z({color:5717041,roughness:.88,metalness:.04}),new Z({color:5858410,roughness:.48,metalness:.38})],GA=[new Z({color:3234639,roughness:.82}),new Z({color:14207401,roughness:.9})],Ys=new Z({color:15131868,roughness:.88}),jE=new Z({color:2060359,roughness:.72}),WA=new Z({color:13186621,roughness:.68}),Yi=new Z({color:3753545,roughness:.65,metalness:.28}),gm=new Z({color:8890797,roughness:.2,metalness:.06,transparent:!0,opacity:.58,depthWrite:!1,side:Ce}),KE=new Z({color:5529180,roughness:.76,metalness:.22}),$s=new Z({color:6845296,roughness:.7,metalness:.48}),JE=new Z({color:5332573,roughness:.64,metalness:.5}),lf=new Z({color:3160892,roughness:.62,metalness:.54}),QE=new Z({color:5326136,roughness:.96}),tS=new Z({color:7430219,roughness:.94}),eS=new Z({color:3490375,roughness:.8,metalness:.42,side:Ce}),hr=new Z({color:6705209,roughness:.93}),nS=new Z({color:4799021,roughness:.9}),iS=new Z({map:UE(),roughness:.54,metalness:.05,side:Ce}),Sf=new Z({color:5661021,roughness:.7,metalness:.42}),Vm=new Z({color:7685940,roughness:.86,metalness:.18}),sS=new Z({color:4611146,roughness:.96}),oS=new Z({color:13358802,roughness:.94}),rS=new Z({color:5850418,roughness:.96}),aS=new Z({color:3156772,roughness:.75,metalness:.15}),cS=[new Z({color:7383713,roughness:.23,metalness:.05}),new Z({color:9940578,roughness:.27,metalness:.04}),new Z({color:8951472,roughness:.25,metalness:.08})],lS=[new Z({color:4545884,roughness:.65,metalness:.38}),new Z({color:7296321,roughness:.7,metalness:.35})],Bl=new Z({color:10660256,roughness:.44,metalness:.64}),hS=new Z({color:9139286,roughness:.91});function Kl(i,t){i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.userData.gameMeta=t)}),i.userData.gameMeta=t,En.push(i)}function Tf(i){for(let t=En.length-1;t>=0;t--)En[t]===i&&En.splice(t,1)}function uS(i,t){i.body&&(Dt.removeBody(i.body),i.body=null);let e=Math.max(1.5,.9*t);for(let o of Dt.bodies){if(o.mass<=0)continue;let r=o.position.x-i.x,a=o.position.z-i.z;r*r+a*a<=e*e&&o.position.y<i.baseY+2.2&&o.wakeUp()}if(i.meta.isEmpty){Dt.broadphase.dirty=!0;return}let n=.48*t,s=new At({mass:0,material:br,collisionFilterGroup:Ua,collisionFilterMask:io});s.addShape(new Qo(n)),s.position.set(i.x,i.baseY+n,i.z),s.gameMeta={kind:"snowdrift",name:"\u0421\u0423\u0413\u0420\u041E\u0411",drift:i},Dt.addBody(s),i.body=s,Dt.broadphase.dirty=!0}function Gm(i){let t=Math.max(0,i.amount),e=Math.cbrt(t);i.meta.isEmpty=t<=.012,i.group.visible=!i.meta.isEmpty,i.group.scale.setScalar(e),i.group.position.y=i.baseY+.02+.07*e,uS(i,e)}function er(i,t,e=1){let n=new ee,s=new rt(new Vo(1,1),Ll);s.scale.set(.88,.38,.76),s.position.set(0,.31,0),n.add(s);for(let[a,c,l,h,u,d]of[[-.37,.18,.08,.45,.25,.48],[.34,.17,-.1,.48,.23,.44],[.04,.24,.35,.43,.27,.38]]){let f=new rt(new Vo(.68,1),Ll);f.position.set(a,c,l),f.scale.set(h,u,d),n.add(f)}n.position.set(i,Wt(i),t),zt.add(n);let o={kind:"snowdrift",name:"\u0421\u0423\u0413\u0420\u041E\u0411",range:4.5,isEmpty:!1},r={group:n,amount:Math.max(0,e),meta:o,x:i,z:t,baseY:Wt(i),body:null};return o.drift=r,Kl(n,o),BE.push(r),Gm(r),r}function oo(i,t,e,n,s,o=0,r={}){let a=new At({mass:e,material:Ia,position:new M(n[0],n[1],n[2]),collisionFilterGroup:Lm,collisionFilterMask:io,linearDamping:r.linearDamping??.08,angularDamping:r.angularDamping??.18,allowSleep:!0,sleepSpeedLimit:.07,sleepTimeLimit:.55});if(Array.isArray(t))for(let c of t)a.addShape(c.shape,c.offset||new M);else a.addShape(t);return a.quaternion.setFromEuler(0,o,0,"YZX"),a.gameMeta={...i,body:a,initialMass:e,isHeld:!1,isStored:!1,originalCollisionFilterMask:a.collisionFilterMask,originalLinearDamping:a.linearDamping,originalAngularDamping:a.angularDamping,lastVelocity:{x:0,y:0,z:0}},Dt.addBody(a),s.position.copy(a.position),s.quaternion.copy(a.quaternion),s.userData.gameMeta=a.gameMeta,zt.add(s),Kl(s,a.gameMeta),Sn.push({body:a,visual:s}),a}function dS(i,t,e,n){let s=new ee,o=Math.abs(Math.floor(n))%Es.length,r=new Z({map:Es[o],bumpMap:cr[o],bumpScale:.04,color:n,roughness:.9,metalness:.03}),a=new rt(new St(i,t,e),r);s.add(a);let c=Math.max(.045,i*.075),l=Math.max(.045,t*.075);for(let h of[-1,1])for(let u of[-1,1]){let d=new rt(new St(c,t+.015,c),aS);d.position.set(h*(i/2-c/2),0,u*(e/2-c/2)),s.add(d)}for(let h of[-1,1]){let u=new rt(new St(i*.88,l,e+.012),cf[2]);u.position.y=h*(t/2-l/2),s.add(u)}return s}function fS(i,t,e){let n=new ee,s=new rt(new sn(i*.9,i,t,20,1),lS[e]);n.add(s);let o=new rt(new ti(i*.92,.025,6,24),Bl);o.rotation.x=Math.PI/2,o.position.y=t*.31,n.add(o);let r=o.clone();r.position.y=-t*.31,n.add(r);let a=new rt(new ti(i*.96,.018,5,24),Bl);a.rotation.x=Math.PI/2,a.position.y=-t*.09,n.add(a);let c=new rt(new sn(i*.85,i*.85,.035,20),Yl);return c.position.y=t/2-.015,n.add(c),n}function pS(i){let t=new ee,e=[new ht(0,-.22),new ht(.073,-.22),new ht(.103,-.19),new ht(.108,-.12),new ht(.103,-.015),new ht(.096,.055),new ht(.071,.105),new ht(.048,.125),new ht(.041,.15),new ht(.041,.218),new ht(.05,.228),new ht(.05,.246),new ht(0,.246)],n=new rt(new Qr(e,16),cS[i]);t.add(n);let s=new rt(new sn(.049,.047,.027,16),Bl);s.position.y=.215,t.add(s);let o=new rt(new sn(.044,.044,.038,12),new Z({color:2504244,roughness:.45}));o.position.y=.257,t.add(o);let r=new rt(new sn(.105,.105,.055,16),new Z({color:14145468,roughness:.6}));return r.position.y=-.045,t.add(r),t}function mS(i,t,e,n){let s=new ee,o=new rt(new St(i,e,t),hS);s.add(o);let r=new Z({color:n?5655353:5326645,roughness:.9});for(let a of[-t*.28,t*.28]){let c=new rt(new St(i*.84,.003,.009),r);c.position.set(0,e/2+.002,a),s.add(c)}for(let a of[-i*.39,i*.39])for(let c of[-t*.29,t*.29]){let l=new rt(new sn(.012,.012,.006,8),Bl);l.rotation.x=Math.PI/2,l.position.set(a,0,c),s.add(l)}return s}function gS(){let i=new ee,t=new Z({map:Es[2],bumpMap:cr[2],bumpScale:.025,color:9204045,roughness:.86}),e=new Z({color:7898497,roughness:.42,metalness:.68}),n=new rt(new sn(.022,.029,.96,10),t);n.rotation.z=Math.PI/2,n.position.set(-.09,.005,0),i.add(n);let s=new rt(new ti(.052,.012,6,14),t);s.position.set(-.55,.01,0),s.rotation.x=Math.PI/2,i.add(s);let o=new rt(new St(.11,.065,.075),e);o.position.set(.35,-.005,0),i.add(o);let r=new rt(new St(.35,.045,.36),e);r.position.set(.49,-.008,0),i.add(r);let a=new rt(new St(.28,.012,.035),new Z({color:10332835,roughness:.38,metalness:.75}));return a.position.set(.48,.018,0),i.add(a),i}function yl(i,t,e,n,s,o=0){let[r,a,c]=e,l=dS(r,a,c,s);return oo({kind:"prop",type:"\u042F\u0429\u0418\u041A",name:i,mass:n,detail:`${n.toFixed(1)} \u041A\u0413 \xB7 \u0414\u0415\u0420\u0415\u0412\u041E`,description:"\u0423\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0439 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0439 \u0438\u0441\u043F\u044B\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u044F\u0449\u0438\u043A \u0441 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u043D\u0430\u043A\u043B\u0430\u0434\u043A\u0430\u043C\u0438.",range:4.5,inventoryWidth:r>.88?3:2,inventoryHeight:a>.88?3:2,inventoryIcon:"\u25A3"},new un(new M(r/2,a/2,c/2)),n,t,l,o)}function jd(i,t,e,n,s,o,r=0){let a=fS(e,n,o),c=new Xs(e*.9,e,n,12);return oo({kind:"prop",type:"\u0411\u041E\u0427\u041A\u0410",name:i,mass:s,detail:`${s.toFixed(0)} \u041A\u0413 \xB7 \u0422\u042F\u0416\u0401\u041B\u0410\u042F \u0421\u0422\u0410\u041B\u042C`,description:"\u0422\u044F\u0436\u0451\u043B\u0430\u044F \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0442\u0430\u0440\u0430; \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u043A\u0440\u0443\u043F\u043D\u044B\u0439 \u043E\u0431\u044A\u0451\u043C \u0438 \u0440\u0435\u0437\u043A\u043E \u043D\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u043C\u044B\u0439 \u0432\u0435\u0441.",range:4.4,inventoryWidth:2,inventoryHeight:3,inventoryIcon:"\u25C9"},c,s,t,a,r,{angularDamping:.23})}function vl(i,t,e,n=0){let s=pS(e),o=[{shape:new Xs(.103,.103,.33,10),offset:new M(0,-.055,0)},{shape:new Xs(.043,.043,.19,9),offset:new M(0,.165,0)}];return oo({kind:"prop",type:"\u0411\u0423\u0422\u042B\u041B\u041A\u0410",name:i,mass:.38,detail:"0.38 \u041A\u0413 \xB7 \u041B\u0401\u0413\u041A\u041E\u0415 \u0421\u0422\u0415\u041A\u041B\u041E",description:"\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0442\u0435\u043A\u043B\u044F\u043D\u043D\u044B\u0439 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0439 \u0444\u043B\u0430\u043A\u043E\u043D. \u041F\u043E\u0447\u0442\u0438 \u043D\u0435 \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u043E\u0431\u0449\u0438\u0439 \u0432\u0435\u0441.",range:3.8,inventoryWidth:1,inventoryHeight:1,inventoryIcon:"\u25C9"},o,.38,t,s,n,{linearDamping:.035,angularDamping:.12})}function xm(i,t,e,n,s,o,r=0){let a=mS(e,n,s,Math.abs(r)>.1?1:0);return oo({kind:"prop",type:"\u0414\u041E\u0421\u041A\u0410",name:i,mass:o,detail:`${o.toFixed(1)} \u041A\u0413 \xB7 \u0421\u041E\u0421\u041D\u0410`,description:"\u0414\u043B\u0438\u043D\u043D\u0430\u044F \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u0434\u043E\u0441\u043A\u0430; \u0432 \u0440\u044E\u043A\u0437\u0430\u043A\u0435 \u0443\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E.",range:4.3,inventoryWidth:1,inventoryHeight:4,inventoryIcon:"\u25AC"},new un(new M(e/2,s/2,n/2)),o,t,a,r,{angularDamping:.21})}function xS(i,t,e=0){let n=gS();return oo({kind:"prop",type:"\u041B\u041E\u041F\u0410\u0422\u0410",name:i,mass:3.6,detail:"3.6 \u041A\u0413 \xB7 \u0421\u0422\u0410\u041B\u042C / \u0414\u0415\u0420\u0415\u0412\u041E",description:"\u041F\u043E\u043B\u0435\u0432\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0441\u043E \u0441\u0442\u0430\u043B\u044C\u043D\u044B\u043C \u0448\u0442\u044B\u043A\u043E\u043C \u0438 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u043E\u0439 \u0440\u0443\u043A\u043E\u044F\u0442\u044C\u044E. \u0420\u0430\u0437\u043C\u0435\u0440 2 \xD7 3 \u044F\u0447\u0435\u0439\u043A\u0438.",range:4.5,inventoryWidth:2,inventoryHeight:3,inventoryIcon:"\u2692"},new un(new M(.64,.07,.2)),3.6,t,n,e,{angularDamping:.3})}function yS(){let i=new ee,t=new Z({map:Es[1],bumpMap:cr[1],bumpScale:.025,color:7493434,roughness:.96}),e=new Z({color:12624250,roughness:.96}),n=new rt(new sn(.083,.09,.66,10),t);n.rotation.z=Math.PI/2,i.add(n);for(let s of[-1,1]){let o=new rt(new gi(.082,10),e);o.position.x=s*.331,o.rotation.y=s*Math.PI/2,i.add(o)}return i}function _l(i,t,e=0){let s=yS();return oo({kind:"firewood",type:"\u0414\u0420\u041E\u0412\u0410",name:i,mass:1.35,detail:`${1.35.toFixed(1)} \u041A\u0413 \xB7 \u0421\u0423\u0425\u041E\u0415 \u041F\u041E\u041B\u0415\u041D\u041E`,description:"\u041F\u043E\u043B\u0435\u043D\u043E \u0434\u043B\u044F \u0440\u0430\u0441\u0442\u043E\u043F\u043A\u0438 \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0447\u0438. \u0412\u043E\u0437\u044C\u043C\u0438\u0442\u0435 \u0435\u0433\u043E \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0440\u044F\u0434\u043E\u043C \u0441 \u043F\u0435\u0447\u044C\u044E.",range:4.5,inventoryWidth:1,inventoryHeight:2,inventoryIcon:"\u25A4"},new un(new M(.34,.09,.09)),1.35,t,s,e,{angularDamping:.28})}var tn=new N(-18,Wt(-18),108),Wm=[],qm=[],Xm=[],Ym=[],$m=[[],[],[]],Zm=[[],[]],hf=new Map,fa=[];function ur(i,t,e,n){i.push({position:t.clone(),quaternion:e.clone(),scale:n.clone()})}function dr(i,t,e,n=!0){if(!e.length)return null;let s=new Oo(i,t,e.length);s.castShadow=n,s.receiveShadow=!0,s.instanceMatrix.setUsage(Bo);let o=new ue;for(let r=0;r<e.length;r++){let a=e[r];o.compose(a.position,a.quaternion,a.scale),s.setMatrixAt(r,o)}return s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere(),zt.add(s),s}function da(i,t,e,n,s="south",o=2.8){let r=e/2,a=n/2,c=[{name:"north",a:[-r,-a],b:[r,-a],axis:"x"},{name:"south",a:[-r,a],b:[r,a],axis:"x"},{name:"west",a:[-r,-a],b:[-r,a],axis:"z"},{name:"east",a:[r,-a],b:[r,a],axis:"z"}],l=new At({mass:0,material:br,collisionFilterGroup:Ua,collisionFilterMask:io});for(let h of c){let u=i+h.a[0],d=t+h.a[1],f=i+h.b[0],m=t+h.b[1],x=f-u,g=m-d,p=Math.hypot(x,g),y=h.name===s,_=y?(p-o)/2:p,v=y?(p+o)/2:p,R=y?[[0,_],[v,p]]:[[0,p]],S=A=>{let C=A/p;return{x:u+x*C,z:d+g*C}};for(let[A,C]of R){if(C-A<.3)continue;let b=S(A),w=S(C),P=S((A+C)/2),H=Wt(P.x),L=C-A,D=new N(w.x-b.x,Wt(w.x)-Wt(b.x),w.z-b.z).normalize(),U=new Ge().setFromUnitVectors(new N(1,0,0),D);for(let Ht of[.28,.68,1.08]){let X=new N(b.x,Wt(b.x)+Ht,b.z),ot=new N(w.x,Wt(w.x)+Ht,w.z),wt=X.clone().add(ot).multiplyScalar(.5),dt=new N(L,1,1);ur(Xm,wt,U,dt)}let z=S(A),tt=S(C),V=[A,C];for(let Ht=A+4;Ht<C-.25;Ht+=4)V.push(Ht);for(let Ht of V){let X=S(Ht),ot=Wt(X.x);ur(Wm,new N(X.x,ot+.67,X.z),new Ge,new N(1,1,1))}for(let Ht=A+1.8;Ht<C-.7;Ht+=1.8){let X=S(Ht),ot=Wt(X.x);ur(qm,new N(X.x,ot+.53,X.z),new Ge,new N(1,1,1))}let Q=h.axis==="x"?new M(L/2,.62,.085):new M(.085,.62,L/2),ut=new un(Q),pt=new M(P.x,H+.62,P.z),at=new De;h.axis==="x"&&at.setFromEuler(0,0,Math.atan2(Wt(w.x)-Wt(b.x),w.x-b.x),"XYZ"),l.addShape(ut,pt,at)}}l.shapes.length&&Dt.addBody(l)}function vS(){dr(new St(.16,1.34,.16),hr,Wm),dr(new St(.075,1,.12),hr,qm),dr(new St(1,.13,.12),hr,Xm)}function Vt(i,t,e,n=!1,s=[0,0,0]){let o=hf.get(e);o||(o=[],hf.set(e,o));let r={position:new N(t[0],t[1],t[2]),scale:new N(i[0],i[1],i[2]),rotation:[...s],bulletSurface:n};return o.push(r),{userData:{},instance:r}}function _S(i,t,e,n=1.12,s=.86){fa.push({position:new N(i,t,e),scale:new N(n,s,1),quaternion:new Ge})}function MS(){let i=new St(1,1,1);for(let[t,e]of hf){let n=new Oo(i,t,e.length),s=new ue;for(let o=0;o<e.length;o++){let r=e[o],a=new Ge().setFromEuler(new xn(...r.rotation));s.compose(r.position,a,r.scale),n.setMatrixAt(o,s)}n.castShadow=!0,n.receiveShadow=!0,n.instanceMatrix.setUsage(Bo),n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),zt.add(n),e.some(o=>o.bulletSurface)&&(n.userData.bulletSurface=!0,Nl.push(n))}if(fa.length){let t=new Oo(new pi(1,1),iS,fa.length),e=new ue;for(let n=0;n<fa.length;n++){let s=fa[n];e.compose(s.position,s.quaternion,s.scale),t.setMatrixAt(n,e)}t.castShadow=!1,t.receiveShadow=!0,t.instanceMatrix.setUsage(Bo),t.instanceMatrix.needsUpdate=!0,t.computeBoundingSphere(),zt.add(t)}}function jm(i,t,e){let n=i/2,s=t/2,o=[-n,0,-s,0,e,-s,n,0,-s,-n,0,s,0,e,s,n,0,s],r=new Ne;return r.setAttribute("position",new te(o,3)),r.setIndex([0,1,4,0,4,3,1,2,5,1,5,4,0,2,1,3,4,5]),r.computeVertexNormals(),r}function wS(i,t,e){let n=i/2,s=t/2,o=[[-n,0],[-n*.32,e*.42],[0,e],[n*.32,e*.42],[n,0]],r=[];for(let[l,h]of o)r.push(l,h,-s);for(let[l,h]of o)r.push(l,h,s);let a=[];for(let l=0;l<4;l++)a.push(l,l+1,6+l,l,6+l,5+l);a.push(0,4,2,5,7,9);let c=new Ne;return c.setAttribute("position",new te(r,3)),c.setIndex(a),c.computeVertexNormals(),c}function bS(i,t,e){let n=i/2,s=t/2,o=[-n,0,-s,n,0,-s,n,0,s,-n,0,s,0,e,0],r=new Ne;return r.setAttribute("position",new te(o,3)),r.setIndex([0,1,4,1,2,4,2,3,4,3,0,4]),r.computeVertexNormals(),r}function ym({x:i,z:t,width:e,depth:n,height:s,wallMaterial:o,roofType:r=0,roofMaterial:a=lr[0],brick:c=!1,windows:l=2,chimney:h=!0}){let u=Wt(i),d=.28;Vt([e+.45,d,n+.45],[i,u+d/2,t],so);let f=u+d+s/2;Vt([e,s,n],[i,f,t],o,!0),Ti([i,f,t],[e/2,s/2,n/2]);let m=t+n/2+.065,x=Math.min(1.15,e*.16);Vt([x+.18,2.05,.13],[i,u+d+1.03,m],hr),Vt([x,1.85,.055],[i,u+d+.96,m+.08],nS);for(let y=0;y<l;y++){let _=i+(y-(l-1)/2)*Math.min(3.2,e/(l+.5)),v=u+d+s*.59;_S(_,v,m+.105)}let g=u+d+s,p;if(r===1)p=bS(e+.55,n+.55,Math.min(e,n)*.34);else if(r===2)p=wS(e+.5,n+.5,e*.31);else if(r===3){let y=new rt(new St(e+.7,.22,n+.7),a);y.position.set(i,g+.42,t),y.rotation.z=e>9?-.18:.13,y.castShadow=!0,y.receiveShadow=!0,zt.add(y),p=null}else p=jm(e+.55,n+.55,e*.29);if(p){let y=new rt(p,a);y.position.set(i,g,t),y.castShadow=!0,y.receiveShadow=!0,zt.add(y)}h&&e<24&&(Vt([.42,1.05,.42],[i+e*.29,g+.5,t-n*.15],Vm),Vt([.56,.11,.56],[i+e*.29,g+1.07,t-n*.15],Sf))}function ES(i){let{x:t,z:e,width:n,depth:s,height:o}=i,r=Wt(t),a=new Z({color:7502710,roughness:.76,metalness:.34});Vt([n+.8,.35,s+.8],[t,r+.175,e],so);let c=r+.35+o/2;Vt([n,o,s],[t,c,e],a,!0),Ti([t,c,e],[n/2,o/2,s/2]);let l=Math.min(13,n*.24),h=o*.72;Vt([l,h,.16],[t,r+.35+h/2,e+s/2+.09],Sf);let u=new rt(jm(n+1,s+.8,Math.min(n*.09,3.2)),lr[3]);u.position.set(t,r+.35+o,e),u.castShadow=!0,u.receiveShadow=!0,zt.add(u);let d=Math.min(10,Math.max(3,Math.floor(n/8)));for(let f=0;f<=d;f++){let m=t-n/2+n*f/d;Vt([.07,o-.25,.08],[m,r+.35+o/2,e+s/2+.1],Yl)}}function Ml(i,t,e,n=!1){let s=t/2,o=[],r=[],a=[],c=0;for(let u=0;u<i.length;u++){let d=i[Math.max(0,u-1)],f=i[Math.min(i.length-1,u+1)],m=f[0]-d[0],x=f[1]-d[1],g=Math.hypot(m,x)||1,p=-x/g,y=m/g;u>0&&(c+=Math.hypot(i[u][0]-i[u-1][0],i[u][1]-i[u-1][1]));for(let _ of[-1,1]){let v=i[u][0]+p*s*_,R=i[u][1]+y*s*_;o.push(v,Wt(v)+(n?.016:.034),R),r.push(c/9,_<0?0:1)}if(u<i.length-1){let _=u*2,v=_+1,R=_+2,S=_+3;a.push(_,R,v,v,R,S)}}let l=new Ne;l.setAttribute("position",new te(o,3)),l.setAttribute("uv",new te(r,2)),l.setIndex(a),l.computeVertexNormals();let h=new rt(l,e);return h.receiveShadow=!0,zt.add(h),h}function tr(i,t,e,n,s,o=Sl,r=1){let a=Er(r),c=[];for(let u=0;u<s;u++){let d=i+(a()-.5)*e,f=t+(a()-.5)*n,m=Wt(d)+.015,x=.62+a()*.78,g=.035+a()*.055,p=a()*Math.PI,y=Math.cos(p)*g,_=Math.sin(p)*g,v=(a()-.5)*.12,R=(a()-.5)*.12;c.push(d-y,m,f-_,d+y,m,f+_,d+v,m+x,f+R)}let l=new Ne;l.setAttribute("position",new te(c,3)),l.computeVertexNormals();let h=new rt(l,o);h.frustumCulled=!0,h.castShadow=!1,zt.add(h)}function Kd(i,t,e,n=.7){let s=new hn({map:km,color:14476514,transparent:!0,opacity:.42,depthWrite:!1,side:Ce}),o=new rt(new pi(e,e*.72),s);o.rotation.x=-Math.PI/2,o.position.set(i,Wt(i)+n,t),o.renderOrder=2,zt.add(o)}function SS(){let i=ye.pond,t=Wt(i.x),e=new rt(new gi(1,80),qE);e.scale.set(i.radiusX,i.radiusZ,1),e.rotation.x=-Math.PI/2,e.position.set(i.x,t+.04,i.z),e.receiveShadow=!0,zt.add(e);let n=new rt(new ti(1,.045,7,80),Ll);n.scale.set(i.radiusX+1.3,i.radiusZ+1.3,1),n.rotation.x=Math.PI/2,n.position.set(i.x,t+.055,i.z),zt.add(n);for(let s of[-.25,.3]){let o=new rt(new ti(1,.012,4,72),new hn({color:12374480,transparent:!0,opacity:.38}));o.scale.set(i.radiusX*(.58+s),i.radiusZ*(.58+s),1),o.rotation.x=Math.PI/2,o.position.set(i.x,t+.052,i.z),zt.add(o)}for(let s=0;s<5;s++){let o=s*1.21,r=i.x+Math.cos(o)*(i.radiusX+2+s%2),a=i.z+Math.sin(o)*(i.radiusZ+2),c=new rt(new Hc(.6+s%3*.12,0),so);c.position.set(r,t+.15,a),c.scale.set(1.2,.48,.9),c.castShadow=!0,zt.add(c)}Kd(i.x-10,i.z+4,80,.7),Kd(i.x+15,i.z-9,72,.95),Kd(i.x+2,i.z+22,65,.72)}function TS(i,t,e=1){let n=Wt(i);ur(Ym,new N(i,n+1.05*e,t),new Ge,new N(e,e,e));for(let s=0;s<3;s++){let o=(2.1-s*.42)*e,r=(1.05-s*.15)*e;if(ur($m[s],new N(i,n+(1.45+s*.82)*e,t),new Ge,new N(r,o,r)),s<2){let a=(.79-s*.12)*e,c=new Ge().setFromEuler(new xn(0,0,-.08));ur(Zm[s],new N(i+.06*e,n+(1.49+s*.82)*e,t+.04*e),c,new N(a,o*.82,a))}}Ti([i,n+1*e,t],[.19*e,1*e,.19*e])}function AS(){dr(new sn(.13,.23,2.1,7),rS,Ym);let i=new Ho(1,1,7);for(let t of $m)dr(i,sS,t);for(let t of Zm)dr(i,oS,t)}function RS(){let i=ye.stop,t=Wt(i.x),e=new Z({color:5982519,roughness:.9});Vt([6.4,.22,4.2],[i.x,t+.11,i.z],so);for(let n of[-2.8,2.8])for(let s of[-1.65,1.65])Vt([.16,2.6,.16],[i.x+n,t+1.3,i.z+s],e);Vt([6.6,.22,4.3],[i.x,t+2.66,i.z],lr[3],!1,[0,0,-.015]),Vt([4.5,.12,.54],[i.x,t+.72,i.z+1.1],hr),Vt([4.5,.12,.14],[i.x,t+1.12,i.z+1.27],hr);for(let n of lm(i))Ti(n.position,n.halfExtents)}function CS(i){let t=Wt(i.x),e=t+.28,n=e+i.height,s=(e+n)/2,o=i.z-i.depth/2+.21,r=o-.21,a=t+.46,c=t+2.96,l=c-a,h=(a+c)/2;Vt([i.width+.5,.28,i.depth+.5],[i.x,t+.14,i.z],so),Vt([.42,i.height,i.depth],[i.x-i.width/2+.21,s,i.z],Ys),Vt([.42,i.height,i.depth],[i.x+i.width/2-.21,s,i.z],Ys),Vt([i.width,i.height,.42],[i.x,s,i.z+i.depth/2-.21],Ys),Vt([i.width+.7,.22,i.depth+.7],[i.x,n+.11,i.z],KE),Ti([i.x,s,i.z],[i.width/2,i.height/2,i.depth/2]),Vt([i.width,a-e,.42],[i.x,(a+e)/2,o],Ys),Vt([i.width,n-c,.42],[i.x,(n+c)/2,o],Ys);for(let _ of[-1,1])Vt([1.6,l,.42],[i.x+_*10,h,o],Ys),Vt([.6,l,.42],[i.x+_*1.7,h,o],Ys);let u=r-.035;for(let _ of[i.x-5.6,i.x+5.6]){let v=new rt(new pi(7.2,l),gm);v.position.set(_,h,u),v.rotation.y=Math.PI,v.castShadow=!1,v.receiveShadow=!0,zt.add(v),Vt([.09,l,.12],[_,h,u-.035],Yi),Vt([7.2,.09,.12],[_,a,u-.035],Yi),Vt([7.2,.09,.12],[_,c,u-.035],Yi),Vt([.08,l,.12],[_-3.6,h,u-.035],Yi),Vt([.08,l,.12],[_+3.6,h,u-.035],Yi)}let d=2.4,f=c-e,m=e+f/2,x=new rt(new pi(d,f),gm);x.position.set(i.x,m,u-.018),x.rotation.y=Math.PI,zt.add(x);for(let _ of[-1,1])Vt([.1,f,.13],[i.x+_*d/2,m,u-.06],Yi);Vt([d,.11,.13],[i.x,e,u-.06],Yi),Vt([d,.11,.13],[i.x,c,u-.06],Yi);for(let _ of[-1,1])Vt([.045,.42,.055],[i.x+_*.18,m,u-.12],lf);Vt([i.width-2.2,.18,.32],[i.x,t+3.08,r-.48],jE);let g=t+3.75,p=r-.25;Vt([14.2,.96,.18],[i.x,g,p],Yi);let y=new rt(new pi(13.9,.78),new hn({map:OE(),side:Ce,toneMapped:!1}));y.position.set(i.x,g,p-.105),y.rotation.y=Math.PI,y.castShadow=!1,zt.add(y)}function IS(i){let{x:t,z:e,width:n,depth:s,height:o}=i,r=Wt(t),a=o-.3,c=r+.18,l=c+a,h=(c+l)/2,u=e-s/2+.12,d=u-.1,f=n-1.5,m=a-.42,x=c+m/2;Vt([n+.4,.18,s+.4],[t,r+.09,e],so),Vt([.18,a,s],[t-n/2+.09,h,e],$s),Vt([.18,a,s],[t+n/2-.09,h,e],$s),Vt([n,a,.18],[t,h,e+s/2-.09],$s),Vt([.78,a,.2],[t-n/2+.39,h,u],$s),Vt([.78,a,.2],[t+n/2-.39,h,u],$s),Vt([n-1.3,.38,.2],[t,l-.19,u],$s);let g=new rt(new St(f,m,.12),JE);g.position.set(t,x,d),zt.add(g);for(let p=0;p<13;p++){let y=c+.14+p*(m-.2)/12;Vt([f-.06,.045,.035],[t,y,d-.08],lf)}for(let p of[-1,1])Vt([.1,m+.12,.14],[t+p*(f/2+.07),x,d-.02],lf);Vt([n+.35,.2,s+.35],[t,l+.1,e],$s),Ti([t,h,e],[n/2,a/2,s/2])}function PS(){SS();for(let s of ye.roads)Ml(s.points,s.width+.9,mm,!0),Ml(s.points,s.width,GE,!1);for(let s of ha)Ml(s.points,s.width+.26,mm,!0),Ml(s.points,s.width,WE,!1);tr(-274,-342,35,88,340,$d,67),tr(-283,-216,34,72,320,Sl,119),tr(-280,-45,35,82,360,$d,283),tr(-265,114,34,76,300,Sl,617),tr(-204,-325,28,58,230,Sl,342),tr(-205,172,26,40,180,$d,721);let i=[[-298,-414,1.15],[-285,-390,.9],[-304,-300,1],[-292,-232,1.22],[-300,-178,.88],[-292,-110,1.12],[-300,-38,.95],[-290,38,1.16],[-302,124,1],[-286,186,1.18],[-300,262,.92],[-286,336,1.08],[-300,407,1.24],[294,-405,1],[301,-315,1.15],[293,-248,.92],[299,-174,1.05],[292,-102,.88],[300,-28,1.12],[292,44,1],[300,238,1.15],[294,316,.96],[301,404,1.18]];for(let[s,o,r]of i)TS(s,o,r);AS();for(let s of ye.lots){da(s.x,s.z,s.width,s.depth,s.gate);let o=Vd(s),r=s.id.startsWith("S-")||Number(s.id.split("-")[1])%3===0?Zd:cf[Number(s.id.split("-")[1])%cf.length];ym({x:o.x,z:o.z,width:s.houseWidth,depth:s.houseDepth,height:s.id.startsWith("S-")?3.1:2.85,wallMaterial:r,roofType:s.roof,roofMaterial:lr[(s.roof+Number(s.id.split("-")[1]))%lr.length],brick:r===Zd,windows:s.houseWidth>11?2:1,chimney:!0})}let t=ye.school;da(t.x,t.z,t.width+12,t.depth+14,"east",3.2),ym({x:t.x,z:t.z,width:t.width,depth:t.depth,height:4.8,wallMaterial:Zd,roofType:1,roofMaterial:lr[2],windows:7,chimney:!0});let e=ye.shop;da(e.x,e.z,24,19,"north",3.2),CS(e);for(let s of ye.garages)IS(s);hm({layout:ye,terrainHeightAt:Wt,addBuildingPart:Vt,addStaticCollider:Ti,materials:{stone:so,brick:ZE,corrugated:eS,timber:QE,timberLight:tS}}),RS();for(let s of ye.hangars)da(s.x,s.z,s.width+9,s.depth+10,"south",5),ES(s);for(let s of ye.scrapYards){da(s.x,s.z,s.width,s.depth,s.gate,5.5);let o=Wt(s.x),r=[[-s.width*.29,-s.depth*.18,2.4,1,1.6],[s.width*.26,-s.depth*.22,1.8,1.25,1],[-s.width*.1,s.depth*.26,3.1,.75,1.25],[s.width*.26,s.depth*.2,1.7,.8,1.8]];for(let a=0;a<r.length;a++){let[c,l,h,u,d]=r[a],f=new rt(new St(h,u,d),a%2?Vm:Sf);f.position.set(s.x+c,o+u/2+.08,s.z+l),f.rotation.y=(a-1)*.23,f.rotation.z=a%2?.08:-.06,f.castShadow=!0,f.receiveShadow=!0,zt.add(f),Ti([s.x+c,o+u/2+.08,s.z+l],[h/2,u/2,d/2])}for(let a=0;a<3;a++){let c=new rt(new ti(.72+a*.04,.19,8,18),Yl);c.rotation.x=Math.PI/2,c.position.set(s.x-s.width*.12+a*1.9,o+.19,s.z+s.depth*.02),c.castShadow=!0,zt.add(c)}}vS();for(let s of ye.snowDrifts)er(s.x,s.z,s.amount);er(-248,-390,.86),er(255,178,.9),er(126,91,.82),er(-149,304,.82);let n=Wt(tn.x)+.105;_l("\u0414\u0420\u041E\u0412\u0410 F-01",[-15.4,n,108.7],.18),_l("\u0414\u0420\u041E\u0412\u0410 F-02",[-14.6,n,108.5],-.36),_l("\u0414\u0420\u041E\u0412\u0410 F-03",[-15.7,n,109.4],.46),_l("\u0414\u0420\u041E\u0412\u0410 F-04",[-14.9,n+.17,109.1],-.2),xS("\u041B\u041E\u041F\u0410\u0422\u0410 S-01",[-36.5,Wt(-36.5)+.08,117],-.25),yl("\u042F\u0429\u0418\u041A M-01",[230,Pn(230)+.42,-336],[.86,.84,.78],7.5,7692356,-.08),yl("\u042F\u0429\u0418\u041A M-02",[251,Pn(251)+.38,-351],[.72,.76,.68],5.2,9137480,.14),jd("\u0411\u041E\u0427\u041A\u0410 M-01",[241,Pn(241)+.54,-354],.38,1.08,18,0),xm("\u0414\u041E\u0421\u041A\u0410 P-01",[235,Pn(235)+.09,-326],2.35,.36,.15,3.4,.06),yl("\u042F\u0429\u0418\u041A M-03",[248,Pn(248)+.48,-159],[.95,.96,.86],11,7428673,.24),jd("\u0411\u041E\u0427\u041A\u0410 M-02",[260,Pn(260)+.5,-138],.35,1,15,1,.18),vl("\u0424\u041B\u0410\u041A\u041E\u041D G-01",[240,Pn(240)+.22,-142],0),vl("\u0424\u041B\u0410\u041A\u041E\u041D G-02",[242,Pn(242)+.22,-142.3],1,.5),yl("\u042F\u0429\u0418\u041A M-04",[181,Pn(181)+.44,-81],[.72,.76,.72],5.4,9137480,-.17),jd("\u0411\u041E\u0427\u041A\u0410 M-03",[194,Pn(194)+.47,-90],.33,.94,14,0,-.12),xm("\u0414\u041E\u0421\u041A\u0410 P-02",[186,Pn(186)+.085,-70],2,.32,.16,3.1,-.33),vl("\u0424\u041B\u0410\u041A\u041E\u041D G-03",[47,Pn(47)+.22,166],2,-.3),vl("\u0424\u041B\u0410\u041A\u041E\u041D G-04",[49,Pn(49)+.22,166.3],1,.4),MS()}function Pn(i){return Wt(i)}PS();var Km=[],js=null,NS=null,_s=null,ya=null,wi=!1,va=0,Al=0,Si=0,Zi=0,Jm=.82,Fl=null,yn=null;function LS(){let i=[new Z({color:8009768,roughness:.95}),new Z({color:9126960,roughness:.94}),new Z({color:6500646,roughness:.96})],t=new Z({color:2501417,roughness:.62,metalness:.62}),e=new ee;e.position.copy(tn);let n=new rt(new St(1.28,1,1.06),i[0]);n.position.y=.5,e.add(n);for(let u=0;u<5;u++)for(let d=0;d<4;d++){let f=u%2?.14:0,m=new rt(new St(.27,.16,.045),i[(u*3+d)%i.length]);m.position.set(-.47+d*.29+f,.13+u*.18,.54),e.add(m)}let s=new rt(new St(.58,.39,.035),t);s.position.set(0,.48,.591),e.add(s);let o=new rt(new St(.43,.25,.014),new Z({color:1117707,roughness:1,emissive:788227}));o.position.set(0,.48,.616),e.add(o),_s=new rt(new St(.39,.22,.008),new hn({color:16743212,transparent:!0,opacity:.86})),_s.position.set(0,.48,.628),_s.visible=!1,e.add(_s);for(let u of[-.34,.34]){let d=new rt(new St(.065,.5,.075),t);d.position.set(u,.48,.64),e.add(d)}for(let u of[.24,.72]){let d=new rt(new St(.72,.06,.075),t);d.position.set(0,u,.64),e.add(d)}let r=new rt(new St(.035,.16,.045),t);r.position.set(.25,.48,.69),e.add(r);let a=new rt(new St(.42,1.62,.44),i[2]);a.position.set(.32,1.78,-.24),e.add(a);let c=new rt(new St(.55,.1,.57),t);c.position.set(.32,2.64,-.24),e.add(c),zt.add(e),Kl(e,{kind:"stove",name:"\u041A\u0418\u0420\u041F\u0418\u0427\u041D\u0410\u042F \u041F\u0415\u0427\u042C",range:4.7}),NS=e,Ti([tn.x,tn.y+.5,tn.z],[.66,.5,.55]),Ti([tn.x+.32,tn.y+1.78,tn.z-.24],[.21,.81,.22]),js=new ee,js.position.set(tn.x,tn.y,tn.z+.66),js.visible=!1,zt.add(js);let h=[16733986,16747303,16761678,16769162];for(let u=0;u<13;u++){let d=new hn({color:h[u%h.length],transparent:!0,opacity:0,depthWrite:!1,side:Ce,blending:_c}),f=new rt(new Gc(.1+u%3*.025,0),d);f.visible=!1,js.add(f),Km.push({mesh:f,phase:Math.random()*Math.PI*2,rate:1.35+Math.random()*1.45,spread:.03+Math.random()*.11})}ya=new Wo(16746296,0,5.3,2),ya.position.set(tn.x,tn.y+.92,tn.z+.92),zt.add(ya)}LS();var qA=[new Z({color:10926262,roughness:.73,metalness:.14}),new Z({color:12753512,roughness:.76,metalness:.1})],Jd=new Z({color:5399911,roughness:.63,metalness:.22}),Qm=[new Z({color:7916220,roughness:.45,metalness:.12,emissive:1194549,emissiveIntensity:.25}),new Z({color:15044177,roughness:.5,metalness:.12,emissive:3743763,emissiveIntensity:.2})];function zS(i,t){if(i==="head")return new Hn(t[0]/2,14,10);if(i.includes("hand"))return new St(t[0],t[1],t[2]);if(i.includes("foot"))return new St(t[0],t[1],t[2]);if(i==="torso")return new St(t[0],t[1],t[2]);if(i==="pelvis")return new St(t[0],t[1],t[2]);let e=Math.min(t[0],t[2])*.48,n=Math.max(.03,t[1]-2*e);return new ta(e,n,3,9)}function DS(i,t,e,n,s,o=i.skin,r=null){let a=new At({mass:n,type:At.KINEMATIC,material:Nm,position:new M(s[0],s[1],s[2]),collisionFilterGroup:zm,collisionFilterMask:io,angularDamping:.42,linearDamping:.12,allowSleep:!0,sleepSpeedLimit:.1,sleepTimeLimit:.55});a.addShape(new un(new M(e[0]/2,e[1]/2,e[2]/2))),a.gameMeta={kind:i.metaKind||"mannequin",human:i,key:t,body:a},Dt.addBody(a);let c=new ee,l=new rt(r||zS(t,e),o);if(c.add(l),t==="torso"){let u=new rt(new St(e[0]*.42,e[1]*.24,.018),Qm[i.colorIndex]);u.position.set(0,.04,e[2]/2+.009),c.add(u);let d=new rt(new St(e[0]*.26,.022,.02),Jd);d.position.set(0,-.06,e[2]/2+.012),c.add(d)}if(t==="head"){let u=new rt(new St(e[0]*.44,.026,.012),Jd);u.position.set(0,.005,e[2]/2-.008),c.add(u)}if(t.startsWith("hand")){let u=new rt(new St(.038,.09,.045),o);u.position.set(t.endsWith("L")?.062:-.062,.003,.002),c.add(u)}if(t.startsWith("foot")){let u=new rt(new St(e[0]*.78,e[1]*.45,.022),Jd);u.position.set(0,-.01,e[2]/2-.012),c.add(u)}c.position.copy(a.position),c.quaternion.copy(a.quaternion),zt.add(c),Kl(c,a.gameMeta);let h={key:t,body:a,visual:c,mass:n,size:e};return i.parts.push(h),i.partMap[t]=h,Sn.push({body:a,visual:c}),h}function xs(i,t,e,n,s,o,r=.35,a=[0,1,0],c=2600){let l=i.partMap[t].body,h=i.partMap[e].body,u=new hl(l,h,{pivotA:new M(...n),pivotB:new M(...s),axisA:new M(...a),axisB:new M(...a),angle:o,twistAngle:r,maxForce:c,collideConnected:!1});return Dt.addConstraint(u),i.constraints.push(u),u}function BS(){let i=ye.auntZina,t=new ee;t.name="npc-aunt-zina",t.userData.npcId="aunt-zina",t.position.set(i.x,Wt(i.x),i.z),t.rotation.y=i.yaw,zt.add(t);let e=new Z({color:4543816,roughness:.94}),n=new Z({color:3160625,roughness:.9}),s=new Z({color:10180411,roughness:.88}),o=new Z({color:6911343,roughness:.96}),r=new Z({color:9869453,roughness:.95}),a=new Z({color:13938065,roughness:.92}),c=new Z({color:2698280,roughness:.83}),l=new Z({color:3748654,roughness:.8}),h=new Z({color:13939832,roughness:.68,metalness:.16}),u=(x,g,p,y=t)=>{let _=new rt(x,g);return _.position.set(...p),_.castShadow=!0,_.receiveShadow=!0,y.add(_),_};u(new sn(.19,.31,.62,9),e,[0,.51,0]),u(new St(.52,.57,.34),e,[0,1.055,0]),u(new St(.5,.035,.36),n,[0,.84,0]);for(let x of[-1,1]){let g=u(new ta(.078,.35,4,8),e,[x*.29,1,.015]);g.rotation.z=x*-.11,u(new Hn(.078,10,8),s,[x*.32,.7,.035]);let p=u(new St(.16,.2,.32),c,[x*.13,.11,.035]);p.rotation.y=-.05}for(let x of[1.12,.94,.76])u(new Hn(.024,8,6),h,[0,x,.176]);u(new sn(.115,.13,.14,9),s,[0,1.39,0]);let d=new ee;d.name="aunt-zina-head",d.userData.npcPart="head",d.position.set(0,1.59,.005),t.add(d),u(new Hn(.18,14,10),a,[0,0,0],d).scale.set(.86,1,.83),u(new Hn(.205,12,8,0,Math.PI*2,0,Math.PI*.62),o,[0,.055,-.012],d);for(let x of[-1,1]){u(new Hn(.061,9,7),r,[x*.145,-.035,-.015],d),u(new Hn(.018,8,6),l,[x*.052,.02,.137],d);let g=u(new St(.045,.008,.008),r,[x*.052,.051,.139],d);g.rotation.z=x*-.08}u(new Hn(.026,8,6),a,[0,-.005,.155],d),u(new St(.052,.009,.01),l,[0,-.072,.136],d);let m=u(new St(.16,.2,.035),s,[.12,1.3,-.12]);return m.rotation.z=-.12,{root:t,head:d,homeX:t.position.x,homeY:t.position.y,homeZ:t.position.z,bodyYaw:i.yaw}}function FS(i){let t=$.position.x-$i.root.position.x,e=$.position.z-$i.root.position.z,n=Math.hypot(t,e),s=Math.sin(Ar*.32)*.18,o=0;if(n<42){let c=Math.atan2(t,e)-$i.bodyYaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;s=Tt.clamp(c,-1,1);let l=$.position.y+.62;o=Tt.clamp(-Math.atan2(l-($i.root.position.y+$i.head.position.y),Math.max(.1,n)),-.22,.22)}let r=s-$i.head.rotation.y;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;let a=Math.min(1,Math.max(0,i)*4.2);$i.head.rotation.y+=r*a,$i.head.rotation.x+=(o-$i.head.rotation.x)*a}var US={pelvis:[0,.84,0,.08,0,0],torso:[0,1.28,.025,.08,0,0],head:[0,1.69,.025,0,0,0],upperArmL:[-.31,1.18,.045,-.12,0,-.04],lowerArmL:[-.34,.94,.16,-.72,0,0],handL:[-.35,.77,.29,-.55,0,0],upperArmR:[.31,1.18,.045,-.12,0,.04],lowerArmR:[.34,.94,.16,-.72,0,0],handR:[.35,.77,.29,-.55,0,0],thighL:[-.125,.49,.055,0,0,0],shinL:[-.13,.14,-.115,-Math.PI/2,0,0],footL:[-.13,.065,-.3,0,0,0],thighR:[.125,.49,.055,0,0,0],shinR:[.13,.14,-.115,-Math.PI/2,0,0],footR:[.13,.065,-.3,0,0,0]},OS={pelvis:[0,.26,0,0,0,0],torso:[0,.42,.08,Math.PI/2,0,0],head:[0,.43,.49,Math.PI/2,0,0],upperArmL:[-.29,.32,.16,Math.PI/2,0,-.06],lowerArmL:[-.3,.18,.35,Math.PI/2,0,0],handL:[-.3,.1,.49,Math.PI/2,0,0],upperArmR:[.29,.32,.16,Math.PI/2,0,.06],lowerArmR:[.3,.18,.35,Math.PI/2,0,0],handR:[.3,.1,.49,Math.PI/2,0,0],thighL:[-.125,.22,-.17,-Math.PI/2,0,0],shinL:[-.13,.14,-.48,-Math.PI/2,0,0],footL:[-.13,.065,-.73,0,0,0],thighR:[.125,.22,-.17,-Math.PI/2,0,0],shinR:[.13,.14,-.48,-Math.PI/2,0,0],footR:[.13,.065,-.73,0,0,0]};function Ul(i){let t=i.walkPhase,e=Object.fromEntries(Object.entries(OS).map(([o,r])=>[o,r.slice()])),n=Math.sin(t)*.035,s=Math.sin(t+Math.PI)*.035;return e.upperArmL[2]+=n,e.lowerArmL[2]+=n*.65,e.handL[2]+=n*.35,e.upperArmR[2]+=s,e.lowerArmR[2]+=s*.65,e.handR[2]+=s*.35,e.thighL[2]-=s*.8,e.shinL[2]-=s*.4,e.thighR[2]-=n*.8,e.shinR[2]-=n*.4,Af(i,e)}function HS(i,t="idle"){let e={},n=i.walkPhase,s=t==="walk"||t==="attack",o=t==="attack"?Math.sin(Tt.clamp(i.stateTime/.74,0,1)*Math.PI):0;for(let r of i.parts){let a=r.restLocal,c=[a.x,a.y,a.z,0,0,0];if(r.key==="pelvis"&&s&&(c[1]+=Math.sin(n*2)*.014),r.key==="torso"&&s&&(c[1]+=Math.sin(n*2+.4)*.018),r.key==="head"&&s&&(c[1]+=Math.sin(n*2+.7)*.012),s&&/^(thigh|shin|foot)[LR]$/.test(r.key)){let l=r.key.endsWith("L")?-1:1,h=Math.sin(n+(l>0?Math.PI:0));r.key.startsWith("thigh")?(c[2]+=h*.105,c[3]=-h*.3):r.key.startsWith("shin")?(c[2]-=h*.045,c[3]=Math.max(0,h)*.3):(c[2]+=h*.05,c[3]=-h*.12)}if(s&&/^(upperArm|lowerArm|hand)[LR]$/.test(r.key)){let l=r.key.endsWith("L")?-1:1,h=Math.sin(n+(l>0?Math.PI:0));c[2]-=h*(r.key.startsWith("upperArm")?.085:.045),c[3]=-h*(r.key.startsWith("upperArm")?.4:.18)}if(t==="attack"&&/^(upperArm|lowerArm|hand)[LR]$/.test(r.key)){let l=r.key.endsWith("L")?-1:1;l===i.punchSide?r.key.startsWith("upperArm")?(c[0]=l*.31,c[1]=1.43,c[2]=.12+o*.11,c[3]=-.92*o):r.key.startsWith("lowerArm")?(c[0]=l*.33,c[1]=1.22,c[2]=.27+o*.2,c[3]=-1.12*o):(c[0]=l*.35,c[1]=1.08,c[2]=.44+o*.26,c[3]=-.75*o):r.key.startsWith("upperArm")?(c[1]=1.37,c[2]=.06,c[3]=-.26):r.key.startsWith("lowerArm")?(c[1]=1.18,c[2]=.14,c[3]=-.48):(c[1]=1.02,c[2]=.2,c[3]=-.38)}e[r.key]=c}return e}function Af(i,t){let e={},n=Math.cos(i.yaw),s=Math.sin(i.yaw),o=new De;o.setFromAxisAngle(new M(0,1,0),i.yaw);for(let r of i.parts){let a=t[r.key]||[r.restLocal.x,r.restLocal.y,r.restLocal.z,0,0,0],c=new De;c.setFromEuler(a[3]||0,a[4]||0,a[5]||0,"XYZ");let l=new De;o.mult(c,l),e[r.key]={position:new M(i.rootX+a[0]*n+a[2]*s,Wt(i.rootX)+a[1],i.rootZ-a[0]*s+a[2]*n),quaternion:l}}return e}function bi(i,t="idle"){return Af(i,HS(i,t))}function tg(i){return Af(i,US)}function Jl(i){let t={};for(let e of i.parts)t[e.key]={position:e.body.position.clone(),quaternion:e.body.quaternion.clone()};return t}function Oa(i,t){for(let e of i.parts){let n=e.body;n.type=t,n.mass=e.mass,n.updateMassProperties(),n.force.set(0,0,0),n.torque.set(0,0,0),n.velocity.set(0,0,0),n.angularVelocity.set(0,0,0),n.wakeUp()}Dt.broadphase.dirty=!0}function Gn(i,t,e){let n=Math.max(.001,e);for(let s of i.parts){let o=s.body,r=t[s.key];o.velocity.set(Tt.clamp((r.position.x-o.position.x)/n,-9,9),Tt.clamp((r.position.y-o.position.y)/n,-9,9),Tt.clamp((r.position.z-o.position.z)/n,-9,9)),o.quaternion.copy(r.quaternion),o.angularVelocity.set(0,0,0),o.force.set(0,0,0),o.torque.set(0,0,0),o.aabbNeedsUpdate=!0,o.wakeUp()}Dt.broadphase.dirty=!0}function fr(i,t,e,n,s){let o=Tt.smoothstep(n,0,1),r=Math.max(.001,s);for(let a of i.parts){let c=a.body,l=t[a.key],h=e[a.key],u=Tt.lerp(l.position.x,h.position.x,o),d=Tt.lerp(l.position.y,h.position.y,o),f=Tt.lerp(l.position.z,h.position.z,o);c.velocity.set(Tt.clamp((u-c.position.x)/r,-9,9),Tt.clamp((d-c.position.y)/r,-9,9),Tt.clamp((f-c.position.z)/r,-9,9)),l.quaternion.slerp(h.quaternion,o,c.quaternion),c.angularVelocity.set(0,0,0),c.force.set(0,0,0),c.torque.set(0,0,0),c.aabbNeedsUpdate=!0,c.wakeUp()}Dt.broadphase.dirty=!0}function kS(i){let t=i.partMap.pelvis.body.position;i.rootX=Tt.clamp(t.x,Lt.minX+2,Lt.maxX-2),i.rootZ=Tt.clamp(t.z,Lt.minZ+2,Lt.maxZ-2);let e=i.behavior==="peaceful"?Tt.clamp(i.rootX+(i.rootX<0?-2.6:2.6),Lt.minX+3,Lt.maxX-3):$.position.x,n=i.behavior==="peaceful"?i.rootZ+.05:$.position.z;i.yaw=Math.atan2(e-i.rootX,n-i.rootZ),i.recoveryFrom=Jl(i),i.kneelingPose=tg(i),i.standingPose=bi(i,"idle"),i.state="recovering-to-knees",i.stateTime=0,Oa(i,At.KINEMATIC)}function VS(i){let t=i.partMap.pelvis.body.position;i.rootX=Tt.clamp(t.x,Lt.minX+2,Lt.maxX-2),i.rootZ=Tt.clamp(t.z,Lt.minZ+2,Lt.maxZ-2);let e=i.rootX-$.position.x,n=i.rootZ-$.position.z,s=Math.hypot(e,n);s>.1?(e/=s,n/=s):(e=0,n=1),i.yaw=Math.atan2(e,n),i.crawlTarget={x:Tt.clamp(i.rootX+e*5,Lt.minX+2,Lt.maxX-2),z:Tt.clamp(i.rootZ+n*5,Lt.minZ+2,Lt.maxZ-2)},i.crawlFrom=Jl(i),i.state="crawling",i.stateTime=0,i.walkPhase=0,i.crawlBlend=0,Oa(i,At.KINEMATIC)}function GS(i){if(i.stateTime=0,i.walkPhase=0,i.navDirection=null,i.behavior==="peaceful"){let t=i.rootX<0?-1:1;i.wanderTarget={x:Tt.clamp(i.rootX+t*2.6,Lt.minX+3,Lt.maxX-3),z:Tt.clamp(i.rootZ+.12,Lt.minZ+3,Lt.maxZ-3)},i.state="walking-away"}else i.state="chasing"}function WS(i,t,e){let n=Math.hypot(t,e);if(n<1e-4)return{x:0,z:0};t/=n,e/=n;let s=[0,.38,-.38,.76,-.76,1.18,-1.18,1.62,-1.62],o={x:t,z:e,score:-1/0};for(let r of s){let a=Math.cos(r),c=Math.sin(r),l=t*a-e*c,h=t*c+e*a,u=(l*t+h*e)*2.1;i.navDirection&&(u+=(l*i.navDirection.x+h*i.navDirection.z)*.24);for(let d of Sn){let f=d.body,m=f.gameMeta;if(m?.kind!=="prop"||m.isStored||m.isHeld)continue;let x=f.position.x-i.rootX,g=f.position.z-i.rootZ,p=x*l+g*h;if(p<-.15||p>2.1)continue;let y=Math.abs(x*h-g*l),_=Math.min(1.35,Math.max(.36,f.boundingRadius||.55))+.38;if(y<_){let v=Tt.clamp((2.1-Math.max(0,p))/1.75,.35,1.45);u-=(_-y)*2.2*v}}u>o.score&&(o={x:l,z:h,score:u})}return i.navDirection={x:o.x,z:o.z},o}function Rl(i,t,e,n){if(Math.hypot(t,e)<1e-4)return;let o=Math.atan2(t,e)-i.yaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;i.yaw+=Tt.clamp(o,-n*5.5,n*5.5)}function vm(i,t,e,n,s){let o=t-i.rootX,r=e-i.rootZ,a=Math.hypot(o,r);if(a<.025)return a;let c=WS(i,o,r);Rl(i,c.x,c.z,s);let l=Math.min(a,n*s);return i.rootX=Tt.clamp(i.rootX+c.x*l,Lt.minX+2,Lt.maxX-2),i.rootZ=Tt.clamp(i.rootZ+c.z*l,Lt.minZ+2,Lt.maxZ-2),i.walkPhase+=s*(n+1.8),a}function eg(i){let t=0,e=0;for(let n of i.parts)t=Math.max(t,n.body.velocity.length()),e=Math.max(e,n.body.angularVelocity.length());return t<.58&&e<1.15}function qS(i){for(let t of DE){if(t.hitFlash=Math.max(0,t.hitFlash-i),t.dead||!t.active)continue;if(t.attackCooldown=Math.max(0,t.attackCooldown-i),t.state==="falling"){t.stateTime+=i,t.quietTime=eg(t)?t.quietTime+i:0,t.stateTime>=1.15&&(t.quietTime>=.58||t.stateTime>=3.85)&&(t.crawlAfterFall?VS(t):kS(t));continue}if(t.state==="crawling"){t.stateTime+=i,t.walkPhase+=i*4.1;let o=Ul(t);if(t.crawlBlend<1){t.crawlBlend=Math.min(1,t.crawlBlend+i/.46),fr(t,t.crawlFrom,o,t.crawlBlend,i);continue}let r=t.crawlTarget.x-t.rootX,a=t.crawlTarget.z-t.rootZ,c=Math.hypot(r,a);if(c>.04){t.yaw=Math.atan2(r,a);let l=Math.min(c,.62*i);t.rootX=Tt.clamp(t.rootX+r/c*l,Lt.minX+2,Lt.maxX-2),t.rootZ=Tt.clamp(t.rootZ+a/c*l,Lt.minZ+2,Lt.maxZ-2)}Gn(t,Ul(t),i);continue}if(t.state==="recovering-to-knees"){t.stateTime+=i,fr(t,t.recoveryFrom,t.kneelingPose,t.stateTime/1.2,i),t.stateTime>=1.2&&(t.state="kneeling-hold",t.stateTime=0);continue}if(t.state==="kneeling-hold"){t.stateTime+=i,Gn(t,t.kneelingPose,i),t.stateTime>=.48&&(t.state="recovering-to-feet",t.stateTime=0);continue}if(t.state==="recovering-to-feet"){t.stateTime+=i,fr(t,t.kneelingPose,t.standingPose,t.stateTime/1.08,i),t.stateTime>=1.08&&GS(t);continue}if(t.state==="walking-away"){let o=vm(t,t.wanderTarget.x,t.wanderTarget.z,1.35,i);o<.24&&(t.state="idle-after",t.stateTime=0),Gn(t,bi(t,o>.24?"walk":"idle"),i);continue}if(t.state==="idle-after"){t.stateTime+=i,Gn(t,bi(t,"idle"),i);continue}if(t.behavior!=="aggressive")continue;let e=$.position.x-t.rootX,n=$.position.z-t.rootZ,s=Math.hypot(e,n);if(t.state==="attacking"){if(t.stateTime+=i,Rl(t,e,n,i),s>1.95&&t.stateTime<.28){t.state="chasing",t.stateTime=0,Gn(t,bi(t,"walk"),i);continue}Gn(t,bi(t,"attack"),i),!t.attackHitDone&&t.stateTime>=.27&&(t.attackHitDone=!0,s<=1.55&&vg(8,"torso",new N(e,0,n).normalize())),t.stateTime>=.74&&(t.state="chasing",t.stateTime=0);continue}if(s<=1.35&&t.attackCooldown<=0){t.state="attacking",t.stateTime=0,t.attackHitDone=!1,t.attackCooldown=1.35,t.punchSide*=-1,Rl(t,e,n,i),Gn(t,bi(t,"attack"),i);continue}s>1.05?(vm(t,$.position.x,$.position.z,2.9,i),Gn(t,bi(t,"walk"),i)):(Rl(t,e,n,i),Gn(t,bi(t,"idle"),i))}}var _a=new M(ye.stop.x,Wt(ye.stop.x)+.87,ye.stop.z+4),$=new At({mass:72,material:Xl,position:_a.clone(),collisionFilterGroup:mr,collisionFilterMask:io&~mr,fixedRotation:!0,linearDamping:.02,angularDamping:1,allowSleep:!1});$.addShape(new Xs(.31,.31,1.08,12));$.addShape(new Qo(.31),new M(0,.53,0));$.addShape(new Qo(.31),new M(0,-.53,0));$.gameMeta={kind:"player"};Dt.addBody($);var $i=BS(),Ql=!1,uf=dm(ye,ha),XS={x:ye.shop.x,z:ye.shop.z-ye.shop.depth/2-.72},YS={x:ye.hangars[0].x,z:ye.hangars[0].z+ye.hangars[0].depth/2+6.2},Rf=fm(ye,Wd),Ma=new Set,Qd=0,wl=0,Ol=[{coat:5068120,trousers:3423038},{coat:5857636,trousers:3883846},{coat:4278861,trousers:3159609},{coat:6449514,trousers:4344139},{coat:4870483,trousers:3685952},{coat:5593947,trousers:3883330}].map(i=>({coat:new Z({color:i.coat,roughness:.9}),trousers:new Z({color:i.trousers,roughness:.93})})),Hl=new Z({color:12296586,roughness:.94}),ng=new Z({color:3159608,roughness:.92}),ig=new Z({color:3158836,roughness:.92}),_m=[6444874,7828843,4868677].map(i=>new Z({color:i,roughness:.95})),Ue={torso:new St(.54,.68,.36),pelvis:new St(.44,.26,.32),collar:new St(.32,.14,.36),neck:new St(.16,.12,.16),head:new St(.4,.42,.38),hair:new St(.41,.1,.39),upperArm:new St(.2,.4,.2),lowerArm:new St(.18,.37,.18),hand:new St(.16,.14,.16),thigh:new St(.23,.44,.24),shin:new St(.19,.4,.2),boot:new St(.24,.14,.32)};function $S(i,t){return i===0?t.home:i===1?XS:YS}function Cl(i,t){i.targetIndex=(t%3+3)%3;let e=$S(i.targetIndex,i);i.path=Yd(uf,{x:i.x,z:i.z},e),i.pathIndex=i.path.length>1?1:0,i.state="walking",i.fleeing=!1,i.fleeTimer=0,i.fleeTarget=null,i.fleePath=null,i.fleePathIndex=0}for(let i of Rf)Cl(i,i.targetIndex);function Vn(i,t,e,n,s=null){let o=new rt(t,e);return o.position.set(n[0],n[1],n[2]),o.castShadow=!1,o.receiveShadow=!1,s&&(o.userData.gameMeta=s),i.add(o),o}function ZS(i){let t=Ol[i.styleIndex%Ol.length],e=c=>({kind:"resident",human:i,key:c}),n=new ee;n.name=`village-${i.id}`,n.userData.residentId=i.id;let s=new ee;n.add(s),Vn(s,Ue.pelvis,t.trousers,[0,.76,0],e("torso")),Vn(s,Ue.torso,t.coat,[0,1.12,0],e("torso")),Vn(s,Ue.collar,t.coat,[0,1.43,0],e("torso")),Vn(s,Ue.neck,Hl,[0,1.48,0],e("head"));let o=new ee;o.position.set(0,1.54,0),s.add(o),Vn(o,Ue.head,Hl,[0,.2,0],e("head")),Vn(o,Ue.hair,_m[i.styleIndex%_m.length],[0,.4,-.005],e("head"));let r=[];for(let c of[-1,1]){let l=c<0?"left":"right",h=new ee;h.position.set(c*.29,1.39,0),s.add(h),Vn(h,Ue.upperArm,t.coat,[0,-.18,0],e(`arm-${l}`));let u=new ee;u.position.y=-.35,h.add(u),Vn(u,Ue.lowerArm,t.coat,[0,-.17,0],e(`arm-${l}`)),Vn(u,Ue.hand,ng,[0,-.39,0],e(`arm-${l}`)),r.push(h)}let a=[];for(let c of[-1,1]){let l=c<0?"left":"right",h=new ee;h.position.set(c*.115,.82,0),s.add(h),Vn(h,Ue.thigh,t.trousers,[0,-.21,0],e(`leg-${l}`));let u=new ee;u.position.y=-.41,h.add(u),Vn(u,Ue.shin,t.trousers,[0,-.18,0],e(`leg-${l}`)),Vn(u,Ue.boot,ig,[0,-.39,.06],e(`leg-${l}`)),a.push(h)}return n.position.set(i.x,Wt(i.x),i.z),n.rotation.y=i.yaw,zt.add(n),En.push(n),{root:n,body:s,head:o,arms:r,legs:a}}function jS(i){let t=Ol[i.styleIndex%Ol.length],e={id:i.id,resident:i,metaKind:"resident",origin:[i.x,0,i.z],colorIndex:i.styleIndex%Qm.length,skin:Hl,parts:[],partMap:{},constraints:[],active:!0,dead:!1,health:i.health??100,state:"falling",stateTime:0,quietTime:0,hitFlash:0,rootX:i.x,rootZ:i.z,yaw:i.yaw,walkPhase:i.walkPhase,crawlAfterFall:!1},n=Wt(i.x),s=Math.cos(i.yaw),o=Math.sin(i.yaw),r=(l,h,u)=>[i.x+l*s+u*o,n+h,i.z-l*o+u*s],a=new De;a.setFromAxisAngle(new M(0,1,0),i.yaw);let c=(l,h,u,d,f,m,x,g)=>{let p=DS(e,l,h,u,r(d,f,m),x,g);return p.body.quaternion.copy(a),p.body.previousQuaternion.copy(a),p.body.interpolatedQuaternion.copy(a),p.visual.quaternion.copy(a),p.body.aabbNeedsUpdate=!0,p.restLocal={x:d,y:f,z:m},p.restQuaternion=new De,p};c("pelvis",[.44,.26,.32],4,0,.76,0,t.trousers,Ue.pelvis),c("torso",[.54,.68,.36],8.8,0,1.12,0,t.coat,Ue.torso),c("head",[.4,.42,.38],3,0,1.74,0,Hl,Ue.head);for(let l of[-1,1]){let h=l<0?"L":"R";c(`upperArm${h}`,[.2,.4,.2],2,l*.29,1.21,0,t.coat,Ue.upperArm),c(`lowerArm${h}`,[.18,.37,.18],1.3,l*.29,.87,0,t.coat,Ue.lowerArm),c(`hand${h}`,[.16,.14,.16],.5,l*.29,.65,.02,ng,Ue.hand),c(`thigh${h}`,[.23,.44,.24],3.8,l*.115,.61,0,t.trousers,Ue.thigh),c(`shin${h}`,[.19,.4,.2],2.1,l*.13,.23,.01,t.trousers,Ue.shin),c(`foot${h}`,[.24,.14,.32],.85,l*.13,.06,.075,ig,Ue.boot)}xs(e,"pelvis","torso",[0,.13,0],[0,-.34,0],.32,.28),xs(e,"torso","head",[0,.34,0],[0,-.21,0],.42,.32);for(let l of[-1,1]){let h=l<0?"L":"R";xs(e,"torso",`upperArm${h}`,[l*.27,.25,0],[-l*.1,.2,0],1.2,.76,[1,0,0]),xs(e,`upperArm${h}`,`lowerArm${h}`,[0,-.2,0],[0,.185,0],.15,2.05,[1,0,0]),xs(e,`lowerArm${h}`,`hand${h}`,[0,-.185,0],[0,.07,0],.38,.44,[1,0,0]),xs(e,"pelvis",`thigh${h}`,[l*.115,-.04,0],[0,.22,0],.98,.5,[1,0,0]),xs(e,`thigh${h}`,`shin${h}`,[0,-.22,0],[0,.2,-.005],.13,1.98,[1,0,0]),xs(e,`shin${h}`,`foot${h}`,[0,-.2,0],[0,.04,-.075],.3,.38,[1,0,0])}return i.health??(i.health=100),i.injuries??(i.injuries={}),i.ragdoll=e,i.visual?.root&&(Tf(i.visual.root),i.visual.root.visible=!1),Oa(e,At.DYNAMIC),e}function KS(i,t=!0){let e=i.ragdoll;if(e){for(let n of e.constraints)Dt.removeConstraint(n);for(let n of e.parts){Dt.removeBody(n.body),zt.remove(n.visual),Tf(n.visual);let s=Sn.findIndex(o=>o.body===n.body);s>=0&&Sn.splice(s,1)}e.constraints.length=0,e.parts.length=0,e.partMap={},i.ragdoll=null,t&&!i.dead&&i.visual?.root&&(i.visual.root.position.set(i.x,Wt(i.x),i.z),i.visual.root.rotation.y=i.yaw,i.visual.root.visible=!0,i.visual.root.parent||zt.add(i.visual.root),En.push(i.visual.root)),Dt.broadphase.dirty=!0}}function JS(){let i=$.position.x,t=$.position.z,e=pm(Rf,i,t,xl,qd).filter(a=>!a.dead),n=new Set(e),s=Xd*Xd;for(let a of Ma){if(a.dead)continue;let c=a.x-i,l=a.z-t;c*c+l*l<=s&&n.add(a)}let o=[...n].sort((a,c)=>{let l=a.x-i,h=a.z-t,u=c.x-i,d=c.z-t;return l*l+h*h-(u*u+d*d)||a.index-c.index}).slice(0,xl),r=new Set(o);for(let a of Ma)r.has(a)||(a.ragdoll&&KS(a,!1),a.visual?.root&&(Tf(a.visual.root),zt.remove(a.visual.root)),a.visual=null,a.active=!1);for(let a of o)a.visual||(a.visual=ZS(a)),a.active=!0;Ma=r}function QS(){let i=!!Oe||!!Yt?.gameMeta?.weaponId,t=Ql||ke.has("ShiftLeft")||ke.has("ShiftRight")||Math.hypot(dn.x,dn.y)>.84;return i&&(t||Math.hypot($.velocity.x,$.velocity.z)>5.2)}function Mm(i,t,e,n){let s=t.x-i.x,o=t.z-i.z,r=Math.hypot(s,o);if(r<.035)return!0;i.yaw=Math.atan2(s,o);let a=Math.min(r,e*n);return i.x+=s/r*a,i.z+=o/r*a,r<=a+.035}function tT(i){let t=i.x-$.position.x,e=i.z-$.position.z,n=Math.hypot(t,e),s=n>.1?n:1,o=n>.1?{x:t/s,z:e/s}:{x:Math.sin(i.index*2.399963229728653),z:Math.cos(i.index*2.399963229728653)},r=uf.nodes.map(a=>{let c=a.x-i.x,l=a.z-i.z,h=Math.hypot(a.x-$.position.x,a.z-$.position.z),u=Math.hypot(c,l),d=c*o.x+l*o.z;return{node:a,playerDistance:h,routeDistance:u,outwardProgress:d,score:h+d*.32-u*.08}}).filter(a=>a.routeDistance>=7&&a.routeDistance<=38&&a.playerDistance>=n+5&&a.outwardProgress>=2).sort((a,c)=>c.score-a.score||a.routeDistance-c.routeDistance);for(let a of r.slice(0,16)){let c=Yd(uf,{x:i.x,z:i.z},a.node);if(!(c.length<2))return i.fleePath=c,i.fleePathIndex=1,i.fleeTarget=c.at(-1),i.fleeing=!0,i.fleeTimer=Tt.clamp(c.length*.42,3.5,7),i.dwellTimer=0,!0}return!1}function df(i,t,e=!1){if(i.dead||i.ragdoll)return;if(e&&Math.hypot(i.x-$.position.x,i.z-$.position.z)<28&&(!i.fleeing||i.fleeTimer<.75)&&tT(i),i.fleeing&&i.fleePath){i.state="fleeing",i.fleeTimer=Math.max(0,i.fleeTimer-t);let s=i.fleePath[i.fleePathIndex];!s||i.fleeTimer<=0?Cl(i,i.targetIndex):Mm(i,s,i.moveSpeed*3.05,t)&&(i.fleePathIndex++,i.fleePathIndex>=i.fleePath.length&&Cl(i,i.targetIndex)),i.walkPhase+=t*i.moveSpeed*10;return}if(i.dwellTimer>0){i.dwellTimer=Math.max(0,i.dwellTimer-t),i.state="idle",i.dwellTimer===0&&i.pathIndex>=i.path.length&&Cl(i,(i.targetIndex+1)%3);return}if(i.pathIndex>=i.path.length){i.currentLocation=i.targetIndex,i.dwellTimer=2.5+i.index%6*.55,i.state="idle";return}let n=i.path[i.pathIndex];if(Mm(i,n,i.moveSpeed,t)&&i.pathIndex++,i.walkPhase+=t*i.moveSpeed*3.5,i.state="walking",i.pathIndex>=i.path.length){i.currentLocation=i.targetIndex,i.dwellTimer=2.5+i.index%6*.55,i.state="idle";return}}function eT(i,t){let e=i.visual;if(!e)return;let{root:n,head:s,arms:o,legs:r}=e,a=i.state==="walking"||i.state==="fleeing",c=a?i.state==="fleeing"?.9:.48:.025,l=i.walkPhase;o[0].rotation.x=Math.sin(l)*c,o[1].rotation.x=-Math.sin(l)*c,r[0].rotation.x=-Math.sin(l)*c,r[1].rotation.x=Math.sin(l)*c;let h=a?Math.abs(Math.sin(l*2))*(i.state==="fleeing"?.055:.022):0;n.position.set(i.x,Wt(i.x)+h,i.z),n.rotation.y=i.yaw;let u=$.position.x-i.x,d=$.position.z-i.z;if(Math.hypot(u,d)<34){let f=Math.atan2(u,d)-i.yaw;f=Tt.euclideanModulo(f+Math.PI,Math.PI*2)-Math.PI,s.rotation.y=Tt.damp(s.rotation.y,Tt.clamp(f,-.85,.85),4.5,t)}else s.rotation.y=Tt.damp(s.rotation.y,0,2.5,t)}function nT(i,t){if(i.partMap[t])return i.partMap[t];let e=/^(arm|leg)-(left|right)$/.exec(t);if(!e)return i.partMap.torso;let n=e[2]==="left"?"L":"R";return i.partMap[e[1]==="arm"?`lowerArm${n}`:`shin${n}`]||i.partMap.torso}function iT(i){let t=i.ragdoll,e=t.partMap.pelvis.body.position;t.rootX=Tt.clamp(e.x,Lt.minX+2,Lt.maxX-2),t.rootZ=Tt.clamp(e.z,Lt.minZ+2,Lt.maxZ-2),i.x=t.rootX,i.z=t.rootZ;let n=i.x-$.position.x,s=i.z-$.position.z,o=Math.hypot(n,s);o>.1?(n/=o,s/=o):(n=Math.sin(i.index*2.399963229728653),s=Math.cos(i.index*2.399963229728653)),t.yaw=Math.atan2(n,s),t.crawlTarget={x:Tt.clamp(t.rootX+n*6,Lt.minX+2,Lt.maxX-2),z:Tt.clamp(t.rootZ+s*6,Lt.minZ+2,Lt.maxZ-2)},t.crawlFrom=Jl(t),t.state="crawling",t.stateTime=0,t.walkPhase=0,t.crawlBlend=0,i.state="crawling",Oa(t,At.KINEMATIC)}function sT(i){let t=i.ragdoll,e=t.partMap.pelvis.body.position;t.rootX=Tt.clamp(e.x,Lt.minX+2,Lt.maxX-2),t.rootZ=Tt.clamp(e.z,Lt.minZ+2,Lt.maxZ-2),i.x=t.rootX,i.z=t.rootZ,t.yaw=i.yaw,t.recoveryFrom=Jl(t),t.kneelingPose=tg(t),t.standingPose=bi(t,"idle"),t.state="recovering-to-knees",t.stateTime=0,i.state="recovering",Oa(t,At.KINEMATIC)}function oT(i){let t=i.ragdoll;i.x=t.rootX,i.z=t.rootZ,i.yaw=t.yaw,i.state="idle",t.state="standing",t.stateTime=0,t.walkPhase=i.walkPhase}function rT(i,t,e){let n=i.ragdoll;if(!(!n||n.state==="dead")){if(n.state==="falling"){n.stateTime+=t,n.quietTime=eg(n)?n.quietTime+t:0,n.stateTime>=.82&&(n.quietTime>=.32||n.stateTime>=3.4)&&(n.crawlAfterFall?iT(i):sT(i));return}if(n.state==="recovering-to-knees"){n.stateTime+=t,fr(n,n.recoveryFrom,n.kneelingPose,n.stateTime/1,t),n.stateTime>=1&&(n.state="kneeling-hold",n.stateTime=0);return}if(n.state==="kneeling-hold"){n.stateTime+=t,Gn(n,n.kneelingPose,t),n.stateTime>=.35&&(n.state="recovering-to-feet",n.stateTime=0);return}if(n.state==="recovering-to-feet"){n.stateTime+=t,fr(n,n.kneelingPose,n.standingPose,n.stateTime/.95,t),n.stateTime>=.95&&oT(i);return}if(n.state==="standing"){df(i,t,e),n.rootX=i.x,n.rootZ=i.z,n.yaw=i.yaw,n.walkPhase=i.walkPhase;let s=i.state==="walking"||i.state==="fleeing";Gn(n,bi(n,s?"walk":"idle"),t);return}if(n.state==="crawling"){n.stateTime+=t,n.walkPhase+=t*4.1;let s=Ul(n);if(n.crawlBlend<1){n.crawlBlend=Math.min(1,n.crawlBlend+t/.46),fr(n,n.crawlFrom,s,n.crawlBlend,t);return}let o=n.crawlTarget.x-n.rootX,r=n.crawlTarget.z-n.rootZ,a=Math.hypot(o,r);if(a>.04){n.yaw=Math.atan2(o,r);let c=Math.min(a,.62*t);n.rootX=Tt.clamp(n.rootX+o/a*c,Lt.minX+2,Lt.maxX-2),n.rootZ=Tt.clamp(n.rootZ+r/a*c,Lt.minZ+2,Lt.maxZ-2),i.x=n.rootX,i.z=n.rootZ,i.yaw=n.yaw}Gn(n,Ul(n),t)}}}function aT(i){if(wl+=i,wl>=.5){let e=Math.min(1.25,wl);wl=0;for(let n of Rf)n.active||df(n,e,!1)}Qd+=i,(Ma.size===0||Qd>=.4)&&(JS(),Qd=0);let t=QS();for(let e of Ma)e.ragdoll?rT(e,i,t):(df(e,i,t),eT(e,i))}var kl=!1,Vl=_a.y,Gl=0,wm=0,re=new Z({color:2699832,roughness:.46,metalness:.68}),Ot=new Z({color:1514784,roughness:.62,metalness:.42}),Ki=new Z({color:3357239,roughness:.82,metalness:.08}),Pa=new Z({color:7491637,roughness:.84,metalness:.02}),th=new Z({color:4994854,roughness:.9,metalness:.01}),ff=new Z({color:5342898,roughness:.23,metalness:.26,emissive:1057594,emissiveIntensity:.2}),Ye=new ee;Ve.add(Ye);var j=new ee;Ye.add(j);var Wn=new N(.28,-.33,-.78),qn=new xn(.25,.25,.015,"XYZ");Ye.position.copy(Wn);Ye.rotation.copy(qn);var wa=0,ba=0,Ze=null,pr=new N(0,-.145,.035),Ln=null,Ks=new N(0,-.045,-.44),bn=new ee;Ye.add(bn);var Js=0,vs=0,Nn=0,gr=0,to=0,rn=!1,Qs=0,Wl=!1,nr=0,Oe=null,Cf=new Map(pl.map(i=>[i.id,Q0(i)])),Zs=null,Na=null;function st(i,t,e,n,s=[0,0,0]){let o=new rt(new St(t[0],t[1],t[2]),n);return o.position.set(e[0],e[1],e[2]),o.rotation.set(s[0],s[1],s[2]),o.castShadow=!1,o.receiveShadow=!1,i.add(o),o}function $e(i,t,e,n,s,o=12){let r=new rt(new sn(t,t,e,o,1),s);return r.position.set(n[0],n[1],n[2]),r.rotation.x=Math.PI/2,r.castShadow=!1,r.receiveShadow=!1,i.add(r),r}var If=new Z({color:7957330,roughness:.79,metalness:.08}),Ms=new Z({color:5660773,roughness:.4,metalness:.74}),bm=new Z({color:9016474,roughness:.31,metalness:.82}),pa=new Z({color:2435625,roughness:.92,metalness:.02}),cT=new Z({color:9080717,roughness:.38,metalness:.83});function lT(){let i=new rt(new Ho(.06,.19,6),new hn({color:16760168,transparent:!0,opacity:.92}));i.rotation.x=-Math.PI/2,i.position.z=-.075,bn.add(i),bn.add(new rt(new kc(.055,0),new hn({color:16773296})));let t=new Wo(16754499,0,2.2,2);bn.add(t),bn.userData.light=t,bn.visible=!1}lT();function hT(){j.traverse(i=>{i.geometry&&i.geometry.dispose()}),j.clear(),Ze=null,Ln=null,yn=null}function uT(){st(j,[.205,.145,.46],[0,.005,.035],re),st(j,[.184,.036,.43],[0,.095,.025],Ot),st(j,[.045,.025,.47],[0,.132,-.02],re),st(j,[.11,.02,.11],[0,.158,-.15],Ot),st(j,[.018,.026,.16],[.112,.025,.035],Ot),st(j,[.055,.036,.13],[.112,.026,-.03],re),st(j,[.065,.025,.1],[-.113,.025,.105],Ot),st(j,[.06,.025,.1],[-.12,-.005,.16],re),$e(j,.033,.76,[0,.025,-.575],re,10),$e(j,.046,.13,[0,.025,-1.015],Ot,10),st(j,[.085,.065,.08],[0,.115,-.88],re),st(j,[.018,.075,.025],[0,.18,-.91],Ot),st(j,[.13,.025,.045],[0,.153,-.9],re);for(let s of[-1,1])st(j,[.012,.028,.045],[s*.043,.026,-1.015],re);st(j,[.17,.095,.36],[0,-.045,-.39],Pa),st(j,[.178,.016,.31],[0,.014,-.39],th);for(let s of[-1,1]){st(j,[.014,.022,.31],[s*.09,-.045,-.39],re);for(let o=0;o<7;o++)st(j,[.009,.013,.018],[s*.101,-.045,-.52+o*.043],Ot)}st(j,[.055,.035,.44],[0,.118,-.39],Ot),st(j,[.11,.06,.08],[0,.16,-.105],re),st(j,[.045,.047,.028],[0,.195,-.115],Ot);let i=new ee;i.position.set(0,.226,-.17),j.add(i),$e(i,.063,.28,[0,0,-.015],Ot,8),$e(i,.073,.055,[0,0,.105],re,8),$e(i,.073,.04,[0,0,-.155],re,8);let t=new rt(new gi(.053,8),ff);t.position.z=.135,i.add(t);let e=new rt(new gi(.047,8),ff);e.position.z=-.177,e.rotation.y=Math.PI,i.add(e),st(j,[.11,.025,.22],[0,.178,-.17],re),st(j,[.088,.22,.115],[.012,-.17,.165],Ki,[-.18,0,-.04]);let n=new rt(new ti(.061,.009,5,12),re);n.position.set(0,-.105,.075),j.add(n),st(j,[.018,.09,.022],[.015,-.1,.045],Ot,[.22,0,0]),Ze=new ee,pr.set(0,-.145,.035),j.add(Ze),st(Ze,[.11,.26,.17],[0,-.13,0],Ki,[-.12,0,0]),st(Ze,[.116,.035,.175],[0,-.252,-.01],Ot,[-.12,0,0]);for(let s=0;s<4;s++)st(Ze,[.115,.012,.18],[0,-.06-s*.045,0],re,[-.12,0,0]);st(j,[.105,.105,.44],[0,.015,.445],Ki),st(j,[.13,.12,.045],[0,.005,.67],Ot),st(j,[.09,.045,.24],[0,.078,.42],re),st(j,[.18,.012,.12],[0,-.048,.57],Ot)}function dT(){st(j,[.2,.15,.43],[0,.005,.035],re),st(j,[.19,.045,.39],[0,.097,.025],Ot),st(j,[.05,.025,.55],[0,.134,-.09],re),st(j,[.17,.105,.4],[0,-.025,-.39],Ki),st(j,[.19,.02,.42],[0,.045,-.38],Ot);for(let e of[-1,1]){st(j,[.015,.025,.35],[e*.095,-.025,-.4],re);for(let n=0;n<6;n++)st(j,[.012,.012,.025],[e*.105,-.025,-.55+n*.06],Ot)}$e(j,.029,.88,[0,.02,-.75],re,10),$e(j,.043,.11,[0,.02,-1.245],Ot,10),st(j,[.045,.12,.04],[0,.17,-1.11],re),st(j,[.09,.04,.08],[0,.125,-1.08],Ot),st(j,[.17,.024,.48],[0,.16,-.17],Ot),st(j,[.12,.075,.11],[0,.205,-.12],re);let i=new ee;i.position.set(0,.25,-.19),j.add(i),$e(i,.055,.25,[0,0,0],Ot,8),$e(i,.064,.035,[0,0,.12],re,8);let t=new rt(new gi(.044,8),ff);t.position.z=.14,i.add(t),st(j,[.09,.035,.09],[0,.19,.03],Ot),st(j,[.09,.19,.12],[.012,-.15,.16],Ki,[-.17,0,0]),st(j,[.11,.04,.4],[0,-.008,.44],Ot),st(j,[.08,.11,.08],[0,.005,.64],Ki),st(j,[.07,.095,.06],[0,.015,.72],Ot),Ze=new ee,pr.set(0,-.145,.035),j.add(Ze),st(Ze,[.11,.26,.16],[0,-.13,0],Ot,[-.06,0,0]),st(Ze,[.12,.028,.17],[0,-.255,-.01],re);for(let e=0;e<4;e++)st(Ze,[.115,.012,.17],[0,-.07-e*.045,0],If);st(j,[.18,.012,.13],[0,-.045,.56],Ot)}function fT(i){let t=i.id==="tt",e=i.id==="glock-17",n=t?.39:e?.34:.32,s=-.055,o=e?Ki:re;st(j,[.14,.095,.31],[0,-.035,.055],Ot),st(j,[.13,.105,n],[0,.035,s],o),st(j,[.12,.018,n*.78],[0,.092,s-.015],Ms),$e(j,t?.025:.022,t?.35:.28,[0,.025,-.27],Ot,9),st(j,[.09,.19,.12],[.008,-.15,.155],e?Ki:pa,[-.19,0,0]),st(j,[.095,.035,.13],[.008,-.235,.16],Ot,[-.19,0,0]),st(j,[.013,.075,.015],[.02,-.1,.08],re,[.22,0,0]),st(j,[.035,.038,.035],[0,.105,.075],Ot),st(j,[.035,.04,.03],[0,.105,s-n*.46],Ot),e?(st(j,[.17,.035,.18],[0,-.068,-.11],Ot),st(j,[.105,.018,.08],[0,.1,-.17],If)):(st(j,[.018,.075,.19],[.076,.035,.035],Ot),st(j,[.02,.07,.16],[-.078,.035,.035],Ms),t&&st(j,[.012,.085,.17],[.075,.035,-.12],Ms),st(j,[.09,.14,.018],[0,-.16,.22],th,[-.19,0,0])),Ze=new ee,pr.set(0,-.17,.15),j.add(Ze),st(Ze,[.09,.18,.105],[0,-.08,0],Ot,[-.17,0,0]),st(Ze,[.095,.018,.11],[0,-.17,-.005],Ms,[-.17,0,0])}function pT(){st(j,[.2,.17,.39],[0,.005,.02],re),st(j,[.14,.055,.31],[0,.11,.01],Ot),$e(j,.038,.98,[0,.052,-.77],Ms,10),$e(j,.046,.12,[0,.052,-1.32],Ot,10),$e(j,.027,.84,[0,-.055,-.63],Ot,10),st(j,[.045,.1,.08],[0,.135,-1.17],re),st(j,[.11,.035,.17],[0,.13,-.12],Ot),st(j,[.11,.21,.13],[0,-.16,.16],Ki,[-.14,0,0]),st(j,[.14,.12,.43],[0,0,.48],Pa),st(j,[.16,.13,.05],[0,-.005,.69],Ot),st(j,[.19,.012,.1],[0,-.06,.57],Ot),Ln=new ee,Ks.set(0,-.035,-.48),Ln.position.copy(Ks),j.add(Ln),st(Ln,[.16,.11,.26],[0,0,0],Pa),st(Ln,[.17,.018,.23],[0,.052,0],th);for(let t=0;t<5;t++)st(Ln,[.17,.014,.018],[0,-.045+t*.021,-.105],Ot);let i=new rt(new ti(.065,.009,5,12),re);i.position.set(0,-.095,.11),j.add(i),st(j,[.018,.08,.02],[.01,-.095,.08],Ot),Ze=null}function mT(i){if(i.model==="cleaver")st(j,[.075,.24,.085],[0,-.1,.2],pa,[-.12,0,0]),st(j,[.09,.055,.095],[0,-.205,.2],re),st(j,[.31,.24,.065],[-.02,.075,-.17],bm,[0,0,-.08]),st(j,[.26,.025,.072],[-.035,-.048,-.18],Ms,[0,0,-.08]),st(j,[.075,.22,.06],[.1,.08,-.19],re,[0,0,-.1]),st(j,[.025,.025,.02],[0,-.07,.2],If);else if(i.model==="sledgehammer"){$e(j,.033,.98,[0,-.02,-.08],th,8),$e(j,.043,.34,[0,-.02,.24],pa,8);for(let t=0;t<4;t++)st(j,[.09,.012,.018],[0,-.02,.12+t*.055],re);st(j,[.42,.2,.22],[0,.02,-.64],re),st(j,[.11,.23,.24],[-.18,.02,-.64],Ot),st(j,[.11,.23,.24],[.18,.02,-.64],Ot),st(j,[.26,.035,.235],[0,.135,-.64],Ms)}else if(i.model==="shovel")$e(j,.029,.98,[0,-.005,-.12],Pa,10),$e(j,.04,.25,[0,0,.28],pa,9),st(j,[.11,.07,.075],[0,-.005,-.36],re),st(j,[.31,.045,.32],[0,-.035,-.59],Ms,[.08,0,0]),st(j,[.29,.018,.075],[0,-.006,-.69],bm,[.08,0,0]),st(j,[.035,.024,.035],[0,.015,-.43],Ot),yn=new rt(new Vo(.12,1),Ll),yn.scale.set(1.15,.62,1.45),yn.position.set(0,.006,-.57),yn.rotation.set(.18,.2,-.12),yn.visible=Si>0,j.add(yn);else{$e(j,.058,.88,[0,-.005,-.17],Pa,9),$e(j,.045,.28,[0,-.01,.33],pa,8),st(j,[.12,.1,.04],[0,-.005,.17],Ot);for(let t=0;t<7;t++){let e=-.52+t*.105,n=t%2===0?1:-1,s=new rt(new Ho(.021,.13,4),cT);s.position.set(n*.062,.018,e),s.rotation.z=n*Math.PI/2,j.add(s),st(j,[.025,.025,.025],[n*.035,.018,e+.035],Ot)}}}function gT(i){hT(),ji(i)?mT(i):i.model==="ak"?uT():i.model==="m4"?dT():i.type==="pistol"?fT(i):i.type==="shotgun"&&pT();let t=ji(i)?{position:[.29,-.34,-.82],rotation:[.2,.22,.04]}:i.type==="pistol"?{position:[.3,-.39,-.69],rotation:[.18,.22,.02]}:i.type==="shotgun"?{position:[.28,-.34,-.82],rotation:[.23,.24,.015]}:{position:[.28,-.33,-.78],rotation:[.25,.25,.015]};Wn.set(...t.position),qn.set(...t.rotation,"XYZ"),Ye.position.copy(Wn),Ye.rotation.copy(qn);let e=i.type==="pistol"?-.43:i.type==="shotgun"?-1.38:ji(i)?0:-1.09;bn.position.set(0,i.type==="shotgun"?.052:.025,e),bn.visible=!1,yn&&(yn.visible=Si>0),j.visible=!0}function Sr(){return Xi.get(Oe)||null}function eh(){return Oe&&Cf.get(Oe)||null}function Pf(i,t=!0){let e=Xi.get(i);return e?(Oe&&Oe!==i&&Nf(!1,!1),Oe=i,rn=!1,to=0,Nn=0,gr=0,Qs=0,Wl=!1,Zi=0,Fl=null,nr=0,vs=0,Js=0,gT(e),Ye.visible=!ge&&!Yt,Ha(),ci(),t&&de(`${e.name.toUpperCase()} \xB7 \u0413\u041E\u0422\u041E\u0412\u041E`,.9),!0):!1}function xT(){let i=j.clone(!0);return i.traverse(t=>{t.isMesh&&(t.geometry=t.geometry.clone(),Array.isArray(t.material)?t.material=t.material.map(e=>e.clone()):t.material=t.material.clone(),t.castShadow=!0,t.receiveShadow=!0)}),i.scale.setScalar(.72),i}function yT(i){return i.type==="pistol"?new un(new M(.085,.055,.22)):i.id==="shovel"?new un(new M(.14,.065,.52)):i.type==="melee"?new un(new M(.19,.085,i.id==="sledgehammer"?.62:.48)):new un(new M(.09,.065,i.type==="shotgun"?.72:.66))}function Nf(i=!0,t=!0){let e=Sr();if(!e)return null;Rr();let n=$.position.x+on.x*1,s=$.position.z+on.z*1,o=Math.max(Wt(n)+.68,$.position.y-.08),r=xT(),a=e.type==="pistol"?1:(e.id==="shovel",2),c=e.type==="pistol"?2:e.id==="shovel"?3:2,l={kind:"weapon",weaponId:e.id,type:e.id==="shovel"?"\u041B\u041E\u041F\u0410\u0422\u0410":"\u041E\u0420\u0423\u0416\u0418\u0415",name:e.name,mass:e.weight,range:4.8,description:e.description,inventoryWidth:a,inventoryHeight:c,inventoryIcon:e.type==="tool"?"\u2692":"\u25A3"},h=oo(l,yT(e),e.weight,[n,o,s],r,oi),u=Math.max(.45,Math.min(1.2,Math.sqrt(2.8/e.weight))),d=i?7.2*u:1.15;h.velocity.set(on.x*d+$.velocity.x*.45,on.y*d+(i?1.15:.08)+$.velocity.y*.2,on.z*d+$.velocity.z*.45),h.angularVelocity.set(i?(Math.random()-.5)*3.2:0,i?(Math.random()-.5)*3.2:0,i?(Math.random()-.5)*2.4:0);let f=h.gameMeta;return h.collisionFilterMask=f.originalCollisionFilterMask&~mr,f.playerCollisionSuspended=!0,f.playerCollisionReEnableAfter=Ar+.42,h.wakeUp(),Dt.broadphase.dirty=!0,Oe=null,rn=!1,Nn=0,gr=0,bn.visible=!1,Js=0,j.visible=!1,Ye.visible=!1,Ha(),ci(),t&&de(`${i?"\u0411\u0420\u041E\u0421\u041E\u041A":"\u041F\u041E\u041B\u041E\u0416\u0415\u041D\u041E"} \xB7 ${e.name.toUpperCase()}`,1),h}function vT(i){let t=i?.weaponId||(i?.type==="\u041B\u041E\u041F\u0410\u0422\u0410"?"shovel":null),e=Xi.get(t);if(!e||i.isStored||i.isHeld)return!1;let n=Sn.findIndex(o=>o.body===i.body);if(n<0)return!1;let[s]=Sn.splice(n,1);Dt.removeBody(s.body),zt.remove(s.visual);for(let o=En.length-1;o>=0;o--)En[o]===s.visual&&En.splice(o,1);return i.isHeld=!1,i.isStored=!1,Dt.broadphase.dirty=!0,Pf(e.id,!1)?(de(`${e.name.toUpperCase()} \xB7 \u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u041D\u041E`,1),Qi(),!0):!1}Ye.visible=!1;j.visible=!1;function ci(){let i=J("drop-button");if(!i)return;let t=!!(Oe||Yt)&&!ge;i.hidden=!t,i.setAttribute("aria-label",Yt?"\u0412\u044B\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442":"\u0412\u044B\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u044D\u043A\u0438\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442")}function Ha(){ci();let i=Sr(),t=eh(),e=document.querySelector(".weapon-controls");e&&(e.style.display=i?"block":"none");let n=J("ammo-count"),s=J("fire-label"),o=J("fire-button"),r=J("reload-button");if(!i){n&&(n.textContent=""),s&&(s.textContent=""),o&&(o.disabled=!0,o.setAttribute("aria-label","\u041D\u0435\u0442 \u044D\u043A\u0438\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430"),o.classList.remove("melee-mode")),r&&(r.style.display="none");return}n&&(n.textContent=i.magazineSize===null?"":`${t.magazine} / ${t.reserve}`),s&&(s.textContent=ji(i)?"\u0423\u0414\u0410\u0420":"\u041E\u0413\u041E\u041D\u042C"),o&&(o.disabled=i.magazineSize!==null&&t.magazine<=0&&t.reserve<=0,o.setAttribute("aria-label",`${i.name}: ${ji(i)?"\u0443\u0434\u0430\u0440":"\u043E\u0433\u043E\u043D\u044C"}`),o.classList.toggle("melee-mode",ji(i))),r&&(r.style.display=i.magazineSize===null?"none":"grid")}function sg(){if(Zs)return Zs;let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;Zs=new i;let t=Math.floor(Zs.sampleRate*.65);Na=Zs.createBuffer(1,t,Zs.sampleRate);let e=Na.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1;return Zs}function og(){try{let i=sg();if(!i||!Na)return;i.state==="suspended"&&i.resume();let t=i.currentTime,e=.035+Math.random()*.055,n=i.createBufferSource();n.buffer=Na;let s=i.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(850+Math.random()*1800,t),s.Q.value=1.6+Math.random()*1.4;let o=i.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.035+Math.random()*.025,t+.006),o.gain.exponentialRampToValueAtTime(1e-4,t+e),n.connect(s),s.connect(o),o.connect(i.destination),n.start(t,Math.random()*.45,e),n.stop(t+e+.01)}catch{}}function _T(i){wi&&(va=Math.max(0,va-i),va<=0&&(wi=!1,de("\u0414\u0420\u041E\u0412\u0410 \u041F\u0420\u041E\u0413\u041E\u0420\u0415\u041B\u0418",1))),js&&(js.visible=wi),_s&&(_s.visible=wi),ya&&(ya.intensity=wi?2.3+Math.sin(Ar*17)*.28+Math.random()*.18:0);for(let t of Km){if(!wi){t.mesh.visible=!1;continue}t.phase=(t.phase+i*t.rate)%(Math.PI*2);let e=t.phase/(Math.PI*2);t.mesh.position.set(Math.sin(t.phase*2.15)*t.spread,.11+e*.54,Math.cos(t.phase*1.55)*t.spread*.42),t.mesh.rotation.set(t.phase*.7,t.phase*.45,t.phase*1.1),t.mesh.scale.set(.65+e*.48,.72+e*.66,.62+e*.5),t.mesh.material.opacity=Math.sin(Math.PI*e)*.92,t.mesh.visible=e<.96}wi&&(Al-=i,Al<=0&&(og(),Al=.55+Math.random()*1.15))}function xr(i,t="fire"){try{let e=sg();if(!e)return;e.state==="suspended"&&e.resume();let n=e.currentTime,s=i.sound,o=t==="fire"?s.duration:t==="swing"?.17:t==="impact"?.095:.075,r=t==="swing"?s.swing:t==="impact"?s.impact:s.frequency,a=t==="fire"?s.noise:t==="impact"?s.noise*.48:t==="swing"?.18:.08,c=e.createBiquadFilter();c.type=t==="swing"?"highpass":"lowpass",c.frequency.setValueAtTime(t==="fire"?s.filter:Math.max(240,s.filter*.72),n),c.Q.value=t==="swing"?.7:.5;let l=e.createGain();l.gain.setValueAtTime(Math.min(.34,a*.24),n),l.gain.exponentialRampToValueAtTime(1e-4,n+o);let h=e.createBufferSource();h.buffer=Na,h.connect(c),c.connect(l),l.connect(e.destination),h.start(n),h.stop(n+o);let u=e.createOscillator();u.type=t==="fire"?s.waveform||"triangle":"sine",u.frequency.setValueAtTime(r,n),u.frequency.exponentialRampToValueAtTime(Math.max(32,r*(t==="swing"?.52:.36)),n+o);let d=e.createGain(),f=t==="fire"?s.bass:t==="impact"?s.bass*1.2:t==="swing"?.015:.022;d.gain.setValueAtTime(Math.max(1e-4,f),n),d.gain.exponentialRampToValueAtTime(1e-4,n+o),u.connect(d),d.connect(e.destination),u.start(n),u.stop(n+o)}catch{}}function Lf(){let i=Sr(),t=eh();if(!(ge||nn||Me||Yt||!i||!t||Nn>0||i.magazineSize===null)){if(t.magazine>=i.magazineSize){de("\u041C\u0410\u0413\u0410\u0417\u0418\u041D \u041F\u041E\u041B\u041E\u041D",.85);return}if(t.reserve<=0){de("\u041D\u0415\u0422 \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412",.9);return}rn=!1,Nn=i.reloadDuration,gr=0,vs=0,xr(i,"reload"),de("\u041F\u0415\u0420\u0415\u0417\u0410\u0420\u042F\u0414\u041A\u0410",.8)}}function MT(){let i=Sr(),t=eh();if(!i||!t||i.magazineSize===null)return;let e=em(i,t);gr=1,Ha(),e>0&&de("\u0413\u041E\u0422\u041E\u0412\u041E",.65)}function wT(i){let t=new ee,e=i.face?.normal?.clone()||new N(0,0,1);i.object.updateWorldMatrix(!0,!1),e.transformDirection(i.object.matrixWorld).normalize();let n=new hn({color:1119509,transparent:!0,opacity:.96,depthWrite:!1,side:Ce,polygonOffset:!0,polygonOffsetFactor:-2}),s=new hn({color:7168592,transparent:!0,opacity:.76,depthWrite:!1,side:Ce,polygonOffset:!0,polygonOffsetFactor:-2}),o=new rt(new Vc(.023,.035,8),s),r=new rt(new gi(.024,8),n);if(t.add(o,r),t.position.copy(i.point).addScaledVector(e,.004),t.quaternion.setFromUnitVectors(new N(0,0,1),e),zt.add(t),or.push({object:t,life:22,maxLife:22}),or.length>72){let a=or.shift();rg(a)}}function rg(i){i?.object&&(zt.remove(i.object),i.object.traverse(t=>{t.geometry?.dispose(),t.material&&t.material!==Ot&&t.material.dispose?.()}))}function bT(i){for(let t=or.length-1;t>=0;t--){let e=or[t];e.life-=i;let n=Tt.clamp(e.life/e.maxLife,0,1);e.object.traverse(s=>{s.material?.transparent&&(s.material.opacity=n*(s.geometry?.type==="RingGeometry"?.76:.96))}),e.life<=0&&(or.splice(t,1),rg(e))}AT(i)}var tf=new qo,ET=new gi(1,9),ST=new Hn(.024,6,5),TT=new hn({color:12918314,transparent:!0,opacity:.92,depthWrite:!1});function Em(i,t,e=1){let n=new ee,s=new hn({color:10163745,transparent:!0,opacity:.84,depthWrite:!1,side:Ce,polygonOffset:!0,polygonOffsetFactor:-4}),o=4+Math.floor(Math.random()*3);for(let a=0;a<o;a++){let c=new rt(ET,s),l=Math.random()*Math.PI*2,h=a===0?0:Math.random()*.11*e,u=(a===0?.12:.045+Math.random()*.075)*e;c.position.set(Math.cos(l)*h,Math.sin(l)*h,.002+a*5e-4),c.scale.set(u*(.78+Math.random()*.5),u*(.62+Math.random()*.5),1),n.add(c)}let r=t.clone().normalize();if(n.position.copy(i).addScaledVector(r,.012),n.quaternion.setFromUnitVectors(new N(0,0,1),r),zt.add(n),rr.push({object:n,material:s,life:24,maxLife:24}),rr.length>36){let a=rr.shift();zt.remove(a.object),a.material.dispose()}}function zf(i,t,e=1){if(!i)return;let n=i.clone(),s=t?.clone?.()||new N(0,0,-1);s.lengthSq()<1e-5&&s.set(0,0,-1),s.normalize();let o=n.x+s.x*.38,r=n.z+s.z*.38,a=new N(-kd(o),1,0).normalize();if(Em(new N(o,Wt(o)+.006,r),a,Tt.clamp(e,.65,1.6)),Nl.length&&Math.abs(s.y)<.92){tf.set(n.clone().addScaledVector(s,.08),s),tf.far=4.5;let l=tf.intersectObjects(Nl,!0).find(h=>h.distance>.08&&h.distance<4.5);if(l){let h=l.face?.normal?.clone()||new N(0,0,1);l.object.updateWorldMatrix(!0,!1),h.transformDirection(l.object.matrixWorld).normalize(),Em(l.point,h,e*.78)}}let c=Math.max(3,Math.round(5*e));for(let l=0;l<c;l++){let h=new rt(ST,TT);h.position.copy(n).add(new N((Math.random()-.5)*.08,(Math.random()-.5)*.08,(Math.random()-.5)*.08));let u=1.4+Math.random()*2.2,d=s.clone().multiplyScalar(u).add(new N((Math.random()-.5)*2.4,.35+Math.random()*2,(Math.random()-.5)*2.4));zt.add(h),ar.push({mesh:h,velocity:d,life:.35+Math.random()*.42,maxLife:.77})}for(;ar.length>72;){let l=ar.shift();zt.remove(l.mesh)}}function AT(i){for(let t=ar.length-1;t>=0;t--){let e=ar[t];e.life-=i,e.velocity.y-=6.4*i,e.mesh.position.addScaledVector(e.velocity,i),e.mesh.scale.setScalar(Tt.clamp(e.life/e.maxLife,0,1));let n=Wt(e.mesh.position.x);(e.life<=0||e.mesh.position.y<=n+.018)&&(zt.remove(e.mesh),ar.splice(t,1))}for(let t=rr.length-1;t>=0;t--){let e=rr[t];e.life-=i,e.material.opacity=.84*Tt.clamp(e.life/e.maxLife,0,1),e.life<=0&&(rr.splice(t,1),zt.remove(e.object),e.material.dispose())}}function ag(i,t,e,n,s=null){if(!i||i.type!==At.DYNAMIC)return;let o=ji(e)?Tt.clamp(5.2+n*.19,6,19):Tt.clamp(2.8+n*.11,3.5,10.5),r=new M(t.x*o,t.y*o,t.z*o),a=s?new M(s.x-i.position.x,s.y-i.position.y,s.z-i.position.z):new M,c=a.length();c>.38&&a.scale(.38/c,a),i.applyImpulse(r,a),i.wakeUp()}function RT(i,t,e,n,s){let o=i.human?.resident||i.human;if(!o||o.dead&&!o.ragdoll)return;o.health=Number.isFinite(o.health)?o.health:100,o.injuries??(o.injuries={});let r=Hd(o,e,i.key,n);o.health=r.health,o.injuries[i.key]=(o.injuries[i.key]||0)+1,o.hitFlash=.32,r.zone==="limb"&&(o.limbInjured=!0);let a=o.ragdoll||jS(o);a.health=o.health,a.hitFlash=.32,a.crawlAfterFall=o.limbInjured&&!r.lethal;let c=nT(a,i.key);if(a.state!=="falling"&&a.state!=="dead"){for(let h of a.parts)h.body.type=At.DYNAMIC,h.body.mass=h.mass,h.body.updateMassProperties(),h.body.wakeUp();a.state="falling",a.stateTime=0,a.quietTime=0}r.lethal&&(o.dead=!0,o.state="dead",a.dead=!0,a.state="dead",a.active=!0),ag(c?.body,t,e,r.damage,s);let l=s||new N(c.body.position.x,c.body.position.y,c.body.position.z);zf(l,new N(t.x,t.y,t.z),r.zone==="head"?1.3:1),e.pellets||xr(e,"impact"),de(`${o.id} \xB7 ${e.name.toUpperCase()} \u2212${r.damage} \u041E\u0417 \xB7 ${r.health} \u041E\u0417`,1.05)}function CT(i,t,e,n=1,s=null){if(!(!i||i.isStored||i.isHeld)){if(i.kind==="resident"&&i.human){RT(i,t,e,n,s);return}if(i.kind==="mannequin"&&i.human){let o=i.human;if(o.dead)return;let r=o.partMap[i.key]||o.partMap.torso,a=Hd(o,e,i.key,n);if(o.hitFlash=.32,a.zone==="limb"&&!a.lethal&&(o.crawlAfterFall=!0),!o.active)_g(o,null,0,null,!1);else if(o.state!=="falling"&&!o.dead){o.state="falling",o.stateTime=0,o.quietTime=0;for(let c of o.parts)c.body.type=At.DYNAMIC,c.body.mass=c.mass,c.body.updateMassProperties(),c.body.wakeUp();Dt.broadphase.dirty=!0}ag(r.body,t,e,a.damage,s),zf(s||new N(r.body.position.x,r.body.position.y,r.body.position.z),new N(t.x,t.y,t.z),a.zone==="head"?1.3:1),a.lethal&&(o.dead=!0,o.active=!0,o.state="dead"),e.pellets||xr(e,"impact"),de(`${o.id} \xB7 ${e.name.toUpperCase()} \u2212${a.damage} \u041E\u0417 \xB7 ${a.health} \u041E\u0417`,1.05);return}if(i.kind==="prop"&&i.body?.type===At.DYNAMIC){let o=ji(e)?7:e.type==="shotgun"?3.5:2.4;i.body.applyImpulse(new M(t.x*o,t.y*o,t.z*o),new M),i.body.wakeUp()}}}var bl=new qo;function pf(i,t=0,e=0,n=1){Ve.updateMatrixWorld(!0),bl.far=i.range,bl.setFromCamera(new ht(t,e),Ve);let s=[...En,...Nl],o=nm(bl,s)[0];if(!o)return null;let r=o.object.userData.gameMeta||o.object.parent?.userData?.gameMeta;return r?CT(r,bl.ray.direction,i,n,o.point):o.object.userData.bulletSurface&&wT(o),o}function IT(i){Rr(),pf(i)}function Df(){let i=Sr(),t=eh();if(!(ge||nn||Me||Yt||!i||Nn>0||to>0||Zi>0)){if(ji(i)){if(Qs>0)return;Qs=i.swingDuration,Wl=!1,to=i.cooldown,rn=!1,xr(i,"swing");return}if(!tm(i,t)){Lf();return}if(Ha(),to=i.cooldown,vs=i.type==="shotgun"?1.25:i.type==="rifle"?.9:.7,Ei=Math.min(.5,Ei+(i.type==="shotgun"?.22:.1)),ws=Tt.clamp(ws+(i.type==="shotgun"?.026:.009),-1.18,1.18),xr(i,"fire"),Js=i.type==="shotgun"?.11:.075,bn.visible=!0,bn.userData.light.intensity=i.type==="shotgun"?4.1:2.8,Rr(),i.pellets){for(let e=0;e<i.pellets;e++){let n=e*2.399963229728653,s=e===0?0:i.spread*Math.sqrt(e/(i.pellets-1));pf(i,Math.cos(n)*s,Math.sin(n)*s,1)}nr=.34}else pf(i);i.automatic||(rn=!1)}}function PT(i){let t=Sr();if(to=Math.max(0,to-i),vs=Tt.damp(vs,0,18,i),!t){rn=!1,bn.visible=!1,j.visible=!1,Ye.visible=!1;return}rn&&to<=0&&Nn<=0&&Df(),Nn>0&&(Nn=Math.max(0,Nn-i),gr=1-Nn/t.reloadDuration,Nn===0&&MT()),Js>0&&(Js=Math.max(0,Js-i),Js===0&&(bn.visible=!1,bn.userData.light.intensity=0));let e=Nn>0?Math.sin(gr*Math.PI):0;if(nr>0){nr=Math.max(0,nr-i);let n=1-nr/.34;Ln&&Ln.position.set(Ks.x,Ks.y,Ks.z+Math.sin(n*Math.PI)*.13)}else Ln&&Ln.position.copy(Ks);if(Zi>0){let n=1-Zi/Jm,s=Math.sin(n*Math.PI);Zi=Math.max(0,Zi-i),Ye.position.set(Wn.x+wa,Wn.y+ba-s*.17,Wn.z+s*.16),Ye.rotation.set(qn.x+s*.52,qn.y+s*.04,qn.z-s*.12),Zi===0&&HT()}else if(Qs>0){Qs=Math.max(0,Qs-i);let n=1-Qs/t.swingDuration,s=Math.sin(n*Math.PI);Ye.position.set(Wn.x+wa,Wn.y+ba-s*.12,Wn.z+s*.08),Ye.rotation.set(qn.x+s*.36,qn.y-s*.12,qn.z-s*.92),!Wl&&n>=.43&&(Wl=!0,IT(t))}else Ye.position.set(Wn.x+wa,Wn.y+ba-vs*.035-e*.07,Wn.z+vs*.065),Ye.rotation.set(qn.x+vs*.11-e*.08,qn.y,qn.z+e*.07);Ze&&(Ze.position.set(pr.x,pr.y-e*.18,pr.z+e*.035),Ze.rotation.x=-e*.24),Ln&&Nn>0&&(Ln.position.z=Ks.z+e*.08),yn&&(yn.visible=Si>0&&!Yt),j.visible=!Yt,Ye.visible=!ge&&!!t&&!Yt}var Tr=new jr;Tr.background=null;var La=new Je(31,1,.1,20);La.position.set(2.35,2.05,3.9);La.lookAt(0,.98,0);var Ie=new ee;Tr.add(Ie);var cg=new Z({color:5858898,roughness:.88}),Sm=new Z({color:3423285,roughness:.92}),NT=new Z({color:2435621,roughness:.85}),za=new Z({color:3753277,roughness:.76,metalness:.08}),nh=new Z({color:10718305,roughness:.92}),LT=new Z({color:6713939,roughness:.78}),Bf=new Z({color:2108202,roughness:.56,metalness:.18}),Ff=new Z({color:10193778,roughness:.88}),zT=new Z({color:11895373,roughness:.68,metalness:.12});function Be(i,t,e,n,s=[0,0,0]){let o=new rt(new St(t[0],t[1],t[2]),n);return o.position.set(e[0],e[1],e[2]),o.rotation.set(s[0],s[1],s[2]),i.add(o),o}var lg=new rt(new sn(.67,.72,.055,28),new Z({color:2568492,roughness:.96,metalness:.04}));lg.position.y=.015;Tr.add(lg);Be(Ie,[.44,.24,.27],[0,.58,0],za);Be(Ie,[.5,.69,.3],[0,1.02,0],cg);Be(Ie,[.37,.56,.2],[0,1,-.22],za);Be(Ie,[.07,.52,.035],[-.13,1.03,.17],nh,[0,0,-.1]);Be(Ie,[.07,.52,.035],[.13,1.03,.17],nh,[0,0,.1]);Be(Ie,[.46,.07,.32],[0,.69,0],nh);Be(Ie,[.13,.16,.06],[0,.94,.185],zT);Be(Ie,[.12,.13,.035],[0,1.05,.19],nh);Be(Ie,[.15,.14,.15],[0,1.45,0],Ff);Be(Ie,[.32,.33,.28],[0,1.67,0],Ff);Be(Ie,[.38,.2,.35],[0,1.83,-.005],LT);Be(Ie,[.4,.045,.38],[0,1.77,.005],za);Be(Ie,[.22,.105,.08],[0,1.59,.17],Bf);Be(Ie,[.075,.105,.085],[-.145,1.59,.16],Bf);Be(Ie,[.075,.105,.085],[.145,1.59,.16],Bf);for(let i of[-1,1])Be(Ie,[.18,.46,.2],[i*.35,1.05,0],cg,[0,0,i*-.06]),Be(Ie,[.15,.37,.17],[i*.39,.67,.025],za,[0,0,i*.025]),Be(Ie,[.15,.11,.15],[i*.39,.42,.035],Ff),Be(Ie,[.19,.43,.22],[i*.125,.36,0],Sm),Be(Ie,[.16,.34,.18],[i*.13,.17,.015],Sm),Be(Ie,[.2,.13,.3],[i*.13,.065,.07],NT),Be(Ie,[.23,.035,.31],[i*.13,.015,.075],za);Tr.add(new ea(13885391,3883063,1.6));var hg=new ia(16769719,2.2);hg.position.set(-2.5,4.5,3.5);Tr.add(hg);var si=null,mf=!1,Tm=0,ef=0,oi=Math.PI/2,ws=-.08,ai=!0,Yt=null,ii=null,dn={x:0,y:0,pointerId:null},Xn=null,ma=0,Ei=0,ql=0,bs=100,Ea=100,Sa=100,ir=58,nf=0,ge=!1,ug=0,gf=!1,dg=null,Me=!1,yr="bag",Ji="shovel",nn=!1,zn=[],ri=null,DT=0,fg=8,pg=5,Ta=30,sr={head:0,neck:0,torso:0,"arm-left":0,"arm-right":0,"leg-left":0,"leg-right":0},Uf=new Set,Aa=0,sf=0,Ar=0,of=0,El=0,Am=60,xf=!1,ke=new Set,Da=new qo;Da.far=5;var on=new N,mg=new Ge,BT=new N(0,.77,0),ys=new N,Rm=new N;function de(i,t=1.45){let e=J("toast");e&&(e.textContent=i,e.classList.add("visible"),Aa=t)}var Ra={head:"injury-head",neck:"injury-neck",torso:"injury-torso","arm-left":"injury-arm-left","arm-right":"injury-arm-right","leg-left":"injury-leg-left","leg-right":"injury-leg-right"};function Of(){J("health-value").textContent=String(bs),J("health-bar").style.width=`${bs}%`,J("health-bar").style.background=bs<35?"#d95c50":bs<70?"#c3a66d":"#9ab779"}function gg(){J("hunger-value").textContent=String(Math.round(Ea)),J("hunger-bar").style.width=`${Ea}%`,J("hunger-bar").style.background=Ea<25?"#dc7950":"#c4a66e",J("thirst-value").textContent=String(Math.round(Sa)),J("thirst-bar").style.width=`${Sa}%`,J("thirst-bar").style.background=Sa<25?"#5fa6c5":"#78aeb6",J("heat-value").textContent=String(Math.round(ir)),J("heat-bar").style.width=`${ir}%`,J("heat-bar").style.background=ir<25?"#69a9c2":ir>78?"#edaf68":"#cf8756"}function Ca(i){return{head:"\u0413\u041E\u041B\u041E\u0412\u0410",neck:"\u0428\u0415\u042F",torso:"\u041A\u041E\u0420\u041F\u0423\u0421","arm-left":"\u041B\u0415\u0412\u0410\u042F \u0420\u0423\u041A\u0410","arm-right":"\u041F\u0420\u0410\u0412\u0410\u042F \u0420\u0423\u041A\u0410","leg-left":"\u041B\u0415\u0412\u0410\u042F \u041D\u041E\u0413\u0410","leg-right":"\u041F\u0420\u0410\u0412\u0410\u042F \u041D\u041E\u0413\u0410"}[i]||"\u041A\u041E\u0420\u041F\u0423\u0421"}function xg(i){let t=sr[i]||0,e=Uf.has(i);J("injury-status").textContent=e?`\u041A\u0420\u041E\u0412\u041E\u0422\u0415\u0427\u0415\u041D\u0418\u0415 \xB7 ${Ca(i)}`:t>0?`\u0422\u0420\u0410\u0412\u041C\u0410 \xB7 ${Ca(i)}`:`\u0411\u0415\u0417 \u0422\u0420\u0410\u0412\u041C \xB7 ${Ca(i)}`,J("injury-status").classList.toggle("alert",t>0||e)}function FT(i,t){let e=Ra[i]?i:"torso",n=J(Ra[e]);sr[e]=Math.min(1,(sr[e]||0)+Math.max(.28,t/24)),n.classList.add("injured"),n.style.opacity=String(.55+sr[e]*.45),sr[e]>=.55&&(Uf.add(e),J(`bleed-${e}`).classList.add("active")),dg=e;for(let[s,o]of Object.entries(Ra))J(o).classList.toggle("selected",s===e);xg(e)}function yg(i){if(!Ra[i])return;dg=i;for(let[n,s]of Object.entries(Ra))J(s).classList.toggle("selected",n===i);xg(i);let t=sr[i]||0,e=Uf.has(i)?" \xB7 \u041A\u0420\u041E\u0412\u041E\u0422\u0415\u0427\u0415\u041D\u0418\u0415":t>0?` \xB7 \u0422\u0420\u0410\u0412\u041C\u0410 ${Math.round(t*100)}%`:" \xB7 \u041F\u041E\u0412\u0420\u0415\u0416\u0414\u0415\u041D\u0418\u0419 \u041D\u0415\u0422";de(`${Ca(i)}${e}`,1.2)}function Cm(i="\u041A\u0420\u0418\u0422\u0418\u0427\u0415\u0421\u041A\u041E\u0415 \u041F\u041E\u0412\u0420\u0415\u0416\u0414\u0415\u041D\u0418\u0415"){if(ge)return;Me&&Yn(!1),nn&&_r(!1),rn=!1,gf=!!Yt,ge=!0,ug=0,bs=0,Of(),J("death-detail").textContent=i,J("death-overlay").classList.add("visible"),J("death-overlay").setAttribute("aria-hidden","false"),document.body.classList.add("dead"),ke.clear(),ao(),Xn=null,$.fixedRotation=!1,$.updateMassProperties(),$.quaternion.setFromAxisAngle(new M(0,1,0),oi),$.previousQuaternion.copy($.quaternion),$.interpolatedQuaternion.copy($.quaternion),$.aabbNeedsUpdate=!0,mg.setFromEuler(new xn(ws,0,0,"YXZ"));let t=new M(-Math.sin(oi),0,-Math.cos(oi)),e=new M(t.z,0,-t.x);e.normalize(),$.angularDamping=.2,$.linearDamping=.08,$.velocity.x*=.42,$.velocity.z*=.42,$.velocity.y=Math.min($.velocity.y,.1),$.angularVelocity.set(e.x*2.5+(Math.random()-.5)*.55,.75,e.z*2.5+(Math.random()-.5)*.55),$.force.set(0,0,0),$.torque.set(0,0,0),$.wakeUp(),Dt.broadphase.dirty=!0,ci(),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock()}function vg(i,t="torso",e=null){if(!ai||ge)return;let n=Math.max(1,Math.round(i)),s=t==="neck"&&n>=14;if(!(ql>0&&!s)){if(ql=.72,bs=Math.max(0,bs-n),Ei=Math.min(1.4,Ei+.85),Of(),FT(t,n),e&&zf(new N($.position.x,$.position.y+(t==="head"?.7:.32),$.position.z),e,n>=18?1.15:.85),document.body.classList.add("damage-flash"),setTimeout(()=>document.body.classList.remove("damage-flash"),170),t==="neck"&&n>=14){Cm("\u0428\u0415\u0419\u041D\u0410\u042F \u0422\u0420\u0410\u0412\u041C\u0410 \xB7 \u041A\u0420\u0418\u0422\u0418\u0427\u0415\u0421\u041A\u0410\u042F \u041A\u0420\u041E\u0412\u041E\u041F\u041E\u0422\u0415\u0420\u042F");return}if(bs===0){Cm(`\u0421\u041C\u0415\u0420\u0422\u0415\u041B\u042C\u041D\u041E\u0415 \u0420\u0410\u041D\u0415\u041D\u0418\u0415 \xB7 ${Ca(t)}`);return}de(`\u0423\u0414\u0410\u0420 \xB7 \u2212${n}%`,.9)}}function UT(i){if(!ai||Me||nn||ge)return;Ea=Math.max(0,Ea-i*.045),Sa=Math.max(0,Sa-i*.065);let t=Math.hypot($.position.x-tn.x,$.position.z-tn.z);ir=rm(ir,i,wi&&t<=3.8),nf+=i,nf>=.35&&(nf=0,gg())}function _g(i,t=i.partMap.torso,e=0,n=null,s=!1){if(i.active){if(s&&t?.body){let o=new M(on.x*8.5,Math.max(1,on.y*8.5),on.z*8.5);t.body.applyImpulse(o,new M),de("\u0418\u041C\u041F\u0423\u041B\u042C\u0421 \u041F\u0415\u0420\u0415\u0414\u0410\u041D",.85)}return}i.active=!0,i.state="falling",i.stateTime=0,i.quietTime=0,i.hitFlash=.24;for(let o of i.parts)o.body.type=At.DYNAMIC,o.body.mass=o.mass,o.body.updateMassProperties(),o.body.wakeUp();if(Dt.broadphase.dirty=!0,t?.body){let o;if(s){o=new M(on.x,Math.max(.08,on.y),on.z),o.normalize();let r=o.scale(13.5);t.body.applyImpulse(r,new M)}else{o=n&&n.lengthSquared()>.08?n.clone():new M(0,0,1);let r=o.length();o.normalize();let a=Math.min(48,Math.max(6,e*t.mass*.78));t.body.applyImpulse(o.scale(a),t.body.position)}}de(s?`${i.id} \xB7 \u0420\u0410\u0413\u0414\u041E\u041B\u041B \u0410\u041A\u0422\u0418\u0412\u0418\u0420\u041E\u0412\u0410\u041D`:`${i.id} \xB7 \u0423\u0414\u0410\u0420 / \u0420\u0410\u0413\u0414\u041E\u041B\u041B`,1.3)}function Rr(){return Ve.getWorldDirection(on),on}function OT(){let i=$.position.y-.87,t=null,e=1.6;for(let n of Sn){let s=n.body,o=s.gameMeta;if(!o||o.isStored||o.isHeld||!["prop","firewood","weapon"].includes(o.kind))continue;let r=s.position.x-$.position.x,a=s.position.z-$.position.z,c=Math.hypot(r,a);c>e||Math.abs(s.position.y-i)>1.65||(t={meta:o,distance:c,point:new N(s.position.x,s.position.y,s.position.z),steppedOn:!0},e=c)}return t}function Mg(){Ve.updateMatrixWorld(!0),Da.setFromCamera(new ht(0,0),Ve);let i=Da.intersectObjects(En,!0);for(let t of i){let e=t.object.userData.gameMeta||t.object.parent?.userData?.gameMeta;if(!(!e||e.kind==="resident"||e.isStored||e.isEmpty||e.isHeld||t.distance>(e.range||4.5)))return{meta:e,distance:t.distance,point:t.point,aimed:!0}}return OT()}function wg(){if(!af)return null;Ve.updateMatrixWorld(!0),Da.setFromCamera(new ht(0,0),Ve);let i=Da.intersectObject(af,!1)[0];return i&&i.distance<=4.8?i:null}function bg(){return Math.hypot($.position.x-tn.x,$.position.z-tn.z)<=2.85}function Im(i,t){return Oe!=="shovel"?(de("\u041D\u0423\u0416\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0410",1),!1):Zi>0?!1:(Fl=i==="scoop"?{kind:i,drift:t}:{kind:i,point:{x:t.x,z:t.z}},Zi=Jm,rn=!1,xr(Xi.get("shovel"),"swing"),!0)}function HT(){let i=Fl;if(Fl=null,!i)return;if(i.kind==="scoop"){let e=im(i.drift,Si);if(!e.ok){de(e.reason==="already-carrying"?"\u0421\u041D\u0415\u0413 \u0423\u0416\u0415 \u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0415":"\u0421\u0423\u0413\u0420\u041E\u0411 \u0417\u0410\u041A\u041E\u041D\u0427\u0418\u041B\u0421\u042F",1);return}Si=e.amount,Gm(i.drift),yn&&(yn.visible=!0),de("\u0421\u041D\u0415\u0413 \u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0415 \xB7 \u041F\u0415\u0420\u0415\u041D\u041E\u0421 \u0417\u0410\u041C\u0415\u0414\u041B\u042F\u0415\u0422",1.35);return}let t=sm(Si,i.point);if(!t.ok){de("\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0415 \u041D\u0415\u0422 \u0421\u041D\u0415\u0413\u0410",.9);return}er(t.pile.x,t.pile.z,t.pile.amount),Si=t.remaining,yn&&(yn.visible=!1),de("\u0421\u041D\u0415\u0413 \u0421\u0411\u0420\u041E\u0428\u0415\u041D \xB7 \u041D\u041E\u0412\u042B\u0419 \u0421\u0423\u0413\u0420\u041E\u0411",1.2)}function Qi(){ci();let i=J("action-button");if(!i)return;let t=J("action-label");if(t.textContent="\u0414\u0415\u0419\u0421\u0422\u0412\u0418\u0415",ge){ii=null,i.classList.remove("is-holding","has-target");return}if(ii=Mg(),Yt){let n=Yt.gameMeta?.kind==="firewood"&&bg();t.textContent=n?wi?"\u041F\u041E\u0414\u0411\u0420\u041E\u0421\u0418\u0422\u042C \u0414\u0420\u041E\u0412\u0410":"\u0420\u0410\u0417\u0416\u0415\u0427\u042C \u041F\u0415\u0427\u042C":"\u041F\u041E\u041B\u041E\u0416\u0418\u0422\u042C \u041F\u0420\u0415\u0414\u041C\u0415\u0422",i.classList.add("is-holding"),i.classList.toggle("has-target",n);return}if(i.classList.remove("is-holding"),Oe==="shovel"&&Si>0){t.textContent="\u0421\u0411\u0420\u041E\u0421\u0418\u0422\u042C \u0421\u041D\u0415\u0413",i.classList.toggle("has-target",!!(ii||wg()));return}ii?.meta.kind==="snowdrift"?t.textContent=Oe==="shovel"?"\u0427\u0415\u0420\u041F\u0410\u0422\u042C \u0421\u041D\u0415\u0413":"\u041D\u0423\u0416\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0410":ii?.meta.kind==="stove"?t.textContent="\u041D\u0423\u0416\u041D\u042B \u0414\u0420\u041E\u0412\u0410":ii?.meta.kind==="weapon"||ii?.meta.type==="\u041B\u041E\u041F\u0410\u0422\u0410"?t.textContent="\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C":(ii?.meta.kind==="firewood"||ii?.meta.kind==="prop")&&(t.textContent="\u0412\u0417\u042F\u0422\u042C"),i.classList.toggle("has-target",!!ii)}function Hf(i){let t=i.body;t.collisionFilterMask=i.originalCollisionFilterMask&~mr,i.playerCollisionSuspended=!0,i.playerCollisionReEnableAfter=Ar+.35}function Eg(i){let t=i.body;!t||t.gameMeta?.isHeld||i.isStored||(Yt=t,t.gameMeta.isHeld=!0,t.type=At.DYNAMIC,t.mass=t.gameMeta.initialMass,t.gameMeta.playerCollisionSuspended=!1,t.collisionFilterMask=t.gameMeta.originalCollisionFilterMask&~mr,t.linearDamping=.82,t.angularDamping=.92,t.updateMassProperties(),t.velocity.set(0,0,0),t.angularVelocity.set(0,0,0),t.force.set(0,0,0),t.wakeUp(),Dt.broadphase.dirty=!0,j.visible=!1,Ye.visible=!1,ci(),de(`${i.name} \xB7 ${i.mass.toFixed(1)} \u041A\u0413`,1.15))}function Sg(){if(!Yt)return;let i=Yt,t=i.gameMeta;Rr(),i.type=At.DYNAMIC,i.mass=t.initialMass,Hf(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.updateMassProperties(),i.gameMeta.isHeld=!1,i.force.set(0,0,0),i.updateAABB();let e=Math.max(.08,(i.aabb.upperBound.y-i.aabb.lowerBound.y)*.5);i.position.y=Math.max(i.position.y,e+.025);let s=9.6*Math.max(.34,Math.min(1.15,Math.sqrt(2.8/t.initialMass)));i.velocity.set(on.x*s+$.velocity.x,on.y*s+1.05+$.velocity.y,on.z*s+$.velocity.z),i.angularVelocity.set((Math.random()-.5)*3.4,(Math.random()-.5)*3.4,(Math.random()-.5)*3.4),i.wakeUp(),Dt.broadphase.dirty=!0,Yt=null,ci(),de(`\u0411\u0420\u041E\u0421\u041E\u041A \xB7 ${t.name}`,.95)}function Tg(){if(!Yt)return;let i=Yt,t=i.gameMeta;i.type=At.DYNAMIC,i.mass=t.initialMass,Hf(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.gameMeta.isHeld=!1,i.updateMassProperties(),i.updateAABB();let e=Math.max(.08,(i.aabb.upperBound.y-i.aabb.lowerBound.y)*.5);i.position.y=Math.max(i.position.y,e+.025),i.velocity.set($.velocity.x*.45,-.18,$.velocity.z*.45),i.angularVelocity.set(0,0,0),i.wakeUp(),Dt.broadphase.dirty=!0,Yt=null,ci(),de(`\u041F\u041E\u041B\u041E\u0416\u0415\u041D\u041E \xB7 ${t.name}`,.95)}function kT(){if(!Yt)return;let i=Yt,t=i.gameMeta;t.isHeld=!1,Hf(t),i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.velocity.set(0,0,0),i.angularVelocity.set(0,0,0),i.wakeUp(),Yt=null,Dt.broadphase.dirty=!0,ci()}function Ag(){return zn.reduce((i,t)=>i+t.meta.mass,0)}function VT(i,t){for(let e=0;e<=pg-t;e++)for(let n=0;n<=fg-i;n++)if(!zn.some(o=>n<o.x+o.width&&n+i>o.x&&e<o.y+o.height&&e+t>o.y))return{x:n,y:e};return null}function GT(){if(!Pl)return;let i=[{weaponId:"shovel",x:0,y:0,width:2,height:3},{weaponId:"glock-17",x:2,y:0,width:1,height:2},{weaponId:"ak-47",x:3,y:0,width:2,height:3}];for(let t of i){let e=Xi.get(t.weaponId);zn.push({id:`sandbox-${e.id}`,meta:{kind:"gear",weaponId:e.id,type:e.type==="tool"?"\u041B\u041E\u041F\u0410\u0422\u0410":e.type==="rifle"?"\u0410\u0412\u0422\u041E\u041C\u0410\u0422":"\u041F\u0418\u0421\u0422\u041E\u041B\u0415\u0422",name:e.name,mass:e.weight,description:e.description,inventoryIcon:e.type==="tool"?"\u2692":e.type==="rifle"?"\u2301":"\u25A3"},x:t.x,y:t.y,width:t.width,height:t.height})}ri="sandbox-shovel"}function WT(i){let t=zn.find(o=>o.id===i);if(!t)return;ih("bag"),ri=i,J("inventory-selected-name").textContent=t.meta.name,J("inventory-selected-weight").textContent=`${t.meta.mass.toFixed(1)} \u043A\u0433`,J("inventory-selected-description").textContent=t.meta.description||t.meta.detail||"\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439.";let e=J("inventory-take"),n=!!t.meta.weaponId,s=n&&Oe===t.meta.weaponId;e.disabled=!!Yt||s,e.textContent=Yt?"\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422":s?"\u0423\u0416\u0415 \u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u041D\u041E":n?"\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C":"\u0414\u041E\u0421\u0422\u0410\u0422\u042C \u041F\u0420\u0415\u0414\u041C\u0415\u0422",J("inventory-message").textContent=`${t.meta.type} \xB7 ${t.width} \xD7 ${t.height} \u042F\u0427\u0415\u0419\u041A\u0418`;for(let o of J("inventory-grid").querySelectorAll(".inventory-item"))o.classList.toggle("selected",o.dataset.itemId===i),o.setAttribute("aria-pressed",String(o.dataset.itemId===i))}function qT(i){let t=Xi.get(i);if(!t)return;yr="all",Ji=i,J("inventory-tab-bag").classList.remove("active"),J("inventory-tab-bag").setAttribute("aria-selected","false"),J("inventory-tab-all").classList.add("active"),J("inventory-tab-all").setAttribute("aria-selected","true"),J("inventory-bag-view").hidden=!0,J("inventory-all-view").hidden=!1,J("inventory-selected-name").textContent=t.name,J("inventory-selected-weight").textContent=`${t.weight.toFixed(1)} \u043A\u0433`;let e=t.magazineSize===null?t.type==="tool"?"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442":"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0431\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439":`\u041C\u0430\u0433\u0430\u0437\u0438\u043D ${t.magazineSize} \xB7 \u0437\u0430\u043F\u0430\u0441 ${t.reserve} \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432`,n=t.pellets?`${t.pellets} \u0434\u0440\u043E\u0431\u0438\u043D \xD7 ${t.damage} \u0443\u0440\u043E\u043D\u0430`:`${t.damage} \u0443\u0440\u043E\u043D\u0430 \u0437\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435`;J("inventory-selected-description").textContent=`${t.description} ${n}. ${e}.`;let s=Oe===i;J("inventory-take").disabled=s,J("inventory-take").textContent=s?"\u0423\u0416\u0415 \u0412 \u0420\u0423\u041A\u0410\u0425":"\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C";let o=Cf.get(i);J("inventory-message").textContent=`${t.category.toUpperCase()} \xB7 ${t.type==="tool"?"\u0418\u041D\u0421\u0422\u0420\u0423\u041C\u0415\u041D\u0422":t.magazineSize===null?"\u0411\u041B\u0418\u0416\u041D\u0418\u0419 \u0411\u041E\u0419":`${o.magazine} / ${o.reserve} \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412`}`;for(let r of J("inventory-all-grid").querySelectorAll(".armory-item"))r.classList.toggle("selected",r.dataset.weaponId===i),r.setAttribute("aria-pressed",String(r.dataset.weaponId===i))}function ih(i){yr=i==="all"?"all":"bag";let t=yr==="all";J("inventory-tab-bag").classList.toggle("active",!t),J("inventory-tab-bag").setAttribute("aria-selected",String(!t)),J("inventory-tab-all").classList.toggle("active",t),J("inventory-tab-all").setAttribute("aria-selected",String(t)),J("inventory-bag-view").hidden=t,J("inventory-all-view").hidden=!t,Rg()}function Rg(){let i=J("inventory-take");if(yr==="all"){Xi.has(Ji)||(Ji="shovel");let s=Xi.get(Ji),o=Cf.get(s.id);J("inventory-selected-name").textContent=s.name,J("inventory-selected-weight").textContent=`${s.weight.toFixed(1)} \u043A\u0433`;let r=s.magazineSize===null?s.type==="tool"?"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442":"\u0411\u0435\u0437 \u0431\u043E\u0435\u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432 \xB7 \u0431\u043B\u0438\u0436\u043D\u0438\u0439 \u0431\u043E\u0439":`\u041C\u0430\u0433\u0430\u0437\u0438\u043D ${s.magazineSize} \xB7 \u0437\u0430\u043F\u0430\u0441 ${s.reserve} \u043F\u0430\u0442\u0440\u043E\u043D\u043E\u0432`,a=s.pellets?`${s.pellets} \u0434\u0440\u043E\u0431\u0438\u043D \xD7 ${s.damage} \u0443\u0440\u043E\u043D\u0430`:`${s.damage} \u0443\u0440\u043E\u043D\u0430 \u0437\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435`;J("inventory-selected-description").textContent=`${s.description} ${a}. ${r}.`;let c=Oe===s.id;i.disabled=c,i.textContent=c?"\u0423\u0416\u0415 \u0412 \u0420\u0423\u041A\u0410\u0425":"\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C",J("inventory-message").textContent=`${s.category.toUpperCase()} \xB7 ${s.type==="tool"?"\u0418\u041D\u0421\u0422\u0420\u0423\u041C\u0415\u041D\u0422":s.magazineSize===null?"\u0411\u041B\u0418\u0416\u041D\u0418\u0419 \u0411\u041E\u0419":`${o.magazine} / ${o.reserve} \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412`}`;return}let t=zn.find(s=>s.id===ri);if(!t){ri=null,J("inventory-selected-name").textContent="\u041F\u0420\u0415\u0414\u041C\u0415\u0422 \u041D\u0415 \u0412\u042B\u0411\u0420\u0410\u041D",J("inventory-selected-weight").textContent="\u2014",J("inventory-selected-description").textContent="\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0432 \u0441\u0435\u0442\u043A\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0435\u0433\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B.",i.disabled=!0,i.textContent="\u0412\u042B\u0411\u0415\u0420\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422",J("inventory-message").textContent=zn.length?"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0435\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430.":"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0443\u0431\u0440\u0430\u0442\u044C \u0441\u044E\u0434\u0430 \u0438\u0437 \u0440\u0443\u043A.";return}J("inventory-selected-name").textContent=t.meta.name,J("inventory-selected-weight").textContent=`${t.meta.mass.toFixed(1)} \u043A\u0433`,J("inventory-selected-description").textContent=t.meta.description||t.meta.detail||"\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439.";let e=!!t.meta.weaponId,n=e&&Oe===t.meta.weaponId;i.disabled=!!Yt||n,i.textContent=Yt?"\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u041F\u0420\u0415\u0414\u041C\u0415\u0422":n?"\u0423\u0416\u0415 \u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u041D\u041E":e?"\u042D\u041A\u0418\u041F\u0418\u0420\u041E\u0412\u0410\u0422\u042C":"\u0414\u041E\u0421\u0422\u0410\u0422\u042C \u041F\u0420\u0415\u0414\u041C\u0415\u0422"}function XT(){let i=J("inventory-all-grid");i.replaceChildren();for(let t of pl){let e=document.createElement("button");e.type="button",e.className=`armory-item${t.id===Ji?" selected":""}`,e.dataset.weaponId=t.id,e.setAttribute("aria-pressed",String(t.id===Ji)),e.title=`${t.name} \xB7 ${t.description}`;let n=document.createElement("span");n.className=`armory-item-icon ${t.type}`,n.textContent=t.type==="tool"?"\u2692":t.type==="melee"?"\u2694":t.type==="pistol"?"\u25A3":t.type==="shotgun"?"\u25C6":"\u2301";let s=document.createElement("b");s.className="armory-item-name",s.textContent=t.name;let o=document.createElement("small");o.className="armory-item-category",o.textContent=t.category.toUpperCase();let r=document.createElement("small");r.className="armory-item-stats",r.textContent=t.magazineSize===null?`${t.damage} \u0423\u0420\u041E\u041D \xB7 ${t.range.toFixed(1)} \u041C`:`${t.magazineSize} \xB7 ${t.damage}${t.pellets?` \xD7 ${t.pellets}`:""}`,e.append(n,s,o,r),e.addEventListener("click",()=>qT(t.id)),i.appendChild(e)}}function vr(){let i=J("inventory-grid");zn.some(e=>e.id===ri)||(ri=zn[0]?.id||null),i.replaceChildren();for(let e=0;e<fg*pg;e++){let n=document.createElement("div");n.className="inventory-cell",n.setAttribute("aria-hidden","true"),i.appendChild(n)}for(let e of zn){let n=document.createElement("button");n.type="button",n.className=`inventory-item${e.id===ri?" selected":""}`,n.dataset.itemId=e.id,n.setAttribute("aria-pressed",String(e.id===ri)),n.style.gridColumn=`${e.x+1} / span ${e.width}`,n.style.gridRow=`${e.y+1} / span ${e.height}`,n.title=`${e.meta.name} \xB7 ${e.meta.mass.toFixed(1)} \u043A\u0433 \xB7 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F`;let s=document.createElement("span");s.className="inventory-item-top";let o=document.createElement("b");o.className="inventory-item-icon",o.textContent=e.meta.inventoryIcon||"\u25A3";let r=document.createElement("small");r.className="inventory-item-weight",r.textContent=`${e.meta.mass.toFixed(1)} \u043A\u0433`,s.append(o,r);let a=document.createElement("span");a.className="inventory-item-name",a.textContent=e.meta.name,n.append(s,a),n.addEventListener("click",()=>WT(e.id)),i.appendChild(n)}let t=Ag();J("inventory-weight").textContent=t.toFixed(1),J("inventory-limit").textContent=Ta.toFixed(1),J("inventory-weight-bar").style.width=`${Math.min(100,t/Ta*100)}%`,J("inventory-weight-bar").style.background=t/Ta>.82?"#d08353":"#a4c17e",J("inventory-empty").style.display=yr==="bag"&&zn.length===0?"flex":"none",J("inventory-drop").disabled=!Yt,J("inventory-stash").disabled=!Yt,XT(),Rg()}function kf(){if(mf)return;let t=J("inventory-preview-frame").getBoundingClientRect();if(!(t.width<8||t.height<8)){if(!si)try{si=new Zr({canvas:J("inventory-preview-canvas"),alpha:!0,antialias:!0,powerPreference:"low-power"}),si.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),si.outputColorSpace=ze,si.toneMapping=Yc,si.toneMappingExposure=1.05,si.setClearColor(0,0),J("inventory-preview-fallback").style.display="none"}catch{mf=!0,J("inventory-preview-fallback").classList.add("visible");return}si.setSize(t.width,t.height,!1),La.aspect=t.width/t.height,La.updateProjectionMatrix()}}function YT(i){!Me||mf||(si||kf(),si&&(Tm+=i,ef+=i,Ie.rotation.y=Math.sin(Tm*.42)*.46,!(ef<1/30)&&(ef=0,si.render(Tr,La))))}function Yn(i){if(i&&(!ai||ge||nn))return;Me=i;let t=J("inventory-overlay");t.classList.toggle("open",i),t.setAttribute("aria-hidden",String(!i)),i?(rn=!1,Ss=null,ao(),ro(),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),vr(),kf()):ke.clear()}function _r(i){if(i&&(!ai||ge))return;i&&Me&&Yn(!1),nn=i;let t=J("menu-overlay");t.classList.toggle("open",i),t.setAttribute("aria-hidden",String(!i)),i?(rn=!1,Ss=null,ao(),ro(),ke.clear(),Aa=0,J("toast").classList.remove("visible"),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock()):ke.clear()}function $T(){if(!Yt)return;let i=Yt,t=i.gameMeta,e=t.inventoryWidth||2,n=t.inventoryHeight||2;if(Ag()+t.mass>Ta+1e-6){de(`\u041F\u0420\u0415\u0412\u042B\u0428\u0415\u041D \u041B\u0418\u041C\u0418\u0422 \xB7 ${Ta} \u041A\u0413`,1.15),J("inventory-message").textContent="\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0442\u044F\u0436\u0435\u043B\u043E: \u043E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u0435 \u043C\u0435\u0441\u0442\u043E \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u043B\u0435\u0433\u0447\u0435.";return}let o=VT(e,n);if(!o){de("\u041D\u0415\u0422 \u0421\u0412\u041E\u0411\u041E\u0414\u041D\u042B\u0425 \u042F\u0427\u0415\u0415\u041A",1);return}let r=Sn.find(c=>c.body===i);if(!r)return;i.gameMeta.isHeld=!1,i.gameMeta.isStored=!0,i.gameMeta.playerCollisionSuspended=!1,i.collisionFilterMask=t.originalCollisionFilterMask,i.linearDamping=t.originalLinearDamping,i.angularDamping=t.originalAngularDamping,i.force.set(0,0,0),i.velocity.set(0,0,0),i.angularVelocity.set(0,0,0),Dt.removeBody(i),zt.remove(r.visual),Yt=null,ci();let a={id:`bag-${++DT}`,meta:t,body:i,visual:r.visual,x:o.x,y:o.y,width:e,height:n};zn.push(a),ri=a.id,vr(),Qi(),de(`\u0412 \u0420\u042E\u041A\u0417\u0410\u041A\u0415 \xB7 ${t.name}`,1),ih("bag"),Yn(!0)}function ZT(i){if(ge)return;if(Yt){de("\u0421\u041D\u0410\u0427\u0410\u041B\u0410 \u041F\u041E\u041B\u041E\u0416\u0418\u0422\u0415 \u0423\u0414\u0415\u0420\u0416\u0418\u0412\u0410\u0415\u041C\u042B\u0419 \u041F\u0420\u0415\u0414\u041C\u0415\u0422",1);return}let t=zn.findIndex(r=>r.id===i);if(t<0)return;let[e]=zn.splice(t,1);if(e.meta.weaponId){Pf(e.meta.weaponId),Yn(!1),vr(),Qi();return}let{body:n,visual:s,meta:o}=e;o.isStored=!1,n.type=At.DYNAMIC,n.mass=o.initialMass,n.collisionFilterMask=o.originalCollisionFilterMask,n.linearDamping=o.originalLinearDamping,n.angularDamping=o.originalAngularDamping,n.force.set(0,0,0),n.velocity.set(0,0,0),n.angularVelocity.set(0,0,0),n.updateMassProperties(),zt.add(s),Dt.addBody(n),Dt.broadphase.dirty=!0,Yn(!1),Eg(o),vr()}function jT(){if(!Yt||Yt.gameMeta?.kind!=="firewood"||!bg())return!1;let i=Yt,t=i.gameMeta,e=Sn.findIndex(s=>s.body===i);if(e<0)return!1;let[n]=Sn.splice(e,1);t.isHeld=!1,Yt=null,Dt.removeBody(i),zt.remove(n.visual);for(let s=En.length-1;s>=0;s--)En[s].userData.gameMeta===t&&En.splice(s,1);return Dt.broadphase.dirty=!0,ci(),va+=52,wi=!0,_s&&(_s.visible=!0),Al=.75+Math.random()*.55,og(),de(va>52?"\u0414\u0420\u041E\u0412\u0410 \u0414\u041E\u0411\u0410\u0412\u041B\u0415\u041D\u042B \xB7 \u041F\u0415\u0427\u042C \u0413\u041E\u0420\u0418\u0422":"\u041F\u0415\u0427\u042C \u0420\u0410\u0421\u0422\u041E\u041F\u041B\u0415\u041D\u0410",1.2),!0}function Cg(){if(ge||!ai||Me||nn)return;if(Yt){jT()||Tg(),Qi();return}let i=Mg();if(ii=i,i&&(i.meta.kind==="weapon"||i.meta.type==="\u041B\u041E\u041F\u0410\u0422\u0410")){vT(i.meta);return}if(Oe==="shovel"&&Si>0){let t=wg();t?Im("dump",t.point):de("\u041D\u0410\u041F\u0420\u0410\u0412\u042C\u0422\u0415 \u041B\u041E\u041F\u0410\u0422\u0423 \u041D\u0410 \u041F\u041E\u041B",1);return}if(!i){de("\u041D\u0415\u0422 \u0426\u0415\u041B\u0418 \u0412 \u0417\u041E\u041D\u0415 \u0414\u041E\u0421\u042F\u0413\u0410\u0415\u041C\u041E\u0421\u0422\u0418",.9);return}if(i.meta.kind==="snowdrift"){if(Oe!=="shovel"){de("\u041D\u0423\u0416\u041D\u0410 \u041B\u041E\u041F\u0410\u0422\u0410",1);return}Im("scoop",i.meta.drift);return}if(i.meta.kind==="stove"){de("\u0412\u041E\u0417\u042C\u041C\u0418\u0422\u0415 \u0414\u0420\u041E\u0412\u0410 \u0418 \u0418\u0421\u041F\u041E\u041B\u042C\u0417\u0423\u0419\u0422\u0415 \u0414\u0415\u0419\u0421\u0422\u0412\u0418\u0415",1.15);return}if(i.meta.kind==="firewood"||i.meta.kind==="prop"){Eg(i.meta),Qi();return}i.meta.kind==="mannequin"&&(Rr(),_g(i.meta.human,i.meta.human.partMap[i.meta.key]||i.meta.human.partMap.torso,0,null,!0))}function KT(i){if(!Yt||ge)return;Rr();let t=Ve.getWorldPosition(ys);Rm.copy(on).multiplyScalar(1.62),ys.add(Rm),ys.y-=.11;let e=Yt;e.updateAABB();let n=Math.max(.08,(e.aabb.upperBound.y-e.aabb.lowerBound.y)*.5);ys.y=Tt.clamp(ys.y,n+.025,5.4-n);let s=Math.sqrt(2.8/e.gameMeta.initialMass),o=Tt.clamp(7.5*s,3,9),r=Tt.clamp(13*s,5,18);e.velocity.set(Tt.clamp((ys.x-e.position.x)*r,-o,o),Tt.clamp((ys.y-e.position.y)*r,-o,o),Tt.clamp((ys.z-e.position.z)*r,-o,o)),e.angularVelocity.set(0,0,0),e.force.set(0,e.mass*9.82,0),e.wakeUp(),e.aabbNeedsUpdate=!0}function JT(){return!Me&&!nn&&!ge&&(ke.has("KeyW")||ke.has("KeyA")||ke.has("KeyS")||ke.has("KeyD")||Math.abs(dn.x)+Math.abs(dn.y)>.12)}function QT(i){if(ge)return;let t=Me?0:dn.x,e=Me?0:-dn.y;Me||(ke.has("KeyA")&&(t-=1),ke.has("KeyD")&&(t+=1),ke.has("KeyW")&&(e+=1),ke.has("KeyS")&&(e-=1));let n=Math.hypot(t,e);n>1&&(t/=n,e/=n);let s=!Me&&(Ql||ke.has("ShiftLeft")||ke.has("ShiftRight")||Math.hypot(dn.x,dn.y)>.84),o=om(s?8.5:5.5,Si),r=-Math.sin(oi)*e+Math.cos(oi)*t,a=-Math.cos(oi)*e-Math.sin(oi)*t,c=Math.min(1,i*(n>.02?13:17));$.velocity.x+=(r*o-$.velocity.x)*c,$.velocity.z+=(a*o-$.velocity.z)*c,n>.02&&(ma+=i*(o+1.6))}function t2(i){if(ql=Math.max(0,ql-i),Ei=Math.max(0,Ei-i*2.6),ge){let r=new Ge($.quaternion.x,$.quaternion.y,$.quaternion.z,$.quaternion.w),a=BT.clone().applyQuaternion(r);Ve.position.set($.position.x+a.x,$.position.y+a.y,$.position.z+a.z),Ve.quaternion.copy(r).multiply(mg),wa=0,ba=0;return}let t=JT(),e=t?Math.sin(ma*2)*.026:0,n=t?Math.sin(ma)*.012:0,s=Ei>0?(Math.random()-.5)*.045*Ei:0,o=Ei>0?(Math.random()-.5)*.036*Ei:0;Ve.position.set($.position.x+n+s,$.position.y+.77+e+o,$.position.z),Ve.rotation.set(ws,oi,0,"YXZ"),ba=t?Math.sin(ma*2+.75)*.012:0,wa=t?Math.sin(ma)*.008:0}function Ig(){kl=!1,Vl=$.position.y,Gl=0}function Pg(){if(!kl)return;let i=Wt($.position.x)+.87,t=Vl-i,e=Gl;if(Ig(),t<2.4||e<5.2)return;let n=Math.min(65,Math.round(10+(t-2.4)*14+(e-5.2)*3));vg(n,"leg-left")}function e2(){if(ge||nn||Me)return;let i=$.position.y,t=$.velocity.y,e=Wt($.position.x);t<-1.2&&i>e+1.25&&(kl=!0,Vl=Math.max(Vl,i),Gl=Math.max(Gl,-t)),kl&&wm<-1.2&&t>-.45&&Pg(),wm=t}function n2(){if(ge)return;let i=Lt.minX+.5,t=Lt.maxX-.5,e=Lt.minZ+.5,n=Lt.maxZ-.5,s=Wt($.position.x);if(![$.position.x,$.position.y,$.position.z].every(Number.isFinite)||$.position.y<s+.48){Pg(),$.position.copy(_a),$.previousPosition.copy(_a),$.interpolatedPosition.copy(_a),$.velocity.set(0,0,0),$.force.set(0,0,0),$.aabbNeedsUpdate=!0,Dt.broadphase.dirty=!0,$.wakeUp(),Ig(),de("\u0412\u041E\u0417\u0412\u0420\u0410\u0422 \u0412 \u0421\u0415\u041A\u0422\u041E\u0420 \xB7 \u041F\u0410\u0414\u0415\u041D\u0418\u0415",1.4);return}($.position.x<i||$.position.x>t)&&($.position.x=Tt.clamp($.position.x,i,t),Math.sign($.velocity.x)===Math.sign($.position.x-(i+t)/2)&&($.velocity.x=0)),($.position.z<e||$.position.z>n)&&($.position.z=Tt.clamp($.position.z,e,n),Math.sign($.velocity.z)===Math.sign($.position.z)&&($.velocity.z=0));let o=Wt($.position.x)+5.02;$.position.y>o&&($.position.y=o,$.velocity.y>0&&($.velocity.y=0)),$.aabbNeedsUpdate=!0}function i2(){let i=!1;for(let t of Sn){let e=t.body.gameMeta;if(!e?.playerCollisionSuspended||e.isHeld||e.isStored||Ar<(e.playerCollisionReEnableAfter||0))continue;let n=Math.max(.34,t.body.boundingRadius||.5),s=t.body.position.x-$.position.x,o=t.body.position.z-$.position.z,r=Math.abs(t.body.position.y-$.position.y);(Math.hypot(s,o)>n+.36||r>n+.9)&&(t.body.collisionFilterMask=e.originalCollisionFilterMask,e.playerCollisionSuspended=!1,i=!0)}i&&(Dt.broadphase.dirty=!0)}function s2(){for(let i of Sn)i.visual.position.copy(i.body.position),i.visual.quaternion.copy(i.body.quaternion)}function Il(i){requestAnimationFrame(Il);let t=Math.min(.05,Math.max(.001,(i-(Il.lastTime||i))/1e3));if(Il.lastTime=i,Ar+=t,YE(t),ge&&(ug+=t),of++,El+=t,El>=1&&(Am=Math.round(of/El),of=0,El=0,Am<32&&!xf&&(xf=!0,en.setPixelRatio(Math.min(window.devicePixelRatio||1,1)))),Aa>0&&(Aa-=t,Aa<=0&&J("toast").classList.remove("visible")),nn){en.render(zt,Ve);return}QT(t),t2(t),PT(t),bT(t),KT(t);for(let e of Sn){let n=e.body.gameMeta?.lastVelocity;n&&(n.x=e.body.velocity.x,n.y=e.body.velocity.y,n.z=e.body.velocity.z)}qS(t),aT(t),FS(t),Dt.step(1/60,t,4),e2(),gf&&(kT(),gf=!1),n2(),i2(),_T(t),UT(t),s2(),sf+=t,sf>.09&&(Qi(),sf=0),en.render(zt,Ve),YT(t)}requestAnimationFrame(Il);function Ng(){let i=window.innerWidth,t=window.innerHeight;Ve.aspect=i/t,Ve.updateProjectionMatrix(),en.setSize(i,t,!1),en.setPixelRatio(Math.min(window.devicePixelRatio||1,xf?1:Pm?1.35:1.7)),Me&&kf()}window.addEventListener("resize",Ng,{passive:!0});window.addEventListener("orientationchange",()=>setTimeout(Ng,120),{passive:!0});var Mr=J("joystick"),Lg=J("joystick-knob"),eo=J("sprint-button"),Vf=null;function ro(){Ql=!1,Vf=null,eo.setAttribute("aria-pressed","false")}eo.addEventListener("pointerdown",i=>{if(!(!ai||ge||nn||Me)){i.preventDefault(),i.stopPropagation(),Vf=i.pointerId,Ql=!0,eo.setAttribute("aria-pressed","true");try{eo.setPointerCapture(i.pointerId)}catch{}}});eo.addEventListener("pointerup",i=>{i.pointerId===Vf&&ro()});eo.addEventListener("pointercancel",ro);eo.addEventListener("lostpointercapture",ro);function zg(i,t){let e=Mr.getBoundingClientRect(),n=e.left+e.width/2,s=e.top+e.height/2,o=i-n,r=t-s,a=36,c=Math.hypot(o,r);c>a&&(o=o/c*a,r=r/c*a),dn.x=o/a,dn.y=r/a,Lg.style.transform=`translate(${o}px, ${r}px)`}function ao(){dn.x=0,dn.y=0,dn.pointerId=null,Lg.style.transform="translate(0px, 0px)"}Mr.addEventListener("pointerdown",i=>{!ai||ge||nn||Me||(i.preventDefault(),dn.pointerId=i.pointerId,Mr.setPointerCapture(i.pointerId),zg(i.clientX,i.clientY))});Mr.addEventListener("pointermove",i=>{i.pointerId===dn.pointerId&&(i.preventDefault(),zg(i.clientX,i.clientY))});Mr.addEventListener("pointerup",i=>{i.pointerId===dn.pointerId&&ao()});Mr.addEventListener("pointercancel",ao);function o2(i){if(!(!ai||ge||Me||nn||i.pointerType==="touch"&&i.clientX<window.innerWidth*.4)&&!i.target.closest("button, #joystick, .vitals-panel")){if(i.pointerType==="mouse"&&document.pointerLockElement!==ga&&ga.requestPointerLock)try{ga.requestPointerLock()}catch{}Xn={pointerId:i.pointerId,x:i.clientX,y:i.clientY,pointerType:i.pointerType}}}window.addEventListener("pointerdown",o2,{passive:!1});window.addEventListener("pointermove",i=>{if(document.pointerLockElement===ga){if(!ai||ge)return;oi-=(i.movementX||0)*.0027,ws=Tt.clamp(ws-(i.movementY||0)*.0027,-1.18,1.18);return}if(!Xn||i.pointerId!==Xn.pointerId)return;let t=i.clientX-Xn.x,e=i.clientY-Xn.y;Xn.x=i.clientX,Xn.y=i.clientY;let n=i.pointerType==="touch"?.0043:.0034;oi-=t*n,ws=Tt.clamp(ws-e*n,-1.18,1.18)},{passive:!0});window.addEventListener("pointerup",i=>{Xn?.pointerId===i.pointerId&&(Xn=null)},{passive:!0});window.addEventListener("pointercancel",()=>{Xn=null},{passive:!0});var Ba=J("action-button"),Fa=null,no=0,yf=!1;function r2(){no&&clearTimeout(no),no=0,Fa=null}Ba.addEventListener("pointerdown",i=>{if(i.preventDefault(),i.stopPropagation(),!(ge||Me||nn)){Fa=i.pointerId,yf=!1;try{Ba.setPointerCapture(i.pointerId)}catch{}no=setTimeout(()=>{Fa!==i.pointerId||ge||(yf=!0,Yn(!0))},560)}});Ba.addEventListener("pointerup",i=>{if(i.preventDefault(),i.stopPropagation(),i.pointerId!==Fa)return;no&&clearTimeout(no),no=0;let t=yf;Fa=null,t||Cg()});Ba.addEventListener("pointercancel",r2);Ba.addEventListener("contextmenu",i=>i.preventDefault());var wr=J("fire-button"),Ss=null;function Gf(i){Ss!==null&&i.pointerId!==void 0&&i.pointerId!==Ss||(Ss=null,rn=!1)}wr.addEventListener("pointerdown",i=>{if(i.preventDefault(),i.stopPropagation(),!(ge||nn||Me)){Ss=i.pointerId,rn=!0;try{wr.setPointerCapture(i.pointerId)}catch{}Df()}});wr.addEventListener("pointerup",Gf);wr.addEventListener("pointercancel",Gf);wr.addEventListener("lostpointercapture",Gf);wr.addEventListener("contextmenu",i=>i.preventDefault());J("reload-button").addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),Lf()});J("drop-button").addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),!(ge||Me||nn)&&(Yt?Sg():Oe&&Nf(!0,!0),Qi())});J("menu-button").addEventListener("click",()=>_r(!nn));J("inventory-button").addEventListener("click",()=>Yn(!Me));J("menu-resume").addEventListener("click",()=>_r(!1));var rf=J("menu-sandbox");rf&&(rf.textContent=Pl?"\u0412\u042B\u0419\u0422\u0418 \u0418\u0417 \u041F\u0415\u0421\u041E\u0427\u041D\u0418\u0426\u042B":"\u0422\u0415\u0421\u0422\u041E\u0412\u0410\u042F \u041F\u0415\u0421\u041E\u0427\u041D\u0418\u0426\u0410",rf.addEventListener("click",()=>{let i=new URL(window.location.href);Pl?i.searchParams.delete("sandbox"):i.searchParams.set("sandbox","test"),window.location.href=i.href}));J("menu-restart").addEventListener("click",()=>window.location.reload());J("menu-overlay").addEventListener("click",i=>{i.target===J("menu-overlay")&&_r(!1)});J("inventory-close").addEventListener("click",()=>Yn(!1));J("inventory-take").addEventListener("click",()=>{if(yr==="all"){Ji&&Ji!==Oe&&(Pf(Ji),Yn(!1));return}ri&&ZT(ri)});J("inventory-tab-bag").addEventListener("click",()=>ih("bag"));J("inventory-tab-all").addEventListener("click",()=>ih("all"));J("inventory-drop").addEventListener("click",()=>{Yt&&(Tg(),vr())});J("inventory-stash").addEventListener("click",()=>$T());J("inventory-overlay").addEventListener("click",i=>{i.target===J("inventory-overlay")&&Yn(!1)});J("death-restart").addEventListener("click",()=>window.location.reload());J("injury-doll").addEventListener("pointerdown",i=>{let t=i.target.closest?.(".doll-part");t&&(i.preventDefault(),i.stopPropagation(),yg(t.id.replace("injury-","")))});J("injury-doll").addEventListener("keydown",i=>{if(!["Enter"," "].includes(i.key))return;let t=i.target.closest?.(".doll-part");t&&(i.preventDefault(),yg(t.id.replace("injury-","")))});document.addEventListener("keydown",i=>{if(nn){(i.code==="Escape"||i.code==="Enter")&&(i.preventDefault(),_r(!1));return}if(ge){if(i.code==="KeyR"){i.preventDefault(),window.location.reload();return}i.target.closest?.("button")||i.preventDefault();return}if(i.code==="Tab"){i.preventDefault(),ai&&Yn(!Me);return}if(i.code==="Escape"){i.preventDefault(),Me?Yn(!1):ai&&_r(!0);return}["KeyW","KeyA","KeyS","KeyD","ShiftLeft","ShiftRight","KeyE","KeyG","KeyR","Space"].includes(i.code)&&i.preventDefault(),ke.add(i.code),i.code==="KeyE"&&!i.repeat&&!Me&&Cg(),i.code==="KeyG"&&!i.repeat&&!Me&&(Yt?Sg():Oe&&Nf(!0,!0),Qi()),i.code==="KeyR"&&!i.repeat&&Lf(),i.code==="Space"&&!Me&&(rn=!0,i.repeat||Df())});document.addEventListener("keyup",i=>{ke.delete(i.code),i.code==="Space"&&(rn=!1)});document.addEventListener("visibilitychange",()=>{document.hidden&&(ke.clear(),ao(),ro(),Xn=null,rn=!1,Ss=null)});window.addEventListener("blur",()=>{ke.clear(),rn=!1,Ss=null,ao(),ro()},{passive:!0});Pl&&GT();Ha();Of();gg();vr();Qi();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
