<?php

$S = 'ACCAABBC';

function solution($S)
{
    $S = str_split($S);
    $new = [];

    for ($i = 0; $i < count($S); ++$i) {
        $current = $S[$i];
        $next = isset($S[$i + 1]) ? $S[$i + 1] : null;

        if ($current != $next) {
            $last = isset($new[count($new) - 1]) ? $new[count($new) - 1] : null;

            if ($last == $current) {
                unset($new[count($new) - 1]);
            } else {
                $new[] = $current;
            }
        } else {
            ++$i;
        }
    }

    return implode('', $new);
}

function d($str, $die = true)
{
    echo '<pre>';
    print_r($str);
    echo '</pre>';
    if ($die) {
        die;
    }
}

print_r(solution($S));
