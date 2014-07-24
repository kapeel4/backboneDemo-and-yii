<?php

class ContactController extends Controller
{
	public function actionIndex()
	{
		$this->render('index');
	}
  public function actioncontactInfo() {
       var_dump('tytt');
       exit();

        $contact_id = Yii::app()->request->getParam("contact_id");

        $row = Contact::model()->addContactData($contact_id);
        //$this->renderJSON(array("_data" => $row));
    }

    public function actionGetContactList(){
    	$contactList = Contact::model()->getContactList();
    	echo CJSON::encode($contactList);
    }

    public function actionAddContactList(){
    	
    	 $contactdata = Yii::app()->request->getParam('postData');
      
        $response= Contact::model()->addContactList($contactdata);
       
       echo CJSON::encode($response);
       // var_dump($contactdata);
       // exit();
    }


   public function actionGetUpdateContact(){
     	
        $post_data = Yii::app()->request->getParam('postdata');

         $response = Contact::model()->getUpdateContact($post_data);
         
        echo CJSON::encode($response);
        
   }

   public function actionDeleteContactData(){
   	$post_data = Yii::app()->request->getParam('postdata');
   
   	$response = Contact::model()->deleteContact($post_data);
    // var_dump($post_data);
    // exit();
         
         echo CJSON::encode($response);
   	
   }
	// Uncomment the following methods and override them if needed
	/*
	public function filters()
	{
		// return the filter configuration for this controller, e.g.:
		return array(
			'inlineFilterName',
			array(
				'class'=>'path.to.FilterClass',
				'propertyName'=>'propertyValue',
			),
		);
	}

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