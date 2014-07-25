<?php

class FileUploadController extends Controller
{
	public function actionIndex()
	{
		$this->render('index');
	}
			public function actioncontactUpload(){
			      // Generate filename
			// Read RAW data

			$data = file_get_contents('php://input');

			$imageDetail = getimagesize('data://'.substr($data, 5));

			$filename = md5(mt_rand()).'.jpg';

			
			// Read string as an image file
			$image = file_get_contents('data://'.substr($data, 5));

			// Save to disk
			if (! file_put_contents('images/'.$filename, $image)) {
			 header('HTTP/1.1 503 Service Unavailable');
			}
			$thumb = imagecreatetruecolor(100, 100);
			$source = imagecreatefromjpeg('data://'.substr($data, 5));

			imagecopyresized($thumb, $source, 0, 0, 0, 0, 100, 100, $imageDetail[0], $imageDetail[1]);
			//file_put_contents(, );
			imagejpeg($thumb,'images/thumb/'.$filename);

	echo $filename;
	}

	
	// Uncomment the following methods and override them if needed
	/*
	

	public function actions()
	{
		// return external action classes, e.g.:
		return array(
			'action1'=>'path.to.ActionClass',
			'action2'=>array(
				'class'=>'path.to.AnotherActionClass',
				'propertyName'=>'propertyValue',
			),
		);
	}
	*/
}