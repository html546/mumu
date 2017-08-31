		var geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					mk = new BMap.Marker(r.point);
					getAddress(r.point);
				}else{
					alert('failed'+this.getStatus());
				}
			});
			function getAddress(point){
				var gc = new BMap.Geocoder();
				gc.getLocation(point,function(rs){
					var addComp = rs.addressComponents;
					var address = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
					$('.post_content').children('p').find('span').html(address);
				})
			}
			function loadImg1(which,num){
				var file1 = which.files[0];
				var reader = new FileReader();
				var imgFile;
				reader.onload=function(e){
					imgFile = e.target.result;
					console.log(imgFile);
					$(which).prev('img').attr('src',imgFile).parent('div').next('div').show();
					$('.post_upload>p').children('span').html(num);
				};
				reader.readAsDataURL(file1);
			}