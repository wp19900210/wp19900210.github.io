        function registeropen(){
    		var x = document.getElementsByClassName("register-box");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "block";
            }
        }
        function registerclose(){
    		var x = document.getElementsByClassName("register-box");
            var i;
            for (i = 0; i < x.length; i++) {
               x[i].style.display = "none";
            }
        }
        var timer=null;
        var aNow=null;
        var g_aImg=[];
        var g_oImgWeek=null;
        var g_aWeekName=
        [
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven"
        ];

        window.onload=function(){
            var aid=document.getElementById('a');
            var adiv=aid.getElementsByTagName('div');
            var aimg=aid.getElementsByTagName('img');
            for (var i = 0; i < adiv.length; i++) {
                adiv[i].index=i;
                adiv[i].onmouseover=function(){
                    for (var i = 0; i < adiv.length; i++) {
                        adiv[i].className='tab-left2';
                        aimg[i].style.display='none';
                    }
                    this.className='tab-left1';
                    aimg[this.index].style.display='block';
                }
            }
            var bid=document.getElementById('b');
            var bdiv=bid.getElementsByTagName('div');
            var bimg=bid.getElementsByTagName('img');
            for (var i = 0; i < bdiv.length; i++) {
                bdiv[i].index=i;
                bdiv[i].onmouseover=function(){
                    for (var i = 0; i < bdiv.length; i++) {
                        bdiv[i].className='tab-left5';
                        bimg[i].style.display='none';
                    }
                    this.className='tab-left4';
                    bimg[this.index].style.display='block';
                }
            }
                var oDiv=document.getElementById('Clock');
    var aImg=oDiv.getElementsByTagName('img');
    var i=0;
    for(i=0;i<aImg.length;i++)
    {
        if(!isNaN(parseInt(aImg[i].alt)))
        {
            g_aImg.push(aImg[i]);
        }
    }
    g_aImg.push(aImg[aImg.length-1]);
    aNow=getTimeArray();
    for(i=0;i<g_aImg.length;i++)
    {
        g_aImg[i].now=-1;
    }
    checkSwitch();
    setInterval(checkSwitch, 1000);
    checkSwitch();

        }
        var g_iImgHeigth=0;
var g_iTarget=0;
var g_iMax=0;

function checkSwitch()
{
    var i=0;
    
    aNow=getTimeArray();
    
    g_imgHeigth=g_aImg[0].offsetHeight;
    g_iTarget=-g_imgHeigth;
    g_iMax=g_imgHeigth;
    
    timer=setInterval(doSwitch, 30);
}

function doSwitch()
{
    var bEnd=false;
    var i=0;
    
    g_imgHeigth-=5;
    if(g_imgHeigth<=g_iTarget)
    {
        g_imgHeigth=g_iTarget;
        bEnd=true;
    }
    
    for(i=0;i<g_aImg.length;i++)
    {
        if(g_aImg[i].now!=aNow[i])
        {
            if(g_imgHeigth>0)
            {
                g_aImg[i].style.height=g_imgHeigth+'px';
                g_aImg[i].style.top=-(g_iMax-g_imgHeigth)/2+'px';
            }
            else
            {
                if(i==g_aImg.length-1)
                {
                    g_aImg[i].src="images/" + g_aWeekName[aNow[i]] + ".png";
                }
                else
                {
                    g_aImg[i].src="images/" + aNow[i] + ".png";
                }
                
                g_aImg[i].style.height=-g_imgHeigth+'px';
                g_aImg[i].style.top=-(g_iMax+g_imgHeigth)/2+'px';
            }
        }
    }
    
    if(bEnd)
    {
        for(i=0;i<g_aImg.length;i++)
        {
            g_aImg[i].now=aNow[i];
        }
        
        clearInterval(timer);
    }
}

function toDouble(iNum)
{
    if(iNum<10)
    {
        return '0'+iNum;
    }
    else
    {
        return ''+iNum;
    }
}

function getTimeArray()
{
    var oDate=new Date();
    var aNumber=[];
    
    var iYear=oDate.getYear();
    var iMonth=oDate.getMonth();
    var iDay=oDate.getDate();
    var iHour=oDate.getHours();
    var iMin=oDate.getMinutes();
    var iSec=oDate.getSeconds();
    var iWeek=(oDate.getDay()+6)%7;
    
    if(iYear<1900)
    {
        iYear+=1900;
    }
    
    var str=''+(iYear)+toDouble(iMonth+1)+toDouble(iDay)+toDouble(iHour)+toDouble(iMin)+toDouble(iSec)+iWeek;
    var aChar=str.split('');
    for(i=0;i<aChar.length;i++)
    {
        aNumber[i]=parseInt(aChar[i]);
    }
    
    return aNumber;
}
    