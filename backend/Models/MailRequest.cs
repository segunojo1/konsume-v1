﻿namespace KONSUME.Models;

public class MailRequests
{
    public string ToEmail { get; set; }
    public string HtmlContent { get; set; }
    public string Subject { get; set; }

    public string Title { get; set; }
    public string Body { get; set; }
}
public class MailRecieverDto
{
    public string Name { get; set; }
    public string Email { get; set; }
}
