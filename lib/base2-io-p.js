eval(function(p,a,c,k,e,r){var b,e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)a[c]=(r[b=e(c)]=k[c])?b:'\\x0';e=function(){return a.join('|')||'^'};k=[function(e){return r[e]}];c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b('+e(c)+')\\b','g'),k[c]);return p}('f 5(_){7 1t=f base2.Namespace(4,{1e:"1t",version:"0.3",1p:"H,Y,1G,17,h,1z,1b"});1v(4.imports);5 m(){1J f 1s("Not supported.");}7 v=f 10({R:K,18:K,"@(v)":{E:5(a,b){1D{7 c=w.classes["@mozilla.org/"+a];7 d=w.1O[b];6 c.createInstance(d)}1N(1j){1J f 1s(format("Failed to P 19 \'%1\' (%2).",b,1j.message));}},R:5(a){6 5(){netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");6 a.apply(4,1k)}},18:5(c){10.forEach(c,5(a,b){9(S a=="5"){c[b]=v.R(a)}})}}});7 H=10.G({o:"/",chdir:5(a){a=4.X(a);9(!/\\/$/.1F(a)){9(4.k(a)){a+="/"}14{a=a.D(/[^\\/]+$/,"")}}4.o=a},X:5(a,b){9(1k.V==1){b=a;a=4.o}6 H.1g(a,b)},W:m,j:m,k:m,N:m,11:m,12:m,q:m,u:m,l:m},{1g:5(a,b){7 c=/[^\\/]+$/;7 d=/\\/[^\\/]+\\/\\.\\./;a=Z(a||"");b=Z(b||"");9(b.charAt(0)=="/"){7 e=""}14{e=a.D(c,"")}e+=b;1d(d.1F(e)){e=e.D(d,"")}6 e}});7 Y=Collection.G({sort:5(){6 4.s(5(a,b,c,d){9(a.k!=b.k){6 a.k?-1:1}14{6 c<d?-1:1}})}},{Q:{B:5(a,b,c){4.1e=Z(a);4.k=Boolean(b);4.size=1u(c||0)},toString:5(){6 4.1e}}});7 1G=H.G({q:5(a){6 h.q(a)},l:5(a,b){6 h.l(a,b)},"@(J)":{B:5(){4.$p=f J("1I.1M")},W:5(a,b){7 c=4.k(a)?"CopyFolder":"CopyFile";4.$p[c](a,b,true)},N:5(a){6 4.$p.1r(a)},k:5(a){6 4.$p.FolderExists(a)},11:5(a){6 4.$p.CreateFolder(a)},12:5(a,b){7 c=4.k(a)?"MoveFolder":"MoveFile";4.$p[c](a,b)},q:5(a){9(4.k(a)){6 f 17(4.$p.GetFolder(a))}6 4.s(a)},u:5(a){9(4.N(a)){4.$p.DeleteFile(a)}14 9(4.k(a)){4.$p.DeleteFolder(a)}}},"@(w)":{B:5(){4.$t=h.$E()},W:5(a,b){6 4.$t.copyTo(b)},j:5(a){6 4.$t.j()},N:5(a){6 4.j()&&4.$t.N()},k:5(a){6 4.j()&&4.$t.k()},11:5(a){6 4.$t.P(1)},12:5(a,b){6 4.$t.moveTo(b)},q:5(a){9(4.k(a)){6 f 17(4.$t.directoryEntries)}6 4.s(a)},u:5(a){4.$t.u(1o)}},"@(C && !1n.w)":{j:5(a){6 f C.I.1m(a).j()}}},{"@(w)":{z:5(){v.18(4.1l)}}});7 17=Y.G({"@(J)":{B:5(a){4.s();7 b=a.files;7 c=b.Count();1q(7 i=0;i<c;i++){4.1L(b.item(i))}}},"@(w)":{B:v.R(5(a){4.s();7 b=a.QueryInterface(w.1O.nsIDirectoryEnumerator);1d(b.hasMoreElements()){4.1L(b.nextFile)}})}},{"@(J)":{P:5(a,b){6 f 4.Q(b.Name,b.Type|16,b.Size)}},"@(w)":{P:5(a,b){6 f 4.Q(b.leafName,b.k(),b.fileSize)}}});7 h=10.G({B:5(a,b){assignID(4);4.o=h.X(a);9(b)4.T(b)},y:0,o:"",A:5(){1i h.15[4.1E];1i 4.$8;4.y=h.13},T:5(a){4.y=a||h.L;h.15[4.1E]=4},j:m,q:m,u:m,l:m,"@(J)":{B:5(a,b){4.$p=f J("1I.1M");4.s(a,b)},A:5(){9(4.$8){4.$8.Close();4.s()}},j:5(){6 4.$p.1r(4.o)},T:5(a){9(!4.$8){4.s(a);1h(4.y){O h.L:9(!4.j()){4.y=h.13;F}4.$8=4.$p.1C(4.o,1);F;O h.M:4.$8=4.$p.1C(4.o,2,-1,0);F}}},q:5(){6 4.$8.ReadAll()},u:5(){6 4.$p.GetFile(4.o).Delete()},l:5(a){4.$8.Write(a||"")}},"@(w)":{B:5(a,b){4.$t=h.$E();4.s(a,b)},$z:5(){7 a=4.$t;1D{a.1B(4.o)}1N(1j){a.1B(1A.1y);a.setRelativeDescriptor(a,4.o)}6 a},A:5(){9(4.$8){9(4.y==h.M)4.$8.flush();4.$8.A();4.s()}},j:5(){6 4.$z().j()},T:5(a){9(!4.$8){4.s(a);7 b=4.$z();1h(4.y){O h.L:9(!b.j()){4.y=h.13;F}7 c=v.E("1x/1c-input-8;1","nsIFileInputStream");c.z(b,0x01,1w,U);4.$8=v.E("scriptableinputstream;1","nsIScriptableInputStream");4.$8.z(c);F;O h.M:9(!b.j())b.P(0,0664);4.$8=v.E("1x/1c-output-8;1","nsIFileOutputStream");4.$8.z(b,0x20|0x02,1w,U);F}}},q:5(){6 4.$8.q(4.$8.available())},u:5(){4.$z().u(1o)},l:5(a){9(a==U)a="";4.$8.l(a,a.V)}},"@(C && !1n.w)":{A:5(){9(4.$8){4.$8.A();4.s()}},j:5(){7 a=f C.I.1m(4.o);6 a.j()},T:5(a){9(!4.$8){4.s(a);1h(4.y){O h.L:7 b=f C.I.FileReader(4.o);4.$8=f C.I.BufferedReader(b);F;O h.M:7 b=f C.I.FileOutputStream(4.o);4.$8=f C.I.PrintStream(b);F}}},q:5(){7 a=[];7 b,i=0;1d((b=4.$8.readLine())!=U){a[i++]=b}6 a.1f("\\r\\n")},l:5(a){4.$8.print(a||"")}}},{13:0,L:1,M:2,15:{},1H:5(a,b){7 c=4.q(a);4.l(b||(a+".1H"),c);6 c},closeAll:5(){7 a=4.15;1q(7 i in a)a[i].A()},j:5(a){6 f 4(a).j()},X:5(a){7 b=/\\//g;7 c=/\\\\/g;7 d=/[^\\/]+$/;a=Z(a||"").D(c,"/");7 e=1A.1y.D(c,"/").D(d,"");e=H.1g(e,a).slice(1);6 decodeURIComponent(e.D(b,"\\\\"))},q:5(a){7 b=f 4(a,4.L);7 c=b.y?b.q():"";b.A();6 c},u:5(a){7 b=f 4(a);b.u()},l:5(a,b){7 c=f 4(a,4.M);c.l(b);c.A()},"@(w)":{z:5(){v.18(4.1l);4.$E=v.R(5(){6 v.E("1c/local;1","t")})}}});7 x="#"+1u(f Date);7 1z=H.G({B:5(d){4[x]=5(c){c=4.X(c);6 reduce(c.1a("/"),5(a,b){9(a&&b)a=a[b];6 a},d)}},j:5(a){6 4[x](a)!==undefined},N:5(a){6 S 4[x](a)=="string"},k:5(a){6 S 4[x](a)=="19"},W:5(a,b){7 c=4[x](a);4.l(b,JSON.W(c))},11:5(a){4.l(a,{})},12:5(a,b){7 c=4[x](a);4.l(b,c);4.u(a)},q:5(a){7 b=4[x](a);6 S b=="19"?f 1b(b):b||""},u:5(a){a=a.D(/\\/$/,"").1a("/");7 b=a.1K(a.V-1,1);7 c=4[x](a.1f("/"));9(c)1i c[b]},l:5(a,b){a=a.1a("/");7 c=a.1K(a.V-1,1);7 d=4[x](a.1f("/"));assert(d,"Y not found.");6 d[c]=b||""}});7 1b=Y.G(U,{P:5(a,b){9(!instanceOf(b,4.Q)){b=f 4.Q(a,S b=="19",b&&b.V)}6 b}});1v(4.1p)};',[],206,'||||this|function|return|var|stream|if||||||new||LocalFile||exists|isDirectory|write|NOT_SUPPORTED||path|fso|read||base|nsILocalFile|remove|XPCOM|Components|FETCH|mode|init|close|constructor|java|replace|createObject|break|extend|FileSystem|io|ActiveXObject||READ|WRITE|isFile|case|create|Item|privelegedMethod|typeof|open|null|length|copy|makepath|Directory|String|Base|mkdir|move|CLOSED|else|opened||LocalDirectory|privelegedObject|object|split|JSONDirectory|file|while|name|join|resolve|switch|delete|error|arguments|prototype|File|global|false|exports|for|FileExists|Error|IO|Number|eval|00004|network|pathname|JSONFileSystem|location|initWithPath|OpenTextFile|try|base2ID|test|LocalFileSystem|backup|Scripting|throw|splice|store|FileSystemObject|catch|interfaces'.split('|'),0,{}));