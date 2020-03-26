$(document).on('turbolinks:load',function(){
  var arr_previews = []
  var up_Cont1 = $('#uploader_Container1')
  var up_Cont2 = $('#uploader_Container2')
  var pre_Cont1 = $("#previews_Container1")
  var pre_Cont2 = $("#previews_Container2")

  // プレビュー追加用
  var append_preview = function(i, p, pre_Cont1, pre_Cont2){
    if (i <= 4) {
      pre_Cont1.append(p)
    }else if (i >= 4 && i <= 9) {
      pre_Cont2.append(p) 
    }
  }
  // インプットエリアの表示用
  var display_inputarea = function(arr_previews, up_Cont1, up_Cont2){
    if (arr_previews.length <= 4) {
      up_Cont1.css({display: 'block'})
      up_Cont2.css({display: 'none'})
    }else if(arr_previews.length <= 9) {
      up_Cont1.css({display: 'none'})
      up_Cont2.css({display: 'block'})
    }else if(arr_previews.length == 10){
      up_Cont2.css({display: 'none'})
    }
  }

  // img追加時-----------------------------------------------------------
  //ファイルの読み込みで発火
  $(".previews_Wrap").on("change", "#img_uploader", function(){
    // preview用のテンプレを用意
    var preview = $(`
      <div class= "previews_Wrap__pre_Container__pre_Box">
        <div class = "preview_Box">
          <img class="preview_Box__img">
        </div>
        <div class = "delete_btn">
          <div>削除</div>
        </div>
      </div>
    `)
    // 追加用inputタグの用意
    var img_uploader = $(`
      <input multiple= "multiple" name="product_imgs[]" id="img_uploader" type="file">
    `)

    // file読み込み時にデータを取得 => 上記imgタグにセット
    file = this.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
      preview.find('img').attr({src: e.target.result})
    }
    // imgを取り込んだプレビューボックスを配列として格納
    arr_previews.push(preview)

    // 画像追加(枚数によって条件分岐)
    $.each(arr_previews, function(i, p) {
      p.attr('data-no', i);
      img_uploader.attr('data-no', i+1);
      up_Cont1.prepend(img_uploader)

      append_preview(i, p, pre_Cont1, pre_Cont2)         // プレビューの表示
    })

    display_inputarea(arr_previews, up_Cont1, up_Cont2)  // インプットエリアの表示
  })

  // img削除時-----------------------------------------------------------
  $('.previews_Wrap').on('click', '.delete_btn', function(e){
    target_box = $(this).parent()
    input_no = target_box.data('no')

    target_box.remove()                       // プレビュー配列から消去
    arr_previews.splice(input_no, 1)          // プレビュー配列から消去
    $(`input[data-no=${input_no}]`).remove()  // インプットタグ消去

    num = up_Cont1.children('input').length
    $.each(up_Cont1.children('input'), function(i, input) {
      $(input).attr('data-no', num - i - 1)
    })

    $.each(arr_previews, function(i, p){
      p.attr('data-no', i)

      append_preview(i, p, pre_Cont1, pre_Cont2)         // プレビューの表示
    })

    display_inputarea(arr_previews, up_Cont1, up_Cont2)  // インプットエリアの表示
  })
})