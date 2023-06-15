[h: thisToken = getSelected()]
[h: angle = arg(0)]
[if(angle == ""): angle = Specify_Angle]
[h, foreach(rotToken, thisToken): setTokenFacing(angle,rotToken)]