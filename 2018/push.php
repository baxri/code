<?php


function sendPush($gcm_reg_id, $message)
{
    $url = 'https://fcm.googleapis.com/fcm/send';
    $api_key = 'AAAAyeh_vwY:APA91bGz-CfWiyPKdcDqe8dYW6zK4aWQlm5gcvFwvB2YMRMJK9dK4sGtdq0R48wMpKr4DWtlNYgBtbWk-Er7OHCUkvLR0PIS3r2LZ7NxBSaJPOdgRu7xPv7kW1Q3to3zE38SlDuisI32n9AVn8I8RPHBz-8vdl-axQ';

    $fields = array(
        'registration_ids' => [$gcm_reg_id],
        'priority' => 'high',
        'notification' => array(
            'title' => 'Pesoto',
            'text' => $message,
        ),

        'data' => array(
            'title' => 'Pesoto',
            'text' => $message,
        ),
    );

    $headers = array(
        'Authorization: key=' . $api_key,
        'Content-Type: application/json'
    );

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
    $result = curl_exec($ch);

    if ($result === FALSE) {
        //die('Curl failed: ' . curl_error($ch));
    }

    curl_close($ch);
    return $result;
}