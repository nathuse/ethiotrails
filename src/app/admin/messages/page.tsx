"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Mail, Phone, User, Calendar, Trash2, Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  status: "unread" | "read";
  createdAt: string;
}

export default function AdminMessagesPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  const fetchSubmissions = async () => {
    setIsLoading(true);
    try {
      const url = filter === "all" 
        ? "/api/contact-submissions" 
        : `/api/contact-submissions?status=${filter}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch submissions");
      
      const data = await response.json();
      setSubmissions(data);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      toast.error("Failed to load messages");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [filter]);

  const toggleStatus = async (id: number, currentStatus: string) => {
    try {
      const newStatus = currentStatus === "unread" ? "read" : "unread";
      const response = await fetch(`/api/contact-submissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error("Failed to update status");

      toast.success(`Marked as ${newStatus}`);
      fetchSubmissions();
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const deleteSubmission = async (id: number) => {
    if (!confirm("Are you sure you want to delete this message?")) return;

    try {
      const response = await fetch(`/api/contact-submissions/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete submission");

      toast.success("Message deleted");
      fetchSubmissions();
    } catch (error) {
      console.error("Error deleting submission:", error);
      toast.error("Failed to delete message");
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--ethiopian-green)]/10 via-[var(--ethiopian-yellow)]/10 to-[var(--ethiopian-red)]/10 border-b">
        <div className="container mx-auto max-w-7xl">
          <Link href="/">
            <Button variant="ghost" className="mb-6 hover:bg-background/50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Messages</h1>
              <p className="text-muted-foreground">
                View and manage all contact form submissions
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={filter === "unread" ? "default" : "outline"}
                onClick={() => setFilter("unread")}
                size="sm"
              >
                Unread
              </Button>
              <Button
                variant={filter === "read" ? "default" : "outline"}
                onClick={() => setFilter("read")}
                size="sm"
              >
                Read
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Messages List */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--ethiopian-green)] border-r-transparent"></div>
              <p className="mt-4 text-muted-foreground">Loading messages...</p>
            </div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-12">
              <Mail className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-lg text-muted-foreground">
                {filter === "all" 
                  ? "No messages yet" 
                  : `No ${filter} messages`}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {submissions.map((submission) => (
                <div
                  key={submission.id}
                  className={`p-6 rounded-lg border ${
                    submission.status === "unread"
                      ? "bg-[var(--ethiopian-green)]/5 border-[var(--ethiopian-green)]/20"
                      : "bg-card border-border"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    {/* Message Content */}
                    <div className="flex-1 space-y-3">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[var(--ethiopian-green)]/10 flex items-center justify-center">
                            <User className="w-5 h-5 text-[var(--ethiopian-green)]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{submission.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-3.5 h-3.5" />
                              {formatDate(submission.createdAt)}
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant={submission.status === "unread" ? "default" : "secondary"}
                          className={
                            submission.status === "unread"
                              ? "bg-[var(--ethiopian-green)] hover:bg-[var(--ethiopian-green)]/90"
                              : ""
                          }
                        >
                          {submission.status}
                        </Badge>
                      </div>

                      {/* Contact Info */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="w-4 h-4" />
                          <a
                            href={`mailto:${submission.email}`}
                            className="hover:text-[var(--ethiopian-green)] transition-colors"
                          >
                            {submission.email}
                          </a>
                        </div>
                        {submission.phone && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Phone className="w-4 h-4" />
                            <a
                              href={`tel:${submission.phone}`}
                              className="hover:text-[var(--ethiopian-green)] transition-colors"
                            >
                              {submission.phone}
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Message */}
                      <div className="pt-2">
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          Message:
                        </p>
                        <p className="text-foreground whitespace-pre-wrap">
                          {submission.message}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex lg:flex-col gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleStatus(submission.id, submission.status)}
                        className="flex-1 lg:flex-none"
                      >
                        {submission.status === "unread" ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Mark Read
                          </>
                        ) : (
                          <>
                            <X className="w-4 h-4 mr-2" />
                            Mark Unread
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteSubmission(submission.id)}
                        className="flex-1 lg:flex-none text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}