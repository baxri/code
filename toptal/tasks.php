<?php

$T = [];

$T[] = "test1a";
$T[] = "test2";
$T[] = "test1b";
$T[] = "test1c";
$T[] = "test3";


$R = [];

$R[] = "OK";
$R[] = "OK";
$R[] = "OK";
$R[] = "Wrong Answer";
$R[] = "Time limit exceeded";


function solution($T, $R)
{
    $groups = [];

    foreach ($T as $key => $t) {
        $last_element = substr($t, -1);

        // Get real task name
        $task_name = !is_numeric($last_element) ? substr($t, 0, -1) : $t;

        // Check result for current task test case
        $last_result = isset($groups[$task_name]) ? $groups[$task_name] : true;

        // Group all this tasks and calculate task result
        $groups[$task_name] = testIsOk($R[$key]) && $last_result;
    }

    // Calculate correct answers
    $correct_answers = 0;

    foreach ($groups as $group) {
        if ($group) $correct_answers++;
    }

    // get the last score
    $score = intval(($correct_answers * 100) / count($groups));

    return $score;
}

function testIsOk($result)
{
    return $result == 'OK';
}

d(solution($T, $R));


function d($str, $die = true)
{
    echo '<pre>';
    var_dump($str);
    echo '</pre>';
    if ($die)
        die;
}