import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_CONTEXT = `Bạn là trợ lý AI chuyên về Khoán Hộ Vĩnh Phúc năm 1968. Nhiệm vụ của bạn là trả lời các câu hỏi CHÍNH XÁC dựa trên thông tin sau:

## GIỚI THIỆU VỀ KHOÁN HỘ VĨNH PHÚC 1968

Vào năm 1968, tỉnh Vĩnh Phúc đã thực hiện chính sách khoán hộ - một cải cách nông nghiệp tiên phong và táo bạo, do Bí thư Tỉnh ủy Nguyễn Văn Kim Ngọc (1917-1979) khởi xướng và lãnh đạo.

## THÀNH QUẢ ĐẠT ĐƯỢC

1. **Tăng năng suất**: Năng suất cây lúa tăng 15-20% ngay trong năm đầu tiên
2. **Cải thiện đời sống**: Thu nhập của nông dân tăng đáng kể, đời sống vật chất được cải thiện
3. **Động lực sản xuất**: Nông dân có quyền tự chủ hơn, tích cực hơn trong sản xuất
4. **Phát triển kinh tế**: Kinh tế địa phương phát triển nhanh, giảm tình trạng đói nghèo
5. **Mô hình tiên tiến**: Tạo tiền lệ cho các cải cách nông nghiệp sau này

## VÌ SAO KHOÁN HỘ KHÔNG ĐƯỢC CHẤP NHẬN

1. **Mâu thuẫn với chủ trương**: Đi ngược với chính sách tập thể hóa toàn diện của Đảng lúc bấy giờ
2. **Lo ngại tư bản**: Sợ rằng khoán hộ sẽ dẫn đến chủ nghĩa tư bản phục hồi
3. **Bảo thủ tư tưởng**: Nhiều cán bộ lãnh đạo còn bảo thủ, chưa dám đổi mới
4. **Giáo điều**: Gắn bó quá máy móc với lý luận không phù hợp với thực tiễn Việt Nam
5. **Áp lực chính trị**: Kim Ngọc và các cán bộ Vĩnh Phúc bị phê phán, phải viết kiểm điểm

## NHỮNG NHẬN THỨC SAI LẦM CỦA ĐẢNG

1. **Tuyệt đối hóa tập thể**: Cho rằng chỉ có tập thể hóa hoàn toàn mới đúng
2. **Phủ nhận lợi ích cá nhân**: Không công nhận vai trò của lợi ích cá nhân trong động lực sản xuất
3. **Sợ "tư sản hóa"**: Lo ngại thái quá về nguy cơ phục hồi tư bản chủ nghĩa
4. **Giáo điều máy móc**: Áp dụng máy móc mô hình không phù hợp với điều kiện Việt Nam
5. **Thiếu thực tiễn**: Chưa xuất phát từ thực tiễn đất nước

## ĐẢNG ĐÃ SỬA SAI NHƯ THẾ NÀO

1. **Đổi Mới 1986**: Đại hội VI (1986) chính thức thừa nhận sai lầm và khởi động công cuộc Đổi Mới
2. **Nghị quyết 10 (1988)**: Chính thức cho phép khoán hộ trong nông nghiệp trên toàn quốc
3. **Giải phóng tư duy**: Không còn gắn bó giáo điều, xuất phát từ thực tiễn
4. **Khôi phục danh dự**: Kim Ngọc và các cán bộ Vĩnh Phúc được khôi phục danh dự, công nhận công lao
5. **Phát triển kinh tế thị trường**: Chuyển sang nền kinh tế thị trường định hướng XHCN, phát huy vai trò cá nhân

## VAI TRÒ CỦA NGUYỄN VĂN KIM NGỌC

- Bí thư Tỉnh ủy Vĩnh Phúc (1917-1979)
- Người khởi xướng và lãnh đạo chính sách khoán hộ năm 1968
- Bị phê phán và phải viết kiểm điểm vì "đi lệch hướng"
- Được khôi phục danh dự sau Đổi Mới
- Được coi là người tiên phong, có tầm nhìn xa

CHỈ TRẢ LỜI CÁC CÂU HỎI VỀ KHOÁN HỘ VĨNH PHÚC 1968. Nếu câu hỏi không liên quan, hãy lịch sự từ chối và đề nghị hỏi về chủ đề này.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();
    
    if (!message) {
      throw new Error("Message is required");
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY not configured");
    }

    // Build messages array with system context
    const messages = [
      { role: "system", content: SYSTEM_CONTEXT },
      ...conversationHistory,
      { role: "user", content: message }
    ];

    console.log("Calling Lovable AI with message:", message);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Đã đạt giới hạn yêu cầu, vui lòng thử lại sau." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Cần thêm credits để sử dụng AI." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    console.log("AI response received successfully");

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in chat-assistant:", error);
    const errorMessage = error instanceof Error ? error.message : "Đã xảy ra lỗi";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
