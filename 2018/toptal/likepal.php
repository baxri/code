<?php

$STR1 = 'tra';
$STR2 = 'rta';

function solution($STR1, $STR2)
{
    $STR1 = array_flip(str_split($STR1));
    $STR2 = array_flip(str_split($STR2));

    foreach ($STR1 as $key => $symbol) {
        if (isset($STR2[$key])) {
            unset($STR1[$key]);
            unset($STR2[$key]);
        }
    }

    if (!count($STR1) && !count($STR2)) {
        return true;
    }

    return false;
}

function testIsOk($result)
{
    return $result == 'OK';
}

d(solution($STR1, $STR2));

function d($str, $die = true)
{
    echo '<pre>';
    print_r($str);
    echo '</pre>';
    if ($die) {
        die;
    }
}
