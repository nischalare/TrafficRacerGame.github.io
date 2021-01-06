/* (1) In this javascript file, we have declared a function and inside it we have declared variables */
$(function() {

    var anim_id;

    //saving dom objects to variables
    var container = $('#container');
    var car = $('#car');
    var car_1 = $('#car_1');
    var car_2 = $('#car_2');
    var car_3 = $('#car_3');
    var line_1 = $('#line_1');
    var line_2 = $('#line_2');
    var line_3 = $('#line_3');
    var restart_div = $('#restart_div');
    var restart_btn = $('#restart');
    var score = $('#score');
    // The getItem() method allows you to access the data stored in the browser's localStorage object.
    // It accepts only one parameter which is the key and returns the value as a string.
    var high_score = localStorage.getItem('high_score');
    //  .text() is a method in jQuery which is used to get the combined text contents of each element in the set of matched elements,
    //  including their descendants, or set the text contents of the matched elements.
    $('#high_score').text(high_score);
// (2) When the game starts, we want some initial setup to be saved to the variables like css dot left, width, height
    // The parseInt() function parses a string and returns an integer  of the specified radix
    //  (the base in mathematical numeral systems).
    var container_left = parseInt(container.css('left'));
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var car_width = parseInt(car.width());
    var car_height = parseInt(car.height());

// (3) Intitally we are setting the game over variable to be false
    var game_over = false;
// (4) Initially we are setting the score counter to be 1
    var score_counter = 1;
// (5) Initially speed is set to 2
    var speed = 2;
// (6) Initially, line speed is set to 5
    var line_speed = 5;
// (7) For the movement of our cars, initially move right, move left, move up and move down are false for the very first time
//       we paly the game.
    var move_right = false;
    var move_left = false;
    var move_up = false;
    var move_down = false;

/* (10) Now let's discuss the actual code   */

// (11) Firstly, we have four movements for our car i.e. (the player's car) like right, left, up and down



//  The on() is an inbuilt method in jQuery which is used to attach one or more event handlers for
//      the selected elements and child elements in the DOM tree.

// The keydown event occurs when a keyboard key is pressed down.
//  The keydown() method triggers the keydown event, or attaches a function to run when a keydown event occurs.

// (12) We say document dot on keyword function, and let's save it to a variable 'e'
    $(document).on('keydown', function(e) {
// (13) So, on keydown, we have to check whether the game_over is still false
        if (game_over === false) {

          // The event.keyCode property returns the Unicode character code of the key that triggered the onkeypress event,
          //  or the Unicode key code of the key that triggered the onkeydown or onkeyup event.

// (14)  That is, if the game is not over, We'll save the key to a variable called key which is a key pressed
//           which we're going to say as keyCode.
// (15) We'll get the key pressed and we're saving it to a variable called key.
            var key = e.keyCode;
// (16) Now, let's write the code for moving the car to the left using the left arrow key.
//       The key code is 37 for left arrow key on keyboard of a computer.
//         We'll check still the move left is false.

            if (key === 37 && move_left === false) {

          // The requestAnimationFrame() is one of the methods present in JavaScript to powerfully incorporate
          //   amazing and simple animations within our project.

// (17) If it is false, we will update move left with a function which is our request animation frame.
//        We'll use this a lot as this gives a smooth animation across all of the devices out there which the other functions
//            can't provide ( like the setTimeout() or setInterval() functions)
// request animation frame of function, in our case, it is 'left' which we have'nt defined yet. So, let's define it first
                move_left = requestAnimationFrame(left);
// (33) Similarly, now let's write the code for the right arrow key. The right arrow key keyCode is 39 and the function
//       name is move_right
            } else if (key === 39 && move_right === false) {
// (34) move_right function is assigned to requestAnimationFrame of right. So, now, let's define the right function.
                move_right = requestAnimationFrame(right);
// (44) The up arrow key key code is 38 and this will be, if move up is false,
            } else if (key === 38 && move_up === false) {
// (45) Then move up will be request animation frame of up.
                move_up = requestAnimationFrame(up);
// (54) Similarly, now let's write the code for down arrow key. key code for down arrow key is 40 and move down is set to false
            } else if (key === 40 && move_down === false) {
// (55) Also, request aniamtion frame of down.
                move_down = requestAnimationFrame(down);
            }
        }
    });
    // The keyup() is an inbuilt method in jQuery which is used to trigger the keyup event whenever User releases a key
    //  from the keyboard. So, Using keyup() method we can detect if any key is released from the keyboard.

// (22) Let's write the code for key up, otherwise the request animation will make our browsers struck.
//        document dot on key up function of 'e'.
    $(document).on('keyup', function(e) {
// (23)   We have to check whether the game is over or not.
        if (game_over === false) {
// (24) If game_over is false, save the key to variable key, e dot keycode.
            var key = e.keyCode;
// (25) Now, we have to check whether the key up is key 37.
            if (key === 37) {

    // The cancelAnimationFrame() method cancels an animation frame request previously scheduled through a call
    //    to requestAnimationFrame().

// (26)  Then we will cancel the animation for which the method used is
//       cancelAnimationFrame and we'll pass the id that is assigned for the requestAnimationFrame, which, in this case,
//         is move_left.
                cancelAnimationFrame(move_left);
// (27) We'll update move_left to false. So, the next time when the left arrow key in our keyboard is pressed, the call
//       will come here and it will check whether move_left is false.
// (28) When it's true, then it will call the request animation frame again. We can now chech if it's working.
// (29) If we press the left arrow key, the car must move to the left side of the road. But if we carefully observe the car
//       will go outside the container and this is not what we want. let us prevent or resolve the issue of our car going outside
//       the container.
                move_left = false;
// (39) Now, Let's write the keyup of the right arrow key. If the key is 39,
            } else if (key === 39) {
// (40)  cancel animation frame of move right
                cancelAnimationFrame(move_right);
// (41) And update move_right to false and now we can check in browser again if the car is moving right when right arrow key is pressed
//       again, we will notice the same problem i.e. car goes outside the container when we press the right arrow key.
                move_right = false;
// (50) If key is 38, request animation frame of move up,
            } else if (key === 38) {
// (51) cancel animation frame of move up
                cancelAnimationFrame(move_up);
// (52)  then move up will be set to false
//        If we save this code and check if the car moves up when we press the up arrow key in our keyboard, we observe that
//          the car moves up and goes out of the container.
                move_up = false;

            } else if (key === 40) {

                cancelAnimationFrame(move_down);
                move_down = false;
            }
        }
    });

// (18) Function left, here we are going to check if game over is false.
    function left() {
// What we're going to do inside it is, we are going to move the car to the left which means we have to set the car's left
//  in the css. So, we are going to decrease it.

// (30) For that, what we need to do is, we have to check whether the car's css_left is greater than zero.
//       That will prevent the car from going outside the container.
//        So, If the car's left is greater than zero, then move the car otherwise don't allow the car to move to the left. We
//          have added that condition in the left function below.
// (31) Just add && parse int of car dot css left is greater than zero and that will resolve the our issue.
// (32) Now, after these additional conditions being added to the left function, save it and reload the web page, press the left
//       arrow key and now we can observe that the car will not go out of the container.
//        The car will now get stuck when it hits the left side of the container.
        if (game_over === false && parseInt(car.css('left')) > 0) {
// (19) Let's save the car to variable 'car' dot css left. We're setting the car's css left to parseInt of car dot css
//        of left minus five. We're going to decrease the left so that the car moves to the left.
            car.css('left', parseInt(car.css('left')) - 5);
// (20) Now, the request animation frame, which is a function wil be updated. So, we'll call it request animation frame of
//        left function and we'll save to the id variable move_left.
            move_left = requestAnimationFrame(left);
// (21) So, all of this will move our car to the left, whenever the left arrow key in our keyboard is pressed.
        }
    }

// (35) Let us define the right function,
    function right() {
// (36) First check if the game_over is false,
// (42) Check here and pass the parse int of car dot css left is less than container width minus car width. So, we have used
//       different logics for left and right arrow keys.

        if (game_over === false && parseInt(car.css('left')) < container_width - car_width) {
// (43) Now taht we are done with the left and right arrow keys, let us proceed further in our discussion and code for
//       up and down arrow keys.
// (37) If it is false then car dot css of left. If we want to move the car to the right, we are going to increase the left
//        So, this is going to be plus five
            car.css('left', parseInt(car.css('left')) + 5);
// (38) And move_right will be updated with request animation frame of right. This is also a recursive function meaning the
//       function is calling itself again and again.
            move_right = requestAnimationFrame(right);
        }
    }
// (46) Let's create the up function,
    function up() {
// (47) If the game_over is false,
// (53) For this issue to be resolved, we need to specify a condition in the up function i.e. we give && parse int of car
//       dot css of top is greater than zero. (It must not be a negative value)
        if (game_over === false && parseInt(car.css('top')) > 0) {
// (48) In css, we have defined top, So, car dot css of top,If we want to go up, we will decrease the top to minus five
            car.css('top', parseInt(car.css('top')) - 3);
// (49) move up is set to request animation frame of up. Let's also write the code for key up
            move_up = requestAnimationFrame(up);
        }
    }
// (56) Now, let's write the down function. In the down function,

    function down() {
// (57) If the game over is false, for car to move down,
// (61) To resolve this issue, again in the down function
//         we have to specify a condition.
// (62) car's top must be less than container's height minus car's height
//       && parse int of car dot css of top is less than container height minus car height.
// (63) Now, if we check, we can see our car wont go out of the container when down arrow key is pressed continuously
        if (game_over === false && parseInt(car.css('top')) < container_height - car_height) {
// (58)  car dot css of top must be increased to five.
            car.css('top', parseInt(car.css('top')) + 3);
// (59) move down is set to request animation frame of down.
            move_down = requestAnimationFrame(down);
// (60) Let's check in the browser, if it's working again the car, when
//       down key is pressed continuously, it will go outside the container.
        }
    }

    /* Move the cars and lines */
// (64) Now, Let's start the game by bringing those cars and lines down.
// (65) For this purpose, we are going to use another request animation frame and we'll save that id animation to a variable we declared
//        earlier which is the aniamtion id.
// (66) Let's call that anim_id is equal to request animation frame of repeat.
    anim_id = requestAnimationFrame(repeat);

// (67)  This is going to bring those cars and those
//       lines moving.

// (85) Now, we have to write code to detect whether a car is collided with other cars or not.
    function repeat() {
// (86) In the function repeat, if collision of car, car1 or collision of car and car2 or collision of car and car3 i.e. if our car collides
//       with any one of these three cars, then say stop the game function.
        if (collision(car, car_1) || collision(car, car_2) || collision(car, car_3)) {
            stop_the_game();
            return;
        }
// (92) Now we have to update the score and after some time we want to change the speed of the car and those lines. So that the user
//       feels the cars are coming faster. Let's write the code for that.

// (93) Let's increment the score counter each time when the repeat function is called.
        score_counter++;
// (94) We'll say if score counter percentage 20 is equal to zero, then we will update the score.
        if (score_counter % 20 == 0) {
// (95) So, score dot text will be parse int of score dot text plus one.
            score.text(parseInt(score.text()) + 1);
        }
// (96) Now, we will change the speed of the game which is the speed of all those cars and lines. Let's use the score counter itself
//       score counter percentage 300 is zero
        if (score_counter % 300 == 0) {
// (97) We will increase the speed
            speed++;
// (98) Let's increase the line speed too.
            line_speed++;
        }
// (67) Let's say car down of car 1, car 2 and car 3.
        car_down(car_1);
        car_down(car_2);
        car_down(car_3);
// (78) Now, Let's move those lines down as shown below.
        line_down(line_1);
        line_down(line_2);
        line_down(line_3);
// (68) Since this is recursive function, we need to call it inside the repeat function itself
        anim_id = requestAnimationFrame(repeat);
    }
// (69) Let's now define the car_down function,
//       function car down which accepts the parameter car
    function car_down(car) {
// (70) Now let's save the current top which will be parenthesis of car dot css of top
        var car_current_top = parseInt(car.css('top'));
// (71) Let's bring the car down for that we increase the top, so that those cars will come down
// (73) If the car current top is greater than container height, then we will update the current top equal to -200
        if (car_current_top > container_height) {
            car_current_top = -200;
// (74) Now if we check the output in the browser, even though those 3 cars are coming down continuously in the container, but their
//       positions are same (everytime they come down in same postions or locations) and not changing. We dont want that.

         // The Math.random() function is used to return a floating-point pseudo-random number between range [0,1) , 0 (inclusive) and
        //  1 (exclusive).This random number can then be scaled according to the desired range.

// (75) To resolve this issue, we can change the car's left each time when they re appear. So, for that, we say,
//       var car left is eual to parse int of math dot random function multiplied by container width minus car width.
            var car_left = parseInt(Math.random() * (container_width - car_width));
// (76) We did this to ensure the random number generated must be within the container width.
// (77) Now, Let's assign this new left to a car dot css of left will be car left.
            car.css('left', car_left);
        }
// (72) Set the car css top to current top plus speed
        car.css('top', car_current_top + speed);
    }

// (79) Now, Let's define the line down function.
    function line_down(line) {
// (80) Inside this line down function, write that the variable line current top is assigned to parse int dot css of top.
        var line_current_top = parseInt(line.css('top'));
// (82) Again we have to ensure that once, they these lines go outside teh container, they must reappear. To fix this, write
//       an if statement and inside, specify the condtion, line current top is greater than container height.
        if (line_current_top > container_height) {
// (83) Then update the line current top to minus three hundred.
            line_current_top = -300;
// (84) Now, the lines come back if we check in the browser.
        }
// (81) Line dot css of top will be updated with line line current top plus line speed.
        line.css('top', line_current_top + line_speed);
    }

    restart_btn.click(function() {
        location.reload();
    });
// (87) Now, Let's declare the stop game function. function stop the game.
    function stop_the_game() {
// (88) Inside it, we will first set the game over to true
        game_over = true;
// (89) We have to cancel all those animations
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
// (90) Now, we want the restart div to slide down or show on screen. We select the restart div dot slide down and now we can play the game
//       to see everything  in action.
        restart_div.slideDown();
// (91) We should give the user a provision to press enter and restart the game. Let's write the code for that.
//       select the restart butoon dot focus method.
        restart_btn.focus();
        setHighScore();
    }
// (99) Finally, let's declare the set high score function we we have used above (in line number 332)
    function setHighScore() {
        if (high_score < parseInt(score.text())) {
            high_score = parseInt(score.text());
            localStorage.setItem('high_score', parseInt(score.text()));
        }
        $('#high_score').text(high_score);
    }

/* (8) Next we have a function called collision and this is the function that is used to detect whether two divs collide or not
         i.e. the player car's div and any one of the three opponent car's div    */

// (9) That is how we check whether the game is over or not


    function collision($div1, $div2) {
      // The . offset() method allows us to retrieve the current position of an element
      //   (specifically its border box, which excludes margins) relative to the document.

      //  The offsetLeft property returns the left position (in pixels) relative to the left side the offsetParent element.
      //  The returned value includes:
      //  the left position, and margin of the element. the left padding, scrollbar and border of the offsetParent element.
        var x1 = $div1.offset().left;
      // The Element.offsetTop read-only property returns the distance of the current element relative to the top of the
      // offsetParent node.
        var y1 = $div1.offset().top;
        // The outerHeight() method returns the outer height of the FIRST matched element.
        var h1 = $div1.outerHeight(true);
        // The outerWidth() method returns the outer width of the FIRST matched element.
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;
        // The return statement stops the execution of a function and returns a value from that function.
        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }



});
