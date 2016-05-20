var ctrl = angular.module("AppController",[]);

///////////////////      USER PROFILE      //////////////////

ctrl.controller("userControl", ["$scope", function($scope){
	$.ajax({
        url:"controller/user_c.php",
        dataType:"json",
        type:"POST",
        data:{
            method:"get_user_profile",
            user_id:sessionStorage.user_id,
        },
        success:function(resp){
            $scope.$apply(function(){
                $scope.profiles = resp;
            });

            document.getElementById("update_profile").onclick = function(){
                document.getElementById("update_div").style.display = "block";
                //update user profile
                document.getElementById("update_userbut").onclick = function(){
                    console.log("update profile");
                    $.ajax({
                        url:"controller/user_c.php",
                        type:"POST",
                        dataType:"json",
                        data:{
                            method:"update_user",
                            user_id:sessionStorage.user_id,
                            username:document.getElementById("updated_username").value,
                            password:document.getElementById("updated_password").value,
                            firstname:document.getElementById("updated_firstname").value,
                            lastname:document.getElementById("updated_lastname").value,
                            email:document.getElementById("updated_email").value,
                            address:document.getElementById("updated_address").value,
                            city:document.getElementById("updated_city").value,
                        },
                        success:function(resp){
                            alert("YOUR PROFILE IS UPDATED!");
                            location.reload();
                        }
                    });
                }
            }
        }
    });
}]);


///////////////////      ALL SERVICES      //////////////////

ctrl.controller("allServiceControl", ["$scope", function($scope){
	$scope.serviceName = "Services:";
    $.ajax({
        url:"controller/service_c.php",
        dataType:"json",
        type:"POST",
        data:{
            method:"get_service",
        },
        success:function(resp){
            console.log(resp);
            $scope.$apply(function(){
                $scope.services = resp;
            });

            $(".serv_title").click(function(){
                var id = this.id;
                console.log(id);
                $.ajax({
                   url:"controller/service_c.php",
                    type:"POST",
                    dataType:"JSON",
                    data:{
                        method:"view_one_service",
                        serv_id:id,
                    },
                    success:function(resp1){
                        console.log(resp1);
                        document.getElementById("info").style.display="block";
                        document.getElementById("servimg").src = "uploads/"+resp1[0].serv_img;
                        document.getElementById("infotitle").innerHTML = resp1[0].serv_type;
                        document.getElementById("infodesc").innerHTML = resp1[0].serv_desc;
                        document.getElementById("infoarea").innerHTML = resp1[0].serv_area;
                        document.getElementById("infoprice").innerHTML = resp1[0].serv_price;
                        document.getElementById("infouser").innerHTML = resp1[0].username;


                        document.getElementById("viewuser").onclick = function(){
                            document.getElementById("service_info").style.display="none";
                            document.getElementById("comments").style.display="none";
                            document.getElementById("user_info").style.display = "block";

                            document.getElementById("username").innerHTML =resp1[0].username;
                            document.getElementById("firstname").innerHTML =resp1[0].firstname;
                            document.getElementById("lastname").innerHTML =resp1[0].lastname;
                            document.getElementById("email").innerHTML =resp1[0].email;

                            if (resp1[0].profileimg == ''){
                                document.getElementById("profileimg").src = resp1[0].profileimg;
                            } else {
                                document.getElementById("profileimg").src = "images/sim_jumbotron_cleaning_lady_back.jpg";
                            }
                            
                            document.getElementById("viewuserposts").onclick = function(){
                                sessionStorage.view_userID = resp1[0].user_id;
                                window.location = "service_other_user";
                            }

                            document.getElementById("backtopost").onclick = function(){
                                document.getElementById("service_info").style.display="block";
                                document.getElementById("comments").style.display="block";
                                document.getElementById("user_info").style.display = "none";
                            }

                        }

                        document.getElementById("fav").onclick =function(){
                            console.log(sessionStorage.user_id);
                            console.log(id);
                            $.ajax({
                                url:"controller/favourite_c.php",
                                dataType:"JSON",
                                type:"POST",
                                data:{
                                    method:"insert_favourite",
                                    serv_id:id,
                                    user_id:sessionStorage.user_id,
                                },
                                success:function(resp3){
                                    console.log(resp3);
                                    alert('Now in your favourite');

                                },
                                error:function(error){
                                    console.log(error);
                                }
                            });
                        }
                        
                        $("#CommentSubmit").click(function(){
                            //e.preventDefault();
                            console.log(id);
                            $.ajax({
                                url:"controller/comment_c.php",
                                dataType:"json",
                                type:"POST",
                                data:{
                                    method:"insert_comment",
                                    text:document.getElementById("CommentInput").value,
                                    serv_id:id,
                                    user_id:sessionStorage.user_id
                                },
                                success:function(resp4){
                                    alert("Comment submitted");
                                }
                            });
                        });                                
                        
                        $.ajax({
                            url:"controller/comment_c.php",
                            dataType:"JSON",
                            type:"POST",
                            data:{
                                method:"get_comment_single_serv",
                                serv_id:id
                            },
                            success:function(resp2){
                                console.log(resp2);

                                if (resp2.length == 0){
                                    document.getElementById("no-comments").style.display = "block";
                                }
                                
                                for (i=0;i<resp2.length;i++){
                                    var comment = document.createElement("h4");
                                    comment.innerHTML = resp2[i].text;
                                    document.getElementById("display_comments").appendChild(comment);
                                }
                                
                                document.getElementById("close").onclick = function(){
                                    document.getElementById("info").style.display="none";
                                    
                                    //to remove appended comments from the div
                                    var node = document.getElementById("display_comments");
                                    while (node.hasChildNodes()) {
                                        node.removeChild(node.firstChild);
                                    }
                                }   
                            }
                        });
                    }
                });
            });
        }
    });
}]);

///////////////////      OTHER USER SERVICE      //////////////////

ctrl.controller("otherUserServiceControl", ["$scope", function($scope){
	$scope.serviceName = "Services Post By Another User:";
            
    $.ajax({
        url:"controller/service_c.php",
        dataType:"json",
        type:"POST",
        data:{
            method:"get_user_service",
            user_id:sessionStorage.view_userID,
        },
        success:function(resp){
            console.log(resp);

            $scope.$apply(function(){
                $scope.services = resp;
            });

            $(".serv_title").click(function(){
                var id = this.id;
                console.log(id);
                $.ajax({
                   url:"controller/service_c.php",
                    type:"POST",
                    dataType:"JSON",
                    data:{
                        method:"view_one_service",
                        serv_id:id,
                    },
                    success:function(resp1){
                        console.log(resp1);
                        document.getElementById("info").style.display="block";

                        document.getElementById("servimg").src = "uploads/"+resp1[0].serv_img;
                        document.getElementById("infotitle").innerHTML = resp1[0].serv_type;
                        document.getElementById("infodesc").innerHTML = resp1[0].serv_desc;
                        document.getElementById("infoarea").innerHTML = resp1[0].serv_area;
                        document.getElementById("infoprice").innerHTML = resp1[0].serv_price;
                        document.getElementById("infouser").innerHTML = resp1[0].username;

                        document.getElementById("fav").onclick =function(){
                            console.log(sessionStorage.user_id);
                            console.log(id);
                            $.ajax({
                                url:"controller/favourite_c.php",
                                dataType:"JSON",
                                type:"POST",
                                data:{
                                    method:"insert_favourite",
                                    serv_id:id,
                                    user_id:sessionStorage.user_id,
                                },
                                success:function(resp3){
                                    console.log(resp3);
                                    alert('Now in your favourite');

                                },
                                error:function(error){
                                    console.log(error);
                                }
                            });
                        }
                        
                        $.ajax({
                            url:"controller/comment_c.php",
                            dataType:"JSON",
                            type:"POST",
                            data:{
                                method:"get_comment_single_serv",
                                serv_id:id
                            },
                            success:function(resp2){
                                console.log(resp2);

                                if (resp2.length == 0){
                                    document.getElementById("no-comments").style.display = "block";
                                }
                                
                                for (i=0;i<resp2.length;i++){
                                    var comment = document.createElement("h4");
                                    comment.innerHTML = resp2[i].text;
                                    document.getElementById("comments").appendChild(comment);
                                }
                                
                                document.getElementById("close").onclick = function(){
                                    document.getElementById("info").style.display="none";
                                }   
                            }
                        });
                    }
                });
            });
        }
    });
}]);


///////////////////      OTHER USER SERVICE      //////////////////

ctrl.controller("ownServiceControl", ["$scope", function($scope){
	$scope.serviceName = "Services Posted By You:";
    console.log("User ID: "+sessionStorage.user_id);
    $.ajax({
        url:"controller/service_c.php",
        dataType:"json",
        type:"POST",
        data:{
            method:"get_user_service",
            user_id:sessionStorage.user_id,
        },
        success:function(resp){
            console.log(resp);

            if (resp.length == 0){
                document.getElementById("no_post").innerHTML = "Looks like you haven't posted anything yet!";
            }
            $scope.$apply(function(){
                $scope.services = resp;
            });

            $scope.delete = function(servId){
                $.ajax({
                    url:"controller/service_c.php",
                    type:"POST",
                    dataType:"JSON",
                    data:{
                        method:"delete_service",
                        serv_id:servId
                    },
                    success:function(resp1){
                        location.reload();
                        console.log("deleted service");

                    }
                });
            }

            $(".edit").click(function(){
                var serv_id = this.id;
                console.log(serv_id);
                document.getElementById("EditDiv").style.display = "block";

                document.getElementById("close").onclick = function(){
                    document.getElementById("EditDiv").style.display = "none";
                }

                var myfiles = document.getElementById("ServiceImg");
                var submit = document.getElementById("submit");

                document.getElementById("upload").onclick = function(e){
                    e.preventDefault();

                    console.log(sessionStorage.user_id);
                    var formData = new FormData();
                    
                    var allFiles = myfiles.files;
                    
                    for (var i = 0; i<allFiles.length; i++){
                        var file = allFiles[i];
                        
                        if(file.type.match("image/*")){
                            formData.append("images[]", file, file.name);
                            formData.append ("userid", sessionStorage.user_id);
                        } else {
                            alert("IMAGE ONLY!!!");
                            return false;
                        }
                    }
                    
                    var xhr = new XMLHttpRequest();
                    
                    xhr.open("POST", "upload.php", true);
                    
                    xhr.onload = function(){
                        if(xhr.status == 200){
                            alert("Loaded upload.php successfully");
                        }
                        if(xhr.status == 404){
                            alert("Page Not Found!");
                        }
                    }
                    
                    xhr.send(formData);
                    
                    console.log(myfiles.files);
                    console.log(myfiles.files[0].name);
                    $.ajax({
                        url:"controller/service_c.php",
                        type:"POST",
                        dataType:"JSON",
                        data:{
                            method:"update_service_img",
                            serv_id:serv_id,
                            img_url:sessionStorage.user_id+"/"+myfiles.files[0].name
                        },
                        success:function(resp3){
                            console.log("uploaded");
                        }
                    });
                }

                document.getElementById("update_edits").onclick = function(){
                    
                    $.ajax({
                        url:"controller/service_c.php",
                        type:"POST",
                        dataType:"JSON",
                        data:{
                            method:"update_service",
                            serv_id:serv_id,
                            new_type:document.getElementById("new_type").value,
                            new_desc:document.getElementById("new_desc").value,
                            new_area:document.getElementById("new_area").value,
                            new_price:document.getElementById("new_price").value,
                        },
                        success:function(resp2){
                            location.reload();
                            console.log("updated service");
                        },
                        error:function(error){
                            console.log(error);
                        }
                    });
                }
            });
            $(".showcomments").click(function(){
                var serv_id = this.id;
                console.log(serv_id);
                document.getElementById("EditCommentsDiv").style.display = "block";

                document.getElementById("CloseEditCommentsDiv").onclick = function(){
                    document.getElementById("EditCommentsDiv").style.display = "none";
                }
                
                $.ajax({
                    url:"controller/comment_c.php",
                    type:"POST",
                    dataType:"json",
                    data:{
                        method:"get_comment_single_serv",
                        serv_id:serv_id,
                        //user_id:sessionStorage.myid
                    },
                    success:function(resp){
                        console.log(resp);
                        
                        if (resp.length == 0){
                            document.getElementById("service_own_no-comments").style.display = "block";
                        }

                        for (i=0;i<resp.length;i++){
                            var comment = document.createElement("h4");
                            comment.innerHTML = resp[i].text;
                            document.getElementById("service_own_display_comments").appendChild(comment);
                            
                            var commDiv = document.createElement("div");
                            commDiv.id = resp[i].comm_id;

                            var editCommBut = document.createElement("button");
                            editCommBut.innerHTML = "Edit";
                            editCommBut.id = resp[i].comm_id;
                            editCommBut.style.width = "45%";
                            editCommBut.style.height = "40px";
                            editCommBut.style.color = "white";
                            editCommBut.style.backgroundColor = "#76459e";
                            editCommBut.style.fontSize = "16px";
                            
                            editCommBut.onclick = function(){
                                console.log(this.id);

                                var comm_input = document.createElement("input");
                                comm_input.id = "comm_input";
                                comm_input.style.width = "92%";
                                comm_input.style.height = "40px";
                                comm_input.placeholder = 'update comment...';
                                document.getElementById(this.id).appendChild(comm_input);

                                var updateComment = document.createElement("button");
                                updateComment.id = this.id;
                                updateComment.innerHTML = "Update";
                                updateComment.style.width = "45%";
                                updateComment.style.height = "40px";
                                updateComment.style.color = "white";
                                updateComment.style.backgroundColor = "#76459e";
                                updateComment.style.fontSize = "16px";                                        
                                document.getElementById(this.id).appendChild(updateComment);

                                //UPDATE POST'S COMMENTS
                                updateComment.onclick = function(){
                                    console.log(this.id + " update button clicked");
                                    $.ajax({
                                       url:"controller/comment_c.php",
                                       dataType:"json",
                                       data:{
                                           method:"update_comment",
                                           comm_id:this.id,
                                           text:document.getElementById("comm_input").value
                                       },
                                       type:"POST",
                                       success:function(resp){
                                           alert("UPDATED!");
                                       }
                                   });
                                }
                            }

                            //DELETE IMAGE
                            var deletebut = document.createElement("button");
                            deletebut.innerHTML = "Delete";
                            deletebut.id = resp[i].comm_id;
                            deletebut.style.width = "45%";
                            deletebut.style.height = "40px";
                            deletebut.style.color = "white";
                            deletebut.style.backgroundColor = "#76459e";
                            deletebut.style.fontSize = "16px";
                            deletebut.onclick = function(){
                                //console.log(this.id);
                                var user_id = this.dataset.id;
                                $.ajax({
                                    url:"controller/comment_c.php",
                                    dataType:"json",
                                    type:"POST",
                                    data:{
                                        method:"delete_comment",
                                        comm_id:this.id
                                    },
                                    success:function(resp){
                                        alert("DELETED!");
                                        location.reload();
                                    }
                                });
                            }

                            document.getElementById("EditCommentsDiv").appendChild(commDiv);
                            document.getElementById(resp[i].comm_id).appendChild(comment);
                            document.getElementById(resp[i].comm_id).appendChild(editCommBut);
                            document.getElementById(resp[i].comm_id).appendChild(deletebut);
                        }
                    }
                });
            });
        }
    });
}]);


///////////////////      SEARCH SERVICE      //////////////////

ctrl.controller("searchServiceControl", ["$scope", function($scope){
	$scope.serviceName = "Search for Services:";

    document.getElementById("search_type").onclick = function(){
        console.log("search: " + document.getElementById("service_type").value);
        $.ajax({
            url:"controller/service_c.php",
            dataType:"json",
            type:"POST",
            data:{
                method:"search_services",
                type:document.getElementById("service_type").value,
            },
            success:function(resp){
                console.log(resp);

                $scope.$apply(function(){
                    $scope.services = resp;
                });
                
                if (resp.length == 0){
                    document.getElementById("no-post").style.display = 'block';
                }

                $(".serv_title").click(function(){
                    var id = this.id;
                    console.log(id);
                    $.ajax({
                        url:"controller/service_c.php",
                        type:"POST",
                        dataType:"JSON",
                        data:{
                            method:"view_one_service",
                            serv_id:id,
                        },
                        success:function(resp1){
                            console.log(resp1);
                            document.getElementById("info").style.display="block";

                            document.getElementById("servimg").src = "uploads/"+resp1[0].serv_img;
                            document.getElementById("infotitle").innerHTML = resp1[0].serv_type;
                            document.getElementById("infodesc").innerHTML = resp1[0].serv_desc;
                            document.getElementById("infoarea").innerHTML = resp1[0].serv_area;
                            document.getElementById("infoprice").innerHTML = resp1[0].serv_price;
                            document.getElementById("infouser").innerHTML = resp1[0].username;

                            document.getElementById("fav").onclick =function(){
                                console.log(sessionStorage.user_id);
                                console.log(id);
                                $.ajax({
                                    url:"controller/favourite_c.php",
                                    dataType:"JSON",
                                    type:"POST",
                                    data:{
                                        method:"insert_favourite",
                                        serv_id:id,
                                        user_id:sessionStorage.user_id,
                                    },
                                    success:function(resp3){
                                        console.log(resp3);
                                        alert('Now in your favourite');

                                    },
                                    error:function(error){
                                        console.log(error);
                                    }
                                });
                            }
                            
                            $.ajax({
                                url:"controller/comment_c.php",
                                dataType:"JSON",
                                type:"POST",
                                data:{
                                    method:"get_comment_single_serv",
                                    serv_id:id
                                },
                                success:function(resp2){
                                    console.log(resp2);

                                    if (resp2.length == 0){
                                        document.getElementById("no-comments").style.display = "block";
                                    }
                                    
                                    for (i=0;i<resp2.length;i++){
                                        var comment = document.createElement("h4");
                                        comment.innerHTML = resp2[i].text;
                                        document.getElementById("comments").appendChild(comment);
                                    }
                                    
                                    document.getElementById("close").onclick = function(){
                                        document.getElementById("info").style.display="none";
                                    }   
                                }
                            });
                        }
                    });
                });
            }
        });
    }
}]);

///////////////////      SEARCH SERVICE      //////////////////

ctrl.controller("favouritesControl", ["$scope", function($scope){
    $scope.serviceName = "Your Favourites: ";
            
    console.log(sessionStorage.user_id);
    $.ajax({
        url:"controller/favourite_c.php",
        dataType:"json",
        type:"POST",
        data:{
            method:"get_user_favourite",
            user_id:sessionStorage.user_id,
        },
        success:function(resp){
            console.log(resp);

            if (resp.length == 0){
                document.getElementById("no_fav").innerHTML = "Looks like you don't have any favourites yet!";
            }
            $scope.$apply(function(){
                $scope.services = resp;
            });

            $scope.comments = function(servId){
                $.ajax({
                    url:"controller/comment_c.php",
                    dataType:"JSON",
                    type:"POST",
                    data:{
                        method:"get_comment_single_serv",
                        serv_id:servId
                    },
                    success:function(resp2){
                        //console.log(resp2);

                        var div = document.createElement("div");
                        div.id = "CommentsDiv";
                        document.body.appendChild(div);

                        var close = document.createElement("div");
                        close.innerHTML = "X";
                        close.id = "close";
                        div.appendChild(close);

                        var h2 = document.createElement("h2");
                        h2.innerHTML = "Comments:";
                        h2.id = "commentstitle";
                        div.appendChild(h2);

                        if (resp2.length == 0){
                            var comment = document.createElement("h4");
                            comment.innerHTML = "There's no comment for this service";
                            div.appendChild(comment);
                        }
                        
                        for (i=0;i<resp2.length;i++){

                            var comment = document.createElement("h4");
                            comment.innerHTML = resp2[i].text;
                            div.appendChild(comment);
                        }
                        
                         close.onclick = function(){
                            div.removeChild(h2);
                            div.removeChild(comment);
                            document.body.removeChild(div);
                        }   
                    }
                });
            }

            $scope.delete = function(servId){
                $.ajax({
                    url:"controller/favourite_c.php",
                    type:"POST",
                    dataType:"JSON",
                    data:{
                        method:"delete_favourite",
                        serv_id:servId,
                        user_id:sessionStorage.user_id,
                    },
                    success:function(resp1){
                        location.reload();
                        console.log("deleted favourite");

                    }
                });
            }
        }


    });
}]);