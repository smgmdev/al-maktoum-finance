import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const BookCallDialog = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsappNumber: "",
    areaOfInterest: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.whatsappNumber || !formData.areaOfInterest) {
      toast({
        title: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from("book_call_requests")
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          whatsapp_number: formData.whatsappNumber,
          area_of_interest: formData.areaOfInterest,
        });

      if (dbError) throw dbError;

      // Send admin notification email
      await supabase.functions.invoke("send-book-call-email", {
        body: formData,
      });

      toast({
        title: "Request submitted!",
        description: "We'll get back to you shortly.",
      });
      
      setFormData({
        fullName: "",
        email: "",
        whatsappNumber: "",
        areaOfInterest: "",
      });
      setOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to submit",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full px-8 h-12 text-sm font-medium transition-all"
        >
          Book a call
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">Book a call</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-gray-700">Full name</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Enter your full name"
              className="border-gray-300 text-gray-900"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              className="border-gray-300 text-gray-900"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsappNumber" className="text-gray-700">Whatsapp Number</Label>
            <Input
              id="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
              placeholder="Enter your WhatsApp number"
              className="border-gray-300 text-gray-900"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="areaOfInterest" className="text-gray-700">Describe your area of interest</Label>
            <Textarea
              id="areaOfInterest"
              value={formData.areaOfInterest}
              onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
              placeholder="Tell us about your requirements..."
              className="border-gray-300 text-gray-900 min-h-[100px]"
            />
          </div>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-black hover:bg-gray-800 text-white rounded-full h-12"
          >
            {isSubmitting ? "Submitting..." : "Submit request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookCallDialog;
